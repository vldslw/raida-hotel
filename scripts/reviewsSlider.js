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

reviewsSlider.on("mounted", () => {
  document.querySelectorAll(".reviews__card").forEach((card) => {
    console.log("added");
    let parent = card.parentElement;
    let nextSibling = card.nextSibling;

    let openCardButton = card.querySelector(".reviews__open-card");
    let closeCardButton = card.querySelector(".reviews__close-card");
    if (openCardButton) {
      openCardButton.addEventListener("click", () => {
        console.log("click");
        document.body.appendChild(card);
        card.classList.add("reviews__card_expanded");
        openCardButton.classList.add("reviews__open-card_hidden");
        closeCardButton.classList.add("reviews__close-card_active");
      });
    } else {
      console.error("Open card button not found");
    }

    if (closeCardButton) {
      closeCardButton.addEventListener("click", closeCard);
      card.addEventListener("touchmove", (event) => {
        if (event.touches[0].clientY > window.innerHeight / 2) {
          closeCard();
        }
      });
    } else {
      console.error("Close card button not found");
    }

    function closeCard() {
      console.log("close click");
      card.classList.remove("reviews__card_expanded");
      openCardButton.classList.remove("reviews__open-card_hidden");
      closeCardButton.classList.remove("reviews__close-card_active");
      if (nextSibling) {
        parent.insertBefore(card, nextSibling);
      } else {
        parent.appendChild(card);
      }
    }
  });
});

reviewsSlider.mount();
