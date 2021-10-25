import * as catservice from '../../src/services/catservice'
const subject = require('../../src/factories/petfactory')
const nock = require('nock');

describe('petfactory', () => {
  describe('when provided a supported animal', () => {
    let catPics
    beforeEach(() => {
      catPics = new Promise(() => undefined)
      //@ts-ignore
      spyOn(catservice, 'findCat').and.returnValue(catPics)
    })

    it('returns that animal', () => {
      const actual = subject.getPet('cat')
      expect(catservice.findCat).toHaveBeenCalled()
      expect(actual).toEqual(catPics)
    });
  });

  describe('when provided an unsupported item', () => {
    let catPics
    beforeEach(() => {
      catPics = new Promise(() => undefined)
      spyOn(catservice, 'findCat').and.returnValue(catPics)
    });

    it('returns a picture of a cat with "whatzat" on it', () => {
      const actual = subject.getPet('giraffe')
      expect(catservice.findCat).toHaveBeenCalledWith("img", "cute", "whatzat")
      expect(actual).toEqual(catPics)
    });
  });
});