import {차량_제목, 차량_내용, 차량_세부정보, 차량_그림} from '.';
import styles from './차량_박스.module.css';
console.log("src/component/차량_박스.js");

const 차량_박스 = () => {
    console.log("차량_박스() invoked");

    return (
        <a href='#' className={styles.차량_박스_밖}>
            <div className={styles.text}>
            <차량_제목/>
            <차량_내용/>
            <차량_세부정보/>
            </div>
            <div className={styles.차량_박스_안}>
            <차량_그림/>
            </div>
        </a>
    );
} 
export default 차량_박스;