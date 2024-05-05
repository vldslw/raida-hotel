var checkinPicker, checkoutPicker;
var showMonthsNumber;
let screenWidth = window.innerWidth;
let checkinFormattedDate = "";

function initPickers() {
  var screenWidth = window.innerWidth;
  var showMonthsNumber = screenWidth > 898 ? 2 : 1;
  var bookingDates = document.querySelector(".booking__dates");

  flatpickr.l10ns.ru.weekdays.longhand =
    flatpickr.l10ns.ru.weekdays.longhand.map((day) => day.toLowerCase());

  var monthsGenitive = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  var overlay = document.querySelector(".booking__calendar-overlay");

  checkinPicker = flatpickr("#check-in", {
    minDate: "today",
    showMonths: showMonthsNumber,
    locale: "ru",
    altInput: true,
    altFormat: "j F, D",
    dateFormat: "Y-m-d",
    disableMobile: "true",
    onOpen: function () {
      if (screenWidth < 898) {
        overlay.style.display = "block";
      }
    },
    onClose: function () {
      if (screenWidth < 898) {
        overlay.style.display = "none";
      }
    },
    onChange: function (selectedDates, dateStr, instance) {
      if (selectedDates.length > 0) {
        var date = selectedDates[0];
        checkinFormattedDate =
          date.getDate() +
          " " +
          monthsGenitive[date.getMonth()] +
          ", " +
          flatpickr.l10ns.ru.weekdays.shorthand[date.getDay()].toLowerCase();
        instance.altInput.value = checkinFormattedDate;
        updateBookingDates();
      }
    },
    onReady: function (dateObj, dateStr, instance) {
      if (screenWidth < 898) {
        var title = document.createElement("div");
        title.className = "calendar-title";
        title.textContent = "Выберите дату заезда";
        instance.calendarContainer.insertBefore(
          title,
          instance.calendarContainer.firstChild
        );
      } else {
        return;
      }
    },
  });

  checkoutPicker = flatpickr("#check-out", {
    minDate: "today",
    showMonths: showMonthsNumber,
    locale: "ru",
    altInput: true,
    altFormat: "j F, D",
    dateFormat: "Y-m-d",
    disableMobile: "true",
    onOpen: function () {
      if (screenWidth < 898) {
        overlay.style.display = "block";
      }
    },
    onClose: function () {
      if (screenWidth < 898) {
        overlay.style.display = "none";
      }
    },
    onChange: function (selectedDates, dateStr, instance) {
      if (selectedDates.length > 0) {
        var date = selectedDates[0];
        var formattedDate =
          date.getDate() +
          " " +
          monthsGenitive[date.getMonth()] +
          ", " +
          flatpickr.l10ns.ru.weekdays.shorthand[date.getDay()].toLowerCase();
        instance.altInput.value = formattedDate;
        checkinPicker.set("maxDate", selectedDates[0]);
        checkinPicker.altInput.value = checkinFormattedDate;
        updateBookingDates();
      }
    },
    onReady: function (dateObj, dateStr, instance) {
      if (screenWidth < 898) {
        var title = document.createElement("div");
        title.className = "calendar-title";
        title.textContent = "Выберите дату выезда";
        instance.calendarContainer.insertBefore(
          title,
          instance.calendarContainer.firstChild
        );
      } else {
        return;
      }
    },
  });

  function getNightsWord(nights) {
    var lastDigit = nights % 10;
    var lastTwoDigits = nights % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return "ночь";
    } else if (
      lastDigit >= 2 &&
      lastDigit <= 4 &&
      (lastTwoDigits < 10 || lastTwoDigits >= 20)
    ) {
      return "ночи";
    } else {
      return "ночей";
    }
  }

  function updateBookingDates() {
    if (
      checkinPicker.selectedDates.length > 0 &&
      checkoutPicker.selectedDates.length > 0
    ) {
      let startDate = checkinPicker.selectedDates[0];
      let endDate = checkoutPicker.selectedDates[0];
      let nights = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
      var nightsWord = getNightsWord(nights);

      let options = { day: "numeric", month: "long", weekday: "short" };
      let formattedStartDate = formatDateString(
        startDate.toLocaleDateString("ru-RU", options)
      );
      let formattedEndDate = formatDateString(
        endDate.toLocaleDateString("ru-RU", options)
      );

      bookingDates.innerText = `${nights} ${nightsWord} (${formattedStartDate} — ${formattedEndDate})`;
    }
  }

  function formatDateString(dateString) {
    let parts = dateString.split(" ");
    parts[0] = parts[0].replace(",", "");
    return `${parts[1]} ${parts[2]}, ${parts[0]}`;
  }
}

initPickers();

window.addEventListener("resize", function () {
  screenWidth = window.innerWidth;
  var newShowMonthsNumber = screenWidth > 898 ? 2 : 1;
  var overlay = document.querySelector(".booking__calendar-overlay");
  console.log(checkinPicker.isOpen);

  if (newShowMonthsNumber !== showMonthsNumber) {
    checkinPicker.destroy();
    checkoutPicker.destroy();
    initPickers();
  }

  if (!checkinPicker.isOpen) {
    overlay.style.display = "none";
  }
});
