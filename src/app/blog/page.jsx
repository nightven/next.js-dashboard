import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
const BlogPage = () => {
  return (
    <div className={styles.container}>
      <dir className={styles.post}>
        <PostCard />
      </dir>
      <dir className={styles.post}>
        <PostCard />
      </dir>
      <dir className={styles.post}>
        <PostCard />
      </dir>
      <dir className={styles.post}>
        <PostCard />
      </dir>
    </div>
  );
};

export default BlogPage;
