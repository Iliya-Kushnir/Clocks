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

const ExperiencePage = () => {
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
            mainText="Опыт"
            secondaryText="Мастер с более 20 летним опытом и 
с более 300 выполненых заказов"
            imgSrc="/compressed/ServicesBanner.png"
            imgAlt="Banner Image"
            />

            <div className={styles.sectionWrapper}>
                <Card
                title="Сколько лет я уже в этой сфере?"
                text="Я – опытный часовщик с более чем 20-летним стажем. Работаю с любыми видами часов – от классических механических до современных кварцевых и автоматических моделей. Любая поломка – это вызов, который я с удовольствием принимаю. Отреставрирую, настрою и верну вашим часам идеальную точность и внешний вид. Гарантирую качественный ремонт и индивидуальный подход к каждому заказу.
Ваши часы – в надежных руках!"
                image="/compressed/ExpPageImg.png"
                />
                <Card
                title="Почему именно я?"
                points={[
                    " 20+ лет опыта – я занимаюсь ремонтом часов более двух десятилетий и знаю все тонкости работы с любыми механизмами. Ремонт любых часов – механика, кварц, автоматические модели, винтажные экземпляры – починю все! Честность и качество – только профессиональный подход, никаких лишних услуг и скрытых платежей. Индивидуальный подход – внимательно изучаю каждую проблему и нахожу наилучшее решение. Безопасная доставка – вы можете отправить мне свои часы, а я быстро их починю и верну в надежной упаковке. Доверьте свои часы профессионалу – и они снова будут работать идеально!"
                ]}
                image="/compressed/ExpPageImg2.png"
                />
            </div>



        <h1  className={styles.SectionHeading}>Мои работы</h1>

                <GridLayout />

        <MainButton
        label="Позвонить нам"
        />

        <MapSection />

        <Footer buttons={buttons} />
        </>
    )
}

export default ExperiencePage