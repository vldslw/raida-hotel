var gallerySlider = new Splide("#gallerySlider", {
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
