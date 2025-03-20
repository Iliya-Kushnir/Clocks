import React from "react";
import styles from "./CallBtn.module.scss"
import { useLanguage } from "../../LanguageContext/LanguageContext";

const CallButton = () => {
  const {t} = useLanguage()
  return (
    <button className={styles.CallButton}>
        <a 
        className={styles.label}
        href="tel:+380970754094">
          {t("expPage.buttons.call")}
      </a>
      </button>
  );
};

export default CallButton;