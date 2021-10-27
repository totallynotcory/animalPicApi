import { getDog } from '../clients/dogceo'

export const findDog = async (): Promise<any> => {
  return await getDog()
}
