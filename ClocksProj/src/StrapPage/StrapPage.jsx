import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./StrapPage.module.scss";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import MapSection from "../components/MapSection/MapSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import BeforeAfterLine from "../components/BeforeAfterLine/BeforeAfterLine.jsx";
import Card from "../components/ServiceInfo/Card/Card.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainButton from "../components/MainButton/MainButton.jsx";
import { useNavigate } from "react-router";
import CallButton from "../components/CallBtn/CallBtn.jsx";
import { useLanguage } from "../LanguageContext/LanguageContext.jsx";

const StrapPage = () => {
  const {t} = useLanguage()
    const navigate = useNavigate();
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const [cooldown, setCooldown] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30); // 30 секунд
  
    const handleClick = () => {
      if (!cooldown) {
        notify();
        setCooldown(true);
        setTimeLeft(30); // сбрасываем кулдаун на 30 секунд
      }
    };
  
    const handleScroll = (ref) => {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    const handleClick1 = () => navigate("/DeliveryPage");
    const handleClick2 = () => navigate("/PriceList");
    const handleClick3 = () => handleScroll(section2Ref);
    const handleClick4 = () => navigate("/AllServices");
    const handleClick5 = () => notify();
  
    const buttons = [
      { label: t("NavigationLinks.delivery"), onClick: handleClick1, type: 'button' },
      { label: t("NavigationLinks.price"), onClick: handleClick2, type: 'button' },
      { label: t("NavigationLinks.map"), onClick: handleClick3, type: 'button' },
      { label: t("NavigationLinks.services"), onClick: handleClick4, type: 'button' },
    ];
  
    useEffect(() => {
      let timer;
      if (cooldown && timeLeft > 0) {
        timer = setInterval(() => {
          setTimeLeft((prev) => prev - 1);
        }, 1000);
      }
      if (timeLeft === 0) {
        setCooldown(false);
      }
      return () => clearInterval(timer);
    }, [cooldown, timeLeft]);
  
    const notify = () => {
      toast.info(`Осталось ${timeLeft} чтоб повторно отправить форму!`, {
        position: "bottom-right",
        autoClose: false, // Убираем автозакрытие, чтобы пользователь видел прогресс
        closeOnClick: false, 
        progress: (timeLeft / 30),
        success: ("Кулдаун окончен!"), // Прогресс от 0 до 1 (время / 30 секунд)
      });
    };

    return (
        <>
            <ToastContainer />
            <Header buttons={buttons} />

            <Banner
            mainText={t("strapPage.title")}
            secondaryText={t("strapPage.subtitle")}
            imgSrc="/compressed/ServicesBanner.png"
            imgAlt="Banner Image"
            />

            <div className={styles.sectionWrapper}>
                <Card
                title={t("strapPage.explanatio1")}
                text={t("strapPage.description1")}
                image="/compressed/Rectangle 28-16.png"
                />
                <Card
                title={t("strapPage.explanatio2")}
                points={[
                  t("strapPage.descriptionPoin1"),
                  t("strapPage.descriptionPoin2"),
                  t("strapPage.descriptionPoin3"),
                  t("strapPage.descriptionPoin4"),
                  t("strapPage.descriptionPoin5"),
                ]}
                image="/compressed/Rectangle 29-5.png"
                />
        </div>

        <CallButton
        label={t("expPage.buttons.call")}
        />

        <h1  className={styles.SectionHeading}>{t("strapPage.sectionHeading")}</h1>

        <BeforeAfterLine 
          beforeSrc1="/compressed/BeforeafterHome7.png"
          afterSrc1="/compressed/BeforeafterHome8.png"
          
          beforeSrc2="/compressed/BeforeafterHome1.png"
          afterSrc2="/compressed/BeforeafterHome2.png"
  
          beforeSrc3="/compressed/BeforeafterHome3.png"
          afterSrc3="/compressed/BeforeafterHome4.png"
        />

        <MapSection 
          adress={t("homePage.adress")}
        />

        <Footer buttons={buttons} />
        </>
    )
}

export default StrapPage