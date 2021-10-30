import * as subject from '../../src/clients/dogceo'
import * as nock from 'nock'
const url = 'https://thatcopy.pw/catapi/rest/'

describe('cat api client', () => {
  describe('getCat', () => {
    describe('called with no input', () => {
      beforeEach(() => {
        nock(url).get('/').reply(200, { message: 'https://realurl.com' })
        nock('https://realurl.com').get('/').reply(200)
      })

      it('calls the service', async () => {
        const actual = await subject.getDog()
        expect(actual).not.toBeNull()
      })
    })
  })
})
