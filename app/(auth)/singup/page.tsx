"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import styles from "./singup.module.css";
import { useRouter } from "next/navigation";

function Singup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/auth/singup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (res.status == 201) {
      toast.success("account created successfuly", {
        position: "top-center",
        closeButton: false,
        pauseOnHover: false,
        theme: "dark",
        pauseOnFocusLoss : false
      });
      setUsername("");
      setEmail("");
      setPassword("");
      router.replace("/");
    } else if (res.status == 409) {
      toast.warn("username or email already token by some one else ..!", {
        position: "top-center",
        closeButton: false,
        pauseOnHover: false,
        theme: "dark",
        pauseOnFocusLoss : false
      });
    } else {
      toast.error("error happend please try again", {
        position: "top-center",
        closeButton: false,
        pauseOnHover: false,
        theme: "dark",
        pauseOnFocusLoss : false
      });
    }
  };

  return (
    <>
      <div className={styles.singup}>
        <ToastContainer />
        <div className={styles.singup_container}>
          <div className={styles.singup_text_container}>
            <span>signup</span>
          </div>
          <form className={styles.singup_form} onSubmit={(e) => handler(e)}>
            <div className={styles.input_box_container}>
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </div>
            <div className={styles.input_box_container}>
              <input
                id="email"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.input_box_container}>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <input className={styles.btn} type="submit" value="Singup" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Singup;
