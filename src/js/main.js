import {modals} from "./modules/modals";
import {showByTime} from "./modules/showByTime";
import {slider} from "./modules/slider";


window.addEventListener("DOMContentLoaded", () => {
  "use strict"

  modals();
  slider(".main-slider-item", "vertical",);
  slider(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn");
  // showByTime(".popup-consultation", 6000);
  

});