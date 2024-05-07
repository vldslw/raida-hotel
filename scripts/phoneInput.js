document.addEventListener("DOMContentLoaded", function () {
  phoneMaskInput = document.getElementById("phone");

  const getInputNumberValues = (input) => {
    return input.value.replace(/\D/g, "");
  };

  const onPhoneInput = (e) => {
    let input = e.target;
    let inputNumbersValue = getInputNumberValues(input);
    let formattedInputValue = "";
    selectionStart = input.selectionStart;

    if (!inputNumbersValue) {
      return (input.value = "");
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].includes(inputNumbersValue[0])) {
      // Российский номер
      if (inputNumbersValue[0] == "9") {
        inputNumbersValue = "7" + inputNumbersValue;
      }
      let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      // Номер из другой страны
      formattedInputValue = input.value = "+" + inputNumbersValue;
    }
    input.value = formattedInputValue;
  };

  const onPhonePaste = (e) => {
    let input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let pasted = e.clipboardData || window.clipboardData;

    if (pasted) {
      let pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  const onPhoneKeyDown = (e) => {
    let input = e.target;
    if (e.keyCode == 8 && getInputNumberValues(input).length == 1) {
      e.target.value = "";
    }
  };

  phoneMaskInput.addEventListener("input", onPhoneInput);
  phoneMaskInput.addEventListener("keydown", onPhoneKeyDown);
  phoneMaskInput.addEventListener("paste", onPhonePaste);
});
