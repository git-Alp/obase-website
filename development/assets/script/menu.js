let headerElem = document.querySelector('[header]');
let iconNav = document.querySelector('[menu="toggle"]');
let container = document.querySelector('[mobile-container]');
let navItems = document.querySelectorAll('[nav-item]');
let navSubItems = document.querySelectorAll('[nav-sub-item]');
let headerFullscreen = document.querySelector('[header-fullscreen]');
let sideItems = document.querySelectorAll('[fs-side-item]');
let firstSideItem = document.querySelector('.header-fullscreen__side-item.-open');
let solutions = document.querySelector('[solutions-title]');
let closeButton = document.querySelector('[fs-close]');

let active = "-active";
let hover = "-hover";

const menuHover = () => {
	headerFullscreen.addEventListener('mouseover', function () {
		document.body.classList.add('-fixed');
	});
	solutions.addEventListener('mouseover', function () {
		solutions.classList.add('-on');
	});
	solutions.addEventListener('mouseleave', function () {
		solutions.classList.remove('-on');
	});
	headerFullscreen.addEventListener('mouseleave', function () {
		solutions.classList.remove('-on');
		document.body.classList.remove('-fixed');
	});
	closeButton.addEventListener('click', function () {
		solutions.classList.remove('-on');
	});
	sideItems.forEach(item => {
		item.addEventListener('mouseover', function () {
			firstSideItem.classList.remove('-open');
			firstSideItem.classList.remove('-active');
			item.classList.add('-active');
		});

		item.addEventListener('mouseleave', function () {
			firstSideItem.classList.add('-active');
			if (item != firstSideItem) item.classList.remove('-active');
		});
	});
}

// mobile menu click
const mobileMenu = () => {
	navItems.forEach(item => {
		let navLink = item.querySelector('[nav-link]');
		navLink.addEventListener('click', function () {
			container.classList.add('-move');
			item.classList.add(active);
		})
	});

	let navBack = document.querySelectorAll('[nav-back]');
	navBack.forEach(button => {
		button.addEventListener('click', function () {
			container.classList.remove('-move');
			navItems.forEach(item => item.classList.remove(active));
		})
	});

	navSubItems.forEach(item => {
		let navLink = item.querySelector('[nav-sub-link]');
		navLink.addEventListener('click', function () {
			container.classList.add('-move-sub');
			item.classList.add(active);
		})
	});

	let navSubBack = document.querySelectorAll('[nav-sub-back]');
	navSubBack.forEach(button => {
		button.addEventListener('click', function () {
			container.classList.remove('-move-sub');
			navSubItems.forEach(item => item.classList.remove(active));
		})
	});
}

(function () {
  const openMenu = () => {
    iconNav.classList.toggle('-on');
    container.classList.toggle('-on');
    document.body.classList.toggle('-fixed');
  };

  // open menu
  if(iconNav) iconNav.addEventListener("click", openMenu);

  // mobile
	// if (window.innerWidth < 1248) mobileMenu();
	if (window.innerWidth > 1024) menuHover();
})();


// resize
window.addEventListener('resize', function () {
	if (container && container.classList.contains('-on')) {
    iconNav.classList.remove('-on');
    container.classList.remove('-on');
    document.body.classList.remove('-fixed');
    navItems.forEach(item => item.classList.remove(active));
    navSubItems.forEach(item => item.classList.remove(active));
  }
});
