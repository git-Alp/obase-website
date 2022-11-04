let sticky = document.querySelector("[data-advertisement]");
let stickyClose = document.querySelector("[data-advertisement-close]");

document.addEventListener("DOMContentLoaded", function () {
  if (stickyClose) {
    stickyClose.addEventListener("click", function (e) {
      if (sticky) sticky.classList.add("-hide");
    });
  }
});