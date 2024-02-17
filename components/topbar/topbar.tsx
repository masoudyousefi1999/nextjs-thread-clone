import React from 'react';
import logo from "@/public/images/threads-app-icon.svg";
import styles from "./topbar.module.css"

function TopBar() {
  return (
    <header className={styles.header}>
        <section className={styles.header_section}>
            <img src={logo.src} alt="" />
        </section>
    </header>
  )
}

export default TopBar