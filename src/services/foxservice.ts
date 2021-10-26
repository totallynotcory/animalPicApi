import { getFox } from '../clients/randomfox'
import Request from 'got/dist/source/core'

export const findFox = async (): Promise<Request> => {
  return await getFox()
}
