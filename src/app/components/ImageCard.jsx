// // // "use client"
// // // import React, { useEffect, useRef, useState } from 'react';
// // // import gsap from 'gsap';
// // // import { useGSAP } from '@gsap/react';
// // // import { Clash } from '../../../public/fonts/fonts';
// // // import { X } from '@phosphor-icons/react/dist/ssr';

// // // const ImageCard = React.forwardRef(({ images, title, date }, ref) => {
// // //   const [isExpanded, setIsExpanded] = useState(false);
// // //   const imageRefs = useRef([]);
// // //   const xref = useRef(null);
// // //   const containerRef = useRef(null);
// // //   const cardRef = useRef(null);
// // //   const [refsReady, setRefsReady] = useState(false);
 
// // //   useEffect(() => {
// // //     imageRefs.current = images.map(() => React.createRef());
// // //     setRefsReady(true);
// // //   }, [images]);
 
// // //   useGSAP(() => {
// // //     if (!isExpanded && refsReady) {
// // //       const validRefs = imageRefs.current
// // //         .map(ref => ref.current)
// // //         .filter(Boolean);

// // //       if (validRefs.length > 0) {
// // //         gsap.set(validRefs, {
// // //           rotation: 0,
// // //           x: 0,
// // //           y: 0,
// // //           clearProps: "all"
// // //         });

// // //         const handleMouseEnter = () => {
// // //           if (!isExpanded) {
// // //             validRefs.slice(1).forEach((ref, index) => {
// // //               gsap.to(ref, {
// // //                 rotation: index % 2 === 0 ? 12 : -12,
// // //                 x: index % 2 === 0 ? 24 : -24,
// // //                 duration: 0.3,
// // //                 ease: 'power2.out',
// // //                 transformPerspective: 1000
// // //               });
// // //             });
// // //           }
// // //         };

// // //         const handleMouseLeave = () => {
// // //           if (!isExpanded) {
// // //             gsap.to(validRefs, {
// // //               rotation: 0,
// // //               x: 0,
// // //               y: 0,
// // //               duration: 0.3,
// // //               ease: 'power2.out'
// // //             });
// // //           }
// // //         };

// // //         const container = containerRef.current;
// // //         if (container && !isExpanded) {
// // //           container.addEventListener('mouseenter', handleMouseEnter);
// // //           container.addEventListener('mouseleave', handleMouseLeave);

// // //           return () => {
// // //             container.removeEventListener('mouseenter', handleMouseEnter);
// // //             container.removeEventListener('mouseleave', handleMouseLeave);
// // //           };
// // //         }
// // //       }
// // //     }
// // //   }, [isExpanded, refsReady]); 

// // //   const handleClick = () => {
// // //     const allRefs = [...imageRefs.current.map(ref => ref.current), xref.current].filter(Boolean);
    
// // //     gsap.to(allRefs, {
// // //       opacity: 0,
// // //       duration: 0.2,
// // //       ease: 'power2.out',
// // //       onComplete: () => {
// // //         gsap.to(cardRef.current, {
// // //           width: window.innerWidth >= 1280 ? '40%' : 
// // //                  window.innerWidth >= 1024 ? '50%' : 
// // //                  window.innerWidth >= 768 ? '60%' : '100%',
// // //           height: window.innerWidth >= 1280 ? '25vw' : 
// // //                   window.innerWidth >= 1024 ? '29vw' : 
// // //                   window.innerWidth >= 768 ? '34vw' : '51vw',
// // //           duration: 0.5,
// // //           ease: 'power2.out',
// // //           onStart: () => {
// // //             gsap.set(allRefs, {
// // //               rotation: 0,
// // //               x: 0,
// // //               y: 0,
// // //               clearProps: "all"
// // //             });
// // //           },
// // //           onComplete: () => {
// // //             setIsExpanded(true);
// // //             gsap.to(allRefs, {
// // //               opacity: 1,
// // //               duration: 0.3,
// // //               ease: 'power2.out',
// // //               stagger: 0.1
// // //             });
// // //           }
// // //         });
// // //       }
// // //     });
// // //   };

