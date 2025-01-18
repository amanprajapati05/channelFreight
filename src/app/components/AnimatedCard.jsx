// import React, { useRef, useState } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

// const AnimatedCard = ({ title, content, index, Clash }) => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const cardRef = useRef(null);
//   const backgroundRef = useRef(null);
//   const contentRef = useRef(null);
//   const titleRef = useRef(null);
//   const mainArrowRef = useRef(null);
//   const diagonalArrowRef = useRef(null);
//   const timelineRef = useRef(null);

//   useGSAP(() => {
//     const card = cardRef.current;
    
//     // Set up different animations for different screen sizes
//     const mm = gsap.matchMedia();

//     mm.add({
//       // Mobile
//       isSmall: "(max-width: 767px)",
//       // Tablet
//       isMedium: "(min-width: 768px) and (max-width: 1023px)",
//       // Desktop
//       isLarge: "(min-width: 1024px) and (max-width: 1280px)",

//       isXLarge: "(min-width: 1281px)",

//     }, (context) => {
//       const { isSmall, isMedium, isLarge,isXLarge } = context.conditions;
      
//       const getYOffset = () => {
//         if (isSmall) return -100;
//         if (isMedium) return -80;
//         if (isLarge) return -100;
//         if (isXLarge) return -150;
//         return -80; // default
//       };

//       const onMouseEnter = () => {
//         if (timelineRef.current) {
//           timelineRef.current.kill();
//         }

//         timelineRef.current = gsap.timeline();
//         timelineRef.current
//           .to(backgroundRef.current, {
//             scale: 2,
//             opacity: 1,
//             duration: 0.6,
//             ease: 'power2.out',
//             transformOrigin: 'bottom center'
//           })
//           .to(titleRef.current, {
//             color: 'white',
//             opacity: 1,
//             y: getYOffset(),
//             duration: 0.4,
//             ease: 'power1.out'
//           }, "-=0.4")
//           .fromTo(contentRef.current, {
//             opacity: 0,
//             display: 'none',
//             color: 'white',
//           }, {
//             opacity: 1,
//             display: 'block',
//             duration: 0.3,
//           }, "-=0.2")
//           .to(mainArrowRef.current, {
//             x: 20,
//             y: -20,
//             opacity: 0,
//             duration: 0.2,
//             ease: 'power1.out'
//           }, "-=0.3")
//           .fromTo(diagonalArrowRef.current, {
//             x: -20,
//             y: 20,
//             opacity: 0,
//           }, {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             duration: 0.2,
//             ease: 'power1.out'
//           }, "-=0.1");
//       };

//       const onMouseLeave = () => {
//         if (timelineRef.current) {
//           timelineRef.current.kill();
//         }

//         timelineRef.current = gsap.timeline();
//         timelineRef.current
//           .to(backgroundRef.current, {
//             scale: 0,
//             opacity: 0,
//             duration: 0.4,
//             ease: 'power2.in'
//           })
//           .to(titleRef.current, {
//             color: 'var(#02123b)',
//             y: 0,
//             opacity: 1,
//             duration: 0.3,
//           }, "-=0.3")
//           .to(contentRef.current, {
//             opacity: 0,
//             duration: 0.2,
//             onComplete: () => {
//               gsap.set(contentRef.current, { display: 'none' });
//             }
//           }, "-=0.3")
//           .to(diagonalArrowRef.current, {
//             x: -20,
//             y: 20,
//             opacity: 0,
//             duration: 0.2,
//             ease: 'power1.in'
//           }, "-=0.3")
//           .fromTo(mainArrowRef.current, {
//             x: 20,
//             y: -20,
//             opacity: 0,
//           }, {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             duration: 0.2,
//             ease: 'power1.out'
//           }, "-=0.1");
//       };

//       // Add event listeners
//       card.addEventListener('mouseenter', onMouseEnter);
//       card.addEventListener('mouseleave', onMouseLeave);

//       // Cleanup function
//       return () => {
//         card.removeEventListener('mouseenter', onMouseEnter);
//         card.removeEventListener('mouseleave', onMouseLeave);
//       };
//     });

