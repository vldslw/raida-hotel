const cards = document.querySelectorAll(".room-details__card");

cards.forEach((card) => {
  let roomSliderMain;
  let roomSliderThumbnails;

  const button = card.querySelector(".room-details__open-button");

  button.addEventListener("click", function () {
    button.classList.toggle("room-details__open-button_state_active");
    const lower = card.querySelector(".room-details__lower");
    lower.classList.toggle("room-details__lower_open");
    if (
      lower.classList.contains("room-details__lower_open") &&
      !roomSliderMain &&
      !roomSliderThumbnails
    ) {
      const mainSliderElement = card.querySelector(
        ".room-details__slider_type_main"
      );
      const thumbnailSliderElement = card.querySelector(
        ".room-details__slider_type_thumbnails"
      );

      roomSliderMain = new Splide(mainSliderElement, {
        type: "fade",
        fixedHeight: 440,
        pagination: false,
        arrows: false,
        cover: true,
      }).mount();

      roomSliderThumbnails = new Splide(thumbnailSliderElement, {
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
      }).mount();

      roomSliderMain.sync(roomSliderThumbnails);
    }
  });
});
