// // // // // // // // // // 'use client'

// // // // // // // // // // import React, { useEffect, useRef, useState } from 'react';
// // // // // // // // // // import gsap from 'gsap';

// // // // // // // // // // const Preloader = ({ children }) => {
// // // // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // // // //   const containerRef = useRef(null);
// // // // // // // // // //   const leftColumnRef = useRef(null);
// // // // // // // // // //   const rightColumnRef = useRef(null);
// // // // // // // // // //   const imageRef = useRef(null);
// // // // // // // // // //   const videoRef = useRef(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     // Check if the page is being reloaded
// // // // // // // // // //     const isPageReloaded = sessionStorage.getItem('isPageReloaded');

// // // // // // // // // //     if (isPageReloaded) {
// // // // // // // // // //       setIsLoading(false);
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     // Mark the page as reloaded
// // // // // // // // // //     sessionStorage.setItem('isPageReloaded', 'true');

// // // // // // // // // //     // Ensure refs are available before proceeding
// // // // // // // // // //     if (!leftColumnRef.current || !rightColumnRef.current || !imageRef.current || !videoRef.current) {
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     const leftRows = leftColumnRef.current ? [...leftColumnRef.current.children].reverse() : [];
// // // // // // // // // //     const rightRows = rightColumnRef.current ? [...rightColumnRef.current.children] : [];

// // // // // // // // // //     // Set initial states
// // // // // // // // // //     gsap.set([leftColumnRef.current, rightColumnRef.current], {
// // // // // // // // // //       height: '100vh',
// // // // // // // // // //       width: '50%',
// // // // // // // // // //     });

// // // // // // // // // //     gsap.set(containerRef.current, {
// // // // // // // // // //       autoAlpha: 1
// // // // // // // // // //     });

// // // // // // // // // //     // Create the main timeline
// // // // // // // // // //     const tl = gsap.timeline({
// // // // // // // // // //       defaults: { ease: "power3.inOut" },
// // // // // // // // // //       onComplete: () => {
// // // // // // // // // //         setIsLoading(false);
// // // // // // // // // //       }
// // // // // // // // // //     });

// // // // // // // // // //     // Build the animation sequence
// // // // // // // // // //     tl
// // // // // // // // // //       // Fade in the logo
// // // // // // // // // //       .from(imageRef.current, {
// // // // // // // // // //         opacity: 0,
// // // // // // // // // //         duration: 1.2,
// // // // // // // // // //         delay: 0.5
// // // // // // // // // //       })
// // // // // // // // // //       // Hold for a moment
// // // // // // // // // //       .to(imageRef.current, {
// // // // // // // // // //         opacity: 0,
// // // // // // // // // //         duration: 0.5,
// // // // // // // // // //         delay: 1
// // // // // // // // // //       })
// // // // // // // // // //       // Animate out the columns
// // // // // // // // // //       .to(leftRows, {
// // // // // // // // // //         xPercent: -100,
// // // // // // // // // //         stagger: 0.1,
// // // // // // // // // //         duration: 1.2,
// // // // // // // // // //       })
// // // // // // // // // //       .to(rightRows, {
// // // // // // // // // //         xPercent: 100,
// // // // // // // // // //         stagger: 0.1,
// // // // // // // // // //         duration: 1.2,
// // // // // // // // // //       }, "<") // Start at the same time as left column
// // // // // // // // // //       // Fade out the entire preloader
// // // // // // // // // //       .to(containerRef.current, {
// // // // // // // // // //         autoAlpha: 0,
// // // // // // // // // //         duration: 0.5
// // // // // // // // // //       });

// // // // // // // // // //     // Listen for the video end event
// // // // // // // // // //     videoRef.current.onended = () => {
// // // // // // // // // //       tl.play();
// // // // // // // // // //     };

// // // // // // // // // //     // Cleanup
// // // // // // // // // //     return () => {
// // // // // // // // // //       tl.kill();
// // // // // // // // // //     };
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       <main style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
// // // // // // // // // //         {children}
// // // // // // // // // //       </main>

// // // // // // // // // //       {/* Preloader */}
// // // // // // // // // //       <div
// // // // // // // // // //         ref={containerRef}
// // // // // // // // // //         className="fixed inset-0 w-full h-full z-[9999] bg-white opacity-0"
// // // // // // // // // //       >
// // // // // // // // // //         {/* Left Column */}
// // // // // // // // // //         <div
// // // // // // // // // //           ref={leftColumnRef}
// // // // // // // // // //           className="fixed top-0 left-0 w-1/2 h-screen"
// // // // // // // // // //         >
// // // // // // // // // //           <div className="absolute top-0 w-full h-1/3 bg-white" />
// // // // // // // // // //           <div className="absolute top-1/3 w-full h-1/3 bg-white" />
// // // // // // // // // //           <div className="absolute top-2/3 w-full h-1/3 bg-white" />
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Right Column */}
// // // // // // // // // //         <div
// // // // // // // // // //           ref={rightColumnRef}
// // // // // // // // // //           className="fixed top-0 right-0 w-1/2 h-screen"
// // // // // // // // // //         >
// // // // // // // // // //           <div className="absolute top-0 w-full h-1/3 bg-white" />
// // // // // // // // // //           <div className="absolute top-1/3 w-full h-1/3 bg-white" />
// // // // // // // // // //           <div className="absolute top-2/3 w-full h-1/3 bg-white" />
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Centered Image/Logo */}
// // // // // // // // // //         <div
// // // // // // // // // //           ref={imageRef}
// // // // // // // // // //           className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
// // // // // // // // // //         >
// // // // // // // // // //           <video 
// // // // // // // // // //             ref={videoRef}
// // // // // // // // // //             autoPlay 
// // // // // // // // // //             loop 
// // // // // // // // // //             muted 
// // // // // // // // // //             playsInline 
// // // // // // // // // //             className="w-full h-full"
// // // // // // // // // //           >
// // // // // // // // // //             <source src="/images/5.mp4" type="video/mp4" />
// // // // // // // // // //           </video>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Preloader;
// // // // // // // // // "use client";
// // // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // // import gsap from 'gsap';

