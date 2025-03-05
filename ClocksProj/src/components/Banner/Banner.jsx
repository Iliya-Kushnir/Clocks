import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";
import styles from "./Banner.module.scss";
import MainButton from "../MainButton/MainButton.jsx";
import ImageSwitcher from "../../HomePage/ImageAttempt/ImageAttempt.jsx";

const Banner = ({ mainText, secondaryText }) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    // Определяем массив изображений в зависимости от страницы
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

    // Берем изображения по маршруту или ставим дефолт
    const selectedImages = imagesByPage[location.pathname] || ["/images/DefaultBanner.jpg"];

    console.log(selectedImages)

    return (
        <div 
            className={`${styles.Banner} ${isHomePage ? styles.homeBanner : styles.smallBanner}`}
        >
            <h1 className={`${styles.mainText} ${isHomePage ? styles.largeText : styles.smallText}`}>
                {mainText}
            </h1>

            <p className={styles.secondaryText}>
                {secondaryText}
            </p>

        {console.log("Передаю в ImageSwitcher:", selectedImages)}
            {/* Динамически передаем картинки в ImageSwitcher */}
            <ImageSwitcher images={selectedImages} />

            {isHomePage && (
                <MainButton
                    label="Бесплатная консультация"
                    onClick={() => console.log("Success!")}
                />
            )}
        </div>
    );
};

Banner.propTypes = {
    mainText: PropTypes.string,
    secondaryText: PropTypes.string,
};

export default Banner;
