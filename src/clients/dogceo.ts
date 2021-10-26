import got from "got"
const url = "https://dog.ceo/api/breeds/image/random/"

export const getDog = async () => {
  const response = await got(url).json()
  //@ts-ignore
  return await got.stream(response.message)
}