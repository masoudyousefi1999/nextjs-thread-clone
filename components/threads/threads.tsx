import React, { useEffect } from "react";
import styles from "./threads.module.css";
import me from "@/public/images/IMG_20240106_122132_702.jpg";
import Image from "next/image";

type propsType = {
  thread: string;
  username: string;
};

function Threads({ thread, username }: propsType) {
  return (
    <>
      <section className={styles.thread}>
        <div className={styles.thread_container}>
          <div className={styles.thread_left_side}>
            <div className={styles.user_profile_image_container}>
              <Image
                src={me.src}
                width={70}
                height={70}
                alt="user profile image"
              />
            </div>
            <div className={styles.image_under_line}></div>
          </div>
          <div className={styles.thread_right_side}>
            <div className={styles.username_and_time}>
              <span className={styles.username}>{username}</span>
              <div className={styles.time}>
                <span>1w</span>
                <div className={styles.more_icon_container}>
                  <svg
                    aria-label="More"
                    role="img"
                    viewBox="0 0 24 24"
                    className={styles.more_icon}
                    style={{
                      fill: "currentColor",
                      height: "25px",
                      width: "25px",
                    }}
                  >
                    <title>More</title>
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6" cy="12" r="1.5"></circle>
                    <circle cx="18" cy="12" r="1.5"></circle>
                  </svg>
                </div>
              </div>
            </div>
            <span className={styles.thread_text}>{thread}</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Threads;
