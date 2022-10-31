let lazy = () => {

  //for IE cancel the lazy load
  var features = [];
  ('IntersectionObserver' in window) || features.push('IntersectionObserver');

  if (features.length) {

    let lazyImages = document.querySelectorAll(`[lazy]`);
    var i;
    for (i = 0; i < lazyImages.length; i++) {
      let lazyImagesAttr = lazyImages[i].getAttribute("lazy");
      if (lazyImages[i].hasAttribute("lazy-bg") == false) {
        lazyImages[i].setAttribute("src", lazyImagesAttr);
      }
    }

    let lazyBgImages = document.querySelectorAll(`[lazy-bg]`);
    var j;
    for (j = 0; j < lazyBgImages.length; j++) {
      let lazyBgImagesAttr = lazyBgImages[j].getAttribute("lazy");
      lazyBgImages[j].style.backgroundImage = "url('" + lazyBgImagesAttr + "')";
    }

    return;

  } else {

    // Lazy Load Options
    let lazyOption = {
      tag: "lazy", // Default Lazy Loader
      srcset: "lazy-srcset", // Picture Image srcset attributes
      backgroundImage: "lazy-bg", // Background Image attributes,
      functions: "lazy-js", // Load js function attributes
      element: "lazy-element", // Lazy Load elements
      animation: "-done", // When Image or Video loaded added animation class
      done: "done", // When Video loaded added attribute
      track: "lazy-track" // Should keep tracking after enter view
    };

    let lazyisImage = item => item.tagName.toLowerCase() === "img";
    let lazyisBackgroundImage = item => item.hasAttribute(lazyOption.backgroundImage);
    let lazyisVideo = item => item.tagName.toLowerCase() === "video";
    let lazyisSource = item => item.tagName.toLowerCase() === "source";
    let lazyisIframe = item => item.tagName.toLowerCase() === "iframe";
    let lazyisFunction = item => item.hasAttribute(lazyOption.functions);
    let lazyisElement = item => item.hasAttribute(lazyOption.element);
    let lazyReset = (item, attr) => item.removeAttribute(attr); // Reset after src replaced

    let lazyItems = document.querySelectorAll(`[${lazyOption.tag}]`); // Get all lazy items

    let lazyLoad = new IntersectionObserver(entry => {
      entry.map(item => {
        let target = item.target; // HTML item
        let isTracking = target.getAttribute(lazyOption.track); // Keep tracking? Default: false

        if (!item.isIntersecting && !!!isTracking) return false; // If it's not in view and shouldn't tracking after enter the view. Default tracking: false

        let isImage = lazyisImage(target);
        let isVideo = lazyisVideo(target);
        let isIframe = lazyisIframe(target);
        let isFunction = lazyisFunction(target);
        let isElement = lazyisElement(target);
        let isBackgroundImage = lazyisBackgroundImage(target);

        let src = target.getAttribute(lazyOption.tag);

        if (!!!isTracking) lazyLoad.unobserve(target); // Remove observe after enter view if it shouldn't tracking

        if (isFunction && (typeof eval(src) === 'function')) {
          eval(src);
          return true;
        }

        if (isElement) {
          if (item.isIntersecting) target.classList.add(src);
          if (!item.isIntersecting && target.classList.contains(src)) target.classList.remove(src);
        }

        if (isImage && !!src) {
          return lazyImageLoad(target, src);
        }

        if (isBackgroundImage) {
          return lazyBackgroundImageLoad(target, src);
        }

        if (isVideo) {
          let isDone = target.hasAttribute(lazyOption.done); // Is video loaded before?

          // When video enter first time to view video source should load
          if (item.isIntersecting && !!!isDone) {
            target.load();
            target.setAttribute(lazyOption.done, "");
          }
          // When video leave the view video should pause
          if (!item.isIntersecting && !!isDone) {
            target.pause();
          }
          // When video enter the view video should play
          if (item.isIntersecting && !!isDone) {
            target.play();
          }
        }

        if (isIframe) {
          return lazyIframeLoad(target, src);
        }

        // If lazy at parent element
        if (target.children) {
          let items = [].slice.call(target.children); // Get all child elements
          for (let item of items) {
            let isImage = lazyisImage(item);
            let isSource = lazyisSource(item);
            let src = item.getAttribute(lazyOption.tag);
            let srcset = item.hasAttribute(lazyOption.srcset);
            if (isImage) lazyImageLoad(item, src);
            if (isSource && lazyisVideo(item.parentElement)) lazyVideoLoad(item, src);
            if (isSource && srcset) lazyPictureLoad(item, src);
          }
        }

        return true;
      });
    });

    let lazyImageLoad = (item, src) => {
      if (!!!src) return false;
      item.setAttribute("src", src);
      lazyReset(item, lazyOption.tag);
      item.onload = () => {
        if (item.parentElement.hasAttribute(lazyOption.tag) && !!lazyOption.animation)
          item.parentElement.classList.add(lazyOption.animation);
      };
      return true;
    };

    let lazyBackgroundImageLoad = (item, src) => {
      if (!!!src) return false;
      item.style.backgroundImage = `url('${src}')`;
      return lazyReset(item, lazyOption.tag);
    };

    let lazyVideoLoad = (item, src) => {
      if (!!!src) return false;
      item.setAttribute("src", src);
      return lazyReset(item, lazyOption.tag);
    };

    let lazyIframeLoad = (item, src) => {
      if (!!!src) return false;
      item.setAttribute("src", src);
      return lazyReset(item, lazyOption.tag);
    };

    let lazyPictureLoad = (item, srcset) => {
      if (!!!srcset) return false;
      item.setAttribute("srcset", srcset);
      return lazyReset(item, lazyOption.tag);
    };

    for (let entry of lazyItems) {
      lazyLoad.observe(entry);
    }
  }
}

// Polyfill for IntersectionObserve
// var features = [];
// ('IntersectionObserver' in window) || features.push('IntersectionObserver');

// if (features.length) {
// 	var s = document.createElement('script');
// 	s.src = 'https://polyfill.io/v3/polyfill.min.js?features=' + features.join(',') + '&flags=gated,always&callback=lazy';
// 	s.async = true;
// 	document.head.appendChild(s);
// } else {
// 	lazy();
// }

lazy();

// Google Map Init
var map;
let initGoogleMap = () => {
  var s = document.createElement('script');
  s.src =
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyCqxxOJ9SsSpNNeOCPzwPb88pEVwIxkaUA&callback=initMap';
  s.async = true;
  document.head.appendChild(s);
};

let initMap = () => {
  map = new google.maps.Map(document.querySelector('[googlemap]'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });
}

// // Just random bg colors - Not related with lazyload
// const initColors = () => {
// 	let items = document.querySelectorAll("section");
// 	for (let i = 0; i < items.length; i++) {
// 		items[i].style.background = randomColor({ luminosity: "light" });
// 	}
// };

// initColors();
