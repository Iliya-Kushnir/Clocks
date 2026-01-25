import React, { useState, useEffect, useRef } from "react";
import styles from "./HomePage.module.scss";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Services from "../components/Services/Services.jsx";
import WorkExp from "./WorkExp/WorkExp.jsx";
import MapSection from "../components/MapSection/MapSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import BeforeAfterLine from "../components/BeforeAfterLine/BeforeAfterLine.jsx";
import PriceList from "../components/PriceList/PriceList.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainButton from "../components/MainButton/MainButton.jsx";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import RepairForm from "../components/RepairForm/RepairForm.jsx";
import { useLanguage } from "../LanguageContext/LanguageContext.jsx";


const HomePage = () => {
  const {t} = useLanguage();
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

  const cards = [
    { serviceName: t("ServiceCards.MechaicWatch"), serviceSrc: "/compressed/Watch.png", serviceAlt: "first", link: "/FirstService" },
    { serviceName: t("ServiceCards.Battery"), serviceSrc: "/compressed/Watch2.png", serviceAlt: "second", link: "/ThirdService" },
    { serviceName: t("ServiceCards.Polishing"), serviceSrc: "/compressed/Watch3.png", serviceAlt: "third", link: "/SecondService" },
    { serviceName: t("ServiceCards.Сleaning"), serviceSrc: "/compressed/Watch4.png", serviceAlt: "fourth", link: "/FifthService" },
    { serviceName: t("ServiceCards.Straps"), serviceSrc: "/compressed/Watch5.png", serviceAlt: "fifth", link: "/FourthService" },
    { serviceName: t("ServiceCards.Capital"), serviceSrc: "/compressed/Watch6.png", serviceAlt: "sixth", link: "/SixthService" },
    { serviceName: t("ServiceCards.Marriage"), serviceSrc: "/images/maryazh1.png", serviceAlt: "seventh", link: "/MarriagePage" },
  ];

  const services = Object.values(t("ServicesList")).slice(0, 12);


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

  console.log(t)


  return (
    <>
      <ToastContainer />
      <Header buttons={buttons} />

      <Banner
        mainText={t("homePage.title")}
        secondaryText={t("homePage.subtitle")}
        imgSrc="/compressed/HomeBanner.png"
        imgAlt="Banner Image"
      />

    <RepairForm/>     

      <h1 ref={section3Ref} className={styles.SectionHeading}>{t("homePage.servicesTitle")}</h1>

      <Services cards={cards} />

      <MainButton
        label={t("homePage.buttons.checkPrices")}
        onClick={() => handleClick2()}
      />

      

      <h1 className={styles.SectionHeading}>{t("homePage.experienceTitle")}</h1>

      <WorkExp
        label={t("homePage.buttons.consultation")}
        backgroundSrc="/compressed/BackGroundWatch.png"
        firstSrc="/compressed/bigClock1.png"
        secondSrc="/compressed/bigClock2.png"
        description={t("homePage.description")}
      />

      <MainButton
        label={t("homePage.buttons.bookAppointment")}
        onClick={() => handleClick3()}
      />

      <h1 className={styles.SectionHeading}>{t("homePage.pricingTitle")}</h1>

      <div ref={section1Ref} className={styles.tabel}>
        <PriceList services={services} />
      </div>

    <Link to="/PriceList">
      <MainButton
        label={t("homePage.buttons.viewAllPrices")}
      />
    </Link>



      <h1  className={styles.SectionHeading}>{t("homePage.examplesTitle")}</h1>

      <img className={styles.bigImage} src="/compressed/BigWatchConstructor.png" alt="" />

      <BeforeAfterLine 
      beforeSrc1="/compressed/BeforeafterHome1.png"
      afterSrc1="/compressed/BeforeafterHome2.png"

      beforeSrc2="/compressed/BeforeafterHome3.png"
      afterSrc2="/compressed/BeforeafterHome4.png"

      beforeSrc3="/compressed/BeforeafterHome5.png"
      afterSrc3="/compressed/BeforeafterHome6.png"
      />

      <MainButton
        label={t("homePage.buttons.viewMore")}
        onClick={() => navigate("/Examples")}
      />

      <h1 ref={section2Ref}  className={styles.SectionHeading}>{t("homePage.findUsTitle")}</h1>

      
    <MapSection
    adress={t("homePage.adress")}
    />
      

      <h1 className={styles.Delivery}>{t("homePage.deliveryText")}</h1>

      <Footer buttons={buttons} />
    </>
  );
};

export default HomePage;
