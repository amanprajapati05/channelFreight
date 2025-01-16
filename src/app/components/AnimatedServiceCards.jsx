// // import React, { useEffect, useRef, useState } from 'react';
// // import { gsap } from 'gsap';
// // import { AirTrafficControl, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

// // const AnimatedServiceCards = () => {
// //   const [isFirstCardExpanded, setIsFirstCardExpanded] = useState(true);
// //   const firstCardRef = useRef(null);
// //   const secondCardRef = useRef(null);
// //   const firstImageRef = useRef(null);
// //   const secondImageRef = useRef(null);

// //   const expandedWidth = '60%';
// //   const collapsedWidth = '38%';
  
// //   const handleCardHover = (isFirstCard) => {
// //     if (isFirstCard !== isFirstCardExpanded) {
// //       const expandingCard = isFirstCard ? firstCardRef.current : secondCardRef.current;
// //       const collapsingCard = isFirstCard ? secondCardRef.current : firstCardRef.current;
// //       const expandingImage = isFirstCard ? firstImageRef.current : secondImageRef.current;
// //       const collapsingImage = isFirstCard ? secondImageRef.current : firstImageRef.current;

// //       // Create timeline for smooth animation
// //       const tl = gsap.timeline();

// //       // Animate widths
// //       tl.to(expandingCard, {
// //         width: expandedWidth,
// //         duration: 0.5,
// //         ease: 'power2.inOut'
// //       })
// //       .to(collapsingCard, {
// //         width: collapsedWidth,
// //         duration: 0.5,
// //         ease: 'power2.inOut'
// //       }, '-=0.5');

// //       // Swap colors
// //       tl.to(expandingCard, {
// //         backgroundColor: '#F5F5F5',
// //         color: '#333F5E',
// //         duration: 0.3
// //       }, '-=0.3')
// //       .to(collapsingCard, {
// //         backgroundColor: '#333F5E',
// //         color: 'white',
// //         duration: 0.3
// //       }, '-=0.3');

// //       // Handle images
// //       gsap.to(expandingImage, {
// //         display: 'block',
// //         opacity: 1,
// //         duration: 0.3,
// //         delay: 0.2
// //       });
// //       gsap.to(collapsingImage, {
// //         display: 'none',
// //         opacity: 0,
// //         duration: 0.3
// //       });

// //       setIsFirstCardExpanded(isFirstCard);
// //     }
// //   };

// //   return (
// //     <div className="w-full flex h-96 justify-between my-16">
// //       <div
// //         ref={firstCardRef}
// //         className="h-full w-3/5 rounded-xl bg-gray-100 text-blue-900 p-8 flex justify-between cursor-pointer"
// //         onMouseEnter={() => handleCardHover(true)}
// //       >
// //         <div className="w-1/2 h-full flex flex-col justify-between">
// //           <div className="flex flex-col gap-2">
// //             <div className="text-lg md:text-xl bg-blue-900 rounded-full w-fit text-white p-2">
// //               <AirTrafficControl />
// //             </div>
// //             <div className="text-2xl md:text-3xl leading-tight">Air Charter Solutions</div>
// //           </div>
// //           <div className="text-base md:text-lg">
// //             Ideal for time-sensitive, oversized, or specialized cargo, our air charters connect you to global destinations efficiently.
// //           </div>
// //         </div>
// //         <div ref={firstImageRef} className="w-2/5">
// //           <img src="/api/placeholder/400/320" className="rounded-xl w-full h-full object-cover" alt="Air Charter" />
// //         </div>
// //       </div>

