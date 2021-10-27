import { getFox } from '../clients/randomfox'

export const findFox = async (): Promise<any> => {
  return await getFox()
}
