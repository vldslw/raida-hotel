var checkinPicker, checkoutPicker;
var showMonthsNumber;

function initPickers() {
  var screenWidth = window.innerWidth;
  var showMonthsNumber = screenWidth > 898 ? 2 : 1;

  checkinPicker = flatpickr("#check-in", {
    minDate: "today",
    showMonths: showMonthsNumber,
    locale: "ru",
    altInput: true,
    altFormat: "F j, D",
    dateFormat: "Y-m-d",
    onChange: function (selectedDates, dateStr, instance) {
      if (selectedDates.length > 0) {
        checkoutPicker.set("minDate", selectedDates[0]);
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
    altFormat: "F j, D",
    dateFormat: "Y-m-d",
    onChange: function (selectedDates, dateStr, instance) {
      if (selectedDates.length > 0) {
        checkinPicker.set("maxDate", selectedDates[0]);
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
}

initPickers();

window.addEventListener("resize", function () {
  var screenWidth = window.innerWidth;
  var newShowMonthsNumber = screenWidth > 898 ? 2 : 1;

  // If the number of months to show has changed, re-initialize the datepickers
  if (newShowMonthsNumber !== showMonthsNumber) {
    checkinPicker.destroy();
    checkoutPicker.destroy();
    initPickers();
  }
});
