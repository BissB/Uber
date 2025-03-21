import React from "react";
import styles from "./button.module.css";

const Button = () => {
  return (
    <div className={styles.button}>
      <button>요금 보기</button>
    </div>
  );
};

export default Button;