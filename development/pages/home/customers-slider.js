let customersSliderElem = document.querySelector('[customers-slider]');
let customersSlider = () => {
	let customersSwiper = new Swiper(".customers-slider .slider", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
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
