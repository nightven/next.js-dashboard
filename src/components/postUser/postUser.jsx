import React from "react";
import styles from "./postUser.module.css";
import Image from "next/image";
import { getUser } from "@/lib/Data";

//! FETCH DATA WITH API
// const getDate = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"}
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //! FETCH DATA WITH API
  //   const user = await getDate(userId);

  //! FETCH DATA WITHOUT API
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt="user avatar"
        width={50}
        height={50}
        className={styles.avatar}
      />

      <div className={styles.text}>
        <span className={styles.title}>Author</span>
        <span className={styles.userName}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
