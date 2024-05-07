const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const bookingForm = document.getElementById("booking");
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");

bookingForm.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();
  const formData = new FormData(bookingForm);

  nameInput.classList.remove("booking__input_error");
  phoneInput.classList.remove("booking__input_error");
  emailInput.classList.remove("booking__input_error");

  if (nameInput.value === "" || nameInput.value === null) {
    nameError.style.display = "block";
    nameInput.classList.add("booking__input_error");
    nameError.innerText = "Необходимо ввести имя";
    return;
  } else {
    nameError.style.display = "none";
  }

  if (phoneInput.value === "") {
    phoneError.style.display = "block";
    phoneInput.classList.add("booking__input_error");
    phoneError.innerText = "Введите номер телефона";
    return;
  }
  // else if (
  //   /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
  //     phoneInput.value
  //   ) === false
  // ) {
  //   phoneError.style.display = "block";
  //   phoneInput.classList.add("booking__input_error");
  //   phoneError.innerText = "Некорректный формат номера телефона";
  //   return;
  // }
  else {
    phoneError.style.display = "none";
  }

  if (emailInput.value === "") {
    emailError.style.display = "block";
    emailInput.classList.add("booking__input_error");
    emailError.innerText = "Необходимо ввести email";
    return;
  } else if (
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailInput.value) === false
  ) {
    emailError.style.display = "block";
    emailInput.classList.add("booking__input_error");
    emailError.innerText = "Email должен содержать символ @";
    return;
  } else {
    emailError.style.display = "none";
  }

  const formDataObj = Object.fromEntries(formData);
  console.log(formDataObj);
});
