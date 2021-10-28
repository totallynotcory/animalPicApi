import * as request from 'supertest'
import * as app from '../src/app'
import * as nock from 'nock'

describe('app', () => {
  describe('for supported pets', () => {
    beforeEach(() => {
      nock('https://cataas.com').get('/cat').reply(200)
    })

    it('sends a 200', async () => {
      await request(app)
        .get('/pet/cat')
        .expect(200)
    })
  })

  describe('for unsupported pets', () => {
    beforeEach(() => {
      nock('https://cataas.com').get('/cat/cute/says/whatzat').reply(200)
    })

    it('sends back a confused cat (200)', async () => {
      await request(app)
        .get('/pet/fordpinto')
        .expect(200)
    })
  })
})
