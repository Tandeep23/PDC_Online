import React from 'react';

import {Routes, Route, useNavigate} from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import Profile from '../../Pages/Profile/Profile';
import './Dashboard.css';
function Dashboard() {

    const navigate = useNavigate();
    const navigateProfile = () => {
        // 👇️ navigate to /
        navigate('/Profile');
      };
    return (
        <>
            <Navbar />
            <div class="backImg">
                <img href="#" class="backImage" src="/images/background.jpg" />
            </div>
            <div class="container dynamicTile">
                <div class="row ">
                    <h1>Welcome Tandeep ! Explore our Services ..</h1>
                </div>
                <div class="row">
                    <div class="col-sm-2 col-xs-3">
                        <div class="item active" onClick={navigateProfile}>
                            {/* <img href="#" class="profileImg" src="/images/profile.png" /> */}
                            <h3>User Profile & Pet profile</h3>

                        </div>
                    </div>
                    <div class="col-sm-2 col-xs-3">
                        <div class="item active">
                            <img href="#" class="bookingImg" src="" />
                            <h3>Instant Bookings</h3>

                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-sm-2 col-xs-3">
                        <div class="item active">
                            <img href="#" class="shopImg" src="" />
                            <h3> Shop Food & Accessories</h3>

                        </div>
                    </div>
                    <div class="col-sm-2 col-xs-3">
                        <div class="item active">
                            <img href="#" class="vetCare" src="" />
                            <h3>Veterinary & Insurance</h3>

                        </div>
                    </div>
                    <div class="col-sm-2 col-xs-3">
                        <div class="item active">
                            <img href="#" class="rewards" src="" />
                            <h3>Rewards and FAQs</h3>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Dashboard;
