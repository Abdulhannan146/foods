import React from 'react';
import './Header.css';

import { profile1 } from '../../images/index';

const Header = () => {
  return (
    <header id='header' className='blur-effect'>
      <div className="stroke-text intro-text">
        Welcome To
        <img src={profile1} className='profile-photo' alt="Profile" />
      </div>
      <div className="section-wrapper header-container">
        <div className="column intro-container blur-effect">
          <div className="header-info">
            <div className="header-info-top">
              Alpha Food Solutions 
            </div>
            <div className="header-info-middle">
              <h1 className="primary-title header-title">Empowering the Food Industry through Quality Ingredients</h1>
              <p className="text-muted header-description">
                Alpha Food Solutions is a leading global trading company specializing in supplying high-quality food ingredients to the food and beverage industry. We connect food manufacturers, processors, and distributors with the finest ingredients from trusted sources worldwide.
              </p>
            </div>
            <div className="header-info-bottom">
              <button className='btn'>Our Services</button>
              <a href="mailto:abcd@gmail.com" className='btn'>Email Me</a>
            </div>
          </div>
        </div>
        <div className="column profile-wrapper">
          <div className='profile-photo-container'>
            {/* You can keep this div empty if the image is in the stroke-text */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
