import React from 'react';

const CAPABILITIES = [
  {
    title: 'Design',
    desc: 'Visual identity, art direction and brand systems built from scratch.',
  
  },
  {
    title: 'Product Design',
    desc: 'Interfaces and product experiences, from wireframe to polished UI.',
   
  },
  {
    title: 'Packaging',
    desc: 'Shelf-ready packaging that carries the brand into the real world.',
  
  },
  {
    title: 'Presentation Design',
    desc: 'Decks that keep an audience awake — pitch, sales and keynote.',
  },
  {
    title: 'Collateral Design',
    desc: 'Brochures, stationery and print pieces that stay on-brand.',
  
  },
  {
    title: 'Web Design',
    desc: 'Responsive websites designed to convert, not just to look good.',

  },
  {
    title: 'Book Cover',
    desc: 'Covers that sell the story before the first page is turned.',
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities" aria-labelledby="cap-heading">
      <p className="cap-eyebrow" id="cap-heading">
        Diciplines
        <span className="cap-count">{String(CAPABILITIES.length).padStart(2, '0')} services</span>
      </p>

      <ul className="cap-list">
        {CAPABILITIES.map((item) => (
          <li className="cap-item" key={item.title}>
            <span className="cap-row" >
              <span className="cap-title">{item.title}</span>
              <span className="cap-desc">{item.desc}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
