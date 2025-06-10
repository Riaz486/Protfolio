import React from 'react';
import Logo2 from "../assets/img/logo/new_logo.png";
import Mail1 from "../assets/img/icons/mail1.svg";

const SideBar = () => {
  return (
    <>
      {/* ===== SIDEBAR STARTS ===== */}
      <div className="header-site-icon">
        <div className="slide-bar slide-bar1">
          <div className="sidebar-info">
            <div className="sidebar-logo">
              <a href="index.html">
                <img src={Logo2} alt="logo" />
              </a>
              <div className="close-mobile-menu">
                <a>
                  <i className="fa-solid fa-xmark"></i>
                </a>
              </div>
            </div>

            <div className="sidebar-content">
              <ul>
                <li><a href="#list-item-1">Home</a></li>
                <li><a href="#list-item-2">About Us</a></li>
                <li><a href="#list-item-3">Service</a></li>
                <li><a href="#list-item-4">Skill</a></li>
                <li><a href="#list-item-5">Portfolio</a></li>
                <li><a href="#list-item-6">Testimonial</a></li>
                <li><a href="#list-item-7">Blogs</a></li>
                <li><a href="#list-item-8">Contact</a></li>
              </ul>
            </div>

            <div className="space32"></div>
            <div className="space16"></div>

            <div className="btn-area">
              <a href="contact.html" className="vl-btn1">
                Get in touch now <img src={Mail1} alt="" />
              </a>
            </div>

            <div className="space40"></div>

            <div className="social-link-area">
              <h3 className="sidebar-heading">Social Links</h3>
              <ul>
                <li>
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </li>
              </ul>
            </div>

            <div className="space40"></div>

            <div className="form-area">
              <h3>Subscribe To Newsletter</h3>
              <form>
                <input type="text" placeholder="Email Address*" />
                <button type="submit" className="vl-btn1">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ===== SIDEBAR ENDS ===== */}
    </>
  );
};

export default SideBar;
