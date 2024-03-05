import Image from "next/image";
import styles from "./about.module.css";



const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          vitae omnis reiciendis doloremque voluptatibus necessitatibus culpa!
          Veritatis labore consectetur necessitatibus.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>10 K+</h2>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h2>10 K+</h2>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h2>10 K+</h2>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
