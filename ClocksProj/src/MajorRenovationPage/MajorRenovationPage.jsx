import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./MajorRenovationPage.module.scss";
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
import { Helmet } from 'react-helmet-async';

const MajorRenovationPage = () => {
  const {t} = useLanguage()
    const navigate = useNavigate();
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const [cooldown, setCooldown] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);  
  
    const handleClick = () => {
      if (!cooldown) {
        notify();
        setCooldown(true);
        setTimeLeft(30); 
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
        autoClose: false, 
        closeOnClick: false, 
        progress: (timeLeft / 30),
        success: ("Кулдаун окончен!"),
      });
    };

    return (
        <>
            <Helmet>
                <title>Капитальный ремонт и реставрация старых часов в Харькове</title>
                <meta name="description" content="Восстановление нерабочих часов, замена деталей, поиск запчастей для редких и антикварных механизмов." />
            </Helmet>

            <ToastContainer />
            <Header buttons={buttons} />

            <Banner
            mainText={t("capital.title")}
            secondaryText={t("capital.subtitle")}
            imgSrc="/compressed/ServicesBanner.png"
            imgAlt="Banner Image"
            />

            <div className={styles.sectionWrapper}>
                <Card
                title={t("capital.explanatio1")}
                text={t("capital.description1")}
                image="/compressed/Rectangle 28-17.png"
                />
                <Card
                title={t("capital.explanatio2")}
                points={[
                  t("capital.descriptionPoin1"),
                  t("capital.descriptionPoin2"),
                  t("capital.descriptionPoin3"),
                  t("capital.descriptionPoin4"),
                  t("capital.descriptionPoin5"),
                ]}
                image="/compressed/Rectangle 29-6.png"
                />
        </div>

        <CallButton/>

        <h1  className={styles.SectionHeading}>{t("expPage.examplesTitle")}</h1>

        <BeforeAfterLine 
        
        beforeSrc1="/compressed/BeforeafterHome1.png"
        afterSrc1="/compressed/BeforeafterHome2.png"
        
        beforeSrc2="/compressed/BeforeafterHome5.png"
        afterSrc2="/compressed/BeforeafterHome6.png"

        beforeSrc3="/compressed/BeforeafterHome3.png"
        afterSrc3="/compressed/BeforeafterHome4.png"

        />

<div ref={section2Ref}>
              <MapSection 
                adress={t("homePage.adress")}
              />
            </div>

        <Footer buttons={buttons} />
        </>
    )
}

export default MajorRenovationPage