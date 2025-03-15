import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import HeaderNavBtn from "./HeaderNavBtn/HeaderNavBtn.jsx";
import Logo from "./Logo/Logo.jsx";
import { useNavigate } from "react-router";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher.jsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

const Header = (props) => {
    const {label, logoSrc, logoAlt, buttons} = props
    const navigate = useNavigate()

    return (
        <div className={styles.Header}>

            <div className={styles.logoName}>
                <Logo
                logoSrc="/compressed/Logo.png"
                logoAlt="kskkwkw"
                />
                <h1 onClick={() => navigate("/")} className={styles.Heading}>Мастерская время</h1>
            </div>

            {buttons.map((button, index) => (
                <HeaderNavBtn
                    key={index}
                    label={button.label}
                    onClick={button.onClick}
                    type={button.type}
                />
            ))}
                <div className={styles.LanguageSwitcher}>
                    <LanguageSwitcher />
                </div>
            <div className={styles.Numbers}>
                <a className={styles.number} href="tel:+380970754094">+38 097-075-40-94</a>
                <a className={styles.number} href="tel:+380957398614">+38 097-075-40-94</a>
            </div>

            <div className={styles.contactInfo}>
                    <img className={styles.linkBtn} src="/compressed/InstagramIcon.png" alt="" />
                    <img className={styles.linkBtn} src="/compressed/TelegramIcon.png" alt="" />
            </div>

            <BurgerMenu/>
        </div>
    )
}

Header.propTypes = {
    label: PropTypes.string,
    logoSrc: PropTypes.string,
    logoAlt: PropTypes.string,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
            type: PropTypes.string.isRequired
        })
    ).isRequired
}

export default Header