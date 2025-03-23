import React, {useRef} from "react";
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
  const section2Ref = useRef(null);

  const handleScroll = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

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
           mainText={t("allServices.title")}
           secondaryText={t("allServices.subtitle")}
           imgSrc="/compressed/ServicesBanner.png"
           imgAlt="Banner Image"
           />

           <h1 className={styles.SectionHeading}>{t("allServices.sectionHeading")}</h1>

            <Services
            cards={cards}
            />

            <h1 className={styles.SectionHeading}>{t("homePage.examplesTitle")}</h1>

            <BeforeAfterLine
              beforeSrc1="/compressed/BeforeafterHome5.png"
              afterSrc1="/compressed/BeforeafterHome6.png"

              beforeSrc2="/compressed/BeforeafterHome7.png"
              afterSrc2="/compressed/BeforeafterHome8.png"

              beforeSrc3="/compressed/BeforeafterHome3.png"
              afterSrc3="/compressed/BeforeafterHome4.png"
            />

            <h1  className={styles.SectionHeading}>{t("homePage.findUsTitle")}</h1>

            <div ref={section2Ref}>
              <MapSection 
                adress={t("homePage.adress")}
              />
            </div>

            <h1 className={styles.Delivery}>{t("homePage.deliveryText")}</h1>

            <Footer
                buttons={buttons}
            />
        </>
      )
}

export default AllServicesPage