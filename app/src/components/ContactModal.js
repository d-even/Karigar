import React, { useEffect, useRef } from 'react';
import { WhatsAppIcon, InstagramIcon, MailIcon } from './icons';

const EMAIL = 'karagirdesign@gmail.com';
const WHATSAPP_NUMBER = '8928877124';
const INSTAGRAM_HANDLE = 'karagir.studio';
const BOOKING_URL = 'https://cal.com/deven70/30min?overlayCalendar=true';

const SOCIALS = [
  { label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}`, Icon: WhatsAppIcon },
  { label: 'Instagram', href: `https://instagram.com/${INSTAGRAM_HANDLE}`, Icon: InstagramIcon },
  { label: 'Email', href: `mailto:${EMAIL}`, Icon: MailIcon },
];

export default function ContactModal({ open, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="contact-backdrop" onMouseDown={onClose}>
      <div
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="contact-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="contact-left">
          <h2 id="contact-title" className="contact-title">Say hello!</h2>
          <p className="contact-text">
            Have an idea or a project? Drop us a line or grab a slot to chat about your dream.
          </p>
          <a
            className="contact-book"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        </div>

        <div className="contact-right">
          <p className="contact-label">TO:</p>
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>

          <hr className="contact-rule" />

          <p className="contact-label">FIND US ON</p>
          <div className="contact-socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                className="contact-social"
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                <Icon width="24" height="24" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