// // //   const handleClose = (e) => {
// // //     e.stopPropagation();
// // //     const allRefs = [...imageRefs.current.map(ref => ref.current), xref.current].filter(Boolean);

// // //     gsap.to(allRefs, {
// // //       opacity: 0,
// // //       duration: 0.2,
// // //       ease: 'power2.out',
// // //       onComplete: () => {
// // //         gsap.to(cardRef.current, {
// // //           width: window.innerWidth >= 1280 ? '20%' : 
// // //                  window.innerWidth >= 1024 ? '25%' : 
// // //                  window.innerWidth >= 768 ? '30%' : '50%',
// // //           height: window.innerWidth >= 1280 ? '19vw' : 
// // //                   window.innerWidth >= 1024 ? '23vw' : 
// // //                   window.innerWidth >= 768 ? '28vw' : '45vw',
// // //           duration: 0.5,
// // //           ease: 'power2.out',
// // //           onComplete: () => {
// // //             setIsExpanded(false);
// // //             gsap.to(allRefs, {
// // //               opacity: 1,
// // //               duration: 0.3,
// // //               ease: 'power2.out'
// // //             });
// // //           }
// // //         });
// // //       }
// // //     });
// // //   };

// // //   return (
// // //     <div  
// // //       ref={(el) => {
// // //         cardRef.current = el;
// // //         if (typeof ref === 'function') {
// // //           ref(el);
// // //         } else if (ref) {
// // //           ref.current = el;
// // //         }
// // //       }}  
// // //       className={`${isExpanded ? 'md:w-[60%] lg:w-[50%] xl:w-[40%] w-[100%] h-[51vw] md:h-[34vw] lg:h-[29vw] xl:h-[25vw]' : 
// // //                    'md:w-[30%] lg:w-[25%] xl:w-[20%] w-[50%] h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'}
// // //                    flex-shrink-0 z-[222] rounded-xl ${Clash.className}`}
// // //     >
// // //       <div className={`w-full h-full bg-[#333f5e] flex ${isExpanded ? 'flex-row justify-between' : 'flex-col'} rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5`}>
// // //         <div className='text-white flex flex-col gap-[1px] lg:gap-[2px]'>
// // //           <div className='text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none'>
// // //             {title}
// // //           </div>
// // //           <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>
// // //             {date}
// // //           </div>
// // //         </div>
// // //         <div
// // //           ref={containerRef}
// // //           onClick={handleClick}
// // //           className={`${isExpanded ? 'w-[58%]' : 'w-full'} rounded-xl h-full relative`}
// // //           style={{ willChange: 'transform' }}
// // //         >
// // //           {isExpanded && (
// // //             <div 
// // //               ref={xref}
// // //               className='cursor-pointer p-2 bg-white rounded-full absolute top-0 right-0 z-[9999]'
// // //               onClick={handleClose}
// // //             >
// // //               <X size={20} color="#000000" />
// // //             </div>
// // //           )}
// // //           <div 
// // //             className={`${isExpanded ? 'overflow-y-auto max-h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' : 'h-[70%]'}`}
// // //             style={{ height: isExpanded ? '100%' : '70%' }}
// // //           >
// // //             {refsReady && images.map((image, index) => (
// // //               <img
// // //                 key={index}
// // //                 ref={imageRefs.current[index]}
// // //                 src={image}
// // //                 className={`${isExpanded ? `${index > 0 ? 'mt-4' : ''} h-[70%]` : 'absolute'} 
// // //                            ${index === 0 ? 'z-[5]' : `z-[${3 - (index % 3)}]`} object-cover w-full rounded-xl h-[100%]`}
// // //                 alt={`Image ${index + 1}`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // });

