import React, { useEffect, useRef, useState } from 'react';

// How far (as a fraction of viewport height) the section needs to scroll
// into view before the black overlay has fully wiped away.
const REVEAL_SPAN = 0.6;

export default function WhyAreWe() {
  const sectionRef = useRef(null);
  const [reveal, setReveal] = useState(0);

  useEffect(() => {
    let rafId = null;

    function update() {
      rafId = null;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const raw = 1 - rect.top / (window.innerHeight * REVEAL_SPAN);
      setReveal(Math.min(1, Math.max(0, raw)));
    }

    function onScroll() {
      if (rafId == null) rafId = requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="why-are-we" ref={sectionRef}>
      <p className="section-label">WHY ARE WE</p>
      <h2 className="why-heading">
        CRAFTMENS DESIGNS SOUL IN
        <br />
        YOUR DREAMS
      </h2>
      <div className="why-are-we-overlay" style={{ '--reveal': reveal }} />
    </section>
  );
}