//     // Cleanup
//     return () => {
//       mm.revert();
//       if (timelineRef.current) {
//         timelineRef.current.kill();
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       onMouseEnter={() => setHoveredCard(index)}
//       onMouseLeave={() => setHoveredCard(null)}
//       className="rounded-xl flex-shrink-0 overflow-hidden w-[80vw] h-[80vw] lg:w-[28vw] md:w-[31vw] md:h-[31vw] lg:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]"
//     >
//       <div
//         ref={backgroundRef}
//         className="absolute inset-0 bg-[#02123b] opacity-0 -bottom-14 scale-0 rounded-full"
//       />
//       <div className="flex flex-col justify-between h-full">
//         <div className="flex justify-end md:my-[1.2vw] mx-[6vw] my-[6vw] md:mx-[1.6vw]">
//           <div 
//             className={`${hoveredCard === index ? 'bg-white' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300`}
//           >
//             <ArrowUpRight
//               ref={mainArrowRef}
//               className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${
//                 hoveredCard === index ? 'text-[#333f5e]' : 'text-[#ADEDFF]'
//               } transition-colors duration-300`}
//             />
//             <ArrowUpRight
//               ref={diagonalArrowRef}
//               className={`absolute h-12 p-2 w-12 md:w-10 md:h-10 z-[222] opacity-0 ${
//                 hoveredCard === index ? 'text-[#333f5e]' : 'text-[#ADEDFF]'
//               } transition-colors duration-300`}
//             />
//           </div>
//         </div>
//         <div
//           ref={titleRef}
//           className={`${Clash.className} text-[#02123b] md:my-[1.2vw] mx-[6vw] my-[6vw] md:mx-[1.6vw] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}
//         >
//           {title}
//         </div>
//         <div
//           ref={contentRef}
//           className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] md:my-[1.2vw] mx-[6vw] my-[6vw] md:mx-[1.6vw] z-[2] hidden`}
//         >
//           {content}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedCard;
import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const AnimatedCard = ({ title, content, index, Clash }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const mainArrowRef = useRef(null);
  const diagonalArrowRef = useRef(null);
  const timelineRef = useRef(null);

  useGSAP(() => {
    const card = cardRef.current;
    
    const mm = gsap.matchMedia();

    mm.add({
      isSmall: "(max-width: 767px)",
      isMedium: "(min-width: 768px) and (max-width: 1023px)",
      isLarge: "(min-width: 1024px) and (max-width: 1280px)",
      isXLarge: "(min-width: 1281px)",
    }, (context) => {
      const { isSmall, isMedium, isLarge, isXLarge } = context.conditions;
      
      const getYOffset = () => {
        const iconTop = card.querySelector('.icon-container').getBoundingClientRect().top;
        const titleTop = titleRef.current.getBoundingClientRect().top;
        const offset = iconTop - titleTop + 20; // Adding 20px buffer
        return -Math.abs(offset);
      };

      const onMouseEnter = () => {
        if (timelineRef.current) {
          timelineRef.current.kill();
        }

        timelineRef.current = gsap.timeline();
        timelineRef.current
          .to(backgroundRef.current, {
            scale: 2,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            transformOrigin: 'bottom center'
          })
          .to(titleRef.current, {
            color: 'white',
            opacity: 1,
            y: getYOffset(),
            duration: 0.4,
            ease: 'power1.out'
          }, "-=0.4")
          .fromTo(contentRef.current, {
            opacity: 0,
            display: 'none',
            color: 'white',
          }, {
            opacity: 1,
            display: 'block',
            duration: 0.3,
          }, "-=0.2")
          .to(mainArrowRef.current, {
            x: 20,
            y: -20,
            opacity: 0,
            duration: 0.2,
            ease: 'power1.out'
          }, "-=0.3")
          .fromTo(diagonalArrowRef.current, {
            x: -20,
            y: 20,
            opacity: 0,
          }, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: 'power1.out'
          }, "-=0.1");
      };

      const onMouseLeave = () => {
        if (timelineRef.current) {
          timelineRef.current.kill();
        }

        timelineRef.current = gsap.timeline();
        timelineRef.current
          .to(backgroundRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in'
          })
          .to(titleRef.current, {
            color: 'var(#02123b)',
            y: 0,
            opacity: 1,
            duration: 0.3,
          }, "-=0.3")
          .to(contentRef.current, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              gsap.set(contentRef.current, { display: 'none' });
            }
          }, "-=0.3")
          .to(diagonalArrowRef.current, {
            x: -20,
            y: 20,
            opacity: 0,
            duration: 0.2,
            ease: 'power1.in'
          }, "-=0.3")
          .fromTo(mainArrowRef.current, {
            x: 20,
            y: -20,
            opacity: 0,
          }, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: 'power1.out'
          }, "-=0.1");
      };

      card.addEventListener('mouseenter', onMouseEnter);
      card.addEventListener('mouseleave', onMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', onMouseEnter);
        card.removeEventListener('mouseleave', onMouseLeave);
      };
    });

    return () => {
      mm.revert();
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      className="rounded-xl flex-shrink-0 overflow-hidden w-[80vw] h-[80vw] lg:w-[28vw] md:w-[31vw] md:h-[31vw] lg:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-[#02123b] opacity-0 -bottom-14 scale-0 rounded-full"
      />
      
      <div className="flex justify-end md:my-[1.2vw] mx-[6vw] my-[6vw] md:mx-[1.6vw] icon-container">
        <div 
          className={`${hoveredCard === index ? 'bg-white' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center relative overflow-hidden transition-colors duration-300`}
        >
          <ArrowUpRight
            ref={mainArrowRef}
            className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${
              hoveredCard === index ? 'text-[#333f5e]' : 'text-[#ADEDFF]'
            } transition-colors duration-300`}
          />
          <ArrowUpRight
            ref={diagonalArrowRef}
            className={`absolute h-12 p-2 w-12 md:w-10 md:h-10 z-[222] opacity-0 ${
              hoveredCard === index ? 'text-[#333f5e]' : 'text-[#ADEDFF]'
            } transition-colors duration-300`}
          />
        </div>
      </div>

      <div
        ref={titleRef}
        className={`${Clash.className} absolute text-[#02123b] mx-[6vw] my-[6vw] md:my-[2vw] md:mx-[1.6vw] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2] bottom-0`}
      >
        {title}
      </div>

      <div
        ref={contentRef}
        className={`${Clash.className} absolute text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] mx-[6vw] my-[6vw] md:my-[2vw] md:mx-[1.6vw] z-[2] bottom-0 hidden`}
      >
        {content}
      </div>
    </div>
  );
};

export default AnimatedCard;