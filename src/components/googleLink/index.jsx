import React from "react";

import styles from './styles.module.scss'

const GoogleLink = () => {
    return (
    <a href="#" className={styles["google"]}>
        <i className={styles["google-icon"]}></i>
        <p>Sign up with Google</p>
    </a>
    )
}

export default GoogleLink;