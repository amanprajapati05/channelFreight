// // // // // // // // // 'use client'

// // // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // // import { gsap } from 'gsap';
// // // // // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // // // // // import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
// // // // // // // // // import { Clash } from '../../../public/fonts/fonts';

// // // // // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // // // // const TruckAnimation = () => {
// // // // // // // // //   const containerRef = useRef(null);
// // // // // // // // //   const canvasRef = useRef(null);
// // // // // // // // //   const truckRef = useRef(null);
// // // // // // // // //   const imageRef = useRef(null);
// // // // // // // // //   const animationFrameRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const canvas = canvasRef.current;
// // // // // // // // //     const container = containerRef.current;
// // // // // // // // //     const ctx = canvas.getContext('2d', { alpha: false });
// // // // // // // // //     const truck = new Image();
// // // // // // // // //     truck.src = '/images/sectors/truck.webp';
// // // // // // // // //     imageRef.current = truck;

// // // // // // // // //     const setCanvasSize = () => {
// // // // // // // // //       canvas.width = window.innerWidth;
// // // // // // // // //       canvas.height = window.innerHeight;
// // // // // // // // //     };

// // // // // // // // //     const render = () => {
// // // // // // // // //       ctx.fillStyle = '#02123B';
// // // // // // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
// // // // // // // // //       if (truckRef.current && imageRef.current) {
// // // // // // // // //         ctx.drawImage(
// // // // // // // // //           imageRef.current,
// // // // // // // // //           truckRef.current.x,
// // // // // // // // //           truckRef.current.y,
// // // // // // // // //           imageRef.current.width * 1,
// // // // // // // // //           imageRef.current.height * 1
// // // // // // // // //         );
// // // // // // // // //       }
      
// // // // // // // // //       animationFrameRef.current = requestAnimationFrame(render);
// // // // // // // // //     };

// // // // // // // // //     setCanvasSize();
// // // // // // // // //     window.addEventListener('resize', setCanvasSize);

// // // // // // // // //     truck.onload = () => {
// // // // // // // // //       const startX = window.innerWidth - (truck.width * 0.8) - 50;
// // // // // // // // //       const startY = 50;
// // // // // // // // //       const endX = -500;
// // // // // // // // //       const endY = window.innerHeight - (truck.height * 0.8) + 100;

// // // // // // // // //       truckRef.current = { x: startX, y: startY };
      
// // // // // // // // //       render();

// // // // // // // // //       // Create GSAP animation
// // // // // // // // //       gsap.fromTo(
// // // // // // // // //         truckRef.current,
// // // // // // // // //         {
// // // // // // // // //           x: startX,
// // // // // // // // //           y: startY
// // // // // // // // //         },
// // // // // // // // //         {
// // // // // // // // //           x: endX,
// // // // // // // // //           y: endY,
// // // // // // // // //           ease: 'none',
// // // // // // // // //           scrollTrigger: {
// // // // // // // // //             trigger: container,
// // // // // // // // //             start: 'top top',
// // // // // // // // //             end: 'bottom top',
// // // // // // // // //             pin: true,
// // // // // // // // //             anticipatePin: 1,
// // // // // // // // //             pinSpacing: false,
// // // // // // // // //             scrub: 5,
// // // // // // // // //             markers: true,
// // // // // // // // //             invalidateOnRefresh: true,
// // // // // // // // //             onRefresh: () => {
// // // // // // // // //               truckRef.current.x = gsap.getProperty(truckRef.current, 'x');
// // // // // // // // //               truckRef.current.y = gsap.getProperty(truckRef.current, 'y');
// // // // // // // // //             },
// // // // // // // // //             onLeave: () => {
// // // // // // // // //               // Ensure the truck is fully off-screen when leaving
// // // // // // // // //               truckRef.current.x = endX;
// // // // // // // // //               truckRef.current.y = endY;
// // // // // // // // //             }
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //       );
// // // // // // // // //     };

// // // // // // // // //     return () => {
// // // // // // // // //       if (animationFrameRef.current) {
// // // // // // // // //         cancelAnimationFrame(animationFrameRef.current);
// // // // // // // // //       }
// // // // // // // // //       window.removeEventListener('resize', setCanvasSize);
// // // // // // // // //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div 
// // // // // // // // //       ref={containerRef} 
// // // // // // // // //       className="w-full  bg-[#02123b]"
// // // // // // // // //     >
// // // // // // // // //       <canvas
// // // // // // // // //         ref={canvasRef}
// // // // // // // // //         className="w-full h-full"
// // // // // // // // //       />
// // // // // // // // //     <div className='absolute left-14 rounded-xl w-[60vw] h-[60vw] lg:w-[23vw] md:w-[25vw] md:h-[25vw] lg:h-[23vw] sm:w-[40vw] sm:h-[40vw]  border border-[#02123b]'>
// // // // // // // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // // // // // //         <div className='flex flex-col gap-[1vw]'>
// // // // // // // // //         <div 
// // // // // // // // //             className={`bg-[#02123b]  w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300`}
// // // // // // // // //           >
// // // // // // // // //             <ArrowUpRight
              
// // // // // // // // //               className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222]  text-white `}
// // // // // // // // //             />
            
// // // // // // // // //           </div>
// // // // // // // // //           <div
          
// // // // // // // // //           className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}
// // // // // // // // //         >
// // // // // // // // //           Sustainability Concerns
// // // // // // // // //         </div>
       
// // // // // // // // //         </div>
// // // // // // // // //         <div
// // // // // // // // //         className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw]  z-[2] `}
// // // // // // // // //       >
// // // // // // // // //         Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // // // // // //       </div>
// // // // // // // // //         </div>
// // // // // // // // //     </div>
// // // // // // // // //     <div className='absolute left-14 rounded-xl w-[60vw] h-[60vw] lg:w-[23vw] md:w-[25vw] md:h-[25vw] lg:h-[23vw] sm:w-[40vw] sm:h-[40vw]  border border-[#02123b]'>
// // // // // // // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // // // // // //         <div className='flex flex-col gap-[1vw]'>
// // // // // // // // //         <div 
// // // // // // // // //             className={`bg-[#02123b]  w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300`}
// // // // // // // // //           >
// // // // // // // // //             <ArrowUpRight
              
// // // // // // // // //               className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222]  text-white `}
// // // // // // // // //             />
            
// // // // // // // // //           </div>
// // // // // // // // //           <div
          
// // // // // // // // //           className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}
// // // // // // // // //         >
// // // // // // // // //           Sustainability Concerns
// // // // // // // // //         </div>
       
// // // // // // // // //         </div>
// // // // // // // // //         <div
// // // // // // // // //         className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw]  z-[2] `}
// // // // // // // // //       >
// // // // // // // // //         Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // // // // // //       </div>
// // // // // // // // //         </div>
// // // // // // // // //     </div>
// // // // // // // // //     <div className='absolute left-14 rounded-xl w-[60vw] h-[60vw] lg:w-[23vw] md:w-[25vw] md:h-[25vw] lg:h-[23vw] sm:w-[40vw] sm:h-[40vw]  border border-[#02123b]'>
// // // // // // // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // // // // // //         <div className='flex flex-col gap-[1vw]'>
// // // // // // // // //         <div 
// // // // // // // // //             className={`bg-[#02123b]  w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300`}
// // // // // // // // //           >
// // // // // // // // //             <ArrowUpRight
              
