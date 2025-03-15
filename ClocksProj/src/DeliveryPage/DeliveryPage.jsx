import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./DeliveryPage.module.scss";
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

const DeliveryPage = () => {
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
      { label: 'Укр/Ру', onClick: handleClick5, type: 'button' },
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
            mainText="Доставка"
            secondaryText="Гарантируем сохранность и скорость"
            imgSrc="/images/ServicesBanner.png"
            imgAlt="Banner Image"
            />

            <div className={styles.sectionWrapper}>
                <Card
                title="Какими почтами можно отправить часы?"
                text="Вы можете отправить нам ваш товар любой удобной почтовой службой. Мы проведем ремонт максимально быстро и отправим его обратно в надежной упаковке. Гарантируем полную безопасность пересылки и бережное обращение с вашим устройством."
                image="/images/Watch2.png"
                />
                <Card
                title="Преимущества капитального ремонта у нас:"
                points={[
                    "Гарантия надежности доставки. Мы работаем только с проверенными и надежными курьерскими службами, чтобы ваши часы достигли нас в целости и сохранности. Хотя у нас нет собственной службы доставки, мы уверены в высоком уровне безопасности и ответственности партнеров, с которыми сотрудничаем. Все отправления застрахованы, и вы можете отслеживать путь своей посылки. Мы делаем все, чтобы процесс доставки был максимально удобным и надежным, и гарантируем, что ваши часы всегда будут в безопасности.",
                ]}
                image="/images/Watch3.png"
                />
        </div>

        <CallButton/>

        <h1  className={styles.SectionHeading}>Примеры работ</h1>

        <BeforeAfterLine />

        <MapSection />

        <Footer buttons={buttons} />
        </>
    )
}

export default DeliveryPage