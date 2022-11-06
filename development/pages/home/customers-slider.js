let customersSliderElem = document.querySelector('[customers-slider]');
let customersSlider = () => {
	let customersSwiper = new Swiper(".customers-slider .slider", {
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
			nextEl: ".customers-slider .swiper-button-next",
			prevEl: ".customers-slider .swiper-button-prev",
		},
	});

};

if (customersSliderElem) {
  document.addEventListener('DOMContentLoaded', function () {
    customersSlider();
  });
}
