import { findCat } from "../services/catservice"
import { findDog } from "../services/dogservice"

export const getPet = type => {
  switch (type) {
    case "cat":
      return findCat();  
    case "dog":
      return findDog();  
    default:
      return findCat("img", "cute", "whatzat")
  }
}