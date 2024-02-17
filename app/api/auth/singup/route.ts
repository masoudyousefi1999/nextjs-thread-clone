import { singupValidation } from "@/utils/zodValidations";
import { NextRequest, NextResponse } from "next/server";
import usersModel from "@/models/user";
import connectToDB from "@/utils/db";
import { generateToken, hashPassword } from "@/utils/module";
import { serialize } from "cookie";

export const POST = async (req: NextRequest) => {
  const user = await req.json();
  const result = singupValidation.safeParse(user);
  if (!result.success) {
    return new Response(JSON.stringify(result.error.format()), {
      status: 406,
    });
  }
  connectToDB();
  const isUserExist = await usersModel.findOne({
    $or: [{ email: user.email }, { username: user.username }],
  });
  if (isUserExist) {
    return new Response(
      JSON.stringify({ message: "email already token for some one else" }),
      {
        status: 409,
      }
    );
  }

  const hashedPassword = await hashPassword(user.password);
  const newUser = await usersModel.create({
    username: user.username.toLowerCase(),
    email: user.email.toLowerCase(),
    password: hashedPassword,
  });
  if (newUser) {
    const userToken = generateToken({ email: user.email });
    return new Response(JSON.stringify({ message: "user created" }), {
      status: 201,
      headers: {
        "Set-Cookie": serialize("token", userToken, {
          maxAge: 60 * 60 * 24,
          httpOnly: true,
          path: "/",
        }),
      },
    });
  }
  return new Response(JSON.stringify({ message: "sever error" }), {
    status: 500,
  });
};
