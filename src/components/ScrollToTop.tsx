'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    const scrollToTop = document.querySelector<HTMLElement>('.scroll-up-link');
    const navbar = document.querySelector<HTMLElement>('[data-navbar]');
    if (!scrollToTop || !navbar) return;

    const handleScroll = () => {
      const navHeight = navbar.getBoundingClientRect().height;
      if (window.scrollY > navHeight * 2) {
        scrollToTop.classList.add('show-link');
      } else {
        scrollToTop.classList.remove('show-link');
      }
      scrollToTop.blur();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a href="#" className="scroll-up-link" aria-label="Scroll to top">
      <i className="fa-solid fa-angles-up"></i>
    </a>
  );
}
