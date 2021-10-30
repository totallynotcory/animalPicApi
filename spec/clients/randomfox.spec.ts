import * as subject from '../../src/clients/randomfox'
import * as nock from 'nock'
import { randomFoxUrl } from '../../src/clients/urls'

describe('random fox client', () => {
  describe('getFox', () => {
    describe('called with no input', () => {
      beforeEach(() => {
        nock(randomFoxUrl).get('/').reply(200, { image: 'https://realurl.com' })
        nock('https://realurl.com').get('/').reply(200)
      })

      it('calls the client', async () => {
        const actual = await subject.getFox()
        expect(actual).not.toBeNull()
      })
    })
  })
})
