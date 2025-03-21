import styles from "./TextContent1.module.css";
console.groupCollapsed("src/component/textcontent.js");
console.groupEnd();

function TextContent1() {
  return (
    <div>
      <div className={styles.content}>
        <div>
          <h1>원하는 시간에, 원하는 만큼 운행하며 수입을 올리세요</h1>
          <p>원하는 시간에 운행하며 수입을 올려보세요.</p>
        </div>
        <div className={styles.start}>
          <button className={styles.start_button}>시작하기</button>
          <a className={styles.learn_more_button}>
            이미 계정이 있나요? 로그인
          </a>
        </div>
      </div>
      {/* // 1. TextContent 중앙 정렬
            // 2. 버튼 호버링 색깔
            // 3. 로그인 버튼 호버시 밑줄 */}
    </div>
  );
}

export default TextContent1;