// //       <div
// //         ref={secondCardRef}
// //         className="h-full w-2/5 rounded-xl bg-blue-900 text-white cursor-pointer"
// //         onMouseEnter={() => handleCardHover(false)}
// //       >
// //         <div className="w-full h-full flex-col p-8 flex justify-between">
// //           <div className="flex flex-col gap-2">
// //             <div className="text-lg md:text-xl bg-white w-fit p-2 text-blue-900 rounded-full">
// //               <AirTrafficControl />
// //             </div>
// //             <div className="text-2xl md:text-3xl leading-tight">Sea Charter Expertise</div>
// //           </div>
// //           <div className="text-base md:text-lg">
// //             For voluminous and heavy shipments, our sea charters offer dedicated vessels capable of accommodating unique specifications, ensuring cost-effective and reliable transport across international waters.
// //           </div>
// //         </div>
// //         <div ref={secondImageRef} className="w-2/5 hidden">
// //           <img src="/api/placeholder/400/320" className="rounded-xl w-full h-full object-cover" alt="Sea Charter" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AnimatedServiceCards;
// // import React, { useRef, useState } from 'react';
// // import { gsap } from 'gsap';
// // import { AirTrafficControl } from "@phosphor-icons/react/dist/ssr";

// // const AnimatedServiceCards = () => {
// //   const [isFirstCardExpanded, setIsFirstCardExpanded] = useState(true);
// //   const firstCardRef = useRef(null);
// //   const secondCardRef = useRef(null);
// //   const firstImageRef = useRef(null);
// //   const secondImageRef = useRef(null);
  
// //   const handleCardHover = (isFirstCard) => {
// //     if (isFirstCard !== isFirstCardExpanded) {
// //       const expandingCard = isFirstCard ? firstCardRef.current : secondCardRef.current;
// //       const collapsingCard = isFirstCard ? secondCardRef.current : firstCardRef.current;
// //       const expandingImage = isFirstCard ? firstImageRef.current : secondImageRef.current;
// //       const collapsingImage = isFirstCard ? secondImageRef.current : firstImageRef.current;

// //       // Create timeline for smooth animation
// //       const tl = gsap.timeline();

// //       // Animate widths
// //       tl.to(expandingCard, {
// //         width: '60%',
// //         duration: 0.5,
// //         ease: 'power2.inOut'
// //       })
// //       .to(collapsingCard, {
// //         width: '38%',
// //         duration: 0.5,
// //         ease: 'power2.inOut'
// //       }, '-=0.5');

// //       // Swap colors
// //       tl.to(expandingCard, {
// //         backgroundColor: '#F5F5F5',
// //         color: '#333F5E',
// //         duration: 0.3
// //       }, '-=0.3')
// //       .to(collapsingCard, {
// //         backgroundColor: '#333F5E',
// //         color: 'white',
// //         duration: 0.3
// //       }, '-=0.3');

// //       // Handle images
// //       if (isFirstCard) {
// //         gsap.to(expandingImage, {
// //           display: 'block',
// //           duration: 0
// //         });
// //         gsap.to(collapsingImage, {
// //           display: 'none',
// //           duration: 0
// //         });
// //       } else {
// //         gsap.to(expandingImage, {
// //           display: 'block',
// //           duration: 0
// //         });
// //         gsap.to(collapsingImage, {
// //           display: 'none',
// //           duration: 0
// //         });
// //       }

// //       setIsFirstCardExpanded(isFirstCard);
// //     }
// //   };

// //   return (
// //     <div className='w-full flex h-[40vw] justify-between my-[4vw]'>
// //       <div
// //         ref={firstCardRef}
// //         className='h-full w-[60%] rounded-xl bg-[#F5F5F5] text-[#333F5E] p-[2vw] flex justify-between cursor-pointer'
// //         onMouseEnter={() => handleCardHover(true)}
// //       >
// //         <div className='w-[50%] h-full flex flex-col justify-between'>
// //           <div className='flex flex-col gap-2'>
// //             <div className='text-[4vw] md:text-[1.3vw] bg-[#333F5E] rounded-full w-fit text-white p-2'>
// //               <AirTrafficControl />
// //             </div>
// //             <div className='md:text-[3vw] text-[7vw] leading-[1.2]'>Air Charter Solutions</div>
// //           </div>
// //           <div className='text-[4vw] md:text-[1.3vw]'>
// //             Ideal for time-sensitive, oversized, or specialized cargo, our air charters connect you to global destinations efficiently.
// //           </div>
// //         </div>
// //         <div ref={firstImageRef} className='w-[45%]'>
// //           <img src="/images/services/plane.webp" className='rounded-xl w-full h-full object-cover' alt="" />
// //         </div>
// //       </div>

