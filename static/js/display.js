document.addEventListener("DOMContentLoaded", function () {
  var displays = document.querySelector("#main-display .display");
  var prevButton = document.getElementById("prev-button");
  var nextButton = document.getElementById("next-button");
  var currentIndex = 0;

  function showCurrentDisplay() {
    displays.forEach(function (display, index) {
      if (index === currentIndex) {
        display.style.display = "block";
      } else {
        display.style.display = "none";
      }
    });
  }
  function showNextDisplay() {
    currentIndex = (currentIndex + 1) % displays.length;
    showCurrentDisplay();
  }

  function showPreviousDisplay() {
    currentIndex = (currentIndex - 1) % displays.length;
    showCurrentDisplay();
  }
  prevButton.addEventListener("click", showPreviousDisplay);
  nextButton.addEventListener("click", showNextDisplay);
  showCurrentDisplay();
});
