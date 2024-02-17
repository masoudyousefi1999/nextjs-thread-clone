import usersModel from "@/models/user";
import connectToDB from "@/utils/db";
import { comparePassword, generateToken } from "@/utils/module";
import { loginValidation } from "@/utils/zodValidations";
import { serialize } from "cookie";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { identifire, password } = await req.json();
  const validateUser = loginValidation.safeParse({ identifire, password });
  if (!validateUser.success) {
    return new Response(JSON.stringify(validateUser.error.format()), {
      status: 401,
    });
  }
  connectToDB();
  const currentUser = await usersModel.findOne({
    $or: [{ username: identifire }, { email: identifire }],
  });

  if (!currentUser) {
    return new Response(JSON.stringify({ message: "user not found" }), {
      status: 404,
    });
  }
  const isPasswordValid = await comparePassword(password, currentUser.password);
  if (!isPasswordValid) {
    return new Response(
      JSON.stringify({ message: "username or password wrong" }),
      {
        status: 401,
      }
    );
  }

  const token = generateToken({ email: currentUser.email });
  return new Response("successful", {
    status: 200,
    headers: {
      "Set-Cookie": serialize("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        path: "/",
      }),
    },
  });
};
        