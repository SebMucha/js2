document
  .querySelector(".scrollToProduct")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let target = document.querySelector(".offers_section");
    let offsetTop = target.offsetTop;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  });

document
  .querySelector(".scrollToContact")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let target = document.querySelector(".footer");
    let offsetTop = target.offsetTop;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  });

let emailInput = document.querySelector(".follow_input");
let subscribeButton = document.querySelector(".follow_button");

emailInput.addEventListener("input", () => {
  let email_value = emailInput.value;

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email_value)) {
    emailInput.style.borderColor = "rgb(2, 86, 2)";
    subscribeButton.disabled = false;
  } else {
    emailInput.style.borderColor = "rgb(146, 2, 2)";
    subscribeButton.disabled = true;
  }
});
let screenWidth = window.innerWidth || document.documentElement.clientWidth;

if (screenWidth < 770) {
  let paragraphs = document.querySelectorAll(
    ".benefit1 p, .benefit2 p, .benefit3 p, .creative1 p, .creative2 p, .creative3 p"
  );

  for (let i = 0; i < paragraphs.length; i++) {
    let paragraph = paragraphs[i];
    paragraph.innerHTML = paragraph.innerHTML.replace("<br>", "");
  }
}
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

let heroSection = document.querySelector(".hero");
let yellowSection = document.querySelector(".yellow_section");
let offersSection = document.querySelector(".offers_section");
let creativesSection = document.querySelector(".creatives_section");
let leadersSection = document.querySelector(".leaders");
let clientsSection = document.querySelector(".clients");
let plplSection = document.querySelector(".plpl");
let productivitySection = document.querySelector(".productivity");

if (heroSection) {
  observer.observe(heroSection);
}
if (yellowSection) {
  observer.observe(yellowSection);
}
if (offersSection) {
  observer.observe(offersSection);
}
if (creativesSection) {
  observer.observe(creativesSection);
}
if (leadersSection) {
  observer.observe(leadersSection);
}
if (clientsSection) {
  observer.observe(clientsSection);
}
if (plplSection) {
  observer.observe(plplSection);
}
if (productivitySection) {
  observer.observe(productivitySection);
}

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("scrollToProduct") === "true") {
  let target = document.querySelector(".offers_section");
  let offsetTop = target.offsetTop;
  window.scrollTo({ top: offsetTop, behavior: "smooth" });
}

const urlParams2 = new URLSearchParams(window.location.search);

if (urlParams2.get("scrollToContact") === "true") {
  let target = document.querySelector(".footer");
  let offsetTop = target.offsetTop;
  window.scrollTo({ top: offsetTop, behavior: "smooth" });
}

function redirectOnClick(button, target) {
  button.addEventListener("click", function () {
    window.location.href = target;
  });
}

let headerButton = document.querySelector(".header_button");
let logoDiv = document.querySelector(".logo_div");
let heroButton = document.querySelector(".hero_button");
let plansButton = document.querySelector(".plans_button");
let pricingButton = document.querySelector(".pricing_button");
let productivityButton = document.querySelector(".productivity_button");
let header = document.querySelector(".header");

redirectOnClick(headerButton, "payment.html");
redirectOnClick(heroButton, "payment.html");
redirectOnClick(plansButton, "payment.html");
redirectOnClick(pricingButton, "payment.html");
redirectOnClick(productivityButton, "payment.html");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_list");

const pageElements = document.querySelectorAll(
  "body > *:not(.nav_list):not(.hamburger)"
);
let isHeaderButtonExpanded = false;
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  pageElements.forEach((element) => {
    if (element !== navMenu && element !== hamburger && element !== header) {
      element.style.display = element.style.display === "none" ? "" : "none";
    }
  });
  if (isHeaderButtonExpanded) {
    headerButton.style.top = "";
    headerButton.style.width = "";
    hamburger.style.position = "";
    hamburger.style.right = "";
    isHeaderButtonExpanded = false;
  } else {
    headerButton.style.top = "60vh";
    headerButton.style.width = "40vw";
    hamburger.style.position = "absolute";
    hamburger.style.right = "5%";
    isHeaderButtonExpanded = true;
  }
  // hamburger.style.position = "absolute";
  // hamburger.style.right = "5%";

  logoDiv.style.display = logoDiv.style.display === "none" ? "" : "none";

  if (
    header.style.background === "lightgray" &&
    header.style.height === "100vh"
  ) {
    header.style.background = "";
    header.style.height = "";
  } else {
    header.style.background = "lightgray";
    header.style.height = "100vh";
  }
});
document.querySelectorAll(".nav_link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