// // // // // // // // //               className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222]  text-white `}
// // // // // // // // //             />
            
// // // // // // // // //           </div>
// // // // // // // // //           <div
          
// // // // // // // // //           className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}
// // // // // // // // //         >
// // // // // // // // //           Sustainability Concerns
// // // // // // // // //         </div>
       
// // // // // // // // //         </div>
// // // // // // // // //         <div
// // // // // // // // //         className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw]  z-[2] `}
// // // // // // // // //       >
// // // // // // // // //         Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // // // // // //       </div>
// // // // // // // // //         </div>
// // // // // // // // //     </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default TruckAnimation;
// // // // // // // // 'use client'

// // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // import { gsap } from 'gsap';
// // // // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // // // // import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
// // // // // // // // import { Clash } from '../../../public/fonts/fonts';

// // // // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // // // const TruckAnimation = () => {
// // // // // // // //   const containerRef = useRef(null);
// // // // // // // //   const canvasRef = useRef(null);
// // // // // // // //   const truckRef = useRef(null);
// // // // // // // //   const imageRef = useRef(null);
// // // // // // // //   const animationFrameRef = useRef(null);
// // // // // // // //   const card1Ref = useRef(null);
// // // // // // // //   const card2Ref = useRef(null);
// // // // // // // //   const card3Ref = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const canvas = canvasRef.current;
// // // // // // // //     const container = containerRef.current;
// // // // // // // //     const ctx = canvas.getContext('2d', { alpha: false });
// // // // // // // //     const truck = new Image();
// // // // // // // //     truck.src = '/images/sectors/truck.webp';
// // // // // // // //     imageRef.current = truck;

// // // // // // // //     // Initially hide all cards
// // // // // // // //     gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
// // // // // // // //       opacity: 0, 
// // // // // // // //       pointerEvents: 'none' 
// // // // // // // //     });

// // // // // // // //     const setCanvasSize = () => {
// // // // // // // //       canvas.width = window.innerWidth;
// // // // // // // //       canvas.height = window.innerHeight;
// // // // // // // //     };

// // // // // // // //     const render = () => {
// // // // // // // //       ctx.fillStyle = '#02123B';
// // // // // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
// // // // // // // //       if (truckRef.current && imageRef.current) {
// // // // // // // //         ctx.drawImage(
// // // // // // // //           imageRef.current,
// // // // // // // //           truckRef.current.x,
// // // // // // // //           truckRef.current.y,
// // // // // // // //           imageRef.current.width * 1,
// // // // // // // //           imageRef.current.height * 1
// // // // // // // //         );
// // // // // // // //       }
      
// // // // // // // //       animationFrameRef.current = requestAnimationFrame(render);
// // // // // // // //     };

// // // // // // // //     setCanvasSize();
// // // // // // // //     window.addEventListener('resize', setCanvasSize);

// // // // // // // //     truck.onload = () => {
// // // // // // // //       const startX = window.innerWidth - (truck.width * 0.8) - 50;
// // // // // // // //       const startY = 50;
// // // // // // // //       const endX = -500;
// // // // // // // //       const endY = window.innerHeight - (truck.height * 0.8) + 100;

// // // // // // // //       truckRef.current = { x: startX, y: startY };
      
// // // // // // // //       render();

// // // // // // // //       const tl = gsap.timeline({
// // // // // // // //         scrollTrigger: {
// // // // // // // //           trigger: container,
// // // // // // // //           start: 'top top',
// // // // // // // //           end: 'bottom top',
// // // // // // // //           pin: true,
// // // // // // // //           anticipatePin: 1,
// // // // // // // //           pinSpacing: false,
// // // // // // // //           scrub: 5,
// // // // // // // //           markers: true,
// // // // // // // //           invalidateOnRefresh: true,
// // // // // // // //           onUpdate: (self) => {
// // // // // // // //             const progress = self.progress;
            
// // // // // // // //             // Card 1 animation (0-33% of scroll)
// // // // // // // //             if (progress <= 0.33) {
// // // // // // // //               gsap.to(card1Ref.current, {
// // // // // // // //                 opacity: progress < 0.28 ? 1 : 0,
// // // // // // // //                 duration: 0.1
// // // // // // // //               });
// // // // // // // //             }
            
// // // // // // // //             // Card 2 animation (33-66% of scroll)
// // // // // // // //             if (progress > 0.33 && progress <= 0.66) {
// // // // // // // //               gsap.to(card2Ref.current, {
// // // // // // // //                 opacity: progress < 0.61 ? 1 : 0,
// // // // // // // //                 duration: 0.1
// // // // // // // //               });
// // // // // // // //             }
            
// // // // // // // //             // Card 3 animation (66-100% of scroll)
// // // // // // // //             if (progress > 0.66) {
// // // // // // // //               gsap.to(card3Ref.current, {
// // // // // // // //                 opacity: progress < 0.94 ? 1 : 0,
// // // // // // // //                 duration: 0.1
// // // // // // // //               });
// // // // // // // //             }
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       });

// // // // // // // //       tl.to(truckRef.current, {
// // // // // // // //         x: endX,
// // // // // // // //         y: endY,
// // // // // // // //         ease: 'none'
// // // // // // // //       });
// // // // // // // //     };

// // // // // // // //     return () => {
// // // // // // // //       if (animationFrameRef.current) {
// // // // // // // //         cancelAnimationFrame(animationFrameRef.current);
// // // // // // // //       }
// // // // // // // //       window.removeEventListener('resize', setCanvasSize);
// // // // // // // //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   const Card = ({ ref, className }) => (
// // // // // // // //     <div ref={ref} className={`absolute rounded-xl w-[60vw] h-[60vw] lg:w-[23vw] md:w-[25vw] md:h-[25vw] lg:h-[23vw] sm:w-[40vw] sm:h-[40vw] border border-white ${className}`}>
// // // // // // // //       <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // // // // //         <div className='flex flex-col gap-[1vw]'>
// // // // // // // //           <div className='bg-white w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // // // // // //             <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-[#02123b]' />
// // // // // // // //           </div>
// // // // // // // //           <div className={`${Clash.className} text-white text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // // // //             Sustainability Concerns
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //         <div className={`${Clash.className} text-white text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // // // // // //           Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <div ref={containerRef} className="w-full h-screen bg-[#02123b]">
// // // // // // // //       <canvas ref={canvasRef} className="w-full h-full" />
// // // // // // // //       <Card ref={card1Ref} className="left-14 top-1/4" />
// // // // // // // //       <Card ref={card2Ref} className="right-14 top-1/4" />
// // // // // // // //       <Card ref={card3Ref} className="left-14 bottom-1/4" />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default TruckAnimation;
// // // // // // // 'use client'

// // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // import { gsap } from 'gsap';
// // // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // // const TruckAnimation = () => {
// // // // // // //   const containerRef = useRef(null);
// // // // // // //   const canvasRef = useRef(null);
// // // // // // //   const truckRef = useRef(null);
// // // // // // //   const imageRef = useRef(null);
// // // // // // //   const animationFrameRef = useRef(null);
// // // // // // //   const card1Ref = useRef({ opacity: 0 });
// // // // // // //   const card2Ref = useRef({ opacity: 0 });
// // // // // // //   const card3Ref = useRef({ opacity: 0 });

// // // // // // //   useEffect(() => {
// // // // // // //     const canvas = canvasRef.current;
// // // // // // //     const container = containerRef.current;
// // // // // // //     const ctx = canvas.getContext('2d', { alpha: false });
// // // // // // //     const truck = new Image();
// // // // // // //     truck.src = '/images/sectors/truck.webp';
// // // // // // //     imageRef.current = truck;

// // // // // // //     const setCanvasSize = () => {
// // // // // // //       canvas.width = window.innerWidth;
// // // // // // //       canvas.height = window.innerHeight;
// // // // // // //     };

// // // // // // //     const drawCard = (x, y, opacity) => {
// // // // // // //       if (opacity <= 0) return;
      
// // // // // // //       ctx.save();
// // // // // // //       ctx.globalAlpha = opacity;
      
// // // // // // //       // Draw card background
// // // // // // //       ctx.fillStyle = '#ffffff';
// // // // // // //       ctx.strokeStyle = '#ffffff';
// // // // // // //       ctx.lineWidth = 2;
// // // // // // //       const cardWidth = 300;
// // // // // // //       const cardHeight = 200;
      
// // // // // // //       // Rounded rectangle
// // // // // // //       ctx.beginPath();
// // // // // // //       ctx.roundRect(x, y, cardWidth, cardHeight, 10);
// // // // // // //       ctx.stroke();
      
// // // // // // //       // Draw text
// // // // // // //       ctx.fillStyle = '#02123B';
// // // // // // //       ctx.font = '20px Arial';
// // // // // // //       ctx.fillText('Sustainability Concerns', x + 20, y + 40);
      
// // // // // // //       ctx.font = '16px Arial';
// // // // // // //       const text = 'Our green cold chain initiatives prioritize';
// // // // // // //       const text2 = 'energy-efficient solutions without compromising';
// // // // // // //       const text3 = 'performance.';
// // // // // // //       ctx.fillText(text, x + 20, y + 100);
// // // // // // //       ctx.fillText(text2, x + 20, y + 120);
// // // // // // //       ctx.fillText(text3, x + 20, y + 140);
      
// // // // // // //       ctx.restore();
// // // // // // //     };

// // // // // // //     const render = () => {
// // // // // // //       ctx.fillStyle = '#02123B';
// // // // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
// // // // // // //       if (truckRef.current && imageRef.current) {
// // // // // // //         ctx.drawImage(
// // // // // // //           imageRef.current,
// // // // // // //           truckRef.current.x,
// // // // // // //           truckRef.current.y,
// // // // // // //           imageRef.current.width * 1,
// // // // // // //           imageRef.current.height * 1
// // // // // // //         );
        
// // // // // // //         // Draw cards with current opacity
// // // // // // //         drawCard(100, 100, card1Ref.current.opacity);
// // // // // // //         drawCard(canvas.width - 400, canvas.height/2 - 100, card2Ref.current.opacity);
// // // // // // //         drawCard(100, canvas.height - 300, card3Ref.current.opacity);
// // // // // // //       }
      
// // // // // // //       animationFrameRef.current = requestAnimationFrame(render);
// // // // // // //     };

// // // // // // //     setCanvasSize();
// // // // // // //     window.addEventListener('resize', setCanvasSize);

// // // // // // //     truck.onload = () => {
// // // // // // //       const startX = window.innerWidth - (truck.width * 0.8) - 50;
// // // // // // //       const startY = 50;
// // // // // // //       const endX = -500;
// // // // // // //       const endY = window.innerHeight - (truck.height * 0.8) + 100;

// // // // // // //       truckRef.current = { x: startX, y: startY };
      
// // // // // // //       render();

// // // // // // //       // Create GSAP animation
// // // // // // //       const tl = gsap.timeline({
// // // // // // //         scrollTrigger: {
// // // // // // //           trigger: container,
// // // // // // //           start: 'top top',
// // // // // // //           end: 'bottom top',
// // // // // // //           pin: true,
// // // // // // //           anticipatePin: 1,
// // // // // // //           pinSpacing: false,
// // // // // // //           scrub: 5,
// // // // // // //           markers: true,
// // // // // // //           invalidateOnRefresh: true,
// // // // // // //           onUpdate: (self) => {
// // // // // // //             const progress = self.progress;
            
// // // // // // //             // Card 1 animation (0-33% of scroll)
// // // // // // //             card1Ref.current.opacity = progress <= 0.33 
// // // // // // //               ? gsap.utils.clamp(0, 1, progress * 3)
// // // // // // //               : gsap.utils.clamp(0, 1, 1 - ((progress - 0.33) * 3));
            
// // // // // // //             // Card 2 animation (33-66% of scroll)
// // // // // // //             card2Ref.current.opacity = (progress > 0.33 && progress <= 0.66)
// // // // // // //               ? gsap.utils.clamp(0, 1, (progress - 0.33) * 3)
// // // // // // //               : gsap.utils.clamp(0, 1, 1 - ((progress - 0.66) * 3));
            
// // // // // // //             // Card 3 animation (66-100% of scroll)
// // // // // // //             card3Ref.current.opacity = progress > 0.66
// // // // // // //               ? gsap.utils.clamp(0, 1, (progress - 0.66) * 3)
// // // // // // //               : 0;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       });

// // // // // // //       tl.to(truckRef.current, {
// // // // // // //         x: endX,
// // // // // // //         y: endY,
// // // // // // //         ease: 'none'
// // // // // // //       });
// // // // // // //     };

// // // // // // //     return () => {
// // // // // // //       if (animationFrameRef.current) {
// // // // // // //         cancelAnimationFrame(animationFrameRef.current);
// // // // // // //       }
// // // // // // //       window.removeEventListener('resize', setCanvasSize);
// // // // // // //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div 
// // // // // // //       ref={containerRef} 
// // // // // // //       className="w-full h-screen bg-[#02123b]"
// // // // // // //     >
// // // // // // //       <canvas
// // // // // // //         ref={canvasRef}
// // // // // // //         className="w-full h-full"
// // // // // // //       />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default TruckAnimation;
// // // // // // // 'use client'

// // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // import { gsap } from 'gsap';
// // // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // // // import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
// // // // // // // import { Clash } from '../../../public/fonts/fonts';

// // // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // // const TruckAnimation = () => {
// // // // // // //   const containerRef = useRef(null);
// // // // // // //   const canvasRef = useRef(null);
// // // // // // //   const truckRef = useRef(null);
// // // // // // //   const imageRef = useRef(null);
// // // // // // //   const animationFrameRef = useRef(null);
// // // // // // //   const card1Ref = useRef(null);
// // // // // // //   const card2Ref = useRef(null);
// // // // // // //   const card3Ref = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const canvas = canvasRef.current;
// // // // // // //     const container = containerRef.current;
// // // // // // //     const ctx = canvas.getContext('2d', { alpha: false });
// // // // // // //     const truck = new Image();
// // // // // // //     truck.src = '/images/sectors/truck.webp';
// // // // // // //     imageRef.current = truck;

