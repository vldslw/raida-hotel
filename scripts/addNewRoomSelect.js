let selectCount = 1;

function updateDeleteButtons() {
  let customSelects = document.querySelectorAll(".custom-select_category");
  let deleteButtons = document.querySelectorAll(
    ".custom-select__delete-button"
  );

  if (customSelects.length > 1) {
    deleteButtons.forEach((button) => {
      button.style.display = "block";

      button.addEventListener("click", function (event) {
        let customSelect = event.target.closest(".custom-select");

        let inputId = customSelect.getAttribute("data-target");
        let input = document.getElementById(inputId);

        customSelect.remove();
        if (input) {
          input.remove();
        }

        updateDeleteButtons();
      });
    });
  } else {
    deleteButtons.forEach((button) => (button.style.display = "none"));
  }

  customSelects.forEach((customSelect, index) => {
    let roomNumber = customSelect.querySelector(".custom-select__room-number");
    if (roomNumber) {
      roomNumber.textContent = "Номер " + (index + 1);
    }
  });
}

document.getElementById("addSelect").addEventListener("click", function () {
  console.log(selectCount);
  selectCount++;

  let select = document.querySelectorAll(".category-select")[0];
  let customSelect = document.querySelectorAll(".custom-select")[0];

  let newSelect = select.cloneNode(true);
  newSelect.id = "category" + selectCount;
  newSelect.style.display = "none";

  let newCustomSelect = customSelect.cloneNode(true);
  newCustomSelect.id = "custom-select-" + selectCount;
  newCustomSelect.setAttribute("data-target", newSelect.id);

  let roomNumber = newCustomSelect.querySelector(".custom-select__room-number");
  roomNumber.textContent = "Номер " + selectCount;

  let button = document.getElementById("addSelect");

  let parent = document.getElementById("rooms");
  parent.insertBefore(newSelect, button);
  parent.insertBefore(newCustomSelect, button);
  updateDeleteButtons();
});

updateDeleteButtons();
