import React from "react";
import styles from "./time.module.css";

const time = () => {
  return (
    <div className={styles.time}>
          <label htmlFor="time"></label>
          <input type="time" id="time" />
        </div>
  );
};

export default time;