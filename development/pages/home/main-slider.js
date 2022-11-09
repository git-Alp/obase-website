let mainSliderElem = document.querySelector('[main-slider]');
let homeMainSlider = () => {
	let mainSwiper = new Swiper(".main-slider .slider", {
		slidesPerView: 1,
    loop: true,
		autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
		pagination: {
			el: ".main-slider .swiper-pagination",
			dynamicBullets: false,
			clickable: true,
		},
		navigation: {
			nextEl: ".main-slider .swiper-button-next",
			prevEl: ".main-slider .swiper-button-prev",
		},
	});
};

if(mainSliderElem) homeMainSlider();
