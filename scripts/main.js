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