// // // export default ImageCard;
// // "use client"
// // import React, { useEffect, useRef, useState } from 'react';
// // import gsap from 'gsap';
// // import { useGSAP } from '@gsap/react';
// // import { Clash } from '../../../public/fonts/fonts';
// // import { X } from '@phosphor-icons/react/dist/ssr';

// // const ImageCard = React.forwardRef(({ images, title, date }, ref) => {
// //   const [isExpanded, setIsExpanded] = useState(false);
// //   const imageRefs = useRef([]);
// //   const xref = useRef(null);
// //   const containerRef = useRef(null);
// //   const cardRef = useRef(null);
// //   const [refsReady, setRefsReady] = useState(false);

//   // useEffect(() => {
//   //   imageRefs.current = images.map(() => React.createRef());
//   //   setRefsReady(true);
//   // }, [images]);

//   // useGSAP(() => {
//   //   if (!isExpanded && refsReady) { // Only apply hover effect if the card is not expanded
//   //     const validRefs = imageRefs.current
//   //       .map(ref => ref.current)
//   //       .filter(Boolean);

//   //     if (validRefs.length > 0) {
//   //       gsap.set(validRefs, {
//   //         rotation: 0,
//   //         x: 0,
//   //         y: 0,
//   //         clearProps: "all"
//   //       });

//   //       const handleMouseEnter = () => {
//   //         validRefs.slice(1).forEach((ref, index) => {
//   //           gsap.to(ref, {
//   //             rotation: index % 2 === 0 ? 12 : -12,
//   //             x: index % 2 === 0 ? 24 : -24,
//   //             duration: 0.3,
//   //             ease: 'power2.out',
//   //             transformPerspective: 1000
//   //           });
//   //         });
//   //       };

//   //       const handleMouseLeave = () => {
//   //         gsap.to(validRefs, {
//   //           rotation: 0,
//   //           x: 0,
//   //           y: 0,
//   //           duration: 0.3,
//   //           ease: 'power2.out'
//   //         });
//   //       };

//   //       const container = containerRef.current;
//   //       if (container) {
//   //         container.addEventListener('mouseenter', handleMouseEnter);
//   //         container.addEventListener('mouseleave', handleMouseLeave);

//   //         return () => {
//   //           container.removeEventListener('mouseenter', handleMouseEnter);
//   //           container.removeEventListener('mouseleave', handleMouseLeave);
//   //         };
//   //       }
//   //     }
//   //   }
//   // }, [isExpanded, refsReady]);

//   // const handleClick = () => {
//   //   const allRefs = [...imageRefs.current.map(ref => ref.current), xref.current].filter(Boolean);

//   //   gsap.to(allRefs, {
//   //     opacity: 0,
//   //     duration: 0.2,
//   //     ease: 'power2.out',
//   //     onComplete: () => {
//   //       gsap.to(cardRef.current, {
//   //         width: window.innerWidth >= 1280 ? '40%' : 
//   //                window.innerWidth >= 1024 ? '50%' : 
//   //                window.innerWidth >= 768 ? '60%' : '100%',
//   //         height: window.innerWidth >= 1280 ? '25vw' : 
//   //                 window.innerWidth >= 1024 ? '29vw' : 
//   //                 window.innerWidth >= 768 ? '34vw' : '51vw',
//   //         duration: 0.5,
//   //         ease: 'power2.out',
//   //         onStart: () => {
//   //           gsap.set(allRefs, {
//   //             rotation: 0,
//   //             x: 0,
//   //             y: 0,
//   //             clearProps: "all"
//   //           });
//   //         },
//   //         onComplete: () => {
//   //           setIsExpanded(true);
//   //           gsap.to(allRefs, {
//   //             opacity: 1,
//   //             duration: 0.3,
//   //             ease: 'power2.out',
//   //             stagger: 0.1
//   //           });
//   //         }
//   //       });
//   //     }
//   //   });
//   // };

