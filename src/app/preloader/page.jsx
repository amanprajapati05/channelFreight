'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const Preloader = ({ children }) => {
  const containerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const leftRows = [...leftColumnRef.current.children].reverse(); // Bottom to top
    const rightRows = [...rightColumnRef.current.children]; // Top to bottom

    // Initial state
    gsap.set([leftColumnRef.current, rightColumnRef.current], {
      height: '100vh',
      width: '50%',
    });

    gsap.set('.main-content', {
      opacity: 0
    });

    // Create main timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" }
    });

    // Logo/Image animation
    tl.from(imageRef.current, {
        opacity: 0,
        duration: 1.2,
        delay: 0.5 // Initial delay before starting logo animation
        })
    tl.to(imageRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 2 // Initial delay before starting exit animation
    })

    // Exit animations
    .to(leftRows, {
      xPercent: -100,
      stagger: 0.1,
      duration: 1.2,
    })
    .to(rightRows, {
      xPercent: 100,
      stagger: 0.1,
      duration: 1.2,
    }, "<") // Start at same time as left column
    .to('.main-content', {
      opacity: 1,
      duration: 0.5
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-screen overflow-hidden">
      {/* Left Column */}
      <div 
        ref={leftColumnRef} 
        className="fixed top-0 left-0 w-1/2 h-screen"
      >
        <div className="absolute top-0 w-full h-1/3 bg-[#ADEDFF]" />
        <div className="absolute top-1/3 w-full h-1/3 bg-[#ADEDFF]" />
        <div className="absolute top-2/3 w-full h-1/3 bg-[#ADEDFF]" />
      </div>

      {/* Right Column */}
      <div 
        ref={rightColumnRef} 
        className="fixed top-0 right-0 w-1/2 h-screen"
      >
        <div className="absolute top-0 w-full h-1/3 bg-[#ADEDFF]" />
        <div className="absolute top-1/3 w-full h-1/3 bg-[#ADEDFF]" />
        <div className="absolute top-2/3 w-full h-1/3 bg-[#ADEDFF]" />
      </div>

      {/* Centered Image/Logo */}
      <div 
        ref={imageRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      >
        <Image
          src="/images/viddo.gif" // Place your logo in public folder
          alt="Logo"
          width={150}
          height={150}
          priority
        />
      </div>

      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Preloader;