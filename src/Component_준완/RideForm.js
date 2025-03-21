import React from "react";
import { Title, Pic, Add, Date, Time, Button, Map } from '.';
import styles from "./RideForm.module.css";

const RideForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <Title />
        <Pic />
        <Add />
        <div className={styles.datetime_container}>
          <Date />
          <Time />
        </div>
        <Button />
      </div>
      <div className={styles.map_container}>
        <Map />
      </div>
    </div>
  );
};

export default RideForm;