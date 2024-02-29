import UserStats from '@/components/profile/userStats'
import React from 'react'
import Threads from '@/components/threads/threads'
import usersModel, { IUser } from '@/models/user'
import { cookies } from 'next/headers'
import { verifyToken } from '@/utils/module'
import { NextResponse } from 'next/server'
import connectToDB from '@/utils/db'
import threadsModel from '@/models/thread'

async function Profile() {
  const coockies = cookies()
  const userToken = coockies.get("token")?.value
  if(!userToken){
    return false
  }
  const verifyedToken  = verifyToken(userToken)
  const {email} = verifyedToken
  connectToDB()
  threadsModel.on("ok", () => {

  })
  const user : IUser | null = await usersModel.findOne({email},"username email").populate("userThreads", "thread createdAt").lean().sort({createdAt : 1}) as IUser | null ;
  if(!user){
    return false
  }
  return (
    <>
      <UserStats username={user.username} email={user.email}/>
      {user.userThreads?.map( (item) => <Threads key={item._id} thread={item.thread} username={user.username} createdTime={item.createdAt} />)}
    </>
  )
}

export default Profile