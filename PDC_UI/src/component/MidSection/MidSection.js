import React from 'react';
import './MidSection.css';
// import { data, Para } from './data';
import data from './data';
import Para from './data2';
function MidSection() {
  var index = 0;
  function handleClick(e) {
    e.preventDefault();
    var img = e.target.classList.value;
    // var box = document.querySelectorAll('.box-section');
    var photos = document.querySelectorAll('.images');
    for (let i = 0; i < photos.length; i++) {
      if (photos[i].classList.contains('active-img')) {
        photos[i].classList.remove('active-img');
      }
    }
    console.log(img);
    const boxHeading = document.querySelector('.box-section-heading');
    const boxPara = document.querySelector('.box-section-para');

    if (img === 'first-img images') {
      photos[0].classList.add('active-img');
      boxHeading.textContent = Para[0].title;
      boxPara.innerHTML = Para[0].text;
    } else if (img === 'second-img images') {
      photos[1].classList.add('active-img');
      boxHeading.textContent = Para[1].title;
      boxPara.innerHTML = Para[1].text;
    } else if (img === 'third-img images') {
      boxHeading.textContent = Para[2].title;
      boxPara.innerHTML = Para[2].text;
      photos[2].classList.add('active-img');
    } else if (img === 'forth-img images') {
      boxHeading.textContent = Para[3].title;
      boxPara.innerHTML = Para[3].text;
      photos[3].classList.add('active-img');
    }
  }
  function handlePrev(e) {
    e.preventDefault();
    index--;
    if (index < 0) {
      index = 3;
    }
    const para = document.querySelector('.testimonial');
    const source = document.querySelector('.sourceWords');
    console.log(source);
    para.textContent = data[index].text;
    source.textContent = data[index].author;
  }
  function handleNext(e) {
    e.preventDefault();
    index++;
    if (index > 3) {
      index = 0;
    }
    const para = document.querySelector('.testimonial');
    const source = document.querySelector('.sourceWordsl');
    para.textContent = data[index].text;
    source.textContent = data[index].author;
  }
  return (
    <div className='Mid-Section'>
      <div className='upper-section'  id='services'>
        <h1>WHAT ALL WE OFFERS YOU</h1>
        <div className='box-images' >
          <img
            src='/images/1.png'
            onClick={handleClick}
            className='first-img active-img images'
            alt=''
            id='first-img'
          />
          <img
            src='/images/2.png'
            onClick={handleClick}
            className='second-img images'
            alt=''
            id='second-img'
          />

          <img
            src='/images/3.png'
            onClick={handleClick}
            className='third-img images'
            alt=''
            id='third-img'
            
          />
          <img
            src='/images/4.png'
            onClick={handleClick}
            className='forth-img images'
            alt=''
            id='forth-img'

          />
        </div>
        <div className='box-section'>
          <h2 className='box-section-heading'>VETERINARY CARE</h2>
          <p className='box-section-para'>
            We are having an immediate assistance from our esteemed Vaternary doctors. 
            All our partnered Vaternary doctors are highly qualified and all contains a good experience on curing all of our pets.
          </p>
        </div>
      </div>
      <div className='mid-section'>
        <div className='left-mid'>
          <img src='./images/image1.png' alt='' />
          <p>
            We are active in multiple locations across india, for Booking / instant booking check availability on your nearby location.
          </p>
          <input type="text" name="checkpincode" /> <a href="#">Check Availability</a> 
        </div>
        <div className='divider-line'></div>
        <div className='right-mid'>
          <img src='./images/image2.png' alt='' />
          <p>
           Since you are our happy and satisfied customer, we offers you some token of happiness in return. Please login to checkout your more rewards.
          </p>
          <a href='#'>LEARN MORE</a>
        </div>
      </div>
      
      <div className='bottom-section'>
        <div className='section-slider'>
          <div className='slide-container'>
            <h3>We are happy to have you feedback</h3>
            <div className='feedbackDiv'>
            <textarea className='feedback'> "Describe yourself here..." </textarea>
            <button className='btnfeedback'> Submit feedback</button>
            </div>
            <p className='testimonial'>
            A Place better to have a pet , all the services are A1.
            Place is hygenic and well maintained. Pickup and delivery is also very good,
            Supportive staff and they treat pet like their own.
            </p>
            <span className='sourceWords'> - Tandeep Pujari</span>{' '}
          </div>
          <button className='btns prev-btn' onClick={handlePrev}>
            <i className='fas fa-chevron-left'></i>
          </button>

          <button className='btns next-btn' onClick={handleNext}>
            <i className='fas fa-chevron-right'></i>
          </button>
        </div>
        <div className='bottom-form'>
          <h3>Join Our Newsletter</h3>
          <p>Enter your email to receive new offers & updates!</p>
          <input type='text' />
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default MidSection;
