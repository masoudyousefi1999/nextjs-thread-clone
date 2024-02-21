import React from 'react'
import styles from "./user.module.css"
import Image from 'next/image'
import me from "@/public/images/IMG_20240106_122132_702.jpg"

function User() {
  return (
    <>
        <div className={styles.user}>
            <div className={styles.user_container}>
                <div className={styles.user_left_side}>
                    <div>
                        <Image src={me.src} alt="user profile image" width={50} height={50}/>
                    </div>
                </div>
                <div className={styles.user_right_side}>
                    <div className={styles.user_info}>
                        <span className={styles.user_username}>Masoudyousefi</span>
                        <span className={styles.user_name}>masoudyousefi</span>
                        <span className={styles.user_follower}>1000 Follower</span>
                    </div>
                    <div className={styles.follow_btn_container}>
                        <button>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default User