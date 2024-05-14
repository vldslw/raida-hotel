const bookingForm = document.getElementById("booking");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const captchaInput = document.getElementById("captcha-form");

const submitButton = document.getElementById("callbackSubmitButton");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const captchaError = document.getElementById("captchaError");

const botToken = "6942163868:AAGyWH4wTlEure9SzdJxMqCwrhKMJ51fEm0";
const chatId = "-1002143736013";

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const sum = num1 + num2;

  // Display the question
  document.querySelector(
    ".booking__label_captcha"
  ).textContent = `Сложите ${num1} + ${num2}?`;

  // Store the answer in a data attribute for later validation
  document
    .querySelector(".booking__label_captcha")
    .setAttribute("data-answer", sum.toString());
}

// Call the function to generate CAPTCHA on page load
generateCaptcha();

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAnswer = captchaInput.value;
  const correctAnswer = document
    .querySelector(".booking__label_captcha")
    .getAttribute("data-answer");

  console.log(userAnswer, correctAnswer);

  const formData = new FormData(bookingForm);

  nameInput.classList.remove("booking__input_error");
  phoneInput.classList.remove("booking__input_error");
  emailInput.classList.remove("booking__input_error");

  if (userAnswer === correctAnswer) {
    console.log("CAPTCHA is correct");
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
    } else {
      phoneError.style.display = "none";
    }

    if (emailInput.value === "") {
      emailError.style.display = "block";
      emailInput.classList.add("booking__input_error");
      emailError.innerText = "Необходимо ввести email";
      return;
    } else if (
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailInput.value) ===
      false
    ) {
      emailError.style.display = "block";
      emailInput.classList.add("booking__input_error");
      emailError.innerText = "Email должен содержать символ @";
      return;
    } else {
      emailError.style.display = "none";
    }

    const formDataObj = Object.fromEntries(formData);

    let rooms = [];

    for (let key in formDataObj) {
      if (key.startsWith("category")) {
        rooms.push(formDataObj[key]);
      }
    }

    let roomsText = rooms.join(", ");
    console.log(
      `Имя: ${formDataObj.name},
      Телефон: ${formDataObj.phone};
      Почта: ${formDataObj.email};
      Cпособ связи: ${formDataObj.method};
      Дата заезда: ${formDataObj.checkIn};
      Дата выезда: ${formDataObj.checkOut};
      Взрослые: ${formDataObj.guestsAdults};
      Дети: ${formDataObj.guestsChildren};
      Номера: ${roomsText};
      Промокод: ${formDataObj.promo};
      Комментарий: ${formDataObj.comment}
      `
    );

    // fetch(
    //   `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=
    //   Имя: ${encodeURIComponent(formDataObj.name)};
    //   Телефон: ${encodeURIComponent(formDataObj.phone)}
    //   Почта: ${encodeURIComponent(formDataObj.email)};
    //   Cпособ связи: ${encodeURIComponent(formDataObj.method)};
    //   Дата заезда: ${encodeURIComponent(formDataObj.checkIn)};
    //   Дата выезда: ${encodeURIComponent(formDataObj.checkOut)};
    //   Взрослые: ${encodeURIComponent(formDataObj.guestsAdults)};
    //   Дети: ${encodeURIComponent(formDataObj.guestsChildren)};
    //   Номера: ${encodeURIComponent(roomsText)};
    //   Промокод: ${encodeURIComponent(formDataObj.promo)};
    //   Комментарий: ${encodeURIComponent(formDataObj.comment)}
    //   `
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Message sent!", data);
    //     // successMessage.textContent = "Форма успешно отправлена";
    //     generateCaptcha();
    //     // userNameInput.value = "";
    //     // userPhoneInput.value = "";
    //     // captchaAnswerInput.value = "";
    //   })
    //   .catch((error) => console.error("Error:", error));
    // // Proceed with form submission or further processing
    // console.log("Form is valid. Implement submission or further processing.");
  } else {
    captchaError.style.display = "block";
    captchaInput.classList.add("booking__input_error");
    captchaError.innerText = "Введен неверный код";
    generateCaptcha();
    return;
  }
});
