import React, { useEffect, useRef, useState } from 'react';
import coffeeHouse from '../public/coffeHouse.jpg';
import jetSetGo from '../public/JetSetGo.png';
import tretha from '../public/Tretha.png';
import { ArrowIcon } from './icons';

// Coffee House banner is shown immediately once the section locks;
// only the two grid cards reveal progressively as scrolling continues.
const STEPS = 2;

// Total wheel/touch distance (px) needed to go from no cards revealed to
// every card revealed while the section is locked in place.
const LOCK_DISTANCE = 900;

// How quickly the rendered progress eases toward the target each frame
// (0-1, higher = snappier). Smooths out chunky mouse-wheel ticks.
const EASE = 0.14;

function normalizeWheelDelta(e) {
  if (e.deltaMode === 1) return e.deltaY * 16; // line mode
  if (e.deltaMode === 2) return e.deltaY * window.innerHeight; // page mode
  return e.deltaY;
}

export default function OurCrafts() {
  const pinRef = useRef(null);
  const targetProgressRef = useRef(0);
  const displayedProgressRef = useRef(0);
  const lockedRef = useRef(false);
  const touchYRef = useRef(0);
  const rafRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function isDesktop() {
      return window.matchMedia('(min-width: 721px)').matches;
    }

    function getNavHeight() {
      const nav = document.querySelector('.navbar');
      return nav ? nav.getBoundingClientRect().height : 0;
    }

    function tick() {
      rafRef.current = null;
      const target = targetProgressRef.current;
      const current = displayedProgressRef.current;
      const diff = target - current;
      if (Math.abs(diff) < 0.0015) {
        displayedProgressRef.current = target;
        setProgress(target);
        return;
      }
      const next = current + diff * EASE;
      displayedProgressRef.current = next;
      setProgress(next);
      rafRef.current = requestAnimationFrame(tick);
    }

    function startLoop() {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    }

    // Consumes a scroll delta: while the section sits at the top of the
    // viewport and reveal isn't finished, it freezes real page scrolling
    // (preventDefault) and drives progress from the gesture instead.
    // Only scrolling down is ever locked; scrolling up always passes
    // through untouched.
    // Returns true if the delta was captured by the lock.
    function handleDelta(delta, e) {
      const el = pinRef.current;
      if (!el || !isDesktop() || delta <= 0) return false;

      if (targetProgressRef.current >= 1) return false;

      if (!lockedRef.current) {
        const rect = el.getBoundingClientRect();
        const navH = getNavHeight();
        const inSection = rect.top <= navH + 1 && rect.bottom > navH;
        if (!inSection) return false;

        const overshoot = rect.top - navH;
        if (overshoot !== 0) window.scrollBy(0, overshoot);
      }

      lockedRef.current = true;
      e.preventDefault();

      const next = Math.min(1, targetProgressRef.current + delta / LOCK_DISTANCE);
      targetProgressRef.current = next;
      if (next >= 1) lockedRef.current = false;
      startLoop();
      return true;
    }

    function onWheel(e) {
      if (e.ctrlKey) return; // don't hijack pinch-zoom
      handleDelta(normalizeWheelDelta(e), e);
    }

    function onTouchStart(e) {
      touchYRef.current = e.touches[0].clientY;
    }

    function onTouchMove(e) {
      const y = e.touches[0].clientY;
      const delta = touchYRef.current - y;
      touchYRef.current = y;
      handleDelta(delta, e);
    }

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const stepProgress = (index) => Math.min(1, Math.max(0, progress * STEPS - index));

  return (
    <section className="our-crafts-pin" ref={pinRef} id="crafts">
      <div className="our-crafts-sticky">
        <p className="section-label">OUR CRAFTS</p>

        <div className="craft-banner">
          <img src={coffeeHouse} alt="Coffee House storefront" />
          <span className="craft-badge-script">Coffee House</span>
          <a className="visit-btn visit-btn--ghost" href="https://coffee-house-saga.vercel.app/">
            <span>VISIT NOW</span>
            <ArrowIcon />
          </a>
        </div>

        <div className="craft-grid">
          <div className="craft-card" style={{ '--progress': stepProgress(0) }}>
            <img src={jetSetGo} alt="JetSetGo travel poster" />
            <a className="visit-btn" href="https://jet-set-go-j2he-ten.vercel.app/">
              <span>VISIT NOW</span>
              <ArrowIcon />
            </a>
          </div>
          <div className="craft-card" style={{ '--progress': stepProgress(1) }}>
            <img src={tretha} alt="Tretha product packaging" />
            <a className="visit-btn" href="https://tretha-bio.vercel.app/">
              <span>VISIT NOW</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
