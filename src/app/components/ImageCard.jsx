// // // // // "use client"
// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import gsap from 'gsap';
// // // // // import { Clash } from '../../../public/fonts/fonts';
// // // // // import { X } from '@phosphor-icons/react/dist/ssr';

// // // // // const ImageCard = () => {
// // // // //   const image1Ref = useRef(null);
// // // // //   const image2Ref = useRef(null);
// // // // //   const image3Ref = useRef(null);
// // // // //   const containerRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     // Reset images to initial position
// // // // //     gsap.set(image1Ref.current, { rotation: 0, y: 0 });
// // // // //     gsap.set(image2Ref.current, { rotation: 0, x: 0 });
// // // // //     gsap.set(image3Ref.current, { rotation: 0, x: 0 });

// // // // //     // Create hover animations
// // // // //     const handleMouseEnter = () => {
// // // // //       gsap.to(image1Ref.current, {
// // // // //         rotation: 2,
// // // // //         y: 8,
// // // // //         duration: 0.3,
// // // // //         ease: 'power2.out'
// // // // //       });
// // // // //       gsap.to(image2Ref.current, {
// // // // //         rotation: 12,
// // // // //         x: 24,
// // // // //         duration: 0.3,
// // // // //         ease: 'power2.out'
// // // // //       });
// // // // //       gsap.to(image3Ref.current, {
// // // // //         rotation: -12,
// // // // //         x: -24,
// // // // //         duration: 0.3,
// // // // //         ease: 'power2.out'
// // // // //       });
// // // // //     };

// // // // //     const handleMouseLeave = () => {
// // // // //       gsap.to([image1Ref.current, image2Ref.current, image3Ref.current], {
// // // // //         rotation: 0,
// // // // //         x: 0,
// // // // //         y: 0,
// // // // //         duration: 0.3,
// // // // //         ease: 'power2.out'
// // // // //       });
// // // // //     };

// // // // //     const container = containerRef.current;
// // // // //     container.addEventListener('mouseenter', handleMouseEnter);
// // // // //     container.addEventListener('mouseleave', handleMouseLeave);

// // // // //     return () => {
// // // // //       container.removeEventListener('mouseenter', handleMouseEnter);
// // // // //       container.removeEventListener('mouseleave', handleMouseLeave);
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // //     // <div className={`md:w-[30%] flex-shrink-0 z-[222]  lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw] ${Clash.className}`}>
// // // //     //   <div className='w-full h-full bg-[#333f5e] flex flex-col rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5'>
// // // //     //     <div className='text-white flex flex-col gap-[1px] lg:gap-[2px]'>
// // // //     //       <div className='text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none'>
// // // //     //         Start
// // // //     //       </div>
// // // //     //       <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>
// // // //     //         12th January 1999
// // // //     //       </div>
// // // //     //     </div>
// // // //     //     <div
// // // //     //       ref={containerRef}
// // // //     //       className='w-full rounded-xl h-[70%] relative bg-gray-700'
// // // //     //     >
// // // //     //       <img
// // // //     //         ref={image1Ref}
// // // //     //         src="/images/images.png"
// // // //     //         className='absolute z-[3] object-cover w-full rounded-xl h-full'
// // // //     //         alt="First"
// // // //     //       />
// // // //     //       <img
// // // //     //         ref={image2Ref}
// // // //     //         src="/images/images2.png"
// // // //     //         className='absolute z-[1] object-cover w-full rounded-xl h-full'
// // // //     //         alt="Second"
// // // //     //       />
// // // //     //       <img
// // // //     //         ref={image3Ref}
// // // //     //         src="/images/images3.png"
// // // //     //         className='absolute z-[2] object-cover w-full rounded-xl h-full'
// // // //     //         alt="Third"
// // // //     //       />
// // // //     //     </div>
// // // //     //   </div>
// // // //     // </div>
// // //     <div className={`md:w-[60%]  flex-shrink-0 z-[222]  lg:w-[50%] xl:w-[40%] w-[100%] rounded-xl h-[51vw] md:h-[34vw] lg:h-[29vw] xl:h-[25vw] ${Clash.className}`}>
// // //     <div className='w-full h-full bg-[#333f5e] flex flex-row justify-between rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5'>
// // //       <div className='text-white flex flex-col gap-[1px] lg:gap-[2px]'>
// // //         <div className='text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none'>
// // //           Start
// // //         </div>
// // //         <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>
// // //           12th January 1999
// // //         </div>
// // //       </div>
// // //       <div
// // //         ref={containerRef}
// // //         className='w-[58%] rounded-xl overflow-hidden h-[100%] relative bg-gray-700'
// // //       >
// // //         <div style={{ position: 'absolute', top: '0', right: '0' , zIndex: '9999'}} className='cursor-pointer p-2 bg-white rounded-full'>
// // //         <X size={20} color="#000000" />
// // //         </div>
// // //         <img
// // //           ref={image1Ref}
// // //           src="/images/images.png"
// // //           className=' z-[3] object-cover w-full rounded-xl h-[70%]'
// // //           alt="First"
// // //         />
// // //         <img
// // //           ref={image2Ref}
// // //           src="/images/images2.png"
// // //           className=' z-[1] object-cover w-full rounded-xl h-[70%]'
// // //           alt="Second"
// // //         />
// // //         <img
// // //           ref={image3Ref}
// // //           src="/images/images3.png"
// // //           className=' z-[2] object-cover w-full rounded-xl h-[70%]'
// // //           alt="Third"
// // //         />
// // //       </div>
// // //     </div>
// // //   </div>
// // // // //   );
// // // // // };