// // // // // // //     // Hide all cards initially
// // // // // // //     gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
// // // // // // //       opacity: 0,
// // // // // // //       pointerEvents: 'none'
// // // // // // //     });

// // // // // // //     const setCanvasSize = () => {
// // // // // // //       canvas.width = window.innerWidth;
// // // // // // //       canvas.height = window.innerHeight;
// // // // // // //     };

// // // // // // //     const render = () => {
// // // // // // //       ctx.fillStyle = '#02123B';
// // // // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
// // // // // // //       if (truckRef.current && imageRef.current) {
// // // // // // //         ctx.drawImage(
// // // // // // //           imageRef.current,
// // // // // // //           truckRef.current.x,
// // // // // // //           truckRef.current.y,
// // // // // // //           imageRef.current.width * 1,
// // // // // // //           imageRef.current.height * 1
// // // // // // //         );
// // // // // // //       }
      
// // // // // // //       animationFrameRef.current = requestAnimationFrame(render);
// // // // // // //     };

// // // // // // //     setCanvasSize();
// // // // // // //     window.addEventListener('resize', setCanvasSize);

// // // // // // //     truck.onload = () => {
// // // // // // //       const startX = window.innerWidth - (truck.width * 0.8) - 50;
// // // // // // //       const startY = 50;
// // // // // // //       const endX = -500;
// // // // // // //       const endY = window.innerHeight - (truck.height * 0.8) + 100;

// // // // // // //       truckRef.current = { x: startX, y: startY };
      
// // // // // // //       render();

// // // // // // //       const tl = gsap.timeline({
// // // // // // //         scrollTrigger: {
// // // // // // //           trigger: container,
// // // // // // //           start: 'top top',
// // // // // // //           end: 'bottom top',
// // // // // // //           pin: true,
// // // // // // //           anticipatePin: 1,
// // // // // // //           pinSpacing: false,
// // // // // // //           scrub: 5,
// // // // // // //           markers: true,
// // // // // // //           invalidateOnRefresh: true,
// // // // // // //           onUpdate: (self) => {
// // // // // // //             const progress = self.progress;
            
// // // // // // //             // Card 1 animation (0-33% of scroll)
// // // // // // //             if (progress <= 0.33) {
// // // // // // //               gsap.to(card1Ref.current, {
// // // // // // //                 opacity: progress < 0.28 ? 1 : 0,
// // // // // // //                 duration: 0.1,
// // // // // // //                 ease: 'power1.inOut'
// // // // // // //               });
// // // // // // //             }
            
// // // // // // //             // Card 2 animation (33-66% of scroll)
// // // // // // //             if (progress > 0.33 && progress <= 0.66) {
// // // // // // //               gsap.to(card2Ref.current, {
// // // // // // //                 opacity: progress < 0.61 ? 1 : 0,
// // // // // // //                 duration: 0.1,
// // // // // // //                 ease: 'power1.inOut'
// // // // // // //               });
// // // // // // //             }
            
// // // // // // //             // Card 3 animation (66-100% of scroll)
// // // // // // //             if (progress > 0.66) {
// // // // // // //               gsap.to(card3Ref.current, {
// // // // // // //                 opacity: progress < 0.94 ? 1 : 0,
// // // // // // //                 duration: 0.1,
// // // // // // //                 ease: 'power1.inOut'
// // // // // // //               });
// // // // // // //             }
// // // // // // //           }
// // // // // // //         }
// // // // // // //       });

// // // // // // //       tl.to(truckRef.current, {
// // // // // // //         x: endX,
// // // // // // //         y: endY,
// // // // // // //         ease: 'none'
// // // // // // //       });
// // // // // // //     };

// // // // // // //     return () => {
// // // // // // //       if (animationFrameRef.current) {
// // // // // // //         cancelAnimationFrame(animationFrameRef.current);
// // // // // // //       }
// // // // // // //       window.removeEventListener('resize', setCanvasSize);
// // // // // // //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
// // // // // // //       <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
      
// // // // // // //       {/* Cards using your exact design */}
// // // // // //     //   <div ref={card1Ref} className="absolute bg-white left-[10vw] top-[25vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // // // //     //     <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // // //     //       <div className='flex flex-col gap-[1vw]'>
// // // // // //     //         <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // // // //     //           <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
// // // // // //     //         </div>
// // // // // //     //         <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // //     //           Sustainability Concerns
// // // // // //     //         </div>
// // // // // //     //       </div>
// // // // // //     //       <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // // // //     //         Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // // //     //       </div>
// // // // // //     //     </div>
// // // // // //     //   </div>

// // // // // //     //   <div ref={card2Ref} className="absolute bg-white right-[10vw] top-[30vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[28vw] md:h-[28vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // // // //     //     <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // // //     //       <div className='flex flex-col gap-[1vw]'>
// // // // // //     //         <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // // // //     //           <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
// // // // // //     //         </div>
// // // // // //     //         <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // //     //           Sustainability Concerns
// // // // // //     //         </div>
// // // // // //     //       </div>
// // // // // //     //       <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // // // //     //         Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // // //     //       </div>
// // // // // //     //     </div>
// // // // // //     //   </div>

// // // // // //     //   <div ref={card3Ref} className="absolute bg-white right-[10vw] top-[20vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // // // //     //     <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // // //     //       <div className='flex flex-col gap-[1vw]'>
// // // // // //     //         <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // // // //     //           <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
// // // // // //     //         </div>
// // // // // //     //         <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // //     //           Sustainability Concerns
// // // // // //     //         </div>
// // // // // //     //       </div>
// // // // // //     //       <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // // // //     //         Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // // //     //       </div>
// // // // // //     //     </div>
// // // // // //     //   </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default TruckAnimation;
// // // // // // 'use client'

// // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // import { gsap } from 'gsap';
// // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // // import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
// // // // // // import { Clash } from '../../../public/fonts/fonts';

// // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // const TruckAnimation = () => {
// // // // // //   const containerRef = useRef(null);
// // // // // //   const canvasRef = useRef(null);
// // // // // //   const truckRef = useRef(null);
// // // // // //   const imageRef = useRef(null);
// // // // // //   const animationFrameRef = useRef(null);
// // // // // //   const card1Ref = useRef(null);
// // // // // //   const card2Ref = useRef(null);
// // // // // //   const card3Ref = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const canvas = canvasRef.current;
// // // // // //     const container = containerRef.current;
// // // // // //     const ctx = canvas.getContext('2d', { alpha: false });
// // // // // //     const truck = new Image();
// // // // // //     truck.src = '/images/sectors/truck.webp';
// // // // // //     imageRef.current = truck;

// // // // // //     // Hide all cards initially
// // // // // //     gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
// // // // // //       opacity: 0,
// // // // // //       pointerEvents: 'none'
// // // // // //     });

// // // // // //     const setCanvasSize = () => {
// // // // // //       canvas.width = window.innerWidth;
// // // // // //       canvas.height = window.innerHeight;
// // // // // //     };

