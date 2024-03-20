// MobileNavbar.js
import  { useEffect } from 'react';

const MobileNavbar = () => {
  useEffect(() => {
    const navbar = document.querySelector("[data-navbar]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navLinks = document.querySelectorAll("[data-nav-link]");
    const overlay = document.querySelector("[data-overlay]");

    const addEventOnElements = function (elements, eventType, callback) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    }

    addEventOnElements(navTogglers, "click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    });

    addEventOnElements(navLinks, "click", function () {
      navbar.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("nav-active");
    });
  }, []);

  return null; // MobileNavbar doesn't render any DOM elements
}

export default MobileNavbar;