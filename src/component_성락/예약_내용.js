import styles from './예약_내용.module.css';
console.log("src/component/예약_내용.js");

const 예약_내용 = () => {
    console.log("예약_내용() invoked");

    return (
        <div className={styles.예약_내용}>
        차량 서비스를 미리 예약하면 여정 당일에도 편안하게 시간을 보낼 수 있습니다.
        </div>
    );
} 
export default 예약_내용;