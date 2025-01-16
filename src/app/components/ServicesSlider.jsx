// // import React, { useEffect, useRef } from 'react';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import { Clash } from '../../../public/fonts/fonts';

// // gsap.registerPlugin(ScrollTrigger);

// // const ServicesSlider = () => {
// //   const sectionRef = useRef(null);
// //   const contentRefs = useRef([]);
// //   const dotsRef = useRef([]);
// //   const imageRefs = useRef([]);

// //   useEffect(() => {
// //     const section = sectionRef.current;
// //     const contents = contentRefs.current;
// //     const dots = dotsRef.current;
// //     const images = imageRefs.current;

// //     // Initial states
// //     contents.forEach((content, index) => {
// //       if (index === 0) {
// //         gsap.set(content, { opacity: 1, y: 0 });
// //         gsap.set(images[index], { y: 0, zIndex: 4 - index });
// //       } else {
// //         gsap.set(content, { opacity: 0, y: "100%" });
// //         gsap.set(images[index], { y: 0, zIndex: 4 - index });
// //       }
// //     });

// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: section,
// //         start: "top top",
// //         end: "+=300%",
// //         pin: true,
// //         scrub: 1,
// //       }
// //     });

// //     contents.forEach((content, index) => {
// //       if (index < contents.length - 1) {
// //         // Content animations
// //         tl.to(content, {
// //           opacity: 0,
// //           y: "-100%",
// //           duration: 1
// //         }, index)
// //         .to(contents[index + 1], {
// //           opacity: 1,
// //           y: "0%",
// //           duration: 1
// //         }, index)
        
// //         // Image animations
// //         .to(images[index], {
// //           y: "-100%",
// //           duration: 1,
// //         }, index)
// //         .to(images[index + 1], {
// //           y: "0",
// //           duration: 1,
// //         }, index)
        
// //         // Dot animations
// //         .to(dots[index].querySelector('div'), {
// //           backgroundColor: "#c8c8c8",
// //           duration: 0.5
// //         }, index)
// //         .to(dots[index + 1].querySelector('div'), {
// //           backgroundColor: "var(--blue3)",
// //           duration: 0.5
// //         }, index);
// //       }
// //     });

// //     return () => {
// //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //     };
// //   }, []);

// //   return (
// //     <div ref={sectionRef} className='w-full h-screen bg-white'> 
// //       <div className={`text-[--blue3] ${Clash.className} text-[8vw] py-[2vw] text-center md:text-[5vw] lg:text-[4vw]`}>
// //         Benefits of Choosing Us
// //       </div>
// //       <div className='flex justify-between  h-[75%] mt-[2vw] items-center'>
// //         <div className='flex gap-[4vw] items-center'>
// //           <div className='flex flex-col items-center'>
// //             {[0, 1, 2, 3].map((index) => (
// //               <React.Fragment key={index}>
// //                 <div 
// //                   ref={el => dotsRef.current[index] = el}
// //                   className='rounded-full border-[--blue3] border w-3 h-3 flex justify-center items-center'
// //                 >
// //                   <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[--blue3]' : 'bg-[#c8c8c8]'}`}></div>
// //                 </div>
// //                 {index < 3 && <div className='w-[1px] h-28 bg-gray-300'></div>}
// //               </React.Fragment>
// //             ))}
// //           </div>
          
// //           <div className='relative h-full flex items-center w-[50vw]'>
// //             <div ref={el => contentRefs.current[0] = el} className='flex flex-col gap-[1vw] absolute w-full'>
// //               <div className={`${Clash.className} text-[--blue3] text-[6vw] md:text-[2.2vw] lg:text-[2vw]`}>
// //                 Strategic Partnerships
// //               </div>
// //               <div className={`text-[--blue3] ${Clash.className} text-[3vw] sm:text-[3.2] xl:text-[1vw] md:text-[1.7vw] lg:text-[1.2vw] w-[40%]`}>
// //                 We collaborate with industry leaders to offer competitive pricing and innovative transport solutions.
// //               </div>
// //             </div>

