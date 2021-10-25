import { findCat } from "../services/catservice"

export const getPet = type => {
  switch (type) {
    case "cat":
      return findCat();  
    default:
      return findCat("img", "cute", "whatzat")
  }
}