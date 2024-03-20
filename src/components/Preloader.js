// Preloader.js
import  { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const preloader = document.querySelector("[data-preloader]");
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  }, []);

  return null; // Preloader doesn't render any DOM elements
}

export default Preloader;