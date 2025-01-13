// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedContent = ({ Clash }) => {

//   const containerRef = useRef(null);
//   const textRefs = useRef([]);

//   useEffect(() => {
//     const container = containerRef.current;
//     const textElements = textRefs.current;

//     // Initially hide all text with clip-path
//     gsap.set(textElements, { 
//       clipPath: "inset(0 0 100% 0)",
//       opacity: 1 // Text is now fully visible but clipped
//     });

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: "top center",
//         markers: false,
//       },
//       delay: 0.5 // Wait 500ms after airplane
//     });

//     // Reveal each text element with clip-path animation
//     textElements.forEach((element, index) => {
//       timeline.to(element, {
//         clipPath: "inset(0 0 0% 0)",
//         duration: 1,
//         ease: "power1.inOut"
//       }, index * 0.2); // Slight delay between each element
//     });

//     return () => {
//       timeline.kill();
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className='h-[50vw] md:p-[2vw] lg:p-[4vw] px-4 py-4'>
//       <div className='flex w-full justify-between h-full'>
//         <div className={`${Clash.className} flex justify-between text-[--blue3] py-[6vw]`}>
//           <div className='flex flex-col h-full justify-between w-[30%]'>
//             <div>
//               <div ref={el => textRefs.current[0] = el} className='md:text-[2vw] text-[5vw] text-right'>
//                 Full Container Load (FCL)
//               </div>
//               <div ref={el => textRefs.current[1] = el} className='text-[4vw] md:text-[1.3vw] text-right'>
//                 FCL shipments are ideal for bulk goods, providing direct port-to-port transit with minimal handling, reducing risks and delays.
//               </div>
//             </div>
//             <div>
//               <div ref={el => textRefs.current[2] = el} className='md:text-[2vw] text-[5vw] text-right'>
//                 Sea Charters
//               </div>
//               <div ref={el => textRefs.current[3] = el} className='text-[4vw] md:text-[1.3vw] text-right'>
//                 Ideal for urgent, large-scale, or exclusive shipments, sea charters offer full control over routes, schedules, and cargo specifications.
//               </div>
//             </div>
//           </div>
//           <div className='flex flex-col h-full justify-between w-[30%]'>
//             <div>
//               <div ref={el => textRefs.current[4] = el} className='md:text-[2vw] text-[5vw] text-left'>
//                 Loose Container Load (LCL)
//               </div>
//               <div ref={el => textRefs.current[5] = el} className='text-[4vw] md:text-[1.3vw] text-left'>
//                 This cost-effective solution allows businesses to ship without needing full container space, while still benefiting from our extensive global network and secure handling.
//               </div>
//             </div>
//             <div>
//               <div ref={el => textRefs.current[6] = el} className='md:text-[2vw] text-[5vw] text-left'>
//                 Break Bulk Handling
//               </div>
//               <div ref={el => textRefs.current[7] = el} className='text-[4vw] md:text-[1.3vw] text-left'>
//                 Our expertise in break bulk cargo allows for safe transport of oversized, irregular, or heavy items that can't be containerized.
//               </div>
//             </div>
//           </div>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedContent;
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({ 
  Clash, 
  leftContent = [
    {
      title: "",
      description: ""
    }
  ],
  rightContent = [
    {
      title: "",
      description: ""
    }
  ]
}) => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const textElements = textRefs.current;

    // Initially hide all text with clip-path
    gsap.set(textElements, { 
      clipPath: "inset(0 0 100% 0)",
      opacity: 1
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        markers: false,
      },
      delay: 0.5
    });

    // Reveal each text element with clip-path animation
    textElements.forEach((element, index) => {
      timeline.to(element, {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.8,
        ease: "power1.inOut"
      }, index * 0.2);
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className='h-[50vw] md:p-[2vw] lg:p-[4vw] px-4 py-4'>
      <div className='flex w-full justify-between h-full'>
        <div className={`${Clash.className} flex justify-between text-[--blue3] py-[6vw]`}>
          {/* Left Column */}
          <div className='flex flex-col h-full justify-between w-[30%]'>
            {leftContent.map((content, index) => (
              <div key={`left-${index}`}>
                <div 
                  ref={el => textRefs.current[index * 2] = el} 
                  className='md:text-[2vw] text-[5vw] text-right'
                >
                  {content.title}
                </div>
                <div 
                  ref={el => textRefs.current[index * 2 + 1] = el} 
                  className='text-[4vw] md:text-[1.3vw] text-right'
                >
                  {content.description}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className='flex flex-col h-full justify-between w-[30%]'>
            {rightContent.map((content, index) => (
              <div key={`right-${index}`}>
                <div 
                  ref={el => textRefs.current[(leftContent.length * 2) + (index * 2)] = el} 
                  className='md:text-[2vw] text-[5vw] text-left'
                >
                  {content.title}
                </div>
                <div 
                  ref={el => textRefs.current[(leftContent.length * 2) + (index * 2 + 1)] = el} 
                  className='text-[4vw] md:text-[1.3vw] text-left'
                >
                  {content.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AnimatedContent;