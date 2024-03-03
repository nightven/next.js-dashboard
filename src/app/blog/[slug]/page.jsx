import Image from "next/image";
import styles from "./SinglePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/7098048/pexels-photo-7098048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/7098048/pexels-photo-7098048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="dog"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/7098048/pexels-photo-7098048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/7098048/pexels-photo-7098048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora eius cupiditate doloremque quisquam sint explicabo ipsum ut nam, cumque sequi quas assumenda. Harum earum eveniet laborum, perferendis, molestias expedita optio, aperiam molestiae vitae repellendus et illo facilis hic vero.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
