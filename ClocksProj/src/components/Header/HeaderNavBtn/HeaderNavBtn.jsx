import React from "react";
import PropTypes from "prop-types";
import styles from "./HeaderNavBtn.module.scss";

const HeaderNavBtn = (props) => {
    const {onClick, type, label} = props;

    return (
        <button
        className={styles.HeaderButton} 
        onClick={onClick} 
        type={type}>
            {label}
        </button>
    )
}

HeaderNavBtn.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired,  
  };

  export default HeaderNavBtn