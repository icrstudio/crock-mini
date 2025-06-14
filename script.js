// Scroll efekat za navbar
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Animacija hero teksta pri skrolovanju
const heroText = document.getElementById("heroText");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(-50%) translateY(-20px)";
  }
});

// Hamburger meni
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const menuLinks = document.querySelectorAll(".overlay a");

hamburger.addEventListener("click", () => {
  overlay.classList.toggle("active");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
});
