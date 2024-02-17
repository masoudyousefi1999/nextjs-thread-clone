"use client"
import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


function Login() {
  const [identifire,setIdentifier] = useState("")
  const [password,setPassword] = useState("")
  const router = useRouter()
  const handler = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch("/api/auth/login",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({identifire,password})
    })
    if(res.status == 200){
      toast.success("login successfuly",{
        closeButton : false,
        position : "top-center",
        pauseOnHover : false,
        theme : "dark",
        pauseOnFocusLoss : false
      })
        router.replace("/")
    }else{
      toast.warn("username or password is wrong",{
        closeButton : false,
        position : "top-center",
        pauseOnHover : false,
        theme : "dark",
        pauseOnFocusLoss : false
      })
    }
  }
  
  return (
    <div className={styles.login}>
      <div className={styles.login_container}>
        <div className={styles.login_text_container}>
          <span>Login</span>
        </div>
        <form className={styles.login_form} onSubmit={handler}>
          <div className={styles.input_box_container}>
            <input id="username" type="text" required value={identifire} onChange={(e) => setIdentifier(e.target.value)} />
            <label htmlFor="username">Enter Username Or Email</label>
          </div>
          <div className={styles.input_box_container}>
            <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password">Enter your Password </label>
          </div>
          <input className={styles.btn} type="submit" value="Singin" />
        </form>

        <span className={styles.singup_link}>
          dont have a acount yet? <Link href="/singup">Singup Now</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
