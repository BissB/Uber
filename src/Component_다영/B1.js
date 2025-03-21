import styles from './B1.module.css';

function B1() {
    return (
        <div className={styles.b1a}>
            <div className={styles.b1b}>
                <div>
                    <div className={styles.b1c}>기업정보</div>
                </div>
                <p>회사소개</p>
                <p >뉴스룸</p>
                <p>투자자</p>
                <p>블로그</p>
                <p>채용정보</p>
            </div>
            <div className={styles.b1b}>
                <div>
                    <div className={styles.b1c}>제품</div>
                </div>
                <p>차량 서비스</p>
                <p>운행</p>
            </div>
            <div className={styles.b1b}>
                <div>
                    <div className={styles.b1c}>세계 시민 의식</div>
                </div>
                <p>안전</p>
                <p>다양성과 포용성</p>
                <p>지속 가능성</p>
            </div>
            <div className={styles.b1b}>
                <div>
                    <div className={styles.b1c}>출장</div>
                </div>
                <p>예약</p>
                <p>도시</p>
            </div>
        </div>
    );
}

export default B1;