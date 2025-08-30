import React from 'react';
import myPicLogo from '/src/images/my_pic_logo.jpg';

function Header() {
  return (
    <div className="hero_section">
      <div className="logo_container">
        <p>Number Ninja</p>
      </div>
      <div className="my_pic_logo">
        <div className="user_id">
          <p>Nitish Sharma</p>
          <a href="https://x.com/pewcalypse">@pewcalypse</a>
        </div>
        <div className="user_image">
          <img src={myPicLogo} alt="my pic logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
