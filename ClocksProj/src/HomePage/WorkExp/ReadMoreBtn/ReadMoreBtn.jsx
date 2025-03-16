import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ReadMoreBtn.module.scss";


const ReadMoreBtn = (props) => {
    const {onClick, type, btnLabel} = props

    return (
        <Link to="/ExperiencePage">
            <button
            className={styles.readMoreBtn}
            onClick={onClick}
            type={type}
            >
                {btnLabel}
            </button>
        </Link>
    )
}

ReadMoreBtn.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    btnLabel: PropTypes.string
}

export default ReadMoreBtn