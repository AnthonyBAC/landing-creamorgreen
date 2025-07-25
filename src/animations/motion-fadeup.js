import { animate, inView } from 'motion';

export function initFadeUp() {
  const elements = document.querySelectorAll('.fade-up, .fadeup');

  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'none';
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
        margin: '0px 0px -100px 0px',
      },
    );
  });
}

export function initFadeUpWithDelays() {
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

    children.forEach(child => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
    });
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
              duration: 0.6,
              delay: index * 0.1,
              easing: 'ease-out',
            },
          );
        });
      },
      {
        margin: '0px 0px -200px 0px',
      },
    );
  });
}

export function initAllFadeUps() {
  initFadeUp();
  initFadeUpWithDelays();
  initStaggerFadeUp();
}

document.addEventListener('DOMContentLoaded', initAllFadeUps);
document.addEventListener('astro:page-load', initAllFadeUps);

window.initFadeUp = initFadeUp;
window.initAllFadeUps = initAllFadeUps;
