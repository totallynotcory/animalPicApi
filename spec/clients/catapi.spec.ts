import * as subject from '../../src/clients/catapi'
import * as nock from 'nock'
import { catApiUrl } from '../../src/clients/urls'

describe('cat api client', () => {
  describe('getCat', () => {
    describe('called with no input', () => {
      beforeEach(() => {
        nock(catApiUrl).get('/').reply(200, { url: 'https://realurl.com' })
        nock('https://realurl.com').get('/').reply(200)
      })

      it('calls the service', async () => {
        const actual = await subject.getCat()
        expect(actual).not.toBeNull()
      })
    })
  })
})
