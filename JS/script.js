const hamburgerNavButton = document.querySelector(".hamburger-nav-button");
const navButtonLines = document.querySelectorAll(".nav-button-line");
const navBar = document.querySelector(".nav-bar");

hamburgerNavButton.addEventListener("click", () => {
    hamburgerNavButton.classList.toggle("active");
    navBar.classList.toggle("active");
})