// //             <div ref={el => contentRefs.current[1] = el} className='flex flex-col gap-[1vw] absolute w-full'>
// //               <div className={`${Clash.className} text-[--blue3] text-[6vw] md:text-[2.2vw] lg:text-[2vw]`}>
// //                 Trusted Expertise
// //               </div>
// //               <div className={`text-[--blue3] ${Clash.className} text-[3vw] sm:text-[3.2] xl:text-[1vw] md:text-[1.7vw] lg:text-[1.2vw] w-[40%]`}>
// //                 We collaborate with industry leaders to offer competitive pricing and innovative transport solutions.
// //               </div>
// //             </div>

// //             <div ref={el => contentRefs.current[2] = el} className='flex flex-col gap-[1vw] absolute w-full'>
// //               <div className={`${Clash.className} text-[--blue3] text-[6vw] md:text-[2.2vw] lg:text-[2vw]`}>
// //                 Secure and Reliable
// //               </div>
// //               <div className={`text-[--blue3] ${Clash.className} text-[3vw] sm:text-[3.2] xl:text-[1vw] md:text-[1.7vw] lg:text-[1.2vw] w-[40%]`}>
// //                 We collaborate with industry leaders to offer competitive pricing and innovative transport solutions.
// //               </div>
// //             </div>

// //             <div ref={el => contentRefs.current[3] = el} className='flex flex-col gap-[1vw] absolute w-full'>
// //               <div className={`${Clash.className} text-[--blue3] text-[6vw] md:text-[2.2vw] lg:text-[2vw]`}>
// //                 Customer-Centric Approach
// //               </div>
// //               <div className={`text-[--blue3] ${Clash.className} text-[3vw] sm:text-[3.2] xl:text-[1vw] md:text-[1.7vw] lg:text-[1.2vw] w-[40%]`}>
// //                 We collaborate with industry leaders to offer competitive pricing and innovative transport solutions.
// //               </div>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Image Stack Container */}
// //         <div className='relative h-[40vw] w-[40vw] overflow-hidden flex items-center'>
// //           <div ref={el => imageRefs.current[0] = el} className='absolute w-full inset-0' style={{ zIndex: 4 }}>
// //             <img className='w-full h-auto' src="/images/services/1img.png" alt="" />
// //           </div>
// //           <div ref={el => imageRefs.current[1] = el} className='absolute w-full inset-0' style={{ zIndex: 3 }}>
// //             <img className='w-full h-auto' src="/images/services/1img.png" alt="" />
// //           </div>
// //           <div ref={el => imageRefs.current[2] = el} className='absolute w-full inset-0' style={{ zIndex: 2 }}>
// //             <img className='w-full h-auto' src="/images/services/1img.png" alt="" />
// //           </div>
// //           <div ref={el => imageRefs.current[3] = el} className='absolute w-full inset-0' style={{ zIndex: 1 }}>
// //             <img className='w-full h-auto' src="/images/services/1img.png" alt="" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServicesSlider;
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Clash } from '../../../public/fonts/fonts';

// gsap.registerPlugin(ScrollTrigger);

// const ServicesSlider = ({ 
//   heading = "Benefits of Choosing Us",
//   slides = [] // Array of objects containing title, description, and image
// }) => {
//   const sectionRef = useRef(null);
//   const contentRefs = useRef([]);
//   const dotsRef = useRef([]);
//   const imageRefs = useRef([]);

//   // Reset refs on each render
//   contentRefs.current = [];
//   dotsRef.current = [];
//   imageRefs.current = [];

//   useEffect(() => {
//     const section = sectionRef.current;
//     const contents = contentRefs.current;
//     const dots = dotsRef.current;
//     const images = imageRefs.current;

//     // Initial states
//     contents.forEach((content, index) => {
//       if (index === 0) {
//         gsap.set(content, { opacity: 1, y: 0 });
//         gsap.set(images[index], { y: 0, zIndex: slides.length - index });
//       } else {
//         gsap.set(content, { opacity: 0, y: "100%" });
//         gsap.set(images[index], { y: 0, zIndex: slides.length - index });
//       }
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: "+=300%",
//         pin: true,
//         scrub: 1,
//       }
//     });

