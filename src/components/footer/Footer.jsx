import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>TeamForce</div>
      <div className={styles.text}>
        TeamForce thought agency All rights reserved
      </div>
    </div>
  );
};

export default Footer;
