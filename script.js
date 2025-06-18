// Scroll efekat na navbar - menjanje transparentnosti
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    const hamburger = document.querySelector(".hamburger");
    const overlay = document.querySelector(".overlay");

    if (
      !hamburger.classList.contains("active") &&
      !overlay.classList.contains("active")
    ) {
      navbar.classList.remove("scrolled");
    }
  }
});

// Hero animacije fade i translate
const heroImage = document.getElementById("heroImage");
const heroText = document.getElementById("heroText");
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const fadeThreshold = 300;

  let opacity = Math.min(scrollY / fadeThreshold, 1);
  heroImage.style.opacity = 1 - opacity;
  heroImage.style.transform = `translateY(-${opacity * 40}px) scale(${1 - opacity * 0.1})`;

  if (scrollY > 40) {
    heroText.classList.add("visible");
  } else {
    heroText.classList.remove("visible");
  }
});

// Logo vidljivost u zavisnosti od hero-teksta
const logoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        logo.classList.remove("visible");
      } else {
        logo.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

logoObserver.observe(heroText);

// Hamburger meni
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Klik na link u overlay meniju
document.querySelectorAll(".overlay-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

// IntersectionObserver za .glass-card animacije
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

 const container = document.querySelector('.news-slides-container');
const slides = document.querySelectorAll('.news-slide');
const prevBtn = document.querySelector('.news-nav.prev');
const nextBtn = document.querySelector('.news-nav.next');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;

  // Izračunaj širinu slajda uključujući margine
  const slideWidth = slides[0].offsetWidth + 30; // 30px jer imaš margin: 0 15px
  const offset = -slideWidth * index;
  container.style.transform = `translateX(${offset}px)`;

  // Sakrij sve osim aktivnog slajda
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
    slide.style.pointerEvents = i === index ? "auto" : "none";
    slide.style.transition = "opacity 0.5s ease";
  });
}

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
  resetAutoSlide();
});

showSlide(0);

let autoSlide = setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
}

window.addEventListener('resize', () => {
  showSlide(currentIndex);
});
