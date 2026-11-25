import React from 'react';
import { ArrowIcon } from './icons';

const BOOKING_URL = 'https://cal.com/deven70/30min?overlayCalendar=true';

export default function CraftNow() {
  return (
    <section className="craft-now" id="start">
      <h2>LETS CRAFT NOW</h2>
      <p>Ready to makes Dreams comes true??</p>
      <a
        className="start-btn"
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>START NOW</span>
        <ArrowIcon />
      </a>
    </section>
  );
}
