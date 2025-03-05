import React from "react";
import PropTypes from "prop-types";
import styles from "./BeforeAfterLine.module.scss";
import BeforeAfterCard from "./BeforeAfterCard/BeforeAfterCard.jsx";

const BeforeAfterLine = () => {

    return (
        <div className={styles.SectionWrapper}>
            <BeforeAfterCard
            beforeSrc=""
            beforeAlt="Before photo1"
            afterSrc=""
            afterAlt="After photo1"
            />

            <BeforeAfterCard
            beforeSrc=""
            beforeAlt="Before photo2"
            afterSrc=""
            afterAlt="After photo2"
            />

            <BeforeAfterCard
            beforeSrc=""
            beforeAlt="Before photo3"
            afterSrc=""
            afterAlt="After photo3"
            />
        </div>
    )
}

export default BeforeAfterLine