import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss"; // Подключаем стили для гамбургер-меню
import LanguageSwitcher from "../Header/LanguageSwitcher/LanguageSwitcher.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const BurgerMenu = () => {
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
      <li><Link className={styles.text}  to="/">Главная</Link></li>
      <li><Link className={styles.text} to="/AllServices">Услсуги</Link></li>
      <li><Link className={styles.text} to="/DeliveryPage">Доставка</Link></li>
      <li><Link className={styles.text} to="/Examples">Работы</Link></li>
      <li><Link className={styles.text} to="/PriceList">Расценки</Link></li>
      <li><LanguageSwitcher /></li>
      <li className={styles.socialMedia}>
        <img className={styles.linkBtn} src="/images/InstagramIcon.png" alt="" /> 
        <img className={styles.linkBtn} src="/images/TelegramIcon.png" alt="" />
      </li>
    </ul>
    </div>
</>
  );
};

export default BurgerMenu;
