import React, { useEffect, useState } from 'react';
import Aboutus from '../../component/About-us/Aboutus';
import Contactus from '../../component/Contact-us/Contactus';
import Footer from '../../component/Footer/Footer';
import MidSection from '../../component/MidSection/MidSection';
import Navbar from '../../component/Navbar/Navbar';
import SlideShow from '../../component/SlideShow/SlideShow';
import './Home.css';
function Home({ getObj }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  };
  return (
    <div className='Home'>
      <Navbar getObj={getObj} />
      <SlideShow />
      <MidSection />
      <Aboutus />            
      <h1 id='servies' className='big-headings'>
      </h1>
      <h1 id='contact-us' className='big-headings'>
        CONTACT US
      </h1>
      <Contactus />
      <Footer />{' '}
      {showButton && (
        <button onClick={scrollToTop} className='back-to-top'>
          <i className='fa fa-angle-up'></i>
        </button>
      )}
    </div>
  );
}

export default Home;
