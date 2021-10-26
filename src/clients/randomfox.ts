const url = "https://randomfox.ca/floof/"
import { getImage } from "./imagestreamer"

export const getFox = async () => {
  return await getImage(url, "image")
}