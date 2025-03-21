import {제안, 차량_박스, 예약_박스,} from '.';
import styles from './중앙.module.css';
console.log("src/component/중앙.js");

const 중앙 = () => {
    console.log("중앙() invoked");

    return (
        <div className={styles.중앙}>
        <차량_박스/>
        <예약_박스/>
        </div>
    );
} 
export default 중앙;