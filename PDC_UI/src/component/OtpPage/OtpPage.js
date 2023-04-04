import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import postData from '../../features/heplers';
import { login } from '../../features/uesrSlice';
import './OtpPage.css';
function OtpPage(phone) {
  const num1 = useRef();
  const num2 = useRef();
  const num3 = useRef();
  const num4 = useRef();
  const num5 = useRef();
  const num6 = useRef();
  const handleOtp1Change = (value) => {
    num2.current.focus();
  };
  const handleOtp2Change = (value) => {
    num3.current.focus();
  };
  const handleOtp3Change = (value) => {
    num4.current.focus();
  };
  const handleOtp4Change = (value) => {
    num5.current.focus();
  };
  const handleOtp5Change = (value) => {
    num6.current.focus();
  };
  const handleOtp6Change = (value) => {
    // num4.current.focus();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeModal = (e) => {
    // e.preventDefault();
    document.querySelector('.OtpPage').classList.add('hiddenOtp');
    navigate('/');
    window.location.reload();
  };

  const handleOtpNo = async (e) => {
    e.preventDefault();
    const newOtp =
      num1.current.value +
      num2.current.value +
      num3.current.value +
      num4.current.value +
      num5.current.value +
      num6.current.value;
    console.log(newOtp);
    const phoneNumber = parseInt(phone);
    const otp = parseInt(newOtp);
    const realOtp = 123456;
    await postData('http://18.237.123.69:3000/auth/login', {
      phone: phoneNumber,
    })
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
        if (otp === realOtp) {
          dispatch(login({ data }));
          navigate('/');

          // closeModal();
        } else {
          num1.current.value = '';
          num2.current.value = '';
          num3.current.value = '';
          num4.current.value = '';
          num5.current.value = '';
          num6.current.value = '';
          num1.current.focus();
          return alert('Please enter a Correct Otp !');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div id='Otp-model' className='OtpPage'>
      <div className='Otp-content'>
        <div className='model-container'>
          <div className='col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 text-center'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={closeModal}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
            <form className='rounded bg-white shadow p-5'>
              <div className='logo'>
                <img src='/images/logo.png' className='img-fluid' alt='logo' />
                <h3 className='text-dark fw-bolder fs-4 mb-2'>
                  Verify OTP
                </h3>
              </div>

              <div className='fw-normal text-muted mb-4'>
                Enter the verification code we sent to ******9123
              </div>

              <div className='otp_input text-start mb-2'>
                <label for='digit'>Type your 6 digit security code</label>
                <div className='d-flex align-items-center justify-content-between mt-2'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder=''
                    maxLength='1'
                    size='1'
                    max='1'
                    pattern='[0–9]{1}'
                    onChange={(e) => handleOtp1Change(e.target.value)}
                    ref={num1}
                  />

                  <input
                    type='text'
                    className='form-control'
                    maxLength='1'
                    size='1'
                    max='1'
                    pattern='[0–9]{1}'
                    onChange={(e) => handleOtp2Change(e.target.value)}
                    ref={num2}
                  />

                  <input
                    type='text'
                    className='form-control'
                    maxLength='1'
                    size='1'
                    max='1'
                    pattern='[0–9]{1}'
                    onChange={(e) => handleOtp3Change(e.target.value)}
                    ref={num3}
                  />

                  <input
                    type='text'
                    className='form-control'
                    maxLength='1'
                    size='1'
                    max='1'
                    pattern='[0–9]{1}'
                    onChange={(e) => handleOtp4Change(e.target.value)}
                    ref={num4}
                  />

                  <input
                    type='text'
                    className='form-control'
                    maxLength='1'
                    size='1'
                    max='1'
                    pattern='[0–9]{1}'
                    onChange={(e) => handleOtp5Change(e.target.value)}
                    ref={num5}
                  />

                  <input
                    type='text'
                    className='form-control'
                    maxLength='1'
                    size='1'
                    max='1'
                    pattern='[0–9]{1}'
                    onChange={(e) => handleOtp6Change(e.target.value)}
                    ref={num6}
                  />
                </div>
              </div>

              <button
                type='submit'
                onClick={handleOtpNo}
                className='btn btn-primary submit_btn my-4'
              >
                Submit
              </button>

              <div className='fw-normal text-muted mb-2'>
                Didn't get the code ?
                <a
                  className='resendOtp fw-bold text-decoration-none'
                  href='#'
                >
                  Resend
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpPage;
