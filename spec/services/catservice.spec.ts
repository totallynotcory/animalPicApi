import * as cataas from '../../src/clients/cataas'
import * as subject from "../../src/services/catservice"

describe('catservice', () => {
  beforeEach(() => {
    spyOn(cataas, 'getCat')
    subject.findCat()
  });
  
  it('should be true', () => {
    expect(cataas.getCat).toHaveBeenCalled();
  });
});