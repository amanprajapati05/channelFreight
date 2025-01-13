'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const ShipAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const shipRef = useRef(null);
  const ctxRef = useRef(null);
  const triggerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const shipImage = new Image();
    shipImage.src = '/images/services/ship.webp'; // Replace with your ship image

    const ctx = canvasRef.current.getContext('2d');
    ctxRef.current = ctx;

    const setCanvasSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    setCanvasSize();

    shipImage.onload = () => {
      const drawShip = (progress) => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        const imageWidth = shipImage.naturalWidth;
        const imageHeight = shipImage.naturalHeight;
        
        // Center position
        const startX = (canvas.width - imageWidth) / 2;
        const startY = (canvas.height - imageHeight) / 2;
        
        // Clear entire canvas with white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw ship at calculated position
        ctx.drawImage(
          shipImage,
          startX - (progress * (canvas.width + imageWidth)),
          startY,
          imageWidth,
          imageHeight
        );

        // Fill the rest of the canvas after ship with white
        // This ensures text is hidden until ship moves past
        ctx.fillStyle = 'white';
        ctx.fillRect(
          startX - (progress * (canvas.width + imageWidth)) + imageWidth,
          0,
          canvas.width,
          canvas.height
        );
      };

      // Initial draw with white background
      drawShip(0);

      // Ship movement animation
      gsap.fromTo(
        {},
        {
          progress: 0
        },
        {
          progress: 1,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "1500 top",
            scrub: 0.6,
            pin: true,
            // markers: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              drawShip(self.progress);
            }
          },
        }
      );

      // Hide text initially
      gsap.set(textRef.current, { opacity: 0 });

      // Reveal text only after ship has moved halfway
      gsap.to(textRef.current, {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "50% top",
          scrub: true,
          pin: true,
          // markers: true
        }
      });

      window.addEventListener('resize', () => {
        setCanvasSize();
        drawShip(0);
      });
    };

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden text-[--blue3]">
      <div ref={triggerRef} className="h-full">
        {/* White background canvas with ship */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-20"
        />
        
        {/* Stationary text that will be revealed */}
        <div 
          ref={textRef} 
          className="relative z-10 flex flex-col justify-center items-center h-full"
        >
          <div className="text-center md:text-[4vw] text-[7vw] px-2 md:px-0">
            Your Cargo,
          </div>
          <div className="text-center md:text-[5vw] text-[10vw]">
            securely managed at every step.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipAnimation;