
import './App.css';
import './assets/css/plugins/bootstrap.min.css';
import './assets/css/plugins/aos.css';
import './assets/css/plugins/fontawesome.css';
import './assets/css/plugins/magnific-popup.css';
import './assets/css/plugins/owlcarousel.min.css';
import './assets/css/plugins/sidebar.css';
import './assets/css/plugins/slick-slider.css';
import './assets/css/plugins/nice-select.css';
import './assets/css/main.css';

import Preloader from './components/Preloader'
import ProgressBar from './components/ProgressBar'
import SideBar from './components/SideBar';
import Header from './components/Header';
import MainArea from './components/MainArea';
import { useEffect } from "react";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function App() {
  console.log(document.querySelectorAll('.reveal'));

  useEffect(() => {

        // GSAP .reveal logic
  if ($('.reveal').length) { gsap.registerPlugin(ScrollTrigger); let revealContainers = document.querySelectorAll(".reveal"); revealContainers.forEach((container) => { let image = container.querySelector("img"); let tl = gsap.timeline({ scrollTrigger: { trigger: container, toggleActions: "play none none none" } }); tl.set(container, { autoAlpha: 1 }); tl.from(container, 1.5, { xPercent: 0, ease: Power2.out }); tl.from(image, 1.5, { xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out }); }); }
    // SIDEBAR
    $(".hamburger_menu").on("click", function (e) {
      e.preventDefault();
      $(".slide-bar").toggleClass("show");
      $("body").addClass("on-side");
      $(".body-overlay").addClass("active");
      $(this).addClass("active");
    });

    $(".close-mobile-menu > a").on("click", function (e) {
      e.preventDefault();
      $(".slide-bar").removeClass("show");
      $("body").removeClass("on-side");
      $(".body-overlay").removeClass("active");
      $(".hamburger_menu").removeClass("active");
    });

    // PAGE PROGRESS
    const progressPath = document.querySelector(".progress-wrap path");
    if (progressPath) {
      const pathLength = progressPath.getTotalLength();
      progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      progressPath.style.strokeDashoffset = pathLength;
      const updateProgress = () => {
        const scroll = $(window).scrollTop();
        const height = $(document).height() - $(window).height();
        const progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
      };
      updateProgress();
      $(window).scroll(updateProgress);
    }

    // AOS init
    AOS.init({ disable: "mobile" });

    // COUNTER
    if ($(".counter").length > 0) {
      $(".counter").each(function () {
        const $this = $(this),
          countTo = $this.attr("data-count");
        $({ countNum: $this.text() }).animate(
          { countNum: countTo },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
    }

    // CURSOR
    const cursor = document.querySelector(".procus-cursor");
    const cursorinner = document.querySelector(".procus-cursor2");
    
    if (cursor && cursorinner) {
      cursor.style.position = "fixed";
      cursorinner.style.position = "fixed";
    
      document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursorinner.style.left = e.clientX + "px";
        cursorinner.style.top = e.clientY + "px";
      });
    
      document.addEventListener("mousedown", function () {
        cursor.classList.add("click");
        cursorinner.classList.add("cursorinnerhover");
      });
    
      document.addEventListener("mouseup", function () {
        cursor.classList.remove("click");
        cursorinner.classList.remove("cursorinnerhover");
      });
    
      document.querySelectorAll("a").forEach((a) => {
        a.addEventListener("mouseover", () => cursor.classList.add("hover"));
        a.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
      });
    }
    


  }, []);
  return (
    <>
   <Preloader/>
   <ProgressBar/>
   <SideBar/>
<Header/>
<MainArea/>
</>
  )
}

export default App
