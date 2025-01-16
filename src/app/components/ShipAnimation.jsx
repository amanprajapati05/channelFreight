
// 'use client';

// import React, { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
        
//         // Center position
//         const startX = (canvas.width - imageWidth) / 2;
//         const startY = (canvas.height - imageHeight) / 2;
        
//         // Clear canvas
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
        
//         // Draw ship at calculated position
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

//       // Create timeline for coordinated animations
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "+=80%", // Increased scroll length for smoother animation
//           scrub: 1,
//           pin: true,
//           markers: true,
//           anticipatePin: 1,
//           fastScrollEnd: true,
//           preventOverlaps: true,
//           invalidateOnRefresh: true,
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
//           ease: "power2.out",
          
//         }, 
//         0.3 // Start revealing text when ship is 30% through its animation
//       );

//       window.addEventListener('resize', () => {
//         setCanvasSize();
//         drawShip(0);
//       });
//     };

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   });

//   return (
//     <div ref={containerRef} className="h-screen w-full relative overflow-hidden text-[--blue3]">
//       <div ref={triggerRef} className="h-full">
//         {/* Text container that will be revealed */}
//         <div 
//           ref={textRef} 
//           className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full"
//         >
//           <div className="text-center md:text-[4vw] text-[7vw] px-2 md:px-0">
//             Your Cargo,
//           </div>
//           <div className="text-center md:text-[5vw] text-[10vw]">
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
// 'use client';

// import React, { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
//           end: "+=100%",
//           scrub: 1,
//           pin: true,
//           markers: true,
//           anticipatePin: 1,
//           fastScrollEnd: true,
//           preventOverlaps: true,
//           invalidateOnRefresh: true,
//           onLeave: (self) => {
//             // Keep text visible when scrolling past the animation
//             gsap.to(textRef.current, {
//               opacity: 1,
//               scale: 1,
//               duration: 0.1,
//               overwrite: true
//             });
//           },
//           onEnterBack: (self) => {
//             // Ensure text stays in the correct state when scrolling back up
//             gsap.set(textRef.current, {
//               opacity: self.progress === 0 ? 0 : 1,
//               scale: self.progress === 0 ? 0.9 : 1
//             });
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
//         0.3
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
//     <div ref={containerRef} className="h-screen w-full relative overflow-hidden text-[--blue3]">
//       <div ref={triggerRef} className="h-full">
//         {/* Text container */}
//         <div 
//           ref={textRef} 
//           className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full"
//         >
//           <div className="text-center md:text-[4vw] text-[7vw] px-2 md:px-0">
//             Your Cargo,
//           </div>
//           <div className="text-center md:text-[5vw] text-[10vw]">
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

import React, { useRef } from 'react';
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

  useGSAP(() => {
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

      // Create timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: true, // Important for maintaining space
          markers: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // This ensures smooth text fade in/out throughout the scroll
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

      // Add animations to timeline
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
        0.3 // Start at 30% of the animation
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
  });

  return (
    // Changed the outer container to maintain proper spacing
    <div ref={containerRef} className="w-full relative">
      {/* This div maintains the scroll space */}
      <div ref={triggerRef} className="h-screen">
        {/* Text container */}
        <div 
          ref={textRef} 
          className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full"
        >
          <div className={` ${Clash.className} text-center md:text-[4vw] text-[7vw] px-2 md:px-0 text-[--blue3]`}>
            Your Cargo,
          </div>
          <div className={`${ClashM.className} text-center md:text-[5vw] text-[10vw] text-[--blue3]`}>
            securely managed at every step.
          </div>
        </div>

        {/* Canvas for ship animation */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-20"
        />
      </div>
    </div>
  );
};

export default ShipAnimation;
// // // // // // 'use client';

// // // // // // import React, { useRef } from 'react';
// // // // // // import { useGSAP } from '@gsap/react';
// // // // // // import gsap from 'gsap';
// // // // // // import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// // // // // // const ShipAnimation = () => {
// // // // // //   const containerRef = useRef(null);
// // // // // //   const canvasRef = useRef(null);
// // // // // //   const ctxRef = useRef(null);
// // // // // //   const triggerRef = useRef(null);

// // // // // //   useGSAP(() => {
// // // // // //     gsap.registerPlugin(ScrollTrigger);

// // // // // //     const shipImage = new Image();
// // // // // //     shipImage.src = '/images/services/ship.webp';

// // // // // //     const ctx = canvasRef.current.getContext('2d');
// // // // // //     ctxRef.current = ctx;

