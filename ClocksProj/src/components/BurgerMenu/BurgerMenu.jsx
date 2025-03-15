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
    <div className={styles.burgerMenu}>
      {/* Кнопка гамбургера */}
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <span className={isOpen ? styles.open : ""}></span>
        <span className={isOpen ? styles.open : ""}></span>
        <span className={isOpen ? styles.open : ""}></span>
      </button>

      {/* Меню */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/AllServices">Услсуги</Link></li>
          <li><Link to="/DeliveryPage">Доставка</Link></li>
          <li><Link to="/Examples">Работы</Link></li>
          <li><Link to="/PriceList">Расценки</Link></li>
          <li><LanguageSwitcher /></li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
