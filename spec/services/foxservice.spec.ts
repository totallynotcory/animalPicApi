import * as randomfox from '../../src/clients/randomfox'
import * as subject from '../../src/services/foxservice'

describe('foxservice', () => {
  beforeEach(async () => {
    spyOn(randomfox, 'getFox')
    await subject.findFox()
  })

  it('should be true', () => {
    expect(randomfox.getFox).toHaveBeenCalled()
  })
})
