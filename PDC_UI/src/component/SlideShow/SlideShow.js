import React from 'react';
import './SlideShow.css';
function SlideShow() {
  var slideIndex = 1;
  function plusSlides() {
    slideIndex += 1;
    let i = 0;
    let slides = document.querySelectorAll('.slideshow-image');
    if (slideIndex === slides.length + 1) {
      slideIndex = 1;
      console.log('slide is here');
    }
    if (slideIndex < 1) {
      console.log('slide is not here');
      slideIndex = slides.length;
    }
    console.log('index is ', slideIndex);
    for (i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('active-slideshow')) {
        slides[i].classList.remove('active-slideshow');
      }
    }
    slides[slideIndex - 1].classList.add('active-slideshow');
  }

  function minusSlides() {
    console.log('index is ', slideIndex);
    slideIndex -= 1;
    console.log('index is ', slideIndex);

    let i = 0;
    let slides = document.querySelectorAll('.slideshow-image');
    // if (slideIndex === slides.length) {
    //   setSlideIndex(1);
    //   console.log('slide is here');
    // }
    if (slideIndex === 0) {
      console.log('slide is not here');
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('active-slideshow')) {
        slides[i].classList.remove('active-slideshow');
      }
    }
    slides[slideIndex - 1].classList.add('active-slideshow');
  }
  return (
    <div className='SlideShow'>
      {' '}
      <div className='slideshow-images'>
        <div className='slideshow-image active-slideshow'>
          <img src='/images/1st.jpg' alt='' />
        </div>
        <div className='slideshow-image'>
          <img src='/images/2nd.jpg' alt='' />
        </div>
        <div className='slideshow-image'>
          <img src='/images/3rd.jpg' alt='' />
        </div>
        <div className='slideshow-image'>
          <img src='/images/4th.jpg' alt='' />
        </div>

        <a className='prev' href='#' onClick={minusSlides}>
          ❮
        </a>
        <a className='next' href='#' onClick={plusSlides}>
          ❯
        </a>
      </div>
    </div>
  );
}

export default SlideShow;
