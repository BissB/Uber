import React from "react";
import styles from "./picup2.module.css";

const Picup2 = () => {
  return (
    <div className={styles.picup}>
      <i className={`fas fa-circle-dot ${styles.circle}`} />
      <input type="text" placeholder="위치 입력" className={styles.location} />
      {/* <div className={styles.icon}>
      <i className={`fas fa-paper-plane ${styles.plane}`} />
      </div> */}
    </div>
  );
};

export default Picup2;