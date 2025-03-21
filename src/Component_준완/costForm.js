import React from "react";
import { Title2, Pic2, Add2, Button2, Img } from ".";
import styles from "./costForm.module.css";

const CostForm = () => {
  return (
    <div className={styles.back} style={{ backgroundColor: "black" }}>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <Title2 />
          <p>Uber Taxi로 안전하고 편안하게 이동하세요.</p>
          <Pic2 />
          <Add2 />
          <div className= {styles.button}>
          <Button2 />
          <span href="#">Uber Taxi 앱 다운로드</span>
          </div>
        </div>
        <div className={styles.img}>
          <Img />
        </div>
      </div>
    </div>
  );
};

export default CostForm;
