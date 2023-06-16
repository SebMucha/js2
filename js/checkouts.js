const logButtons = document.querySelectorAll(".log");

logButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "log_in.html";
  });
});

const signButtons = document.querySelectorAll(".sign");

signButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "sign_up.html";
  });
});
