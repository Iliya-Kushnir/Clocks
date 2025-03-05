import React from "react";
import styles from "./Logo.module.scss";
import PropTypes from "prop-types";

const Logo = (props) => {
    const {logoSrc, logoAlt} = props;

    return (
        <>
        <img className={styles.logo} src={logoSrc} alt={logoAlt} />
        </>
    )
}

Logo.propTypes = {
    logoSrc: PropTypes.string,
    logoAlt: PropTypes.string
}

export default Logo