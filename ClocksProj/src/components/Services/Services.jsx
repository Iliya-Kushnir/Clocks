import React from "react";
import PropTypes from "prop-types";
import styles from "./Services.module.scss";
import ServiceCard from "./ServiceCard/ServiceCard.jsx";

const Services = (props) => {
    const {cards} = props

    return (
        <div className={styles.ServicesWrapper}>
            {cards.map((card, index) => (
                <ServiceCard
                key={index}
                serviceName={card.serviceName}
                serviceSrc={card.serviceSrc}
                serviceAlt={card.serviceAlt}
                />
            ))}
        </div>
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