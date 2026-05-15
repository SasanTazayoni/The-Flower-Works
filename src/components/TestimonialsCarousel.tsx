'use client';

import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    text: "Many thanks to Laura and Jackie for delivering the flower letter tributes for my late mother's funeral. The flowers were fresh, the colour contrast vivid and all perfectly arranged. Ordered at short notice as well. Highly recommended.",
    author: 'Alex',
  },
  {
    text: "Fantastic florist! The flowers were beautiful - always important! - and delivery was fast and flawless, but more than that, the staff is phenomenal. Helpful, patient, and knowledgeable. Offered lovely suggestions once she knew the occasion. Will be ordering again and highly recommend!",
    author: 'Jeannie',
  },
  {
    text: "I adore this florist! They have provided flowers for 3 funerals our family has sadly had over the last year and despite the difficulties of these events, the exquisite beauty and quality of the flowers they provided helped us smile even in tough times. Thank you xx",
    author: 'Louisa',
  },
  {
    text: "A big thank you for the fabulous flowers for mum's funeral yesterday. Everyone remarked how fresh and vibrant they looked and about the quantity of flowers each arrangement had. Wonderful service from lovely people who knew exactly what we needed. Thank you.",
    author: 'Eileen',
  },
];

const AUTO_ADVANCE_INTERVAL_MS = 16000;

export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoAdvanceRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function navigate(step: number) {
    setActiveIndex((current) => (current + step + testimonials.length) % testimonials.length);
  }

  function startAutoAdvance() {
    autoAdvanceRef.current = setInterval(() => navigate(1), AUTO_ADVANCE_INTERVAL_MS);
  }

  useEffect(() => {
    startAutoAdvance();
    return () => {
      if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    };
  }, []);

  function handleNavButton(step: number) {
    navigate(step);
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    startAutoAdvance();
  }

  function selectTab(index: number) {
    setActiveIndex(index);
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
    startAutoAdvance();
  }

  return (
    <div className="card testimonials__card" data-testimonials="" data-aos="flip-down">
      <div data-testimonials-content="" aria-live="polite">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="testimonials__content"
            data-index={index}
            {...(index === activeIndex ? { 'data-active': true } : {})}
          >
            <p>{testimonial.text}</p>
            <footer>
              <cite>{testimonial.author}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="testimonials__tabs" data-testimonials-tabs="" role="tablist" aria-label="Testimonials">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className="testimonials__tab"
            data-testimonials-tab=""
            data-index={index}
            role="tab"
            aria-label={`Testimonial ${index + 1}`}
            aria-selected={index === activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => selectTab(index)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectTab(index); } }}
            {...(index === activeIndex ? { 'data-active': true } : {})}
          />
        ))}
      </div>
      <button
        className="testimonials__button previous"
        aria-label="Previous testimonial"
        data-testimonials-button="previous"
        onClick={() => handleNavButton(-1)}
      >
        <i className="fa-regular fa-circle-left"></i>
      </button>
      <button
        className="testimonials__button next"
        aria-label="Next testimonial"
        data-testimonials-button="next"
        onClick={() => handleNavButton(1)}
      >
        <i className="fa-regular fa-circle-right"></i>
      </button>
    </div>
  );
}
