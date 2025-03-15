import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./StrapPage.module.scss";
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

const StrapPage = () => {
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
            mainText="Замена ремешка или браслета"
            secondaryText="Люксовые ремешки премиального качество"
            imgSrc="/images/ServicesBanner.png"
            imgAlt="Banner Image"
            />

            <div className={styles.sectionWrapper}>
                <Card
                title="Что такое ремешок?"
                text="Ремешок – это не только функциональная часть часов, но и важный элемент их стиля. Со временем он изнашивается, теряет внешний вид или просто перестает быть удобным. Мы поможем подобрать и заменить ремешок или браслет на новый – кожаный, силиконовый, тканевый или металлический. Замена проводится аккуратно, с учетом особенностей крепления, чтобы часы надежно сидели на руке и выглядели безупречно."
                image="/images/Rectangle 28-16.png"
                />
                <Card
                title="Преимущества замены ремешка именно  нас"
                points={[
                    "Широкий выбор – кожаные, металлические, силиконовые и другие варианты.",
                    "Идеальная посадка – подбираем и регулируем ремешок для максимального комфорта.",
                    "Качество и надежность – работаем только с проверенными материалами.",
                    "Быстрая замена – установка занимает всего несколько минут.",
                    "Обновленный стиль – сделайте ваши часы еще элегантнее и удобнее."
                ]}
                image="/images/Rectangle 29-5.png"
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

export default StrapPage