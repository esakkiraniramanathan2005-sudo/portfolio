document.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.getElementById('home');
  if (!homeSection) return;

  const nameEl = document.querySelector('.name');
  const professionEl = document.querySelector('.profession');
  const introEl = document.querySelector('.intro');
  const ctaBtn = document.querySelector('.cta-button');
  const profileImg = document.querySelector('.profile-img');

  if (!nameEl) return;

  gsap.set([nameEl, professionEl, introEl, ctaBtn, profileImg], { opacity: 0 });

  gsap.timeline({ defaults: { duration: 0.9, ease: 'power3.out' } })
    .fromTo(nameEl, { y: 40 }, { opacity: 1, y: 0 })
    .fromTo(professionEl, { y: 30 }, { opacity: 1, y: 0 }, '<0.2')
    .fromTo(introEl, { y: 30 }, { opacity: 1, y: 0 }, '<0.2')
    .fromTo(ctaBtn, { y: 20 }, { opacity: 1, y: 0 }, '<0.2')
    .fromTo(profileImg, { scale: 0.8, rotation: -8 }, { 
      opacity: 1, 
      scale: 1, 
      rotation: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
    }, '<0.3');
});