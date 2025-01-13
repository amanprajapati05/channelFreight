// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';

// // const CircularProgress = ({ kilometers = 777, hours = 19, progress = 55 }) => {
// //   const circleRef = useRef(null);
// //   const dotRef = useRef(null);
  
// //   useEffect(() => {
// //     // Calculate the stroke dash values
// //     const circle = circleRef.current;
// //     const circumference = 2578.55; // This matches your original SVG path length
// //     const offset = circumference - (progress / 100) * circumference;
    
// //     // Animate the progress circle
// //     gsap.to(circle, {
// //       strokeDashoffset: offset,
// //       duration: 1.5,
// //       ease: "power2.inOut"
// //     });
    
// //     // Animate the dot rotation
// //     gsap.to(dotRef.current, {
// //       rotation: (progress / 100) * 360,
// //       duration: 1.5,
// //       ease: "power2.inOut"
// //     });
    
// //     // Show time after progress animation
// //     gsap.to("#tiempo", {
// //       opacity: 1,
// //       visibility: "visible",
// //       duration: 0.5,
// //       delay: 1.5
// //     });
// //   }, [progress]);

// //   return (
// //     <div className="relative w-[300px] h-[300px] flex items-center justify-center">
// //       {/* Dot head */}
// //       <div 
// //         ref={dotRef}
// //         className="absolute w-3 h-3 bg-blue-500 rounded-full"
// //         style={{
// //           top: '0%',
// //           left: '50%',
// //           transform: 'translate(-50%, -50%)',
// //           transformOrigin: '50% 150px' // Half of circle height
// //         }}
// //       />
      
// //       {/* SVG Circle */}
// //       <svg 
// //         className="w-full h-full"
// //         viewBox="0 0 1024 1024" 
// //         xmlns="http://www.w3.org/2000/svg"
// //       >
// //         <g>
// //           {/* Progress Path */}
// //           <path
// //             ref={circleRef}
// //             className="stroke-blue-500 fill-none"
// //             strokeWidth="2"
// //             strokeLinecap="round"
// //             d="M512,1023.5c-69.1,0-136-13.5-199.1-40.2c-60.9-25.8-115.6-62.6-162.6-109.6c-47-47-83.9-101.7-109.6-162.6
// //             C14,648,0.5,581.1,0.5,512c0-69.1,13.5-136,40.2-199.1c25.8-60.9,62.6-115.6,109.6-162.6c47-47,101.7-83.9,162.6-109.6
// //             C376,14,442.9,0.5,512,0.5c69.1,0,136,13.5,199.1,40.2c60.9,25.8,115.6,62.6,162.6,109.6c47,47,83.9,101.7,109.6,162.6
// //             c26.7,63.1,40.2,130,40.2,199.1c0,69.1-13.5,136-40.2,199.1c-25.8,60.9-62.6,115.6-109.6,162.6c-47,47-101.7,83.9-162.6,109.6
// //             C648,1010,581.1,1023.5,512,1023.5z"
// //             style={{
// //               strokeDasharray: "2578.55 636.035",
// //               strokeDashoffset: 0
// //             }}
// //           />
          
// //           {/* Background Circle */}
// //           <path
// //             className="stroke-gray-200 fill-none"
// //             strokeWidth="1"
// //             d="M512,1c69,0,135.9,13.5,198.9,40.2c60.8,25.7,115.5,62.6,162.4,109.5c46.9,46.9,83.8,101.6,109.5,162.4
// //             c26.6,63,40.2,129.9,40.2,198.9s-13.5,135.9-40.2,198.9c-25.7,60.8-62.6,115.5-109.5,162.4c-46.9,46.9-101.6,83.8-162.4,109.5
// //             c-63,26.6-129.9,40.2-198.9,40.2s-135.9-13.5-198.9-40.2c-60.8-25.7-115.5-62.6-162.4-109.5c-46.9-46.9-83.8-101.6-109.5-162.4
// //             C14.5,647.9,1,581,1,512s13.5-135.9,40.2-198.9c25.7-60.8,62.6-115.5,109.5-162.4c46.9-46.9,101.6-83.8,162.4-109.5
// //             C376.1,14.5,443,1,512,1z"
// //           />
// //         </g>
// //       </svg>
      
