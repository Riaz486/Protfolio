import React, { useEffect, useState } from 'react';
import Logo1 from "../assets/img/logo/new_logo_white.png";
// import Mail1 from "../assets/img/icons/mail1.svg";
import Mail1 from "../assets/img/icons/whatsapp.png";

import Bar1 from "../assets/img/icons/bars-icons1.svg";

const Header = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light'; // false means dark
  });

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  const handleThemeToggle = () => {
    setIsLightMode(prev => !prev);
  };

  return (
    <header>
      <div className="header-area homepage1 header header-sticky" id="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-elements">
                <div className="site-logo">
                  <a href="index.html">
                    <img src={Logo1} alt="logo" />
                  </a>
                </div>

                <div className="btn-area d-lg-flex">
                  <div className="theme-toggle-container">
                    <label className="theme-switch">
                      <input
                        type="checkbox"
                        checked={isLightMode}
                        onChange={handleThemeToggle}
                      />
                      <span className="slider">
                        <i className="fas fa-moon icon moon-icon"></i>
                        <i className="fas fa-sun icon sun-icon"></i>
                      </span>
                    </label>
                  </div>

                  <a href="https://wa.me/923132445773" target="_blank" className="vl-btn1">
                    HIRE ME <span><img src={Mail1} alt="" width={23} height={23} /></span>
                  </a>

                  <button className="hamburger_menu">
                    <img src={Bar1} alt="menu icon" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
