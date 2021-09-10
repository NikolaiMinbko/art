import { scrollWidth } from "./scrollWidth";


export const modals = () => {

  let btnPressed = false;

  function bindModals(triggerModal, modalWindow, closeModal, destroy = false) {
    const trigger = document.querySelectorAll(triggerModal),
      modal = document.querySelector(modalWindow),
      close = document.querySelectorAll(closeModal),
      scroll = scrollWidth();
    
      console.log(trigger);
    
      trigger.forEach((item) => {
        item.addEventListener("click", (e) => {
          if (e.target) {
            e.preventDefault();
          }

          btnPressed = true;

          if (destroy) {
            item.remove();
          }
          modal.style.display = "block";
          document.body.style.overflowY = "hidden";
          document.body.style.marginRight = `${scroll}px`;
          modal.classList.add("animated", "fadeIn");

        });
      });
    
    modal.addEventListener("click", (e) => {
      let target = e.target;
      if (target == modal) {
        modal.style.display = "none";
        document.body.style.overflowY = "auto";
        document.body.style.marginRight = `0px`;
      }
    });
    
    close.forEach((item) => {
        item.addEventListener("click", () => {
          modal.style.display = "none";
          document.body.style.overflowY = "auto";
          document.body.style.marginRight = `0px`;
        })
      });
  }

  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.offsetHeight)) {
        document.querySelector(selector).click();
      }
    });
  }

  openByScroll(".fixed-gift ");
  bindModals(".button-design", ".popup-design", ".popup-close");
  bindModals(".button-consultation", ".popup-consultation", ".popup-close");
  bindModals(".fixed-gift ", ".popup-gift", ".popup-close", true);
}


