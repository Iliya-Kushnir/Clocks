import React from "react";
import PropTypes from "prop-types";
import styles from "./ReadMoreBtn.module.scss";

const ReadMoreBtn = (props) => {
    const {onClick, type, btnLabel} = props

    return (
        <button
        className={styles.readMoreBtn}
        onClick={onClick}
        type={type}
        >
            {btnLabel}
        </button>
    )
}

ReadMoreBtn.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    btnLabel: PropTypes.string
}

export default ReadMoreBtn