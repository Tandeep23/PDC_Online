import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer>
      <div className='container-fluid'>
        <div className='row'>
          <div id='fCol1' className='col-md-3'>
            <div
              id='hrh-logo3417Widget859318'
              className='customWidget hrh-logo3417Widget pageWidgetId859318'
            >
              <a className='logo' href='#'>
                {' '}
                <img
                  src='/images/logo1.png'
                  alt='PDC - Pet day care'
                  className='loaded animated fadeIn'
                />{' '}
              </a>
            </div>
          </div>
          <div id='fCol2' className='col-md-3'>
            <div
              id='textWidget854572'
              className='textWidget pageWidgetId854572'
            >
              <h4>Connect with Us</h4>
              <a className='tel' href='tel:+18777387752'>
                9756506071
              </a>
              <a className='email' href='mailto:feedback@petparadiseresort.com'>
                feedback@pdcare.co.in
              </a>
              <div className='social-icons'>
                <a href='#' className='fa fa-facebook'></a>
                <a href='#' className='fa fa-twitter'></a>
                <a href='#' className='fa fa-google'></a>
                <a href='#' className='fa fa-linkedin'></a>
              </div>
            </div>
          </div>
          <div id='fCol4' className='col-md-2 col-md-offset-1'>
            <div
              id='viz-navigationWidget859316'
              className='customWidget viz-navigationWidget pageWidgetId859316'
            >
                  <a
                    href='#'
                    target='_self'
                  >
                    Privacy Policy | Terms of Use | Terms and Conditions
                  </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
