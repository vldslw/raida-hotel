let select = function () {
  let selectHeader = document.querySelectorAll(".custom-select__header");
  let selectOption = document.querySelectorAll(".custom-select__option");

  function selectToggle() {
    this.parentElement.classList.toggle("custom-select_active");
  }

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest(".custom-select");

    let currentText = select.querySelector(".custom-select__current");
    let actualSelect = document.getElementById("category");

    let optgroup = this.closest(".custom-select__optgroup");

    let groupName = optgroup.querySelector(
      ".custom-select__optgroup-name"
    ).innerText;

    currentText.innerText = groupName + " — " + text;
    select.classList.remove("custom-select_active");

    Array.from(actualSelect.options).forEach((option) => {
      if (option.text === text) {
        option.selected = true;
      }
    });
  }

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectOption.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });
};

select();
