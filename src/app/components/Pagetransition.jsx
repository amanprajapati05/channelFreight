// // // // // 'use client';

// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import { gsap } from 'gsap';
// // // // // import { usePathname } from 'next/navigation';

// // // // // const PageTransition = () => {
// // // // //   const overlayRefs = useRef([]);
// // // // //   const containerRef = useRef(null);
// // // // //   const isAnimating = useRef(false);
// // // // //   const currentPath = usePathname();

// // // // //   // Function to create and animate overlays
// // // // //   const createTransition = () => {
// // // // //     if (isAnimating.current) return;
// // // // //     isAnimating.current = true;

// // // // //     // Create container if it doesn't exist
// // // // //     if (!containerRef.current) {
// // // // //       containerRef.current = document.createElement('div');
// // // // //       containerRef.current.className = 'fixed inset-0 z-[9999] pointer-events-none';
// // // // //       document.body.appendChild(containerRef.current);
// // // // //     }

// // // // //     // Create overlay stripes
// // // // //     for (let i = 0; i < 5; i++) {
// // // // //       const overlay = document.createElement('div');
// // // // //       overlay.className = 'absolute top-0 h-screen bg-[#ffffff]';
// // // // //       overlay.style.width = '20%';
// // // // //       overlay.style.left = `${i * 20}%`;
// // // // //       overlay.style.transform = 'translateY(-100%)';
// // // // //       containerRef.current.appendChild(overlay);
// // // // //       overlayRefs.current.push(overlay);
// // // // //     }

// // // // //     // Animation timeline
// // // // //     const tl = gsap.timeline({
// // // // //       onComplete: () => {
// // // // //         // Cleanup after animation
// // // // //         if (containerRef.current && containerRef.current.parentNode) {
// // // // //           containerRef.current.parentNode.removeChild(containerRef.current);
// // // // //           containerRef.current = null;
// // // // //         }
// // // // //         overlayRefs.current = [];
// // // // //         isAnimating.current = false;
// // // // //       }
// // // // //     });

// // // // //     // Animate stripes down and up
// // // // //     tl.to(overlayRefs.current, {
// // // // //       yPercent: 0,
// // // // //       duration: 0.5,
// // // // //       ease: "power2.inOut",
// // // // //       stagger: {
// // // // //         amount: 0.5,
// // // // //         from: "start"
// // // // //       }
// // // // //     })
// // // // //     .to(overlayRefs.current, {
// // // // //       yPercent: 100,
// // // // //       duration: 0.5,
// // // // //       ease: "power2.inOut",
// // // // //       stagger: {
// // // // //         amount: 0.5,
// // // // //         from: "start"
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     // Run transition when pathname changes
// // // // //     createTransition();
// // // // //   }, [currentPath]);

// // // // //   useEffect(() => {
// // // // //     // Cleanup function
// // // // //     return () => {
// // // // //       if (containerRef.current && containerRef.current.parentNode) {
// // // // //         containerRef.current.parentNode.removeChild(containerRef.current);
// // // // //       }
// // // // //       overlayRefs.current = [];
// // // // //       isAnimating.current = false;
// // // // //     };
// // // // //   }, []);

// // // // //   return null;
// // // // // };

// // // // // export default PageTransition;
// // // // 'use client';

// // // // import React, { useEffect, useRef } from 'react';
// // // // import { gsap } from 'gsap';
// // // // import { usePathname } from 'next/navigation';

// // // // const PageTransition = () => {
// // // //   const overlayRefs = useRef([]);
// // // //   const containerRef = useRef(null);
// // // //   const isAnimating = useRef(false);
// // // //   const currentPath = usePathname();

// // // //   const createTransition = () => {
// // // //     if (isAnimating.current) return;
// // // //     isAnimating.current = true;

// // // //     if (!containerRef.current) {
// // // //       containerRef.current = document.createElement('div');
// // // //       containerRef.current.className = 'fixed inset-0 z-[9999] pointer-events-none';
// // // //       document.body.appendChild(containerRef.current);
// // // //     }

// // // //     // Create overlay stripes
// // // //     for (let i = 0; i < 5; i++) {
// // // //       const overlay = document.createElement('div');
// // // //       overlay.className = 'absolute top-0 h-screen bg-[#ffffff]';
// // // //       overlay.style.width = '20%';
// // // //       overlay.style.left = `${i * 20}%`;
// // // //       overlay.style.transform = 'translateY(-100%)';
// // // //       containerRef.current.appendChild(overlay);
// // // //       overlayRefs.current.push(overlay);
// // // //     }

// // // //     // Animation timeline with 2-second total duration
// // // //     const tl = gsap.timeline({
// // // //       onComplete: () => {
// // // //         if (containerRef.current && containerRef.current.parentNode) {
// // // //           containerRef.current.parentNode.removeChild(containerRef.current);
// // // //           containerRef.current = null;
// // // //         }
// // // //         overlayRefs.current = [];
// // // //         isAnimating.current = false;
// // // //       }
// // // //     });

