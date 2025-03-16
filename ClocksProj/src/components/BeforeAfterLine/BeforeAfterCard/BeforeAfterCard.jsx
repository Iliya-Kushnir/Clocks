import React from "react";
import styles from "./BeforeAfterCard.module.scss";
import PropTypes from "prop-types";
import { useLanguage } from "../../../LanguageContext/LanguageContext";

const BeforeAfterCard = (props) => {
    const {beforeSrc, beforeAlt, afterSrc, afterAlt} = props

    const {t} = useLanguage()
    return (
        <div className={styles.cardPairWrapper}>
            <div className={styles.cardWrapper}>
                <img className={styles.cardImg} src={beforeSrc} alt={beforeAlt} />
                <h1 className={styles.text}>{t("beforeAfter.before")}</h1>
            </div>
            <div className={styles.cardWrapper}>
                <img className={styles.cardImg} src={afterSrc} alt={afterAlt} />
                <h1 className={styles.text}>{t("beforeAfter.after")}</h1>
            </div>
        </div>
    )
}

BeforeAfterCard.propTypes = {
    beforeSrc: PropTypes.string,
    beforeAlt: PropTypes.string,
    afterSrc: PropTypes.string,
    afterAlt: PropTypes.string
}

export default BeforeAfterCard