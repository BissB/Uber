import React from "react";
import styles from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={styles.logo}>
      <a href="/">Uber</a>
    </div>
  );
};

export default Logo;
