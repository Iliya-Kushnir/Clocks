import React from "react";
import styles from "./Button.module.scss"

export const Button = ({children}) => {
    return (
        <>
        <button type="submit" className={styles.submit}>
            {children}
        </button>
        </>
    )
}