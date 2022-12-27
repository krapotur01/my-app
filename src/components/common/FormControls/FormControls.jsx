import React from "react";
import styles from "./FormControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
            <textarea {...input} {...props} />
            { hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    )
}