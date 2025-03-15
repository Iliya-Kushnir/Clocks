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
    { label: 'Доставка', onClick: handleClick1, type: 'button' },
    { label: 'Расценки', onClick: handleClick2, type: 'button' },
    { label: 'Карта', onClick: handleClick3, type: 'button' },
    { label: 'Услуги', onClick: handleClick4, type: 'button' },
  ];

  const cards = [
    { serviceName: "Ремонт механических часов", serviceSrc: "/compressed/Watch.png", serviceAlt: "first", link: "/FirstService" },
    { serviceName: "Замена элементов питания", serviceSrc: "/compressed/Watch2.png", serviceAlt: "second", link: "/ThirdService" },
    { serviceName: "Полировка часов", serviceSrc: "/compressed/Watch3.png", serviceAlt: "third", link: "/SecondService" },
    { serviceName: "Чистка и смазка часов", serviceSrc: "/compressed/Watch4.png", serviceAlt: "fourth", link: "/FifthService" },
    { serviceName: "Замена ремешка или браслета", serviceSrc: "/compressed/Watch5.png", serviceAlt: "fifth", link: "/FourthService" },
    { serviceName: "Капитальный ремонт часов", serviceSrc: "/compressed/Watch6.png", serviceAlt: "sixth", link: "/SixthService" }
  ];

  const services = [
    { name: "Замена ремешка или браслета", price: "от 600 грн", duration: "1-2 дня" },
    { name: "Замена батарейки", price: "от 300 грн", duration: "1-2 дня" },
    { name: "Замена стекла", price: "от 400 грн", duration: "1-2 дня" },
    { name: "Водонепроницаемая защита", price: "от 500 грн", duration: "2-3 дня" },
    { name: "Полировка корпуса и браслета", price: "от 1000 грн", duration: "2-3 дня" },
    { name: "Проверка точности хода", price: "от 200 грн", duration: "1-2 дня" },
    { name: "Реставрация антикварных часов", price: "от 3000 грн", duration: "7+ дней" },
    { name: "Обновление водозащиты", price: "от 800 грн", duration: "2-3 дня" },
    { name: "Капитальный ремонт часов", price: "от 500 грн", duration: "2-3 дня" },
    { name: "Замена стрелок и циферблата", price: "от 800 грн", duration: "2-3 дня" },
    { name: "Чистка и смазка", price: "от 600 грн", duration: "1-2 дня" },
    { name: "Ремонт или замена механизма хронограф", price: "от 2000 грн", duration: "3-4 дня" },
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
      />

      <MainButton
        label={t("homePage.buttons.bookAppointment")}
        onClick={() => handleClick3()}
      />

      <h1 className={styles.SectionHeading}>{t("homePage.pricingTitle")}</h1>

      <div ref={section1Ref} className="p-5">
        <PriceList services={services} />
      </div>

    <Link to="/PriceList">
      <MainButton
        label={t("homePage.buttons.consultation")}
      />
    </Link>



      <h1  className={styles.SectionHeading}>{t("homePage.examplesTitle")}</h1>

      <img className={styles.bigImage} src="/compressed/BigWatchConstructor.png" alt="" />

      <BeforeAfterLine />

      <MainButton
        label={t("homePage.buttons.viewMore")}
        onClick={() => navigate("/Examples")}
      />

      <h1 ref={section2Ref}  className={styles.SectionHeading}>{t("homePage.findUsTitle")}</h1>

      
    <MapSection/>
      

      <h1 className={styles.Delivery}>{t("homePage.deliveryText")}</h1>

      <Footer buttons={buttons} />
    </>
  );
};

export default HomePage;
