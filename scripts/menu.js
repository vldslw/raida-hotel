const openMenuButtons = document.querySelectorAll(".header__menu-button");
const closeMenuButtons = document.querySelectorAll(".menu__close-button");

openMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = document.querySelector(button.dataset.menuTarget);
    openMenu(menu);
  });
});

closeMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = button.closest(".menu");
    closeMenu(menu);
  });
});

function openMenu(menu) {
  if (menu == null) return;
  menu.classList.add("menu_active");
}

function closeMenu(menu) {
  if (menu == null) return;
  menu.classList.remove("menu_active");
}