// // // // // //     const render = () => {
// // // // // //       ctx.fillStyle = '#02123B';
// // // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
// // // // // //       if (truckRef.current && imageRef.current) {
// // // // // //         ctx.drawImage(
// // // // // //           imageRef.current,
// // // // // //           truckRef.current.x,
// // // // // //           truckRef.current.y,
// // // // // //           imageRef.current.width * 1,
// // // // // //           imageRef.current.height * 1
// // // // // //         );
// // // // // //       }
      
// // // // // //       animationFrameRef.current = requestAnimationFrame(render);
// // // // // //     };

// // // // // //     setCanvasSize();
// // // // // //     window.addEventListener('resize', setCanvasSize);

// // // // // //     truck.onload = () => {
// // // // // //       const startX = window.innerWidth - (truck.width * 0.8) - 50;
// // // // // //       const startY = 50;
// // // // // //       const endX = -500;
// // // // // //       const endY = window.innerHeight - (truck.height * 0.8) + 100;

// // // // // //       truckRef.current = { x: startX, y: startY };
      
// // // // // //       render();

// // // // // //       const tl = gsap.timeline({
// // // // // //         scrollTrigger: {
// // // // // //           trigger: container,
// // // // // //           start: 'top top',
// // // // // //           end: 'bottom top',
// // // // // //           pin: true,
// // // // // //           anticipatePin: 1,
// // // // // //           pinSpacing: false,
// // // // // //           scrub: 5,
// // // // // //           markers: true,
// // // // // //           invalidateOnRefresh: true,
// // // // // //           onUpdate: (self) => {
// // // // // //             const progress = self.progress;
            
// // // // // //             // Card 1 animation (0-33% of scroll)
// // // // // //             const card1Opacity = (progress > 0.30 && progress <= 0.33) 
// // // // // //               ? gsap.utils.clamp(0, 1, progress * 3) // Fade in
// // // // // //               : gsap.utils.clamp(0, 1, 1 - ((progress - 0.33) * 3)); // Fade out
            
// // // // // //             gsap.set(card1Ref.current, { opacity: card1Opacity });
            
// // // // // //             // Card 2 animation (33-66% of scroll)
// // // // // //             const card2Opacity = (progress > 0.33 && progress <= 0.66)
// // // // // //               ? gsap.utils.clamp(0, 1, (progress - 0.33) * 3) // Fade in
// // // // // //               : progress <= 0.33 ? 0 : gsap.utils.clamp(0, 1, 1 - ((progress - 0.66) * 3)); // Fade out
            
// // // // // //             gsap.set(card2Ref.current, { opacity: card2Opacity });
            
// // // // // //             // Card 3 animation (66-100% of scroll)
// // // // // //             const card3Opacity = progress > 0.66
// // // // // //               ? gsap.utils.clamp(0, 1, (progress - 0.66) * 3) // Fade in
// // // // // //               : 0;
            
// // // // // //             gsap.set(card3Ref.current, { opacity: card3Opacity });
// // // // // //           }
// // // // // //         }
// // // // // //       });

// // // // // //       tl.to(truckRef.current, {
// // // // // //         x: endX,
// // // // // //         y: endY,
// // // // // //         ease: 'none'
// // // // // //       });
// // // // // //     };

// // // // // //     return () => {
// // // // // //       if (animationFrameRef.current) {
// // // // // //         cancelAnimationFrame(animationFrameRef.current);
// // // // // //       }
// // // // // //       window.removeEventListener('resize', setCanvasSize);
// // // // // //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // // // //     };
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
// // // // // //       <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
      
// // // // // //       {/* Cards using your exact design */}
// // // // // //       <div ref={card1Ref} className="absolute bg-white left-[10vw] top-[40%] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // // //           <div className='flex flex-col gap-[1vw]'>
// // // // // //             <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // // // //               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
// // // // // //             </div>
// // // // // //             <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // //               Sustainability Concerns
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // // // //             Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div ref={card2Ref} className="absolute bg-white right-[10vw] top-[30vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[28vw] md:h-[28vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // // //           <div className='flex flex-col gap-[1vw]'>
// // // // // //             <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // // // //               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
// // // // // //             </div>
// // // // // //             <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // //               Sustainability Concerns
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // // // //             Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div ref={card3Ref} className="absolute bg-white right-[10vw] top-[20vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // // //           <div className='flex flex-col gap-[1vw]'>
// // // // // //             <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // // // //               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
// // // // // //             </div>
// // // // // //             <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // //               Sustainability Concerns
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // // // //             Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default TruckAnimation;
// // // // // 'use client'

// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import { gsap } from 'gsap';
// // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
// // // // // import { Clash } from '../../../public/fonts/fonts';

// // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // const TruckAnimation = () => {
// // // // //   const containerRef = useRef(null);
// // // // //   const canvasRef = useRef(null);
// // // // //   const truckRef = useRef(null);
// // // // //   const imageRef = useRef(null);
// // // // //   const animationFrameRef = useRef(null);
// // // // //   const card1Ref = useRef(null);
// // // // //   const card2Ref = useRef(null);
// // // // //   const card3Ref = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const canvas = canvasRef.current;
// // // // //     const container = containerRef.current;
// // // // //     const ctx = canvas.getContext('2d', { alpha: false });
// // // // //     const truck = new Image();
// // // // //     truck.src = '/images/sectors/truck.webp';
// // // // //     imageRef.current = truck;

// // // // //     // Hide all cards initially
// // // // //     gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
// // // // //       opacity: 0,
// // // // //       pointerEvents: 'none'
// // // // //     });

// // // // //     const setCanvasSize = () => {
// // // // //       canvas.width = window.innerWidth;
// // // // //       canvas.height = window.innerHeight;
// // // // //     };

// // // // //     const render = () => {
// // // // //       ctx.fillStyle = '#02123B';
// // // // //       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
// // // // //       if (truckRef.current && imageRef.current) {
// // // // //         ctx.drawImage(
// // // // //           imageRef.current,
// // // // //           truckRef.current.x,
// // // // //           truckRef.current.y,
// // // // //           imageRef.current.width * 1,
// // // // //           imageRef.current.height * 1
// // // // //         );
// // // // //       }
      
// // // // //       animationFrameRef.current = requestAnimationFrame(render);
// // // // //     };

// // // // //     setCanvasSize();
// // // // //     window.addEventListener('resize', setCanvasSize);

// // // // //     truck.onload = () => {
// // // // //       const startX = window.innerWidth - (truck.width * 0.8) - 50;
// // // // //       const startY = 50;
// // // // //       const endX = -500;
// // // // //       const endY = window.innerHeight - (truck.height * 0.8) + 100;

// // // // //       truckRef.current = { x: startX, y: startY };
      
// // // // //       render();

// // // // //       const tl = gsap.timeline({
// // // // //         scrollTrigger: {
// // // // //           trigger: container,
// // // // //           start: 'top top',
// // // // //           end: 'bottom top',
// // // // //           pin: true,
// // // // //           anticipatePin: 1,
// // // // //           pinSpacing: false,
// // // // //           scrub: 5,
// // // // //           markers: true,
// // // // //           invalidateOnRefresh: true,
// // // // //           onUpdate: (self) => {
// // // // //             const progress = self.progress;
            
