import React from "react";
import { Input as AntInput } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import styles from './styles.module.scss';

const CustomInput = ({ name, type, label, placeholder, isRequired }) => {
  const { control } = useFormContext();
  return (
    <div className={styles['custom-input-container']}>
      <label htmlFor={name} className={styles['custom-label']}>
        {label}
        {isRequired && <span className={styles['required']}>*</span>}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          return (
            <AntInput
              type={type}
              id={name}
              size="large"
              placeholder={placeholder}
              className={styles['custom-input']}
              {...field}
            />
          );
        }}
      />
    </div>
  );
};

export default CustomInput;
