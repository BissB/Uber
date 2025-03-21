import styles from './예약_세부정보.module.css';
console.log("src/component/예약_세부정보.js");

const 예약_세부정보 = () => {
    console.log("예약_세부정보() invoked");

    return (
        <div className={styles.예약_세부정보_밖}>
            <a href="#" className={styles.예약_세부정보_안}>
            세부 정보
            </a>
        </div>
    );
} 
export default 예약_세부정보;