//     contents.forEach((content, index) => {
//       if (index < contents.length - 1) {
//         tl.to(content, {
//           opacity: 0,
//           y: "-100%",
//           duration: 1
//         }, index)
//         .to(contents[index + 1], {
//           opacity: 1,
//           y: "0%",
//           duration: 1
//         }, index)
//         .to(images[index], {
//           y: "-100%",
//           duration: 1,
//         }, index)
//         .to(images[index + 1], {
//           y: "0",
//           duration: 1,
//         }, index)
//         .to(dots[index].querySelector('div'), {
//           backgroundColor: "#c8c8c8",
//           duration: 0.5
//         }, index)
//         .to(dots[index + 1].querySelector('div'), {
//           backgroundColor: "var(--blue3)",
//           duration: 0.5
//         }, index);
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [slides]);

//   return (
//     <div ref={sectionRef} className='w-full h-screen bg-white'> 
//       <div className={`text-[--blue3] ${Clash.className} text-[8vw] py-[2vw] text-center md:text-[5vw] lg:text-[4vw]`}>
//         {heading}
//       </div>
//       <div className='flex justify-between h-[75%] mt-[2vw] items-center'>
//         <div className='flex gap-[4vw] items-center'>
//           <div className='flex flex-col items-center'>
//             {slides.map((_, index) => (
//               <React.Fragment key={index}>
//                 <div 
//                   ref={el => dotsRef.current[index] = el}
//                   className='rounded-full border-[--blue3] border w-3 h-3 flex justify-center items-center'
//                 >
//                   <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[--blue3]' : 'bg-[#c8c8c8]'}`}></div>
//                 </div>
//                 {index < slides.length - 1 && <div className='w-[1px] h-28 bg-gray-300'></div>}
//               </React.Fragment>
//             ))}
//           </div>
          
//           <div className='relative h-full flex items-center w-[50vw]'>
//             {slides.map((slide, index) => (
//               <div 
//                 key={index}
//                 ref={el => contentRefs.current[index] = el} 
//                 className='flex flex-col gap-[1vw] absolute w-full'
//               >
//                 <div className={`${Clash.className} text-[--blue3] text-[6vw] md:text-[2.2vw] lg:text-[2vw]`}>
//                   {slide.title}
//                 </div>
//                 <div className={`text-[--blue3] ${Clash.className} text-[3vw] sm:text-[3.2] xl:text-[1vw] md:text-[1.7vw] lg:text-[1.2vw] w-[40%]`}>
//                   {slide.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Image Stack Container */}
//         <div className='relative h-[40vw] w-[40vw] overflow-hidden flex items-center'>
//           {slides.map((slide, index) => (
//             <div 
//               key={index}
//               ref={el => imageRefs.current[index] = el} 
//               className='absolute w-full inset-0' 
//               style={{ zIndex: slides.length - index }}
//             >
//               <img className='w-full h-auto' src={slide.image} alt={slide.title} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSlider;
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Clash } from '../../../public/fonts/fonts';

// gsap.registerPlugin(ScrollTrigger);

// const ServicesSlider = ({ 
//   heading = "Benefits of Choosing Us",
//   slides = []
// }) => {
//   const sectionRef = useRef(null);
//   const contentRefs = useRef([]);
//   const dotsRef = useRef([]);
//   const imageRefs = useRef([]);

//   // Reset refs on each render
//   contentRefs.current = [];
//   dotsRef.current = [];
//   imageRefs.current = [];

//   useEffect(() => {
//     const section = sectionRef.current;
//     const contents = contentRefs.current;
//     const dots = dotsRef.current;
//     const images = imageRefs.current;

//     // Only setup animations for desktop
//     const mm = gsap.matchMedia();
    
//     mm.add("(min-width: 768px)", () => {
//       // Initial states
//       contents.forEach((content, index) => {
//         if (index === 0) {
//           gsap.set(content, { opacity: 1, y: 0 });
//           gsap.set(images[index], { y: 0, zIndex: slides.length - index });
//         } else {
//           gsap.set(content, { opacity: 0, y: "100%" });
//           gsap.set(images[index], { y: 0, zIndex: slides.length - index });
//         }
//       });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end: "+=300%",
//           pin: true,
//           scrub: 1,
//         }
//       });

//       contents.forEach((content, index) => {
//         if (index < contents.length - 1) {
//           tl.to(content, {
//             opacity: 0,
//             y: "-100%",
//             duration: 1
//           }, index)
//           .to(contents[index + 1], {
//             opacity: 1,
//             y: "0%",
//             duration: 1
//           }, index)
//           .to(images[index], {
//             y: "-100%",
//             duration: 1,
//           }, index)
//           .to(images[index + 1], {
//             y: "0",
//             duration: 1,
//           }, index)
//           .to(dots[index].querySelector('div'), {
//             backgroundColor: "#c8c8c8",
//             duration: 0.5
//           }, index)
//           .to(dots[index + 1].querySelector('div'), {
//             backgroundColor: "var(--blue3)",
//             duration: 0.5
//           }, index);
//         }
//       });

