import React, { useEffect, useRef, useState } from 'react';
import logo from '../public/logo.png';
import { WhatsAppIcon, InstagramIcon } from './icons';

const WHATSAPP_NUMBER = '8928877124';
const INSTAGRAM_HANDLE = 'karagir.designs';

const TITLE_SWAP_MS = 1500;

const NAV_LINKS = [
  { label: 'Our Crafts', href: '#crafts' },
  { label: 'Diciplines', href: '#deciplines' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Lets Craft Now', href: '#start' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setLang((prev) => (prev === 'en' ? 'mr' : 'en'));
    }, TITLE_SWAP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-brand">
     
        <span className="navbar-title">
          <span className={`navbar-title-text${lang === 'en' ? ' is-visible' : ''}`}>
            KARAGIR
          </span>
          <span
            className={`navbar-title-text navbar-title-dev${lang === 'mr' ? ' is-visible' : ''}`}
          >
            कारागीर
          </span>
        </span>
      </div>

      <div className="navbar-social" ref={menuRef}>
        <button
          type="button"
          className="navbar-logo-circle"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="Open social links"
        >
          <img src={logo} alt="Karagir logo" />
        </button>

        {open && (
          <div className="navbar-dropdown">
            <div className="navbar-dropdown-section">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  className="navbar-dropdown-item navbar-dropdown-link"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <div className="navbar-dropdown-divider" />

            <div className="navbar-dropdown-section">
              <a
                className="navbar-dropdown-item"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                <span>+{WHATSAPP_NUMBER}</span>
              </a>
              <a
                className="navbar-dropdown-item"
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                <span>@{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
