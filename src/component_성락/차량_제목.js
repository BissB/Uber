import styles from './예약_제목.module.css';
console.log("src/component/차량_제목.js");

const 차량_제목 = () => {
    console.log("차량_제목() invoked");

    return (
        <div className={styles.차량_제목}>
        차량 서비스
        </div>
    );
} 
export default 차량_제목;