// // // // // // // // // const PageTransition = ({ children }) => {
// // // // // // // // //   const containerRef = useRef(null);
// // // // // // // // //   const leftColumnRef = useRef(null);
// // // // // // // // //   const rightColumnRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     // Create references to all rows
// // // // // // // // //     const leftRows = leftColumnRef.current.children;
// // // // // // // // //     const rightRows = rightColumnRef.current.children;

// // // // // // // // //     // Initial state - set columns to cover the screen
// // // // // // // // //     gsap.set([leftColumnRef.current, rightColumnRef.current], {
// // // // // // // // //       height: '100vh',
// // // // // // // // //       width: '50%',
// // // // // // // // //     });

// // // // // // // // //     // Create timeline for the animation
// // // // // // // // //     const tl = gsap.timeline({
// // // // // // // // //       defaults: { duration: 1.2, ease: "power3.inOut" }
// // // // // // // // //     });

// // // // // // // // //     // Animate left column rows
// // // // // // // // //     tl.to([...leftRows], {
// // // // // // // // //       xPercent: -100,
// // // // // // // // //       stagger: 0.1
// // // // // // // // //     });

// // // // // // // // //     // Animate right column rows simultaneously
// // // // // // // // //     tl.to([...rightRows], {
// // // // // // // // //       xPercent: 100,
// // // // // // // // //       stagger: 0.1
// // // // // // // // //     }, "<"); // Start at the same time as left column

// // // // // // // // //     // After animation, show the content
// // // // // // // // //     tl.to('.content-container', {
// // // // // // // // //       opacity: 1,
// // // // // // // // //       duration: 0.5
// // // // // // // // //     });

// // // // // // // // //     return () => {
// // // // // // // // //       tl.kill();
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div ref={containerRef} className="relative min-h-screen overflow-hidden">
// // // // // // // // //       {/* Left Column */}
// // // // // // // // //       <div 
// // // // // // // // //         ref={leftColumnRef} 
// // // // // // // // //         className="fixed top-0 left-0 bg-black"
// // // // // // // // //       >
// // // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // // //       </div>

// // // // // // // // //       {/* Right Column */}
// // // // // // // // //       <div 
// // // // // // // // //         ref={rightColumnRef} 
// // // // // // // // //         className="fixed top-0 right-0 bg-black"
// // // // // // // // //       >
// // // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // // //       </div>

// // // // // // // // //       {/* Content */}
// // // // // // // // //       <div className="content-container opacity-0">
// // // // // // // // //         {children}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default PageTransition;
// // // // // // // // "use client";

// // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // import gsap from 'gsap';

// // // // // // // // const Preloader = ({ children }) => {
// // // // // // // //   const containerRef = useRef(null);
// // // // // // // //   const leftColumnRef = useRef(null);
// // // // // // // //   const rightColumnRef = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     // Create references to all rows
// // // // // // // //     const leftRows = leftColumnRef.current.children;
// // // // // // // //     const rightRows = rightColumnRef.current.children;

// // // // // // // //     // Initial state - set columns to cover the screen and be fully visible
// // // // // // // //     gsap.set([leftColumnRef.current, rightColumnRef.current], {
// // // // // // // //       height: '100vh',
// // // // // // // //       width: '50%',
// // // // // // // //       xPercent: 0 // Ensure columns start at their natural position
// // // // // // // //     });

// // // // // // // //     // Create timeline for the animation
// // // // // // // //     const tl = gsap.timeline({
// // // // // // // //       defaults: { duration: 1.2, ease: "power3.inOut" }
// // // // // // // //     });

// // // // // // // //     // Animate left column rows
// // // // // // // //     tl.to([...leftRows], {
// // // // // // // //       xPercent: -100,
// // // // // // // //       stagger: 0.1
// // // // // // // //     });

// // // // // // // //     // Animate right column rows simultaneously
// // // // // // // //     tl.to([...rightRows], {
// // // // // // // //       xPercent: 100,
// // // // // // // //       stagger: 0.1
// // // // // // // //     }, "<"); // Start at the same time as left column

// // // // // // // //     // After animation, show the content
// // // // // // // //     tl.to('.content-container', {
// // // // // // // //       opacity: 1,
// // // // // // // //       duration: 0.5
// // // // // // // //     });