// // // // //             // Card 1 animation (0-33% of scroll)
// // // // //             const card1Opacity = progress <= 0.33 
// // // // //               ? gsap.utils.clamp(0, 1, progress * 3) // Fade in
// // // // //               : gsap.utils.clamp(0, 1, 1 - ((progress - 0.33) * 3)); // Fade out
            
// // // // //             gsap.set(card1Ref.current, { opacity: card1Opacity });
            
// // // // //             // Card 2 animation (33-66% of scroll)
// // // // //             const card2Opacity = (progress > 0.33 && progress <= 0.66)
// // // // //               ? gsap.utils.clamp(0, 1, (progress - 0.33) * 3) // Fade in
// // // // //               : progress <= 0.33 ? 0 : gsap.utils.clamp(0, 1, 1 - ((progress - 0.66) * 3)); // Fade out
            
// // // // //             gsap.set(card2Ref.current, { opacity: card2Opacity });
            
// // // // //             // Card 3 animation (66-100% of scroll)
// // // // //             const card3Opacity = progress > 0.66
// // // // //               ? gsap.utils.clamp(0, 1, (progress - 0.66) * 3) // Fade in
// // // // //               : 0;
            
// // // // //             gsap.set(card3Ref.current, { opacity: card3Opacity });
// // // // //           }
// // // // //         }
// // // // //       });

// // // // //       tl.to(truckRef.current, {
// // // // //         x: endX,
// // // // //         y: endY,
// // // // //         ease: 'none'
// // // // //       });
// // // // //     };

// // // // //     return () => {
// // // // //       if (animationFrameRef.current) {
// // // // //         cancelAnimationFrame(animationFrameRef.current);
// // // // //       }
// // // // //       window.removeEventListener('resize', setCanvasSize);
// // // // //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
// // // // //       <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
      
// // // // //       {/* Cards using your exact design */}
// // // // //       <div ref={card1Ref} className="absolute left-14 top-1/4 rounded-xl w-[60vw] h-[60vw] lg:w-[23vw] md:w-[25vw] md:h-[25vw] lg:h-[23vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // //           <div className='flex flex-col gap-[1vw]'>
// // // // //             <div className='bg-white w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // // //               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-[#02123b]' />
// // // // //             </div>
// // // // //             <div className={`${Clash.className} text-white text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // //               Sustainability Concerns
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className={`${Clash.className} text-white text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // // //             Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div ref={card2Ref} className="absolute right-14 top-1/4 rounded-xl w-[60vw] h-[60vw] lg:w-[23vw] md:w-[25vw] md:h-[25vw] lg:h-[23vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // //           <div className='flex flex-col gap-[1vw]'>
// // // // //             <div className='bg-white w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // // //               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-[#02123b]' />
// // // // //             </div>
// // // // //             <div className={`${Clash.className} text-white text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // //               Sustainability Concerns
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className={`${Clash.className} text-white text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // // //             Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div ref={card3Ref} className="absolute left-14 bottom-1/4 rounded-xl w-[60vw] h-[60vw] lg:w-[23vw] md:w-[25vw] md:h-[25vw] lg:h-[23vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // // //           <div className='flex flex-col gap-[1vw]'>
// // // // //             <div className='bg-white w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // // //               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-[#02123b]' />
// // // // //             </div>
// // // // //             <div className={`${Clash.className} text-white text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // //               Sustainability Concerns
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className={`${Clash.className} text-white text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // // //             Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };


// // // // // export default TruckAnimation;
// // // // 'use client'

// // // // import React, { useEffect, useRef } from 'react';
// // // // import { gsap } from 'gsap';
// // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
// // // // import { Clash } from '../../../public/fonts/fonts';

// // // // gsap.registerPlugin(ScrollTrigger);

// // // // const TruckAnimation = () => {
// // // //   const containerRef = useRef(null);
// // // //   const canvasRef = useRef(null);
// // // //   const truckRef = useRef(null);
// // // //   const imageRef = useRef(null);
// // // //   const animationFrameRef = useRef(null);
// // // //   const card1Ref = useRef(null);
// // // //   const card2Ref = useRef(null);
// // // //   const card3Ref = useRef(null);

// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current;
// // // //     const container = containerRef.current;
// // // //     const ctx = canvas.getContext('2d', { alpha: false });
// // // //     const truck = new Image();
// // // //     truck.src = '/images/sectors/truck.webp';
// // // //     imageRef.current = truck;

// // // //     // Hide all cards initially
// // // //     gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
// // // //       opacity: 0,
// // // //       pointerEvents: 'none'
// // // //     });

// // // //     const setCanvasSize = () => {
// // // //       canvas.width = window.innerWidth;
// // // //       canvas.height = window.innerHeight;
// // // //     };

// // // //     const render = () => {
// // // //       ctx.fillStyle = '#02123B';
// // // //       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
// // // //       if (truckRef.current && imageRef.current) {
// // // //         ctx.drawImage(
// // // //           imageRef.current,
// // // //           truckRef.current.x,
// // // //           truckRef.current.y,
// // // //           imageRef.current.width * 1,
// // // //           imageRef.current.height * 1
// // // //         );
// // // //       }
      
// // // //       animationFrameRef.current = requestAnimationFrame(render);
// // // //     };

// // // //     setCanvasSize();
// // // //     window.addEventListener('resize', setCanvasSize);

// // // //     truck.onload = () => {
// // // //       const startX = window.innerWidth - (truck.width * 0.8) - 50;
// // // //       const startY = 50;
// // // //       const endX = -500;
// // // //       const endY = window.innerHeight - (truck.height * 0.8) + 100;

// // // //       truckRef.current = { x: startX, y: startY };
      
// // // //       render();

// // // //       const tl = gsap.timeline({
// // // //         scrollTrigger: {
// // // //           trigger: container,
// // // //           start: 'top top',
// // // //           end: 'bottom top',
// // // //           pin: true,
// // // //           anticipatePin: 1,
// // // //           pinSpacing: false,
// // // //           scrub: 5,
// // // //           markers: true,
// // // //           invalidateOnRefresh: true,
// // // //           onUpdate: (self) => {
// // // //             const progress = self.progress;
            
// // // //             // Card 1 (0-30%)
// // // //             if (progress <= 0.3) {
// // // //               gsap.set(card1Ref.current, { opacity: 1 });
// // // //               gsap.set([card2Ref.current, card3Ref.current], { opacity: 0 });
// // // //             }
// // // //             // Card 2 (35-65%)
// // // //             else if (progress > 0.35 && progress <= 0.65) {
// // // //               gsap.set(card2Ref.current, { opacity: 1 });
// // // //               gsap.set([card1Ref.current, card3Ref.current], { opacity: 0 });
// // // //             }
// // // //             // Card 3 (70-100%)
// // // //             else if (progress > 0.7) {
// // // //               gsap.set(card3Ref.current, { opacity: 1 });
// // // //               gsap.set([card1Ref.current, card2Ref.current], { opacity: 0 });
// // // //             }
// // // //             // Gaps between cards (all cards hidden)
// // // //             else {
// // // //               gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { opacity: 0 });
// // // //             }
// // // //           }
// // // //         }
// // // //       });

// // // //       tl.to(truckRef.current, {
// // // //         x: endX,
// // // //         y: endY,
// // // //         ease: 'none'
// // // //       });
// // // //     };

// // // //     return () => {
// // // //       if (animationFrameRef.current) {
// // // //         cancelAnimationFrame(animationFrameRef.current);
// // // //       }
// // // //       window.removeEventListener('resize', setCanvasSize);
// // // //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
// // // //       <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
      
// // // //       {/* Cards using your exact design */}
// // // //       <div ref={card1Ref} className="absolute bg-white left-[10vw] top-[40%] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // //           <div className='flex flex-col gap-[1vw]'>
// // // //             <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // //               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
// // // //             </div>
// // // //             <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // //               Sustainability Concerns
// // // //             </div>
// // // //           </div>
// // // //           <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // //             Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div ref={card2Ref} className="absolute bg-white right-[10vw] top-[40%] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[28vw] md:h-[28vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // //           <div className='flex flex-col gap-[1vw]'>
// // // //             <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // //               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
// // // //             </div>
// // // //             <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // //               Sustainability Concerns
// // // //             </div>
// // // //           </div>
// // // //           <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // //             Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div ref={card3Ref} className="absolute bg-white right-[10vw] top-[30%]  rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
// // // //         <div className='flex flex-col justify-between h-full md:py-[1.2vw] px-[6vw] py-[6vw] md:px-[1.6vw]'>
// // // //           <div className='flex flex-col gap-[1vw]'>
// // // //             <div className='bg-[#02123b] w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300'>
// // // //               <ArrowUpRight className='h-12 p-2 w-12 md:w-10 md:h-10 z-[222] text-white' />
// // // //             </div>
// // // //             <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // //               Sustainability Concerns
// // // //             </div>
// // // //           </div>
// // // //           <div className={`${Clash.className} text-[#02123b] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] z-[2]`}>
// // // //             Our green cold chain initiatives prioritize energy-efficient solutions without compromising performance.
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default TruckAnimation;
'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { Clash } from '../../../public/fonts/fonts';

gsap.registerPlugin(ScrollTrigger);

const TruckAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const truckRef = useRef(null);
  const imageRef = useRef(null);
  const animationFrameRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    const truck = new Image();
    truck.src = '/images/sectors/truck.webp';
    imageRef.current = truck;

    // Hide all cards initially
    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
      opacity: 0,
      pointerEvents: 'none'
    });

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const render = () => {
      ctx.fillStyle = '#02123B';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      if (truckRef.current && imageRef.current) {
        ctx.drawImage(
          imageRef.current,
          truckRef.current.x,
          truckRef.current.y,
          imageRef.current.width * 1,
          imageRef.current.height * 1
        );
      }
      
      animationFrameRef.current = requestAnimationFrame(render);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    truck.onload = () => {
      const startX = window.innerWidth - (truck.width * 0.8) - 50;
      const startY = 50;
      const endX = -500;
      const endY = window.innerHeight - (truck.height * 0.8) + 100;

      truckRef.current = { x: startX, y: startY };
      
      render();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          pin: true,
          anticipatePin: 1,
          pinSpacing: false,
          scrub: 5,
          markers: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Card 1 (30-35%)
            if (progress >= 0.30 && progress <= 0.35) {
              gsap.to(card1Ref.current, { 
                opacity: progress <= 0.33 ? 1 : 0, 
                duration: 0.5,
                ease: "power2.inOut" 
              });
            }
            
            // Card 2 (40-60%)
            if (progress >= 0.40 && progress <= 0.60) {
              gsap.to(card2Ref.current, {
                opacity: progress <= 0.57 ? 1 : 0,
                duration: 0.5,
                ease: "power2.inOut"
              });
            }
            
            // Card 3 (75-100%)
            if (progress >= 0.75) {
              gsap.to(card3Ref.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut"
              });
            }
            
            // Ensure cards are hidden outside their ranges
            if (progress < 0.30 || (progress > 0.35 && progress < 0.40)) {
              gsap.to(card1Ref.current, { opacity: 0, duration: 0.5 });
            }
            if (progress < 0.40 || progress > 0.60) {
              gsap.to(card2Ref.current, { opacity: 0, duration: 0.5 });
            }
            if (progress < 0.75) {
              gsap.to(card3Ref.current, { opacity: 0, duration: 0.5 });
            }
          }
        }
      });

      tl.to(truckRef.current, {
        x: endX,
        y: endY,
        ease: 'none'
      });
    };

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', setCanvasSize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
      <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
      
      {/* Cards using your exact design */}
      <div ref={card1Ref} className="absolute bg-white left-[10vw] top-[40%] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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

      <div ref={card2Ref} className="absolute bg-white right-[10vw] top-[30vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[28vw] md:h-[28vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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

      <div ref={card3Ref} className="absolute bg-white right-[10vw] top-[20vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     const ctx = canvas.getContext('2d', { alpha: false });