//   // const handleClose = (e) => {
//   //   e.stopPropagation();
//   //   const allRefs = [...imageRefs.current.map(ref => ref.current), xref.current].filter(Boolean);

//   //   gsap.to(allRefs, {
//   //     opacity: 0,
//   //     duration: 0.2,
//   //     ease: 'power2.out',
//   //     onComplete: () => {
//   //       gsap.to(cardRef.current, {
//   //         width: window.innerWidth >= 1280 ? '20%' : 
//   //                window.innerWidth >= 1024 ? '25%' : 
//   //                window.innerWidth >= 768 ? '30%' : '50%',
//   //         height: window.innerWidth >= 1280 ? '19vw' : 
//   //                 window.innerWidth >= 1024 ? '23vw' : 
//   //                 window.innerWidth >= 768 ? '28vw' : '45vw',
//   //         duration: 0.5,
//   //         ease: 'power2.out',
//   //         onComplete: () => {
//   //           setIsExpanded(false);
//   //           gsap.to(allRefs, {
//   //             opacity: 1,
//   //             duration: 0.3,
//   //             ease: 'power2.out'
//   //           });
//   //         }
//   //       });
//   //     }
//   //   });
//   // };

// //   return (
// //     <div  
// //       ref={(el) => {
// //         cardRef.current = el;
// //         if (typeof ref === 'function') {
// //           ref(el);
// //         } else if (ref) {
// //           ref.current = el;
// //         }
// //       }}  
// //       className={`${isExpanded ? 'md:w-[60%] lg:w-[50%] xl:w-[40%] w-[100%] h-[51vw] md:h-[34vw] lg:h-[29vw] xl:h-[25vw]' : 
// //                    'md:w-[30%] lg:w-[25%] xl:w-[20%] w-[50%] h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'}
// //                    flex-shrink-0 z-[222] rounded-xl ${Clash.className}`}
// //     >
// //       <div className={`w-full h-full bg-[#333f5e] flex ${isExpanded ? 'flex-row justify-between' : 'flex-col'} rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5`}>
// //         <div className='text-white flex flex-col gap-[1px] lg:gap-[2px]'>
// //           <div className='text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none'>
// //             {title}
// //           </div>
// //           <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>
// //             {date}
// //           </div>
// //         </div>
// //         <div
// //           ref={containerRef}
// //           onClick={handleClick}
// //           className={`${isExpanded ? 'w-[58%]' : 'w-full'} rounded-xl h-full relative`}
// //           style={{ willChange: 'transform' }}
// //         >
// //           {isExpanded && (
// //             <div 
// //               ref={xref}
// //               className='cursor-pointer p-2 bg-white rounded-full absolute top-0 right-0 z-[9999]'
// //               onClick={handleClose}
// //             >
// //               <X size={20} color="#000000" />
// //             </div>
// //           )}
// //           <div 
// //             className={`${isExpanded ? 'overflow-y-auto max-h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' : 'h-[70%]'}`}
// //             style={{ height: isExpanded ? '100%' : '70%' }}
// //           >
// //             {refsReady && images.map((image, index) => (
// //               <img
// //                 key={index}
// //                 ref={imageRefs.current[index]}
// //                 src={image}
// //                 className={`${isExpanded ? `${index > 0 ? 'mt-4' : ''} h-[70%]` : 'absolute'} 
// //                            ${index === 0 ? 'z-[5]' : `z-[${3 - (index % 3)}]`} object-cover w-full rounded-xl h-[100%]`}
// //                 alt={`Image ${index + 1}`}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // });

// // export default ImageCard;
// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { Clash } from '../../../public/fonts/fonts';
// import { X } from '@phosphor-icons/react/dist/ssr';
// import ImagePreview from './ImagePreview';
// const ImageCard = React.forwardRef(({ images, title, date }, ref) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');
//   const imageRefs = useRef([]);
//   const xref = useRef(null);
//   const containerRef = useRef(null);
//   const cardRef = useRef(null);
//   const [refsReady, setRefsReady] = useState(false);

