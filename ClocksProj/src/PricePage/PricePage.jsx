import React from "react";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import MapSection from "../components/MapSection/MapSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PriceList from "../components/PriceList/PriceList.jsx";
import styles from "./PricePage.module.scss";
import { useNavigate } from "react-router";

const PricePage = () => {
  const handleClick1 = () => navigate("/DeliveryPage");
  const handleClick2 = () => navigate("/PriceList");
  const handleClick3 = () => handleScroll(section2Ref);
  const handleClick4 = () => navigate("/AllServices");
  const handleClick5 = () => notify();
  const navigate = useNavigate()

    const buttons = [
        { label: 'Доставка', onClick: handleClick1, type: 'button' },
        { label: 'Расценки', onClick: handleClick2, type: 'button' },
        { label: 'Карта', onClick: handleClick3, type: 'button' },
        { label: 'Услуги', onClick: handleClick4, type: 'button' },
        { label: 'Укр/Ру', onClick: handleClick5, type: 'button' },
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
        { name: "Ремонт и настройка механизма маятниковых часов", price: "от 600 грн", duration: "7+ дней" },
        { name: "Восстановление механизма", price: "от 1000 грн", duration: "3+ дней" },
        { name: "Ремонт маятниковых механизмов", price: "от 1200грн", duration: "4+ дней" },
        { name: "Ремонт и восстановление механизма старинных часов", price: "от 2000 грн", duration: "4-5 дней" },
        { name: "Полная разборка и чистка старинных часов", price: "от 2000 грн", duration: "3-4 дня" },
      ];

      return (
        <>
            <Header
            buttons={buttons}
           />

           <Banner
           mainText="Расценки"
           secondaryText="Самые технологичные работы в Харькове"
           imgSrc="/images/PricePageBanner.png"
           imgAlt="Banner Image"
           />

            <div className="p-5">
                <h1 className={styles.SectionHeading}>Прайс-лист</h1>
                <PriceList services={services} />
             </div>

            <MapSection/>

            <Footer
                buttons={buttons}
            />
        </>
      )
}

export default PricePage