//     const truck = new Image();
//     truck.src = '/images/sectors/truck.webp';
//     imageRef.current = truck;

//     // Hide all cards initially
//     gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
//       opacity: 0,
//       pointerEvents: 'none'
//     });

//     // Function to toggle body scroll
//     const toggleScroll = (enable) => {
//       document.body.style.overflow = enable ? 'auto' : 'hidden';
//     };

//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const render = () => {
//       ctx.fillStyle = '#02123B';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       if (truckRef.current && imageRef.current) {
//         ctx.drawImage(
//           imageRef.current,
//           truckRef.current.x,
//           truckRef.current.y,
//           imageRef.current.width * 1,
//           imageRef.current.height * 1
//         );
//       }
      
//       animationFrameRef.current = requestAnimationFrame(render);
//     };

//     setCanvasSize();
//     window.addEventListener('resize', setCanvasSize);

//     truck.onload = () => {
//       const startX = window.innerWidth - (truck.width * 0.8) - 50;
//       const startY = 50;
//       const endX = -500;
//       const endY = window.innerHeight - (truck.height * 0.8) + 100;

//       truckRef.current = { x: startX, y: startY };
      
//       render();

//       let lastProgress = 0;
      
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: container,
//           start: 'top top',
//           end: 'bottom top',
//           pin: true,
//           anticipatePin: 1,
//           pinSpacing: false,
//           scrub: true,
//           snap: {
//             snapTo: [0.3, 0.4, 0.75], // Snap points for each card
//             duration: { min: 0.2, max: 0.3 },
//             delay: 0
//           },
//           markers: true,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
            
//             // Card 1 (30-35%)
//             if (progress >= 0.30 && progress <= 0.35) {
//               if (lastProgress < 0.30 && progress >= 0.30) {
//                 toggleScroll(false);
//                 gsap.to(card1Ref.current, {
//                   opacity: 1,
//                   duration: 0.5,
//                   ease: "power2.inOut",
//                   onComplete: () => {
//                     setTimeout(() => {
//                       toggleScroll(true);
//                     }, 1000);
//                   }
//                 });
//               } else if (progress > 0.33) {
//                 gsap.to(card1Ref.current, {
//                   opacity: 0,
//                   duration: 0.5,
//                   ease: "power2.inOut"
//                 });
//               }
//             }
            
