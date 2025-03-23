import React, { forwardRef } from "react";
import styles from "./MapSection.module.scss";
import PropTypes from "prop-types";
import IslandMap from "./isLandMap/isLandMap.jsx";
import "leaflet/dist/leaflet.css";
import ConsultationForm from "./ConsultationForm/ConsultationForm.jsx";

const MapSection = forwardRef(({ adress }, ref) => {
  return (
    <div ref={ref} className={styles.sectionWrapper}>
      <div className={styles.adressSection}>
        <div className={styles.locationSection}>
          <img className={styles.pointer} src="/compressed/Vector.png" alt="MapPointer" />
          <p className={styles.adress}>{adress}</p>
        </div>

        <div className={styles.phoneSection}>
          <h1 className={styles.sectionLabel}>Телефон:</h1>

          <div className={styles.phoneWrapper}>
            <img className={styles.phoneIcon} src="/compressed/PhoneIcon.png" alt="phoneIcon" />
            <p className={styles.number}>+38 097-075-40-94 +38 095-739-86-14</p>
          </div>
        </div>
      </div>

      <ConsultationForm />
    </div>
  );
});

MapSection.propTypes = {
  adress: PropTypes.string.isRequired,
};

export default MapSection;
