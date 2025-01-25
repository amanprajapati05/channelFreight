// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import { Clash } from '../../../public/fonts/fonts';

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// const CircularStat = ({ title, description, isMobile, commonTrigger }) => {
//   const circleRef = useRef(null);
//   const dotRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const pathLength = circleRef.current.getTotalLength();
    
//     // Initial state
//     gsap.set(circleRef.current, {
//       strokeDasharray: pathLength,
//       strokeDashoffset: pathLength,
//       rotation: 0,
//       transformOrigin: "center",
//     });

//     // gsap.set(dotRef.current, {
//     //   autoAlpha: 1,
//     //   x: '50%',
//     //   y: '100%',
//     //   xPercent: -50,
//     //   yPercent: -50
//     // });
//     gsap.set(dotRef.current, {
//       autoAlpha: 1,
//       x: '100%',
//       y: '50%',
//       xPercent: -50,
//       yPercent: -50,
//       transformOrigin: "center center"
//     });

//     const circle = gsap.to(circleRef.current, {
//       strokeDashoffset: 0,
//       duration: 2,
//       ease: "none",
//       paused: true
//     });

//     // const dot = gsap.to(dotRef.current, {
//     //   motionPath: {
//     //     path: circleRef.current,
//     //     align: circleRef.current,
//     //     alignOrigin: [0.5, 0.5],
//     //     autoRotate: true,
//     //     start: 0,
//     //     end: 1
//     //   },
//     //   duration: 2,
//     //   ease: "none",
//     //   paused: true
//     // });
//     const dot = gsap.to(dotRef.current, {
//       motionPath: {
//         path: circleRef.current,
//         align: circleRef.current,
//         alignOrigin: [0.5, 0.5],
//         autoRotate: 90,
//         useRadians: true,
//         start: 0,
//         end: 1
//       },
//       duration: 2,
//       ease: "none",
//       paused: true
//     });


//     if (isMobile) {
//       // Common trigger for mobile view
//       commonTrigger.current = ScrollTrigger.create({
//         trigger: ".stats-section",
//         start: "top center+=100",
//         end: "bottom center",
//         onUpdate: (self) => {
//           circle.progress(self.progress);
//           dot.progress(self.progress);
//         }
//       });
//     } else {
//       // Individual triggers for desktop
//       ScrollTrigger.create({
//         trigger: circleRef.current,
//         start: "top center+=100",
//         end: "bottom center",
//         onUpdate: (self) => {
//           circle.progress(self.progress);
//           dot.progress(self.progress);
//         }
//       });
//     }

//     return () => {
//       circle.kill();
//       dot.kill();
//       if (commonTrigger?.current) {
//         commonTrigger.current.kill();
//       }
//     };
//   }, [isMobile]);

//   return (
//     <div className="relative w-full sm:w-[80%] md:w-[28%]" ref={containerRef}>
//       <div className="relative w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] md:w-[25vw] md:h-[25vw] lg:w-[20vw] lg:h-[20vw] flex items-center justify-center mx-auto">
//         <svg 
//           className="w-full h-full"
//           viewBox="0 0 1024 1024" 
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g>
//             {/* Progress Path */}
//             <path
//               ref={circleRef}
//               className="stroke-white fill-none"
//               strokeWidth="2"
//               strokeLinecap="round"
//               d="M512,1023.5c-69.1,0-136-13.5-199.1-40.2c-60.9-25.8-115.6-62.6-162.6-109.6c-47-47-83.9-101.7-109.6-162.6
//               C14,648,0.5,581.1,0.5,512c0-69.1,13.5-136,40.2-199.1c25.8-60.9,62.6-115.6,109.6-162.6c47-47,101.7-83.9,162.6-109.6
//               C376,14,442.9,0.5,512,0.5c69.1,0,136,13.5,199.1,40.2c60.9,25.8,115.6,62.6,162.6,109.6c47,47,83.9,101.7,109.6,162.6
//               c26.7,63.1,40.2,130,40.2,199.1c0,69.1-13.5,136-40.2,199.1c-25.8,60.9-62.6,115.6-109.6,162.6c-47,47-101.7,83.9-162.6,109.6
//               C648,1010,581.1,1023.5,512,1023.5z"
//             />
            
//             {/* Background Circle */}
//             <path
//               className="stroke-white/30 fill-none"
//               strokeWidth="1"
//               strokeDasharray="4,6"
//               d="M512,1023.5c-69.1,0-136-13.5-199.1-40.2c-60.9-25.8-115.6-62.6-162.6-109.6c-47-47-83.9-101.7-109.6-162.6
//               C14,648,0.5,581.1,0.5,512c0-69.1,13.5-136,40.2-199.1c25.8-60.9,62.6-115.6,109.6-162.6c47-47,101.7-83.9,162.6-109.6
//               C376,14,442.9,0.5,512,0.5c69.1,0,136,13.5,199.1,40.2c60.9,25.8,115.6,62.6,162.6,109.6c47,47,83.9,101.7,109.6,162.6
//               c26.7,63.1,40.2,130,40.2,199.1c0,69.1-13.5,136-40.2,199.1c-25.8,60.9-62.6,115.6-109.6,162.6c-47,47-101.7,83.9-162.6,109.6
//               C648,1010,581.1,1023.5,512,1023.5z"
//             />
//           </g>
//         </svg>

