import React from "react";
import { useLanguage } from "../../../LanguageContext/LanguageContext";
import styles from "./LanguageSwitcher.module.scss"

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div>
            <button className={styles.switchBtn} onClick={() => toggleLanguage("eng")} disabled={language === "eng"}>Eng</button>
            <button className={styles.switchBtn} onClick={() => toggleLanguage("ua")} disabled={language === "en"}>Ua</button>
        </div>
    );
};

export default LanguageSwitcher;
