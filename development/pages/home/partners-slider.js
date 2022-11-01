let partnersSliderElem = document.querySelector('[partners-slider]');
let partnersSlider = () => {
	let partnersSwiper = new Swiper(".partners-slider .slider", {
    slidesPerView: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
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
