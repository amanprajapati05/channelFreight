// 'use client'

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
// import { Clash } from '../../../public/fonts/fonts';

// gsap.registerPlugin(ScrollTrigger);

// const TruckAnimation = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const truckRef = useRef(null);
//   const imageRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);

//   // useEffect(() => {
//   //   const canvas = canvasRef.current;
//   //   const container = containerRef.current;
//   //   const ctx = canvas.getContext('2d', { alpha: false });
//   //   const truck = new Image();
//   //   truck.src = '/images/sectors/truck.webp';
//   //   imageRef.current = truck;

//   //   // Hide all cards initially
//   //   gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
//   //     opacity: 0,
//   //     pointerEvents: 'none'
//   //   });

//   //   const setCanvasSize = () => {
//   //     canvas.width = window.innerWidth;
//   //     canvas.height = window.innerHeight;
//   //   };

//   //   const render = () => {
//   //     ctx.fillStyle = '#02123B';
//   //     ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//   //     if (truckRef.current && imageRef.current) {
//   //       ctx.drawImage(
//   //         imageRef.current,
//   //         truckRef.current.x,
//   //         truckRef.current.y,
//   //         imageRef.current.width * 1,
//   //         imageRef.current.height * 1
//   //       );
//   //     }
      
//   //     animationFrameRef.current = requestAnimationFrame(render);
//   //   };

//   //   setCanvasSize();
//   //   window.addEventListener('resize', setCanvasSize);

//   //   truck.onload = () => {
//   //     const startX = window.innerWidth - (truck.width * 0.8) - 50;
//   //     const startY = 50;
//   //     const endX = -500;
//   //     const endY = window.innerHeight - (truck.height * 0.8) + 100;

//   //     truckRef.current = { x: startX, y: startY };
      
//   //     render();

//   //     const tl = gsap.timeline({
//   //       scrollTrigger: {
//   //         trigger: container,
//   //         start: 'top top',
//   //         end: 'bottom top',
//   //         pin: true,
//   //         anticipatePin: 1,
//   //         pinSpacing: false,
//   //         scrub: 5,
//   //         // markers: true,
//   //         invalidateOnRefresh: true,
//   //         onUpdate: (self) => {
//   //           const progress = self.progress;
            
//   //           // Card 1 (0-30%)
//   //           if (progress <= 0.3) {
//   //             gsap.to(card1Ref.current, { 
//   //               opacity: 1, 
//   //               pointerEvents: 'auto',
//   //               duration: 0.1,
//   //               ease: "power2.inOut"
//   //             });
//   //             gsap.to([card2Ref.current, card3Ref.current], {
//   //               opacity: 0,
//   //               pointerEvents: 'none',
//   //               duration: 0.1,
//   //               ease: "power2.inOut"
//   //             });
//   //           }
//   //           // Card 2 (40-60%)
//   //           else if (progress >= 0.4 && progress <= 0.6) {
//   //             gsap.to(card2Ref.current, {
//   //               opacity: 1,
//   //               pointerEvents: 'auto',
//   //               duration: 0.1,
//   //               ease: "power2.inOut"
//   //             });
//   //             gsap.to([card1Ref.current, card3Ref.current], {
//   //               opacity: 0,
//   //               pointerEvents: 'none',
//   //               duration: 0.1,
//   //               ease: "power2.inOut"
//   //             });
//   //           }
//   //           // Card 3 (70-100%)
//   //           else if (progress >= 0.7) {
//   //             gsap.to(card3Ref.current, {
//   //               opacity: 1,
//   //               pointerEvents: 'auto',
//   //               duration: 0.1,
//   //               ease: "power2.inOut"
//   //             });
//   //             gsap.to([card1Ref.current, card2Ref.current], {
//   //               opacity: 0,
//   //               pointerEvents: 'none',
//   //               duration: 0.1,
//   //               ease: "power2.inOut"
//   //             });
//   //           }
//   //           // Gaps between cards (all cards hidden)
//   //           else {
//   //             gsap.to([card1Ref.current, card2Ref.current, card3Ref.current], {
//   //               opacity: 0,
//   //               pointerEvents: 'none',
//   //               duration: 0.1,
//   //               ease: "power2.inOut"
//   //             });
//   //           }
//   //         }
//   //       }
//   //     });

//   //     tl.to(truckRef.current, {
//   //       x: endX,
//   //       y: endY,
//   //       ease: 'none'
//   //     });
//   //   };

//   //   return () => {
//   //     if (animationFrameRef.current) {
//   //       cancelAnimationFrame(animationFrameRef.current);
//   //     }
//   //     window.removeEventListener('resize', setCanvasSize);
//   //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   //   };
//   // }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     const ctx = canvas.getContext('2d');  // Removed alpha: false to prevent white background
//     const truck = new Image();
//     truck.src = '/images/sectors/truck.webp';
//     imageRef.current = truck;

//     // Hide all cards initially
//     gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
//       opacity: 0,
//       pointerEvents: 'none'
//     });

