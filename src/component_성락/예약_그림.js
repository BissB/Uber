import styles from './예약_그림.module.css';
import img from './img/reserve_clock.png';
console.log("src/component/예약_그림.js");

const 예약_그림 = () => {
    console.log("예약_그림() invoked");

    return (
        <div>
            <img src={img} alt="예약_그림" className={styles.예약_그림}/>
        </div>
    );
} 
export default 예약_그림;