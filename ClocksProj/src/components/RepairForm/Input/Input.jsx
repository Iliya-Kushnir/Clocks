import React from "react";
import styles from './Input.module.scss'
import { Field, ErrorMessage as Error } from "formik";

 export const Input = ({id, label, name, placeholder}) => {
   

    return (
        <>
            <div id="helloWOlrd" className={styles.inpWrapper}>
                <label htmlFor={id}>{label}</label>
                <Field name={name} id={id} placeholder={placeholder}/>
                <Error name={name}>{(error) => <span className={styles.error}>{error}</span>}</Error>
            </div>
        </>
    )
}