//   useEffect(() => {
//     imageRefs.current = images.map(() => React.createRef());
//     setRefsReady(true);
//   }, [images]);

//   const handleImageClick = (src, e) => {
//     e.stopPropagation(); // Prevent card expansion when clicking image
//     setSelectedImage(src);
//     setIsPreviewOpen(true);
//   };

//   const handleClosePreview = () => {
//     setIsPreviewOpen(false);
//     setSelectedImage('');
//   };


//   useGSAP(() => {
//     if (!isExpanded && refsReady) { // Only apply hover effect if the card is not expanded
//       const validRefs = imageRefs.current
//         .map(ref => ref.current)
//         .filter(Boolean);

//       if (validRefs.length > 0) {
//         gsap.set(validRefs, {
//           rotation: 0,
//           x: 0,
//           y: 0,
//           clearProps: "all"
//         });

//         const handleMouseEnter = () => {
//           validRefs.slice(1).forEach((ref, index) => {
//             gsap.to(ref, {
//               rotation: index % 2 === 0 ? 12 : -12,
//               x: index % 2 === 0 ? 24 : -24,
//               duration: 0.3,
//               ease: 'power2.out',
//               transformPerspective: 1000
//             });
//           });
//         };

//         const handleMouseLeave = () => {
//           gsap.to(validRefs, {
//             rotation: 0,
//             x: 0,
//             y: 0,
//             duration: 0.3,
//             ease: 'power2.out'
//           });
//         };

//         const container = containerRef.current;
//         if (container) {
//           container.addEventListener('mouseenter', handleMouseEnter);
//           container.addEventListener('mouseleave', handleMouseLeave);

//           return () => {
//             container.removeEventListener('mouseenter', handleMouseEnter);
//             container.removeEventListener('mouseleave', handleMouseLeave);
//           };
//         }
//       }
//     }
//   }, [isExpanded, refsReady]);

//   const handleClick = () => {
//     const allRefs = [...imageRefs.current.map(ref => ref.current), xref.current].filter(Boolean);

//     gsap.to(allRefs, {
//       opacity: 0,
//       duration: 0.2,
//       ease: 'power2.out',
//       onComplete: () => {
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
//             gsap.set(allRefs, {
//               rotation: 0,
//               x: 0,
//               y: 0,
//               clearProps: "all"
//             });
//           },
//           onComplete: () => {
//             setIsExpanded(true);
//             gsap.to(allRefs, {
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
//     const allRefs = [...imageRefs.current.map(ref => ref.current), xref.current].filter(Boolean);

//     gsap.to(allRefs, {
//       opacity: 0,
//       duration: 0.2,
//       ease: 'power2.out',
//       onComplete: () => {
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
//             gsap.to(allRefs, {
//               opacity: 1,
//               duration: 0.3,
//               ease: 'power2.out'
//             });
//           }
//         });
//       }
//     });
//   };

//   // Your existing GSAP animations and other handlers remain the same
  
