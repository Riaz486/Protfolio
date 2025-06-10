import React, { useRef } from "react";
import BackgroundVideo from "../assets/img/video/video2.mp4";
import Home1 from "../assets/img/icons/home1.svg";
import Home2 from "../assets/img/icons/home2.svg";
import Home3 from "../assets/img/icons/home3.svg";
import Home4 from "../assets/img/icons/home4.svg";
import Home5 from "../assets/img/icons/home5.svg";
import Home6 from "../assets/img/icons/home6.svg";
import Home7 from "../assets/img/icons/home7.svg";
import Home8 from "../assets/img/icons/home8.svg";
import Hero2 from "../assets/img/all-images/hero/hero-2-2.png";
import S_Icon_1 from "../assets/img/icons/s-icon1.svg";
// import S_Icon_2 from "../assets/img/icons/s-icon2.svg";
import S_Icon_2 from "../assets/img/icons/whatsapp_white.png";

import S_Icon_3 from "../assets/img/icons/s-icon3.svg";
import S_Icon_4 from "../assets/img/icons/s-icon4.svg";
import S_Icon_5 from "../assets/img/icons/s-icon5.svg";

import DownloadSvg from "../assets/img/icons/download1.svg";
import SubLogo from "../assets/img/logo/new_logo_shape.png";
import Logo from "../assets/img/logo/new_logo_white.png";

import Element1 from "../assets/img/elements/elements2.png";
import Arrow1 from "../assets/img/icons/arrow1.svg";
import Other1 from "../assets/img/all-images/others/others4.png";
import SubLogo1 from "../assets/img/icons/sublogo1.svg";

// import Skill1 from "../assets/img/icons/skill1.svg";
// import Skill2 from "../assets/img/icons/skill2.svg";
// import Skill3 from "../assets/img/icons/skill3.svg";
// import Skill4 from "../assets/img/icons/skill4.svg";
// import Skill5 from "../assets/img/icons/skill5.svg"
// import Skill6 from "../assets/img/icons/skill6.svg";


import Skill1 from "../assets/img/icons/services_logo/React.webp";
import Skill2 from "../assets/img/icons/services_logo/next.png";
import Skill3 from "../assets/img/icons/services_logo/js.png";
import Skill4 from "../assets/img/icons/services_logo/node.png";
import Skill5 from "../assets/img/icons/services_logo/express-js.png";
import Skill6 from "../assets/img/icons/services_logo/mongo.png";
import Skill7 from "../assets/img/icons/services_logo/sql.png";
import Skill8 from "../assets/img/icons/services_logo/html.png";
import Skill9 from "../assets/img/icons/services_logo/css.png";


// import PortfolioImage from "../assets/img/all-images/portfolio/portfolio-img1.png";
// import PortfolioImage2 from "../assets/img/all-images/portfolio/portfolio-img2.png";
// import PortfolioImage3 from "../assets/img/all-images/portfolio/portfolio-img3.png";
// import PortfolioImage4 from "../assets/img/all-images/portfolio/portfolio-img4.png";

import PortfolioImage from "../assets/img/all-images/new_Portfolio/7up.JPG";
import PortfolioImage2 from "../assets/img/all-images/new_Portfolio/livedin.JPG";
import PortfolioImage3 from "../assets/img/all-images/new_Portfolio/multicalendar.JPG";
import PortfolioImage4 from "../assets/img/all-images/new_Portfolio/hrm.JPG";

import Testi_img1 from "../assets/img/all-images/testimonials/tesi-img1.png";
import Testi_img2 from "../assets/img/all-images/testimonials/tesi-img2.png";

import Blog_img_5 from "../assets/img/all-images/blog/blog-img5.png";

import Logo1 from "../assets/img/logo/logo1.png";
import Mail1 from "../assets/img/icons/mail1.svg";
import CV from "../assets/img/all-images/hero/MUHAMMAD_RIAZ.pdf";
import emailjs from "emailjs-com";
import { useEffect } from "react";








