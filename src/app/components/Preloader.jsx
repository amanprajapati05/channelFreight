// "use client";

// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';

// const Preloader = ({ children }) => {
//   const [showPreloader, setShowPreloader] = useState(true);
//   const containerRef = useRef(null);
//   const videoRef = useRef(null);
//   const videoContainerRef = useRef(null);
//   const leftColumnRef = useRef(null);
//   const rightColumnRef = useRef(null);
//   const contentRef = useRef(null);
//   const preloaderContainerRef = useRef(null);

//   useEffect(() => {
//     // Check if this is an initial load/refresh or navigation
//     const isInitialLoad = !sessionStorage.getItem('hasVisited');
    
//     if (!isInitialLoad) {
//       setShowPreloader(false);
//       return;
//     }

//     // Mark that user has visited
//     sessionStorage.setItem('hasVisited', 'true');

//     const video = videoRef.current;
//     const videoContainer = videoContainerRef.current;
//     const leftRows = leftColumnRef.current.children;
//     const rightRows = rightColumnRef.current.children;
//     const content = contentRef.current;
//     const preloaderContainer = preloaderContainerRef.current;

//     // Set initial states
//     gsap.set(content, { opacity: 1 });
//     gsap.set(preloaderContainer, { 
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       zIndex: 9999999999
//     });

//     // Create the main timeline
//     const mainTl = gsap.timeline({
//       defaults: { duration: 1.2, ease: "power3.inOut" }
//     });

//     // Function to handle the reveal animation
//     const startRevealAnimation = () => {
//       mainTl
//         .to([...leftRows], {
//           xPercent: -100,
//           stagger: 0.1
//         })
//         .to([...rightRows], {
//           xPercent: 100,
//           stagger: 0.1
//         }, "<")
//         .set(preloaderContainer, { 
//           display: 'none'
//         });
//     };

//     // Video event handlers
//     const handleVideoEnd = () => {
//       const videoFadeOut = gsap.timeline({
//         onComplete: () => {
//           videoContainer.style.display = 'none';
//           startRevealAnimation();
//         }
//       });

//       videoFadeOut.to(videoContainer, {
//         opacity: 0,
//         duration: 0.5,
//         ease: "power2.inOut"
//       });
//     };

//     video.addEventListener('ended', handleVideoEnd);

//     // Prevent body scroll during preloader
//     document.body.style.overflow = 'hidden';

//     // Clear session storage on page refresh/close
//     const handleBeforeUnload = () => {
//       sessionStorage.removeItem('hasVisited');
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       video.removeEventListener('ended', handleVideoEnd);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//       mainTl.kill();
//       document.body.style.overflow = '';
//     };
//   }, []);

//   if (!showPreloader) {
//     return <>{children}</>;
//   }

//   return (
//     <>
//       {/* Preloader Container */}
//       <div ref={preloaderContainerRef} className="fixed inset-0 z-[9999999999]">
//         {/* Video Container */}
//         <div 
//           ref={videoContainerRef}
//           className="fixed inset-0 w-[100vw] -translate-x-1/2 -translate-y-1/2 top-[45%] left-[50%] z-[9999] bg-white"
//         >
//           <video 
//             ref={videoRef}
//             className="w-full h-full object-contain border-white border-2 outline-none "
//             autoPlay
//             muted
//             playsInline
//           >
//             <source src='/images/6.mp4' type="video/mp4" />
//           </video>
//         </div>

//         {/* Preloader columns */}
//         <div className="fixed inset-0 z-[9998] pointer-events-none">
//           {/* Left Column */}
//           <div 
//             ref={leftColumnRef}
//             className="absolute top-0 left-0 h-screen w-1/2"
//           >
//             <div className="h-1/3 bg-white" />
//             <div className="h-1/3 bg-white" />
//             <div className="h-1/3 bg-white" />
//           </div>