//     const setCanvasSize = () => {
//       const { width, height } = container.getBoundingClientRect();
//       canvas.width = width;
//       canvas.height = height;
//     };

//     const render = () => {
//       if (!ctx || !canvas) return;
      
//       // Clear the canvas first
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Draw background
//       ctx.fillStyle = '#02123B';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       // Only draw the truck if both the image and position are available
//       if (truckRef.current && imageRef.current && imageRef.current.complete) {
//         ctx.drawImage(
//           imageRef.current,
//           truckRef.current.x,
//           truckRef.current.y,
//           truck.width,
//           truck.height
//         );
//       }
      
//       animationFrameRef.current = requestAnimationFrame(render);
//     };

//     // Initial setup
//     setCanvasSize();
//     window.addEventListener('resize', setCanvasSize);

//     // Make sure the truck image is loaded before starting animation
//     truck.onload = () => {
//       const startX = canvas.width - truck.width - 50;
//       const startY = 50;
//       const endX = -truck.width;
//       const endY = canvas.height - truck.height + 100;

//       truckRef.current = { x: startX, y: startY };
      
//       // Start rendering
//       render();

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: container,
//           start: 'top top',
//           end: 'bottom top',
//           pin: true,
//           anticipatePin: 1,
//           pinSpacing: false,
//           scrub: 5,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
            
//             // Card animations (same as before)
//             if (progress <= 0.3) {
//               gsap.to(card1Ref.current, { 
//                 opacity: 1, 
//                 pointerEvents: 'auto',
//                 duration: 0.1,
//                 ease: "power2.inOut"
//               });
//               gsap.to([card2Ref.current, card3Ref.current], {
//                 opacity: 0,
//                 pointerEvents: 'none',
//                 duration: 0.1,
//                 ease: "power2.inOut"
//               });
//             } else if (progress >= 0.4 && progress <= 0.6) {
//               gsap.to(card2Ref.current, {
//                 opacity: 1,
//                 pointerEvents: 'auto',
//                 duration: 0.1,
//                 ease: "power2.inOut"
//               });
//               gsap.to([card1Ref.current, card3Ref.current], {
//                 opacity: 0,
//                 pointerEvents: 'none',
//                 duration: 0.1,
//                 ease: "power2.inOut"
//               });
//             } else if (progress >= 0.7) {
//               gsap.to(card3Ref.current, {
//                 opacity: 1,
//                 pointerEvents: 'auto',
//                 duration: 0.1,
//                 ease: "power2.inOut"
//               });
//               gsap.to([card1Ref.current, card2Ref.current], {
//                 opacity: 0,
//                 pointerEvents: 'none',
//                 duration: 0.1,
//                 ease: "power2.inOut"
//               });
//             } else {
//               gsap.to([card1Ref.current, card2Ref.current, card3Ref.current], {
//                 opacity: 0,
//                 pointerEvents: 'none',
//                 duration: 0.1,
//                 ease: "power2.inOut"
//               });
//             }
//           }
//         }
//       });

//       tl.to(truckRef.current, {
//         x: endX,
//         y: endY,
//         ease: 'none'
//       });
//     };

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       window.removeEventListener('resize', setCanvasSize);
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
//       <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
      
//       {/* Cards */}
//       <div ref={card1Ref} className="absolute hidden md:block bg-white md:left-[10vw] left-[50%] md:top-[40%] -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 top-[40%] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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

//       <div ref={card2Ref} className="absolute bg-white right-[10vw] top-[40%] rounded-xl w-[80vw] h-[80vw] lg:w-[25vw] md:w-[28vw] md:h-[28vw] lg:h-[25vw] sm:w-[60vw] sm:h-[60vw] border border-white">
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

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { Clash } from '../../../public/fonts/fonts';

gsap.registerPlugin(ScrollTrigger);

const TruckAnimation = () => {
  const containerRef = useRef(null);
  const truckRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Hide all cards initially
    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
      opacity: 0,
      pointerEvents: 'none'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        anticipatePin: 1,
        pinSpacing: false,
        scrub: 5,
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

    // Set initial truck position and animate
    gsap.set(truckRef.current, {
      x: window.innerWidth - 500,
      y: 50
    });

    tl.to(truckRef.current, {
      x: -500,
      y: window.innerHeight - 200,
      ease: 'none'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
      <img 
        ref={truckRef}
        src="/images/sectors/truck.webp"
        alt="Truck"
        className="absolute h-[400px] w-auto object-contain"
      />
      
      {/* Cards */}
      <div ref={card1Ref} className="absolute hidden md:block bg-white md:left-[10vw] left-[50%] md:top-[40%] -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 top-[40%] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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

      <div ref={card2Ref} className="absolute bg-white right-[10vw] top-[40%] rounded-xl w-[80vw] h-[80vw] lg:w-[25vw] md:w-[28vw] md:h-[28vw] lg:h-[25vw] sm:w-[60vw] sm:h-[60vw] border border-white">
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

      <div ref={card3Ref} className="absolute bg-white right-[10vw] top-[30%] rounded-xl w-[80vw] h-[80vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[60vw] sm:h-[60vw] border border-white">
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