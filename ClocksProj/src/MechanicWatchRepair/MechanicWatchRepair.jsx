import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import styles from "./MechanicWatchRepair.module.scss";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import MapSection from "../components/MapSection/MapSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import BeforeAfterLine from "../components/BeforeAfterLine/BeforeAfterLine.jsx";
import Card from "../components/ServiceInfo/Card/Card.jsx";
import MainButton from "../components/MainButton/MainButton.jsx";
import CallButton from "../components/CallBtn/CallBtn.jsx";
import { useLanguage } from "../LanguageContext/LanguageContext.jsx";
import { Helmet } from 'react-helmet-async';

const MechanicRepairPage = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const section2Ref = useRef(null);
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
        toast.info(t("form.waitMessage") + ` ${timeLeft} ` + t("form.retryMessage"), {
            position: "bottom-right",
            autoClose: false,
            closeOnClick: false,
            progress: timeLeft / 30,
        });
    };

    return (
        <>

            <Helmet>
                <title>Ремонт механических часов в Харькове | Обслуживание механизмов</title>
                <meta name="description" content="Профессиональный ремонт механических часов любой сложности. Репассаж, настройка точности, чистка и смазка механизмов в Харькове." />
            </Helmet>

            <ToastContainer />
            <Header buttons={buttons} />
            <Banner
                mainText={t("mechanicRepairPage.title")}
                secondaryText={t("mechanicRepairPage.subtitle")}
                imgSrc="/compressed/Rectangle 28-12.png"
                imgAlt="Banner Image"
            />
            <div className={styles.sectionWrapper}>
                <Card
                    title={t("mechanicRepairPage.question")}
                    text={t("mechanicRepairPage.description1")}
                    image="/compressed/MechWatch.png"
                />
                <Card
                    title={t("mechanicRepairPage.advantagesTitle")}
                    points={t("mechanicRepairPage.advantages", { returnObjects: true })}
                    image="/compressed/MechaicWatch.png"
                />
            </div>

            <CallButton
        label={t("expPage.buttons.call")}
        />
            <h1 className={styles.SectionHeading}>{t("mechanicRepairPage.examplesTitle")}</h1>
            <BeforeAfterLine 

            beforeSrc1="/compressed/BeforeafterHome3.png"
            afterSrc1="/compressed/BeforeafterHome4.png"
            
            beforeSrc3="/compressed/BeforeafterHome7.png"
            afterSrc3="/compressed/BeforeafterHome8.png"

            beforeSrc2="/compressed/BeforeafterHome5.png"
            afterSrc2="/compressed/BeforeafterHome6.png"


            />
            <div ref={section2Ref}>
              <MapSection 
                adress={t("homePage.adress")}
              />
            </div>
            <Footer buttons={buttons} />
        </>
    );
};

export default MechanicRepairPage;