//             // Card 2 (40-60%)
//             if (progress >= 0.40 && progress <= 0.60) {
//               if (lastProgress < 0.40 && progress >= 0.40) {
//                 toggleScroll(false);
//                 gsap.to(card2Ref.current, {
//                   opacity: 1,
//                   duration: 0.5,
//                   ease: "power2.inOut",
//                   onComplete: () => {
//                     setTimeout(() => {
//                       toggleScroll(true);
//                     }, 1000);
//                   }
//                 });
//               } else if (progress > 0.57) {
//                 gsap.to(card2Ref.current, {
//                   opacity: 0,
//                   duration: 0.5,
//                   ease: "power2.inOut"
//                 });
//               }
//             }
            
//             // Card 3 (75-100%)
//             if (progress >= 0.75) {
//               if (lastProgress < 0.75 && progress >= 0.75) {
//                 toggleScroll(false);
//                 gsap.to(card3Ref.current, {
//                   opacity: 1,
//                   duration: 0.5,
//                   ease: "power2.inOut",
//                   onComplete: () => {
//                     setTimeout(() => {
//                       toggleScroll(true);
//                     }, 1000);
//                   }
//                 });
//               }
//             }
            
//             // Hide cards when out of range
//             if (progress < 0.30 || (progress > 0.35 && progress < 0.40)) {
//               gsap.to(card1Ref.current, { opacity: 0, duration: 0.5 });
//             }
//             if (progress < 0.40 || progress > 0.60) {
//               gsap.to(card2Ref.current, { opacity: 0, duration: 0.5 });
//             }
//             if (progress < 0.75) {
//               gsap.to(card3Ref.current, { opacity: 0, duration: 0.5 });
//             }
            
//             lastProgress = progress;
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
//       toggleScroll(true); // Ensure scroll is enabled when component unmounts
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
//       <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
      
//       {/* Cards using your exact design */}
//       <div ref={card1Ref} className="absolute bg-white left-[10vw] top-[40%] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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

//       <div ref={card2Ref} className="absolute bg-white right-[10vw] top-[30vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[28vw] md:h-[28vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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

//       <div ref={card3Ref} className="absolute bg-white right-[10vw] top-[20vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     const ctx = canvas.getContext('2d', { alpha: false });
//     const truck = new Image();
//     truck.src = '/images/sectors/truck.webp';
//     imageRef.current = truck;

//     // Hide all cards initially
//     gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { 
//       opacity: 0,
//       pointerEvents: 'none'
//     });

//     // Function to toggle body scroll
//     const toggleScroll = (enable) => {
//       document.body.style.overflow = enable ? 'auto' : 'hidden';
//     };

//     const setCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const render = () => {
//       ctx.fillStyle = '#02123B';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       if (truckRef.current && imageRef.current) {
//         ctx.drawImage(
//           imageRef.current,
//           truckRef.current.x,
//           truckRef.current.y,
//           imageRef.current.width * 1,
//           imageRef.current.height * 1
//         );
//       }
      
//       animationFrameRef.current = requestAnimationFrame(render);
//     };

//     setCanvasSize();
//     window.addEventListener('resize', setCanvasSize);

//     truck.onload = () => {
//       const startX = window.innerWidth - (truck.width * 0.8) - 50;
//       const startY = 50;
//       const endX = -500;
//       const endY = window.innerHeight - (truck.height * 0.8) + 100;

//       truckRef.current = { x: startX, y: startY };
      
//       render();

//       let lastProgress = 0;
      
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: container,
//           start: 'top top',
//           end: 'bottom top',
//           pin: true,
//           anticipatePin: 1,
//           pinSpacing: false,
//           scrub: 1.5,
//           snap: {
//             snapTo: [0.3, 0.4, 0.75],
//             duration: { min: 0.5, max: 1 },
//             ease: "power2.inOut",
//             delay: 0
//           },
//           markers: true,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
            
//             // Card 1 (30-35%)
//             if (progress >= 0.30 && progress <= 0.35) {
//               if (lastProgress < 0.30 && progress >= 0.30) {
//                 toggleScroll(false);
//                 gsap.to(card1Ref.current, {
//                   opacity: 1,
//                   duration: 1,
//                   ease: "power2.inOut",
//                   onComplete: () => {
//                     setTimeout(() => {
//                       toggleScroll(true);
//                     }, 2000);
//                   }
//                 });
//               } else if (progress > 0.33) {
//                 gsap.to(card1Ref.current, {
//                   opacity: 0,
//                   duration: 1,
//                   ease: "power2.inOut"
//                 });
//               }
//             }
            
//             // Card 2 (40-60%)
//             if (progress >= 0.40 && progress <= 0.60) {
//               if (lastProgress < 0.40 && progress >= 0.40) {
//                 toggleScroll(false);
//                 gsap.to(card2Ref.current, {
//                   opacity: 1,
//                   duration: 1,
//                   ease: "power2.inOut",
//                   onComplete: () => {
//                     setTimeout(() => {
//                       toggleScroll(true);
//                     }, 2000);
//                   }
//                 });
//               } else if (progress > 0.57) {
//                 gsap.to(card2Ref.current, {
//                   opacity: 0,
//                   duration: 1,
//                   ease: "power2.inOut"
//                 });
//               }
//             }
            
//             // Card 3 (75-100%)
//             if (progress >= 0.75) {
//               if (lastProgress < 0.75 && progress >= 0.75) {
//                 toggleScroll(false);
//                 gsap.to(card3Ref.current, {
//                   opacity: 1,
//                   duration: 1,
//                   ease: "power2.inOut",
//                   onComplete: () => {
//                     setTimeout(() => {
//                       toggleScroll(true);
//                     }, 2000);
//                   }
//                 });
//               }
//             }
            
//             // Hide cards when out of range
//             if (progress < 0.30 || (progress > 0.35 && progress < 0.40)) {
//               gsap.to(card1Ref.current, { opacity: 0, duration: 1, ease: "power2.inOut" });
//             }
//             if (progress < 0.40 || progress > 0.60) {
//               gsap.to(card2Ref.current, { opacity: 0, duration: 1, ease: "power2.inOut" });
//             }
//             if (progress < 0.75) {
//               gsap.to(card3Ref.current, { opacity: 0, duration: 1, ease: "power2.inOut" });
//             }
            
//             lastProgress = progress;
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
//       toggleScroll(true); // Ensure scroll is enabled when component unmounts
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full h-screen bg-[#02123b] relative">
//       <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
      
//       {/* Cards using your exact design */}
//       <div ref={card1Ref} className="absolute bg-white left-[10vw] top-[40%] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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

//       <div ref={card2Ref} className="absolute bg-white right-[10vw] top-[30vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[28vw] md:h-[28vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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

//       <div ref={card3Ref} className="absolute bg-white right-[10vw] top-[20vw] rounded-xl w-[60vw] h-[60vw] lg:w-[25vw] md:w-[25vw] md:h-[25vw] lg:h-[25vw] sm:w-[40vw] sm:h-[40vw] border border-white">
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