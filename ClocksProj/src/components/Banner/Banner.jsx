import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";
import styles from "./Banner.module.scss";
import MainButton from "../MainButton/MainButton.jsx";
import ImageSwitcher from "../../HomePage/ImageAttempt/ImageAttempt.jsx";
import RepairForm from "../RepairForm/RepairForm.jsx"; 
import { useLanguage } from "../../LanguageContext/LanguageContext.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Banner = ({ mainText, secondaryText }) => {
  const {t} = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesByPage = {
    "/": ["/compressed/HomeBanner.png", "/compressed/HomeBanner2.jpg", "/compressed/HomeBanner3.jpg"],
    "/PriceList": ["/compressed/PricePageBanner3.png", "/compressed/PricePageBanner2.png", "/compressed/PricePageBanner3.png"],
    "/DeliveryPage": ["/compressed/DeliveryBanner.png", "/compressed/DeliveryBanner2.png", "/compressed/DeliveryBanner3.png"],
    "/Examples": ["/compressed/ExamplesBanner.png", "/compressed/ExamplesBanner2.png", "/compressed/ExamplesBanner3.png"],
    "/AllServices": ["/compressed/ServicesBanner.png", "/compressed/ServicesBanner2.png", "/compressed/ServicesBanner3.png"],
    "/FirstService": ["/compressed/FirstServiceBanner.png", "/compressed/FirstServiceBanner2.png", "/compressed/FirstServiceBanner3.png"],
    "/SecondService": ["/compressed/SecondServiceBanner.png", "/compressed/SecondServiceBanner2.png", "/compressed/SecondServiceBanner3.png"],
    "/ThirdService": ["/compressed/ThirdServiceBanner.png", "/compressed/ThirdServiceBanner2.png", "/compressed/ThirdServiceBanner3.png"],
    "/FourthService": ["/compressed/FourthServiceBanner.png", "/compressed/FourthServiceBanner2.png", "/compressed/FourthServiceBanner3.png"],
    "/FifthService": ["/compressed/FifthServiceBanner.png", "/compressed/FifthServiceBanner2.png", "/compressed/FifthServiceBanner3.png"],
    "/SixthService": ["/compressed/SixthServiceBanner.png", "/compressed/SixthServiceBanner2.png", "/compressed/SixthServiceBanner3.png"],
    "/ExperiencePage": ["/compressed/ExperiencePageBanner.png", "/compressed/ExperiencePageBanner2.png", "/compressed/ExperiencePageBanner3.png"]
  };

  const selectedImages = imagesByPage[location.pathname] || ["/compressed/DefaultBanner.jpg"];

  return (
    <div className={`${styles.Banner} ${isHomePage ? styles.homeBanner : styles.smallBanner}`}>
      <h1 style={{ fontFamily: "'A Plakat Titul', sans-serif" }} className={`${styles.mainText} ${isHomePage ? styles.largeText : styles.smallText}`}>
        {mainText}
      </h1>

      <p className={styles.secondaryText}>{secondaryText}</p>

      <ImageSwitcher images={selectedImages} setIsButtonVisible={setIsButtonVisible}/>

      {isHomePage && (
        <AnimatePresence>
          {isButtonVisible && (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.2, ease: "easeOut" }} 
            >
            <MainButton 
              label={t("homePage.buttons.consultation")} 
              onClick={() => setIsModalOpen(true)} 
              className={styles.noMargin}
            />
            </motion.div>
          )}
        </AnimatePresence>
      )}



      {isModalOpen && <RepairForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

Banner.propTypes = {
  mainText: PropTypes.string,
  secondaryText: PropTypes.string
};

export default Banner;
