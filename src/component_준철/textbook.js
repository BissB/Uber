import React from 'react';
import styles from './textbook.module.css';


const TextBook = (props) => {
    return(
        <p className={styles.textbook}>UT LLC 및 그 제휴사는 기술 서비스 제공업체일 뿐이며, UT LLC와 제휴사 어느 측도 운송 서비스를 제공하지 않습니다. 운송 서비스는 독립적인 제3자 서비스 제공업체가 운송 서비스를 필요로 하는 최종 사용자에게 직접 제공하며, UT LLC 또는 그 제휴사는 운송 관련 요금으로 수익을 올리지 않습니다. 오해의 소지가 없도록 분명히 하자면, 이러한 최종 사용자를 '고객'이라고 지칭한다고 해서 어떠한 상황에서도 Uber와 최종 사용자 간의 고객 관계를 암시하는 것은 아닙니다(한국 법률 또는 회계 원칙의 모든 측면을 포함하되 이에 국한되지 않음).</p>
    );
};

export default TextBook;