// // // // // // // //     return () => {
// // // // // // // //       tl.kill();
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div ref={containerRef} className="relative min-h-screen overflow-hidden">
// // // // // // // //       {/* Left Column - starts fully visible */}
// // // // // // // //       <div 
// // // // // // // //         ref={leftColumnRef}
// // // // // // // //         className="fixed top-0 left-0 bg-black h-screen w-1/2"
// // // // // // // //       >
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //       </div>

// // // // // // // //       {/* Right Column - starts fully visible */}
// // // // // // // //       <div 
// // // // // // // //         ref={rightColumnRef}
// // // // // // // //         className="fixed top-0 right-0 bg-black h-screen w-1/2"
// // // // // // // //       >
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //       </div>

// // // // // // // //       {/* Content */}
// // // // // // // //       <div className="content-container opacity-0">
// // // // // // // //         {children}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Preloader;
// // // // // // // // "use client";

// // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // import gsap from 'gsap';

// // // // // // // // const Preloader = ({ children, videoSrc }) => {
// // // // // // // //   const containerRef = useRef(null);
// // // // // // // //   const videoRef = useRef(null);
// // // // // // // //   const leftColumnRef = useRef(null);
// // // // // // // //   const rightColumnRef = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const video = videoRef.current;
// // // // // // // //     const leftRows = leftColumnRef.current.children;
// // // // // // // //     const rightRows = rightColumnRef.current.children;

// // // // // // // //     // Initial state setup
// // // // // // // //     gsap.set([leftColumnRef.current, rightColumnRef.current], {
// // // // // // // //       height: '100vh',
// // // // // // // //       width: '50%',
// // // // // // // //       xPercent: 0
// // // // // // // //     });

// // // // // // // //     // Create the main timeline
// // // // // // // //     const mainTl = gsap.timeline({
// // // // // // // //       defaults: { duration: 1.2, ease: "power3.inOut" }
// // // // // // // //     });

