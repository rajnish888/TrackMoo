import React, { useState } from 'react';
import loginBg from '../../assets/images/loginBg.jpg';
import Logo from '../../assets/images/logo.svg'
import Input from '../../components/ui/input';
import mail from '../../assets/images/mail.svg'
import eyesClose from '../../assets/images/eyesClose.svg'
import googleStore from '../../assets/images/google-store.svg'
import appleStore from '../../assets/images/apple-store.svg'
import password from '../../assets/images/password.svg'
import Checkbox from '../../components/ui/Checkbox';
import Button from '../../components/ui/Button';
import './Login.css';


const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const [type,setType] = useState('password');

  const handleClick = () => {
    setType === 'text';
  }

  return (
    <div className='loginPage'>


      <div className='loginImgSec'>
        <img className='img-fluid' src={loginBg} alt="Login Background" />
      </div>

      <div className='loginFormSec'>
        <div className="formWrapper">
          <div className="formLogoTxt text-center">
            <img className='img-fluid' src={Logo} alt="Login Background" />
            <p>Enter your email or phone
              and password to sign in your account</p>
              
          </div>
          <div className='formInputField w-100'>

            <Input inputWrapperClass="mb-20" iconLeft={<img className='img-fluid' src={mail} alt='Email Icon' />} type='email' inputFieldClass='input-field' placeholder="Enter your mail" />
            <Input inputWrapperClass="mb-20" iconRight={<img className='img-fluid' src={eyesClose} alt='Email Icon'  />} iconLeft={<img className='img-fluid' src={password} alt='Email Icon' />} type='password' inputFieldClass='input-field' placeholder="Enter your password" />

            <div className='d-flex justify-content-between'>
              <div>
                <Checkbox label="Remember Me" />
              </div>
              <div className='forgotPswd'>
                <a href="#">Forgot Password? </a>
              </div>
            </div>

            <div className='loginBtn'>
              <Button variant="dark" className='w-100'>Login</Button>

              <div className="signUpTxt text-center mt-3 mb-4">
                <p>Don’t  have an account? <a href="#" className='text-decoration-none fw-semi-bold'> Sign up now.</a> </p>
              </div>
            </div>

          </div>

          <div className='appStoreWrapper w-100'>
              <div className='storeList rounded-3 p-2 mb-4'>
                <img src={googleStore} alt="" />
                <span className='fw-semi-bold'>Sign in Google </span>
              </div>
              <div className='storeList rounded-3 p-2'>
              <img src={appleStore} alt="" />
              <span className='fw-semi-bold'>Sign in with Apple </span>
              </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;
