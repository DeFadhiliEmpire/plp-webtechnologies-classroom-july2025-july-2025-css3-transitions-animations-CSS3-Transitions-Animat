// script.js

// Demonstrating global and local scope
let box = document.getElementById("animatedBox"); // global variable

// Function with parameters and return value
function triggerAnimation(element, animationClass) {
  // Local scope variable
  let isAnimating = element.classList.contains(animationClass);

  if (!isAnimating) {
    element.classList.add(animationClass);
    console.log("Animation started!");
    return true; // return value shows success
  } else {
    console.log("Animation already running.");
    return false;
  }
}

// Function to remove the animation after it ends
function removeAnimation(element, animationClass) {
  element.addEventListener("animationend", () => {
    element.classList.remove(animationClass);
    console.log("Animation ended and class removed.");
  });
}

// Event listener to trigger animation on button click
document.getElementById("animateBtn").addEventListener("click", function () {
  let result = triggerAnimation(box, "bounce"); // calling function with parameters
  if (result) {
    removeAnimation(box, "bounce");
  }
});
