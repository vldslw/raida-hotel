var gallerySliderEnlarged = new Splide("#gallerySliderEnlarged", {
  type: "fade",
  heightRatio: 0.5,
  pagination: false,
  arrows: false,
  cover: true,
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

gallerySliderEnlarged.sync(gallerySlider);
gallerySliderEnlarged.mount();
gallerySlider.mount(window.splide.Extensions);
