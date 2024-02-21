"use client";
import React, { useState } from "react";
import styles from "./userStats.module.css";
import { TfiWorld } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import Image from "next/image";
import me from "@/public/images/IMG_20240106_122132_702.jpg";
import EditModal from "../editModal/editModal";

function UserStats() {
  const [modalState, setModaleState] = useState(false);
  const closeModal = () => setModaleState(false);
  return (
    <>
      <div className={styles.user_profile}>
        <div className={styles.user_profile_container}>
          <div className={styles.user_profile_header}>
            <div className={styles.left_side}>
              <TfiWorld size={23} />
            </div>
            <div className={styles.right_side_side}>
              <FaInstagram size={23} />
              <CgDetailsMore size={23} />
            </div>
          </div>
          <div className={styles.user_info}>
            <div className={styles.user_info_username}>
              <span>MasoudYousefi</span>
            </div>
            <div className={styles.user_info_profile}>
              <div>
                <Image
                  src={me.src}
                  width={80}
                  height={80}
                  alt="user profile image"
                />
              </div>
            </div>
            <div className={styles.user_info_email}>
              <span>masoudyousefi@gmail.com</span>
            </div>
          </div>
          <div className={styles.edit_profile_section}>
            <button onClick={() => setModaleState(true)}>Edit Profile</button>
            <button>Share Profile</button>
          </div>
          <div className={styles.thread_section}>
            <div className={styles.thread_section_header}>
              <span className={styles.thread_section_text}>Threads</span>
              <span>Replies</span>
              <span>Reposts</span>
            </div>
          </div>
        </div>
      </div>
      <EditModal modalState={modalState} closeModal={closeModal} />
    </>
  );
}

export default UserStats;
