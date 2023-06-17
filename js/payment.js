let freeButton = document.querySelector(".free_button");
let standardButton = document.querySelector(".standard_button");
let premiumButton = document.querySelector(".premium_button");

function redirectOnClick(button, target) {
  button.addEventListener("click", function () {
    window.location.href = target;
  });
}
redirectOnClick(freeButton, "checkout0.html");
redirectOnClick(standardButton, "checkout6.html");
redirectOnClick(premiumButton, "checkout12.html");
