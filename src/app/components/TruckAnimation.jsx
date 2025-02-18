// 'use client'

// import React, { useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from "@gsap/react";
// import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
// import { Clash } from '../../../public/fonts/fonts';

// gsap.registerPlugin(ScrollTrigger);

// const TruckAnimation = () => {
//   const containerRef = useRef(null);
//   const truckRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);

//   useGSAP(() => {
//     const container = containerRef.current;

//     // Hide all cards initially
//     gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
//       opacity: 0,
//       pointerEvents: 'none'
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: 'top top',
//         end: 'bottom top',
//         pin: true,
//         anticipatePin: 1,
//         pinSpacing: false,
//         scrub: 0.6,
//         invalidateOnRefresh: true,
//         onUpdate: (self) => {
//           const progress = self.progress;
          
//           if (progress <= 0.3) {
//             gsap.to(card1Ref.current, { 
//               opacity: 1, 
//               pointerEvents: 'auto',
//               duration: 0.1,
//               ease: "power2.inOut"
//             });
//             gsap.to([card2Ref.current, card3Ref.current], {
//               opacity: 0,
//               pointerEvents: 'none',
//               duration: 0.1,
//               ease: "power2.inOut"
//             });
//           }
//           else if (progress >= 0.4 && progress <= 0.6) {
//             gsap.to(card2Ref.current, {
//               opacity: 1,
//               pointerEvents: 'auto',
//               duration: 0.1,
//               ease: "power2.inOut"
//             });
//             gsap.to([card1Ref.current, card3Ref.current], {
//               opacity: 0,
//               pointerEvents: 'none',
//               duration: 0.1,
//               ease: "power2.inOut"
//             });
//           }
//           else if (progress >= 0.7) {
//             gsap.to(card3Ref.current, {
//               opacity: 1,
//               pointerEvents: 'auto',
//               duration: 0.1,
//               ease: "power2.inOut"
//             });
//             gsap.to([card1Ref.current, card2Ref.current], {
//               opacity: 0,
//               pointerEvents: 'none',
//               duration: 0.1,
//               ease: "power2.inOut"
//             });
//           }
//           else {
//             gsap.to([card1Ref.current, card2Ref.current, card3Ref.current], {
//               opacity: 0,
//               pointerEvents: 'none',
//               duration: 0.1,
//               ease: "power2.inOut"
//             });
//           }
//         }
//       }
//     });

//     // Set initial truck position and animate
//     gsap.set(truckRef.current, {
//       x: window.innerWidth - 500,
//       y: 50
//     });

//     tl.to(truckRef.current, {
//       x: -500,
//       y: window.innerHeight - 200,
//       ease: 'none'
//     });
//   }, { scope: containerRef }); // Scope GSAP to container

//   return (
//     <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
//       <img 
//         ref={truckRef}
//         src="/images/sectors/truck.webp"
//         alt="Truck"
//         className="absolute h-[400px] w-auto object-contain"
//       />
      
//       {/* Cards */}
//       <div ref={card1Ref} className="absolute block bg-white md:left-[10vw] left-[50%] md:top-[40%] -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 top-[40%] rounded-xl w-[80vw] h-[80vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[60vw] sm:h-[60vw]  border border-white">
//         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
//           <div className='flex flex-col gap-[1vw]'>
//             <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
//               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
//             </div>
//             <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
//             Temperature Fluctuations
//             </div>
//           </div>
//           <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
//           We utilize automated alerts and IoT monitoring to maintain consistent temperature environments, even in the harshest conditions.
//           </div>
//         </div>
//       </div>
     
//       <div ref={card2Ref} className="absolute bg-white right-[10vw] top-[40%] rounded-xl w-[80vw] h-[80vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[60vw] sm:h-[60vw] border border-white">
//         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
//           <div className='flex flex-col gap-[1vw]'>
//             <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
//               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
//             </div>
//             <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
//             Global Reach
//             </div>
//           </div>
//           <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
//           Delivering to remote locations poses challenges. Our network of strategic partners ensures seamless last-mile delivery worldwide.
//           </div>
//         </div>
//       </div>

//       <div ref={card3Ref} className="absolute bg-white right-[10vw] top-[30%] rounded-xl w-[80vw] h-[80vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[60vw] sm:h-[60vw] border border-white">
//         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
//           <div className='flex flex-col gap-[1vw]'>
//             <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
//               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
//             </div>
//             <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
//               Sustainability Concerns
//             </div>
//           </div>
//           <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
//             Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TruckAnimation;
'use client'

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { Clash } from '../../../public/fonts/fonts';

gsap.registerPlugin(ScrollTrigger);

