import React from 'react';
import logo from '../public/logo.png';
import { WhatsAppIcon, InstagramIcon } from './icons';

const WHATSAPP_NUMBER = '8928877124';
const INSTAGRAM_HANDLE = 'karagir.designs';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col footer-brand">
          <span className="footer-logo">
            <img src={logo} alt="Karagir logo" />
          </span>
          <span className="footer-brand-name">KARAGIR</span>
          <p>Souling your dream, one craft at a time.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <a href="#crafts">Our Crafts</a>
          <a href="#diciplines">Diciplines</a>
          <a href="#reviews">Reviews</a>
          <a href="#start">Lets Craft Now</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:hello@karagir.design">hello@karagir.design</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
            +{WHATSAPP_NUMBER}
          </a>
        </div>

        <div className="footer-col">
          <h4>Follow</h4>
          <div className="footer-social">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer-social-btn"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-btn"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">&copy; {new Date().getFullYear()} Karagir. All rights reserved.</p>
      </div>
    </footer>
  );
}
