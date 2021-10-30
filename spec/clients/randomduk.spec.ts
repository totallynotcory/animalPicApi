import * as subject from '../../src/clients/randomduk'
import * as nock from 'nock'
import { randomDukUrl } from '../../src/clients/urls'

describe('random duk client', () => {
  describe('getDuck', () => {
    describe('called with no input', () => {
      beforeEach(() => {
        nock(randomDukUrl).get('/').reply(200, { url: 'https://realurl.com' })
        nock('https://realurl.com').get('/').reply(200)
      })

      it('calls the client', async () => {
        const actual = await subject.getDuck()
        expect(actual).not.toBeNull()
      })
    })
  })
})
