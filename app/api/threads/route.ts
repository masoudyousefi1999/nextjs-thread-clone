import threadsModel from "@/models/thread";
import usersModels from "@/models/user";
import connectToDB from "@/utils/db";
import { checkUserLogin } from "@/utils/module";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    connectToDB();
    const threads = await threadsModel.find({});
    return new NextResponse(JSON.stringify({threads}))
}


export const POST = async (req : NextRequest) => {
    const userToken = req.cookies.get("token")?.value
    if(!userToken){
        return NextResponse.redirect(new URL("/login",req.url))
    }
    const currentUser : any = checkUserLogin(userToken)
    if(!currentUser){
        return NextResponse.redirect(new URL("/login",req.url))
    }
    connectToDB()
    const {thread} = await req.json();
    const user = await usersModels.findOne({email : currentUser.email})
    const newThread = await threadsModel.create({thread,user : user._id})
    return new Response(JSON.stringify({newThread}),{
        status : 201
    })
}