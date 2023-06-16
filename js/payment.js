// let observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("in-view");
//       }
//     });
//   },
//   {
//     threshold: 0.3,
//   }
// );

// function goToProducts() {
//   window.location.href = "index.html";
//   window.onload = function () {
//     let target = document.querySelector(".offers_section");
//     let offsetTop = target.offsetTop;
//     window.scrollTo({ top: offsetTop, behavior: "smooth" });
//   };
// }

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
