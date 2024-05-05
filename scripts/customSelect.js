var overlay = document.querySelector(".booking__overlay");

let select = function () {
  document.addEventListener("click", selectChoose);

  function selectChoose(event) {
    if (!event.target.classList.contains("custom-select__option")) {
      return;
    }
    let select = event.target.closest(".custom-select");

    if (!select) {
      return;
    }

    select
      .querySelectorAll(".custom-select__option")
      .forEach((opt) => opt.classList.remove("custom-select__option_selected"));
    event.target.classList.add("custom-select__option_selected");

    let text = event.target.innerText;
    let currentText = select.querySelector(".custom-select__current");

    let actualSelectId = select.getAttribute("data-target");
    let actualSelect = document.getElementById(actualSelectId);

    let optgroup = event.target.closest(".custom-select__optgroup");

    if (optgroup) {
      let groupName = optgroup.querySelector(
        ".custom-select__optgroup-name"
      ).innerText;
      currentText.innerText = groupName + " — " + text;
    } else {
      currentText.innerText = text;
    }

    select.classList.remove("custom-select_active");
    overlay.style.display = "none";

    let header = select.querySelector(".custom-select__header");
    if (header) {
      header.classList.remove("custom-select__header_active");
      overlay.style.display = "none";
    }

    let icon = select.querySelector(".custom-select__icon");
    icon.classList.remove("custom-select__icon_flipped");

    Array.from(actualSelect.options).forEach((option) => {
      if (option.text === text) {
        option.selected = true;
      }
    });
  }

  document.addEventListener("click", function (event) {
    let header = event.target.closest(".custom-select__header");
    if (header) {
      let select = header.closest(".custom-select");
      select.classList.toggle("custom-select_active");

      header.classList.toggle("custom-select__header_active");

      let icon = select.querySelector(".custom-select__icon");
      icon.classList.toggle("custom-select__icon_flipped");

      overlay.style.display = "block";
    }
  });

  document.addEventListener("click", function (event) {
    let select = event.target.closest(".custom-select");

    if (!select) {
      let allSelects = document.querySelectorAll(".custom-select");
      allSelects.forEach((select) => {
        select.classList.remove("custom-select_active");

        let header = select.querySelector(".custom-select__header");
        if (header) {
          header.classList.remove("custom-select__header_active");
        }

        let icon = select.querySelector(".custom-select__icon");
        icon.classList.remove("custom-select__icon_flipped");

        overlay.style.display = "none";
      });
    } else {
      let upper = event.target.closest(".custom-select__upper");
      if (upper) {
        select.classList.remove("custom-select_active");

        let header = select.querySelector(".custom-select__header");
        if (header) {
          header.classList.remove("custom-select__header_active");
        }

        let icon = select.querySelector(".custom-select__icon");
        icon.classList.remove("custom-select__icon_flipped");

        overlay.style.display = "none";
      }
    }
  });
};

select();
