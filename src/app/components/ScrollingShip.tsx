import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollShip = () => {
  const shipRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const ship = shipRef.current;

    // Set initial position
    gsap.set(ship, {
      y: '-50%',
      left: '50%',
      xPercent: -50,
      rotate: 90, // Vertical orientation
      position: 'fixed',
      width: '15vw', // Adjust size as needed
      zIndex: 1
    });

    // Create the scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top", // Start when container hits top
        end: "bottom bottom", // End when container bottom hits bottom
        markers: true, // Set to true to see trigger area
        scrub: 1, // Smooth scrolling
        pin: false,
        onUpdate: (self) => {
          // Fade out at the end of timeline section
          if (self.progress > 0.8) {
            gsap.to(ship, {
              opacity: 1 - ((self.progress - 0.8) * 5),
              duration: 0.1
            });
          } else {
            gsap.to(ship, {
              opacity: 1,
              duration: 0.1
            });
          }
        }
      }
    });

    tl.to(ship, {
      y: '150vh', // Move down beyond viewport
      ease: "none",
      duration: 1
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[200vh] w-full relative">
      <img
        ref={shipRef}
        src="/images/ship-vertical1.png" // Make sure to replace with your ship image
        alt="Scrolling ship"
        className="pointer-events-none"
        style={{
          position: 'fixed',
          opacity: 0
        }}
      />
    </div>
  );
};

export default ScrollShip;