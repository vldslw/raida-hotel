const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const untriggeredElements = document.querySelectorAll(".untriggered");

hiddenElements.forEach((element) => {
  observer.observe(element);
});

untriggeredElements.forEach((element) => {
  observer.observe(element);
});
