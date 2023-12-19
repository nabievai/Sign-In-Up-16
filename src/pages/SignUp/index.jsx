import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CustomInput from "../../components/custom-input";
import { Link } from 'react-router-dom';
import ChexBox from '../../components/chexbox'
import OrDesign from "../../components/orDesign";
import GoogleLink from "../../components/googleLink";
import Button from "../../components/button";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import Logo from "../../assets/icons/Logo 1.png";

import styles from "./styles.module.scss";

const FormContainer = () => {
  const schema = yup.object().shape({
    userFullName: yup.string().min(5, 'поле userName должно состоять из 5 символов'),
    userPassword: yup.string().required('Password is required'),
    userConfirmPassword: yup.string()
       .oneOf([yup.ref('userPassword'), null], 'Passwords must match'),
    // userEmail: yup.string().email('Поле должно быть email')
    userEmail: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Поле должно быть email')
  })

  const formMethods = useForm({
    defaultValues: {
      userFullName: "",
      userEmail: "",
      userPassword: "",
      userConfirmPassword: "",
      agree: ""
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const passwordMatchValidator = (value) => {
  //   const password = formMethods.getValues("userPassword");
  //   return value === password || "Passwords should match";
  // };

  const onSubmit = (data) => {
    console.log("data", data);
  };
  


// const isEmailValid = (value) => {
//   const emailWithoutDomain = value.split('@')[0];
//   return emailWithoutDomain.length >= 5;
// };




  return (
    <div className={styles["container"]}>
      <FormProvider {...formMethods}>
        <div className={styles["logo-text"]}>
          <img src={Logo} alt="Logo" />
          <h1>Create an Account</h1>
          <p>Sign up now to get started with an account.</p>
         <GoogleLink />
        </div>
        <OrDesign />
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className={styles['margin']}>
        <Controller
            name="userFullName"
            control={formMethods.control}
            // rules={{ minLength: 5 }}
            render={({ field, fieldState }) => (
              <CustomInput
                className={styles["input"]}
                type="text"
                label="Full name"
                isRequired={true}
                {...field}
              />
            )}
          />
          {formMethods.formState.errors.FullName && (
            <p className={styles["error-message"]}>Full Name must be at least 5 characters long</p>
          )}
        </div>
          <div className={styles['margin']}>
          <Controller
            name='userEmail'
            control={formMethods.control}
            // rules={{
            //   validate: {
            //     emailLength: isEmailValid
            //   }
            // }}
            render={({ field, fieldState }) => (
              <div>
                <CustomInput
                  className={styles['input']}
                  type='email'
                  isRequired={true}
                  label='Email Address'
                  {...field}
                />
                {fieldState?.error && (
                  <p className={styles['error-message']}>Email must be at least 5 characters long</p>
                )}
              </div>
            )}
          />
          </div>
         <div className={styles['margin']}>
         <div className={styles["input-password"]}>
          <Controller
            name='userPassword'
            control={formMethods.control}
            // rules={{ minLength: 5 }}
            render={({ field, fieldState }) => (
              <div className={styles['input-password']}>
                <CustomInput
                  label='Password'
                  isRequired={true}
                  type={showPassword ? 'text' : 'password'}
                  {...field}
                />
                <div className={styles['eye-icon']} onClick={togglePasswordVisibility}>
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </div>
                {fieldState?.error && (
                  <p className={styles['error-message']}>Password must be at least 5 characters long</p>
                )}
              </div>
            )}
          />
          </div>
         </div>
         <div className={styles['margin']}>
         <div className={styles["input-password"]}>
            <Controller
              name="userConfirmPassword"
              control={formMethods.control}
              // rules={{ validate: passwordMatchValidator }}
              render={({ field, fieldState }) => (
                <>
                  <CustomInput
                    label="Confirm Password"
                    name="ConfirmPassword"
                    isRequired={true}
                    type={showPassword ? "text" : "password"}
                    {...field}
                  />
                  <div 
                  className={styles["eye-icon"]} 
                  onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible size={20} />
                    ) : (
                      <AiOutlineEye size={20} />
                    )}
                  </div>
                  {fieldState?.error && (
                    <p className={styles["error-message"]}>
                      {fieldState?.error?.message}
                      </p>
                  )}
                </>
              )}
            />
          </div>
         </div>
             <div className={styles['chexbox-link']}>
             <ChexBox label=" I have read and agree to the" name="agree" />
              <a href="#" className={styles['footer-link']}>Terms of Service</a>
             </div>
             <Button />
        </form>
        <div className={styles['link-text']}>
          <p>Already have an account?</p>
          <Link to="/">Log in</Link>
        </div>
      </FormProvider>
    </div>
  );
};

export default FormContainer;
