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

var reviewsSlider = new Splide("#reviewsSlider", {
  perPage: 3,
  height: "420px",
  breakpoints: {
    768: {
      height: "342px",
      perPage: 1,
    },
  },
  gap: "32px",
  pagination: false,
});

var roomSliderMain = new Splide("#roomSliderMain", {
  type: "fade",
  fixedHeight: 440,
  // heightRatio: 0.5,
  pagination: false,
  arrows: false,
  cover: true,
});

var roomSliderThumbnails = new Splide("#roomSliderThumbnails", {
  rewind: true,
  perPage: 3,
  heightRatio: 0.22,
  isNavigation: true,
  gap: 16,
  focus: "center",
  pagination: false,
  cover: true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints: {
    768: {
      perPage: 1,
      type: "loop",
      heightRatio: 0.67,
      padding: { left: "0", right: "80px" },
    },
  },
});

gallerySlider.mount(window.splide.Extensions);
reviewsSlider.mount();
roomSliderMain.sync(roomSliderThumbnails);
roomSliderMain.mount();
roomSliderThumbnails.mount();
