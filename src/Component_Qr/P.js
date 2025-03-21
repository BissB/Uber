import styles from './Componentindex.module.css';



function P() {

    return(
        <div className= {styles.text}>
        <h3 className= {styles.innerTextheader}>Uber앱 다운로드</h3>
        <p className= {styles.innnerText}>스캔하여 다운로드하세요</p>
        </div>
    );
}


export default P;