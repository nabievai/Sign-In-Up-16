import React from "react";

import styles from './styles.module.scss'

const Button = () => {
    return (
       <div className={styles['container']}>
         <input type="submit" value={"Get Started"} className={styles["btn"]} />
       </div>
    )
}

export default Button;