import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./ServiceCard.module.scss";
import PropTypes from "prop-types";

const ServiceCard = (props) => {
    const {serviceName, serviceSrc, serviceAlt, link} = props

    return (
        <div className={styles.cardWrapper}>
            <Link to={link} className={styles.cardLink}>  {/* Оборачиваем карточку в Link */}
                <p className={styles.cardText}>
                    {serviceName}
                </p>
                <img 
                    className={styles.vector} 
                    src="/compressed/Group.png" 
                    alt="vector" 
                />
                <img 
                    className={styles.backgroundCard} 
                    src={serviceSrc} 
                    alt={serviceAlt} 
                />
            </Link>
        </div>
    )
}

ServiceCard.propTypes = {
    serviceName: PropTypes.string,
    serviceSrc: PropTypes.string,
    serviceAlt: PropTypes.string,
    link: PropTypes.string.isRequired,
}

export default ServiceCard