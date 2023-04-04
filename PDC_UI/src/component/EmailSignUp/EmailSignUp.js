import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import postData from '../../features/heplers';
import { login } from '../../features/uesrSlice';
import './EmailSignUp.css';
function EmailSignUp(Email) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
  const dispatch = useDispatch();

  const closeModal = (e) => {
    e.preventDefault();
    document.querySelector('.Emailmodal').classList.add('hideEmailModal');
    navigate('/');
    window.location.reload();
  };
  const emailsignUp = async (e) => {
    e.preventDefault();
    if (password !== cnfPassword) {
      return alert('Please enter a Same Password !');
    } else {
      await postData('http://18.237.123.69:3000/auth/registerViaEmail', {
        name: fullName,
        email: Email.Email,
        password: password,
        phoneNumber: phoneNumber,
      })
        .then((data) => {
          console.log(data); // JSON data parsed by
          dispatch(login({ data }));
          navigate('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div className='Emailmodal' id='EmailmodalLoginForm'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header text-center'>
            <h5 className='modal-title w-100 font-weight-bold'>
             Register
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={closeModal}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body mx-2'>
            <div className='md-form mb-3'>
              <input
                type='text'
                id='fullName'
                onChange={(e) => setFullName(e.target.value)}
                className='form-control validate'
                placeholder='Fullname'
                required
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='fullName'
              ></label>
            </div>
            <div className='md-form mb-3'>
              <input
                type='text'
                id='email'
                value={Email.Email}
                readOnly
                // onChange={(e) => setValue(e.target.value)}
                className='form-control validate'
                // required
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='email'
              ></label>
            </div>
            <div className='md-form mb-3'>
              <input
                type='text'
                id='username'
                onChange={(e) => setUsername(e.target.value)}
                className='form-control validate'
                placeholder='Username'
                required
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='username'
              ></label>
            </div>
            <div className='md-form mb-3'>
              <input
                type='text'
                id='phoneNumber'
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Phone number'
                className='form-control validate'
                required
              />
              <label data-error='wrong' data-success='right' htmlFor='password'>
                {/* Your password */}
              </label>
            </div>
            <div className='md-form mb-3'>
              <input
                type='password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                className='form-control validate'
                required
              />
              <label data-error='wrong' data-success='right' htmlFor='password'>
                {/* Your password */}
              </label>
            </div>
            <div className='md-form mb-3'>
                <input
                type='password'
                id='confirm-password'
                placeholder='Confirm password'
                onChange={(e) => setCnfPassword(e.target.value)}
                className='form-control validate'
                required
              />
              <label
                data-error='wrong'
                data-success='right'
                htmlFor='confirm-password'
              ></label>
            </div>
          </div>
          <div className='modal-footer d-flex justify-content-center'>
            <button
              id='emailsignBtn'
              onClick={emailsignUp}
              className='btn btn-default'
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSignUp;
