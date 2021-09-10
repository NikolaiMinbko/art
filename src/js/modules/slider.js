export const slider = (slideItems, dir, prev, next) => {

  const slides = document.querySelectorAll(slideItems);

  let slideIndex = 0;
  let paused = false;

  const showSlides = (n) => {
    if (n > (slides.length - 1)) {
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
  

  }
  showSlides(slideIndex);

  const changeIndex = (n) => {
    showSlides(slideIndex += n);
  }

  try {
    const btnPrev = document.querySelector(prev),
      btnNext = document.querySelector(next);
    
    btnPrev.addEventListener("click", () => {
      changeIndex(-1);
      slides[slideIndex].classList.remove("slideInLeft");
      slides[slideIndex].classList.add("slideInRight");

    })
    
    btnNext.addEventListener("click", () => {
      changeIndex(1);
      slides[slideIndex].classList.remove("slideInRight");
      slides[slideIndex].classList.add("slideInLeft");

      })
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
  }
  activateAnimate();

  slides[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });

  slides[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimate();
  });
  

}