//       return () => {
//         tl.kill();
//       };
//     });

//     return () => {
//       mm.revert();
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [slides]);

//   return (
//     <>
//       {/* Mobile Layout */}
//       <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4 block md:hidden w-full overflow-auto'>
//         <div className='flex flex-col gap-4 w-full '>
//           <div className={`text-[--blue3] ${Clash.className} text-[8vw] py-[2vw] md:text-[5vw] lg:text-[4vw]`}>
//             {heading}
//           </div>
//           <div className=' flex flex-row flex-nowrap gap-4'>
//           {slides.map((slide, index) => (
//             <div key={index} className={`${Clash.className} text-[--blue3] flex gap-3 flex-col w-[80%]`}>
//               <div className='w-full inset-0'>
//                 <img src={slide.image} className='w-full' alt={slide.title} />
//               </div>
//               <div className={`${Clash.className} text-[--blue3] text-[6vw] md:text-[2.2vw] lg:text-[2vw]`}>
//                 {slide.title}
//               </div>
//               <div className={`text-[--blue3] ${Clash.className} text-[3vw] sm:text-[3.2] xl:text-[1vw] md:text-[1.7vw] lg:text-[1.2vw] w-full text-left`}>
//                 {slide.description}
//               </div>
//             </div>
//           ))}
//           </div>
//         </div>
//       </div>

//       {/* Desktop Layout */}
//       <div ref={sectionRef} className='w-full h-screen bg-white hidden md:block'> 
//         <div className={`text-[--blue3] ${Clash.className} text-[8vw] py-[2vw] text-center md:text-[5vw] lg:text-[4vw]`}>
//           {heading}
//         </div>
//         <div className='flex justify-between h-[75%] mt-[2vw] items-center'>
//           <div className='flex gap-[4vw] items-center'>
//             <div className='flex flex-col items-center'>
//               {slides.map((_, index) => (
//                 <React.Fragment key={index}>
//                   <div 
//                     ref={el => dotsRef.current[index] = el}
//                     className='rounded-full border-[--blue3] border w-3 h-3 flex justify-center items-center'
//                   >
//                     <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[--blue3]' : 'bg-[#c8c8c8]'}`}></div>
//                   </div>
//                   {index < slides.length - 1 && <div className='w-[1px] h-28 bg-gray-300'></div>}
//                 </React.Fragment>
//               ))}
//             </div>
            
//             <div className='relative h-full flex items-center w-[50vw]'>
//               {slides.map((slide, index) => (
//                 <div 
//                   key={index}
//                   ref={el => contentRefs.current[index] = el} 
//                   className='flex flex-col gap-[1vw] absolute w-full'
//                 >
//                   <div className={`${Clash.className} text-[--blue3] text-[6vw] md:text-[2.2vw] lg:text-[2vw]`}>
//                     {slide.title}
//                   </div>
//                   <div className={`text-[--blue3] ${Clash.className} text-[3vw] sm:text-[3.2] xl:text-[1vw] md:text-[1.7vw] lg:text-[1.2vw] w-[40%]`}>
//                     {slide.description}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className='relative h-[40vw] w-[40vw] overflow-hidden flex items-center'>
//             {slides.map((slide, index) => (
//               <div 
//                 key={index}
//                 ref={el => imageRefs.current[index] = el} 
//                 className='absolute w-full inset-0' 
//                 style={{ zIndex: slides.length - index }}
//               >
//                 <img className='w-full h-auto' src={slide.image} alt={slide.title} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServicesSlider;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clash } from '../../../public/fonts/fonts';

gsap.registerPlugin(ScrollTrigger);

