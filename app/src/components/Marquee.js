import React from 'react';

function MarqueeRow({ direction }) {
  const items = new Array(8).fill(null);

  return (
    <div className={`marquee-row marquee-${direction}`}>
      <div className="marquee-track">
        {items.map((_, i) => (
          <span className="marquee-item" key={`a-${i}`}>
            <span className="marquee-en">KARAGIR</span>
            <span className="marquee-dev">कारागीर</span>
          </span>
        ))}
      </div>
      <div className="marquee-track" aria-hidden="true">
        {items.map((_, i) => (
          <span className="marquee-item" key={`b-${i}`}>
            <span className="marquee-en">KARAGIR</span>
            <span className="marquee-dev">कारीगर</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee({ single = false, reverse = false }) {
  return (
    <div className={`marquee${reverse ? ' marquee-reverse' : ''}`}>
      <MarqueeRow direction="rtl" />
      {!single && <MarqueeRow direction="ltr" />}
    </div>
  );
}
