import { findCat } from '../services/catservice'
import { findDog } from '../services/dogservice'
import { findFox } from '../services/foxservice'
import { findDuck } from '../services/duckservice'
import Request from 'got/dist/source/core'

export const getPet = async (type): Promise<Request> => {
  switch (type) {
    case 'cat':
      return await findCat()
    case 'dog':
      return await findDog()
    case 'fox':
      return await findFox()
    case 'duck':
      return await findDuck()
    default:
      return await findCat('img', 'cute', 'whatzat')
  }
}