// // // // // // // //     // Create video fade out timeline
// // // // // // // //     const videoFadeOut = gsap.timeline({
// // // // // // // //       paused: true,
// // // // // // // //       onComplete: () => {
// // // // // // // //         // Start the reveal animation after video fades out
// // // // // // // //         startRevealAnimation();
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     videoFadeOut.to(video, {
// // // // // // // //       opacity: 0,
// // // // // // // //       duration: 0.5,
// // // // // // // //       ease: "power2.inOut"
// // // // // // // //     });

// // // // // // // //     // Function to handle the reveal animation
// // // // // // // //     const startRevealAnimation = () => {
// // // // // // // //       // Animate left column rows
// // // // // // // //       mainTl.to([...leftRows], {
// // // // // // // //         xPercent: -100,
// // // // // // // //         stagger: 0.1
// // // // // // // //       });

// // // // // // // //       // Animate right column rows simultaneously
// // // // // // // //       mainTl.to([...rightRows], {
// // // // // // // //         xPercent: 100,
// // // // // // // //         stagger: 0.1
// // // // // // // //       }, "<"); // Start at the same time as left column

// // // // // // // //       // Show the content
// // // // // // // //       mainTl.to('.content-container', {
// // // // // // // //         opacity: 1,
// // // // // // // //         duration: 0.5
// // // // // // // //       });
// // // // // // // //     };

// // // // // // // //     // Video event handlers
// // // // // // // //     const handleVideoEnd = () => {
// // // // // // // //       videoFadeOut.play();
// // // // // // // //     };

// // // // // // // //     video.addEventListener('ended', handleVideoEnd);

// // // // // // // //     return () => {
// // // // // // // //       video.removeEventListener('ended', handleVideoEnd);
// // // // // // // //       mainTl.kill();
// // // // // // // //       videoFadeOut.kill();
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div ref={containerRef} className="relative min-h-screen overflow-hidden">
// // // // // // // //       {/* Video Container */}
// // // // // // // //       <div className="fixed inset-0 flex items-center justify-center z-50 bg-white">
// // // // // // // //         <video 
// // // // // // // //           ref={videoRef}
// // // // // // // //           className="w-full h-full "
// // // // // // // //           autoPlay
// // // // // // // //           muted
// // // // // // // //           playsInline
// // // // // // // //         >
// // // // // // // //           <source src='/images/5.mp4' type="video/mp4" />
// // // // // // // //           Your browser does not support the video tag.
// // // // // // // //         </video>
// // // // // // // //       </div>

// // // // // // // //       {/* Left Column */}
// // // // // // // //       <div 
// // // // // // // //         ref={leftColumnRef}
// // // // // // // //         className="fixed top-0 left-0 bg-black h-screen w-1/2"
// // // // // // // //       >
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //       </div>

// // // // // // // //       {/* Right Column */}
// // // // // // // //       <div 
// // // // // // // //         ref={rightColumnRef}
// // // // // // // //         className="fixed top-0 right-0 bg-black h-screen w-1/2"
// // // // // // // //       >
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // // //       </div>

// // // // // // // //       {/* Content */}
// // // // // // // //       <div className="content-container opacity-0">
// // // // // // // //         {children}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Preloader;
// // // // // // // "use client";

// // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // import gsap from 'gsap';

// // // // // // // const Preloader = ({ children }) => {
// // // // // // //   const containerRef = useRef(null);
// // // // // // //   const videoRef = useRef(null);
// // // // // // //   const videoContainerRef = useRef(null);
// // // // // // //   const leftColumnRef = useRef(null);
// // // // // // //   const rightColumnRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const video = videoRef.current;
// // // // // // //     const videoContainer = videoContainerRef.current;
// // // // // // //     const leftRows = leftColumnRef.current.children;
// // // // // // //     const rightRows = rightColumnRef.current.children;

// // // // // // //     // Create the main timeline
// // // // // // //     const mainTl = gsap.timeline({
// // // // // // //       defaults: { duration: 1.2, ease: "power3.inOut" }
// // // // // // //     });

// // // // // // //     // Function to handle the reveal animation
// // // // // // //     const startRevealAnimation = () => {
// // // // // // //       // Animate left column rows
// // // // // // //       mainTl.to([...leftRows], {
// // // // // // //         xPercent: -100,
// // // // // // //         stagger: 0.1
// // // // // // //       })
// // // // // // //       // Animate right column rows simultaneously
// // // // // // //       .to([...rightRows], {
// // // // // // //         xPercent: 100,
// // // // // // //         stagger: 0.1
// // // // // // //       }, "<") // Start at the same time as left column
// // // // // // //       // Show the content
// // // // // // //       .to('.content-container', {
// // // // // // //         opacity: 1,
// // // // // // //         duration: 0.5
// // // // // // //       });
// // // // // // //     };

// // // // // // //     // Video event handlers
// // // // // // //     const handleVideoEnd = () => {
// // // // // // //       // Create a timeline for video fade out
// // // // // // //       const videoFadeOut = gsap.timeline({
// // // // // // //         onComplete: () => {
// // // // // // //           videoContainer.style.display = 'none'; // Hide video container after fade
// // // // // // //           startRevealAnimation();
// // // // // // //         }
// // // // // // //       });

// // // // // // //       videoFadeOut.to(videoContainer, {
// // // // // // //         opacity: 0,
// // // // // // //         duration: 0.5,
// // // // // // //         ease: "power2.inOut"
// // // // // // //       });
// // // // // // //     };

// // // // // // //     video.addEventListener('ended', handleVideoEnd);

// // // // // // //     return () => {
// // // // // // //       video.removeEventListener('ended', handleVideoEnd);
// // // // // // //       mainTl.kill();
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div ref={containerRef} className="relative min-h-screen overflow-hidden">
// // // // // // //       {/* Video Container */}
// // // // // // //       <div 
// // // // // // //         ref={videoContainerRef}
// // // // // // //         className="fixed inset-0 flex items-center justify-center z-50 bg-white"
// // // // // // //       >
// // // // // // //         <video 
// // // // // // //           ref={videoRef}
// // // // // // //           className="w-full h-full object-cover"
// // // // // // //           autoPlay
// // // // // // //           muted
// // // // // // //           playsInline
// // // // // // //         >
// // // // // // //           <source src='/images/5.mp4' type="video/mp4" />
// // // // // // //           Your browser does not support the video tag.
// // // // // // //         </video>
// // // // // // //       </div>

// // // // // // //       {/* Left Column */}
// // // // // // //       <div 
// // // // // // //         ref={leftColumnRef}
// // // // // // //         className="fixed top-0 left-0 bg-black h-screen w-1/2 z-40"
// // // // // // //       >
// // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // //       </div>

// // // // // // //       {/* Right Column */}
// // // // // // //       <div 
// // // // // // //         ref={rightColumnRef}
// // // // // // //         className="fixed top-0 right-0 bg-black h-screen w-1/2 z-40"
// // // // // // //       >
// // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // //         <div className="h-1/3 bg-white" />
// // // // // // //       </div>

// // // // // // //       {/* Content */}
// // // // // // //       <div className="content-container opacity-0 z-50">
// // // // // // //         {children}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Preloader;
// // // // // // "use client";

// // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // import gsap from 'gsap';

// // // // // // const Preloader = ({ children }) => {
// // // // // //   const containerRef = useRef(null);
// // // // // //   const videoRef = useRef(null);
// // // // // //   const videoContainerRef = useRef(null);
// // // // // //   const leftColumnRef = useRef(null);
// // // // // //   const rightColumnRef = useRef(null);
// // // // // //   const contentRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const video = videoRef.current;
// // // // // //     const videoContainer = videoContainerRef.current;
// // // // // //     const leftRows = leftColumnRef.current.children;
// // // // // //     const rightRows = rightColumnRef.current.children;
// // // // // //     const content = contentRef.current;

// // // // // //     // Initially hide the content
// // // // // //     gsap.set(content, { opacity: 0 });

// // // // // //     // Create the main timeline
// // // // // //     const mainTl = gsap.timeline({
// // // // // //       defaults: { duration: 1.2, ease: "power3.inOut" }
// // // // // //     });

// // // // // //     // Function to handle the reveal animation
// // // // // //     const startRevealAnimation = () => {
// // // // // //       mainTl
// // // // // //         // Animate left column rows
// // // // // //         .to([...leftRows], {
// // // // // //           xPercent: -100,
// // // // // //           stagger: 0.1
// // // // // //         })
// // // // // //         // Animate right column rows simultaneously
// // // // // //         .to([...rightRows], {
// // // // // //           xPercent: 100,
// // // // // //           stagger: 0.1
// // // // // //         }, "<")
// // // // // //         // Show the content
// // // // // //         .to(content, {
// // // // // //           opacity: 1,
// // // // // //           duration: 0.5
// // // // // //         })
// // // // // //         // Hide the preloader columns completely
// // // // // //         .set([leftColumnRef.current, rightColumnRef.current], {
// // // // // //           display: 'none'
// // // // // //         });
// // // // // //     };

// // // // // //     // Video event handlers
// // // // // //     const handleVideoEnd = () => {
// // // // // //       // Create a timeline for video fade out
// // // // // //       const videoFadeOut = gsap.timeline({
// // // // // //         onComplete: () => {
// // // // // //           videoContainer.style.display = 'none';
// // // // // //           startRevealAnimation();
// // // // // //         }
// // // // // //       });

// // // // // //       videoFadeOut.to(videoContainer, {
// // // // // //         opacity: 0,
// // // // // //         duration: 0.5,
// // // // // //         ease: "power2.inOut"
// // // // // //       });
// // // // // //     };

// // // // // //     video.addEventListener('ended', handleVideoEnd);

// // // // // //     return () => {
// // // // // //       video.removeEventListener('ended', handleVideoEnd);
// // // // // //       mainTl.kill();
// // // // // //     };
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div ref={containerRef} className="relative">
// // // // // //       {/* Video Container */}
// // // // // //       <div 
// // // // // //         ref={videoContainerRef}
// // // // // //         className="fixed inset-0 flex items-center justify-center z-50 bg-white"
// // // // // //       >
// // // // // //         <video 
// // // // // //           ref={videoRef}
// // // // // //           className="w-full h-full object-cover"
// // // // // //           autoPlay
// // // // // //           muted
// // // // // //           playsInline
// // // // // //         >
// // // // // //           <source src='/images/5.mp4' type="video/mp4" />
// // // // // //           Your browser does not support the video tag.
// // // // // //         </video>
// // // // // //       </div>

// // // // // //       {/* Preloader columns */}
// // // // // //       <div className="fixed inset-0 z-40 pointer-events-none">
// // // // // //         {/* Left Column */}
// // // // // //         <div 
// // // // // //           ref={leftColumnRef}
// // // // // //           className="absolute top-0 left-0 h-screen w-1/2 bg-black"
// // // // // //         >
// // // // // //           <div className="h-1/3 bg-white" />
// // // // // //           <div className="h-1/3 bg-white" />
// // // // // //           <div className="h-1/3 bg-white" />
// // // // // //         </div>

// // // // // //         {/* Right Column */}
// // // // // //         <div 
// // // // // //           ref={rightColumnRef}
// // // // // //           className="absolute top-0 right-0 h-screen w-1/2 bg-black"
// // // // // //         >
// // // // // //           <div className="h-1/3 bg-white" />
// // // // // //           <div className="h-1/3 bg-white" />
// // // // // //           <div className="h-1/3 bg-white" />
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Content */}
// // // // // //       <div ref={contentRef} className="relative z-30">
// // // // // //         {children}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Preloader;
// // // // // "use client";

// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import gsap from 'gsap';

// // // // // const Preloader = ({ children }) => {
// // // // //   const containerRef = useRef(null);
// // // // //   const videoRef = useRef(null);
// // // // //   const videoContainerRef = useRef(null);
// // // // //   const leftColumnRef = useRef(null);
// // // // //   const rightColumnRef = useRef(null);
// // // // //   const contentRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const video = videoRef.current;
// // // // //     const videoContainer = videoContainerRef.current;
// // // // //     const leftRows = leftColumnRef.current.children;
// // // // //     const rightRows = rightColumnRef.current.children;
// // // // //     const content = contentRef.current;

// // // // //     // Set initial states
// // // // //     gsap.set(content, { opacity: 1 }); // Keep content visible from the start

// // // // //     // Create the main timeline
// // // // //     const mainTl = gsap.timeline({
// // // // //       defaults: { duration: 1.2, ease: "power3.inOut" }
// // // // //     });

// // // // //     // Function to handle the reveal animation
// // // // //     const startRevealAnimation = () => {
// // // // //       mainTl
// // // // //         // Animate left column rows
// // // // //         .to([...leftRows], {
// // // // //           xPercent: -100,
// // // // //           stagger: 0.1
// // // // //         })
// // // // //         // Animate right column rows simultaneously
// // // // //         .to([...rightRows], {
// // // // //           xPercent: 100,
// // // // //           stagger: 0.1
// // // // //         }, "<")
// // // // //         // Remove the preloader columns
// // // // //         .set([leftColumnRef.current, rightColumnRef.current], {
// // // // //           display: 'none'
// // // // //         });
// // // // //     };

// // // // //     // Video event handlers
// // // // //     const handleVideoEnd = () => {
// // // // //       // Create a timeline for video fade out
// // // // //       const videoFadeOut = gsap.timeline({
// // // // //         onComplete: () => {
// // // // //           videoContainer.style.display = 'none';
// // // // //           startRevealAnimation();
// // // // //         }
// // // // //       });

// // // // //       videoFadeOut.to(videoContainer, {
// // // // //         opacity: 0,
// // // // //         duration: 0.5,
// // // // //         ease: "power2.inOut"
// // // // //       });
// // // // //     };

// // // // //     video.addEventListener('ended', handleVideoEnd);

// // // // //     return () => {
// // // // //       video.removeEventListener('ended', handleVideoEnd);
// // // // //       mainTl.kill();
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <div ref={containerRef} className="relative">
// // // // //       {/* Video Container */}
// // // // //       <div 
// // // // //         ref={videoContainerRef}
// // // // //         className="fixed inset-0 flex items-center justify-center z-50 bg-white"
// // // // //       >
// // // // //         <video 
// // // // //           ref={videoRef}
// // // // //           className="w-full h-full object-cover"
// // // // //           autoPlay
// // // // //           muted
// // // // //           playsInline
// // // // //         >
// // // // //           <source src='/images/5.mp4' type="video/mp4" />
// // // // //           Your browser does not support the video tag.
// // // // //         </video>
// // // // //       </div>

// // // // //       {/* Content - Always visible */}
// // // // //       <div ref={contentRef} className="relative z-30">
// // // // //         {children}
// // // // //       </div>

// // // // //       {/* Preloader columns - On top of content */}
// // // // //       <div className="fixed inset-0 z-40 pointer-events-none">
// // // // //         {/* Left Column */}
// // // // //         <div 
// // // // //           ref={leftColumnRef}
// // // // //           className="absolute top-0 left-0 h-screen w-1/2"
// // // // //         >
// // // // //           <div className="h-1/3 bg-white" />
// // // // //           <div className="h-1/3 bg-white" />
// // // // //           <div className="h-1/3 bg-white" />
// // // // //         </div>

// // // // //         {/* Right Column */}
// // // // //         <div 
// // // // //           ref={rightColumnRef}
// // // // //           className="absolute top-0 right-0 h-screen w-1/2"
// // // // //         >
// // // // //           <div className="h-1/3 bg-white" />
// // // // //           <div className="h-1/3 bg-white" />
// // // // //           <div className="h-1/3 bg-white" />
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Preloader;
// // // // "use client";

// // // // import React, { useEffect, useRef } from 'react';
// // // // import gsap from 'gsap';

// // // // const Preloader = ({ children }) => {
// // // //   const containerRef = useRef(null);
// // // //   const videoRef = useRef(null);
// // // //   const videoContainerRef = useRef(null);
// // // //   const leftColumnRef = useRef(null);
// // // //   const rightColumnRef = useRef(null);
// // // //   const contentRef = useRef(null);
// // // //   const preloaderContainerRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const video = videoRef.current;
// // // //     const videoContainer = videoContainerRef.current;
// // // //     const leftRows = leftColumnRef.current.children;
// // // //     const rightRows = rightColumnRef.current.children;
// // // //     const content = contentRef.current;
// // // //     const preloaderContainer = preloaderContainerRef.current;

// // // //     // Set initial states
// // // //     gsap.set(content, { opacity: 1 }); // Keep content visible
// // // //     gsap.set(preloaderContainer, { 
// // // //       position: 'fixed',
// // // //       top: 0,
// // // //       left: 0,
// // // //       width: '100%',
// // // //       height: '100%',
// // // //       zIndex: 9999999999
// // // //     });

// // // //     // Create the main timeline
// // // //     const mainTl = gsap.timeline({
// // // //       defaults: { duration: 1.2, ease: "power3.inOut" }
// // // //     });

// // // //     // Function to handle the reveal animation
// // // //     const startRevealAnimation = () => {
// // // //       mainTl
// // // //         .to([...leftRows], {
// // // //           xPercent: -100,
// // // //           stagger: 0.1
// // // //         })
// // // //         .to([...rightRows], {
// // // //           xPercent: 100,
// // // //           stagger: 0.1
// // // //         }, "<")
// // // //         .set(preloaderContainer, { 
// // // //           display: 'none'
// // // //         });
// // // //     };

// // // //     // Video event handlers
// // // //     const handleVideoEnd = () => {
// // // //       const videoFadeOut = gsap.timeline({
// // // //         onComplete: () => {
// // // //           videoContainer.style.display = 'none';
// // // //           startRevealAnimation();
// // // //         }
// // // //       });

// // // //       videoFadeOut.to(videoContainer, {
// // // //         opacity: 0,
// // // //         duration: 0.5,
// // // //         ease: "power2.inOut"
// // // //       });
// // // //     };

// // // //     video.addEventListener('ended', handleVideoEnd);

// // // //     // Prevent body scroll during preloader
// // // //     document.body.style.overflow = 'hidden';

// // // //     return () => {
// // // //       video.removeEventListener('ended', handleVideoEnd);
// // // //       mainTl.kill();
// // // //       document.body.style.overflow = ''; // Restore scroll
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       {/* Preloader Container */}
// // // //       <div ref={preloaderContainerRef} className="fixed inset-0 z-[9999999999]">
// // // //         {/* Video Container */}
// // // //         <div 
// // // //           ref={videoContainerRef}
// // // //           className="fixed inset-0 w-[100vw] -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] z-[9999] bg-white"
// // // //         >
// // // //           <video 
// // // //             ref={videoRef}
// // // //             className="w-full h-full object-contain"
// // // //             autoPlay
// // // //             muted
// // // //             playsInline
// // // //           >
// // // //             <source src='/images/5.mp4' type="video/mp4" />
// // // //           </video>
// // // //         </div>

// // // //         {/* Preloader columns */}
// // // //         <div className="fixed inset-0 z-[9998] pointer-events-none">
// // // //           {/* Left Column */}
// // // //           <div 
// // // //             ref={leftColumnRef}
// // // //             className="absolute top-0 left-0 h-screen w-1/2"
// // // //           >
// // // //             <div className="h-1/3 bg-white" />
// // // //             <div className="h-1/3 bg-white" />
// // // //             <div className="h-1/3 bg-white" />
// // // //           </div>

// // // //           {/* Right Column */}
// // // //           <div 
// // // //             ref={rightColumnRef}
// // // //             className="absolute top-0 right-0 h-screen w-1/2"
// // // //           >
// // // //             <div className="h-1/3 bg-white" />
// // // //             <div className="h-1/3 bg-white" />
// // // //             <div className="h-1/3 bg-white" />
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Main Content */}
// // // //       <div ref={contentRef}>
// // // //         {children}
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Preloader;
// // // "use client";

