import React from "react";
import PropTypes from "prop-types";
import styles from "./BeforeAfterLine.module.scss";
import BeforeAfterCard from "./BeforeAfterCard/BeforeAfterCard.jsx";

const BeforeAfterLine = ({beforeSrc1, beforeSrc2, beforeSrc3, beforeAlt1, beforeAlt2, beforeAlt3, afterSrc1, afterSrc2, afterSrc3}) => {

    return (
        <div className={styles.SectionWrapper}>
            <BeforeAfterCard
            beforeSrc={beforeSrc1}
            beforeAlt={beforeAlt1}
            afterSrc={afterSrc1}
            afterAlt="After photo1"
            />

            <BeforeAfterCard
            beforeSrc={beforeSrc2}
            beforeAlt={beforeAlt2}
            afterSrc={afterSrc2}
            afterAlt="After photo2"
            />

            <BeforeAfterCard
            beforeSrc={beforeSrc3}
            beforeAlt={beforeAlt3}
            afterSrc={afterSrc3}
            afterAlt="After photo1"
            />
        </div>
    )
}

export default BeforeAfterLine