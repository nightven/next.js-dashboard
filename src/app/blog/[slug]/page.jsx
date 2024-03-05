import Image from "next/image";
import styles from "./SinglePost.module.css";
import { Suspense } from "react";
import { getPost } from "@/lib/Data";
import PostUser from "@/components/postUser/postUser";

//! FETCH DATA WITH API
// const getDate = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
//! FETCH DATA WITH API
  // const post = await getDate(slug);

  //! FETCH DATA WITHOUT API
  const post = await getPost(slug);
  
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image
            src={post.img}
            alt="dog"
            fill
            className={styles.img}
          />
        </div>
      )}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
         
          <Suspense fallback={<div>Loading ...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
