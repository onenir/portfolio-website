function openFile(fileName) {
  window.location.href = fileName;
}
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    // Dostosuj wartość 200 do swoich preferencji dotyczących odległości przewinięcia
    if (scrollPosition > 200) {
      document.body.classList.add("scroll-background");
    } else {
      document.body.classList.remove("scroll-background");
    }
  });
});

var calculateBMIButton = document.getElementById("calculateBMIButton");

// script.js

// Pobierz przycisk
var calculateBMIButton = document.getElementById("calculateBMIButton");

// Dodaj nasłuchiwanie zdarzenia kliknięcia
calculateBMIButton.addEventListener("click", function () {
  // Przekieruj do strony bmicalc.html
  window.location.href = "bmicalc/bmicalc.html";
});