// //       <div
// //         ref={secondCardRef}
// //         className='h-full w-[38%] rounded-xl flex justify-between bg-[#333F5E] p-[2vw]  text-white cursor-pointer'
// //         onMouseEnter={() => handleCardHover(false)}
// //       >
// //         <div className='w-[50%] h-full flex-col flex justify-between'>
// //           <div className='flex flex-col gap-2'>
// //             <div className='text-[4vw] md:text-[1.3vw] bg-white w-fit p-2 text-[#333F5E] rounded-full'>
// //               <AirTrafficControl />
// //             </div>
// //             <div className='md:text-[3vw] text-[7vw] leading-[1]'>Sea Charter Expertise</div>
// //           </div>
// //           <div className='text-[4vw] md:text-[1.3vw]'>
// //             For voluminous and heavy shipments, our sea charters offer dedicated vessels capable of accommodating unique specifications, ensuring cost-effective and reliable transport across international waters.
// //           </div>
// //         </div>
// //         <div ref={secondImageRef} className='w-[45%] hidden'>
// //           <img src="/images/services/plane.webp" className='rounded-xl w-full h-full object-cover' alt="" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AnimatedServiceCards;
// import React, { useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { AirTrafficControl } from "@phosphor-icons/react/dist/ssr";

// const AnimatedServiceCards = () => {
//   const [isFirstCardExpanded, setIsFirstCardExpanded] = useState(true);
//   const firstCardRef = useRef(null);
//   const secondCardRef = useRef(null);
//   const firstImageRef = useRef(null);
//   const secondImageRef = useRef(null);
//   const firstContentRef = useRef(null);
//   const secondContentRef = useRef(null);
  
//   const handleCardHover = (isFirstCard) => {
//     if (isFirstCard !== isFirstCardExpanded) {
//       const expandingCard = isFirstCard ? firstCardRef.current : secondCardRef.current;
//       const collapsingCard = isFirstCard ? secondCardRef.current : firstCardRef.current;
//       const expandingImage = isFirstCard ? firstImageRef.current : secondImageRef.current;
//       const collapsingImage = isFirstCard ? secondImageRef.current : firstImageRef.current;
//       const expandingContent = isFirstCard ? firstContentRef.current : secondContentRef.current;
//       const collapsingContent = isFirstCard ? secondContentRef.current : firstContentRef.current;

//       // Create timeline for smooth animation
//       const tl = gsap.timeline();

//       // Animate widths
//       tl.to(expandingCard, {
//         width: '60%',
//         duration: 0.5,
//         ease: 'power2.inOut'
//       })
//       .to(collapsingCard, {
//         width: '38%',
//         duration: 0.5,
//         ease: 'power2.inOut'
//       }, '-=0.5');

//       // Swap colors
//       tl.to(expandingCard, {
//         backgroundColor: '#F5F5F5',
//         color: '#333F5E',
//         duration: 0.3
//       }, '-=0.3')
//       .to(collapsingCard, {
//         backgroundColor: '#333F5E',
//         color: 'white',
//         duration: 0.3
//       }, '-=0.3');

//       // Handle images and content width
//       if (isFirstCard) {
//         gsap.to(expandingImage, {
//           display: 'block',
//           duration: 0
//         });
//         gsap.to(collapsingImage, {
//           display: 'none',
//           duration: 0
//         });
//         gsap.to(expandingContent, {
//           width: '50%',
//           duration: 0.3
//         });
//         gsap.to(collapsingContent, {
//           width: '100%',
//           duration: 0.3
//         });
//       } else {
//         gsap.to(expandingImage, {
//           display: 'block',
//           duration: 0
//         });
//         gsap.to(collapsingImage, {
//           display: 'none',
//           duration: 0
//         });
//         gsap.to(expandingContent, {
//           width: '50%',
//           duration: 0.3
//         });
//         gsap.to(collapsingContent, {
//           width: '100%',
//           duration: 0.3
//         });
//       }

