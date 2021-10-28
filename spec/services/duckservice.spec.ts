import * as randomduk from '../../src/clients/randomduk'
import * as subject from '../../src/services/duckservice'

describe('duckservice', () => {
  beforeEach(async () => {
    spyOn(randomduk, 'getDuck')
    await subject.findDuck()
  })

  it('should be true', () => {
    expect(randomduk.getDuck).toHaveBeenCalled()
  })
})