//         {/* Dot that follows the path */}
//         <div 
//           ref={dotRef}
//           className="absolute w-2 h-2 bg-white rounded-full"
//         />
        
//         {/* Stats Content */}
//         <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full ${Clash.className}`}>
//           <div className="text-[6vw] sm:text-[4vw] md:text-[2vw] lg:text-[1.5vw] text-white whitespace-pre-line font-bold">
//             {title}
//           </div>
//           <div className="text-[3vw] sm:text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-white mt-2 px-[4vw] md:px-[2vw]">
//             {description}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const StatsSection = () => {
//   const sectionRef = useRef(null);
//   const commonTriggerRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(true);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     // Initial check
//     checkMobile();

//     // Add resize listener
//     window.addEventListener('resize', checkMobile);

//     return () => {
//       window.removeEventListener('resize', checkMobile);
//       ScrollTrigger.getAll().forEach(st => st.kill());
//     };
//   }, []);

//   const stats = [
//     {
//       title: "150+\nCountries Served",
//       description: "Providing reliable logistics solutions and deliveries worldwide."
//     },
//     {
//       title: "500+\nSatisfied Clients",
//       description: "Trusted by a diverse portfolio of clients worldwide."
//     },
//     {
//       title: "1,000,000+\nShipments Delivered",
//       description: "Successfully handled over one million shipments across air, sea, and land."
//     }
//   ];

//   return (
//     <section 
//       ref={sectionRef} 
//       className="relative z-50 stats-section"
//     >
//       <div className="w-full flex md:flex-row flex-col items-center justify-center gap-8 bg-[#02123b] py-16">
//         {stats.map((stat, index) => (
//           <CircularStat 
//             key={index}
//             title={stat.title}
//             description={stat.description}
//             isMobile={isMobile}
//             commonTrigger={commonTriggerRef}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Clash } from '../../../public/fonts/fonts';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const CircularStat = ({ title, description, isMobile, commonTrigger }) => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const pathLength = circleRef.current.getTotalLength();
    
    gsap.set(circleRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      rotation: -0,
      transformOrigin: "center",
    });

    gsap.set(dotRef.current, {
      autoAlpha: 1,
      x: '50%',
      y: '0%',
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "center center"
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(circleRef.current, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "none"
    })
    .to(dotRef.current, {
      motionPath: {
        path: circleRef.current,
        align: circleRef.current,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 0,
        end: 1
      },
      duration: 1,
      ease: "none"
    }, 0);

    const trigger = {
      trigger: isMobile ? ".stats-section" : circleRef.current,
      start: "top center+=100",
      end: "bottom center",
      onUpdate: (self) => tl.progress(self.progress),
      scrub: 0.5
    };

    const st = isMobile ? 
      (commonTrigger.current = ScrollTrigger.create(trigger)) : 
      ScrollTrigger.create(trigger);

    return () => {
      tl.kill();
      st.kill();
    };
  }, [isMobile]);

  return (
    <div className="relative w-full sm:w-[80%] md:w-[28%]" ref={containerRef}>
      <div className="relative w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] md:w-[25vw] md:h-[25vw] lg:w-[20vw] lg:h-[20vw] flex items-center justify-center mx-auto">
        <svg 
          className="w-full h-full"
          viewBox="0 0 1024 1024" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
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
            
            <path
              className="stroke-white/10 fill-none"
              strokeWidth="1"
              strokeDasharray="4,6"
              d="M512,1023.5c-69.1,0-136-13.5-199.1-40.2c-60.9-25.8-115.6-62.6-162.6-109.6c-47-47-83.9-101.7-109.6-162.6
              C14,648,0.5,581.1,0.5,512c0-69.1,13.5-136,40.2-199.1c25.8-60.9,62.6-115.6,109.6-162.6c47-47,101.7-83.9,162.6-109.6
              C376,14,442.9,0.5,512,0.5c69.1,0,136,13.5,199.1,40.2c60.9,25.8,115.6,62.6,162.6,109.6c47,47,83.9,101.7,109.6,162.6
              c26.7,63.1,40.2,130,40.2,199.1c0,69.1-13.5,136-40.2,199.1c-25.8,60.9-62.6,115.6-109.6,162.6c-47,47-101.7,83.9-162.6,109.6
              C648,1010,581.1,1023.5,512,1023.5z"
            />
          </g>
        </svg>

        <div 
          ref={dotRef}
          className="absolute w-2 h-2 bg-white rounded-full"
        />
        
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full ${Clash.className}`}>
          <div className="text-[6vw] sm:text-[4vw] md:text-[2vw] lg:text-[1.5vw] text-white whitespace-pre-line font-bold">
            {title}
          </div>
          <div className="text-[3vw] sm:text-[2vw] md:text-[1vw] lg:text-[0.8vw] text-white mt-2 px-[4vw] md:px-[2vw]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const commonTriggerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
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
    <section ref={sectionRef} className="relative z-50 stats-section">
      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-8 bg-[#02123b] py-16">
        {stats.map((stat, index) => (
          <CircularStat 
            key={index}
            title={stat.title}
            description={stat.description}
            isMobile={isMobile}
            commonTrigger={commonTriggerRef}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;