//       setIsFirstCardExpanded(isFirstCard);
//     }
//   };

//   return (
//     <div className='w-full flex h-[40vw] justify-between my-[4vw]'>
//       <div
//         ref={firstCardRef}
//         className='h-full w-[60%] rounded-xl bg-[#F5F5F5] text-[#333F5E] p-[2vw] flex justify-between cursor-pointer'
//         onMouseEnter={() => handleCardHover(true)}
//       >
//         <div ref={firstContentRef} className='w-[50%] h-full flex flex-col justify-between'>
//           <div className='flex flex-col gap-2'>
//             <div className='text-[4vw] md:text-[1.3vw] bg-[#333F5E] rounded-full w-fit text-white p-2'>
//               <AirTrafficControl />
//             </div>
//             <div className='md:text-[3vw] text-[7vw] leading-[1.2]'>Air Charter Solutions</div>
//           </div>
//           <div className='text-[4vw] md:text-[1.3vw]'>
//             Ideal for time-sensitive, oversized, or specialized cargo, our air charters connect you to global destinations efficiently.
//           </div>
//         </div>
//         <div ref={firstImageRef} className='w-[45%]'>
//           <img src="/images/services/plane.webp" className='rounded-xl w-full h-full object-cover' alt="" />
//         </div>
//       </div>

//       <div
//         ref={secondCardRef}
//         className='h-full w-[38%] rounded-xl flex justify-between bg-[#333F5E] p-[2vw] text-white cursor-pointer'
//         onMouseEnter={() => handleCardHover(false)}
//       >
//         <div ref={secondContentRef} className='w-[50%] h-full flex-col flex justify-between'>
//           <div className='flex flex-col gap-2'>
//             <div className='text-[4vw] md:text-[1.3vw] bg-white w-fit p-2 text-[#333F5E] rounded-full'>
//               <AirTrafficControl />
//             </div>
//             <div className='md:text-[3vw] text-[7vw] leading-[1]'>Sea Charter Expertise</div>
//           </div>
//           <div className='text-[4vw] md:text-[1.3vw]'>
//             For voluminous and heavy shipments, our sea charters offer dedicated vessels capable of accommodating unique specifications, ensuring cost-effective and reliable transport across international waters.
//           </div>
//         </div>
//         <div ref={secondImageRef} className='w-[45%] hidden'>
//           <img src="/images/services/plane.webp" className='rounded-xl w-full h-full object-cover' alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedServiceCards;
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { AirTrafficControl, Anchor } from "@phosphor-icons/react/dist/ssr";

