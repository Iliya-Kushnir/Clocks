import React from "react";
import PropTypes from "prop-types";
import styles from "./Services.module.scss";
import ServiceCard from "./ServiceCard/ServiceCard.jsx";
import { useLanguage } from "../../LanguageContext/LanguageContext.jsx";

const Services = (props) => {
    const {t} = useLanguage()
    const {cards} = props

    return (
    <>
        <div className={styles.ServicesWrapper}>
            {cards.map((card, index) => (
                <ServiceCard
                key={index}
                serviceName={card.serviceName}
                serviceSrc={card.serviceSrc}
                serviceAlt={card.serviceAlt}
                link={card.link}
                />
            ))}
        </div>
        <p className={styles.redText}>{t("servicesRedTxt.redText")}</p>
    </>
    )
}

Services.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            serviceName: PropTypes.string.isRequired,
            serviceSrc: PropTypes.string.isRequired,
            serviceAlt: PropTypes.string.isRequired
        })
    ).isRequired
}

export default Services