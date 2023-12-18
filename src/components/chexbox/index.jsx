import React from "react";
import { useFormContext } from "react-hook-form";

import styles from './styles.module.scss'

const ChexBox = ({ label, name, link }) => {
    const { register } = useFormContext();

    return(
        <div className={styles['chexbox']}>
            <label>
                <input 
                    className={styles['checkbox']}
                    type="checkbox" 
                    name='rememberMe'
                    {...register(name, {required: `${label} is reqired`})}
                />
                {label}
            </label>
        </div>
    )
}

export default ChexBox;