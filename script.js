// script.js
document.addEventListener('DOMContentLoaded', () => {
  // ===== Hamburger Menu =====
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // ===== Hero Slideshow =====
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero img');

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 4000);
  }

  // ===== Courses Slider Arrows =====
  const slider = document.querySelector('.courses-slider');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  if (slider && leftArrow && rightArrow) {
    leftArrow.addEventListener('click', () => {
      slider.scrollBy({ left: -270, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
      slider.scrollBy({ left: 270, behavior: 'smooth' });
    });
  }

  // ===== Fade-in Animation on Scroll =====
  const sections = document.querySelectorAll('section');

  function checkSectionVisibility() {
    const triggerBottom = window.innerHeight / 1.2;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkSectionVisibility);
  window.addEventListener('load', checkSectionVisibility);
});
