document.addEventListener("DOMContentLoaded", () => {
  const heroH1 = document.querySelector(".hero h1");
  const heroP = document.querySelector(".hero p");
  const nav = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      heroH1.classList.add("visible");
      heroP.classList.add("visible");
      nav.classList.add("scrolled");
    } else {
      heroH1.classList.remove("visible");
      heroP.classList.remove("visible");
      nav.classList.remove("scrolled");
    }
  });

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
