var reviewsSlider = new Splide("#reviewsSlider", {
  perPage: 3,
  height: "420px",
  breakpoints: {
    768: {
      height: "342px",
      perPage: 1,
      padding: { left: "18px", right: "56px" },
    },
  },
  gap: "32px",
  pagination: false,
});

reviewsSlider.mount();
