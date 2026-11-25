import React from 'react';
import coffeeHouse from '../public/coffeHouse.jpg';
import jetSetGo from '../public/JetSetGo.png';
import tretha from '../public/Tretha.png';

// Add a new object here to show another project on the Our Craft page.
// `github` is optional — leave it out and only the live link is shown.
const PROJECTS = [
  {
    title: 'Coffee House',
    description: 'A warm, aroma-rich website for a neighbourhood coffee shop.',
    image: coffeeHouse,
    tags: ['React', 'CSS3', 'Tailwind'],
    live: 'https://coffee-house-saga.vercel.app/',
  },
  {
    title: 'JetSetGo',
    description: 'Travel booking website to discover destinations and plan trips.',
    image: jetSetGo,
    tags: ['React', 'Travel', 'UI/UX'],
    live: 'https://jet-set-go-j2he-ten.vercel.app/',
  },
  {
    title: 'Tretha',
    description: 'E-Commerce website for selling skin care products.',
    image: tretha,
    tags: ['E-Commerce', 'React', 'Branding'],
    live: 'https://tretha-bio.vercel.app/',
  },
];

function Squiggle() {
  return (
    <svg className="oc-squiggle" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2 9 C 30 2, 55 2, 80 7 S 135 13, 160 7 S 205 3, 218 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function OurCraftPage() {
  return (
    <section className="our-craft-page">
      <a className="oc-back" href="#/">
        &larr; Back to home
      </a>
      <h1 className="oc-heading">
        Our Craft
        <Squiggle />
      </h1>

      <div className="oc-grid">
        {PROJECTS.map((p) => (
          <article className="oc-card" key={p.title}>
            <a className="oc-thumb" href={p.live} target="_blank" rel="noopener noreferrer">
              <img src={p.image} alt={`${p.title} preview`} />
            </a>
            <div className="oc-body">
              <h2 className="oc-title">{p.title}</h2>
              <p className="oc-desc">{p.description}</p>
              <ul className="oc-tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="oc-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    GitHub &#8599;
                  </a>
                )}
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  Live demo &#8599;
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
