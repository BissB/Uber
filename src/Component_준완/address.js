import React from "react";
import styles from "./address.module.css";

const Address = () => {
  return (
    <div className={styles.address}>
      <i className="fas fa-square-full"></i>
      <input type="text" placeholder="배달 주소" className={styles.delivery} />
    </div>
  );
};

export default Address;