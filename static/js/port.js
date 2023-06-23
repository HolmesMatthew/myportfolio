// // Face movement
// document.addEventListener("DOMContentLoaded", function () {
//   // Get eye elements
//   var leftEye = document.getElementById("left-eye");
//   var rightEye = document.getElementById("right-eye");
//   //   get pupils from within the eyes
//   var pupilLeft = leftEye.querySelector(".pupil");
//   var pupilRight = rightEye.querySelector(".pupil");

//   // Event listener to track mouse movement
//   // Calculate the position of the mouse within the eyes

//   // getBoundingClientRect() is a method used to get position and dimensions
//   var eyeRect = leftEye.getBoundingClientRect();
//   // get eye center

//   // var eyeCenterX = eyeRect.left + eyeRect.width / 2;
//   // var eyeCenterY = eyeRect.top + eyeRect.height / 2;

//   // function for horizontal center
//   function getElementCenterX(element) {
//     var rect = element.getBoundingClientRect();
//     return rect.left + rect.width / 2 + window.scrollX;
//   }
//   // function for vertical center
//   function getElementCenterY(element) {
//     var rect = element.getBoundingClientRect();
//     return rect.top + rect.height / 2 + window.scrollY;
//   }
//   var eyeCenterX = getElementCenterX(leftEye);
//   var eyeCenterY = getElementCenterY(leftEye);
//   document.addEventListener("mousemove", function (event) {
//     // get x&y coordinates of the mouse
//     var x = event.clientX;
//     var y = event.clientY;
//     // subtract mouse coordinates from eye center
//     var dx = x - eyeCenterX;
//     var dy = y - eyeCenterY;

//     // Calculate the angle and distance between the mouse and eye center
//     var angle = Math.atan2(dy, dx);
//     var distance = Math.sqrt(dx * dx + dy * dy);

//     // Define the maximum distance the eyes can move
//     var maxDistance = 0.5;

//     // Calculate the translation values based on the angle and distance
//     var translationX = Math.cos(angle) * Math.min(distance, maxDistance);
//     var translationY = Math.sin(angle) * Math.min(distance, maxDistance);
//     // Calculate the translation for the pupils
//     var pupilTranslationX = dx * 0.1;
//     var pupilTranslationY = dy * 0.1;

//     // Apply the translation to move the eyes
//     // leftEye.style.transform =
//     //   "translate(" + translationX + "px, " + translationY + "px)";
//     // rightEye.style.transform =
//     //   "translate(" + translationX + "px, " + translationY + "px)";
//     //   and pupils
//     pupilLeft.style.transform =
//       "translate(" +
//       (eyeCenterX + pupilTranslationY) +
//       "px, " +
//       (eyeCenterY + pupilTranslationY) +
//       "px)";
//     pupilRight.style.transform =
//       "translate(" +
//       (eyeCenterX + pupilTranslationX) +
//       "px, " +
//       (eyeCenterY + pupilTranslationY) +
//       "px)";
//   });
// });

// // event listener for scroll event
// document.addEventListener("DOMContentLoaded", function () {
//   // get div for btn
//   // const scrollButton = document.getElementById("btn");
//   var container = document.getElementById("scroll-button");

//   // create button
//   const btn = document.createElement("button");
//   btn.textContent = "Page 2";

//   var pageTwo = document.getElementById("page-two");

//   btn.addEventListener("click", function () {
//     pageTwo.scrollIntoView({ behavior: "smooth" });
//   });
//   container.appendChild(btn);
// });
// // add disable
// function handleScroll() {
//   if (window.scrollY > 0) {
//     btn.style.display = "none";
//   } else {
//     btn.style.display = "block";
//   }
// }
// window.addEventListener("scroll", handleScroll);
// // window = tab, current instance, the window you have open...

// // window.addEventListener("scroll", function () {
// //   //
// //   if (window.scrollY < 0) {
// //     scrollButton.disabled = true;
// //   } else {
// //     scrollButton.disabled = false;
// //   }
// // });

// // document.addEventListener("DOMContentLoaded", function () {
// //   var scrollButton = document.querySelector("button");
// //   var pageTwo = document.getElementById("page-two");

// //   scrollButton.addEventListener("click", function () {
// //     pageTwo.scrollIntoView({ behavior: "smooth" });
// //   });
// // });
// --------------------------------
// Face movement
document.addEventListener("DOMContentLoaded", function () {
  // Get pupil elements
  var pupilLeft = document.querySelector("#left-eye .pupil");
  var pupilRight = document.querySelector("#right-eye .pupil");

  // Calculate the initial position of the pupils within the eyes
  var pupilRectLeft = pupilLeft.getBoundingClientRect();
  var pupilRectRight = pupilRight.getBoundingClientRect();
  var pupilCenterXLeft =
    pupilRectLeft.left + pupilRectLeft.width / 2 + window.scrollX;
  var pupilCenterYLeft =
    pupilRectLeft.top + pupilRectLeft.height / 2 + window.scrollY;
  var pupilCenterXRight =
    pupilRectRight.left + pupilRectRight.width / 2 + window.scrollX;
  var pupilCenterYRight =
    pupilRectRight.top + pupilRectRight.height / 2 + window.scrollY;

  // Event listener to track mouse movement
  document.addEventListener("mousemove", function (event) {
    // Get the position of the mouse
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Calculate the distance between the pupils and the mouse
    var distanceXLeft = mouseX - pupilCenterXLeft;
    var distanceYLeft = mouseY - pupilCenterYLeft;
    var distanceXRight = mouseX - pupilCenterXRight;
    var distanceYRight = mouseY - pupilCenterYRight;

    // Calculate the maximum distance the pupils can move
    var maxDistance = 5;

    // Calculate the translation values based on the distance
    var translationXLeft = Math.max(
      -maxDistance,
      Math.min(maxDistance, distanceXLeft)
    );
    var translationYLeft = Math.max(
      -maxDistance,
      Math.min(maxDistance, distanceYLeft)
    );
    var translationXRight = Math.max(
      -maxDistance,
      Math.min(maxDistance, distanceXRight)
    );
    var translationYRight = Math.max(
      -maxDistance,
      Math.min(maxDistance, distanceYRight)
    );

    // Apply the translation to move the pupils
    pupilLeft.style.transform =
      "translate(" + translationXLeft + "px, " + translationYLeft + "px)";
    pupilRight.style.transform =
      "translate(" + translationXRight + "px, " + translationYRight + "px)";
  });
});
