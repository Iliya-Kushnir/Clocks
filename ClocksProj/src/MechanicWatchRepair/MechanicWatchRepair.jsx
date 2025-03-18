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
            <BeforeAfterLine />
            <MapSection 
             adress={t("homePage.adress")}
            />
            <Footer buttons={buttons} />
        </>
    );
};

export default MechanicRepairPage;
