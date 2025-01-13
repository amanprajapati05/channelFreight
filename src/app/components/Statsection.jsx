import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Clash } from '../../../public/fonts/fonts';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const CircularStat = ({ title, description }) => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const pathLength = circleRef.current.getTotalLength();
    
    // Initial state
    gsap.set(circleRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      rotation: 0,
      transformOrigin: "center",
    });

    gsap.set(dotRef.current, {
      autoAlpha: 1,
      x: '50%',
      y: '100%',
      xPercent: -50,
      yPercent: -50
    });

    const circle = gsap.to(circleRef.current, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "none",
      paused: true
    });

    const dot = gsap.to(dotRef.current, {
      motionPath: {
        path: circleRef.current,
        align: circleRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1
      },
      duration: 2,
      ease: "none",
      paused: true
    });

    ScrollTrigger.create({
      trigger: circleRef.current,
      start: "top center+=100",
      end: "bottom center",
      markers: true,
      onUpdate: (self) => {
        circle.progress(self.progress);
        dot.progress(self.progress);
      }
    });

    return () => {
      circle.kill();
      dot.kill();
    };
  }, []);

  return (
    <div className="relative w-[28%]">
      <div className="relative w-[300px] h-[300px] flex items-center justify-center mx-auto">
        <svg 
          className="w-full h-full"
          viewBox="0 0 1024 1024" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            {/* Progress Path */}
            <path
              ref={circleRef}
              className="stroke-white fill-none"
              strokeWidth="2"
              strokeLinecap="round"
              d="M512,1023.5c-69.1,0-136-13.5-199.1-40.2c-60.9-25.8-115.6-62.6-162.6-109.6c-47-47-83.9-101.7-109.6-162.6
              C14,648,0.5,581.1,0.5,512c0-69.1,13.5-136,40.2-199.1c25.8-60.9,62.6-115.6,109.6-162.6c47-47,101.7-83.9,162.6-109.6
              C376,14,442.9,0.5,512,0.5c69.1,0,136,13.5,199.1,40.2c60.9,25.8,115.6,62.6,162.6,109.6c47,47,83.9,101.7,109.6,162.6
              c26.7,63.1,40.2,130,40.2,199.1c0,69.1-13.5,136-40.2,199.1c-25.8,60.9-62.6,115.6-109.6,162.6c-47,47-101.7,83.9-162.6,109.6
              C648,1010,581.1,1023.5,512,1023.5z"
            />
            
            {/* Background Circle */}
            <path
              className="stroke-white/30 fill-none"
              strokeWidth="1"
              strokeDasharray="4,6"
              d="M512,1c69,0,135.9,13.5,198.9,40.2c60.8,25.7,115.5,62.6,162.4,109.5c46.9,46.9,83.8,101.6,109.5,162.4
              c26.6,63,40.2,129.9,40.2,198.9s-13.5,135.9-40.2,198.9c-25.7,60.8-62.6,115.5-109.5,162.4c-46.9,46.9-101.6,83.8-162.4,109.5
              c-63,26.6-129.9,40.2-198.9,40.2s-135.9-13.5-198.9-40.2c-60.8-25.7-115.5-62.6-162.4-109.5c-46.9-46.9-83.8-101.6-109.5-162.4
              C14.5,647.9,1,581,1,512s13.5-135.9,40.2-198.9c25.7-60.8,62.6-115.5,109.5-162.4c46.9-46.9,101.6,83.8,162.4-109.5
              C376.1,14.5,443,1,512,1z"
            />
          </g>
        </svg>

        {/* Dot that follows the path */}
        <div 
          ref={dotRef}
          className="absolute w-2 h-2 bg-white rounded-full"
        />
        
        {/* Stats Content */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full ${Clash.className}`}>
          <div className="text-[2vw] text-white whitespace-pre-line font-bold">
            {title}
          </div>
          <div className="text-[1vw] text-white mt-2">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      markers: true,
      // pinSpacing: true,
      anticipatePin: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const stats = [
    {
      title: "150+\nCountries Served",
      description: "Providing reliable logistics solutions and deliveries worldwide."
    },
    {
      title: "500+\nSatisfied Clients",
      description: "Trusted by a diverse portfolio of clients worldwide."
    },
    {
      title: "1,000,000+\nShipments Delivered",
      description: "Successfully handled over one million shipments across air, sea, and land."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative z-50"
    >
      <div className="w-full flex justify-center gap-8 bg-[--blue3] py-16">
        {stats.map((stat, index) => (
          <CircularStat 
            key={index}
            title={stat.title}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;