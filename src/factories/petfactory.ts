import { findCat } from "../services/catservice"
import { findDog } from "../services/dogservice"
import { findFox } from "../services/foxservice"

export const getPet = type => {
  switch (type) {
    case "cat":
      return findCat();  
    case "dog":
      return findDog();  
    case "fox":
      return findFox();  
    default:
      return findCat("img", "cute", "whatzat")
  }
}