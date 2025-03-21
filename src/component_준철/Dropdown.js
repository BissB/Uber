import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";

const DropdownMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    console.group("clicked.");
    console.groupEnd();
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button onClick={toggleDropdown} className={styles.drop}>
        소개 &nbsp;&nbsp;
        <i className={`fas ${isOpen ? "fa-angle-up" : "fa-angle-down"}`} />
      </button>
      <div
        className={`${styles.dropdown_content} ${isOpen ? styles.show : ""}`}
      >
        <a href="https://www.uber.com/kr/ko/about/?uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615">
          회사 소개
        </a>
        <a href="https://www.uber.com/kr/ko/about/uber-offerings/?uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615">
          Uber 서비스
        </a>
        <a href="https://www.uber.com/kr/ko/about/how-does-uber-work/?uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615">
          Uber 이용 방법
        </a>
        <a href="https://www.uber.com/kr/ko/impact/?uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615">
          영향
        </a>
        <a href="https://www.uber.com/kr/ko/about/diversity/?uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615">
          다양성, 공정성, 포용성
        </a>
        <a href="https://www.uber.com/kr/ko/about/sustainability/?uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615">
          지속 가능성
        </a>
        <div className={styles.dropdown_submenu}>
          <a href="#">둘러보기<i className="fas fa-angle-right" /></a>
          <div class={styles.dropdown_submenu_content}>
            <a her="#">도시<i className="fas fa-angle-right" /></a>
          </div>
        </div>
        <a href="https://www.uber.com/ko-KR/newsroom/">뉴스룸</a>
        <a href="https://investor.uber.com/home/default.aspx">투자자 정보</a>
        <a href="https://www.uber.com/kr/ko/autonomous/?uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615">
          자율주행
        </a>
        <a
          href="https://www.uber.com/ko-KR/blog/seoul/?uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615"
          target="_blank"
        >
          블로그
        </a>
        <a href="https://www.uber.com/kr/ko/careers/?uclick_id=52d96f93-916b-4c97-94d1-f07c1ac7f615">
          채용 정보
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
