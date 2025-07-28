// src/scripts/aos.js
import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 150,
    disable: false,
  });

  // Configurar hover DESPUÉS de que AOS termine
  setTimeout(() => {
    const cards = document.querySelectorAll('.animation-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0px 15px 35px 0px rgba(0, 0, 0, 0.1)';
        card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px)';
        card.style.boxShadow = '2px 2px 8px 0px rgba(0, 0, 0, 0.08)';
        card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
      });
    });
  }, 1200);
});

document.addEventListener('astro:page-load', () => {
  AOS.refresh();
});
