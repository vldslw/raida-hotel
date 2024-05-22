var gallerySliderEnlarged = new Splide("#gallerySliderEnlarged", {
  width: "100vw",
  type: "slide",
  heightRatio: 0.45,
  pagination: false,
  // arrows: true,
  cover: true,
  breakpoints: {
    768: {
      heightRatio: 1,
    },
  },
});

var gallerySlider = new Splide("#gallerySlider", {
  height: "240px",
  breakpoints: {
    768: {
      height: "160px",
      perPage: 2,
    },
    420: {
      perPage: 1,
    },
  },
  isNavigation: true,
  cover: true,
  type: "loop",
  drag: "free",
  focus: "center",
  gap: "32px",
  arrows: false,
  pagination: false,
  perPage: 3,
  autoScroll: {
    speed: 0.6,
  },
});

var galleryOverlay = document.querySelector(".gallery__overlay");
var enlargedSlider = document.getElementById("gallerySliderEnlarged");
var slides = document.querySelectorAll(".gallery__slide_small");

gallerySlider.on("mounted", () => {
  slides.forEach((slide) => {
    slide.addEventListener("click", function () {
      console.log("open");

      enlargedSlider.style.display = "block";
      galleryOverlay.style.display = "block";
      gallerySliderEnlarged.mount();
    });
  });
});

galleryOverlay.addEventListener("click", function () {
  enlargedSlider.style.display = "none";
  galleryOverlay.style.display = "none";
});

gallerySliderEnlarged.sync(gallerySlider);
gallerySlider.mount(window.splide.Extensions);
