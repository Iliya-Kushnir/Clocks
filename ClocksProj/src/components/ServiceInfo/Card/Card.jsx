import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
    const {title, text, points, image} = props

    return (
        <div className={styles.cardWrapper}>
        {image && (
          <img className={styles.image} src={image} alt="illustration"/>
        )}
        <div className={styles.textWrapper}>
          <h2 className={styles.label}>{title}</h2>
          <p className={styles.text}>{text}</p>
          {points && points.length > 0 && (
            <ul className={styles.list}>
              {points.map((point, index) => (
                <li className={styles.point} key={index}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
}

export default Card