import React, { useEffect } from "react";
import styles from "./threads.module.css";
import me from "@/public/images/IMG_20240106_122132_702.jpg";
import Image from "next/image";

type propsType = {
  thread: string;
  username: string;
  createdTime: Date;
};

const calculateTime: (time: number) => string = (time) => {
  if (time < 1) {
    return "1m";
  } else if (time <= 59) {
    return `${time}m`;
  } else if (time >= 60) {
    time = Math.floor(time / 60);
    if (time >= 24) {
      time = Math.floor(time / 24);
      return `${time}d`;
    }
    return `${time}h`;
  }
  return "1m";
};

function Threads({ thread, username, createdTime }: propsType) {
  const threadCreatdTime = createdTime.getTime();
  const currentDate = Date.now();
  const timeDiffrence = currentDate - threadCreatdTime;
  let threadsTime = Math.floor(timeDiffrence / (1000 * 60)); // threads time in minuts
  const threadPostedTime = calculateTime(threadsTime);
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
                <span>{threadPostedTime}</span>
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
