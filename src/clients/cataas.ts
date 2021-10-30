import got from 'got'
import { catAasUrl } from './urls'

type reqFormat = 'img' | 'gif'

export const getCat = async (format: reqFormat = 'img', tag: string = '', text: string = ''): Promise<any> => {
  let path = '/cat'
  if (format === 'gif') {
    path += '/gif'
  } else {
    if (tag !== '' && tag !== null) {
      path += `/${tag}`
    }
    if (text !== '' && text !== null) {
      path += `/says/${text}`
    }
  }

  const url = new URL(path, catAasUrl)

  return got.stream(url.toString())
}
