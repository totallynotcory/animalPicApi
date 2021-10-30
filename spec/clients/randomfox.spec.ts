import * as subject from '../../src/clients/randomfox'
import * as nock from 'nock'
const url = 'https://randomfox.ca/floof/'

describe('random fox client', () => {
  describe('getFox', () => {
    describe('called with no input', () => {
      beforeEach(() => {
        nock(url).get('/').reply(200, { image: 'https://realurl.com' })
        nock('https://realurl.com').get('/').reply(200)
      })

      it('calls the client', async () => {
        const actual = await subject.getFox()
        expect(actual).not.toBeNull()
      })
    })
  })
})
