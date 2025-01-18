// // 'use client'
// // import React, { useEffect, useRef } from 'react';
// // import { gsap } from 'gsap';

// // const PageTransition = ({ children }) => {
// //   const transitionRef = useRef(null);
// //   const overlayRefs = useRef([]);

// //   useEffect(() => {
// //     // Create overlay elements if they don't exist
// //     if (overlayRefs.current.length === 0) {
// //       for (let i = 0; i < 5; i++) {
// //         const overlay = document.createElement('div');
// //         overlay.className = 'fixed top-0 w-[20%] h-screen bg-[#02123b] z-50';
// //         overlay.style.left = `${i * 20}%`;
// //         transitionRef.current.appendChild(overlay);
// //         overlayRefs.current.push(overlay);
// //       }
// //     }

// //     // Animate overlays
// //     const tl = gsap.timeline();

// //     // Initial state - move overlays above viewport
// //     gsap.set(overlayRefs.current, {
// //       yPercent: -100
// //     });

// //     // Animate overlays down
// //     tl.to(overlayRefs.current, {
// //       yPercent: 0,
// //       duration: 0.5,
// //       ease: "power2.in",
// //       stagger: {
// //         amount: 0.5,
// //         from: "start"
// //       }
// //     }).to(overlayRefs.current, {
// //       yPercent: 100,
// //       duration: 0.5,
// //       ease: "power2.out",
// //       stagger: {
// //         amount: 0.5,
// //         from: "start"
// //       }
// //     }).to(overlayRefs.current, {
// //       display: 'none'
// //     });

// //     // Hide content initially and reveal after overlay animation
// //     gsap.set(children, { opacity: 0 });
// //     tl.to(children, {
// //       opacity: 1,
// //       duration: 0.5
// //     }, "-=0.5");

// //     return () => {
// //       // Cleanup overlays on unmount
// //       overlayRefs.current.forEach(overlay => {
// //         if (overlay && overlay.parentNode) {
// //           overlay.parentNode.removeChild(overlay);
// //         }
// //       });
// //       overlayRefs.current = [];
// //     };
// //   }, [children]);

// //   return (
// //     <div className="relative">
// //       <div ref={transitionRef} className="pointer-events-none" />
// //       {children}
// //     </div>
// //   );
// // };

// // export default PageTransition;
// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const PageTransition = () => {
//   const overlayRefs = useRef([]);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Create overlay stripes
//     if (overlayRefs.current.length === 0) {
//       for (let i = 0; i < 5; i++) {
//         const overlay = document.createElement('div');
//         overlay.className = 'absolute top-0 h-screen bg-[#02123b]';
//         overlay.style.width = '20%';
//         overlay.style.left = `${i * 20}%`;
//         overlay.style.transform = 'translateY(-100%)';
//         if (containerRef.current) {
//           containerRef.current.appendChild(overlay);
//           overlayRefs.current.push(overlay);
//         }
//       }
//     }

//     // Animation timeline
//     const tl = gsap.timeline();

//     // Animate stripes down and up
//     tl.to(overlayRefs.current, {
//       yPercent: 0,
//       duration: 0.5,
//       ease: "power2.inOut",
//       stagger: {
//         amount: 0.5,
//         from: "start"
//       }
//     })
//     .to(overlayRefs.current, {
//       yPercent: 100,
//       duration: 0.5,
//       ease: "power2.inOut",
//       stagger: {
//         amount: 0.5,
//         from: "start"
//       },
//       onComplete: () => {
//         // Remove the overlay container after animation
//         if (containerRef.current && containerRef.current.parentNode) {
//           containerRef.current.parentNode.removeChild(containerRef.current);
//         }
//       }
//     });

//     return () => {
//       // Cleanup
//       if (containerRef.current && containerRef.current.parentNode) {
//         containerRef.current.parentNode.removeChild(containerRef.current);
//       }
//       overlayRefs.current = [];
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 z-[9999] pointer-events-none"
//     />
//   );
// };

// export default PageTransition;
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const PageTransition = () => {
  const overlayRefs = useRef([]);
  const containerRef = useRef(null);
  const isAnimating = useRef(false);
  const currentPath = usePathname();

  // Function to create and animate overlays
  const createTransition = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    // Create container if it doesn't exist
    if (!containerRef.current) {
      containerRef.current = document.createElement('div');
      containerRef.current.className = 'fixed inset-0 z-[9999] pointer-events-none';
      document.body.appendChild(containerRef.current);
    }

    // Create overlay stripes
    for (let i = 0; i < 5; i++) {
      const overlay = document.createElement('div');
      overlay.className = 'absolute top-0 h-screen bg-[#02123b]';
      overlay.style.width = '20%';
      overlay.style.left = `${i * 20}%`;
      overlay.style.transform = 'translateY(-100%)';
      containerRef.current.appendChild(overlay);
      overlayRefs.current.push(overlay);
    }

    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Cleanup after animation
        if (containerRef.current && containerRef.current.parentNode) {
          containerRef.current.parentNode.removeChild(containerRef.current);
          containerRef.current = null;
        }
        overlayRefs.current = [];
        isAnimating.current = false;
      }
    });

    // Animate stripes down and up
    tl.to(overlayRefs.current, {
      yPercent: 0,
      duration: 0.5,
      ease: "power2.inOut",
      stagger: {
        amount: 0.5,
        from: "start"
      }
    })
    .to(overlayRefs.current, {
      yPercent: 100,
      duration: 0.5,
      ease: "power2.inOut",
      stagger: {
        amount: 0.5,
        from: "start"
      }
    });
  };

  useEffect(() => {
    // Run transition when pathname changes
    createTransition();
  }, [currentPath]);

  useEffect(() => {
    // Cleanup function
    return () => {
      if (containerRef.current && containerRef.current.parentNode) {
        containerRef.current.parentNode.removeChild(containerRef.current);
      }
      overlayRefs.current = [];
      isAnimating.current = false;
    };
  }, []);

  return null;
};

export default PageTransition;