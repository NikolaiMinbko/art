
import { scrollWidth } from "./scrollWidth";

export const showByTime = (selector, time) => {
  let scroll = scrollWidth();
  setTimeout(() => {
    let display = true;
    document.querySelectorAll("[data-modal]").forEach((item) => {
      if (getComputedStyle(item).display !== "none") {
        display = false;
      }
    });
    if (display) {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;
    }
   
  }, time);
}