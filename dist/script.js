/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_showByTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showByTime */ "./src/js/modules/showByTime.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");



window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["modals"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["slider"])(".main-slider-item", "vertical");
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_2__["slider"])(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn"); // showByTime(".popup-consultation", 6000);
});

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modals", function() { return modals; });
/* harmony import */ var _scrollWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollWidth */ "./src/js/modules/scrollWidth.js");

const modals = () => {
  let btnPressed = false;

  function bindModals(triggerModal, modalWindow, closeModal, destroy = false) {
    const trigger = document.querySelectorAll(triggerModal),
          modal = document.querySelector(modalWindow),
          close = document.querySelectorAll(closeModal),
          scroll = Object(_scrollWidth__WEBPACK_IMPORTED_MODULE_0__["scrollWidth"])();
    console.log(trigger);
    trigger.forEach(item => {
      item.addEventListener("click", e => {
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
    modal.addEventListener("click", e => {
      let target = e.target;

      if (target == modal) {
        modal.style.display = "none";
        document.body.style.overflowY = "auto";
        document.body.style.marginRight = `0px`;
      }
    });
    close.forEach(item => {
      item.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflowY = "auto";
        document.body.style.marginRight = `0px`;
      });
    });
  }

  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
        document.querySelector(selector).click();
      }
    });
  }

  openByScroll(".fixed-gift ");
  bindModals(".button-design", ".popup-design", ".popup-close");
  bindModals(".button-consultation", ".popup-consultation", ".popup-close");
  bindModals(".fixed-gift ", ".popup-gift", ".popup-close", true);
};

/***/ }),

/***/ "./src/js/modules/scrollWidth.js":
/*!***************************************!*\
  !*** ./src/js/modules/scrollWidth.js ***!
  \***************************************/
/*! exports provided: scrollWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollWidth", function() { return scrollWidth; });
const scrollWidth = () => {
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflow = "scroll";
  div.style.visibility = "hidden";
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

/***/ }),

/***/ "./src/js/modules/showByTime.js":
/*!**************************************!*\
  !*** ./src/js/modules/showByTime.js ***!
  \**************************************/
/*! exports provided: showByTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showByTime", function() { return showByTime; });
/* harmony import */ var _scrollWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollWidth */ "./src/js/modules/scrollWidth.js");

const showByTime = (selector, time) => {
  let scroll = Object(_scrollWidth__WEBPACK_IMPORTED_MODULE_0__["scrollWidth"])();
  setTimeout(() => {
    let display = true;
    document.querySelectorAll("[data-modal]").forEach(item => {
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
};

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
const slider = (slideItems, dir, prev, next) => {
  const slides = document.querySelectorAll(slideItems);
  let slideIndex = 0;
  let paused = false;

  const showSlides = n => {
    if (n > slides.length - 1) {
      slideIndex = 0;
    }

    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach(item => {
      item.style.display = "none";
      item.classList.add("animated");
    });
    slides[slideIndex].style.display = "block";
  };

  showSlides(slideIndex);

  const changeIndex = n => {
    showSlides(slideIndex += n);
  };

  try {
    const btnPrev = document.querySelector(prev),
          btnNext = document.querySelector(next);
    btnPrev.addEventListener("click", () => {
      changeIndex(-1);
      slides[slideIndex].classList.remove("slideInLeft");
      slides[slideIndex].classList.add("slideInRight");
    });
    btnNext.addEventListener("click", () => {
      changeIndex(1);
      slides[slideIndex].classList.remove("slideInRight");
      slides[slideIndex].classList.add("slideInLeft");
    });
  } catch (e) {
    console.log(e);
  }

  const activateAnimate = () => {
    if (dir == "vertical") {
      paused = setInterval(() => {
        changeIndex(1);
        slides[slideIndex].classList.add("slideInDown");
      }, 3000);
    } else {
      paused = setInterval(() => {
        changeIndex(1);
        slides[slideIndex].classList.add("slideInLeft");
      }, 3000);
    }
  };

  activateAnimate();
  slides[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  slides[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimate();
  });
};

/***/ })

/******/ });
//# sourceMappingURL=script.js.map