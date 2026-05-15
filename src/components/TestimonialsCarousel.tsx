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

const INTERVAL_MS = 16000;

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function advance(offset: number) {
    setActive((prev) => (prev + offset + testimonials.length) % testimonials.length);
  }

  function startTimer() {
    intervalRef.current = setInterval(() => advance(1), INTERVAL_MS);
  }

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function handleButton(offset: number) {
    advance(offset);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startTimer();
  }

  return (
    <div className="card testimonials__card" data-testimonials="" data-aos="flip-down">
      <div data-testimonials-content="" aria-live="polite">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className="testimonials__content"
            data-index={i}
            {...(i === active ? { 'data-active': true } : {})}
          >
            <p>{t.text}</p>
            <footer>
              <cite>{t.author}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
      <div className="testimonials__tabs" data-testimonials-tabs="">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className="testimonials__tab"
            data-testimonials-tab=""
            data-index={i}
            role="tab"
            aria-label={`Testimonial ${i + 1}`}
            {...(i === active ? { 'data-active': true } : {})}
          />
        ))}
      </div>
      <button
        className="testimonials__button previous"
        aria-label="Previous testimonial"
        data-testimonials-button="previous"
        onClick={() => handleButton(-1)}
      >
        <i className="fa-regular fa-circle-left"></i>
      </button>
      <button
        className="testimonials__button next"
        aria-label="Next testimonial"
        data-testimonials-button="next"
        onClick={() => handleButton(1)}
      >
        <i className="fa-regular fa-circle-right"></i>
      </button>
    </div>
  );
}