//           {/* Right Column */}
//           <div 
//             ref={rightColumnRef}
//             className="absolute top-0 right-0 h-screen w-1/2"
//           >
//             <div className="h-1/3 bg-white" />
//             <div className="h-1/3 bg-white" />
//             <div className="h-1/3 bg-white" />
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div ref={contentRef}>
//         {children}
//       </div>
//     </>
//   );
// };

// export default Preloader;
"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ children }) => {
  const [showPreloader, setShowPreloader] = useState(true);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const contentRef = useRef(null);
  const preloaderContainerRef = useRef(null);

  useEffect(() => {
    // Check if this is an initial load/refresh or navigation
    const isInitialLoad = !sessionStorage.getItem('hasVisited');
    
    if (!isInitialLoad) {
      setShowPreloader(false);
      return;
    }

    // Mark that user has visited
    sessionStorage.setItem('hasVisited', 'true');

    const video = videoRef.current;
    const videoContainer = videoContainerRef.current;
    const leftRows = leftColumnRef.current.children;
    const rightRows = rightColumnRef.current.children;
    const content = contentRef.current;
    const preloaderContainer = preloaderContainerRef.current;

    // Set initial states
    gsap.set(content, { opacity: 1 });
    gsap.set(preloaderContainer, { 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 9999999999
    });

    // Create the main timeline
    const mainTl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power3.inOut" }
    });

    // Function to handle the reveal animation
    const startRevealAnimation = () => {
      mainTl
        .to([...leftRows], {
          xPercent: -100,
          stagger: 0.1
        })
        .to([...rightRows], {
          xPercent: 100,
          stagger: 0.1
        }, "<")
        .set(preloaderContainer, { 
          display: 'none'
        })
        .call(() => {
          // Re-enable scrolling after animation
          document.body.style.overflow = '';
          document.body.style.position = '';
          document.body.style.height = '';
          document.body.style.width = '';
        });
    };

    // Video event handlers
    const handleVideoEnd = () => {
      const videoFadeOut = gsap.timeline({
        onComplete: () => {
          videoContainer.style.display = 'none';
          startRevealAnimation();
        }
      });

      videoFadeOut.to(videoContainer, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
    };

    video.addEventListener('ended', handleVideoEnd);

    // Prevent body scroll during preloader
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.height = '100%';
    document.body.style.width = '100%';

    // Clear session storage on page refresh/close
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('hasVisited');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      mainTl.kill();
      // Ensure scrolling is re-enabled when component unmounts
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.height = '';
      document.body.style.width = '';
    };
  }, []);

  if (!showPreloader) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Preloader Container */}
      <div ref={preloaderContainerRef} className="fixed inset-0 z-[9999999999]">
        {/* Video Container */}
        <div 
          ref={videoContainerRef}
          className="fixed inset-0 w-[100vw] -translate-x-1/2 -translate-y-1/2 top-[45%] left-[50%] z-[9999] bg-white"
        >
          <video 
            ref={videoRef}
            className="w-full h-full object-contain border-white border-2 outline-none"
            autoPlay
            muted
            playsInline
          >
            <source src='/images/6.mp4' type="video/mp4" />
          </video>
        </div>

        {/* Preloader columns */}
        <div className="fixed inset-0 z-[9998] pointer-events-none">
          {/* Left Column */}
          <div 
            ref={leftColumnRef}
            className="absolute top-0 left-0 h-screen w-1/2"
          >
            <div className="h-1/3 bg-white" />
            <div className="h-1/3 bg-white" />
            <div className="h-1/3 bg-white" />
          </div>

          {/* Right Column */}
          <div 
            ref={rightColumnRef}
            className="absolute top-0 right-0 h-screen w-1/2"
          >
            <div className="h-1/3 bg-white" />
            <div className="h-1/3 bg-white" />
            <div className="h-1/3 bg-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={contentRef}>
        {children}
      </div>
    </>
  );
};

export default Preloader;