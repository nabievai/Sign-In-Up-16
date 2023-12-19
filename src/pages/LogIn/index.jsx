import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { blue } from '@mui/material/colors';
import CustomInput from "../../components/custom-input";
import { Link } from 'react-router-dom';
import GoogleLink from '../../components/googleLink'
import OrDesign from '../../components/orDesign'
import Button from '../../components/button'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import Logo from '../../assets/icons/Logo 1.png'

import Chexbox from '../../components/chexbox';

import styles from './styles.module.scss'

const LogIn = () => {
  const schema = yup.object().shape({
    password: yup.number().min(10, 'число должно быть больше 10'),
    // userEmail: yup.string().email('Поле должно быть email')
    email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Поле должно быть email')
  })

  const formMethods = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const isEmailValid = (value) => {
  //   const emailWithoutDomain = value.split('@')[0];
  //   return emailWithoutDomain.length >= 5;
  // };


  const onSubmit = (data) => {
    console.log('data', data);
  };
  

  return (
    <div className={styles['container']}>
      <FormProvider {...formMethods}>
        <div className={styles['logo-text']}>
          <img src={Logo} alt="Logo" />
          <h1>Log in to your Account</h1>
          <p>Welcome back, please enter your details.</p>
          <GoogleLink />
          <OrDesign />
        </div>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <div className={styles['margin']}>
        <Controller
            name='email'
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
         <div>
         <div className={styles['input-password']}>
          <Controller
            name='password'
            control={formMethods.control}
            // rules={{ minLength: 5 }}
            render={({ field, fieldState }) => (
              <div className={styles['input-password']}>
                <CustomInput
                  label='Password'
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
            <div className={styles['chexbox-link']}>
            <Chexbox
            defaultChecked
            label="Remember me"
            name='rememberMe'
              {...label}
              sx={{
                color: blue[800],
                '&.Mui-checked': {
                  color: blue[600],
                },
              }}
            />
            <a href="#" className={styles['forgot-link']}>Forgot Password?</a>
            </div>
            <Button />
        </form>
        <div className={styles['link-text']}>
          <p>Don’t have an account?</p>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </FormProvider>
    </div>
  );
};

export default LogIn;