const AnimatedServiceCards = () => {
  const [isFirstCardExpanded, setIsFirstCardExpanded] = useState(true);
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const firstContentRef = useRef(null);
  const secondContentRef = useRef(null);
  const firstIconContainerRef = useRef(null);
  const secondIconContainerRef = useRef(null);
  
  const handleCardHover = (isFirstCard) => {
    if (isFirstCard !== isFirstCardExpanded) {
      const expandingCard = isFirstCard ? firstCardRef.current : secondCardRef.current;
      const collapsingCard = isFirstCard ? secondCardRef.current : firstCardRef.current;
      const expandingImage = isFirstCard ? firstImageRef.current : secondImageRef.current;
      const collapsingImage = isFirstCard ? secondImageRef.current : firstImageRef.current;
      const expandingContent = isFirstCard ? firstContentRef.current : secondContentRef.current;
      const collapsingContent = isFirstCard ? secondContentRef.current : firstContentRef.current;
      const expandingIcon = isFirstCard ? firstIconContainerRef.current : secondIconContainerRef.current;
      const collapsingIcon = isFirstCard ? secondIconContainerRef.current : firstIconContainerRef.current;

      // Create timeline for smooth animation
      const tl = gsap.timeline();

      // Animate widths
      tl.to(expandingCard, {
        width: '60%',
        duration: 0.5,
        ease: 'power2.inOut'
      })
      .to(collapsingCard, {
        width: '38%',
        duration: 0.5,
        ease: 'power2.inOut'
      }, '-=0.5');

      // Swap colors for cards
      tl.to(expandingCard, {
        backgroundColor: '#F5F5F5',
        color: '#333F5E',
        duration: 0.3
      }, '-=0.3')
      .to(collapsingCard, {
        backgroundColor: '#333F5E',
        color: 'white',
        duration: 0.3
      }, '-=0.3');

      // Swap colors for icons
      tl.to(expandingIcon, {
        backgroundColor: '#333F5E',
        color: 'white',
        duration: 0.3
      }, '-=0.3')
      .to(collapsingIcon, {
        backgroundColor: 'white',
        color: '#333F5E',
        duration: 0.3
      }, '-=0.3');

      // Handle images and content width
      if (isFirstCard) {
        gsap.to(expandingImage, {
          display: 'block',
          duration: 0
        });
        gsap.to(collapsingImage, {
          display: 'none',
          duration: 0
        });
        gsap.to(expandingContent, {
          width: '50%',
          duration: 0.3
        });
        gsap.to(collapsingContent, {
          width: '100%',
          duration: 0.3
        });
      } else {
        gsap.to(expandingImage, {
          display: 'block',
          duration: 0
        });
        gsap.to(collapsingImage, {
          display: 'none',
          duration: 0
        });
        gsap.to(expandingContent, {
          width: '50%',
          duration: 0.3
        });
        gsap.to(collapsingContent, {
          width: '100%',
          duration: 0.3
        });
      }

      setIsFirstCardExpanded(isFirstCard);
    }
  };

  return (
    <div className='w-full flex h-[40vw] justify-between my-[4vw]'>
      <div
        ref={firstCardRef}
        className='h-full w-[60%] rounded-xl bg-[#F5F5F5] text-[#333F5E] p-[2vw] flex justify-between cursor-pointer'
        onMouseEnter={() => handleCardHover(true)}
      >
        <div ref={firstContentRef} className='w-[50%] h-full flex flex-col justify-between'>
          <div className='flex flex-col gap-2'>
            <div 
              ref={firstIconContainerRef}
              className='text-[4vw] md:text-[1.3vw] bg-[#333F5E] rounded-full w-fit text-white p-2'
            >
              <AirTrafficControl />
            </div>
            <div className='md:text-[3vw] text-[7vw] leading-[1.2]'>Air Charter Solutions</div>
          </div>
          <div className='text-[4vw] md:text-[1.3vw]'>
            Ideal for time-sensitive, oversized, or specialized cargo, our air charters connect you to global destinations efficiently.
          </div>
        </div>
        <div ref={firstImageRef} className='w-[45%]'>
          <img src="/images/services/plane.webp" className='rounded-xl w-full h-full object-cover' alt="" />
        </div>
      </div>

      <div
        ref={secondCardRef}
        className='h-full w-[38%] rounded-xl flex justify-between bg-[#333F5E] p-[2vw] text-white cursor-pointer'
        onMouseEnter={() => handleCardHover(false)}
      >
        <div ref={secondContentRef} className='w-[50%] h-full flex-col flex justify-between'>
          <div className='flex flex-col gap-2'>
            <div 
              ref={secondIconContainerRef}
              className='text-[4vw] md:text-[1.3vw] bg-white w-fit p-2 text-[#333F5E] rounded-full'
            >
              <Anchor />
            </div>
            <div className='md:text-[3vw] text-[7vw] leading-[1]'>Sea Charter Expertise</div>
          </div>
          <div className='text-[4vw] md:text-[1.3vw]'>
            For voluminous and heavy shipments, our sea charters offer dedicated vessels capable of accommodating unique specifications, ensuring cost-effective and reliable transport across international waters.
          </div>
        </div>
        <div ref={secondImageRef} className='w-[45%] hidden'>
          <img src="/images/services/cargo2.webp" className='rounded-xl w-full h-full object-cover' alt="" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedServiceCards;