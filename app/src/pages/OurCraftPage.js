import React from 'react';
import coffeeHouse from '../public/coffeHouse.jpg';
import jetSetGo from '../public/JetSetGo.png';
import tretha from '../public/Tretha.png';
import dnyanmandir from '../public/dnyanmandir.png';


const PROJECTS = [
  {
    title: 'Coffee House',
    description: 'A warm, aroma-rich website for a neighbourhood coffee shop.',
    image: coffeeHouse,

    live: 'https://coffee-house-saga.vercel.app/',
  },
  {
    title: 'Dnyanmandir Vidyalaya',
    description: 'We build custom coded proffesional school website.',
    image: dnyanmandir,
 
    live: 'https://www.dnyanmandirvidyalaya.com/',
  },
  {
    title: 'JetSetGo',
    description: 'Travel booking website to discover destinations and plan trips.',
    image: jetSetGo,
 
    live: 'https://jet-set-go-j2he-ten.vercel.app/',
  },
  {
    title: 'Tretha',
    description: 'E-Commerce website for selling skin care products.',
    image: tretha,

    live: 'https://tretha-bio.vercel.app/',
  },
];



export default function OurCraftPage() {
  return (
    <section className="our-craft-page">
   
      <h1 className="oc-heading">
        Our Craft
       
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
