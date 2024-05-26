const openMenuButtons = document.querySelectorAll(".header__ham-menu");

openMenuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("header__ham-menu_active");
    const menu = document.querySelector(button.dataset.menuTarget);
    openMenu(menu);
  });
});

function openMenu(menu) {
  if (menu == null) return;
  menu.classList.toggle("menu_active");
}
