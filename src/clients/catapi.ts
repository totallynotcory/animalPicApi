import { getImage } from './imagestreamer'
import Request from 'got/dist/source/core'
const url = "https://thatcopy.pw/catapi/rest/"

export const getCat = async (): Promise<Request> => {
  return await getImage(url, 'url')
}
