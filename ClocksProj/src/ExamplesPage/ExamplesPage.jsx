import React from "react";
import styles from "./ExamplesPage.module.scss";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import BeforeAfterLine from "../components/BeforeAfterLine/BeforeAfterLine.jsx";
import MapSection from "../components/MapSection/MapSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

const ExamplesPage = () => {

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

            <h1 className={styles.SectionHeading}>Примеры работ</h1>

            <img className={styles.bigImage} src="/compressed/BigWatchConstructor.png" alt="" />
           
            <BeforeAfterLine/>

            <BeforeAfterLine/>

            <MapSection/>

            <Footer
                buttons={buttons}
            />
        </>
      )
}

export default ExamplesPage