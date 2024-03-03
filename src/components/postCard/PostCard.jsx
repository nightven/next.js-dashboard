import Image from 'next/image';
import React from 'react'
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/7098048/pexels-photo-7098048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/7098048/pexels-photo-7098048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Post Card"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fugit cum hic quibusdam dolorem placeat voluptatibus! Sed a tenetur neque laboriosam aliquam dicta alias, quisquam officia perspiciatis voluptate. Eaque, assumenda.</p>
        <Link href="/blog/post" className={styles.link}>READ MORE</Link>
      </div>
    </div>
  );
}

export default PostCard