// // // //     // Exit animation (cover screen)
// // // //     tl.to(overlayRefs.current, {
// // // //       yPercent: 0,
// // // //       duration: 0.8,
// // // //       ease: "power2.inOut",
// // // //       stagger: {
// // // //         amount: 0.4,
// // // //         from: "start"
// // // //       }
// // // //     })
// // // //     // Small pause at full coverage
// // // //     .to({}, { duration: 0.2 })
// // // //     // Entry animation (reveal new page)
// // // //     .to(overlayRefs.current, {
// // // //       yPercent: 100,
// // // //       duration: 0.8,
// // // //       ease: "power2.inOut",
// // // //       stagger: {
// // // //         amount: 0.4,
// // // //         from: "end"
// // // //       }
// // // //     });
// // // //   };

// // // //   useEffect(() => {
// // // //     createTransition();
// // // //   }, [currentPath]);

// // // //   useEffect(() => {
// // // //     return () => {
// // // //       if (containerRef.current && containerRef.current.parentNode) {
// // // //         containerRef.current.parentNode.removeChild(containerRef.current);
// // // //       }
// // // //       overlayRefs.current = [];
// // // //       isAnimating.current = false;
// // // //     };
// // // //   }, []);

// // // //   return null;
// // // // };

// // // // export default PageTransition;
// // // 'use client';

// // // import React, { useEffect, useRef, useState } from 'react';
// // // import { gsap } from 'gsap';
// // // import { usePathname } from 'next/navigation';

// // // const PageTransition = ({ children }) => {
// // //   const overlayRefs = useRef([]);
// // //   const containerRef = useRef(null);
// // //   const isAnimating = useRef(false);
// // //   const currentPath = usePathname();
// // //   const [showContent, setShowContent] = useState(true);

// // //   const createTransition = async () => {
// // //     if (isAnimating.current) return;
// // //     isAnimating.current = true;
// // //     setShowContent(false);

// // //     if (!containerRef.current) {
// // //       containerRef.current = document.createElement('div');
// // //       containerRef.current.className = 'fixed inset-0 z-[9999] pointer-events-none';
// // //       document.body.appendChild(containerRef.current);
// // //     }

// // //     for (let i = 0; i < 5; i++) {
// // //       const overlay = document.createElement('div');
// // //       overlay.className = 'absolute top-0 h-screen bg-[#ffffff]';
// // //       overlay.style.width = '20%';
// // //       overlay.style.left = `${i * 20}%`;
// // //       overlay.style.transform = 'translateY(-100%)';
// // //       containerRef.current.appendChild(overlay);
// // //       overlayRefs.current.push(overlay);
// // //     }

// // //     return new Promise((resolve) => {
// // //       const tl = gsap.timeline({
// // //         onComplete: () => {
// // //           if (containerRef.current && containerRef.current.parentNode) {
// // //             containerRef.current.parentNode.removeChild(containerRef.current);
// // //             containerRef.current = null;
// // //           }
// // //           overlayRefs.current = [];
// // //           isAnimating.current = false;
// // //           setShowContent(true);
// // //           resolve();
// // //         }
// // //       });

// // //       tl.to(overlayRefs.current, {
// // //         yPercent: 0,
// // //         duration: 0.8,
// // //         ease: "power2.inOut",
// // //         stagger: {
// // //           amount: 0.4,
// // //           from: "start"
// // //         }
// // //       })
// // //       .to({}, { duration: 0.2 })
// // //       .to(overlayRefs.current, {
// // //         yPercent: 100,
// // //         duration: 0.8,
// // //         ease: "power2.inOut",
// // //         stagger: {
// // //           amount: 0.4,
// // //           from: "end"
// // //         }
// // //       });
// // //     });
// // //   };

// // //   useEffect(() => {
// // //     createTransition();
// // //   }, [currentPath]);

