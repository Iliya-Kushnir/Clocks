import React from "react";
import PropTypes from "prop-types";
import styles from "./PriceList.module.scss";

const PriceList = ({ services }) => {
  

    return (
        <div className={styles.tableContainer}>
        <table className={styles.priceList}>
          <thead className={styles.topLine}>
            <tr>
              <th className={styles.service}>Услуга</th>
              <th className={styles.cost}>Цена</th>
              <th className={styles.duration}>Срок</th>
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
      </div>
    )
}

export default PriceList