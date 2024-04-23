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
  cover: true,
  type: "loop",
  drag: "free",
  focus: "center",
  gap: "32px",
  arrows: false,
  pagination: false,
  perPage: 3,
  autoScroll: {
    speed: 0.3,
  },
});

gallerySlider.mount(window.splide.Extensions);
