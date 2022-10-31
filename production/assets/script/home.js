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
let sticky = document.querySelector("[data-advertisement]");
let stickyClose = document.querySelector("[data-advertisement-close]");
document.addEventListener("DOMContentLoaded", function () {
  if (stickyClose) {
    stickyClose.addEventListener("click", function (e) {
      if (sticky) sticky.classList.add("-hide");
    });
  }
});