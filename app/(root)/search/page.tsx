import React from "react";
import styles from "./search.module.css";
import { GoSearch } from "react-icons/go";
import User from "@/components/search/user";
function SearchPage() {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.search_container}>
          <div className={styles.search_input}>
            <div>
              <input type="text" placeholder="Search" />
              <GoSearch size={17} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.user_container}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </>
  );
}

export default SearchPage;
