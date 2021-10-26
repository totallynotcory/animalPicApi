import { getCat } from '../clients/cataas'
import Request from 'got/dist/source/core'

type reqFormat = 'img' | 'gif'

export const findCat = async (format: reqFormat = 'img', tag: string = '', text: string = ''): Promise<Request> => {
  return await getCat(format, tag, text)
}
