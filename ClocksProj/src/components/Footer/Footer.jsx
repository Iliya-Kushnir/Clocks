import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import HeaderNavBtn from "../Header/HeaderNavBtn/HeaderNavBtn.jsx";
import { useLanguage } from "../../LanguageContext/LanguageContext.jsx";

const Footer = (props) => {
    const {t} = useLanguage()
    const {buttons} = props

    return (
        <footer>
            <h1 className={styles.Heading}>{t("siteHeading.title")}</h1>
       
            {buttons.map((button, index) => (
                <HeaderNavBtn
                    key={index}
                    label={button.label}
                    onClick={button.onClick}
                    type={button.type}
                />
            ))}

            <p className={styles.redText}>{t("footerRedTxt.text")}</p>

            <div className={styles.adressSection}>
                <div className={styles.locationSection}>
                    <img className={styles.pointer} src="/compressed/Vector.png" alt="MapPointer" />
                    <p className={styles.adress}>{t("homePage.adress")}</p>
                </div>

                <div className={styles.phoneSection}>
                    <h1 className={styles.sectionLabel}>Телефон:</h1>

                    <div className={styles.phoneWrapper}>
                        <img className={styles.phoneIcon} src="/compressed/PhoneIcon.png" alt="phoneIcon" />
                        <p className={styles.number}>+38 097-075-40-94 +38 095-739-86-14</p>
                    </div>
                </div>
            </div>

            <div className={styles.socialMedia}>
                <a target="_blank" rel="me" href="https://www.instagram.com/kharkov_watchrepair?igsh=MW9xZzltZTU2cHUxbQ=="><img src="/compressed/InstagramIcon.png" alt="" /></a>
                
                <a target="_blank" rel="me" href="https://t.me/GennadiyB1981"><img src="/compressed/TelegramIcon.png" alt="" /></a>
            </div>
        </footer>
    );
}

export default Footer