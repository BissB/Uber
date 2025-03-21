import React from "react";
import styles from "./picup.module.css";

const Picup = () => {
  return (
    <div className={styles.picup}>
      <i className={`fas fa-circle ${styles.circle}`} />
      <input type="text" placeholder="픽업 위치" className={styles.location} />
      {/* <div className={styles.icon}>
      <i className={`fas fa-paper-plane ${styles.plane}`} />
      </div> */}
    </div>
  );
};

export default Picup;