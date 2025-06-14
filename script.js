window.addEventListener("load", () => {
    const navbar = document.getElementById("navbar");
    const heroText = document.getElementById("heroText");
    const heroImage = document.getElementById("heroImage");
    const fadeWhite = document.querySelector(".fade-white");
  
    let latestScrollY = 0;
    let ticking = false;
  
    const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.style.display = menu.classList.contains("active") ? "block" : "none";
  document.body.classList.toggle("menu-open");
});

// Klik na overlay zatvara meni
overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.style.display = "none";
  document.body.classList.remove("menu-open");
});    
    function onScroll() {
      latestScrollY = window.scrollY;
      requestTick();
    }
  
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }
  
    function update() {
      if (latestScrollY > 80) {
        navbar.classList.add("scrolled");
        heroText.classList.add("visible");
        heroImage.style.transform = `translateY(${latestScrollY * 0.2}px)`;
  
        // Fade white layer opacity do max 1 kad skroluješ 0-400px
        fadeWhite.style.opacity = Math.min(latestScrollY / 400, 1);
      } else {
        navbar.classList.remove("scrolled");
        heroText.classList.remove("visible");
        heroImage.style.transform = "translateY(0)";
        fadeWhite.style.opacity = 0;
      }
      ticking = false;
    }
  
    window.addEventListener("scroll", onScroll);
  
    // Hamburger meni (ako koristiš)
    document.getElementById("hamburger").addEventListener("click", () => {
      document.getElementById("menu").classList.toggle("active");
    });
  });
  
