const url = "https://randomfox.ca/floof/"
const nock = require('nock');
import * as subject from '../../src/clients/randomfox'

describe('random fox service', () => {
  describe('getFox', () => {
    describe('called with no input', () => {      
      beforeEach(() => {
        nock(url).get('/').reply(200, { image: "https://realurl.com" })
        nock("https://realurl.com").get('/').reply(200)
      });
  
      it('calls the service', async () => {
        const actual = await subject.getFox()
        expect(actual).not.toBe(null)
      });
    });
  });
});