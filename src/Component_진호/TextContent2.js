import styles from "./TextContent2.module.css";
console.groupCollapsed("src/component/textcontent.js");
console.groupEnd();

function TextContent2() {
  return (
    <div>
      <div className={styles.content}>
        <div>
          <h1>어디서나 안심할 수 있는 시스템</h1>
          <p>당사는 다양한 안전 기능과 <a href="https://www.uber.com/legal/en/document/?name=general-community-guidelines&country=korea&lang=en&uclick_id=fa55c5c9-3fb9-4211-a916-df17258dd8e1" className={styles.guide}>커뮤니티 가이드라인</a>을 통해 확립한 안전 기준으로 앱의 모든 사용자를 위한 안전한 환경을 조성하고자 최선을 다하고 있습니다.</p>
        </div>
        <div className={styles.start}>
          <button className={styles.start_button}>자세히 알아보기</button>
        </div>
      </div>
      {/* // 1. TextContent 중앙 정렬
            // 2. 버튼 호버링 색깔
            // 3. 로그인 버튼 호버시 밑줄 */}
    </div>
  );
}

export default TextContent2;
