import Threads from "@/components/threads/threads";
import styles from "./page.module.css";
import connectToDB from "@/utils/db";
import threadsModel from "@/models/thread";
import usersModel from "@/models/user";

export const dynamic = 'force-dynamic'

export default async function Home() {
  connectToDB()
  usersModel.on("ok", () => {
    console.log("user model created")
  })
  const threads = await threadsModel.find({},"thread createdAt").sort({createdAt : -1}).populate("user","username")
  console.log(threads)
  return (
    <>
      <div className={styles.threads_container}>
      {threads.map((thread) => <Threads thread={thread.thread} username={thread.user.username} key={thread._id} createdTime={thread.createdAt} />)}
      </div>
    </>
  );
}
