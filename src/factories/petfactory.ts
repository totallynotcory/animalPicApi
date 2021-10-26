import { findCat } from '../services/catservice'
import { findDog } from '../services/dogservice'
import { findFox } from '../services/foxservice'
import Request from 'got/dist/source/core'

export const getPet = async (type): Promise<Request> => {
  switch (type) {
    case 'cat':
      return await findCat()
    case 'dog':
      return await findDog()
    case 'fox':
      return await findFox()
    default:
      return await findCat('img', 'cute', 'whatzat')
  }
}
