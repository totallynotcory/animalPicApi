import * as catservice from '../../src/services/catservice'
import * as subject from '../../src/factories/petfactory'

describe('petfactory', () => {
  describe('when provided a supported animal', () => {
    let catPics
    beforeEach(() => {
      catPics = new Promise(() => undefined)
      spyOn(catservice, 'findCat').and.returnValue(catPics)
    })

    it('returns that animal', () => {
      const nothing = subject.getPet('cat')
      expect(catservice.findCat).toHaveBeenCalled()
      expect(nothing).not.toBeNull()
    })
  })

  describe('when provided an unsupported item', () => {
    let catPics
    beforeEach(() => {
      catPics = new Promise(() => undefined)
      spyOn(catservice, 'findCat').and.returnValue(catPics)
    })

    it('returns a picture of a cat with "whatzat" on it', () => {
      const nothing = subject.getPet('giraffe')
      expect(catservice.findCat).toHaveBeenCalledWith('img', 'cute', 'whatzat')
      expect(nothing).not.toBeNull()
    })
  })
})
