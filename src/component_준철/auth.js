import React from "react";
import styles from "./auth.module.css";

const Auth = (props) => {
  return (
    <div className={styles.auth}>
      <button className={styles.loginbtn}>
        <i className="fas fa-globe" />
        &nbsp; KO-KR
      </button>
      <button onClick={() => window.location.href = 'https://help.uber.com/?uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615'} className={styles.loginbtn}>고객지원</button>
      <button onClick={() => window.location.href = 'https://auth.uber.com/v2?next_url=https%3A%2F%2Fwww.uber.com%2Flogin&uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615&marketing_vistor_id=b7c7bbc5-31d6-4217-bd58-d080e8ab28e2'} className={styles.loginbtn}>로그인</button>
      <button className={styles.signupbtn}>가입하기</button>
    </div>
  );
};

export default Auth;