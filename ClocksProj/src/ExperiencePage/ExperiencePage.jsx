import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./ExperiencePage.module.scss";
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
import GridLayout from "./GridImg/GridImg.jsx";
import { useLanguage } from "../LanguageContext/LanguageContext.jsx";
import CallButton from "../components/CallBtn/CallBtn.jsx";

const ExperiencePage = () => {
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
            <ToastContainer />
            <Header buttons={buttons} />

            <Banner
                mainText={t("expPage.title")}
                secondaryText={t("expPage.subtitle")}
            imgSrc="/compressed/ServicesBanner.png"
            imgAlt="Banner Image"
            />

            <div className={styles.sectionWrapper}>
                <Card
                    title={t("expPage.question")}
                    text={t("expPage.description1")}
                image="/compressed/ExpPageImg.png"
                />
                <Card
                    title={t("expPage.advantagesTitle")}
                    points={t("expPage.advantages", { returnObjects: true })}
                image="/compressed/ExpPageImg2.png"
                />
            </div>



        <h1  className={styles.SectionHeading}>{t("expPage.examplesTitle")}</h1>

                <GridLayout />

        <CallButton/>

        <div ref={section2Ref}>
              <MapSection 
                adress={t("homePage.adress")}
              />
            </div>

        <Footer buttons={buttons} />
        </>
    )
}

export default ExperiencePage