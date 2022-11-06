let partnersSliderElem = document.querySelector('[partners-slider]');
let partnersSlider = () => {
	let partnersSwiper = new Swiper(".partners-slider .slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1248: {
        slidesPerView: 5,
      }
    },
		navigation: {
			nextEl: ".partners-slider .swiper-button-next",
			prevEl: ".partners-slider .swiper-button-prev",
		},
	});

};

if (partnersSliderElem) {
  document.addEventListener('DOMContentLoaded', function () {
    partnersSlider();
  });
}
