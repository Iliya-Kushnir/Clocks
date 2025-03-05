import React from "react";
import PropTypes from "prop-types";
import styles from "./MainButton.module.scss";

const MainButton = (props) => {
    const {onClick, label} = props

    return (
        <button
        className={styles.mainButton}
        onClick={onClick}
        type="Button"
        >
            {label}
        </button>
    )
}

MainButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default MainButton
