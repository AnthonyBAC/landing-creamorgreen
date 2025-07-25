import { animate, inView } from 'motion';

// Función para fadeup con opacidad al 50%
export function initFadeUpHalf() {
  const elements = document.querySelectorAll('.fade-up-half, .fadeup-half');

  elements.forEach(element => {
    // Establecer estado inicial
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'none';

    inView(
      element,
      () => {
        // Animar a 50% de opacidad
        animate(
          element,
          {
            opacity: 0.5,
            transform: 'translateY(0px)',
          },
          {
            duration: 0.6,
            easing: 'ease-out',
          },
        );
      },
      {
        margin: '0px 0px -100px 0px',
      },
    );
  });
}

// Agregar a tu función principal
export function initAllFadeUps() {
  initFadeUp();
  initFadeUpWithDelays();
  initStaggerFadeUp();
  initFadeUpHalf(); // Agregar esta línea
}

// Event listeners
document.addEventListener('DOMContentLoaded', initAllFadeUps);
document.addEventListener('astro:page-load', initAllFadeUps);
