// TabContent.js
import { useEffect } from 'react';

const TabContent = () => {
  useEffect(() => {
    const tabBtns = document.querySelectorAll("[data-tab-btn]");
    const tabContents = document.querySelectorAll("[data-tab-content]");

    let lastActiveTabBtn = tabBtns[0];
    let lastActiveTabContent = tabContents[0];

    const filterContent = function () {
      if (!(lastActiveTabBtn === this)) {
        lastActiveTabBtn.classList.remove("active");
        lastActiveTabContent.classList.remove("active");
        this.classList.add("active");
        lastActiveTabBtn = this;
        const currentTabContent = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);
        currentTabContent.classList.add("active");
        lastActiveTabContent = currentTabContent;
      }
    }

    const addEventOnElements = function (elements, eventType, callback) {
      for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
      }
    }

    addEventOnElements(tabBtns, "click", filterContent);
  }, []);

  return null; // TabContent doesn't render any DOM elements
}

export default TabContent;