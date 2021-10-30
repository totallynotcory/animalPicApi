import * as subject from '../../src/clients/dogceo'
import * as nock from 'nock'
const url = 'https://dog.ceo/api/breeds/image/random'

describe('dog ceo client', () => {
  describe('getDog', () => {
    describe('called with no input', () => {
      beforeEach(() => {
        nock(url).get('/').reply(200, { message: 'https://realurl.com' })
        nock('https://realurl.com').get('/').reply(200)
      })

      it('calls the client', async () => {
        const actual = await subject.getDog()
        expect(actual).not.toBeNull()
      })
    })
  })
})
