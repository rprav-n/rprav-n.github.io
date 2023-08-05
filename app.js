const burgers = document.getElementsByClassName("burger");
const navLinks = document.querySelector(".nav-links");
const lightDarkBtn = document.querySelector(".light-dark-btn");
const themeIcon = document.querySelector(".light-dark-btn i");
const mainBurger = document.querySelector(".main-burger");

for (var i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
    });
}