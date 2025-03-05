import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./MechanicWatchRepair.module.scss";
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

const MechanicRepairPage = () => {
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
            mainText="Ремонт механических часов"
            secondaryText="Часы, которые всегда идут точно"
            imgSrc="/images/ServicesBanner.png"
            imgAlt="Banner Image"
            />

            <div className={styles.sectionWrapper}>
                <Card
                title="Что такое механические часы?"
                text="Механические часы – это не просто инструмент измерения времени, а сложный механизм, требующий бережного ухода. В нашей мастерской мы проводим комплексный ремонт часов любой сложности: от очистки и смазки до замены деталей и настройки точности хода. Опытные часовщики работают с вниманием к каждой детали, используя профессиональное оборудование и оригинальные комплектующие. Доверьте нам ваши часы – и они будут работать безупречно долгие годы!"
                image="/images/Watch2.png"
                />
                <Card
                title="Преимущества ремонта часов у нас:"
                points={[
                    "Продление срока службы – регулярное обслуживание предотвращает серьезные поломки.",
                    "Точность хода – настройка механизма гарантирует стабильную работу без отклонений.",
                    "Оригинальные детали – используем только проверенные комплектующие.",
                    "Гарантия качества – после ремонта ваши часы будут работать как новые.",
                    "Опытные мастера – доверяйте профессионалам с многолетним стажем.",
                ]}
                image="/images/Watch3.png"
                />
        </div>

        <MainButton
        label="Позвонить нам"
        onClick={() => console.log("Hello world!")}
        />

        <h1  className={styles.SectionHeading}>Примеры работ</h1>

        <BeforeAfterLine />

        <MapSection />

        <Footer buttons={buttons} />
        </>
    )
}

export default MechanicRepairPage