import React from 'react';
import { StarIcon, QuoteIcon } from './icons';

const REVIEWS = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, Coffee House',
    text: 'Karagir gave our little cafe a soul. The branding felt handcrafted, not templated — every detail was thought through.',
  },
  {
    name: 'Priya Nair',
    role: 'Marketing Lead, JetSetGo',
    text: 'From concept to final poster, the team understood exactly the energy we wanted. Our campaign visuals have never looked better.',
  },
  {
    name: 'Devika Rao',
    role: 'Co-founder, Tretha',
    text: 'The packaging design elevated our product instantly. Customers keep telling us the bottles alone made them trust the brand.',
  },
];

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('');
}

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <p className="section-label">WHAT THEY SAY</p>
      <h2 className="reviews-heading">Loved By The Brands We Craft</h2>

      <div className="reviews-grid">
        {REVIEWS.map((review) => (
          <div className="review-card" key={review.name}>
            <QuoteIcon className="review-quote" />
            <div className="review-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="review-text">{review.text}</p>
            <div className="review-author">
              <span className="review-avatar">{initials(review.name)}</span>
              <span>
                <span className="review-name">{review.name}</span>
                <span className="review-role">{review.role}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
