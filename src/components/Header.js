// Header.js
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector("[data-header]");

    window.addEventListener("scroll", function () {
      header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
    });
  }, []);

  return null; // Header doesn't render any DOM elements
}

export default Header;