// // // import React, { useEffect, useRef, useState } from 'react';
// // // import gsap from 'gsap';

// // // const Preloader = ({ children }) => {
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const containerRef = useRef(null);
// // //   const videoRef = useRef(null);
// // //   const videoContainerRef = useRef(null);
// // //   const leftColumnRef = useRef(null);
// // //   const rightColumnRef = useRef(null);
// // //   const contentRef = useRef(null);
// // //   const preloaderContainerRef = useRef(null);

// // //   useEffect(() => {
// // //     if (!isLoading) return;

// // //     const video = videoRef.current;
// // //     const videoContainer = videoContainerRef.current;
// // //     const leftRows = leftColumnRef.current?.children || [];
// // //     const rightRows = rightColumnRef.current?.children || [];
// // //     const content = contentRef.current;
// // //     const preloaderContainer = preloaderContainerRef.current;

// // //     // Set initial states
// // //     gsap.set(content, { opacity: 1 });
// // //     gsap.set(preloaderContainer, { 
// // //       position: 'fixed',
// // //       top: 0,
// // //       left: 0,
// // //       width: '100%',
// // //       height: '100%',
// // //       zIndex: 9999999999
// // //     });

// // //     const mainTl = gsap.timeline({
// // //       defaults: { duration: 1.2, ease: "power3.inOut" }
// // //     });

