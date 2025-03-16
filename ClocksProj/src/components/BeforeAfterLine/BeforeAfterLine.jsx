import React from "react";
import PropTypes from "prop-types";
import styles from "./BeforeAfterLine.module.scss";
import BeforeAfterCard from "./BeforeAfterCard/BeforeAfterCard.jsx";

const BeforeAfterLine = () => {

    return (
        <div className={styles.SectionWrapper}>
            <BeforeAfterCard
            beforeSrc="/images/example1.png"
            beforeAlt="Before photo1"
            afterSrc="/images/example12.png"
            afterAlt="After photo1"
            />

            <BeforeAfterCard
            beforeSrc="/images/example2.png"
            beforeAlt="Before photo2"
            afterSrc="/images/example22.png"
            afterAlt="After photo2"
            />

            <BeforeAfterCard
            beforeSrc="/images/example1.png"
            beforeAlt="Before photo1"
            afterSrc="/images/example12.png"
            afterAlt="After photo1"
            />
        </div>
    )
}

export default BeforeAfterLine