// //       {/* Center Content */}
// //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
// //         <div className="text-4xl font-bold text-blue-500" id="kilometrosnum">
// //           {kilometers}
// //         </div>
// //         <div className="text-sm text-gray-600">km</div>
        
// //         <div 
// //           id="tiempo" 
// //           className="mt-2 opacity-0 invisible"
// //         >
// //           <div className="text-2xl font-bold text-blue-500" id="tiemponum">
// //             {hours}
// //           </div>
// //           <div className="text-sm text-gray-600">hours</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CircularProgress;
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// const CircularProgress = ({ kilometers = 777, hours = 19, progress = 55 }) => {
//   const containerRef = useRef(null);
//   const circleRef = useRef(null);
//   const dotRef = useRef(null);

//   useEffect(() => {
//     const startAngle = 270; // Start from bottom
    
//     // Create timeline with ScrollTrigger
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "bottom center",
//         markers: true,
//         scrub: true,
//         // toggleActions: "play none none reverse",
//       }
//     });

//     // Get the length of the path
//     const pathLength = circleRef.current.getTotalLength();
    
//     // Initial state
//     gsap.set(circleRef.current, {
//       strokeDasharray: pathLength,
//       strokeDashoffset: pathLength,
//       rotation: startAngle,
//       transformOrigin: "center",
//     });

//     gsap.set(dotRef.current, {
//       autoAlpha: 1,
//       x: '50%',
//       y: '100%',
//       xPercent: -50,
//       yPercent: -50
//     });

//     // Animate both circle and dot
//     tl.to(circleRef.current, {
//       strokeDashoffset: 0,
//       duration: 2,
//       ease: "none"
//     })
//     .to(dotRef.current, {
//       motionPath: {
//         path: circleRef.current,
//         align: circleRef.current,
//         alignOrigin: [0.5, 0.5],
//         autoRotate: true,
//         start: 0,
//         end: 1
//       },
//       duration: 2,
//       ease: "none"
//     }, "<") // Start at same time as circle animation
//     .to("#tiempo", {
//       opacity: 1,
//       visibility: "visible",
//       duration: 0.5
//     }, ">");

//     return () => tl.kill();
//   }, [progress]);

//   return (
//     <div 
//       ref={containerRef}
//       className="relative w-[300px] h-[300px] flex items-center justify-center mx-auto"
//     >
//       <svg 
//         className="w-full h-full"
//         viewBox="0 0 1024 1024" 
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g>
//           {/* Progress Path */}
//           <path
//             ref={circleRef}
//             className="stroke-blue-500 fill-none"
//             strokeWidth="2"
//             strokeLinecap="round"
//             d="M512,1023.5c-69.1,0-136-13.5-199.1-40.2c-60.9-25.8-115.6-62.6-162.6-109.6c-47-47-83.9-101.7-109.6-162.6
//             C14,648,0.5,581.1,0.5,512c0-69.1,13.5-136,40.2-199.1c25.8-60.9,62.6-115.6,109.6-162.6c47-47,101.7-83.9,162.6-109.6
//             C376,14,442.9,0.5,512,0.5c69.1,0,136,13.5,199.1,40.2c60.9,25.8,115.6,62.6,162.6,109.6c47,47,83.9,101.7,109.6,162.6
//             c26.7,63.1,40.2,130,40.2,199.1c0,69.1-13.5,136-40.2,199.1c-25.8,60.9-62.6,115.6-109.6,162.6c-47,47-101.7,83.9-162.6,109.6
//             C648,1010,581.1,1023.5,512,1023.5z"
//           />
          
//           {/* Background Circle */}
//           <path
//             className="stroke-gray-200 fill-none"
//             strokeWidth="1"
//             d="M512,1c69,0,135.9,13.5,198.9,40.2c60.8,25.7,115.5,62.6,162.4,109.5c46.9,46.9,83.8,101.6,109.5,162.4
//             c26.6,63,40.2,129.9,40.2,198.9s-13.5,135.9-40.2,198.9c-25.7,60.8-62.6,115.5-109.5,162.4c-46.9,46.9-101.6,83.8-162.4,109.5
//             c-63,26.6-129.9,40.2-198.9,40.2s-135.9-13.5-198.9-40.2c-60.8-25.7-115.5-62.6-162.4-109.5c-46.9-46.9-83.8-101.6-109.5-162.4
//             C14.5,647.9,1,581,1,512s13.5-135.9,40.2-198.9c25.7-60.8,62.6-115.5,109.5-162.4c46.9-46.9,101.6-83.8,162.4-109.5
//             C376.1,14.5,443,1,512,1z"
//           />
//         </g>
//       </svg>

//       {/* Dot that follows the path */}
//       <div 
//         ref={dotRef}
//         className="absolute w-2 h-2 bg-blue-500 rounded-full"
//       />
      
//       {/* Center Content */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//         <div className="text-4xl font-bold text-blue-500" id="kilometrosnum">
//           {kilometers}
//         </div>
//         <div className="text-sm text-gray-600">km</div>
        
//         <div 
//           id="tiempo" 
//           className="mt-2 opacity-0 invisible"
//         >
//           <div className="text-2xl font-bold text-blue-500" id="tiemponum">
//             {hours}
//           </div>
//           <div className="text-sm text-gray-600">hours</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CircularProgress;
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const CircularProgress = ({ kilometers = 777, hours = 19, progress = 55 }) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const startAngle = 0; // Start from bottom
    
    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=300%", // Controls how long the pinned section stays
        pin: true,
        scrub: 1, // Smooth scrubbing effect
        anticipatePin: 1, // Prevents pin flashing
        markers: true // Remove in production
      }
    });

    // Get the length of the path
    const pathLength = circleRef.current.getTotalLength();
    
    // Initial state
    gsap.set(circleRef.current, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      rotation: startAngle,
      transformOrigin: "center",
    });

    gsap.set(dotRef.current, {
      autoAlpha: 1,
      x: '50%',
      y: '100%',
      xPercent: -50,
      yPercent: -50
    });

    // Animation timeline
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
    }, "<") // Start at same time as circle animation
    .to("#tiempo", {
      opacity: 1,
      visibility: "visible",
      duration: 0.1
    }, ">");

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div 
      ref={wrapperRef}
      className="w-full min-h-screen flex items-center justify-center bg-[--blue3]"
    >
      <div 
        ref={containerRef}
        className="relative w-[300px] h-[300px] flex items-center justify-center"
      >
        <svg 
          className="w-full h-full"
          viewBox="0 0 1024 1024" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            {/* Progress Path */}
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
            
            {/* Background Circle */}
            <path
              className="stroke-gray-200 fill-none"
              strokeWidth="2"
              strokeDasharray="18,8"  
              d="M512,1c69,0,135.9,13.5,198.9,40.2c60.8,25.7,115.5,62.6,162.4,109.5c46.9,46.9,83.8,101.6,109.5,162.4
              c26.6,63,40.2,129.9,40.2,198.9s-13.5,135.9-40.2,198.9c-25.7,60.8-62.6,115.5-109.5,162.4c-46.9,46.9-101.6,83.8-162.4,109.5
              c-63,26.6-129.9,40.2-198.9,40.2s-135.9-13.5-198.9-40.2c-60.8-25.7-115.5-62.6-162.4-109.5c-46.9-46.9-83.8-101.6-109.5-162.4
              C14.5,647.9,1,581,1,512s13.5-135.9,40.2-198.9c25.7-60.8,62.6-115.5,109.5-162.4c46.9-46.9,101.6-83.8,162.4-109.5
              C376.1,14.5,443,1,512,1z"
            />
          </g>
        </svg>

        {/* Dot that follows the path */}
        <div 
          ref={dotRef}
          className="absolute w-3 h-3 bg-[--blue1] rounded-full"
        />
        
        {/* Center Content */}
        <div className="absolute  left-1/2 transform -translate-x-1/2  text-center">
          <div className="text-4xl font-bold text-blue-500" id="kilometrosnum">
            {kilometers}
          </div>
          <div className="text-sm text-gray-600">km</div>
          
          <div 
            id="tiempo" 
            className="mt-2 opacity-0 invisible"
          >
            <div className="text-2xl font-bold text-blue-500" id="tiemponum">
              {hours}
            </div>
            <div className="text-sm text-gray-600">hours</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;