// // // // // //     const setCanvasSize = () => {
// // // // // //       if (canvasRef.current) {
// // // // // //         canvasRef.current.width = window.innerWidth;
// // // // // //         canvasRef.current.height = window.innerHeight;
// // // // // //       }
// // // // // //     };
// // // // // //     setCanvasSize();

// // // // // //     shipImage.onload = () => {
// // // // // //       const drawShip = (progress) => {
// // // // // //         const canvas = canvasRef.current;
// // // // // //         const ctx = ctxRef.current;
// // // // // //         const imageWidth = shipImage.naturalWidth;
// // // // // //         const imageHeight = shipImage.naturalHeight;
        
// // // // // //         // Center position
// // // // // //         const startX = (canvas.width - imageWidth) / 2;
// // // // // //         const startY = (canvas.height - imageHeight) / 2;
        
// // // // // //         // Clear the entire canvas
// // // // // //         ctx.clearRect(0, 0, canvas.width, canvas.height);
        
// // // // // //         // Create gradient for white fade on the right side of the ship
// // // // // //         const gradientWidth = 100; // Width of the gradient
// // // // // //         const gradient = ctx.createLinearGradient(
// // // // // //           startX - (progress * (canvas.width + imageWidth)) + imageWidth - gradientWidth,
// // // // // //           0,
// // // // // //           startX - (progress * (canvas.width + imageWidth)) + imageWidth,
// // // // // //           0
// // // // // //         );
// // // // // //         gradient.addColorStop(0, 'white');
// // // // // //         gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
// // // // // //         // Draw ship
// // // // // //         ctx.drawImage(
// // // // // //           shipImage,
// // // // // //           startX - (progress * (canvas.width + imageWidth)),
// // // // // //           startY,
// // // // // //           imageWidth,
// // // // // //           imageHeight
// // // // // //         );
        
// // // // // //         // Fill everything to the right of the ship with white
// // // // // //         ctx.fillStyle = 'white';
// // // // // //         ctx.fillRect(
// // // // // //           startX - (progress * (canvas.width + imageWidth)) + imageWidth,
// // // // // //           0,
// // // // // //           canvas.width,
// // // // // //           canvas.height
// // // // // //         );
        
// // // // // //         // Draw gradient edge
// // // // // //         ctx.fillStyle = gradient;
// // // // // //         ctx.fillRect(
// // // // // //           startX - (progress * (canvas.width + imageWidth)) + imageWidth - gradientWidth,
// // // // // //           0,
// // // // // //           gradientWidth,
// // // // // //           canvas.height
// // // // // //         );
// // // // // //       };

// // // // // //       // Initial draw
// // // // // //       drawShip(0);

// // // // // //       // Ship movement animation
// // // // // //       gsap.to({}, {
// // // // // //         duration: 1,
// // // // // //         ease: "none",
// // // // // //         scrollTrigger: {
// // // // // //           trigger: triggerRef.current,
// // // // // //           start: "top top",
// // // // // //           end: "+=200%",
// // // // // //           scrub: 1,
// // // // // //           pin: true,
// // // // // //           anticipatePin: 1,
// // // // // //           fastScrollEnd: true,
// // // // // //           preventOverlaps: true,
// // // // // //           invalidateOnRefresh: true,
// // // // // //           onUpdate: (self) => {
// // // // // //             drawShip(self.progress);
// // // // // //           }
// // // // // //         }
// // // // // //       });

// // // // // //       window.addEventListener('resize', () => {
// // // // // //         setCanvasSize();
// // // // // //         drawShip(0);
// // // // // //       });
// // // // // //     };

// // // // // //     return () => {
// // // // // //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // // // //     };
// // // // // //   });

// // // // // //   return (
// // // // // //     <div ref={containerRef} className="h-screen w-full relative overflow-hidden text-[--blue3]">
// // // // // //       <div ref={triggerRef} className="h-full">
// // // // // //         {/* Static text that will be revealed */}
// // // // // //         <div className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full">
// // // // // //           <div className="text-center md:text-[4vw] text-[7vw] px-2 md:px-0">
// // // // // //             Your Cargo,
// // // // // //           </div>
// // // // // //           <div className="text-center md:text-[5vw] text-[10vw]">
// // // // // //             securely managed at every step.
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Canvas for ship and reveal effect */}
// // // // // //         <canvas
// // // // // //           ref={canvasRef}
// // // // // //           className="absolute inset-0 w-full h-full z-20"
// // // // // //         />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ShipAnimation;
// // // // // 'use client';

