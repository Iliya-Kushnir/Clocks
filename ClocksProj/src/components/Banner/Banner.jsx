import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";
import styles from "./Banner.module.scss";
import MainButton from "../MainButton/MainButton.jsx";
import ImageSwitcher from "../../HomePage/ImageAttempt/ImageAttempt.jsx";
import RepairForm from "../RepairForm/RepairForm.jsx"; // Импортируем форму
import { useLanguage } from "../../LanguageContext/LanguageContext.jsx";


const Banner = ({ mainText, secondaryText }) => {
    const { language } = useLanguage()
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    
    const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

    const imagesByPage = {
        "/": ["/images/HomeBanner.png", "/images/HomeBanner2.jpg", "/images/HomeBanner3.jpg"],
        "/PriceList": ["/images/PricePageBanner.png", "/images/PricePageBanner2.png", "/images/PricePageBanner3.png"],
        "/DeliveryPage": ["/images/DeliveryBanner.png", "/images/DeliveryBanner2.png", "/images/DeliveryBanner3.png"],
        "/Examples": ["/images/ExamplesBanner.png", "/images/ExamplesBanner2.png", "/images/ExamplesBanner3.png"],
        "/AllServices": ["/images/ServicesBanner.png", "/images/ServicesBanner2.png", "/images/ServicesBanner3.png"],
        "/FirstService": ["/images/FirstServiceBanner.png", "/images/FirstServiceBanner2.png", "/images/FirstServiceBanner3.png"],
        "/SecondService": ["/images/SecondServiceBanner.png", "/images/SecondServiceBanner2.png", "/images/SecondServiceBanner3.png"],
        "/ThirdService": ["/images/ThirdServiceBanner.png", "/images/ThirdServiceBanner2.png", "/images/ThirdServiceBanner3.png"],
        "/FourthService": ["/images/FourthServiceBanner.png", "/images/FourthServiceBanner2.png", "/images/FourthServiceBanner3.png"],
        "/FifthService": ["/images/FifthServiceBanner.png", "/images/FifthServiceBanner2.png", "/images/FifthServiceBanner3.png"],
        "/SixthService": ["/images/SixthServiceBanner.png", "/images/SixthServiceBanner2.png", "/images/SixthServiceBanner3.png"]
    };

    const selectedImages = imagesByPage[location.pathname] || ["/images/DefaultBanner.jpg"];

    return (
        <div className={`${styles.Banner} ${isHomePage ? styles.homeBanner : styles.smallBanner}`}>
            <h1 className={`${styles.mainText} ${isHomePage ? styles.largeText : styles.smallText}`}>
            {mainText}
            </h1>

            <p className={styles.secondaryText}>
                {secondaryText}
            </p>

            <ImageSwitcher images={selectedImages} />

            {isHomePage && (
                <MainButton
                    label="Бесплатная консультация"
                    onClick={() => setIsModalOpen(true)} // Открываем модальное окно
                />
            )}

            {/* Показываем модальное окно, если isModalOpen === true */}
            {isModalOpen && <RepairForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
        </div>
    );
};

Banner.propTypes = {
    mainText: PropTypes.string,
    secondaryText: PropTypes.string,
};

export default Banner;
