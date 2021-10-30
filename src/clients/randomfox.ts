import { getImage } from './imagestreamer'
import Request from 'got/dist/source/core'
import { randomFoxUrl } from './urls'

export const getFox = async (): Promise<Request> => {
  return await getImage(randomFoxUrl, 'image')
}
