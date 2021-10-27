import got from 'got'
const cataasUrl = 'https://cataas.com/'

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

  const url = new URL(path, cataasUrl)

  return got.stream(url.toString())
}
