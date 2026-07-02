import React from 'react';
import bg from '../public/bg.png';

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-bg" src={bg} alt="" aria-hidden="true" />
      <h1 className="hero-heading">
        <span className="hero-line">SOULING</span>
        <span className="hero-line">YOUR DREAM</span>
        <span className="hero-line">
          BY <span className="hero-accent">KARAGIR</span>
        </span>
      </h1>
    </section>
  );
}
