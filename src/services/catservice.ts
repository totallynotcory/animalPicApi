import { getCat } from '../clients/cataas'

type reqFormat = 'img' | 'gif'

export const findCat = (format: reqFormat = "img", tag: string = '', text: string = '') => {
  return getCat(format, tag, text)
}