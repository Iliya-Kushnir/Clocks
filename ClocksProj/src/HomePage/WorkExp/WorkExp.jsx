import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkExp.module.scss";
import ReadMoreBtn from "./ReadMoreBtn/ReadMoreBtn.jsx";
import { useLanguage } from "../../LanguageContext/LanguageContext.jsx";


const WorkExp = (props) => {
    const {
        label, 
        backgroundSrc, 
        firstSrc, 
        secondSrc,
        description
    } = props


    const {t} = useLanguage()
    
    //Я – опытный часовщик с более чем 20-летним стажем. Работаю с любыми видами часов – от классических механических до современных кварцевых и автоматических моделей. Любая поломка – это вызов, который я с удовольствием принимаю. Отреставрирую, настрою и верну вашим часам идеальную точность и внешний вид. Гарантирую качественный ремонт и индивидуальный подход к каждому заказу.
   // Ваши часы – в надежных руках!


    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.textSection}>
                <h1 className={styles.textHeading}>{label}</h1>
                <p className={styles.description}>{description}</p>
                <ReadMoreBtn
                type="button"
                onClick={() => {
                    console.log("Event listener works!")
                }}
                btnLabel={t("homePage.buttons.viewMore")}
                />
                <img className={styles.backgroundImg} 
                src={backgroundSrc} 
                alt="background image" 
                />
            </div>

            <div className={styles.imgSection}>
                <img className={styles.partImg} src={firstSrc} alt="First Image" />
                <img className={styles.partImg} src={secondSrc} alt="Second Image" />
            </div>
        </div>
    )
}

WorkExp.propTypes = {
    label: PropTypes.string,
    backgroundSrc: PropTypes.string,
    firstSrc: PropTypes.string,
    secondSrc: PropTypes.string,
    description: PropTypes.string
}

export default WorkExp