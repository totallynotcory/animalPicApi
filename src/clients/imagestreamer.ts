import got from 'got'
import Request from 'got/dist/source/core'

export const getImage = async (url, responseObjKeyName): Promise<Request> => {
  const response = await got(url).json()
  // @ts-expect-error
  return got.stream(response[responseObjKeyName])
}
