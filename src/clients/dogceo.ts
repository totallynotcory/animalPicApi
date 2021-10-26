import { getImage } from "./imagestreamer"
const url = "https://dog.ceo/api/breeds/image/random/"

export const getDog = async () => {
  return await getImage(url, "message")
}