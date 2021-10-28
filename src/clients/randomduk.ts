import { getImage } from './imagestreamer'
import Request from 'got/dist/source/core'
const url = 'https://random-d.uk/api/v2/quack/'

export const getDuck = async (): Promise<Request> => {
  return await getImage(url, 'url')
}
