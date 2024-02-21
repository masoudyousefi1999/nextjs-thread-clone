import UserStats from '@/components/profile/userStats'
import React from 'react'
import Threads from '@/components/threads/threads'

function Profile() {
  return (
    <>
      <UserStats />
      <Threads thread="hi this is my first threads" username='masoud0098' createdTime={new Date("2024-02-20T15:26:12.857Z")} />
    </>
  )
}

export default Profile