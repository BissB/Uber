import styles from './차량_그림.module.css';
import img from './img/ride.png'
console.log("src/component/차량_그림.js");

const 차량_그림 = () => {
    console.log("차량_그림() invoked");

    return (
        <div>
            <img src={img} alt="차량_그림" className={styles.차량_그림}/>
        </div>
    );
} 
export default 차량_그림;