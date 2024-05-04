function updateGuestsNumbers() {
  let adultsNumber = document.querySelector("#guests-adults").value;
  let childrenNumber = document.querySelector("#guests-children").value;

  document.querySelector(".booking__guests-number_adults").textContent =
    adultsNumber;
  document.querySelector(".booking__guests-number_children").textContent =
    childrenNumber;
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

bookingGuests.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdown.classList.toggle("guests-dropdown_open");
});

document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("guests-dropdown_open");
  }
});
