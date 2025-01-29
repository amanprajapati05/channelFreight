// components/Overlay.js
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Overlay() {
  const overlays = useRef([]);
  const container = useRef();

  useEffect(() => {
    // Check if entrance animation should play
    const shouldAnimate = sessionStorage.getItem('shouldAnimateEntrance');
    if (shouldAnimate) {
      gsap.to(overlays.current, {
        yPercent: 100, // Reveal by moving down
        duration: 0.7,
        ease: "power2.inOut",
        stagger: {
          amount: 0.3,
          from: "start"
        },
        onComplete: () => {
          sessionStorage.removeItem('shouldAnimateEntrance');
        }
      });
    }
  }, []);

  return (
    <div ref={container} className="fixed inset-0 z-[9999] pointer-events-none">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={el => overlays.current[i] = el}
          className="overlay-element absolute top-0 h-screen bg-white"
          style={{
            width: '20%',
            left: `${i * 20}%`,
            transform: 'translateY(-100%)' // Start off-screen above
          }}
        />
      ))}
    </div>
  );
}