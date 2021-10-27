import { getCat } from '../clients/cataas'

type reqFormat = 'img' | 'gif'

export const findCat = async (format: reqFormat = 'img', tag: string = '', text: string = ''): Promise<any> => {
  return await getCat(format, tag, text)
}
