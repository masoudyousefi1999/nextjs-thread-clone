import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const comparePassword = async (password: string, hashedPassword: string) => {
  const result = await compare(password, hashedPassword);
  return result;
};

const generateToken = (data: object) => {
  const token = sign({ ...data }, "asdfacdsgfasdfzadsfcsdz", {
    expiresIn: "24h",
  });
  return token;
};

const verifyToken = (token: string) => {
  try {
    const veryfied = verify(token, "asdfacdsgfasdfzadsfcsdz");
    return veryfied;
  } catch (error) {
    console.log("your token is not valid");
  }
};

const checkUserLogin = (token: string) => {
  const tokenValidation = verifyToken(token);
    if(token){
      return tokenValidation
    }
    return false
};

export {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
  checkUserLogin,
};
