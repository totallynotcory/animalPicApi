import * as dogceo from '../../src/clients/dogceo'
import * as subject from '../../src/services/dogservice'

describe('dogservice', () => {
  beforeEach(async () => {
    spyOn(dogceo, 'getDog')
    await subject.findDog()
  })

  it('should be true', () => {
    expect(dogceo.getDog).toHaveBeenCalled()
  })
})
