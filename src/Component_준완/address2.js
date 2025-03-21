import React from "react";
import styles from "./address2.module.css";

const Address2 = () => {
  return (
    <div className={styles.address}>
      <i className="fas fa-vector-square"></i>
      <input type="text" placeholder="목적지 입력" className={styles.delivery} />
    </div>
  );
};

export default Address2;