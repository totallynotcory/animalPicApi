import { getImage } from './imagestreamer'
import Request from 'got/dist/source/core'
import { dogCeoUrl } from './urls'

export const getDog = async (): Promise<Request> => {
  return await getImage(dogCeoUrl, 'message')
}
