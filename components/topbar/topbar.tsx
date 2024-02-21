import React from 'react';
import logo from "@/public/images/threads-app-icon.svg";
import styles from "./topbar.module.css"
import Link from 'next/link';

function TopBar() {
  return (
    <header className={styles.header}>
        <Link href={"/"}>
        <div className={styles.header_section}>
            <img src={logo.src} alt="website logo" />
        </div>
        </Link>
    </header>
  )
}

export default TopBar