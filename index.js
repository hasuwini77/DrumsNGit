const darkButton = document.querySelector(".dark-button");

darkButton.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark-mode");

  let darkModeElem = document.querySelector(".dark-mode");
  if (darkModeElem) {
    darkButton.innerHTML = `
    <img class="light-icon" src="./img/mode.png" alt="light-mode-icon" />`;
  } else {
    darkButton.innerHTML = ` 
        <img class="dark-icon" src="./img/night-mode.png" alt="dark-mode-icon" /> `;
  }
});
