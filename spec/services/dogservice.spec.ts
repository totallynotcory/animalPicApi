import * as dogceo from '../../src/clients/dogceo'
import * as subject from "../../src/services/dogservice"

describe('catservice', () => {
  beforeEach(() => {
    spyOn(dogceo, 'getDog')
    subject.findDog()
  });
  
  it('should be true', () => {
    expect(dogceo.getDog).toHaveBeenCalled();
  });
});