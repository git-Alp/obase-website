"use strict";

let mainSliderElem = document.querySelector('[main-slider]');

let homeMainSlider = () => {
  let mainSwiper = new Swiper(".main-slider .slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      dynamicBullets: false,
      clickable: true
    },
    navigation: {
      nextEl: ".main-slider .swiper-button-next",
      prevEl: ".main-slider .swiper-button-prev"
    }
  });
};

if (mainSliderElem) homeMainSlider();
"use strict";

const numbersSection = document.querySelector('[numbers]');
const numberElements = document.querySelectorAll('[numbers-val]');
const speed = 200;
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) [...numberElements].forEach(elem => {
      const updateCount = () => {
        const array = [...elem.getAttribute('numbers-val')];
        const value = parseInt(elem.getAttribute('numbers-val'));
        const inner = parseInt(elem.innerText);
        const increment = Math.floor(value / speed) + 1;
        const time = increment > 1 ? 5 : 50;

        if (inner < value) {
          elem.innerText = inner + increment;
          setTimeout(updateCount, time);
        } else {
          elem.innerText = "".concat(value, " ").concat(array.includes('+') ? '+' : '');
        }
      };

      updateCount();
    });
  });
}, {
  threshold: .2
});

window.onload = function () {
  observer.observe(numbersSection);
};
"use strict";

let partnersSliderElem = document.querySelector('[partners-slider]');

let partnersSlider = () => {
  let partnersSwiper = new Swiper(".partners-slider .slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1248: {
        slidesPerView: 5
      }
    },
    navigation: {
      nextEl: ".partners-slider .swiper-button-next",
      prevEl: ".partners-slider .swiper-button-prev"
    }
  });
};

if (partnersSliderElem) {
  document.addEventListener('DOMContentLoaded', function () {
    partnersSlider();
  });
}