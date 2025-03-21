import React from "react";
import styles from "./image.module.css";
// import driverimage from'./view-from-senior-businessman-official-clothes-driving-modern-new-car.jpg';
import taxi from "./img/img.png";

console.groupCollapsed("src/component/image.js");
console.groupEnd();

function Image() {
  return (
    <div className={styles.taxi_image}>
      {/* <img src={taxi} alt="taxi picture" /> */}
    </div>
  );
}

export default Image;
