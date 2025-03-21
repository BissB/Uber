import styles from './차량_내용.module.css';
console.log("src/component/차량_내용.js");

const 차량_내용 = () => {
    console.log("차량_내용() invoked");

    return (
        <div className={styles.차량_내용}>
        Uber로 어디로든 이동하세요. 차량 서비스를 요청하고 목적지까지 이동하세요.
        </div>
    );
} 
export default 차량_내용;