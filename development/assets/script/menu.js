let headerElem = document.querySelector('[header]');
let iconNav = document.querySelector('[menu="toggle"]');
let container = document.querySelector('[mobile-container]');
let navItems = document.querySelectorAll('[nav-item]');
let navSubItems = document.querySelectorAll('[nav-sub-item]');

let active = "-active";
let hover = "-hover";

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