// // //     const startRevealAnimation = () => {
// // //       mainTl
// // //         .to([...leftRows], {
// // //           xPercent: -100,
// // //           stagger: 0.1
// // //         })
// // //         .to([...rightRows], {
// // //           xPercent: 100,
// // //           stagger: 0.1
// // //         }, "<")
// // //         .set(preloaderContainer, { 
// // //           display: 'none'
// // //         });
// // //     };

// // //     const handleVideoEnd = () => {
// // //       const videoFadeOut = gsap.timeline({
// // //         onComplete: () => {
// // //           videoContainer.style.display = 'none';
// // //           startRevealAnimation();
// // //           setIsLoading(false); // Disable preloader after animation
// // //         }
// // //       });

// // //       videoFadeOut.to(videoContainer, {
// // //         opacity: 0,
// // //         duration: 0.5,
// // //         ease: "power2.inOut"
// // //       });
// // //     };

// // //     video.addEventListener('ended', handleVideoEnd);
// // //     document.body.style.overflow = 'hidden';

// // //     return () => {
// // //       video.removeEventListener('ended', handleVideoEnd);
// // //       mainTl.kill();
// // //       document.body.style.overflow = '';
// // //     };
// // //   }, [isLoading]);

// // //   return (
// // //     <>
// // //       {isLoading && (
// // //         <div ref={preloaderContainerRef} className="fixed inset-0 z-[9999999999]">
// // //           <div 
// // //             ref={videoContainerRef}
// // //             className="fixed inset-0 w-[100vw] -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] z-[9999] bg-white"
// // //           >
// // //             <video 
// // //               ref={videoRef}
// // //               className="w-full h-full object-contain"
// // //               autoPlay
// // //               muted
// // //               playsInline
// // //             >
// // //               <source src='/images/5.mp4' type="video/mp4" />
// // //             </video>
// // //           </div>

