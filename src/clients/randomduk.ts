import { getImage } from './imagestreamer'
import Request from 'got/dist/source/core'
import { randomDukUrl } from './urls'

export const getDuck = async (): Promise<Request> => {
  return await getImage(randomDukUrl, 'url')
}
