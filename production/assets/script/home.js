"use strict";

let customersSliderElem = document.querySelector('[customers-slider]');

let customersSlider = () => {
  let customersSwiper = new Swiper(".customers-slider .slider", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".customers-slider .swiper-button-next",
      prevEl: ".customers-slider .swiper-button-prev"
    }
  });
};

if (customersSliderElem) {
  document.addEventListener('DOMContentLoaded', function () {
    customersSlider();
  });
}
"use strict";

let mainSliderElem = document.querySelector('[main-slider]');

let homeMainSlider = () => {
  let mainSwiper = new Swiper(".main-slider .slider", {
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

let partnersSliderElem = document.querySelector('[partners-slider]');

let partnersSlider = () => {
  let partnersSwiper = new Swiper(".partners-slider .slider", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
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