// // //           <div className="fixed inset-0 z-[9998] pointer-events-none">
// // //             <div 
// // //               ref={leftColumnRef}
// // //               className="absolute top-0 left-0 h-screen w-1/2"
// // //             >
// // //               {[...Array(3)].map((_, i) => (
// // //                 <div key={i} className="h-1/3 bg-white" />
// // //               ))}
// // //             </div>

// // //             <div 
// // //               ref={rightColumnRef}
// // //               className="absolute top-0 right-0 h-screen w-1/2"
// // //             >
// // //               {[...Array(3)].map((_, i) => (
// // //                 <div key={i} className="h-1/3 bg-white" />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <div ref={contentRef}>
// // //         {children}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Preloader;
// // "use client";

// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';

// // const Preloader = ({ children }) => {
// //   const containerRef = useRef(null);
// //   const videoRef = useRef(null);
// //   const videoContainerRef = useRef(null);
// //   const leftColumnRef = useRef(null);
// //   const rightColumnRef = useRef(null);
// //   const contentRef = useRef(null);
// //   const preloaderContainerRef = useRef(null);
// //   const animationRef = useRef(null);

// //   useEffect(() => {
// //     const preloaderShown = sessionStorage.getItem('preloaderShown');
// //     const isReload = performance.navigation?.type === 1; // Check for reload

