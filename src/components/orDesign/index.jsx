import React from "react";

import styles from './styles.module.scss'

const orDesign = () => {
    return (
    <div className={styles["or"]}>
        <span className={styles["lines"]}></span>
        <span className={styles["or-after"]}></span>
        <span className={styles["lines"]}></span>
    </div>
    )
}

export default orDesign;