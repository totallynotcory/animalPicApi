import { getImage } from './imagestreamer'
import Request from 'got/dist/source/core'

const url = 'https://randomfox.ca/floof/'

export const getFox = async (): Promise<Request> => {
  return await getImage(url, 'image')
}