// //     // Show preloader only on initial load or reload
// //     if (!preloaderShown || isReload) {
// //       startPreloaderAnimation();
// //       sessionStorage.setItem('preloaderShown', 'true');
// //     } else {
// //       gsap.set(preloaderContainerRef.current, { display: 'none' });
// //     }

// //     // Clear flag on page unload (reload or close)
// //     const handleBeforeUnload = () => {
// //       sessionStorage.removeItem('preloaderShown');
// //     };

// //     window.addEventListener('beforeunload', handleBeforeUnload);

// //     return () => {
// //       window.removeEventListener('beforeunload', handleBeforeUnload);
// //       if (animationRef.current) animationRef.current.kill();
// //     };
// //   }, []);

// //   const startPreloaderAnimation = () => {
// //     const video = videoRef.current;
// //     const videoContainer = videoContainerRef.current;
// //     const leftRows = leftColumnRef.current?.children || [];
// //     const rightRows = rightColumnRef.current?.children || [];
// //     const preloaderContainer = preloaderContainerRef.current;

// //     document.body.style.overflow = 'hidden';

// //     animationRef.current = gsap.timeline({
// //       defaults: { duration: 1.2, ease: "power3.inOut" }
// //     });

// //     // Initial setup
// //     gsap.set(preloaderContainer, {
// //       display: 'block',
// //       opacity: 1,
// //       zIndex: 9999999999
// //     });

// //     // Video animation
// //     const handleVideoEnd = () => {
// //       animationRef.current
// //         .to(videoContainer, {
// //           opacity: 0,
// //           duration: 0.5,
// //           ease: "power2.inOut"
// //         })
// //         .to([...leftRows], {
// //           xPercent: -100,
// //           stagger: 0.1
// //         }, "<")
// //         .to([...rightRows], {
// //           xPercent: 100,
// //           stagger: 0.1
// //         }, "<")
// //         .to(preloaderContainer, {
// //           opacity: 0,
// //           duration: 0.4,
// //           onComplete: () => {
// //             gsap.set(preloaderContainer, { display: 'none' });
// //             document.body.style.overflow = '';
// //           }
// //         });
// //     };

// //     video.addEventListener('ended', handleVideoEnd);

// //     return () => {
// //       video.removeEventListener('ended', handleVideoEnd);
// //     };
// //   };

// //   return (
// //     <>
// //       {/* Preloader Container (always in DOM) */}
// //       <div ref={preloaderContainerRef} className="fixed inset-0">
// //         {/* Video Container */}
// //         <div 
// //           ref={videoContainerRef}
// //           className="fixed inset-0 w-[100vw] -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] z-[9999] bg-white"
// //         >
// //           <video 
// //             ref={videoRef}
// //             className="w-full h-full object-contain"
// //             autoPlay
// //             muted
// //             playsInline
// //           >
// //             <source src='/images/5.mp4' type="video/mp4" />
// //           </video>
// //         </div>

// //         {/* Animation Columns */}
// //         <div className="fixed inset-0 z-[9998] pointer-events-none">
// //           <div ref={leftColumnRef} className="absolute top-0 left-0 h-screen w-1/2">
// //             {[...Array(3)].map((_, i) => (
// //               <div key={i} className="h-1/3 bg-white" />
// //             ))}
// //           </div>
// //           <div ref={rightColumnRef} className="absolute top-0 right-0 h-screen w-1/2">
// //             {[...Array(3)].map((_, i) => (
// //               <div key={i} className="h-1/3 bg-white" />
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div ref={contentRef}>
// //         {children}
// //       </div>
// //     </>
// //   );
// // };

// // export default Preloader;
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
//           className="fixed inset-0 w-[100vw] -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] z-[9999] bg-white"
//         >
//           <video 
//             ref={videoRef}
//             className="w-full h-full object-contain"
//             autoPlay
//             muted
//             playsInline
//           >
//             <source src='/images/5.mp4' type="video/mp4" />
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

    // Clear session storage on page refresh/close
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('hasVisited');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      mainTl.kill();
      document.body.style.overflow = '';
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
          className="fixed inset-0 w-[100vw] -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] z-[9999] bg-white"
        >
          <video 
            ref={videoRef}
            className="w-full h-full object-contain"
            autoPlay
            muted
            playsInline
          >
            <source src='/images/5.mp4' type="video/mp4" />
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