// // // // // export default ImageCard;
// // // // "use client"
// // // // import React, { useEffect, useRef, useState } from 'react';
// // // // import gsap from 'gsap';
// // // // import { Clash } from '../../../public/fonts/fonts';
// // // // import { X } from '@phosphor-icons/react/dist/ssr';

// // // // const ImageCard = () => {
// // // //   const [isExpanded, setIsExpanded] = useState(false);
// // // //   const image1Ref = useRef(null);
// // // //   const image2Ref = useRef(null);
// // // //   const image3Ref = useRef(null);
// // // //   const containerRef = useRef(null);

// // // //   useEffect(() => {
// // // //     if (!isExpanded) {
// // // //       // Only setup hover animations when not expanded
// // // //       gsap.set([image1Ref.current, image2Ref.current, image3Ref.current], {
// // // //         rotation: 0,
// // // //         x: 0,
// // // //         y: 0
// // // //       });

// // // //       const handleMouseEnter = () => {
// // // //         if (!isExpanded) {
// // // //           gsap.to(image1Ref.current, {
// // // //             rotation: 2,
// // // //             y: 8,
// // // //             duration: 0.3,
// // // //             ease: 'power2.out'
// // // //           });
// // // //           gsap.to(image2Ref.current, {
// // // //             rotation: 12,
// // // //             x: 24,
// // // //             duration: 0.3,
// // // //             ease: 'power2.out'
// // // //           });
// // // //           gsap.to(image3Ref.current, {
// // // //             rotation: -12,
// // // //             x: -24,
// // // //             duration: 0.3,
// // // //             ease: 'power2.out'
// // // //           });
// // // //         }
// // // //       };

// // // //       const handleMouseLeave = () => {
// // // //         if (!isExpanded) {
// // // //           gsap.to([image1Ref.current, image2Ref.current, image3Ref.current], {
// // // //             rotation: 0,
// // // //             x: 0,
// // // //             y: 0,
// // // //             duration: 0.3,
// // // //             ease: 'power2.out'
// // // //           });
// // // //         }
// // // //       };

// // // //       const container = containerRef.current;
// // // //       container.addEventListener('mouseenter', handleMouseEnter);
// // // //       container.addEventListener('mouseleave', handleMouseLeave);

// // // //       return () => {
// // // //         container.removeEventListener('mouseenter', handleMouseEnter);
// // // //         container.removeEventListener('mouseleave', handleMouseLeave);
// // // //       };
// // // //     }
// // // //   }, [isExpanded]);

// // // //   const handleClick = () => {
// // // //     setIsExpanded(true);
// // // //     // Reset any rotations when expanding
// // // //     gsap.to([image1Ref.current, image2Ref.current, image3Ref.current], {
// // // //       rotation: 0,
// // // //       x: 0,
// // // //       y: 0,
// // // //       duration: 0.3,
// // // //       ease: 'power2.out'
// // // //     });
// // // //   };

// // // //   const handleClose = (e) => {
// // // //     e.stopPropagation();
// // // //     setIsExpanded(false);
// // // //   };

// // // //   return (
// // // //     <div className={`${isExpanded ? 'md:w-[60%] lg:w-[50%] xl:w-[40%] w-[100%] h-[51vw] md:h-[34vw] lg:h-[29vw] xl:h-[25vw]' : 
// // // //                      'md:w-[30%] lg:w-[25%] xl:w-[20%] w-[50%] h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'}
// // // //                      flex-shrink-0 z-[222] rounded-xl ${Clash.className}`}>
// // // //       <div className='w-full h-full bg-[#333f5e] flex flex-row justify-between rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5'>
// // // //         <div className='text-white flex flex-col gap-[1px] lg:gap-[2px]'>
// // // //           <div className='text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none'>
// // // //             Start
// // // //           </div>
// // // //           <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>
// // // //             12th January 1999
// // // //           </div>
// // // //         </div>
// // // //         <div
// // // //           ref={containerRef}
// // // //           onClick={handleClick}
// // // //           className={`${isExpanded ? 'w-[58%]' : 'w-full'} rounded-xl overflow-hidden h-full relative bg-gray-700`}
// // // //         >
// // // //           {isExpanded && (
// // // //             <div 
// // // //               className='cursor-pointer p-2 bg-white rounded-full absolute top-0 right-0 z-[9999]'
// // // //               onClick={handleClose}
// // // //             >
// // // //               <X size={20} color="#000000" />
// // // //             </div>
// // // //           )}
// // // //           <div className={`${isExpanded ? 'overflow-y-auto h-full' : 'h-[70%]'}`}>
// // // //             <img
// // // //               ref={image1Ref}
// // // //               src="/images/images.png"
// // // //               className={`${isExpanded ? '' : 'absolute'} z-[3] object-cover w-full rounded-xl h-[70%]`}
// // // //               alt="First"
// // // //             />
// // // //             <img
// // // //               ref={image2Ref}
// // // //               src="/images/images2.png"
// // // //               className={`${isExpanded ? 'mt-4' : 'absolute'} z-[1] object-cover w-full rounded-xl h-[70%]`}
// // // //               alt="Second"
// // // //             />
// // // //             <img
// // // //               ref={image3Ref}
// // // //               src="/images/images3.png"
// // // //               className={`${isExpanded ? 'mt-4' : 'absolute'} z-[2] object-cover w-full rounded-xl h-[70%]`}
// // // //               alt="Third"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ImageCard;
// // "use client"
// // import React, { useEffect, useRef, useState } from 'react';
// // import gsap from 'gsap';
// // import { Clash } from '../../../public/fonts/fonts';
// // import { X } from '@phosphor-icons/react/dist/ssr';

// // const ImageCard = () => {
// //   const [isExpanded, setIsExpanded] = useState(false);
// //   const image1Ref = useRef(null);
// //   const image2Ref = useRef(null);
// //   const image3Ref = useRef(null);
// //   const containerRef = useRef(null);
// //   const cardRef = useRef(null);

// //   useEffect(() => {
// //     if (!isExpanded) {
// //       gsap.set([image1Ref.current, image2Ref.current, image3Ref.current], {
// //         rotation: 0,
// //         x: 0,
// //         y: 0
// //       });

// //       const handleMouseEnter = () => {
// //         if (!isExpanded) {
// //           gsap.to(image1Ref.current, {
// //             rotation: 2,
// //             y: 8,
// //             duration: 0.3,
// //             ease: 'power2.out'
// //           });
// //           gsap.to(image2Ref.current, {
// //             rotation: 12,
// //             x: 24,
// //             duration: 0.3,
// //             ease: 'power2.out'
// //           });
// //           gsap.to(image3Ref.current, {
// //             rotation: -12,
// //             x: -24,
// //             duration: 0.3,
// //             ease: 'power2.out'
// //           });
// //         }
// //       };

// //       const handleMouseLeave = () => {
// //         if (!isExpanded) {
// //           gsap.to([image1Ref.current, image2Ref.current, image3Ref.current], {
// //             rotation: 0,
// //             x: 0,
// //             y: 0,
// //             duration: 0.3,
// //             ease: 'power2.out'
// //           });
// //         }
// //       };

// //       const container = containerRef.current;
// //       container.addEventListener('mouseenter', handleMouseEnter);
// //       container.addEventListener('mouseleave', handleMouseLeave);

// //       return () => {
// //         container.removeEventListener('mouseenter', handleMouseEnter);
// //         container.removeEventListener('mouseleave', handleMouseLeave);
// //       };
// //     }
// //   }, [isExpanded]);

// //   const handleClick = () => {
// //     gsap.to(cardRef.current, {
// //       width: window.innerWidth >= 1280 ? '40%' : 
// //              window.innerWidth >= 1024 ? '50%' : 
// //              window.innerWidth >= 768 ? '60%' : '100%',
// //       height: window.innerWidth >= 1280 ? '25vw' : 
// //               window.innerWidth >= 1024 ? '29vw' : 
// //               window.innerWidth >= 768 ? '34vw' : '51vw',
// //       duration: 0.5,
// //       ease: 'power2.out',
// //       onStart: () => {
// //         gsap.to([image1Ref.current, image2Ref.current, image3Ref.current], {
// //           rotation: 0,
// //           x: 0,
// //           y: 0,
// //           duration: 0.3,
// //           ease: 'power2.out'
// //         });
// //       },
// //       onComplete: () => setIsExpanded(true)
// //     });
// //   };

// //   const handleClose = (e) => {
// //     e.stopPropagation();
// //     gsap.to(cardRef.current, {
// //       width: window.innerWidth >= 1280 ? '20%' : 
// //              window.innerWidth >= 1024 ? '25%' : 
// //              window.innerWidth >= 768 ? '30%' : '50%',
// //       height: window.innerWidth >= 1280 ? '19vw' : 
// //               window.innerWidth >= 1024 ? '23vw' : 
// //               window.innerWidth >= 768 ? '28vw' : '45vw',
// //       duration: 0.5,
// //       ease: 'power2.out',
// //       onComplete: () => setIsExpanded(false)
// //     });
// //   };

// //   return (
// //     <div ref={cardRef} className={`${isExpanded ? 'md:w-[60%] lg:w-[50%] xl:w-[40%] w-[100%] h-[51vw] md:h-[34vw] lg:h-[29vw] xl:h-[25vw]' : 
// //                      'md:w-[30%] lg:w-[25%] xl:w-[20%] w-[50%] h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'}
// //                      flex-shrink-0 z-[222] rounded-xl ${Clash.className}`}>
// //       <div className={`w-full h-full bg-[#333f5e] flex ${isExpanded ? 'flex-row justify-between' : 'flex-col'} rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5`}>
// //         <div className='text-white flex flex-col gap-[1px] lg:gap-[2px]'>
// //           <div className='text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none'>
// //             Start
// //           </div>
// //           <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>
// //             12th January 1999
// //           </div>
// //         </div>
// //         <div
// //           ref={containerRef}
// //           onClick={handleClick}
// //           className={`${isExpanded ? 'w-[58%]' : 'w-full '} rounded-xl  h-full relative bg-gray-700`}
// //         >
// //           {isExpanded && (
// //             <div 
// //               className='cursor-pointer p-2 bg-white  rounded-full absolute top-0 right-0 z-[9999]'
// //               onClick={handleClose}
// //             >
// //               <X size={20} color="#000000" />
// //             </div>
// //           )}
// //           <div className={`${isExpanded ? 'overflow-y-auto h-full' : 'h-[70%]'}`}>
// //             <img
// //               ref={image1Ref}
// //               src="/images/images.png"
// //               className={`${isExpanded ? 'h-[70%]' : 'absolute'} z-[3] object-cover w-full rounded-xl h-[100%]`}
// //               alt="First"
// //             />
// //             <img
// //               ref={image2Ref}
// //               src="/images/images2.png"
// //               className={`${isExpanded ? 'mt-4 h-[70%]' : 'absolute'} z-[1] object-cover w-full rounded-xl h-[100%]`}
// //               alt="Second"
// //             />
// //             <img
// //               ref={image3Ref}
// //               src="/images/images3.png"
// //               className={`${isExpanded ? 'mt-4 h-[70%]' : 'absolute'} z-[2] object-cover w-full rounded-xl h-[100%]`}
// //               alt="Third"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageCard;
// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { Clash } from '../../../public/fonts/fonts';
// import { X } from '@phosphor-icons/react/dist/ssr';

// const ImageCard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const image1Ref = useRef(null);
//   const image2Ref = useRef(null);
//   const image3Ref = useRef(null);
//   const xref = useRef(null);
//   const containerRef = useRef(null);
//   const cardRef = useRef(null);

//   useEffect(() => {
//     if (!isExpanded) {
//       gsap.set([image1Ref.current, image2Ref.current, image3Ref.current], {
//         rotation: 0,
//         x: 0,
//         y: 0
//       });

//       const handleMouseEnter = () => {
//         if (!isExpanded) {
//           gsap.to(image1Ref.current, {
//             rotation: 2,
//             y: 8,
//             duration: 0.3,
//             ease: 'power2.out'
//           });
//           gsap.to(image2Ref.current, {
//             rotation: 12,
//             x: 24,
//             duration: 0.3,
//             ease: 'power2.out'
//           });
//           gsap.to(image3Ref.current, {
//             rotation: -12,
//             x: -24,
//             duration: 0.3,
//             ease: 'power2.out'
//           });
//         }
//       };

//       const handleMouseLeave = () => {
//         if (!isExpanded) {
//           gsap.to([image1Ref.current, image2Ref.current, image3Ref.current], {
//             rotation: 0,
//             x: 0,
//             y: 0,
//             duration: 0.3,
//             ease: 'power2.out'
//           });
//         }
//       };

//       const container = containerRef.current;
//       container.addEventListener('mouseenter', handleMouseEnter);
//       container.addEventListener('mouseleave', handleMouseLeave);

//       return () => {
//         container.removeEventListener('mouseenter', handleMouseEnter);
//         container.removeEventListener('mouseleave', handleMouseLeave);
//       };
//     }
//   }, [isExpanded]);

//   const handleClick = () => {
//     // First fade out the images
//     gsap.to([image1Ref.current,xref.current, image2Ref.current, image3Ref.current], {
//       opacity: 0,
//       duration: 0.2,
//       ease: 'power2.out',
//       onComplete: () => {
//         // Then start the expansion animation
//         gsap.to(cardRef.current, {
//           width: window.innerWidth >= 1280 ? '40%' : 
//                  window.innerWidth >= 1024 ? '50%' : 
//                  window.innerWidth >= 768 ? '60%' : '100%',
//           height: window.innerWidth >= 1280 ? '25vw' : 
//                   window.innerWidth >= 1024 ? '29vw' : 
//                   window.innerWidth >= 768 ? '34vw' : '51vw',
//           duration: 0.5,
//           ease: 'power2.out',
//           onStart: () => {
//             gsap.to([image1Ref.current,xref.current, image2Ref.current, image3Ref.current], {
//               rotation: 0,
//               x: 0,
//               y: 0,
//               duration: 0.3,
//               ease: 'power2.out'
//             });
//           },
//           onComplete: () => {
//             setIsExpanded(true);
//             // Fade images back in after expansion
//             gsap.to([image1Ref.current,xref.current, image2Ref.current, image3Ref.current], {
//               opacity: 1,
//               duration: 0.3,
//               ease: 'power2.out',
//               stagger: 0.1
//             });
//           }
//         });
//       }
//     });
//   };

//   const handleClose = (e) => {
//     e.stopPropagation();
//     // First fade out the images
//     gsap.to([image1Ref.current,xref.current, image2Ref.current, image3Ref.current], {
//       opacity: 0,
//       duration: 0.2,
//       ease: 'power2.out',
//       onComplete: () => {
//         // Then start the shrinking animation
//         gsap.to(cardRef.current, {
//           width: window.innerWidth >= 1280 ? '20%' : 
//                  window.innerWidth >= 1024 ? '25%' : 
//                  window.innerWidth >= 768 ? '30%' : '50%',
//           height: window.innerWidth >= 1280 ? '19vw' : 
//                   window.innerWidth >= 1024 ? '23vw' : 
//                   window.innerWidth >= 768 ? '28vw' : '45vw',
//           duration: 0.5,
//           ease: 'power2.out',
//           onComplete: () => {
//             setIsExpanded(false);
//             // Fade images back in after shrinking
//             gsap.to([image1Ref.current,xref.current, image2Ref.current, image3Ref.current], {
//               opacity: 1,
//               duration: 0.3,
//               ease: 'power2.out'
//             });
//           }
//         });
//       }
//     });
//   };

//   return (
//     <div ref={cardRef} className={`${isExpanded ? 'md:w-[60%] lg:w-[50%] xl:w-[40%] w-[100%] h-[51vw] md:h-[34vw] lg:h-[29vw] xl:h-[25vw]' : 
//                      'md:w-[30%] lg:w-[25%] xl:w-[20%] w-[50%] h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'}
//                      flex-shrink-0 z-[222] rounded-xl ${Clash.className}`}>
//       <div className={`w-full h-full bg-[#333f5e] flex ${isExpanded ? 'flex-row justify-between' : 'flex-col'} rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5`}>
//         <div className='text-white flex flex-col gap-[1px] lg:gap-[2px]'>
//           <div className='text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none'>
//             Start
//           </div>
//           <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>
//             12th January 1999
//           </div>
//         </div>
//         <div
//           ref={containerRef}
//           onClick={handleClick}
//           className={`${isExpanded ? 'w-[58%]' : 'w-full '} rounded-xl  h-full relative `}
//         >
//           {isExpanded && (
//             <div 
//             ref={xref}
//               className='cursor-pointer p-2 bg-white  rounded-full absolute top-0 right-0 z-[9999]'
//               onClick={handleClose}
//             >
//               <X size={20} color="#000000" />
//             </div>
//           )}
//           <div className={`${isExpanded ? 'overflow-y-auto h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' : 'h-[70%]'}`}>
//             <img
//               ref={image1Ref}
//               src="/images/images.png"
//               className={`${isExpanded ? 'h-[70%]' : 'absolute'} z-[3] object-cover w-full rounded-xl h-[100%]`}
//               alt="First"
//             />
//             <img
//               ref={image2Ref}
//               src="/images/images2.png"
//               className={`${isExpanded ? 'mt-4 h-[70%]' : 'absolute'} z-[1] object-cover w-full rounded-xl h-[100%]`}
//               alt="Second"
//             />
//             <img
//               ref={image3Ref}
//               src="/images/images3.png"
//               className={`${isExpanded ? 'mt-4 h-[70%]' : 'absolute'} z-[2] object-cover w-full rounded-xl h-[100%]`}
//               alt="Third"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageCard;
"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Clash } from '../../../public/fonts/fonts';
import { X } from '@phosphor-icons/react/dist/ssr';

const ImageCard = React.forwardRef((props, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const xref = useRef(null);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
 
  useEffect(() => {
    if (!isExpanded) {
      gsap.set([image1Ref.current, image2Ref.current, image3Ref.current], {
        rotation: 0,
        x: 0,
        y: 0
      });

      const handleMouseEnter = () => {
        if (!isExpanded) {
          gsap.to(image1Ref.current, {
            rotation: 2,
            y: 8,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1000
          });
          gsap.to(image2Ref.current, {
            rotation: 12,
            x: 24,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1000
          });
          gsap.to(image3Ref.current, {
            rotation: -12,
            x: -24,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1000
          });
        }
      };

      const handleMouseLeave = () => {
        if (!isExpanded) {
          gsap.to([image1Ref.current, image2Ref.current, image3Ref.current], {
            rotation: 0,
            x: 0,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      };

      const container = containerRef.current;
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isExpanded]);

  const handleClick = () => {
    gsap.to([image1Ref.current, xref.current, image2Ref.current, image3Ref.current], {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(cardRef.current, {
          width: window.innerWidth >= 1280 ? '40%' : 
                 window.innerWidth >= 1024 ? '50%' : 
                 window.innerWidth >= 768 ? '60%' : '100%',
          height: window.innerWidth >= 1280 ? '25vw' : 
                  window.innerWidth >= 1024 ? '29vw' : 
                  window.innerWidth >= 768 ? '34vw' : '51vw',
          duration: 0.5,
          ease: 'power2.out',
          onStart: () => {
            gsap.to([image1Ref.current, xref.current, image2Ref.current, image3Ref.current], {
              rotation: 0,
              x: 0,
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          },
          onComplete: () => {
            setIsExpanded(true);
            gsap.to([image1Ref.current, xref.current, image2Ref.current, image3Ref.current], {
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out',
              stagger: 0.1
            });
          }
        });
      }
    });
  };

  const handleClose = (e) => {
    e.stopPropagation();
    gsap.to([image1Ref.current, xref.current, image2Ref.current, image3Ref.current], {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(cardRef.current, {
          width: window.innerWidth >= 1280 ? '20%' : 
                 window.innerWidth >= 1024 ? '25%' : 
                 window.innerWidth >= 768 ? '30%' : '50%',
          height: window.innerWidth >= 1280 ? '19vw' : 
                  window.innerWidth >= 1024 ? '23vw' : 
                  window.innerWidth >= 768 ? '28vw' : '45vw',
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            setIsExpanded(false);
            gsap.to([image1Ref.current, xref.current, image2Ref.current, image3Ref.current], {
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });
      }
    });
  };

  return (
    <div  ref={(el) => {
      // Handle both the internal cardRef and the forwarded ref
      cardRef.current = el;
      if (typeof ref === 'function') {
        ref(el);
      } else if (ref) {
        ref.current = el;
      }
    }}  className={`${isExpanded ? 'md:w-[60%] lg:w-[50%] xl:w-[40%] w-[100%] h-[51vw] md:h-[34vw] lg:h-[29vw] xl:h-[25vw]' : 
                     'md:w-[30%] lg:w-[25%] xl:w-[20%] w-[50%] h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'}
                     flex-shrink-0 z-[222] rounded-xl  ${Clash.className}`}>
      <div className={`w-full h-full bg-[#333f5e] flex ${isExpanded ? 'flex-row justify-between' : 'flex-col'} rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5`}>
        <div className='text-white flex flex-col gap-[1px] lg:gap-[2px]'>
          <div className='text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none'>
            Start
          </div>
          <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>
            12th January 1999
          </div>
        </div>
        <div
          ref={containerRef}
          onClick={handleClick}
          className={`${isExpanded ? 'w-[58%]' : 'w-full'} rounded-xl h-full relative `}
          style={{ willChange: 'transform' }}
        >
          {isExpanded && (
            <div 
              ref={xref}
              className='cursor-pointer p-2 bg-white rounded-full absolute top-0 right-0 z-[9999]'
              onClick={handleClose}
            >
              <X size={20} color="#000000" />
            </div>
          )}
          <div className={`${isExpanded ? 'overflow-y-auto h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' : 'h-[70%]'}`}>
            <img
              ref={image1Ref}
              src="/images/images.png"
              className={`${isExpanded ? 'h-[70%]' : 'absolute'} z-[3] object-cover w-full rounded-xl h-[100%]`}
              alt="First"
            />
            <img
              ref={image2Ref}
              src="/images/images2.png"
              className={`${isExpanded ? 'mt-4 h-[70%]' : 'absolute'} z-[1] object-cover w-full rounded-xl h-[100%]`}
              alt="Second"
            />
            <img
              ref={image3Ref}
              src="/images/images3.png"
              className={`${isExpanded ? 'mt-4 h-[70%]' : 'absolute'} z-[2] object-cover w-full rounded-xl h-[100%]`}
              alt="Third"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ImageCard;
