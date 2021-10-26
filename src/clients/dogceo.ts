import { getImage } from './imagestreamer'
import Request from 'got/dist/source/core'
const url = 'https://dog.ceo/api/breeds/image/random/'

export const getDog = async (): Promise<Request> => {
  return await getImage(url, 'message')
}