// // // // // import React, { useRef } from 'react';
// // // // // import { useGSAP } from '@gsap/react';
// // // // // import gsap from 'gsap';
// // // // // import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// // // // // import { Clash } from '../../../public/fonts/fonts';

// // // // // const ShipAnimation = () => {
// // // // //   const containerRef = useRef(null);
// // // // //   const canvasRef = useRef(null);
// // // // //   const ctxRef = useRef(null);
// // // // //   const triggerRef = useRef(null);

// // // // //   useGSAP(() => {
// // // // //     gsap.registerPlugin(ScrollTrigger);

// // // // //     const shipImage = new Image();
// // // // //     shipImage.src = '/images/services/ship.webp';

// // // // //     const ctx = canvasRef.current.getContext('2d');
// // // // //     ctxRef.current = ctx;

// // // // //     const setCanvasSize = () => {
// // // // //       if (canvasRef.current) {
// // // // //         canvasRef.current.width = window.innerWidth;
// // // // //         canvasRef.current.height = window.innerHeight;
// // // // //       }
// // // // //     };
// // // // //     setCanvasSize();

// // // // //     shipImage.onload = () => {
// // // // //       const drawShip = (progress) => {
// // // // //         const canvas = canvasRef.current;
// // // // //         const ctx = ctxRef.current;
// // // // //         const imageWidth = shipImage.naturalWidth;
// // // // //         const imageHeight = shipImage.naturalHeight;
        
// // // // //         // Center position
// // // // //         const startX = (canvas.width - imageWidth) / 2;
// // // // //         const startY = (canvas.height - imageHeight) / 2;
        
// // // // //         // Clear the entire canvas
// // // // //         ctx.clearRect(0, 0, canvas.width, canvas.height);
        
// // // // //         // Create gradient for white fade on the left side of the ship
// // // // //         const gradientWidth = 100; // Width of the gradient
// // // // //         const gradient = ctx.createLinearGradient(
// // // // //           startX - (progress * (canvas.width + imageWidth)) - gradientWidth,
// // // // //           0,
// // // // //           startX - (progress * (canvas.width + imageWidth)),
// // // // //           0
// // // // //         );
// // // // //         gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
// // // // //         gradient.addColorStop(1, 'white');
        
// // // // //         // Fill everything to the left of the ship with white
// // // // //         ctx.fillStyle = 'white';
// // // // //         ctx.fillRect(
// // // // //           0,
// // // // //           0,
// // // // //           startX - (progress * (canvas.width + imageWidth)),
// // // // //           canvas.height
// // // // //         );
        
// // // // //         // Draw gradient edge
// // // // //         ctx.fillStyle = gradient;
// // // // //         ctx.fillRect(
// // // // //           startX - (progress * (canvas.width + imageWidth)) - gradientWidth,
// // // // //           0,
// // // // //           gradientWidth,
// // // // //           canvas.height
// // // // //         );
        
// // // // //         // Draw ship
// // // // //         ctx.drawImage(
// // // // //           shipImage,
// // // // //           startX - (progress * (canvas.width + imageWidth)),
// // // // //           startY,
// // // // //           imageWidth,
// // // // //           imageHeight
// // // // //         );
// // // // //       };

// // // // //       // Initial draw
// // // // //       drawShip(0);

// // // // //       // Ship movement animation
// // // // //       gsap.to({}, {
// // // // //         duration: 1,
// // // // //         ease: "none",
// // // // //         scrollTrigger: {
// // // // //           trigger: triggerRef.current,
// // // // //           start: "top top",
// // // // //           end: "+=200%",
// // // // //           scrub: 1,
// // // // //           pin: true,
// // // // //           anticipatePin: 1,
// // // // //           fastScrollEnd: true,
// // // // //           preventOverlaps: true,
// // // // //           invalidateOnRefresh: true,
// // // // //           onUpdate: (self) => {
// // // // //             drawShip(self.progress);
// // // // //           }
// // // // //         }
// // // // //       });

// // // // //       window.addEventListener('resize', () => {
// // // // //         setCanvasSize();
// // // // //         drawShip(0);
// // // // //       });
// // // // //     };

// // // // //     return () => {
// // // // //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // // // //     };
// // // // //   });