// // //   useEffect(() => {
// // //     return () => {
// // //       if (containerRef.current && containerRef.current.parentNode) {
// // //         containerRef.current.parentNode.removeChild(containerRef.current);
// // //       }
// // //       overlayRefs.current = [];
// // //       isAnimating.current = false;
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className={`transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
// // //       {children}
// // //     </div>
// // //   );
// // // };

// // // export default PageTransition;
// // 'use client';

// // import React, { useEffect, useRef } from 'react';
// // import { gsap } from 'gsap';
// // import { usePathname } from 'next/navigation';

// // const PageTransition = ({ children }) => {
// //   const overlayRefs = useRef([]);
// //   const containerRef = useRef(null);
// //   const contentRef = useRef(null);
// //   const isAnimating = useRef(false);
// //   const currentPath = usePathname();

// //   const createTransition = async () => {
// //     if (isAnimating.current) return;
// //     isAnimating.current = true;

// //     if (!containerRef.current) {
// //       containerRef.current = document.createElement('div');
// //       containerRef.current.className = 'fixed inset-0 z-[9999] pointer-events-none';
// //       document.body.appendChild(containerRef.current);
// //     }

// //     for (let i = 0; i < 5; i++) {
// //       const overlay = document.createElement('div');
// //       overlay.className = 'absolute top-0 h-screen bg-[#ffffff]';
// //       overlay.style.width = '20%';
// //       overlay.style.left = `${i * 20}%`;
// //       overlay.style.transform = 'translateY(100%)';
// //       containerRef.current.appendChild(overlay);
// //       overlayRefs.current.push(overlay);
// //     }

// //     // Hide current content
// //     if (contentRef.current) {
// //       gsap.to(contentRef.current, {
// //         opacity: 0,
// //         duration: 0.3
// //       });
// //     }

// //     const tl = gsap.timeline({
// //       onComplete: () => {
// //         if (containerRef.current && containerRef.current.parentNode) {
// //           containerRef.current.parentNode.removeChild(containerRef.current);
// //           containerRef.current = null;
// //         }
// //         overlayRefs.current = [];
// //         isAnimating.current = false;
        
// //         // Show new content
// //         if (contentRef.current) {
// //           gsap.to(contentRef.current, {
// //             opacity: 1,
// //             duration: 0.3
// //           });
// //         }
// //       }
// //     });

// //     // Cover screen from bottom
// //     tl.to(overlayRefs.current, {
// //       yPercent: -200,
// //       duration: 0.8,
// //       ease: "power2.inOut",
// //       stagger: {
// //         amount: 0.4,
// //         from: "start"
// //       }
// //     })
// //     .to({}, { duration: 0.2 })
// //     // Reveal new page
// //     .to(overlayRefs.current, {
// //       yPercent: -400,
// //       duration: 0.8,
// //       ease: "power2.inOut",
// //       stagger: {
// //         amount: 0.4,
// //         from: "end"
// //       }
// //     });
// //   };

// //   useEffect(() => {
// //     createTransition();
// //   }, [currentPath]);

// //   useEffect(() => {
// //     return () => {
// //       if (containerRef.current && containerRef.current.parentNode) {
// //         containerRef.current.parentNode.removeChild(containerRef.current);
// //       }
// //       overlayRefs.current = [];
// //       isAnimating.current = false;
// //     };
// //   }, []);

// //   return (
// //     <div ref={contentRef} className="min-h-screen">
// //       {children}
// //     </div>
// //   );
// // };

// // export default PageTransition;
// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { usePathname } from 'next/navigation';

// const PageTransition = ({ children }) => {
//   const contentRef = useRef(null);
//   const isAnimating = useRef(false);
//   const currentPath = usePathname();

//   const createTransition = () => {
//     if (isAnimating.current) return;
//     isAnimating.current = true;

//     const tl = gsap.timeline({
//       onComplete: () => {
//         isAnimating.current = false;
//       }
//     });

//     // Create overlays
//     const overlays = Array.from({ length: 5 }, (_, i) => {
//       const overlay = document.createElement('div');
//       overlay.className = 'fixed top-0 h-screen bg-black';
//       overlay.style.width = '20%';
//       overlay.style.left = `${i * 20}%`;
//       overlay.style.transform = 'translateY(100%)';
//       overlay.style.zIndex = '9999';
//       document.body.appendChild(overlay);
//       return overlay;
//     });

//     // Hide current content
//     gsap.set(contentRef.current, { opacity: 0 });

//     // Animate overlays
//     tl.to(overlays, {
//       yPercent: -100,
//       duration: 0.7,
//       ease: "power2.inOut",
//       stagger: {
//         amount: 0.3
//       }
//     })
//     .set(contentRef.current, { opacity: 1 })
//     .to(overlays, {
//       yPercent: -200,
//       duration: 0.7,
//       ease: "power2.inOut",
//       stagger: {
//         amount: 0.3,
//         from: "end"
//       },
//       onComplete: () => {
//         overlays.forEach(overlay => overlay.remove());
//       }
//     });
//   };

//   useEffect(() => {
//     createTransition();
//   }, [currentPath]);

//   return (
//     <div ref={contentRef}>
//       {children}
//     </div>
//   );
// };

// export default PageTransition;
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const PageTransition = ({ children }) => {
  const contentRef = useRef(null);
  const isAnimating = useRef(false);
  const currentPath = usePathname();

  const createTransition = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      }
    });

    const overlays = Array.from({ length: 5 }, (_, i) => {
      const overlay = document.createElement('div');
      overlay.className = 'fixed top-0 h-screen bg-white';
      overlay.style.width = '20%';
      overlay.style.left = `${i * 20}%`;
      overlay.style.transform = 'translateY(-100%)';
      overlay.style.zIndex = '9999';
      document.body.appendChild(overlay);
      return overlay;
    });

    // Cover animation
    tl.to(overlays, {
      yPercent: 0,
      duration: 0.5,
      ease: "power2.inOut",
      stagger: {
        amount: 0.3,
        from: "start"
      }
    })
    // Pause
    .to({}, { duration: 1 })
    // Reveal animation
    .to(overlays, {
      yPercent: 100,
      duration: 0.5,
      ease: "power2.inOut",
      stagger: {
        amount: 0.3,
        from: "end"
      },
      onComplete: () => {
        overlays.forEach(overlay => overlay.remove());
      }
    });
  };

  useEffect(() => {
    createTransition();
  }, [currentPath]);

  return (
    <div ref={contentRef}>
      {children}
    </div>
  );
};

export default PageTransition;