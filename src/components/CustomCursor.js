// CustomCursor.js
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursors = document.querySelectorAll("[data-cursor]");
    const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

    const addEventOnElements = function (elements, eventType, callback) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    }

    window.addEventListener("mousemove", function (event) {
      const posX = event.clientX;
      const posY = event.clientY;

      cursors[0].style.left = `${posX}px`;
      cursors[0].style.top = `${posY}px`;

      setTimeout(function () {
        cursors[1].style.left = `${posX}px`;
        cursors[1].style.top = `${posY}px`;
      }, 80);
    });

    addEventOnElements(hoveredElements, "mouseover", function () {
      for (let i = 0, len = cursors.length; i < len; i++) {
        cursors[i].classList.add("hovered");
      }
    });

    addEventOnElements(hoveredElements, "mouseout", function () {
      for (let i = 0, len = cursors.length; i < len; i++) {
        cursors[i].classList.remove("hovered");
      }
    });
  }, []);

  return null; // CustomCursor doesn't render any DOM elements
}

export default CustomCursor;