// Scroll efekat za navbar
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Animacija hero teksta i fade pri skrolovanju
const heroText = document.getElementById("heroText");
const fade = document.getElementById("fade");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 10) {
    heroText.classList.add("visible");
    fade.classList.add("visible");
  } else {
    heroText.classList.remove("visible");
    fade.classList.remove("visible");
  }
});

// Hamburger meni
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".overlay a");

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});