//   return (
//     <>
//       <div  
//         ref={(el) => {
//           cardRef.current = el;
//           if (typeof ref === 'function') {
//             ref(el);
//           } else if (ref) {
//             ref.current = el;
//           }
//         }}  
//         className={`${isExpanded ? 'md:w-[60%] lg:w-[50%] xl:w-[40%] w-[100%] h-[51vw] md:h-[34vw] lg:h-[29vw] xl:h-[25vw]' : 
//                      'md:w-[30%] lg:w-[25%] xl:w-[20%] w-[50%] h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'}
//                      flex-shrink-0 z-[222] rounded-xl ${Clash.className}`}
//       >
//         <div className={`w-full h-full bg-[#333f5e] flex ${isExpanded ? 'flex-row justify-between' : 'flex-col'} rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5`}>
//           <div className='text-white flex flex-col gap-[1px] lg:gap-[2px]'>
//             <div className='text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none'>
//               {title}
//             </div>
//             <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>
//               {date}
//             </div>
//           </div>
//           <div
//             ref={containerRef}
//             onClick={handleClick}
//             className={`${isExpanded ? 'w-[58%]' : 'w-full'} rounded-xl h-full relative`}
//             style={{ willChange: 'transform' }}
//           >
//             {isExpanded && (
//               <div 
//                 ref={xref}
//                 className='cursor-pointer p-2 bg-white rounded-full absolute top-0 right-0 z-[9999]'
//                 onClick={handleClose}
//               >
//                 <X size={20} color="#000000" />
//               </div>
//             )}
//             <div 
//               className={`${isExpanded ? 'overflow-y-auto max-h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' : 'h-[70%]'}`}
//               style={{ height: isExpanded ? '100%' : '70%' }}
//             >
//               {refsReady && images.map((image, index) => (
//                 <img
//                   key={index}
//                   ref={imageRefs.current[index]}
//                   src={image}
//                   onClick={(e) => handleImageClick(image, e)}
//                   className={`${isExpanded ? `${index > 0 ? 'mt-4' : ''} h-[70%]` : 'absolute'} 
//                              ${index === 0 ? 'z-[5]' : `z-[${3 - (index % 3)}]`} object-cover w-full rounded-xl h-[100%] cursor-pointer`}
//                   alt={`Image ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isPreviewOpen && <ImagePreview src={selectedImage} onClose={handleClosePreview} />}
//     </>
//   );
// });

// export default ImageCard;
"use client"
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Clash } from '../../../public/fonts/fonts';
import { X } from '@phosphor-icons/react/dist/ssr';

