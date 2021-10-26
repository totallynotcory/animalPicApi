const nock = require('nock');
import * as subject from '../../src/clients/cataas'

//TODO: properly test stream returns
//  Right now, the bulk of these tests are in ensuring the nock doesn't fail.  It'd be good to add real tests for the return
describe('cat as a service', () => {
  describe('getCat', () => {
    describe('called with no input', () => {      
      beforeEach(() => {
        nock('https://cataas.com').get('/cat').reply(200)  
      });
  
      it('calls the service', async () => {
        const actual = await subject.getCat()
        expect(actual).not.toBe(null)
      });
    });

    describe('request made with a tag and text', () => {      
      beforeEach(() => {
        nock('https://cataas.com').get('/cat/cute/says/love').reply(200)  
      });
  
      it('calls the service for an img with tag and text included', async () => {
        const actual = await subject.getCat("img", "cute", "love")
        expect(actual).not.toBe(null)
      });
    });

    describe('request made for a gif', () => {      
      beforeEach(() => {
        nock('https://cataas.com').get('/cat/gif').reply(200)  
      });
  
      it('calls the service for a gif, ignoring the tag and text', async () => {
        const actual = await subject.getCat("gif", "cute", "love")
        expect(actual).not.toBe(null)
      });
    });
  });
});
