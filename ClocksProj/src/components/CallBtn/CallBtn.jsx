import React from "react";
import styles from "./CallBtn.module.scss"

const CallButton = () => {
  return (
    <button className={styles.CallButton}>
        <a 
        className={styles.label}
        href="tel:+380991234567">Позвонить нам
      </a>
      </button>
  );
};

export default CallButton;