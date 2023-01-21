const htmlElement = document.querySelector("html");
const toggleButton = document.getElementById("toggle");
const toggleButtonSm = document.getElementById("toggle-sm");


const toggleDarkMode = () => {
  htmlElement.classList.contains("dark") ?
    htmlElement.classList.remove("dark") :
    htmlElement.classList.add("dark")
}


toggleButton.addEventListener("click", () => toggleDarkMode());

toggleButtonSm.addEventListener("click", () => toggleDarkMode())

