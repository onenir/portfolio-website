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

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Wysłanie danych do pliku PHP za pomocą AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var formData = new FormData(this);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Możesz obsłużyć odpowiedź od serwera tutaj
        console.log(xhr.responseText);
      }
    };

    xhr.send(new URLSearchParams(formData));
  });
