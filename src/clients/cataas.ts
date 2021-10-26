import got from "got"
const cataasUrl = 'https://cataas.com/'

type reqFormat = 'img' | 'gif'

export const getCat = async (format: reqFormat = "img", tag: string = '', text: string = '') => {
  let path = '/cat'
  if(format === 'gif') {
    path += `/gif`
  } else {
    if(tag) {
      path += `/${tag}`
    }
    if(text) {
      path += `/says/${text}`
    }
  }
  

  let url = new URL(path, cataasUrl)  

  return got.stream(url.toString());
}
