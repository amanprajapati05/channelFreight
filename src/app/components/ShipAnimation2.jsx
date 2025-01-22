// 'use client';

// import React, { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { Clash, ClashM } from '../../../public/fonts/fonts';

// const ShipAnimation = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const shipRef = useRef(null);
//   const ctxRef = useRef(null);
//   const triggerRef = useRef(null);
//   const textRef = useRef(null);

//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const shipImage = new Image();
//     shipImage.src = '/images/services/ship.webp';

//     const ctx = canvasRef.current.getContext('2d');
//     ctxRef.current = ctx;

//     const setCanvasSize = () => {
//       if (canvasRef.current) {
//         canvasRef.current.width = window.innerWidth;
//         canvasRef.current.height = window.innerHeight;
//       }
//     };
//     setCanvasSize();

//     shipImage.onload = () => {
//       const drawShip = (progress) => {
//         const canvas = canvasRef.current;
//         const ctx = ctxRef.current;
//         const imageWidth = shipImage.naturalWidth;
//         const imageHeight = shipImage.naturalHeight;
        
//         const startX = (canvas.width - imageWidth) / 2;
//         const startY = (canvas.height - imageHeight) / 2;
        
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
        
//         ctx.drawImage(
//           shipImage,
//           startX - (progress * (canvas.width + imageWidth)),
//           startY,
//           imageWidth,
//           imageHeight
//         );
//       };

//       // Initial draw
//       drawShip(0);

//       // Initialize text as invisible
//       gsap.set(textRef.current, { opacity: 0, scale: 0.9 });

//       // Create timeline for coordinated animations
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1,
//           pin: true,
//           pinSpacing: true, // Important for maintaining space
//           anticipatePin: 1,
//           fastScrollEnd: true,
//           preventOverlaps: true,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             // This ensures smooth text fade in/out throughout the scroll
//             if (self.progress < 0.3) {
//               gsap.to(textRef.current, {
//                 opacity: 0,
//                 scale: 0.9,
//                 duration: 0.1
//               });
//             }
//           }
//         }
//       });

//       // Add animations to timeline
//       tl.to({}, {
//         onUpdate: function() {
//           drawShip(this.progress());
//         },
//         duration: 1
//       })
//       .fromTo(textRef.current, 
//         { 
//           opacity: 0,
//           scale: 0.9
//         },
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 0.3,
//           ease: "power2.out"
//         }, 
//         0.3 // Start at 30% of the animation
//       )
//       .to(textRef.current, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.7
//       });

//       window.addEventListener('resize', () => {
//         setCanvasSize();
//         drawShip(tl.progress());
//       });
//     };

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   });

//   return (
//     // Changed the outer container to maintain proper spacing
//     <div ref={containerRef} className="w-full relative">
//       {/* This div maintains the scroll space */}
//       <div ref={triggerRef} className="h-screen">
//         {/* Text container */}
//         <div 
//           ref={textRef} 
//           className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full"
//         >
//           <div className={` ${Clash.className} text-center md:text-[4vw] text-[7vw] px-2 md:px-0 text-[--blue3]`}>
//             Your Cargo,
//           </div>
//           <div className={`${ClashM.className} text-center md:text-[5vw] text-[10vw] text-[--blue3]`}>
//             securely managed at every step.
//           </div>
//         </div>

//         {/* Canvas for ship animation */}
//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0 w-full h-full z-20"
//         />
//       </div>
//     </div>
//   );
// };

// export default ShipAnimation;
'use client';

import React, { useRef, useState, useEffect } from 'react'; // Add useState and useEffect
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Clash, ClashM } from '../../../public/fonts/fonts';

const ShipAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const shipRef = useRef(null);
  const ctxRef = useRef(null);
  const triggerRef = useRef(null);
  const textRef = useRef(null);
  
  // Add loading states
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  

  // Initial loading setup
  useEffect(() => {
    // Disable scroll initially
    document.body.style.overflow = 'hidden';
    
    // Add delay before starting animations
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsReady(true);
      document.body.style.overflow = 'auto';
      ScrollTrigger.refresh();
    }, 2000); // 2 second delay
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  useGSAP(() => {
    if (!isReady) return; // Only run when ready

    gsap.registerPlugin(ScrollTrigger);

    const shipImage = new Image();
    shipImage.src = '/images/services/ship.webp';

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
        
        const startX = (canvas.width - imageWidth) / 2;
        const startY = (canvas.height - imageHeight) / 2;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.drawImage(
          shipImage,
          startX - (progress * (canvas.width + imageWidth)),
          startY,
          imageWidth,
          imageHeight
        );
      };

      // Initial draw
      drawShip(0);

      // Initialize text as invisible
      gsap.set(textRef.current, { opacity: 0, scale: 0.9 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress < 0.3) {
              gsap.to(textRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 0.1
              });
            }
          }
        }
      });

      tl.to({}, {
        onUpdate: function() {
          drawShip(this.progress());
        },
        duration: 1
      })
      .fromTo(textRef.current, 
        { 
          opacity: 0,
          scale: 0.9
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        }, 
        0.3
      )
      .to(textRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.7
      });

      window.addEventListener('resize', () => {
        setCanvasSize();
        drawShip(tl.progress());
      });
    };

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isReady]); // Add isReady dependency

  return (
    <div 
      ref={containerRef} 
      className="w-full relative"
      style={{ 
        visibility: isLoading ? 'hidden' : 'visible',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      <div ref={triggerRef} className="h-screen">
        <div 
          ref={textRef} 
          className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full"
          style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
        >
          <div className={`${Clash.className} text-center md:text-[4vw] text-[7vw] px-2 md:px-0 text-[--blue3]`}>
            Your Cargo,
          </div>
          <div className={`${ClashM.className} text-center md:text-[5vw] text-[10vw] text-[--blue3]`}>
            securely managed at every step.
          </div>
        </div>

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-20"
          style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}
        />
      </div>
    </div>
  );
};

export default ShipAnimation;
