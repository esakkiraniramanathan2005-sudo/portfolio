// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Zoom Modal for Skill Logos
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('zoomModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const closeBtn = document.querySelector('.close');
  const skillContainers = document.querySelectorAll('.skill-logo-container');

  skillContainers.forEach(container => {
    container.addEventListener('click', () => {
      const skillName = container.getAttribute('data-skill');
      const imgSrc = container.querySelector('img').src;
      modalImg.src = imgSrc;
      modalCaption.textContent = skillName;
      modal.style.display = 'block';
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };

  // ScrollReveal
  ScrollReveal().reveal('[data-reveal]', {
    duration: 700,
    distance: '25px',
    easing: 'ease-out',
    origin: 'bottom',
    interval: 100,
    reset: false
  });
});
// Add this inside DOMContentLoaded in main.js
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! (Form submission can be connected to backend)');
  this.reset();
});