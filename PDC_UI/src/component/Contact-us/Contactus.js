import React from 'react';
import './Contactus.css';
function Contactus() {
  return (
    <>
      <div className='Contactus'>
        <div className='Contactus-content'>
          <div className='left-side'>
            <div className='address details'>
              <i className='fas fa-map-marker-alt'></i>
              <div className='topic'>Address</div>
              <div className='text-one'>Chiliyanaula, Ranikhet</div>
              <div className='text-two'>PIN - 263645</div>
            </div>
            <div className='phone details'>
              <i className='fas fa-phone-alt'></i>
              <div className='topic'>Phone</div>
              <div className='text-one'>+91-9756506071</div>
              <div className='text-two'>+91-9756506071</div>
            </div>
            <div className='email details'>
              <i className='fas fa-envelope'></i>
              <div className='topic'>Email</div>
              <div className='text-one'>support.pdc@pdcare.com</div>
            </div>
          </div>
          <div className='right-side'>
            <div className='topic-text'>Send us a message</div>
            <p>
              For Daycare enquiry or any other issue, please write us. Our support person will reach out in shorter period of time
            </p>
            <form action='#'>
              <div className='Contactus-input-box'>
                <input type='text' placeholder='Enter your name' />
              </div>
              <div className='Contactus-input-box'>
                <input type='text' placeholder='Enter your email' />
              </div>
              <div className='Contactus-input-box message-box'>
                <textarea placeholder='Message'></textarea>
              </div>
              <div className='Contactus-button'>
                <input type='button' value='Send Now' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
