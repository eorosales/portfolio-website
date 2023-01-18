import React from "react";
import styles from "./topNavBar.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const TopNavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <a href='#'>Projects</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        <a href='#'>
          <FaGithub />
        </a>
        <a href='#'>
          <FaLinkedin />
        </a>
        <a href='#'>
          <FaInstagram />
        </a>
      </nav>
    </header>
  );
};

export default TopNavBar;
