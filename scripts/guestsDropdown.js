var guestsOverlay = document.querySelector(".booking__guests-overlay");

function getWordForm(n, one, few, many) {
  var lastDigit = n % 10;
  var lastTwoDigits = n % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return one;
  } else if (
    lastDigit >= 2 &&
    lastDigit <= 4 &&
    (lastTwoDigits < 10 || lastTwoDigits >= 20)
  ) {
    return few;
  } else {
    return many;
  }
}

function updateGuestsNumbers() {
  let adultsNumber = parseInt(
    document.querySelector("#guests-adults").value,
    10
  );
  let childrenNumber = parseInt(
    document.querySelector("#guests-children").value,
    10
  );

  var adultsWord = getWordForm(
    adultsNumber,
    "взрослый",
    "взрослых",
    "взрослых"
  );
  var childrenWord = getWordForm(childrenNumber, "ребенок", "ребенка", "детей");

  var guestsText = adultsNumber + " " + adultsWord;
  if (childrenNumber > 0) {
    guestsText += ", " + childrenNumber + " " + childrenWord;
  }

  document.querySelector(".booking__guests").textContent = guestsText;
}

document.querySelectorAll(".guests-dropdown__button").forEach((button) => {
  button.addEventListener("click", (event) => {
    let numberElement = event.target.parentElement.querySelector(
      ".guests-dropdown__number"
    );
    let currentNumber = parseInt(numberElement.value, 10);

    if (event.target.classList.contains("guests-dropdown__button_plus")) {
      ++numberElement.value;
    } else if (
      event.target.classList.contains("guests-dropdown__button_minus") &&
      currentNumber > 0
    ) {
      --numberElement.value;
    }

    updateGuestsNumbers();
  });
});

let dropdown = document.querySelector(".guests-dropdown");
let bookingGuests = document.querySelector(".booking__guests");
let bookingGuestsIcon = document.querySelector(".booking__guests-icon");

bookingGuests.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdown.classList.toggle("guests-dropdown_open");
  bookingGuestsIcon.classList.toggle("booking__guests-icon_flipped");
  guestsOverlay.style.display = "block";
});

document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("guests-dropdown_open");
    bookingGuestsIcon.classList.remove("booking__guests-icon_flipped");
    guestsOverlay.style.display = "none";
  }
});
