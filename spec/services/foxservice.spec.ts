import * as randomfox from '../../src/clients/randomfox'
import * as subject from "../../src/services/foxservice"

describe('catservice', () => {
  beforeEach(() => {
    spyOn(randomfox, 'getFox')
    subject.findFox()
  });
  
  it('should be true', () => {
    expect(randomfox.getFox).toHaveBeenCalled();
  });
});