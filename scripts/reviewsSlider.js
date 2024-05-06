var reviewsSlider = new Splide("#reviewsSlider", {
  perPage: 3,
  padding: {
    right: "48px",
  },
  breakpoints: {
    768: {
      perPage: 1,
      padding: { left: "18px", right: "56px" },
    },
  },
  gap: "16px",
  pagination: false,
});

reviewsSlider.mount();
