import { verifyToken } from "@/utils/module";
import { NextRequest } from "next/server";

export const GET = (req : NextRequest) => {
    const token = req.cookies.get("token")
    console.log(token)
}