import { z } from "zod";

const singupValidation = z.object({
  username : z.string().trim().min(4).max(50),
  email : z.string().trim().min(4).max(50),
  password : z.string().trim().min(4).max(50)
})

const loginValidation = z.object({
  identifire : z.string().trim().min(4).max(50),
  password : z.string().trim().min(4).max(50)
})

export {singupValidation, loginValidation}
