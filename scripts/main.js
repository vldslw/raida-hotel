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
      padding: { left: "18px", right: "56px" },
    },
  },
  gap: "32px",
  pagination: false,
});

gallerySlider.mount(window.splide.Extensions);
reviewsSlider.mount();

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

const buildingSelectButtons = document.querySelectorAll(
  ".rooms__buildings-selector"
);
const roomDetailsSections = document.querySelectorAll(".room-details");

buildingSelectButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buildingSelectButtons.forEach((btn) => {
      btn.classList.remove("rooms__buildings-selector_state_active");
    });

    button.classList.add("rooms__buildings-selector_state_active");

    roomDetailsSections.forEach((section) => {
      section.style.display = "none";
    });
    roomDetailsSections[index].style.display = "block";
  });
});
