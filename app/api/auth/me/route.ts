import { verifyToken } from "@/utils/module";
import { NextRequest } from "next/server";

export const POST = async (req : NextRequest) => {
    const {token} = await req.json()
    if(!token){
        return new Response("no token",{
            status : 404
        })
    }
    const isValidToken = verifyToken(token)
    if(!isValidToken){
        return new Response("not valid",{
            status : 403
        })
    }
    return new Response("ok",{
        status : 200
    })
}