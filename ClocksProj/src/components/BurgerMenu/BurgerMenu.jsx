import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss"; // Подключаем стили для гамбургер-меню
import LanguageSwitcher from "../Header/LanguageSwitcher/LanguageSwitcher.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useLanguage } from "../../LanguageContext/LanguageContext.jsx";

const BurgerMenu = () => {
  const {t} = useLanguage()
  const [isOpen, setIsOpen] = useState(false); // Стейт для открытия/закрытия меню

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={styles.burgerMenu}>
      {/* Кнопка гамбургера */}
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <span className={isOpen ? styles.open : ""}></span>
        <span className={isOpen ? styles.open : ""}></span>
        <span className={isOpen ? styles.open : ""}></span>
      </button>

      
    </div>

    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
    <ul>
      <li><Link className={styles.text}  to="/">{t("NavigationLinks.main")}</Link></li>
      <li><Link className={styles.text} to="/AllServices">{t("NavigationLinks.services")}</Link></li>
      <li><Link className={styles.text} to="/DeliveryPage">{t("NavigationLinks.delivery")}</Link></li>
      <li><Link className={styles.text} to="/Examples">{t("NavigationLinks.works")}</Link></li>
      <li><Link className={styles.text} to="/PriceList">{t("NavigationLinks.price")}</Link></li>
      <li><LanguageSwitcher /></li>
      <li className={styles.socialMedia}>
        <a target="_blank" href="https://www.instagram.com/kharkov_watchrepair?igsh=MW9xZzltZTU2cHUxbQ=="><img className={styles.linkBtn} src="/compressed/InstagramIcon.png" alt="" /> </a>
        
        <a target="_blank" href="https://t.me/GennadiyB1981"><img className={styles.linkBtn} src="/compressed/TelegramIcon.png" alt="" /></a>
        
      </li>
    </ul>
    </div>
</>
  );
};

export default BurgerMenu;
