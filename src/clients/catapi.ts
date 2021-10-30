import { getImage } from './imagestreamer'
import Request from 'got/dist/source/core'
import { catApiUrl } from './urls'

export const getCat = async (): Promise<Request> => {
  return await getImage(catApiUrl, 'url')
}