// // // // //   return (
// // // // //     <div ref={containerRef} className="h-screen w-full relative overflow-hidden text-[--blue3]">
// // // // //       <div ref={triggerRef} className="h-full">
// // // // //         {/* Static text that will be revealed */}
// // // // //         <div className={`${Clash.className} absolute inset-0 z-10 flex flex-col justify-center items-center h-full`}>
// // // // //           <div className="text-center md:text-[4vw] text-[7vw] px-2 md:px-0">
// // // // //             Your Cargo,
// // // // //           </div>
// // // // //           <div className="text-center md:text-[5vw] text-[10vw]">
// // // // //             securely managed at every step.
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Canvas for ship and reveal effect */}
// // // // //         <canvas
// // // // //           ref={canvasRef}
// // // // //           className="absolute inset-0 w-full h-full z-20"
// // // // //         />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ShipAnimation;

// // // 'use client';

// // // import React, { useRef } from 'react';
// // // import { useGSAP } from '@gsap/react';
// // // import gsap from 'gsap';
// // // import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// // // const ShipAnimation = () => {
// // //   const containerRef = useRef(null);
// // //   const shipCanvasRef = useRef(null);
// // //   const bgCanvasRef = useRef(null);
// // //   const triggerRef = useRef(null);

// // //   useGSAP(() => {
// // //     gsap.registerPlugin(ScrollTrigger);

// // //     const shipImage = new Image();
// // //     shipImage.src = '/images/services/ship.webp';

// // //     const setCanvasSize = () => {
// // //       if (shipCanvasRef.current && bgCanvasRef.current) {
// // //         shipCanvasRef.current.width = window.innerWidth;
// // //         shipCanvasRef.current.height = window.innerHeight;
// // //         bgCanvasRef.current.width = window.innerWidth;
// // //         bgCanvasRef.current.height = window.innerHeight;
// // //       }
// // //     };
// // //     setCanvasSize();

// // //     shipImage.onload = () => {
// // //       const drawAnimation = (progress) => {
// // //         // Ship canvas
// // //         const shipCanvas = shipCanvasRef.current;
// // //         const shipCtx = shipCanvas.getContext('2d');
// // //         const imageWidth = shipImage.naturalWidth;
// // //         const imageHeight = shipImage.naturalHeight;
        
// // //         // Center position
// // //         const startX = (shipCanvas.width - imageWidth) / 2;
// // //         const startY = (shipCanvas.height - imageHeight) / 2;
        
// // //         // Clear the ship canvas
// // //         shipCtx.clearRect(0, 0, shipCanvas.width, shipCanvas.height);
        
// // //         // Draw ship
// // //         shipCtx.drawImage(
// // //           shipImage,
// // //           startX - (progress * (shipCanvas.width + imageWidth)),
// // //           startY,
// // //           imageWidth,
// // //           imageHeight
// // //         );

// // //         // Background canvas (white background)
// // //         const bgCanvas = bgCanvasRef.current;
// // //         const bgCtx = bgCanvas.getContext('2d');
        
// // //         // Clear the background canvas
// // //         bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
        
// // //         // Fill with white up to the ship's position
// // //         bgCtx.fillStyle = 'white';
// // //         bgCtx.fillRect(
// // //           startX - (progress * (bgCanvas.width + imageWidth)) + imageWidth,
// // //           0,
// // //           bgCanvas.width,
// // //           bgCanvas.height
// // //         );
// // //       };

// // //       // Initial draw
// // //       drawAnimation(0);

// // //       // Animation
// // //       gsap.to({}, {
// // //         duration: 1,
// // //         ease: "none",
// // //         scrollTrigger: {
// // //           trigger: triggerRef.current,
// // //           start: "top top",
// // //           end: "+=200%",
// // //           scrub: 1,
// // //           pin: true,
// // //           anticipatePin: 1,
// // //           fastScrollEnd: true,
// // //           preventOverlaps: true,
// // //           invalidateOnRefresh: true,
// // //           onUpdate: (self) => {
// // //             drawAnimation(self.progress);
// // //           }
// // //         }
// // //       });

// // //       window.addEventListener('resize', () => {
// // //         setCanvasSize();
// // //         drawAnimation(0);
// // //       });
// // //     };

// // //     return () => {
// // //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// // //     };
// // //   });

// // //   return (
// // //     <div ref={containerRef} className="h-screen w-full relative overflow-hidden text-[--blue3]">
// // //       <div ref={triggerRef} className="h-full">
// // //         {/* Static text that will be revealed */}
// // //         <div className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full">
// // //           <div className="text-center md:text-[4vw] text-[7vw] px-2 md:px-0">
// // //             Your Cargo,
// // //           </div>
// // //           <div className="text-center md:text-[5vw] text-[10vw]">
// // //             securely managed at every step.
// // //           </div>
// // //         </div>

