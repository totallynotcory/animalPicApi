import got from "got"

export const getImage = async (url, responseObjKeyName) => {
  const response = await got(url).json()
  //@ts-ignore
  return await got.stream(response[responseObjKeyName])
}