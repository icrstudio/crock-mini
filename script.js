window.addEventListener("load", () => {
    const navbar = document.getElementById("navbar");
    const heroText = document.getElementById("heroText");
    const heroImage = document.getElementById("heroImage");
    const fadeWhite = document.querySelector(".fade-white");
  
    let latestScrollY = 0;
    let ticking = false;
  
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
  