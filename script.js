// Scroll efekat na navbar - menjanje transparentnosti
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hero animacije fade i translate
const heroImage = document.getElementById('heroImage');
const heroText = document.getElementById('heroText');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const fadeThreshold = 300;

  let opacity = Math.min(scrollY / fadeThreshold, 1);
  heroImage.style.opacity = 1 - opacity;
  heroImage.style.transform = `translateY(-${opacity * 40}px) scale(${1 - opacity * 0.1})`;

  if (scrollY > 40) {
    heroText.classList.add('visible');
  } else {
    heroText.classList.remove('visible');
  }
});

// Hamburger meni
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
  // onemogući/omogući scroll
  if (overlay.classList.contains('active')) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});

// Klik na link u meniju zatvara overlay i meni
document.querySelectorAll('.overlay-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
