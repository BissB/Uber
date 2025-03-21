import styles from './차량_세부정보.module.css';
console.log("src/component/차량_세부정보.js");

const 차량_세부정보 = () => {
    console.log("차량_세부정보() invoked");

    return (
        <div className={styles.차량_세부정보_밖}>
            <a href="#" className={styles.차량_세부정보_안}>
            세부 정보
            </a>
        </div>
    );
} 
export default 차량_세부정보;