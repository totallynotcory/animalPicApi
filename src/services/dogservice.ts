import { getDog } from '../clients/dogceo'
import Request from 'got/dist/source/core'

export const findDog = async (): Promise<Request> => {
  return await getDog()
}