// // //         {/* White background canvas (lowest z-index) */}
// // //         <canvas
// // //           ref={bgCanvasRef}
// // //           className="absolute inset-0 w-full h-full z-20"
// // //         />

// // //         {/* Ship canvas (highest z-index) */}
// // //         <canvas
// // //           ref={shipCanvasRef}
// // //           className="absolute inset-0 w-full h-full z-30"
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ShipAnimation;
// // 'use client';

// // import React, { useRef } from 'react';
// // import { useGSAP } from '@gsap/react';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// // const ShipAnimation = () => {
// //   const containerRef = useRef(null);
// //   const canvasRef = useRef(null);
// //   const ctxRef = useRef(null);
// //   const triggerRef = useRef(null);

// //   useGSAP(() => {
// //     gsap.registerPlugin(ScrollTrigger);

// //     const shipImage = new Image();
// //     shipImage.src = '/images/services/ship.webp';

// //     const ctx = canvasRef.current.getContext('2d');
// //     ctxRef.current = ctx;

// //     const setCanvasSize = () => {
// //       if (canvasRef.current) {
// //         canvasRef.current.width = window.innerWidth;
// //         canvasRef.current.height = window.innerHeight;
// //       }
// //     };
// //     setCanvasSize();

// //     shipImage.onload = () => {
// //       const drawShip = (progress) => {
// //         const canvas = canvasRef.current;
// //         const ctx = ctxRef.current;
// //         const imageWidth = shipImage.naturalWidth;
// //         const imageHeight = shipImage.naturalHeight;
        
// //         // Center position
// //         const startX = (canvas.width - imageWidth) / 2;
// //         const startY = (canvas.height - imageHeight) / 2;
        
// //         // Clear the canvas
// //         ctx.clearRect(0, 0, canvas.width, canvas.height);

// //         // Create the masking area that will hide the text
// //         ctx.save();
// //         ctx.fillStyle = 'white';
        
// //         // Fill the entire canvas with white
// //         ctx.fillRect(0, 0, canvas.width, canvas.height);
        
// //         // Clear the area to the left of the ship (revealing text)
// //         ctx.clearRect(
// //           0,
// //           0,
// //           startX - (progress * (canvas.width + imageWidth)),
// //           canvas.height
// //         );
        
// //         // Draw ship
// //         ctx.drawImage(
// //           shipImage,
// //           startX - (progress * (canvas.width + imageWidth)),
// //           startY,
// //           imageWidth,
// //           imageHeight
// //         );
        
// //         ctx.restore();
// //       };

// //       // Initial draw
// //       drawShip(0);

// //       // Ship movement animation
// //       gsap.to({}, {
// //         duration: 1,
// //         ease: "none",
// //         scrollTrigger: {
// //           trigger: triggerRef.current,
// //           start: "top top",
// //           end: "+=200%",
// //           scrub: 1,
// //           pin: true,
// //           anticipatePin: 1,
// //           fastScrollEnd: true,
// //           preventOverlaps: true,
// //           invalidateOnRefresh: true,
// //           onUpdate: (self) => {
// //             drawShip(self.progress);
// //           }
// //         }
// //       });

// //       window.addEventListener('resize', () => {
// //         setCanvasSize();
// //         drawShip(0);
// //       });
// //     };

// //     return () => {
// //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //     };
// //   });

// //   return (
// //     <div ref={containerRef} className="h-screen w-full relative overflow-hidden text-[--blue3]">
// //       <div ref={triggerRef} className="h-full">
// //         {/* Text is visible by default */}
// //         <div className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full">
// //           <div className="text-center md:text-[4vw] text-[7vw] px-2 md:px-0">
// //             Your Cargo,
// //           </div>
// //           <div className="text-center md:text-[5vw] text-[10vw]">
// //             securely managed at every step.
// //           </div>
// //         </div>

// //         {/* Ship and masking canvas */}
// //         <canvas
// //           ref={canvasRef}
// //           className="absolute inset-0 w-full h-full z-20"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShipAnimation;
// 'use client';

// import React, { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// const ShipAnimation = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const ctxRef = useRef(null);
//   const triggerRef = useRef(null);

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
        
//         // Center position
//         const startX = (canvas.width - imageWidth) / 2;
//         const startY = (canvas.height - imageHeight) / 2;
        
