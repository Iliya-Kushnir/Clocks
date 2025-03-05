import React from "react";
import styles from "./ServiceCard.module.scss";
import PropTypes from "prop-types";

const ServiceCard = (props) => {
    const {serviceName, serviceSrc, serviceAlt} = props

    return (
        <div className={styles.cardWrapper}>
                <p 
                className={styles.cardText}>
                    {serviceName}
                </p>
                <img 
                className={styles.vector} 
                src="/images/Group.png" 
                alt="vector" 
                />
                <img 
                className={styles.backgroundCard} 
                src={serviceSrc} 
                alt={serviceAlt} 
                />
        </div>
    )
}

ServiceCard.propTypes = {
    serviceName: PropTypes.string,
    serviceSrc: PropTypes.string,
    serviceAlt: PropTypes.string,
}

export default ServiceCard