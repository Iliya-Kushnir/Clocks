import React from "react";
import PropTypes from "prop-types";
import styles from "./PriceList.module.scss";
import { useLanguage } from "../../LanguageContext/LanguageContext";

const PriceList = ({ services }) => {
  const {t} = useLanguage()
  

    return (
        <div className={styles.tableContainer}>
        <table className={styles.priceList}>
          <thead className={styles.topLine}>
            <tr>
              <th className={styles.service}>{t("pricePage.service")}</th>
              <th className={styles.cost}>{t("pricePage.cost")}</th>
              <th className={styles.duration}>{t("pricePage.duration")}</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.price}</td>
                <td>{service.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.redText}>{t("pricePage.redText")}</p>
      </div>
    )
}

export default PriceList