import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./CleaningPage.module.scss";
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

const CleaningPage = () => {
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
            mainText="Чистка и смазка часов"
            secondaryText="Поддерживаем ваш механизм в отличном состоянии"
            imgSrc="/images/ServicesBanner.png"
            imgAlt="Banner Image"
            />

            <div className={styles.sectionWrapper}>
                <Card
                title="Что такое смазка и чистка часов?"
                text="Со временем в механизме часов накапливаются пыль и микрочастицы, которые ухудшают работу и точность хода. Смазка высыхает, что приводит к износу деталей. Профессиональная чистка и смазка помогают восстановить идеальную работу механизма. В нашей мастерской мы аккуратно разбираем часы, очищаем все элементы, обновляем смазку и собираем их заново, чтобы продлить срок службы и вернуть точность."
                image="/images/Rectangle 28-15.png"
                />
                <Card
                title="Преимущества смазки и чистки часов у нас:"
                points={[
                    "Продление срока службы – регулярный уход предотвращает износ деталей.",
                    "Идеальная точность – устранение загрязнений восстанавливает стабильный ход.",
                    "Оригинальные смазочные материалы – используем только качественные масла.",
                    "Безопасность процесса – чистка проводится профессиональными инструментами.",
                    "Гарантия результата – ваши часы будут работать, как новые!"
                ]}
                image="/images/Rectangle 29-4.png"
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

export default CleaningPage