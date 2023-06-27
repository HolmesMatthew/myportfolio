document.addEventListener("DOMContentLoaded", function () {
  var scrollLockButton = document.getElementById("scroll-lock-button");
  var scrollDownButton = document.getElementById("scroll-down-button");
  var leftEye = document.getElementById("left-eye");
  var rightEye = document.getElementById("right-eye");
  var judgment = document.getElementById("judgment");
  //   var isScrollLocked = true;

  // Disable scroll by default
  //   if (scrollY !== 0) {
  //     document.body.style.overflow = "auto";
  //     scrollDownButton.style.display = "none";
  //     scrollLockButton.style.display = "none";
  //   } else {
  //     document.body.style.overflow = "hidden";
  //     scrollDownButton.style.display = "none";
  //   }
  // initialize with black screen
  //   document.body.style.backgroundColor = "black";
  //   judgment.style.display = "none";

  //   scrollLockButton.addEventListener("click", function () {
  //     isScrollLocked = !isScrollLocked;

  //     if (isScrollLocked) {
  //       scrollDownButton.style.display = "none";
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       judgment.style.display = "block";
  //       scrollDownButton.style.display = "block";
  //       scrollLockButton.style.display = "none";
  //       document.body.style.overflow = "auto";
  //       document.body.style.backgroundColor = "white";
  //       leftEye.style.backgroundColor = "white";
  //       rightEye.style.backgroundColor = "white";
  //     }
  //   });

  scrollDownButton.addEventListener("click", function () {
    var pageTwo = document.getElementById("page-two");
    pageTwo.scrollIntoView({ behavior: "smooth" });

    scrollLockButton.style.display = "none";
    scrollDownButton.style.display = "block";
    document.body.style.overflow = "auto";
    isScrollLocked = false;
  });
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      scrollDownButton.style.display = "none";
    } else {
      scrollDownButton.style.display = "block";
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   var scrollLockButton = document.getElementById("scroll-lock-button");
//   var scrollDownButton = document.getElementById("scroll-down-button");
//   var leftEye = document.getElementById("left-eye");
//   var rightEye = document.getElementById("right-eye");
//   var judgment = document.getElementById("judgment");
//   var isScrollLocked = true;

//   // Disable scroll by default
//   if (scrollY !== 0) {
//     document.body.style.overflow = "auto";
//     scrollDownButton.style.display = "none";
//     scrollLockButton.style.display = "none";
//   } else {
//     document.body.style.overflow = "hidden";
//     scrollDownButton.style.display = "none";
//   }
//   // initialize with black screen
//   document.body.style.backgroundColor = "black";
//   judgment.style.display = "none";

//   scrollLockButton.addEventListener("click", function () {
//     isScrollLocked = !isScrollLocked;

//     if (isScrollLocked) {
//       scrollDownButton.style.display = "none";
//       document.body.style.overflow = "hidden";
//       // Hide eyes with animation
//       leftEye.style.animation = "hideEyes 4s forwards";
//       rightEye.style.animation = "hideEyes 4s forwards";
//     } else {
//       judgment.style.display = "block";
//       scrollDownButton.style.display = "block";
//       scrollLockButton.style.display = "none";
//       document.body.style.overflow = "auto";
//       document.body.style.backgroundColor = "white";
//       leftEye.style.backgroundColor = "white";
//       rightEye.style.backgroundColor = "white";
//       // Show eyes with animation
//       leftEye.style.animation = "revealEyes 4s forwards";
//       rightEye.style.animation = "revealEyes 4s forwards";
//     }
//     window.addEventListener("scroll", function () {
//       if (window.scrollY > 0) {
//         scrollDownButton.style.display = "none";
//       } else {
//         scrollDownButton.style.display = "block";
//       }
//     });
//   });

//   // ...
// });
