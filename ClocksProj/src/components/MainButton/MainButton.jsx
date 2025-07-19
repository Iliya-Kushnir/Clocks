import React from "react";
import PropTypes from "prop-types";
import styles from "./MainButton.module.scss";

const MainButton = ({ onClick, label, className = "" }) => {
    return (
        <button
            className={`${styles.mainButton} ${className}`}
            onClick={onClick}
            type="button"
        >
            {label}
        </button>
    );
};

MainButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string, 
};

export default MainButton;
