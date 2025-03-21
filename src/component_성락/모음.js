import {중앙, 제안} from '.';
import styles from './모음.module.css';
console.log("src/모음.js");

function 모음() {
  return (
    <div className={styles.모음}>
      <제안 />
      <중앙/>
    </div>
  );
}

export default 모음;