const ServicesSlider = ({ 
  heading = "Benefits of Choosing Us",
  slides = []
}) => {
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);
  const dotsRef = useRef([]);
  const imageRefs = useRef([]);

  // Reset refs on each render
  contentRefs.current = [];
  dotsRef.current = [];
  imageRefs.current = [];

  useEffect(() => {
    const section = sectionRef.current;
    const contents = contentRefs.current;
    const dots = dotsRef.current;
    const images = imageRefs.current;

    // Only setup animations for desktop
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      // Initial states
      contents.forEach((content, index) => {
        if (index === 0) {
          gsap.set(content, { opacity: 1, y: 0 });
          gsap.set(images[index], { y: 0, zIndex: slides.length - index });
        } else {
          gsap.set(content, { opacity: 0, y: "100%" });
          gsap.set(images[index], { y: 0, zIndex: slides.length - index });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
        }
      });

      contents.forEach((content, index) => {
        if (index < contents.length - 1) {
          tl.to(content, {
            opacity: 0,
            y: "-100%",
            duration: 1
          }, index)
          .to(contents[index + 1], {
            opacity: 1,
            y: "0%",
            duration: 1
          }, index)
          .to(images[index], {
            y: "-100%",
            duration: 1,
          }, index)
          .to(images[index + 1], {
            y: "0",
            duration: 1,
          }, index)
          .to(dots[index].querySelector('div'), {
            backgroundColor: "#c8c8c8",
            duration: 0.5
          }, index)
          .to(dots[index + 1].querySelector('div'), {
            backgroundColor: "var(--blue3)",
            duration: 0.5
          }, index);
        }
      });

      return () => {
        tl.kill();
      };
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [slides]);

  return (
    <>
      {/* Mobile Layout */}
      <div className=' block md:hidden w-full'>
        <div className='flex flex-col gap-4 w-full'>
          <div className={`text-[--blue3] ${Clash.className} text-[8vw] py-[2vw] md:text-[5vw] lg:text-[4vw]`}>
            {heading}
          </div>
          <div 
            className='flex overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar' 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className={`${Clash.className} text-[--blue3] flex gap-3 flex-col w-[80%] flex-shrink-0 snap-start`}
              >
                <div className='w-full inset-0'>
                  <img src={slide.image} className='w-full' alt={slide.title} />
                </div>
                <div className={`${Clash.className} text-[--blue3] text-[6vw] md:text-[2.2vw] lg:text-[2vw]`}>
                  {slide.title}
                </div>
                <div className={`text-[--blue3] ${Clash.className} text-[3vw] sm:text-[3.2] xl:text-[1vw] md:text-[1.7vw] lg:text-[1.2vw] w-full text-left`}>
                  {slide.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div ref={sectionRef} className='w-full h-screen bg-white hidden md:block'> 
        <div className={`text-[--blue3] ${Clash.className} text-[8vw] py-[2vw] text-center md:text-[5vw] lg:text-[4vw]`}>
          {heading}
        </div>
        <div className='flex justify-between h-[75%] mt-[2vw] items-center'>
          <div className='flex gap-[4vw] items-center'>
            <div className='flex flex-col items-center'>
              {slides.map((_, index) => (
                <React.Fragment key={index}>
                  <div 
                    ref={el => dotsRef.current[index] = el}
                    className='rounded-full border-[--blue3] border w-3 h-3 flex justify-center items-center'
                  >
                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[--blue3]' : 'bg-[#c8c8c8]'}`}></div>
                  </div>
                  {index < slides.length - 1 && <div className='w-[1px] h-28 bg-gray-300'></div>}
                </React.Fragment>
              ))}
            </div>
            
            <div className='relative h-full flex items-center w-[50vw]'>
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  ref={el => contentRefs.current[index] = el} 
                  className='flex flex-col gap-[1vw] absolute w-full'
                >
                  <div className={`${Clash.className} text-[--blue3] text-[6vw] md:text-[2.2vw] lg:text-[2vw]`}>
                    {slide.title}
                  </div>
                  <div className={`text-[--blue3] ${Clash.className} text-[3vw] sm:text-[3.2] xl:text-[1vw] md:text-[1.7vw] lg:text-[1.2vw] w-[40%]`}>
                    {slide.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className='relative h-[40vw] w-[40vw] overflow-hidden flex items-center'>
            {slides.map((slide, index) => (
              <div 
                key={index}
                ref={el => imageRefs.current[index] = el} 
                className='absolute w-full inset-0' 
                style={{ zIndex: slides.length - index }}
              >
                <img className='w-full h-auto' src={slide.image} alt={slide.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSlider;