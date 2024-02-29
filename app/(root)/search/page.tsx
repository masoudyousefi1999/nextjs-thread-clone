"use client"
import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { GoSearch } from "react-icons/go";
import User from "@/components/search/user";
import { Span } from "next/dist/trace";
import { IUser } from "@/models/user";
function SearchPage() {
  const [userSearch,setUserSearch] = useState("")
  const [users,setUsers] = useState<IUser[] | []>([])
  useEffect( () => {
    const getUsers = async () => {
      if(userSearch){

        const res = await fetch(`http://localhost:3000/api/getusers?search=${userSearch}`);
        const users =  await res.json();
        setUsers(users)
      }else{
        setUsers([])
        return false;
      }
      
    }
    getUsers()
  },[userSearch])
  return (
    <>
      <div className={styles.search}>
        <div className={styles.search_container}>
          <div className={styles.search_input}>
            <div>
              <input type="text" placeholder="Search" value={userSearch} onChange={(e) => setUserSearch(e.target.value)}/>
              <GoSearch size={17} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.user_container}>
        {users.length > 0 ? 
        users.map( user => {
          return <User key={user._id} username={user.username} email={user.email} />
      })
        :
          (<span className={styles.no_user}>no user found</span>)
        }
      </div>
    </>
  );
}

export default SearchPage;
