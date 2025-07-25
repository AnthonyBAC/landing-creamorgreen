// src/scripts/motion-fadeup-fixed.js
// Motion One Fade Up - VERSIÓN CORREGIDA

import { animate, inView } from 'motion';

// Función súper simple que funciona garantizado
export function initFadeUp() {
  // Buscar todos los elementos fade-up
  const elements = document.querySelectorAll('.fade-up, .fadeup');

  elements.forEach(element => {
    // Configurar estado inicial con CSS en lugar de Motion One
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'none'; // Evitar conflictos

    // Observar con inView
    inView(
      element,
      () => {
        // Animar cuando sea visible
        animate(
          element,
          {
            opacity: 1,
            transform: 'translateY(0px)',
          },
          {
            duration: 0.6,
            easing: 'ease-out',
          },
        );
      },
      {
        margin: '0px 0px -100px 0px', // Se activa cuando está a 100px de ser visible
      },
    );
  });
}

// Función para elementos con delay
export function initFadeUpWithDelays() {
  // Fade up con diferentes delays
  const delayClasses = [
    { selector: '.fade-up-delay-1', delay: 0.1 },
    { selector: '.fade-up-delay-2', delay: 0.2 },
    { selector: '.fade-up-delay-3', delay: 0.3 },
    { selector: '.fade-up-delay-4', delay: 0.4 },
    { selector: '.fade-up-delay-5', delay: 0.5 },
  ];

  delayClasses.forEach(({ selector, delay }) => {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';

      inView(
        element,
        () => {
          animate(
            element,
            {
              opacity: 1,
              transform: 'translateY(0px)',
            },
            {
              duration: 0.6,
              delay: delay,
              easing: 'ease-out',
            },
          );
        },
        {
          margin: '0px 0px -100px 0px',
        },
      );
    });
  });
}

// Función para stagger
export function initStaggerFadeUp() {
  const containers = document.querySelectorAll('.stagger-fadeup');

  containers.forEach(container => {
    const children = Array.from(container.children);

    // Configurar estado inicial para hijos
    children.forEach(child => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
    });

    // Observar el contenedor
    inView(
      container,
      () => {
        children.forEach((child, index) => {
          animate(
            child,
            {
              opacity: 1,
              transform: 'translateY(0px)',
            },
            {
              duration: 0.5,
              delay: index * 0.1,
              easing: 'ease-out',
            },
          );
        });
      },
      {
        margin: '0px 0px -50px 0px',
      },
    );
  });
}

// Función todo-en-uno que funciona
export function initAllFadeUps() {
  initFadeUp();
  initFadeUpWithDelays();
  initStaggerFadeUp();
}

// Auto-inicializar
document.addEventListener('DOMContentLoaded', initAllFadeUps);
document.addEventListener('astro:page-load', initAllFadeUps);

// También exportar para uso manual
window.initFadeUp = initFadeUp;
window.initAllFadeUps = initAllFadeUps;