//         // Clear the canvas
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         // Create the masking area that will hide the text
//         ctx.save();
//         ctx.fillStyle = 'white';
        
//         // Fill the entire canvas with white
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
        
//         // Clear the area to the right of the ship (revealing text)
//         ctx.clearRect(
//           startX - (progress * (canvas.width + imageWidth)) + imageWidth,
//           0,
//           canvas.width,
//           canvas.height
//         );
        
//         // Draw ship
//         ctx.drawImage(
//           shipImage,
//           startX - (progress * (canvas.width + imageWidth)),
//           startY,
//           imageWidth,
//           imageHeight
//         );
        
//         ctx.restore();
//       };

//       // Initial draw
//       drawShip(0);

//       // Ship movement animation
//       gsap.to({}, {
//         duration: 1,
//         ease: "none",
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "+=200%",
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           fastScrollEnd: true,
//           preventOverlaps: true,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             drawShip(self.progress);
//           }
//         }
//       });

//       window.addEventListener('resize', () => {
//         setCanvasSize();
//         drawShip(0);
//       });
//     };

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   });

//   return (
//     <div ref={containerRef} className="h-screen w-full relative overflow-hidden text-[--blue3]">
//       <div ref={triggerRef} className="h-full">
//         {/* Text is visible by default */}
//         <div className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full">
//           <div className="text-center md:text-[4vw] text-[7vw] px-2 md:px-0">
//             Your Cargo,
//           </div>
//           <div className="text-center md:text-[5vw] text-[10vw]">
//             securely managed at every step.
//           </div>
//         </div>

//         {/* Ship and masking canvas */}
//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0 w-full h-full z-20"
//         />
//       </div>
//     </div>
//   );
// };

// export default ShipAnimation;
// 'use client';

// import React, { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// const ShipAnimation = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const ctxRef = useRef(null);
//   const triggerRef = useRef(null);

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
        
//         // Center position
//         const startX = (canvas.width - imageWidth) / 2;
//         const startY = (canvas.height - imageHeight) / 2;
        
//         // Clear the canvas
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         // Create the masking area that will hide the text
//         ctx.save();
//         ctx.fillStyle = 'white';
        
//         // Additional width for the background (adjust this value to increase coverage)
//         const extraWidth = canvas.width * 0.5; // 50% extra width
        
//         // Fill the entire canvas with white first
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
        
//         // Clear the area to the right of the ship (revealing text)
//         ctx.clearRect(
//           startX - (progress * (canvas.width + imageWidth)) + imageWidth - extraWidth,
//           0,
//           canvas.width + extraWidth * 2, // Increased clear width
//           canvas.height
//         );
        
//         // White fill that moves with the ship
//         ctx.fillRect(
//           startX - (progress * (canvas.width + imageWidth)) - extraWidth,
//           0,
//           imageWidth + extraWidth * 1.19, // Increased background width
//           canvas.height
//         );
        
//         // Draw ship
//         ctx.drawImage(
//           shipImage,
//           startX - (progress * (canvas.width + imageWidth)),
//           startY,
//           imageWidth,
//           imageHeight
//         );
        
//         ctx.restore();
//       };

//       // Initial draw
//       drawShip(0);

//       // Ship movement animation
//       gsap.to({}, {
//         duration: 1,
//         ease: "none",
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "+=200%",
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           fastScrollEnd: true,
//           preventOverlaps: true,
//           invalidateOnRefresh: true,
//           onUpdate: (self) => {
//             drawShip(self.progress);
//           }
//         }
//       });

//       window.addEventListener('resize', () => {
//         setCanvasSize();
//         drawShip(0);
//       });
//     };

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   });

//   return (
//     <div ref={containerRef} className="h-screen w-full relative overflow-hidden text-[--blue3]">
//       <div ref={triggerRef} className="h-full">
//         {/* Text is visible by default */}
//         <div className="absolute inset-0 z-10 flex flex-col justify-center items-center h-full">
//           <div className="text-center md:text-[4vw] text-[7vw] px-2 md:px-0">
//             Your Cargo,
//           </div>
//           <div className="text-center md:text-[5vw] text-[10vw]">
//             securely managed at every step.
//           </div>
//         </div>

//         {/* Ship and masking canvas */}
//         <canvas
//           ref={canvasRef}
//           className="absolute inset-0 w-full h-full z-20"
//         />
//       </div>
//     </div>
//   );
// };

// export default ShipAnimation;