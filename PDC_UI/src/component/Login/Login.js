import React from 'react';
import { useState } from 'react';
import './Login.css';
import OtpPage from '../OtpPage/OtpPage';
import { useEffect } from 'react';
import EmailSignIn from '../Email-SignIn/Email-SignIn';
import EmailSignUp from '../EmailSignUp/EmailSignUp';
import postData from '../../features/heplers';
const Login = () => {
  const [value, setValue] = useState('');
  const [isotp, setIsotp] = useState(false);
  const [phone, setPhone] = useState('');

  const [email, setEmail] = useState('');
  const [click, setClick] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const closeModal = (e) => {
    document.querySelector('.login-modal').classList.add('hideModal');
    setClick(true);
  };
  useEffect(() => {}, [isEmailExist, click]);

  const handleOtp = async (e) => {
    e.preventDefault();
    const phoneNo_pattern = new RegExp(/^\d{10}$/);
    const email_pattern = new RegExp(
      /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/g
    );

    if (
      value === '' ||
      value === undefined ||
      (!phoneNo_pattern.test(value) && !email_pattern.test(value))
    ) {
      return alert('Please enter a valid phone number or Email !');
    } else if (phoneNo_pattern.test(value)) {
      // API CALL FOR PHONE NO
      setIsotp(true);
      setPhone(value);
      console.log('phone No is ', value);
    } else {
      console.log('here is call for email');
      setEmail(value);
      await postData('http://18.237.123.69:3000/auth/checkIFExists', {
        tag: 'email',
        value: value,
      })
        .then((data) => {
          console.log('data ', data.data);
          let check = data.data;
          setIsEmailExist(true);
          closeModal();
          if (check === true) {
          } else {
            setIsEmailExist(false);
          }
          setIsotp(true);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
  return (
    <>
      {isotp === true ? (
        email !== '' ? (
          isEmailExist === false ? (
            <EmailSignUp Email={email} />
          ) : (
            <EmailSignIn Email={email} />
          )
        ) : (
          <OtpPage phone={phone} />
        )
      ) : (
        <div className='login-modal hideModal' id='modalLoginForm'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header text-center'>
                <h5 className='modal-title w-100 font-weight-bold'>
                  Login / SignUp
                </h5>
                <button
                  type='button'
                  className='close-login-btn btn'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={closeModal}
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body mx-4'>
                <div className='md-form mb-1'>
                  <input
                    type='text'
                    id='defaultForm'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='form-control validate'
                    placeholder='Phone No / Email'
                  />
                   <i className='emailIcon fas fa-envelope prefix grey-text' ></i>
                  <label
                    data-error='wrong'
                    data-success='right'
                    htmlFor='defaultForm'
                  ></label>
                </div>
                <div><a className='register w-100 font-weight-bold' href='#' >
                    New user ? Sign up to continue
                  </a></div>
              </div>
              <div className='modal-footer d-flex justify-content-center'>
                <button
                  onClick={handleOtp}
                  id='otpBtn'
                  className='btn btn-default'
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
