import React from "react";
import styles from "./Header.module.css";
import { Auth, Dropdown, Logo, List } from "./index";

const Header = (props) => {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
          <List />
          <Dropdown />
        </nav>
        <Auth />
      </header>
    </div>
  );
};

export default Header;
