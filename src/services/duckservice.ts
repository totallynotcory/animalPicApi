import { getDuck } from '../clients/randomduk'

export const findDuck = async (): Promise<any> => {
  return await getDuck()
}
