import usersModel from "@/models/user"
import connectToDB from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req : NextRequest) => {
    const search = req.nextUrl.searchParams.get("search")
    connectToDB()
    const users = await usersModel.find({ username: { $regex: `^${search}`, $options: 'i' } }).lean();
    return new NextResponse(JSON.stringify(users))
}
