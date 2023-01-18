import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h2>
        Erwin <b>Rosales</b>
      </h2>
      <div>
        <p>Front End</p>
        <p>Developer.</p>
        <p>Designer.</p>
      </div>
      <button>Contact</button>
    </div>
  );
};

export default Hero;
