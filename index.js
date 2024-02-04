const darkButton = document.querySelector(".dark-button");

darkButton.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");
});