const ImageCard = React.forwardRef(({ images, title, date, onImageClick }, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageRefs = useRef([]);
  const xref = useRef(null);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [refsReady, setRefsReady] = useState(false);

  useEffect(() => {
    imageRefs.current = images.map(() => React.createRef());
    setRefsReady(true);
  }, [images]);

  // useGSAP(() => {
  
  //   if (!isExpanded && refsReady) {
  //     const validRefs = imageRefs.current
  //       .map(ref => ref.current)
  //       .filter(Boolean);

  //     if (validRefs.length > 0) {
  //       gsap.set(validRefs, {
  //         rotation: 0,
  //         x: 0,
  //         y: 0,
  //         clearProps: "all"
  //       });

  //       const handleMouseEnter = () => {
  //         validRefs.slice(1).forEach((ref, index) => {
  //           gsap.to(ref, {
  //             rotation: index % 2 === 0 ? 12 : -12,
  //             x: index % 2 === 0 ? 24 : -24,
  //             duration: 0.3,
  //             ease: 'power2.out',
  //             transformPerspective: 1000
  //           });
  //         });
  //       };

  //       const handleMouseLeave = () => {
  //         gsap.to(validRefs, {
  //           rotation: 0,
  //           x: 0,
  //           y: 0,
  //           duration: 0.3,
  //           ease: 'power2.out'
  //         });
  //       };

  //       const container = containerRef.current;
  //       if (container) {
  //         container.addEventListener('mouseenter', handleMouseEnter);
  //         container.addEventListener('mouseleave', handleMouseLeave);

  //         return () => {
  //           container.removeEventListener('mouseenter', handleMouseEnter);
  //           container.removeEventListener('mouseleave', handleMouseLeave);
  //         };
  //       }
  //     }
  //   }
  // }, [isExpanded, refsReady]);

  useEffect(() => {
    if (!isExpanded && refsReady) {
      const validRefs = imageRefs.current
        .map(ref => ref.current)
        .filter(Boolean);

      if (validRefs.length > 0) {
        gsap.set(validRefs, {
          rotation: 0,
          x: 0,
          y: 0,
          clearProps: "all"
        });

        const handleMouseEnter = () => {
          if (!isExpanded) { // Additional check
            validRefs.slice(1).forEach((ref, index) => {
              gsap.to(ref, {
                rotation: index % 2 === 0 ? 12 : -12,
                x: index % 2 === 0 ? 24 : -24,
                duration: 0.3,
                ease: 'power2.out',
                transformPerspective: 1000
              });
            });
          }
        };

        const handleMouseLeave = () => {
          if (!isExpanded) { // Additional check
            gsap.to(validRefs, {
              rotation: 0,
              x: 0,
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        };

        const container = containerRef.current;
        if (container) {
          container.addEventListener('mouseenter', handleMouseEnter);
          container.addEventListener('mouseleave', handleMouseLeave);

          return () => {
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
            // Reset any active animations when cleaning up
            gsap.to(validRefs, {
              rotation: 0,
              x: 0,
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          };
        }
      }
    }

    // Cleanup any lingering animations when expanded
    return () => {
      const validRefs = imageRefs.current
        .map(ref => ref.current)
        .filter(Boolean);
      
      if (validRefs.length > 0) {
        gsap.to(validRefs, {
          rotation: 0,
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };
  }, [isExpanded, refsReady]);

  const handleClick = () => {
    const allRefs = [...imageRefs.current.map(ref => ref.current), xref.current].filter(Boolean);

    gsap.to(allRefs, {
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
            gsap.set(allRefs, {
              rotation: 0,
              x: 0,
              y: 0,
              clearProps: "all"
            });
          },
          onComplete: () => {
            setIsExpanded(true);
            gsap.to(allRefs, {
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
    const allRefs = [...imageRefs.current.map(ref => ref.current), xref.current].filter(Boolean);

    gsap.to(allRefs, {
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
            gsap.to(allRefs, {
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });
      }
    });
  };

  const handleImageClick = (e, image) => {
    if (isExpanded) {
      e.stopPropagation();
      onImageClick(image);
    }
  };

  return (
    <div  
      ref={(el) => {
        cardRef.current = el;
        if (typeof ref === 'function') {
          ref(el);
        } else if (ref) {
          ref.current = el;
        }
      }}  
      className={`${isExpanded ? 'md:w-[60%] lg:w-[50%] xl:w-[40%] w-[100%] h-[51vw] md:h-[34vw] lg:h-[29vw] xl:h-[25vw]' : 
                   'md:w-[30%] lg:w-[25%] xl:w-[20%] w-[50%] h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'}
                   flex-shrink-0 z-[222] rounded-xl ${Clash.className}`}
    >
      <div className={`w-full h-full bg-[#333f5e] flex ${isExpanded ? 'flex-row justify-between' : 'flex-col'} rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5`}>
        <div className='text-white flex flex-col gap-[1px] lg:gap-[2px]'>
          <div className='text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none'>
            {title}
          </div>
          <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>
            {date}
          </div>
        </div>
        <div
          ref={containerRef}
          onClick={handleClick}
          className={`${isExpanded ? 'w-[58%]' : 'w-full'} rounded-xl h-full relative`}
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
          <div 
            className={`${isExpanded ? 'overflow-y-auto max-h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]' : 'h-[70%]'}`}
            style={{ height: isExpanded ? '100%' : '70%' }}
          >
            {refsReady && images.map((image, index) => (
              <img
                key={index}
                ref={imageRefs.current[index]}
                src={image}
                onClick={(e) => handleImageClick(e, image)}
                className={`${isExpanded ? `${index > 0 ? 'mt-4' : ''} h-[70%]` : 'absolute'} 
                           ${index === 0 ? 'z-[5]' : `z-[${3 - (index % 3)}]`} 
                           object-cover w-full rounded-xl h-[100%] ${isExpanded ? 'cursor-pointer' : ''}`}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ImageCard;