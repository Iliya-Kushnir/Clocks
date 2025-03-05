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

const MajorRenovationPage = () => {
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
            mainText="Капитальный ремонт часов"
            secondaryText="Капитальный ремонт с приятными мастерами"
            imgSrc="/images/ServicesBanner.png"
            imgAlt="Banner Image"
            />

            <div className={styles.sectionWrapper}>
                <Card
                title="Что такое капитальный ремонт часов?"
                text="Капитальный ремонт часов – это комплексная процедура, позволяющая восстановить их точность и продлить срок службы. Со временем детали изнашиваются, смазка теряет свойства, а механизмы загрязняются. В ходе ремонта мы полностью разбираем часы, очищаем и смазываем каждую деталь, заменяем изношенные элементы и настраиваем точность хода. После капитального ремонта ваши часы снова будут работать как новые!"
                image="/images/Watch2.png"
                />
                <Card
                title="Преимущества капитального ремонта у нас:"
                points={[
                    "Полное восстановление механизма – устраняем все возможные неисправности.",
                    "Точность хода – после регулировки часы будут работать без отклонений.",
                    "Замена изношенных деталей – используем только оригинальные или аналогичные комплектующие.",
                    "Профессиональная чистка и смазка – механизму возвращается плавность работы.",
                    "Гарантия качества – уверены в результате каждого ремонта!"
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

export default MajorRenovationPage