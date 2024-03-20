import { useEffect } from 'react';

const ElementTilt = () => {
  useEffect(() => {
    const tiltElements = document.querySelectorAll("[data-tilt]");

    const initTilt = function (event) {
      const centerX = this.offsetWidth / 2;
      const centerY = this.offsetHeight / 2;
      const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
      const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;
      this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;
    }

    const addEventOnElements = function (elements, eventType, callback) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    }

    addEventOnElements(tiltElements, "mousemove", initTilt);

    addEventOnElements(tiltElements, "mouseout", function () {
      this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
  }, []);

  return null; // ElementTilt doesn't render any DOM elements
}

export default ElementTilt;