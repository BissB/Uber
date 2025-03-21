import {예약_제목, 예약_내용, 예약_세부정보, 예약_그림} from '.';
import styles from './예약_박스.module.css';
console.log("src/component/예약_박스.js");

const 예약_박스 = () => {
    console.log("예약_박스() invoked");

    return (
        <a href='#' className={styles.예약_박스_밖}>
            <div className={styles.text}>
            <예약_제목/>
            <예약_내용/>
            <예약_세부정보/>
            </div>
            <div className={styles.예약_박스_안}>
            <예약_그림/>
            </div>
        </a>
    );
} 
export default 예약_박스;