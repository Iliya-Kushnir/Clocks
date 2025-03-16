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
import { useLanguage } from "../LanguageContext/LanguageContext.jsx";


const AllServicesPage = () => {
  const navigate = useNavigate()
  const {t} = useLanguage();



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
        { serviceName: t("ServiceCards.MechaicWatch"), serviceSrc: "/compressed/Watch.png", serviceAlt: "first", link: "/FirstService" },
        { serviceName: t("ServiceCards.Battery"), serviceSrc: "/compressed/Watch2.png", serviceAlt: "second", link: "/ThirdService" },
        { serviceName: t("ServiceCards.Polishing"), serviceSrc: "/compressed/Watch3.png", serviceAlt: "third", link: "/SecondService" },
        { serviceName: t("ServiceCards.Сleaning"), serviceSrc: "/compressed/Watch4.png", serviceAlt: "fourth", link: "/FifthService" },
        { serviceName: t("ServiceCards.Straps"), serviceSrc: "/compressed/Watch5.png", serviceAlt: "fifth", link: "/FourthService" },
        { serviceName: t("ServiceCards.Capital"), serviceSrc: "/compressed/Watch6.png", serviceAlt: "sixth", link: "/SixthService" }
      ];

      return (
        <>
            <Header
            buttons={buttons}
           />

           <Banner
           mainText="Услуги"
           secondaryText="Услуги от Мастерской Время!"
           imgSrc="/compressed/ServicesBanner.png"
           imgAlt="Banner Image"
           />

           <h1 className={styles.SectionHeading}>Услуги мастерской</h1>

            <Services
            cards={cards}
            />

            <h1 className={styles.SectionHeading}>{t("homePage.examplesTitle")}</h1>

            <BeforeAfterLine/>

            <h1  className={styles.SectionHeading}>{t("homePage.findUsTitle")}</h1>

            <MapSection
              adress={t("homePage.adress")}
            />

            <h1 className={styles.Delivery}>{t("homePage.deliveryText")}</h1>

            <Footer
                buttons={buttons}
            />
        </>
      )
}

export default AllServicesPage