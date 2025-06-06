import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

function AnimationSetup() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section > div > div:first-child');
    sections.forEach(section => {
      section.classList.add('animate-on-scroll');
      observer.observe(section);
    });

    const cards = document.querySelectorAll('.grid > div');
    cards.forEach((card, index) => {
      card.classList.add('animate-on-scroll');
      observer.observe(card);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AnimationSetup />
  </StrictMode>
);