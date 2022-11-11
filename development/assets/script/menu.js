const headerFullscreen = document.querySelector('[header-fullscreen]');
const sideItems = document.querySelectorAll('[fs-side-item]');
const firstSideItem = document.querySelector('.header-fullscreen__side-item.-open');
const solutionsTitle = document.querySelector('[solutions-title]');
const closeButton = document.querySelector('[fs-close]');

const iconNav = document.querySelector('[menu="toggle"]');
const container = document.querySelector('[mobile-container]');
const navItems = document.querySelectorAll('[mobile-nav-item]');
const firstSubItems = document.querySelectorAll('[first-sub-item]');
const secındSubItems = document.querySelectorAll('[second-sub-item]');
const firstSubContainers = document.querySelectorAll('[first-sub-container]');
const secondSubContainers = document.querySelectorAll('[second-sub-container]');
const thirdSubContainers = document.querySelectorAll('[third-sub-container]');


const menuHover = () => {
	closeButton.addEventListener('click', () => solutionsTitle.classList.remove('-on'));
	headerFullscreen.addEventListener('mouseover', () => document.body.classList.add('-fixed'));
	solutionsTitle.addEventListener('mouseover', () => solutionsTitle.classList.add('-on'));
	solutionsTitle.addEventListener('mouseleave', () => solutionsTitle.classList.remove('-on'));
	headerFullscreen.addEventListener('mouseleave', () => {
		solutionsTitle.classList.remove('-on');
		document.body.classList.remove('-fixed');
	});
	sideItems.forEach(item => {
		item.addEventListener('mouseover', () => {
			firstSideItem.classList.remove('-open');
			firstSideItem.classList.remove('-active');
			item.classList.add('-active');
		});
		item.addEventListener('mouseleave', () => {
			firstSideItem.classList.add('-active');
			if (item != firstSideItem) item.classList.remove('-active');
		});
	});
}

const mobileMenu = () => {
	navItems.forEach(item => {
		const navLink = item.querySelector('[nav-link]');
		const navBack = item.querySelector('[nav-back]');
		const firstSubContainer = item.querySelector('[first-sub-container]');
		if (navLink) {
			navLink.addEventListener('click', () => firstSubContainer.classList.add('-on'));
		}
		if (navBack) {
			navBack.addEventListener('click', () => firstSubContainer.classList.remove('-on'));
		}
	});

	firstSubItems.forEach(item => {
		const subLink = item.querySelector('[sub-link]');
		const navBack = item.querySelector('[nav-back]');
		const secondSubContainer = item.querySelector('[second-sub-container]');
		if (subLink) {
			subLink.addEventListener('click', () => secondSubContainer.classList.add('-on'));
		}
		if (navBack) {
			navBack.addEventListener('click', () => secondSubContainer.classList.remove('-on'));
		}
	})

	secındSubItems.forEach(item => {
		const subLink = item.querySelector('[sub-link]');
		const navBack = item.querySelector('[nav-back]');
		const thirdSubContainer = item.querySelector('[third-sub-container]');
		if (subLink) {
			subLink.addEventListener('click', () => thirdSubContainer.classList.add('-on'));
		}
		if (navBack) {
			navBack.addEventListener('click', () => thirdSubContainer.classList.remove('-on'));
		}
	})
}

(function () {
  const openMenu = () => {
    iconNav.classList.toggle('-on');
    container.classList.toggle('-on');
    document.body.classList.toggle('-fixed');
		
		firstSubContainers.forEach(item => {
			if (item.classList.contains('-on')) item.classList.remove('-on');
		});
		secondSubContainers.forEach(item => {
			if (item.classList.contains('-on')) item.classList.remove('-on');
		});
		thirdSubContainers.forEach(item => {
			if (item.classList.contains('-on')) item.classList.remove('-on');
		});
  };

  if(iconNav) iconNav.addEventListener("click", openMenu);

	if (window.innerWidth < 1024) mobileMenu();
	if (window.innerWidth > 1024) menuHover();
})();


// resize
window.addEventListener('resize', function () {
	if (container && container.classList.contains('-on')) {
    iconNav.classList.remove('-on');
    container.classList.remove('-on');
    document.body.classList.remove('-fixed');
		firstSubContainers.forEach(item => {
			if (item.classList.contains('-on')) item.classList.remove('-on');
		});
		secondSubContainers.forEach(item => {
			if (item.classList.contains('-on')) item.classList.remove('-on');
		});
		thirdSubContainers.forEach(item => {
			if (item.classList.contains('-on')) item.classList.remove('-on');
		});
  }
});
