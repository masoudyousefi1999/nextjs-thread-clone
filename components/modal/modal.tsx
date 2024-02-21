"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./modal.module.css";
import Image from "next/image";
import me from "@/public/images/IMG_20240106_122132_702.jpg";
import changeModalStateStore from "@/utils/zudStore";
import { useRouter } from "next/navigation";

function CreateModal() {
  const ref = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()
  const isModalOpen: boolean = changeModalStateStore((state) => state.isModalOpen);
  const closeModal = changeModalStateStore((state) => state.closeModal);
  const scrollHandler = () => window.scrollTo(0, 0);
  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener("scroll", scrollHandler);
      ref.current?.focus()
    } else {
      window.removeEventListener("scroll", scrollHandler);
    }
    
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isModalOpen]);

  const [thread, setThread] = useState("")
  const addThreadHandler = async () => {
    const res = await fetch("/api/threads",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({thread})
    })
    const data = await res.json()
    closeModal()
    setThread("")
    router.refresh()
  }
  return (
    <section className={`${styles.create_modal} ${!isModalOpen ? "hide" : ""}`}>
      <div className={styles.modal_top}>
        <div className={styles.modal_top_header}>
          <button onClick={closeModal}>Cancel</button>
          <span>New Thread</span>
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
        <div className={styles.modal_top_main}>
          <div className={styles.modal_user_profile_image}>
            <div className={styles.modal_image_container}>
              <Image
                src={me.src}
                alt="user profile image"
                width={50}
                height={50}
              />
            </div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.modal_user_create_thread}>
            <span>Masoud Yousefi</span>
            <textarea
              ref={ref}
              className={styles.modal_text_area}
              placeholder="start a Thread..."
              value={thread}
              onChange={(e) => setThread(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.modal_bottom}>
        <span>Any One Can Reply</span>
        <button onClick={addThreadHandler}>Post</button>
      </div>
    </section>
  );
}

export default CreateModal;
