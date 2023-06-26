document.addEventListener("DOMContentLoaded", function () {
  var eyeContainer = document.getElementById("eye-container");
  var leftEye = document.getElementById("left-eye");
  var rightEye = document.getElementById("right-eye");
  var leftPupil = leftEye.querySelector(".pupil");
  var rightPupil = rightEye.querySelector(".pupil");
  var face = document.getElementById("face");
  // initialize with black screen
  leftEye.style.backgroundColor = "black";
  rightEye.style.backgroundColor = "black";

  var eyeMultiplier = 0.09; // Adjust this value for eye movement
  var pupilMultiplier = 0.08; // Adjust this value for pupil movement
  var judgment = document.getElementById("judgment");
  var judge = true;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function updateEyePositions() {
    var faceRect = face.getBoundingClientRect();
    var faceCenterX = faceRect.left + faceRect.width / 2;
    var faceCenterY = faceRect.top + faceRect.height / 2;

    var containerRect = eyeContainer.getBoundingClientRect();
    var containerCenterX = containerRect.left + containerRect.width / 2;
    var containerCenterY = containerRect.top + containerRect.height / 2;

    var maxEyeDistance = Math.min(
      containerRect.width / 4,
      containerRect.height / 4
    );
    var maxPupilDistance = maxEyeDistance * pupilMultiplier;

    var dx = containerCenterX - faceCenterX;
    var dy = containerCenterY - faceCenterY;

    var eyeTranslationX = dx * eyeMultiplier;
    var eyeTranslationY = dy * eyeMultiplier;

    var pupilTranslationX = (dx / containerRect.width) * maxPupilDistance;
    var pupilTranslationY = (dy / containerRect.height) * maxPupilDistance;

    var maxEyeTranslationX = maxEyeDistance * eyeMultiplier;
    var maxEyeTranslationY = maxEyeDistance * eyeMultiplier;
    var maxPupilTranslationX =
      (leftEye.offsetWidth - leftPupil.offsetWidth) / 2;
    var maxPupilTranslationY =
      (leftEye.offsetHeight - leftPupil.offsetHeight) / 2;

    eyeTranslationX = Math.max(
      -maxEyeTranslationX,
      Math.min(maxEyeTranslationX, eyeTranslationX)
    );
    eyeTranslationY = Math.max(
      -maxEyeTranslationY,
      Math.min(maxEyeTranslationY, eyeTranslationY)
    );

    pupilTranslationX = Math.max(
      -maxPupilTranslationX,
      Math.min(maxPupilTranslationX, pupilTranslationX)
    );
    pupilTranslationY = Math.max(
      -maxPupilTranslationY,
      Math.min(maxPupilTranslationY, pupilTranslationY)
    );
    var easedEyeTranslationX =
      eyeTranslationX *
      easeOutCubic(Math.abs(eyeTranslationY) / maxEyeTranslationY);
    var easedEyeTranslationY =
      eyeTranslationY *
      easeOutCubic(Math.abs(eyeTranslationY) / maxEyeTranslationY);
    var easedPupilTranslationX =
      pupilTranslationX *
      easeOutCubic(Math.abs(eyeTranslationY) / maxEyeTranslationY);
    var easedPupilTranslationY =
      pupilTranslationY *
      easeOutCubic(Math.abs(eyeTranslationY) / maxEyeTranslationY);

    var eyeTransform = `translate(${easedEyeTranslationX}px, ${easedEyeTranslationY}px)`;
    var pupilTransform = `translate(${easedPupilTranslationX}px, ${easedPupilTranslationY}px)`;

    var eyeTransform = `translate(${eyeTranslationX}px, ${eyeTranslationY}px)`;
    var pupilTransform = `translate(${pupilTranslationX}px, ${pupilTranslationY}px)`;

    leftEye.style.transform = eyeTransform;
    rightEye.style.transform = eyeTransform;

    leftPupil.style.transform = pupilTransform;
    rightPupil.style.transform = pupilTransform;

    // Center the eyes within the face
    var eyeContainerRect = eyeContainer.getBoundingClientRect();
    var faceWidth = faceRect.width;
    var faceHeight = faceRect.height;
    var eyeContainerWidth = eyeContainerRect.width;

    var offsetLeft = (faceWidth - eyeContainerWidth) / 2;
    eyeContainer.style.left = offsetLeft + "px";
  }

  function handleFaceVisibility() {
    if (judge) {
      leftEye.style.display = "none";
      leftPupil.style.display = "none";
      rightEye.style.display = "none";
      rightPupil.style.display = "none";
      face.style.display = "none";
    } else {
      leftEye.style.display = "block";
      leftPupil.style.display = "block";
      rightEye.style.display = "block";
      rightPupil.style.display = "block";
      face.style.display = "block";

      // Call updateEyePositions to center the eyes within the face
      setTimeout(updateEyePositions, 0);
    }
  }
  function toggleJudgment() {
    judge = !judge;
    handleFaceVisibility();
    if (judge) {
      leftEye.style.animation = "hideEyes 2s forwards";
      rightEye.style.animation = "hideEyes 2s forwards";
    } else {
      // Show eyes with animation
      leftEye.style.animation = "revealEyes 2s backwards";
      rightEye.style.animation = "revealEyes 2s backwards";
    }
  }

  judgment.addEventListener("click", toggleJudgment);

  window.addEventListener("resize", function () {
    updateEyePositions();
  });

  document.addEventListener("mousemove", function (event) {
    var containerRect = eyeContainer.getBoundingClientRect();
    var containerCenterX = containerRect.left + containerRect.width / 2;
    var containerCenterY = containerRect.top + containerRect.height / 2;

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var dx = mouseX - containerCenterX;
    var dy = mouseY - containerCenterY;

    var maxEyeDistance = Math.min(
      containerRect.width / 4,
      containerRect.height / 4
    );
    var maxPupilDistance = maxEyeDistance * pupilMultiplier;

    var eyeTranslationX = dx * eyeMultiplier;
    var eyeTranslationY = dy * eyeMultiplier;

    var pupilTranslationX = (dx / containerRect.width) * maxPupilDistance;
    var pupilTranslationY = (dy / containerRect.height) * maxPupilDistance;

    var maxEyeTranslationX = maxEyeDistance * eyeMultiplier;
    var maxEyeTranslationY = maxEyeDistance * eyeMultiplier;
    var maxPupilTranslationX =
      (leftEye.offsetWidth - leftPupil.offsetWidth) / 2;
    var maxPupilTranslationY =
      (leftEye.offsetHeight - leftPupil.offsetHeight) / 2;

    eyeTranslationX = Math.max(
      -maxEyeTranslationX,
      Math.min(maxEyeTranslationX, eyeTranslationX)
    );
    eyeTranslationY = Math.max(
      -maxEyeTranslationY,
      Math.min(maxEyeTranslationY, eyeTranslationY)
    );

    pupilTranslationX = Math.max(
      -maxPupilTranslationX,
      Math.min(maxPupilTranslationX, pupilTranslationX)
    );
    pupilTranslationY = Math.max(
      -maxPupilTranslationY,
      Math.min(maxPupilTranslationY, pupilTranslationY)
    );

    var eyeTransform = `translate(${eyeTranslationX}px, ${eyeTranslationY}px)`;
    var pupilTransform = `translate(${pupilTranslationX}px, ${pupilTranslationY}px)`;

    leftEye.style.transform = eyeTransform;
    rightEye.style.transform = eyeTransform;

    leftPupil.style.transform = pupilTransform;
    rightPupil.style.transform = pupilTransform;
  });

  handleFaceVisibility();
  updateEyePositions();
});
