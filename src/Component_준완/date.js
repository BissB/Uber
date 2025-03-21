import React from "react";
import styles from "./date.module.css";

const Date = () => {
  return (
    <div className={styles.date}>
          <label htmlFor="date"></label>
          <input type="date" id="date" />
        </div>
  );
};

export default Date;