const MainArea = () => {

   const form = useRef();

 useEffect(() => {
    emailjs.init('2NPd0N3vkjGJMtDKC'); 
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ka4t6gl', 'template_jqghblk', form.current)
      .then(
        (result) => {
          console.log('Success:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error:', error.text);
          alert('Failed to send message.');
        }
      );

    e.target.reset();
  };

  return (
    <>
      <div className="main-hero-area3 parallaxie">
        <video className="body-overlay" muted autoPlay loop>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="container">
          <div className="row">
          <div className="col-lg-4">
      <div className="personal-contact-box" data-aos="fade-right" data-aos-duration="1000">
        <div id="list-example" className="list-group">
          <a className="list-group-item list-group-item-action active" href="#list-item-1">
            <img src={Home1} alt="" />
            <span>Home</span>
          </a>
          <a className="list-group-item list-group-item-action" href="#list-item-2">
            <img src={Home2} alt="" />
            <span>About Us</span>
          </a>
          <a className="list-group-item list-group-item-action" href="#list-item-3" >
            <img src={Home3} alt="" />
            <span>Our Service</span>
          </a>
          <a className="list-group-item list-group-item-action" href="#list-item-4">
            <img src={Home4} alt="" />
            <span>My Skill</span>
          </a>
          <a className="list-group-item list-group-item-action" href="#list-item-5">
            <img src={Home5} alt="" />
            <span>Portfolio</span>
          </a>
          <a className="list-group-item list-group-item-action" href="#list-item-6">
            <img src={Home6} alt="" />
            <span>Testimonial</span>
          </a>
          {/* <a className="list-group-item list-group-item-action" href="#list-item-7">
            <img src={Home8} alt="" />
            <span>Our Blog</span>
          </a> */}
          <a className="list-group-item list-group-item-action m-0" href="#list-item-8">
            <img src={Home7} alt="" />
            <span>Contact Us</span>
          </a>
        </div>

        <div className="img1 image-anime reveal">
          <img src={Hero2} alt="" />
        </div>

        <div className="space18"></div>
        <h3>Syed Riaz</h3>
        <div className="space16"></div>
        <p>
          Hi, I’m Riaz, a dedicated UI/UX Designer with 10 years of experience
          creating meaningful digital experiences.
        </p>

        <div className="space32"></div>
        <ul>
          <li><a href="https://x.com/syedriaz369" target="_blank"><img src={S_Icon_1} alt="" /></a></li>
          <li><a href="https://wa.me/923132445773" target="_blank"><img src={S_Icon_2} alt="" /></a></li>
          <li><a href="https://www.facebook.com/syed.Riaz.zada/" target="_blank"><img src={S_Icon_3} alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/muhammad-riaz-3a544012a/" target="_blank"><img src={S_Icon_4} alt="" /></a></li>

          
            </ul>

        <div className="space44"></div>
        <div className="btn-area1 text-center">
          <a
            href={CV}
            download
            className="vl-btn1"
          >
            Download Now <img src={DownloadSvg} alt="" />
          </a>
        </div>

        <div className="space32"></div>
        {/* <p>© 2024 OVRO. All Rights Reserved.</p> */}
      </div>
    </div>


    <div className="col-lg-8">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex="0">
{/*  */}
<div id="list-item-1" style={{paddingTop:"50px"}}>
      <div className="hero-heading-area heading1">
        <h5 data-aos="fade-left" data-aos-duration="800" style={{ display: "flex", alignItems: "center" }}>
          <img src={SubLogo} alt="" width="30"   />
          Hi, I’m Riaz, Web/Web App Developer
        </h5>

        <div className="space24"></div>

        <h1 data-aos="fade-left" data-aos-duration="900">
         Interactive Webs
        </h1>

        <div className="space24"></div>

        <h1 className="head" data-aos="fade-left" data-aos-duration="1000">
          Reactively <span>Built</span>
        </h1>

        <div className="space24"></div>

        <p data-aos="fade-left" data-aos-duration="1100" style={{fontSize:"17px"}}>
         Bringing ideas to life through fast, responsive, and modern web interfaces.
         <br />
         I specialize in building interactive web and Web app solutions using React, focusing on performance, usability, and clean code.
        </p>

        <div className="arrow" 
        // style={{visibility:"hidden"}} 
        data-aos="fade-left" data-aos-duration="1200">
          <a href="#">
            <img src={Element1} alt="" width="113"  className="elements1 keyframe5" />
            <img src={Arrow1} alt="" className="arrow1" />
          </a>

          {/* <div className="images">
            <img src={Other1} alt="" />
            <p>2k+ reviews <br /> (4.90 of 5)</p>
          </div> */}
        </div>

        <div className="space32"></div>

        <div className="main-btn-area" data-aos="fade-up" data-aos-duration="1200">
          <a href="#">
            Lets Work Together <span><i className="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </div>

   <div className="space50"></div>
      <div id="list-item-2" style={{paddingTop:"50px"}}>
        {/* ===== ABOUT AREA STARTS ======= */}
        <div className="about-section-area">
          <div className="heading1">
            <h5 data-aos="fade-left" data-aos-duration="800" sstyle={{ display: "flex", alignItems: "center" }}>
              <img src={SubLogo}  alt="" width="30"  />
              About Us
            </h5>
            <div className="space24"></div>
            <h1 data-aos="fade-left" data-aos-duration="1000">Creating Engaging   </h1>
            <div className="space24"></div>
            <h1 className="head" data-aos="fade-left" data-aos-duration="1100">
              Web  <span>Experiences</span>
            </h1>
          </div>

          <div className="space60"></div>

          <div className="about-boxarea">
            <div className="row">
              <div className="col-lg-12" data-aos="fade-left" data-aos-duration="1200">
                <div className="about-main-boxes">
                  <h4>Syed Riaz</h4>
                  <div className="space24"></div>
                  <p>
                   Hi, I’m Syed Riaz, a passionate Web & Web App Developer with 3 years of experience in building responsive, high-performance digital solutions.
I specialize in creating user-friendly interfaces and scalable web applications using modern technologies like React and Nextjs.
By combining clean code, UI best practices, and performance-driven development, I deliver solutions that are fast, functional, and impactful.


                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="900">
                <div className="about-boxes2">
                  <img src={Home2} alt="" />
                  <div className="content-area">
                    <h4>Web App Development</h4>
                    <div className="space16"></div>
                    <p>Developing scalable, user-centric web apps that are functional, interactive, and beautifully coded.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                <div className="about-boxes2">
                  <img src={Home3} alt="" />
                  <div className="content-area">
                    <h4>Frontend Architecture & Component Planning</h4>
                    <div className="space16"></div>
                    <p>Planning scalable UI structures and reusable components to ensure efficient, maintainable, and flexible web development.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1100">
                <div className="about-boxes2">
                  <img src={Home4} alt="" />
                  <div className="content-area">
                    <h4>Cross-Device Compatibility</h4>
                    <div className="space16"></div>
                    <p>Developing fluid layouts and flexible components that work flawlessly on desktops, tablets, and mobiles.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                <div className="about-boxes2">
                  <img src={Home5} alt="" />
                  <div className="content-area">
                    <h4>Code Validation & UI Testing</h4>
                    <div className="space16"></div>
                    <p>Writing clean code and testing user flows for smooth, optimized experiences.</p>
                  </div>
                </div>
              </div>

              <div className="space20"></div>

              <div className="col-lg-6 col-md-6">
                <h3>Work Experience</h3>
                <div className="space32"></div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration="900">
                  <a href="#">Aug-2022- Mar-2024</a>
                  <div className="space16"></div>
                  <h4><a href="#">React JS Developer</a></h4>
                  <div className="space16"></div>
                  <p>Lucid & AlRafay Consulting</p>
                  <div className="space32"></div>
                  <a href="#">Apr-2024 - Present</a>
                  <div className="space16"></div>
                  <h4><a href="#">Mid React JS Developer</a></h4>
                  <div className="space16"></div>
                  <p>Lokal Venture Pvt ltd</p>
                </div>

                <div className="about-others-box text-center" data-aos="zoom-in" data-aos-duration="1000">
                  <h4>Stay With Me</h4>
                  <div className="space18"></div>
                  <ul>
                    <li><a href="https://x.com/syedriaz369" target="_blank"><img src={S_Icon_1} alt="" /></a></li>
                    <li><a href="https://wa.me/923132445773" target="_blank"><img src={S_Icon_2} alt="" /></a></li>
                    <li><a href="https://www.facebook.com/syed.Riaz.zada/" target="_blank"><img src={S_Icon_3} alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/in/muhammad-riaz-3a544012a/" target="_blank"><img src={S_Icon_4} alt="" /></a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <h3>Education</h3>
                <div className="space32"></div>
                <div className="about-others-box" data-aos="zoom-in" data-aos-duration="1100">
                  <a href="#">2011 - 2014</a>
                  <div className="space16"></div>
                  <h4><a href="#">Diploma In Information Technology</a></h4>
                  <div className="space16"></div>
                  <p>Sir Syed University Of Engineering</p>
                  <div className="space32"></div>
                  <a href="#">2016 - 2021</a>
                  <div className="space16"></div>
                  <h4><a href="#">Bachelor In Software Engineering</a></h4>
                  <div className="space16"></div>
                  <p>Ilma University</p>
                </div>
              </div>

              <div className="space20"></div>
            </div>
          </div>
        </div>
        {/* ===== ABOUT AREA ENDS ======= */}
      </div>

      <div id="list-item-3" style={{paddingTop:"50px"}}>
      {/* ===== SERVICE AREA STARTS ======= */}
      <div className="service-section-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-header heading1">
                <h5 data-aos="fade-left" data-aos-duration="800" style={{ display: "flex", alignItems: "center" }}> 
                  <img src={SubLogo} alt="" width="30"  />
                  My Services
                </h5>
                <div className="space24"></div>
                {/* <h2 data-aos="fade-left" data-aos-duration="1000">
                  Modern Web For  
                </h2>
                <div className="space24"></div>
                <h2 className="head" data-aos="fade-left" data-aos-duration="1100">
              Modern <span>Brands</span>
                </h2> */}

                 <h2 data-aos="fade-left" data-aos-duration="1000" style={{fontSize:"74px"}}>
                 Transforming Vision 
                </h2>
                <div className="space24"></div>
                <h2 className="head" data-aos="fade-left" data-aos-duration="1100" style={{fontSize:"74px"}}>
              Into  <span>Web</span>
                </h2>
                <div className="space50"></div>

                <div data-aos="fade-left" data-aos-duration="900">
                  <div className="service-main-boxes">
                    <h4>Web App Development</h4>
                    <div className="space24"></div>
                    <p>
                     Building modern, high-performance web applications using React and scalable frontend architectures for seamless user experiences.
                    </p>
                  </div>
                </div>

                <div className="space30"></div>

                <div data-aos="fade-left" data-aos-duration="1000">
                  <div className="service-main-boxes">
                    <h4>Feature Planning & Code Prototyping</h4>
                    <div className="space24"></div>
                    <p>
                      Translating ideas into functional UI components through smart planning and iterative development to validate user flows.
                    </p>
                  </div>
                </div>

                <div className="space30"></div>

                <div data-aos="fade-left" data-aos-duration="1100">
                  <div className="service-main-boxes">
                    <h4>Web Performance Optimization</h4>
                    <div className="space24"></div>
                    <p>
                     Improving frontend performance through code splitting, lazy loading, and best practices to ensure smooth, fast experiences.
                    </p>
                  </div>
                </div>

                <div className="space30"></div>

                <div data-aos="fade-left" data-aos-duration="1200">
                  <div className="service-main-boxes">
                    <h4>Mobile-First Responsive Development</h4>
                    <div className="space24"></div>
                    <p>
                      Building interfaces that fluidly adapt to all screen sizes, ensuring fast load times and consistent user experience across devices.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===== SERVICE AREA ENDS ======= */}
    </div>
    <div className="space50"></div>
      <div id="list-item-4" style={{paddingTop:"50px"}}>
        {/* ===== SKILL AREA STARTS ======= */}
        <div className="skill-section-area">
          <div className="container">
            <div className="row">
              <div className="col-gl-12">
                <div className="skill-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration="800" style={{ display: "flex", alignItems: "center" }}>
                    <img src={SubLogo} alt=""  width="30" />My Skill
                  </h5>
                  <div className="space24"></div>
                  <h2 data-aos="fade-left" data-aos-duration="1000"  style={{fontSize:"74px"}}>The Tools Behind </h2>
                  <div className="space24"></div>
                  <h2 className="head" data-aos="fade-left" data-aos-duration="1100" style={{fontSize:"72px"}}>
                    Modern <span style={{fontSize:"72px"}}>Development</span>
                  </h2>
                </div>
                <div className="space80"></div>

                <div className="row">
                  <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-duration="900">
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill1} alt="" width={55} />
                      </div>
                      <div className="space24"></div>
                      <h3>
                        <span className="counter">85</span>%
                      </h3>
                      <div className="space16"></div>
                      <p>React Js</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-duration="1000">
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill2} alt="" width={80}/>
                      </div>
                      <div className="space24"></div>
                      <h3>
                        <span className="counter">75</span>%
                      </h3>
                      <div className="space16"></div>
                      <p>Next Js</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-duration="1100">
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill3} alt="" width={52} />
                      </div>
                      <div className="space24"></div>
                      <h3>
                        <span className="counter">70</span>%
                      </h3>
                      <div className="space16"></div>
                      <p>JavaScript</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-duration="1200">
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill4} alt="" width={80}  />
                      </div>
                      <div className="space24"></div>
                      <h3>
                        <span className="counter">40</span>%
                      </h3>
                      <div className="space16"></div>
                      <p>Node Js</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-duration="1000">
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill5} alt=""  width={60} />
                      </div>
                      <div className="space24"></div>
                      <h3>
                        <span className="counter">40</span>%
                      </h3>
                      <div className="space16"></div>
                      <p>Express</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-duration="11000">
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill6} alt="" className="Wordpress"  width={70} />
                      </div>
                      <div className="space24"></div>
                      <h3>
                        <span className="counter">50</span>%
                      </h3>
                      <div className="space16"></div>
                      <p>Mongo DB</p>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-duration="11000">
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill7} alt="" className="Wordpress"  width={90} />
                      </div>
                      <div className="space24"></div>
                      <h3>
                        <span className="counter">50</span>%
                      </h3>
                      <div className="space16"></div>
                      <p>SQL</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-duration="11000">
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill8} alt="" className="Wordpress"  width={76} />
                      </div>
                      <div className="space24"></div>
                      <h3>
                        <span className="counter">95</span>%
                      </h3>
                      <div className="space16"></div>
                      <p>HTML</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6" data-aos="zoom-out" data-aos-duration="11000">
                    <div className="skill-boxarea">
                      <div className="icons">
                        <img src={Skill9} alt="" className="Wordpress"  width={50} />
                      </div>
                      <div className="space24"></div>
                      <h3>
                        <span className="counter">90</span>%
                      </h3>
                      <div className="space16"></div>
                      <p>CSS/SCSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===== SKILL AREA ENDS ======= */}
      </div>


      <div className="space30"></div>
      <div id="list-item-5" style={{paddingTop:"50px"}}>
        {/* ===== PORTFOLIO AREA STARTS ======= */}
        <div className="portfolio-section-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration="800" style={{ display: "flex", alignItems: "center" }}>
                    <img src={SubLogo} alt="" width="30"  />
                    My Portfolio
                  </h5>
                  <div className="space24"></div>
                  <h2 data-aos="fade-left" data-aos-duration="1000" style={{fontSize:"75px"}}>
                    Innovation Designs
                  </h2>
                  <div className="space24"></div>
                  <h2 className="head" data-aos="fade-left" data-aos-duration="1100" style={{fontSize:"75px"}}>
                    Real <span style={{fontSize:"73px"}}>Results</span>
                  </h2>
                </div>
              </div>
              <div className="space50"></div>

              <div className="col-lg-12" data-aos="fade-left" data-aos-duration="1000">
                <div className="portfolio-boxarea click-here">
                  <div className="img1">
                    <a href="#!" /* Avoid using javascript:void(0) in React */>
                      <img src={PortfolioImage} alt="" />
                    </a>
                  </div>
                  <div className="space24"></div>
                  <a href="#!">7UP - 7up Ka Food Scene ( Campaign )</a>
                </div>
              </div>

              <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-duration="1100">
                <div className="portfolio-boxarea2 click-here">
                  <div className="img1">
                    <a href="#!">
                      <img src={PortfolioImage3} alt="" />
                    </a>
                  </div>
                  <div className="space24"></div>
                  <a href="#!">Livedin - Calendar That Shows Room Availability and Price </a>
                </div>
              </div>

              <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-duration="1200">
                <div className="portfolio-boxarea2 click-here">
                  <div className="img1">
                    <a href="#!">
                      <img src={PortfolioImage4} alt="" />
                    </a>
                  </div>
                  <div className="space24"></div>
                  <a href="#!">Lucid Web - Human Resource Management</a>
                </div>
              </div>

              <div className="col-lg-12" data-aos="fade-left" data-aos-duration="1100">
                <div className="portfolio-boxarea click-here">
                  <div className="img1">
                    <a href="#!">
                      <img src={PortfolioImage2} alt="" />
                    </a>
                  </div>
                  <div className="space24"></div>
                  <a href="#!">Livedin - Room Booking Management System</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===== PORTFOLIO AREA ENDS ======= */}
      </div>

      <div className="space30"></div>
      <div id="list-item-6" style={{paddingTop:"40px"}}>
        {/* ===== TESTIMONIAL AREA STARTS ======= */}
        <div className="testimonial-section-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonial-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration="900" style={{ display: "flex", alignItems: "center" }}>
                    <img src={SubLogo} alt="" width="30" />
                    Testimonial
                  </h5>
                  <div className="space24"></div>
                  <h2 data-aos="fade-left" data-aos-duration="1000">
                    What Client Says
                  </h2>
                  <div className="space24"></div>
                  <h2 className="head" data-aos="fade-left" data-aos-duration="1100">
                    About <span> My Work</span>
                  </h2>
                </div>
                <div className="space60"></div>
              </div>

              {/* Testimonial 1 */}
              <div className="col-lg-7 col-md-6" data-aos="zoom-in" data-aos-duration="900">
                <div className="testimonial-boxarea">
                  <div className="list">
                    <ul>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                      <path d="M13.077 4.99278C13.077 6.16612 13.3836 7.15145 13.997 7.94878C14.4316 8.49812 15.0214 8.859 15.7663 9.03145C16.4996 9.20212 17.193 9.21412 17.8196 9.06878C18.033 10.3354 17.6863 11.6768 16.8063 13.0981C15.9245 14.5186 14.7876 15.5866 13.3956 16.3021L15.5036 19.3354C16.5703 18.8074 17.5836 18.1381 18.517 17.3288C19.4636 16.5194 20.3036 15.5888 21.0503 14.5368C21.797 13.4848 22.357 12.2968 22.717 10.9501C23.077 9.60345 23.177 8.23012 23.005 6.81678C22.781 4.95012 22.1783 3.45678 21.197 2.35011C20.2165 1.22923 18.9952 0.668781 17.533 0.668781C16.2463 0.668781 15.1783 1.05545 14.333 1.83945C13.4965 2.60745 13.0787 3.65989 13.0796 4.99678L13.077 4.99278ZM0.911625 4.99278C0.911625 6.16612 1.21829 7.15145 1.83162 7.94878C2.26718 8.50878 2.85696 8.87189 3.60096 9.03812C4.34763 9.20256 5.03207 9.21234 5.65429 9.06745C5.86762 10.3208 5.53429 11.6674 4.65162 13.0941C3.77163 14.5074 2.63563 15.5741 1.24363 16.2941L3.34629 19.3354C4.41385 18.8074 5.41829 18.1386 6.35962 17.3288C7.31482 16.5074 8.16322 15.5694 8.88496 14.5368C9.62629 13.4834 10.1783 12.2968 10.5383 10.9501C10.904 9.6045 11.0023 8.20023 10.8276 6.81678C10.6063 4.95012 10.0063 3.45678 9.02762 2.35011C8.04985 1.23723 6.83074 0.680782 5.37029 0.680782C4.0814 0.679005 3.01385 1.06878 2.16762 1.85011C1.33118 2.61811 0.912514 3.67056 0.911625 5.00745V4.99278Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="space20"></div>
                  <p>
                    "Working with Riaz was a game-changer for our platform. Their expertise in web development and focus on performance transformed our site into a fast, responsive, and reliable experience. We've seen a significant boost in both functionality and user engagement."
                  </p>
                  <div className="space24"></div>
                  <div className="mans-area">
                    <div className="man">
                      {/* <img src={Testi_img1} alt="" /> */}
                    </div>
                    <div className="content">
                      <a href="#">David Elson</a>
                      {/* <p>Ezhe Source</p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="col-lg-5 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
                <div className="testimonial-boxarea">
                  <div className="list">
                    <ul>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                      <path d="M13.077 4.99278C13.077 6.16612 13.3836 7.15145 13.997 7.94878C14.4316 8.49812 15.0214 8.859 15.7663 9.03145C16.4996 9.20212 17.193 9.21412 17.8196 9.06878C18.033 10.3354 17.6863 11.6768 16.8063 13.0981C15.9245 14.5186 14.7876 15.5866 13.3956 16.3021L15.5036 19.3354C16.5703 18.8074 17.5836 18.1381 18.517 17.3288C19.4636 16.5194 20.3036 15.5888 21.0503 14.5368C21.797 13.4848 22.357 12.2968 22.717 10.9501C23.077 9.60345 23.177 8.23012 23.005 6.81678C22.781 4.95012 22.1783 3.45678 21.197 2.35011C20.2165 1.22923 18.9952 0.668781 17.533 0.668781C16.2463 0.668781 15.1783 1.05545 14.333 1.83945C13.4965 2.60745 13.0787 3.65989 13.0796 4.99678L13.077 4.99278ZM0.911625 4.99278C0.911625 6.16612 1.21829 7.15145 1.83162 7.94878C2.26718 8.50878 2.85696 8.87189 3.60096 9.03812C4.34763 9.20256 5.03207 9.21234 5.65429 9.06745C5.86762 10.3208 5.53429 11.6674 4.65162 13.0941C3.77163 14.5074 2.63563 15.5741 1.24363 16.2941L3.34629 19.3354C4.41385 18.8074 5.41829 18.1386 6.35962 17.3288C7.31482 16.5074 8.16322 15.5694 8.88496 14.5368C9.62629 13.4834 10.1783 12.2968 10.5383 10.9501C10.904 9.6045 11.0023 8.20023 10.8276 6.81678C10.6063 4.95012 10.0063 3.45678 9.02762 2.35011C8.04985 1.23723 6.83074 0.680782 5.37029 0.680782C4.0814 0.679005 3.01385 1.06878 2.16762 1.85011C1.33118 2.61811 0.912514 3.67056 0.911625 5.00745V4.99278Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="space20"></div>
                  <p>
                    "Riaz's technical skill and professionalism exceeded our expectations. They took the time to understand our vision and brought it to life with a fast, modern web solution that works flawlessly and truly connects with our audience."
                  </p>
                  <div className="space24"></div>
                  <div className="mans-area">
                    <div className="man">
                      {/* <img src={Testi_img2} alt="" /> */}
                    </div>
                    <div className="content">
                      <a href="#">Williams</a>
                      {/* <p>Creatix Studio</p> */}
                    </div>
                  </div>
                </div>
              </div>

            </div> {/* end row */}
          </div> {/* end container */}
        </div>
        {/* ===== TESTIMONIAL AREA ENDS ======= */}
      </div>

      <div className="space30"></div>
      <div id="list-item-7">
        {/* BLOG AREA STARTS */}
        {/* <div className="blog-section-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-header heading1">
                  <h5 data-aos="fade-left" data-aos-duration="900" style={{ display: "flex", alignItems: "center" }}>
                    <img src={SubLogo} alt="Sub Logo"  width="30" />Our Blog
                  </h5>
                  <div className="space24"></div>
                  <h2 data-aos="fade-left" data-aos-duration="1000">Our Latest Blog Idea</h2>
                  <div className="space24"></div>
                  <h2 className="head" data-aos="fade-left" data-aos-duration="1200">
                    UI/UX <span>Trends</span>
                  </h2>
                  <div className="space60"></div>
                  <div className="row">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="col-lg-6 col-md-6">
                        <div className="blog-boxarea">
                          <div className="img1 reveal">
                            <a href="blog-single.html">
                              <img
                                src={`assets/img/all-images/blog/blog-img${item}.png`}
                                alt={`Blog ${item}`}
                              />
                            </a>
                          </div>
                          <div className="content-area">
                            <ul>
                              <li>
                                <a href="#">UI/UX</a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-regular fa-clock"></i> 3 min read
                                </a>
                              </li>
                            </ul>
                            <div className="space16"></div>
                            <a href="blog-single.html">
                              {item === 1 && "Behind the Pixels: My Favorite Design Projects"}
                              {item === 2 && "Crafting Seamless Experiences: My UI/UX Design Philosophy"}
                              {item === 3 && "Staying Ahead: Trends Shaping UI/UX in 2024"}
                              {item === 4 && "From Concept to Reality: My Design Process"}
                            </a>
                            <div className="space16"></div>
                            <ul>
                              <li>
                                <a href="#">
                                  <img src={Blog_img_5} alt="Author" /> Alex Carry
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa-regular fa-calendar"></i> Oct 26, 2024
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="space30"></div>
                    <div className="pagination-area">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                              <i className="fa-solid fa-angle-left"></i>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link active" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              ...
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              12
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <i className="fa-solid fa-angle-right"></i>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* BLOG AREA ENDS */}
      </div>

      <div className="space60"></div>

      <div id="list-item-8">
        {/* CONTACT AREA STARTS */}
        <div className="contact-section-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-heading heading1">
                  <h5 data-aos="fade-left" data-aos-duration="900" style={{ display: "flex", alignItems: "center" }}>
                    <img src={SubLogo} alt="Sub Logo" width="30"  />Contact Me
                  </h5>
                  <div className="space24"></div>
                  <h2 data-aos="fade-left" data-aos-duration="1000">Have Any Project in Mind,</h2>
                  <div className="space24"></div>
                  <h2 className="head" data-aos="fade-left" data-aos-duration="1100">
                     <span>Lets Talk</span>
                  </h2>
                </div>
                <div className="space50"></div>
                <div className="contact-boxarea" data-aos="zoom-in" data-aos-duration="1000">
                  <h3>Let’s Work Together!</h3>
                  <div className="space12"></div>
                  {/* <div className="row">
                    {[
                      { type: "text", placeholder: "Full Name" },
                      { type: "email", placeholder: "Email Address" },
                      { type: "number", placeholder: "Phone Number" },
                      { type: "text", placeholder: "Subject" },
                    ].map(({ type, placeholder }, i) => (
                      <div key={i} className="col-lg-6 col-md-6">
                        <div className="input-area">
                          <input type={type} placeholder={placeholder} />
                        </div>
                      </div>
                    ))}
                    <div className="col-lg-12">
                      <div className="input-area">
                        <input type="text" placeholder="Your Budget (optional)" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-area">
                        <textarea placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-area">
                        <button type="submit" className="vl-btn1">
                          Send <img src={Mail1} alt="Mail Icon" />
                        </button>
                      </div>
                    </div>
                  </div> */}
                   <form ref={form} onSubmit={sendEmail}>
      <div className="row">
        {[
          { name: "user_name", type: "text", placeholder: "Full Name" },
          { name: "user_email", type: "email", placeholder: "Email Address" },
          { name: "user_phone", type: "number", placeholder: "Phone Number" },
          { name: "subject", type: "text", placeholder: "Subject" },
        ].map(({ name, type, placeholder }, i) => (
          <div key={i} className="col-lg-6 col-md-6">
            <div className="input-area">
              <input name={name} type={type} placeholder={placeholder} required />
            </div>
          </div>
        ))}
        <div className="col-lg-12">
          {/* <div className="input-area">
            <input
              name="budget"
              type="text"
              placeholder="Your Budget (optional)"
            />
          </div> */}
        </div>
        <div className="col-lg-12">
          <div className="input-area">
            <textarea name="message" placeholder="Message" required></textarea>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="input-area">
            <button type="submit" className="vl-btn1">
              Send <img src={Mail1} alt="Mail Icon" />
            </button>
          </div>
        </div>
      </div>
    </form>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="space50"></div>
                <div className="footer-area">
                  <div className="btn-area1">
                    <a href="index.html">
                      <img src={Logo} alt="Logo" />
                    </a>
                  </div>
                  <p>© 2025 RIAZ. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT AREA ENDS */}
      </div>
{/*  */}

        </div>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainArea;