const TruckAnimation = () => {
  const containerRef = useRef(null);
  const truckRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isDOMReady, setIsDOMReady] = useState(false);

  // Check DOM ready state
  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsDOMReady(true);
    } else {
      window.addEventListener('load', () => setIsDOMReady(true));
      return () => window.removeEventListener('load', () => setIsDOMReady(true));
    }
  }, []);

  // Preload truck image
  useEffect(() => {
    const img = new Image();
    img.src = '/images/sectors/truck.webp';
    img.onload = () => setIsImageLoaded(true);
  }, []);

  useGSAP(() => {
    // Only initialize animation when both DOM and image are ready
    if (!isDOMReady || !isImageLoaded) return;

    const container = containerRef.current;

    // Hide all cards initially
    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
      opacity: 0,
      pointerEvents: 'none'
    });

    // Set initial truck position
    gsap.set(truckRef.current, {
      x: window.innerWidth - 500,
      y: 50,
      opacity: 0 // Start invisible
    });

    // Fade in truck once positioned
    gsap.to(truckRef.current, {
      opacity: 1,
      duration: 0.5
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        anticipatePin: 1,
        pinSpacing: false,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          
          if (progress <= 0.3) {
            gsap.to(card1Ref.current, { 
              opacity: 1, 
              pointerEvents: 'auto',
              duration: 0.1,
              ease: "power2.inOut"
            });
            gsap.to([card2Ref.current, card3Ref.current], {
              opacity: 0,
              pointerEvents: 'none',
              duration: 0.1,
              ease: "power2.inOut"
            });
          }
          else if (progress >= 0.4 && progress <= 0.6) {
            gsap.to(card2Ref.current, {
              opacity: 1,
              pointerEvents: 'auto',
              duration: 0.1,
              ease: "power2.inOut"
            });
            gsap.to([card1Ref.current, card3Ref.current], {
              opacity: 0,
              pointerEvents: 'none',
              duration: 0.1,
              ease: "power2.inOut"
            });
          }
          else if (progress >= 0.7) {
            gsap.to(card3Ref.current, {
              opacity: 1,
              pointerEvents: 'auto',
              duration: 0.1,
              ease: "power2.inOut"
            });
            gsap.to([card1Ref.current, card2Ref.current], {
              opacity: 0,
              pointerEvents: 'none',
              duration: 0.1,
              ease: "power2.inOut"
            });
          }
          else {
            gsap.to([card1Ref.current, card2Ref.current, card3Ref.current], {
              opacity: 0,
              pointerEvents: 'none',
              duration: 0.1,
              ease: "power2.inOut"
            });
          }
        }
      }
    });

    tl.to(truckRef.current, {
      x: -500,
      y: window.innerHeight - 200,
      ease: 'none'
    });

    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, { 
    scope: containerRef,
    dependencies: [isDOMReady, isImageLoaded] // Re-run when loading states change
  });

  return (
    <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
      <img 
        ref={truckRef}
        src="/images/sectors/truck.webp"
        alt="Truck"
        className="absolute h-[400px] w-auto object-contain opacity-0"
      />
      
      {/* Cards - rest of the JSX remains the same */}
      <div ref={card1Ref} className="absolute block bg-white md:left-[10vw] left-[50%] md:top-[40%] -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 top-[40%] rounded-xl w-[80vw] h-[80vw] lg:w-[25vw] md:w-[30vw] md:h-[30vw] lg:h-[25vw] sm:w-[60vw] sm:h-[60vw] border border-white">
        <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
          <div className='flex flex-col gap-[1vw]'>
            <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
              <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
            </div>
            <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
              Temperature Fluctuations
            </div>
          </div>
          <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
            We utilize automated alerts and IoT monitoring to maintain consistent temperature environments, even in the harshest conditions.
          </div>
        </div>
      </div>
     
      <div ref={card2Ref} className="absolute bg-white right-[10vw] top-[40%] rounded-xl w-[80vw] h-[80vw] lg:w-[25vw] md:w-[30vw] md:h-[30vw] lg:h-[25vw] sm:w-[60vw] sm:h-[60vw] border border-white">
        <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
          <div className='flex flex-col gap-[1vw]'>
            <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
              <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
            </div>
            <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
              Global Reach
            </div>
          </div>
          <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
            Delivering to remote locations poses challenges. Our network of strategic partners ensures seamless last-mile delivery worldwide.
          </div>
        </div>
      </div>

      <div ref={card3Ref} className="absolute bg-white right-[10vw] top-[20%] rounded-xl w-[80vw] h-[80vw] lg:w-[25vw] md:w-[30vw] md:h-[30vw] lg:h-[25vw] sm:w-[60vw] sm:h-[60vw] border border-white">
        <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
          <div className='flex flex-col gap-[1vw]'>
            <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
              <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
            </div>
            <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
              Sustainability Concerns
            </div>
          </div>
          <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
            Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckAnimation;