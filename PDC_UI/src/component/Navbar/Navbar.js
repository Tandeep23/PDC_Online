import React from 'react';
import './Navbar.css';
import $ from 'jquery';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/uesrSlice';
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOut = (e) => {
    e.preventDefault();
    navigate('/');
    dispatch(logout());
  };
  $(document).ready(function () {
    // Fix for "hamburger menu" not collapsing after a click on menu item
    $('navbar-nav')
      .find('li')
      .on('click', 'a', function () {
        $('.navbar-collapse.in').collapse('hide');
      });

    // Add smooth scrolling to all nav links
    $(".navbar-nav a,  a[href='#home']").on('click', function (event) {
      // Don't scroll if on a mobile phone, it's too awkward
      if (this.hash !== '' && $(window).width() > 480) {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Scroll to hash tag in 700 ms
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          500,
          function () {
            // Add hash (#) to URL when done scrolling
            window.location.hash = hash;
          }
        );
      }
    });
  });
  return (
    <>
      <div className='Navbar'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#home'>
            <img src='/images/logo.png' alt='' />
          </a>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>

            <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  SERVICES
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item' href='#services'>
                  VETERINARY
                  </a>
                  <a className='dropdown-item' href='#services'>
                    INSURANCE
                  </a>
                  <a className='dropdown-item' href='#services'>
                    SHOP
                  </a>
                </div>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='#career'  data-toggle='dropdown'>
                  CAREER
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a className='dropdown-item'>
                  WORKING IN PDC CENTERS
                  </a>
                </div>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='#about-us'>
                  ABOUT US
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#locations'>
                  LOCATIONS
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#contact-us'>
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          {user !== null ? (
            <div className='buttons'>
              <button
                className='btn'
                id='logoutBtn'
                onClick={logOut}
                href='#logout'
              >
                Logout
              </button>
            </div>
          ) : (
            <div className='buttons'>
              <button
                className='btn'
                id='signInBtn'
                data-toggle='modal'
                data-target='#modalLoginForm'
                data-backdrop='static'
                data-keyboard='false'
                href='#signin'
              >
                LOGIN / SIGNUP
              </button>
            </div>
          )}

          <button className='navbar-toggler' type='button'>
            <span className='navbar-toggler-icon'></span>
          </button>
        </nav>
      </div>
      <Login />
    </>
  );
}

export default Navbar;
