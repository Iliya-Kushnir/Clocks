import React from "react";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import MapSection from "../components/MapSection/MapSection.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PriceList from "../components/PriceList/PriceList.jsx";
import styles from "./PricePage.module.scss";
import { useNavigate } from "react-router";
import { useLanguage } from "../LanguageContext/LanguageContext.jsx";

const PricePage = () => {
  const {t} = useLanguage()
  const handleClick1 = () => navigate("/DeliveryPage");
  const handleClick2 = () => navigate("/PriceList");
  const handleClick3 = () => handleScroll(section2Ref);
  const handleClick4 = () => navigate("/AllServices");
  const handleClick5 = () => notify();
  const navigate = useNavigate()

  const buttons = [
    { label: t("NavigationLinks.delivery"), onClick: handleClick1, type: 'button' },
    { label: t("NavigationLinks.price"), onClick: handleClick2, type: 'button' },
    { label: t("NavigationLinks.map"), onClick: handleClick3, type: 'button' },
    { label: t("NavigationLinks.services"), onClick: handleClick4, type: 'button' },
  ];

      const services = Object.values(t("ServicesList"));

      return (
        <>
            <Header
            buttons={buttons}
           />

           <Banner
           mainText="Расценки"
           secondaryText="Самые технологичные работы в Харькове"
           imgSrc="/compressed/PricePageBanner.png"
           imgAlt="Banner Image"
           />

            <div className={styles.p}>
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