import React from "react";
import styles from "./ExamplesPage.module.scss";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import BeforeAfterLine from "../components/BeforeAfterLine/BeforeAfterLine.jsx";
import MapSection from "../components/MapSection/MapSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CallButton from "../components/CallBtn/CallBtn.jsx";
import { useLanguage } from "../LanguageContext/LanguageContext.jsx";


const ExamplesPage = () => {
  const {t} = useLanguage()
  const handleClick1 = () => navigate("/DeliveryPage");
  const handleClick2 = () => navigate("/PriceList");
  const handleClick3 = () => handleScroll(section2Ref);
  const handleClick4 = () => navigate("/AllServices");
  const handleClick5 = () => notify();

  const buttons = [
    { label: t("NavigationLinks.delivery"), onClick: handleClick1, type: 'button' },
    { label: t("NavigationLinks.price"), onClick: handleClick2, type: 'button' },
    { label: t("NavigationLinks.map"), onClick: handleClick3, type: 'button' },
    { label: t("NavigationLinks.services"), onClick: handleClick4, type: 'button' },
  ];

      return (
        <>
            <Header
            buttons={buttons}
           />

           <Banner
           mainText={t("examplesPage.title")}
           secondaryText={t("examplesPage.subtitle")}
           imgSrc="/compressed/ServicesBanner.png"
           imgAlt="Banner Image"
           />

           

            <img className={styles.bigImage} src="/compressed/BigWatchConstructor.png" alt="" />
           
            <BeforeAfterLine/>

            <BeforeAfterLine/>

            <CallButton />

            <h1 className={styles.SectionHeading}>{t("homePage.findUsTitle")}</h1>

            <MapSection
            adress={t("homePage.adress")}
            />

            <Footer
                buttons={buttons}
            />
        </>
      )
}

export default ExamplesPage