import React from "react";
import PropTypes from "prop-types";
import styles from "./AllServicesPage.module.scss";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Services from "../components/Services/Services.jsx";
import MapSection from "../components/MapSection/MapSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import BeforeAfterLine from "../components/BeforeAfterLine/BeforeAfterLine.jsx";
import { useNavigate } from "react-router";


const AllServicesPage = () => {
  const navigate = useNavigate()



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

      const cards = [
        { serviceName: "Ремонт механических,напольных часов", serviceSrc: "/images/Watch.png", serviceAlt: "first"},
        { serviceName: "Замена элементов питания", serviceSrc: "/images/Watch2.png", serviceAlt: "second"},
        { serviceName: "Полировка часов", serviceSrc: "/images/Watch3.png", serviceAlt: "third"},
        { serviceName: "Чистка и смазка часов", serviceSrc: "/images/Watch4.png", serviceAlt: "fourth"},
        { serviceName: "Замена ремешка или браслета", serviceSrc: "/images/Watch5.png", serviceAlt: "fifth"},
        { serviceName: "Капитальный ремонт часов", serviceSrc: "/images/Watch6.png", serviceAlt: "sixth"}
      ]

      return (
        <>
            <Header
            buttons={buttons}
           />

           <Banner
           mainText="Услуги"
           secondaryText="Услуги от Мастерской Время!"
           imgSrc="/images/ServicesBanner.png"
           imgAlt="Banner Image"
           />

           <h1 className={styles.SectionHeading}>Услуги мастерской</h1>

            <Services
            cards={cards}
            />

            <h1 className={styles.SectionHeading}>Примеры работ</h1>

            <BeforeAfterLine/>

            <h1  className={styles.SectionHeading}>Как нас найти?</h1>

            <MapSection/>

            <h1 className={styles.Delivery}>ПРИНИМАЕМ ЗАКАЗЫ СО ВСЕЙ УКРАИНЫ ПО ПОЧТЕ!</h1>

            <Footer
                buttons={buttons}
            />
        </>
      )
}

export default AllServicesPage