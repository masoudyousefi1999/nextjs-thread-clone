"use client";
import React, { useRef } from "react";
import styles from "./editModal.module.css";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import me from "@/public/images/IMG_20240106_122132_702.jpg";

function EditModal({
  modalState,
  closeModal,
}: {
  modalState: boolean;
  closeModal: () => void;
}) {
  const image_input = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`${styles.edit_modal} ${modalState == false ? "hide" : ""}`}
    >
      <div className={styles.edit_modal_container}>
        <div className={styles.edit_modal_header}>
          <div className={styles.edit_modal_header_left}>
            <IoMdClose size={23} onClick={() => closeModal()} />
            <span>Edit Profile</span>
          </div>
          <div className={styles.edit_modal_header_right}>
            <span>Done</span>
          </div>
        </div>
        <div className={styles.edit_user_section}>
          <div>
            <input type="text" id="username" required={true} />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input type="text" id="email" required={true} />
            <label htmlFor="email">email</label>
          </div>
          <div className={styles.user_Profile}>
            <div>
              <Image
                src={me.src}
                width={60}
                height={60}
                alt="user profile image"
              />
            </div>
            <button>change Profile</button>
            <input type="file" hidden ref={image_input} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
