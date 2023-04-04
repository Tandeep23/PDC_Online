import React from 'react';
import './Aboutus.css';
function Aboutus() {
  return (
    <>
      <div className='Aboutus'>
        <div className='Aboutus-background-container'>
        </div>
        <div className='about-container'>
          <div className='image-container'>
            <img src='./images/aboutus.jpg' alt='' />
          </div>

          <div className='Aboutus-text-container'>
            <h1 id='about-us'>About us</h1>
            <p>
              PDC "PET DAY CARE" is all about helping you with a complete caretaker of your pet. We provides many services so that it would be ease for you to be worried about your pet.
               <br /> PDC not only provides a day care but also it take care of you dog health with active checkup with all our esteemed{' '}
            </p>
            <a href='#'>Read More</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
