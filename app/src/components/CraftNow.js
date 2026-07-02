import React from 'react';
import { ArrowIcon } from './icons';

export default function CraftNow() {
  return (
    <section className="craft-now" id="start">
      <h2>LETS CRAFT NOW</h2>
      <p>Ready to makes Dreams comes true??</p>
      <a className="start-btn" href="#start">
        <span>START NOW</span>
        <ArrowIcon />
      </a>
    </section>
  );
}
