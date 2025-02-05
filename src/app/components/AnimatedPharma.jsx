
// "use client"
// import React, { useRef } from 'react'
// import { Clash } from '../../../public/fonts/fonts';

// const AnimatedPharma = () => {
//     const containerRef = useRef(null);
//     const textRefs = useRef([]);

//     const leftContent = [
//         {
//           title: "Strict Temperature Control",
//           description: "Advanced cold chain solutions to maintain product integrity from pickup to delivery."
//         },
//         {
//           title: "Secure Packaging & Handling",
//           description: "Tamper-proof packaging and expert handling to ensure your shipments arrive in perfect condition."
//         }
//       ];
      
//       const rightContent = [
//         {
//           title: "Regulatory Compliance",
//           description: "Adhering to international pharmaceutical shipping guidelines for safe and legal transportation."
//         },
//         {
//           title: "Real-Time Tracking",
//           description: "24/7 shipment visibility to provide complete transparency and peace of mind."
//         }
//       ];

//   return (
//     <div className='relative'>
//     <div  className='h-[50vw] md:p-[2vw] lg:p-[4vw] px-4 py-4'>
//     <div className='flex w-full justify-between h-full'>
//       <div className={`${Clash.className} flex justify-between text-[#02123b] py-[6vw]`}>
//         {/* Left Column */}
//         <div className='flex flex-col h-full justify-between w-[30%]'>
//           {leftContent.map((content, index) => (
//             <div key={`left-${index}`}>
//               <div 
//                 ref={el => textRefs.current[index * 2] = el} 
//                 className='md:text-[2vw] text-[5vw] text-right'
//               >
//                 {content.title}
//               </div>
//               <div 
//                 ref={el => textRefs.current[index * 2 + 1] = el} 
//                 className='text-[4vw] md:text-[1.3vw] text-right'
//               >
//                 {content.description}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Column */}
//         <div className='flex flex-col h-full justify-between w-[30%]'>
//           {rightContent.map((content, index) => (
//             <div key={`right-${index}`}>
//               <div 
//                 ref={el => textRefs.current[(leftContent.length * 2) + (index * 2)] = el} 
//                 className='md:text-[2vw] text-[5vw] text-left'
//               >
//                 {content.title}
//               </div>
//               <div 
//                 ref={el => textRefs.current[(leftContent.length * 2) + (index * 2 + 1)] = el} 
//                 className='text-[4vw] md:text-[1.3vw] text-left'
//               >
//                 {content.description}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//       <img src="/images/pharma/bag.png" alt="" />
//       <img src="/images/pharma/dropper.png" alt="" />
//       <img src="/images/pharma/pills.png" alt="" />
//       <img src="/images/pharma/syringe.png" alt="" />
//             <img src="/images/pharma/top.png" alt="" />
//             <img src="/images/pharma/bottom.png" className='w-full' alt="" />
//       </div>
//       <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//       <img src="/images/pharma/package2.png" className='w-full' alt="" />
//       </div>
      
//     </div>
//   </div>
//   </div>
//   )
// }

// export default AnimatedPharma

"use client"
import React, { useEffect, useRef } from 'react'
import { Clash } from '../../../public/fonts/fonts';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedPharma = () => {
    // const containerRef = useRef(null);
    // const containerRef2 = useRef(null);
    // const textRefs = useRef([]);
    // const fallingItemsRef = useRef([]);
    // const boxLidRef = useRef(null);
    // const finalPackageRef = useRef(null);
    // const bottomBoxRef = useRef(null);
    const containerRef = useRef(null);
    const containerRef2 = useRef(null);
    const textRefs = useRef([]);
    const fallingItemsRef = useRef([]);
    const mobileTextRefs = useRef([]);
    const mobileFallingItemsRef = useRef([]);
    const boxLidRef = useRef(null);
    const finalPackageRef = useRef(null);
    const bottomBoxRef = useRef(null);
    const mobileBoxLidRef = useRef(null);
    const mobileFinalPackageRef = useRef(null);
    const mobileBottomBoxRef = useRef(null);


    const leftContent = [
        {
          title: "Strict Temperature Control",
          description: "Advanced cold chain solutions to maintain product integrity from pickup to delivery."
        },
        {
          title: "Secure Packaging & Handling",
          description: "Tamper-proof packaging and expert handling to ensure your shipments arrive in perfect condition."
        }
    ];
      
    const rightContent = [
        {
          title: "Regulatory Compliance",
          description: "Adhering to international pharmaceutical shipping guidelines for safe and legal transportation."
        },
        {
          title: "Real-Time Tracking",
          description: "24/7 shipment visibility to provide complete transparency and peace of mind."
        }
    ];

    // useEffect(() => {
    //     const container = containerRef.current;
    //     const container2 = containerRef2.current;
    //     const textElements = textRefs.current;
    //     const fallingItems = fallingItemsRef.current;
    //     const boxLid = boxLidRef.current;
    //     const finalPackage = finalPackageRef.current;
    //     const bottomBox = bottomBoxRef.current;

    //     // Set initial states
    //     gsap.set(textElements, { 
    //         clipPath: "inset(0 0 100% 0)",
    //         opacity: 1
    //     });

    //     // Set initial positions for falling items with different X positions
    //     fallingItems.forEach((item, index) => {
    //         const xOffset = [-30, 20, -15, 25][index]; // Different X offsets for each item
    //         gsap.set(item, {
    //             y: -200,
    //             x: xOffset,
    //             opacity: 0,
    //             scale: 0.8
    //         });
    //     });

    //     gsap.set(boxLid, {
    //         y: -200,
    //         rotation: 0,
    //         transformOrigin: "50% 100%",
    //         opacity: 0
    //     });

    //     gsap.set(finalPackage, {
    //         opacity: 0
    //     });

    //     // Create main timeline
    //     const mainTimeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: container,
    //             start: "top top",
    //             end: "+=400%",
    //             pin: true,
    //             markers:true,
    //             scrub: 1,
    //             markers: false
    //         }
    //     });

    //     // Animate falling items one by one
    //     fallingItems.forEach((item, index) => {
    //         mainTimeline
    //             .to(item, {
    //                 y: 0,
    //                 opacity: 1,
    //                 duration: 0.4,
    //                 ease: "power1.in"
    //             })
    //             .to(item, {
    //                 y: 50,
    //                 opacity: 0,
    //                 duration: 0.3,
    //                 ease: "none"
    //             }, ">");
    //     });

    //     // Animate lid falling and staying
    //     mainTimeline
    //         .to(boxLid, {
    //             y: 0,
    //             opacity: 1,
    //             rotation: 0,
    //             duration: 0.5,
    //             ease: "bounce.out"
    //         }, ">")
    //         .to(boxLid, {
    //             y: -5, // Slight bounce up
    //             duration: 0.2
    //         })
    //         .to(boxLid, {
    //             y: 0, // Settle into place
    //             duration: 0.1
    //         });

    //     // Fade to final package
    //     mainTimeline
    //         .to([bottomBox, boxLid], {
    //             opacity: 0,
    //             duration: 0.3
    //         })
    //         .to(finalPackage, {
    //             opacity: 1,
    //             duration: 0.3
    //         }, "<");

    //     // Text reveal animation at the end
    //     textElements.forEach((element, index) => {
    //         mainTimeline.to(element, {
    //             clipPath: "inset(0 0 0% 0)",
    //             duration: 0.4,
    //             ease: "power1.inOut"
    //         }, ">-0.2");
    //     });

    //     return () => {
    //         mainTimeline.kill();
    //     };
    // }, []);

    // useEffect(() => {
    //     // Desktop Animation Setup
    //     const setupDesktopAnimation = () => {
    //         const container = containerRef.current;
    //         const textElements = textRefs.current;
    //         const fallingItems = fallingItemsRef.current;
    //         const boxLid = boxLidRef.current;
    //         const finalPackage = finalPackageRef.current;
    //         const bottomBox = bottomBoxRef.current;

    //         if (!container) return;

    //         // Set initial states
    //         gsap.set(textElements, { 
    //             clipPath: "inset(0 0 100% 0)",
    //             opacity: 1
    //         });

    //         fallingItems.forEach((item, index) => {
    //             const xOffset = [-30, 20, -15, 25][index];
    //             gsap.set(item, {
    //                 y: -200,
    //                 x: xOffset,
    //                 opacity: 0,
    //                 scale: 0.8
    //             });
    //         });

    //         gsap.set(boxLid, {
    //             y: -200,
    //             rotation: 0,
    //             transformOrigin: "50% 100%",
    //             opacity: 0
    //         });

    //         gsap.set(finalPackage, {
    //             opacity: 0
    //         });

    //         const mainTimeline = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: container,
    //                 start: "top top",
    //                 end: "+=400%",
    //                 pin: true,
    //                 scrub: 1,
    //                 markers: false
    //             }
    //         });

    //         // Animate falling items
    //         fallingItems.forEach((item, index) => {
    //             mainTimeline
    //                 .to(item, {
    //                     y: 0,
    //                     opacity: 1,
    //                     duration: 0.4,
    //                     ease: "power1.in"
    //                 })
    //                 .to(item, {
    //                     y: 50,
    //                     opacity: 0,
    //                     duration: 0.3,
    //                     ease: "none"
    //                 }, ">");
    //         });

    //         // Animate lid
    //         mainTimeline
    //             .to(boxLid, {
    //                 y: 0,
    //                 opacity: 1,
    //                 rotation: 0,
    //                 duration: 0.5,
    //                 ease: "bounce.out"
    //             }, ">")
    //             .to(boxLid, {
    //                 y: -5,
    //                 duration: 0.2
    //             })
    //             .to(boxLid, {
    //                 y: 0,
    //                 duration: 0.1
    //             });

    //         // Final package transition
    //         mainTimeline
    //             .to([bottomBox, boxLid], {
    //                 opacity: 0,
    //                 duration: 0.3
    //             })
    //             .to(finalPackage, {
    //                 opacity: 1,
    //                 duration: 0.3
    //             }, "<");

    //         // Text animations
    //         textElements.forEach((element, index) => {
    //             mainTimeline.to(element, {
    //                 clipPath: "inset(0 0 0% 0)",
    //                 duration: 0.4,
    //                 ease: "power1.inOut"
    //             }, ">-0.2");
    //         });

    //         return mainTimeline;
    //     };

    //     // Mobile Animation Setup
    //     const setupMobileAnimation = () => {
    //         const container = containerRef2.current;
    //         const mobileTexts = container.querySelectorAll('.text-[5vw], .text-[4vw]');
    //         const mobileFallingItems = container.querySelectorAll('.w-16');
    //         const mobileBoxLid = container.querySelector('.w-\\[78vw\\]');
    //         const mobileBottomBox = container.querySelector('.w-\\[74vw\\]');
    //         const mobileFinalPackage = container.querySelector('.w-\\[75vw\\]');

    //         if (!container) return;

    //         // Set initial states for mobile
    //         gsap.set(mobileTexts, { 
    //             clipPath: "inset(0 0 100% 0)",
    //             opacity: 1
    //         });

    //         mobileFallingItems.forEach((item, index) => {
    //             const xOffset = [-30, 20, -15, 25][index];
    //             gsap.set(item, {
    //                 y: -200,
    //                 x: xOffset,
    //                 opacity: 0,
    //                 scale: 0.8
    //             });
    //         });

    //         gsap.set(mobileBoxLid, {
    //             y: -200,
    //             rotation: 0,
    //             transformOrigin: "50% 100%",
    //             opacity: 0
    //         });

    //         gsap.set(mobileFinalPackage, {
    //             opacity: 0
    //         });

    //         const mobileTimeline = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: container,
    //                 start: "top center",
    //                 end: "+=300%",
    //                 pin: true,
    //                 scrub: 1,
    //                 markers: false
    //             }
    //         });

    //         // Mobile animations
    //         mobileFallingItems.forEach((item, index) => {
    //             mobileTimeline
    //                 .to(item, {
    //                     y: 0,
    //                     opacity: 1,
    //                     duration: 0.4,
    //                     ease: "power1.in"
    //                 })
    //                 .to(item, {
    //                     y: 50,
    //                     opacity: 0,
    //                     duration: 0.3,
    //                     ease: "none"
    //                 }, ">");
    //         });

    //         mobileTimeline
    //             .to(mobileBoxLid, {
    //                 y: 0,
    //                 opacity: 1,
    //                 rotation: 0,
    //                 duration: 0.5,
    //                 ease: "bounce.out"
    //             }, ">")
    //             .to(mobileBoxLid, {
    //                 y: -5,
    //                 duration: 0.2
    //             })
    //             .to(mobileBoxLid, {
    //                 y: 0,
    //                 duration: 0.1
    //             });

    //         mobileTimeline
    //             .to([mobileBottomBox, mobileBoxLid], {
    //                 opacity: 0,
    //                 duration: 0.3
    //             })
    //             .to(mobileFinalPackage, {
    //                 opacity: 1,
    //                 duration: 0.3
    //             }, "<");

    //         mobileTexts.forEach((element, index) => {
    //             mobileTimeline.to(element, {
    //                 clipPath: "inset(0 0 0% 0)",
    //                 duration: 0.4,
    //                 ease: "power1.inOut"
    //             }, ">-0.2");
    //         });

    //         return mobileTimeline;
    //     };

    //     const desktopTimeline = setupDesktopAnimation();
    //     const mobileTimeline = setupMobileAnimation();

    //     return () => {
    //         if (desktopTimeline) desktopTimeline.kill();
    //         if (mobileTimeline) mobileTimeline.kill();
    //     };
    // }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Desktop Animation Setup
            const setupDesktopAnimation = () => {
                const container = containerRef.current;
                const textElements = textRefs.current;
                const fallingItems = fallingItemsRef.current;
                const boxLid = boxLidRef.current;
                const finalPackage = finalPackageRef.current;
                const bottomBox = bottomBoxRef.current;

                if (!container) return;

                // Set initial states
                gsap.set(textElements, { 
                    clipPath: "inset(0 0 100% 0)",
                    opacity: 1
                });

                fallingItems.forEach((item, index) => {
                    const xOffset = [-30, 20, -15, 25][index];
                    gsap.set(item, {
                        y: -200,
                        x: xOffset,
                        opacity: 0,
                        scale: 0.8
                    });
                });

                gsap.set(boxLid, {
                    y: -200,
                    rotation: 0,
                    transformOrigin: "50% 100%",
                    opacity: 0
                });

                gsap.set(finalPackage, {
                    opacity: 0
                });

                const mainTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top top",
                        end: "+=400%",
                        pin: true,
                        scrub: 1,
                        markers: false
                    }
                });

                // Animate falling items
                fallingItems.forEach((item, index) => {
                    mainTimeline
                        .to(item, {
                            y: 0,
                            opacity: 1,
                            duration: 0.4,
                            ease: "power1.in"
                        })
                        .to(item, {
                            y: 50,
                            opacity: 0,
                            duration: 0.3,
                            ease: "none"
                        }, ">");
                });

                mainTimeline
                    .to(boxLid, {
                        y: 0,
                        opacity: 1,
                        rotation: 0,
                        duration: 0.5,
                        ease: "bounce.out"
                    }, ">")
                    .to(boxLid, {
                        y: -5,
                        duration: 0.2
                    })
                    .to(boxLid, {
                        y: 0,
                        duration: 0.1
                    });

                mainTimeline
                    .to([bottomBox, boxLid], {
                        opacity: 0,
                        duration: 0.3
                    })
                    .to(finalPackage, {
                        opacity: 1,
                        duration: 0.3
                    }, "<");

                textElements.forEach((element, index) => {
                    mainTimeline.to(element, {
                        clipPath: "inset(0 0 0% 0)",
                        duration: 0.4,
                        ease: "power1.inOut"
                    }, ">-0.2");
                });

                return mainTimeline;
            };

            // Mobile Animation Setup
            const setupMobileAnimation = () => {
                const container = containerRef2.current;
                const mobileTexts = mobileTextRefs.current;
                const mobileFallingItems = mobileFallingItemsRef.current;
                const mobileBoxLid = mobileBoxLidRef.current;
                const mobileBottomBox = mobileBottomBoxRef.current;
                const mobileFinalPackage = mobileFinalPackageRef.current;

                if (!container || !mobileTexts.length) return;

                // Set initial states for mobile
                gsap.set(mobileTexts, { 
                    clipPath: "inset(0 0 100% 0)",
                    opacity: 1
                });

                mobileFallingItems.forEach((item, index) => {
                    const xOffset = [-30, 20, -15, 25][index];
                    gsap.set(item, {
                        y: -200,
                        x: xOffset,
                        opacity: 0,
                        scale: 0.8
                    });
                });

                gsap.set(mobileBoxLid, {
                    y: -200,
                    rotation: 0,
                    transformOrigin: "50% 100%",
                    opacity: 0
                });

                gsap.set(mobileFinalPackage, {
                    opacity: 0
                });

                const mobileTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top center",
                        end: "+=300%",
                        pin: true,
                        scrub: 1,
                        markers: false
                    }
                });

                mobileFallingItems.forEach((item, index) => {
                    mobileTimeline
                        .to(item, {
                            y: 0,
                            opacity: 1,
                            duration: 0.4,
                            ease: "power1.in"
                        })
                        .to(item, {
                            y: 50,
                            opacity: 0,
                            duration: 0.3,
                            ease: "none"
                        }, ">");
                });

                mobileTimeline
                    .to(mobileBoxLid, {
                        y: 0,
                        opacity: 1,
                        rotation: 0,
                        duration: 0.5,
                        ease: "bounce.out"
                    }, ">")
                    .to(mobileBoxLid, {
                        y: -5,
                        duration: 0.2
                    })
                    .to(mobileBoxLid, {
                        y: 0,
                        duration: 0.1
                    });

                mobileTimeline
                    .to([mobileBottomBox, mobileBoxLid], {
                        opacity: 0,
                        duration: 0.3
                    })
                    .to(mobileFinalPackage, {
                        opacity: 1,
                        duration: 0.3
                    }, "<");

                mobileTexts.forEach((element, index) => {
                    mobileTimeline.to(element, {
                        clipPath: "inset(0 0 0% 0)",
                        duration: 0.4,
                        ease: "power1.inOut"
                    }, ">-0.2");
                });

                return mobileTimeline;
            };

            const desktopTimeline = setupDesktopAnimation();
            const mobileTimeline = setupMobileAnimation();

            return () => {
                if (desktopTimeline) desktopTimeline.kill();
                if (mobileTimeline) mobileTimeline.kill();
            };
        });

        return () => ctx.revert();
    }, []);

    // Fix mobile text refs indexing
    const getMobileTextRef = (contentIndex, isDescription) => {
        const baseIndex = contentIndex * 2;
        return el => {
            if (el && !mobileTextRefs.current.includes(el)) {
                mobileTextRefs.current[baseIndex + (isDescription ? 1 : 0)] = el;
            }
        };
    };

    return (
        <div className='relative'>
            <div ref={containerRef} className='h-screen hidden md:block md:p-[2vw] lg:p-[4vw] px-4 py-4'>
                <div className='flex w-full items-center   md:h-full'>
                    <div className={`${Clash.className} hidden  md:flex justify-between text-[#02123b] `}>
                        {/* Left Column */}
                        <div className='flex flex-col gap-[10vw]  w-[30%]'>
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
                        <div className='flex flex-col gap-[10vw]  w-[30%]'>
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

                    {/* Bottom box and animations container */}
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                        {/* Base box */}
                        <img 
                            ref={bottomBoxRef}
                            src="/images/pharma/bottom.png" 
                            className='md:w-[24vw] w-[74vw]  top-[1.8vw] relative z-[22] '
                            alt="" 
                        />
                        
                        {/* Falling items */}
                        <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
                            <img 
                                ref={el => fallingItemsRef.current[0] = el} 
                                src="/images/pharma/bag.png" 
                                className='absolute w-16 top-0 left-1/2'
                                alt="" 
                            />
                            <img 
                                ref={el => fallingItemsRef.current[1] = el} 
                                src="/images/pharma/dropper.png" 
                                className='absolute w-16 top-0 left-1/2'
                                alt="" 
                            />
                            <img 
                                ref={el => fallingItemsRef.current[2] = el} 
                                src="/images/pharma/pills.png" 
                                className='absolute w-16 top-0 left-1/2'
                                alt="" 
                            />
                            <img 
                                ref={el => fallingItemsRef.current[3] = el} 
                                src="/images/pharma/syringe.png" 
                                className='absolute w-16 top-0 left-1/2'
                                alt="" 
                            />
                        </div>

                        {/* Box lid */}
                        <img 
                            ref={boxLidRef}
                            src="/images/pharma/top.png" 
                            className='absolute -top-5 md:w-[28vw] w-[78vw] left-0 '
                            alt="" 
                        />
                    </div>

                    {/* Final package image */}
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                        <img 
                            ref={finalPackageRef}
                            src="/images/pharma/package2.png" 
                            className='md:w-[25vw] w-[75vw]'
                            alt="" 
                        />
                    </div>
                </div>
            </div>
            <div>
                <div ref={containerRef2} className='md:hidden h-full'>
                    <div className='relative flex justify-center pt-[120vw]'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                        {/* Base box */}
                        <img 
                           ref={mobileBottomBoxRef}
                            src="/images/pharma/bottom.png" 
                            className='md:w-[24vw] w-[74vw]  top-[1.8vw] relative z-[22] '
                            alt="" 
                        />
                        
                        {/* Falling items */}
                        <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
                            <img 
                                ref={el => mobileFallingItemsRef.current[0] = el} 
                                
                                src="/images/pharma/bag.png" 
                                className='absolute w-16 top-0 left-1/2'
                                alt="" 
                            />
                            <img 
                                ref={el => mobileFallingItemsRef.current[1] = el} 
                                
                                src="/images/pharma/dropper.png" 
                                className='absolute w-16 top-0 left-1/2'
                                alt="" 
                            />
                            <img 
                                ref={el => mobileFallingItemsRef.current[2] = el} 

                                src="/images/pharma/pills.png" 
                                className='absolute w-16 top-0 left-1/2'
                                alt="" 
                            />
                            <img 
                                ref={el => mobileFallingItemsRef.current[3] = el} 

                                src="/images/pharma/syringe.png" 
                                className='absolute w-16 top-0 left-1/2'
                                alt="" 
                            />
                        </div>

                        {/* Box lid */}
                        <img 
                           ref={mobileBoxLidRef}
                            src="/images/pharma/top.png" 
                            className='absolute -top-5 md:w-[28vw] w-[78vw] left-0 '
                            alt="" 
                        />
                    </div>

                    {/* Final package image */}
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                        <img 
                            ref={mobileFinalPackageRef}
                            src="/images/pharma/package2.png" 
                            className='md:w-[25vw] w-[75vw]'
                            alt="" 
                        />
                    </div>
                    </div>
              

            <div className={`${Clash.className} md:p-[2vw] pt-[0vw] lg:p-[4vw] px-4 py-4 flex flex-col gap-[10vw] justify-between text-[#02123b] `}>
                        {/* Left Column */}
                        <div className='flex flex-col gap-[10vw] h-full w-[100%]'>
                            {leftContent.map((content, index) => (
                                <div key={`left-${index}`}>
                                    <div 
                                        ref={el => mobileTextRefs.current[index * 2] = el} 
                                        className='md:text-[2vw] text-[5vw] text-left'
                                    >
                                        {content.title}
                                    </div>
                                    <div 
                                        ref={el => mobileTextRefs.current[index * 2] = el} 
                                        className='text-[4vw] md:text-[1.3vw] text-left'
                                    >
                                        {content.description}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className='flex flex-col gap-[10vw] h-full   w-[100%]'>
                            {rightContent.map((content, index) => (
                                <div key={`right-${index}`}>
                                    <div 
                                    ref={el => mobileTextRefs.current[index * 2] = el} 
                                        className='md:text-[2vw] text-[5vw] text-left'
                                    >
                                        {content.title}
                                    </div>
                                    <div 
                                    ref={el => mobileTextRefs.current[index * 2] = el} 
                                        className='text-[4vw] md:text-[1.3vw] text-left'
                                    >
                                        {content.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default AnimatedPharma;
// "use client"
// import React, { useEffect, useRef } from 'react'
// import { Clash } from '../../../public/fonts/fonts';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedPharma = () => {
//     const desktopContainerRef = useRef(null);
//     const mobileContainerRef = useRef(null);
//     const textRefs = useRef([]);
//     const desktopFallingItemsRef = useRef([]);
//     const mobileFallingItemsRef = useRef([]);
//     const desktopBoxLidRef = useRef(null);
//     const mobileBoxLidRef = useRef(null);
//     const desktopFinalPackageRef = useRef(null);
//     const mobileFinalPackageRef = useRef(null);
//     const desktopBottomBoxRef = useRef(null);
//     const mobileBottomBoxRef = useRef(null);

//     const leftContent = [
//         {
//           title: "Strict Temperature Control",
//           description: "Advanced cold chain solutions to maintain product integrity from pickup to delivery."
//         },
//         {
//           title: "Secure Packaging & Handling",
//           description: "Tamper-proof packaging and expert handling to ensure your shipments arrive in perfect condition."
//         }
//     ];
      
//     const rightContent = [
//         {
//           title: "Regulatory Compliance",
//           description: "Adhering to international pharmaceutical shipping guidelines for safe and legal transportation."
//         },
//         {
//           title: "Real-Time Tracking",
//           description: "24/7 shipment visibility to provide complete transparency and peace of mind."
//         }
//     ];

//     const setupAnimation = (container, fallingItems, boxLid, finalPackage, bottomBox, textElements, isMobile) => {
//         // Set initial states
//         if (!isMobile) {
//             gsap.set(textElements, { 
//                 clipPath: "inset(0 0 100% 0)",
//                 opacity: 1
//             });
//         }

//         fallingItems.forEach((item, index) => {
//             const xOffset = [-30, 20, -15, 25][index];
//             gsap.set(item, {
//                 y: -200,
//                 x: xOffset,
//                 opacity: 0,
//                 scale: 0.8
//             });
//         });

//         gsap.set(boxLid, {
//             y: -200,
//             rotation: 0,
//             transformOrigin: "50% 100%",
//             opacity: 0
//         });

//         gsap.set(finalPackage, {
//             opacity: 0
//         });

//         const mainTimeline = gsap.timeline({
//             scrollTrigger: {
//                 trigger: container,
//                 start: "top top",
//                 end: "+=400%",
//                 pin: true,
//                 scrub: 1,
//                 markers: false
//             }
//         });

//         // Animate falling items one by one
//         fallingItems.forEach((item, index) => {
//             mainTimeline
//                 .to(item, {
//                     y: 0,
//                     opacity: 1,
//                     duration: 0.4,
//                     ease: "power1.in"
//                 })
//                 .to(item, {
//                     y: 50,
//                     opacity: 0,
//                     duration: 0.3,
//                     ease: "none"
//                 }, ">");
//         });

//         // Animate lid falling and staying
//         mainTimeline
//             .to(boxLid, {
//                 y: 0,
//                 opacity: 1,
//                 rotation: 0,
//                 duration: 0.5,
//                 ease: "bounce.out"
//             }, ">")
//             .to(boxLid, {
//                 y: -5,
//                 duration: 0.2
//             })
//             .to(boxLid, {
//                 y: 0,
//                 duration: 0.1
//             });

//         // Fade to final package
//         mainTimeline
//             .to([bottomBox, boxLid], {
//                 opacity: 0,
//                 duration: 0.3
//             })
//             .to(finalPackage, {
//                 opacity: 1,
//                 duration: 0.3
//             }, "<");

//         // Text reveal animation at the end (desktop only)
//         if (!isMobile && textElements.length > 0) {
//             textElements.forEach((element, index) => {
//                 mainTimeline.to(element, {
//                     clipPath: "inset(0 0 0% 0)",
//                     duration: 0.4,
//                     ease: "power1.inOut"
//                 }, ">-0.2");
//             });
//         }

//         return mainTimeline;
//     };

//     useEffect(() => {
//         let desktopTimeline;
//         let mobileTimeline;

//         // Clear any existing ScrollTriggers
//         ScrollTrigger.getAll().forEach(st => st.kill());

//         // Desktop animation
//         if (window.innerWidth >= 768) {
//             desktopTimeline = setupAnimation(
//                 desktopContainerRef.current,
//                 desktopFallingItemsRef.current,
//                 desktopBoxLidRef.current,
//                 desktopFinalPackageRef.current,
//                 desktopBottomBoxRef.current,
//                 textRefs.current,
//                 false
//             );
//         } else {
//             // Mobile animation
//             mobileTimeline = setupAnimation(
//                 mobileContainerRef.current,
//                 mobileFallingItemsRef.current,
//                 mobileBoxLidRef.current,
//                 mobileFinalPackageRef.current,
//                 mobileBottomBoxRef.current,
//                 [],
//                 true
//             );
//         }

//         return () => {
//             if (desktopTimeline) desktopTimeline.kill();
//             if (mobileTimeline) mobileTimeline.kill();
//             ScrollTrigger.getAll().forEach(st => st.kill());
//         };
//     }, []);

//     return (
//         <div className='relative'>
//             {/* Desktop View */}
//             <div ref={desktopContainerRef} className='h-screen hidden md:block md:p-[2vw] lg:p-[4vw] px-4 py-4'>
//                 <div className='flex w-full items-center md:h-full'>
//                     <div className={`${Clash.className} hidden md:flex justify-between text-[#02123b]`}>
//                         {/* Left Column */}
//                         <div className='flex flex-col gap-[10vw] w-[30%]'>
//                             {leftContent.map((content, index) => (
//                                 <div key={`left-${index}`}>
//                                     <div 
//                                         ref={el => textRefs.current[index * 2] = el} 
//                                         className='md:text-[2vw] text-[5vw] text-right'
//                                     >
//                                         {content.title}
//                                     </div>
//                                     <div 
//                                         ref={el => textRefs.current[index * 2 + 1] = el} 
//                                         className='text-[4vw] md:text-[1.3vw] text-right'
//                                     >
//                                         {content.description}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Right Column */}
//                         <div className='flex flex-col gap-[10vw] w-[30%]'>
//                             {rightContent.map((content, index) => (
//                                 <div key={`right-${index}`}>
//                                     <div 
//                                         ref={el => textRefs.current[(leftContent.length * 2) + (index * 2)] = el} 
//                                         className='md:text-[2vw] text-[5vw] text-left'
//                                     >
//                                         {content.title}
//                                     </div>
//                                     <div 
//                                         ref={el => textRefs.current[(leftContent.length * 2) + (index * 2 + 1)] = el} 
//                                         className='text-[4vw] md:text-[1.3vw] text-left'
//                                     >
//                                         {content.description}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Desktop animation container */}
//                     <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//                         <img 
//                             ref={desktopBottomBoxRef}
//                             src="/images/pharma/bottom.png" 
//                             className='md:w-[24vw] w-[74vw] top-[1.8vw] relative z-[22]'
//                             alt="" 
//                         />
                        
//                         <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
//                             <img 
//                                 ref={el => desktopFallingItemsRef.current[0] = el} 
//                                 src="/images/pharma/bag.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => desktopFallingItemsRef.current[1] = el} 
//                                 src="/images/pharma/dropper.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => desktopFallingItemsRef.current[2] = el} 
//                                 src="/images/pharma/pills.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => desktopFallingItemsRef.current[3] = el} 
//                                 src="/images/pharma/syringe.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                         </div>

//                         <img 
//                             ref={desktopBoxLidRef}
//                             src="/images/pharma/top.png" 
//                             className='absolute -top-5 md:w-[28vw] w-[78vw] left-0'
//                             alt="" 
//                         />
//                     </div>

//                     <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//                         <img 
//                             ref={desktopFinalPackageRef}
//                             src="/images/pharma/package2.png" 
//                             className='md:w-[25vw] w-[75vw]'
//                             alt="" 
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile View */}
//             <div className='md:hidden'>
//                 <div ref={mobileContainerRef} className='h-[50vh]'>
//                     <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//                         <img 
//                             ref={mobileBottomBoxRef}
//                             src="/images/pharma/bottom.png" 
//                             className='w-[74vw] top-[1.8vw] relative z-[22]'
//                             alt="" 
//                         />
                        
//                         <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
//                             <img 
//                                 ref={el => mobileFallingItemsRef.current[0] = el} 
//                                 src="/images/pharma/bag.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => mobileFallingItemsRef.current[1] = el} 
//                                 src="/images/pharma/dropper.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => mobileFallingItemsRef.current[2] = el} 
//                                 src="/images/pharma/pills.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => mobileFallingItemsRef.current[3] = el} 
//                                 src="/images/pharma/syringe.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                         </div>

//                         <img 
//                             ref={mobileBoxLidRef}
//                             src="/images/pharma/top.png" 
//                             className='absolute -top-5 w-[78vw] left-0'
//                             alt="" 
//                         />
//                     </div>

//                     <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//                         <img 
//                             ref={mobileFinalPackageRef}
//                             src="/images/pharma/package2.png" 
//                             className='w-[75vw]'
//                             alt="" 
//                         />
//                     </div>
//                     <div className={`${Clash.className} md:p-[2vw] pt-[50vh] lg:p-[4vw] px-4 py-4 flex flex-col gap-[10vw] justify-between text-[#02123b]`}>
//                     <div className='flex flex-col gap-[10vw] h-full w-[100%]'>
//                         {leftContent.map((content, index) => (
//                             <div key={`left-${index}`}>
//                                 <div className='md:text-[2vw] text-[5vw] text-left'>
//                                     {content.title}
//                                 </div>
//                                 <div className='text-[4vw] md:text-[1.3vw] text-left'>
//                                     {content.description}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     <div className='flex flex-col gap-[10vw] h-full w-[100%]'>
//                         {rightContent.map((content, index) => (
//                             <div key={`right-${index}`}>
//                                 <div className='md:text-[2vw] text-[5vw] text-left'>
//                                     {content.title}
//                                 </div>
//                                 <div className='text-[4vw] md:text-[1.3vw] text-left'>
//                                     {content.description}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 </div>

               
//             </div>
//         </div>
//     );
// };

// export default AnimatedPharma;
// "use client"
// import React, { useEffect, useRef } from 'react'
// import { Clash } from '../../../public/fonts/fonts';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedPharma = () => {
//     const desktopContainerRef = useRef(null);
//     const mobileContainerRef = useRef(null);
//     const mobileTextRef = useRef(null);
//     const textRefs = useRef([]);
//     const mobileTextRefs = useRef([]);
//     const desktopFallingItemsRef = useRef([]);
//     const mobileFallingItemsRef = useRef([]);
//     const desktopBoxLidRef = useRef(null);
//     const mobileBoxLidRef = useRef(null);
//     const desktopFinalPackageRef = useRef(null);
//     const mobileFinalPackageRef = useRef(null);
//     const desktopBottomBoxRef = useRef(null);
//     const mobileBottomBoxRef = useRef(null);

//     const leftContent = [
//         {
//           title: "Strict Temperature Control",
//           description: "Advanced cold chain solutions to maintain product integrity from pickup to delivery."
//         },
//         {
//           title: "Secure Packaging & Handling",
//           description: "Tamper-proof packaging and expert handling to ensure your shipments arrive in perfect condition."
//         }
//     ];
      
//     const rightContent = [
//         {
//           title: "Regulatory Compliance",
//           description: "Adhering to international pharmaceutical shipping guidelines for safe and legal transportation."
//         },
//         {
//           title: "Real-Time Tracking",
//           description: "24/7 shipment visibility to provide complete transparency and peace of mind."
//         }
//     ];

//     const setupAnimation = (container, fallingItems, boxLid, finalPackage, bottomBox, textElements, isMobile) => {
//         // Set initial states
//         gsap.set(textElements, { 
//             clipPath: "inset(0 0 100% 0)",
//             opacity: 1
//         });

//         fallingItems.forEach((item, index) => {
//             const xOffset = [-30, 20, -15, 25][index];
//             gsap.set(item, {
//                 y: -200,
//                 x: xOffset,
//                 opacity: 0,
//                 scale: 0.8
//             });
//         });

//         gsap.set(boxLid, {
//             y: -200,
//             rotation: 0,
//             transformOrigin: "50% 100%",
//             opacity: 0
//         });

//         gsap.set(finalPackage, {
//             opacity: 0
//         });

//         const mainTimeline = gsap.timeline({
//             scrollTrigger: {
//                 trigger: container,
//                 start: "top top",
//                 end: "+=400%",
//                 pin: true,

//                 scrub: 1,
//                 markers: true
//             }
//         });

//         // Animate falling items one by one
//         fallingItems.forEach((item, index) => {
//             mainTimeline
//                 .to(item, {
//                     y: 0,
//                     opacity: 1,
//                     duration: 0.4,
//                     ease: "power1.in"
//                 })
//                 .to(item, {
//                     y: 50,
//                     opacity: 0,
//                     duration: 0.3,
//                     ease: "none"
//                 }, ">");
//         });

//         // Animate lid falling and staying
//         mainTimeline
//             .to(boxLid, {
//                 y: 0,
//                 opacity: 1,
//                 rotation: 0,
//                 duration: 0.5,
//                 ease: "bounce.out"
//             }, ">")
//             .to(boxLid, {
//                 y: -5,
//                 duration: 0.2
//             })
//             .to(boxLid, {
//                 y: 0,
//                 duration: 0.1
//             });

//         // Fade to final package
//         mainTimeline
//             .to([bottomBox, boxLid], {
//                 opacity: 0,
//                 duration: 0.3
//             })
//             .to(finalPackage, {
//                 opacity: 1,
//                 duration: 0.3
//             }, "<");

//         // Text reveal animation for both mobile and desktop
//         textElements.forEach((element, index) => {
//             mainTimeline.to(element, {
//                 clipPath: "inset(0 0 0% 0)",
//                 duration: 0.4,
//                 ease: "power1.inOut"
//             }, ">-0.2");
//         });

//         return mainTimeline;
//     };

//     useEffect(() => {
//         let desktopTimeline;
//         let mobileTimeline;

//         // Clear any existing ScrollTriggers
//         ScrollTrigger.getAll().forEach(st => st.kill());

//         // Desktop animation
//         if (window.innerWidth >= 768) {
//             desktopTimeline = setupAnimation(
//                 desktopContainerRef.current,
//                 desktopFallingItemsRef.current,
//                 desktopBoxLidRef.current,
//                 desktopFinalPackageRef.current,
//                 desktopBottomBoxRef.current,
//                 textRefs.current,
//                 false
//             );
//         } else {
//             // Mobile animation
//             mobileTimeline = setupAnimation(
//                 mobileContainerRef.current,
//                 mobileFallingItemsRef.current,
//                 mobileBoxLidRef.current,
//                 mobileFinalPackageRef.current,
//                 mobileBottomBoxRef.current,
//                 mobileTextRefs.current,
//                 true
//             );
//         }

//         return () => {
//             if (desktopTimeline) desktopTimeline.kill();
//             if (mobileTimeline) mobileTimeline.kill();
//             ScrollTrigger.getAll().forEach(st => st.kill());
//         };
//     }, []);

//     return (
//         <div className='relative'>
//             {/* Desktop View */}
//             <div ref={desktopContainerRef} className='h-screen hidden md:block md:p-[2vw] lg:p-[4vw] px-4 py-4'>
//                 <div className='flex w-full items-center   md:h-full'>
//                     <div className={`${Clash.className} hidden  md:flex justify-between text-[#02123b] `}>
//                         {/* Left Column */}
//                         <div className='flex flex-col gap-[10vw]  w-[30%]'>
//                             {leftContent.map((content, index) => (
//                                 <div key={`left-${index}`}>
//                                     <div 
//                                         ref={el => textRefs.current[index * 2] = el} 
//                                         className='md:text-[2vw] text-[5vw] text-right'
//                                     >
//                                         {content.title}
//                                     </div>
//                                     <div 
//                                         ref={el => textRefs.current[index * 2 + 1] = el} 
//                                         className='text-[4vw] md:text-[1.3vw] text-right'
//                                     >
//                                         {content.description}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Right Column */}
//                         <div className='flex flex-col gap-[10vw]  w-[30%]'>
//                             {rightContent.map((content, index) => (
//                                 <div key={`right-${index}`}>
//                                     <div 
//                                         ref={el => textRefs.current[(leftContent.length * 2) + (index * 2)] = el} 
//                                         className='md:text-[2vw] text-[5vw] text-left'
//                                     >
//                                         {content.title}
//                                     </div>
//                                     <div 
//                                         ref={el => textRefs.current[(leftContent.length * 2) + (index * 2 + 1)] = el} 
//                                         className='text-[4vw] md:text-[1.3vw] text-left'
//                                     >
//                                         {content.description}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Animation container */}
//                     <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
//                         <img 
//                             ref={desktopBottomBoxRef}
//                             src="/images/pharma/bottom.png" 
//                             className='md:w-[24vw] w-[74vw]  top-[1.8vw] relative z-[22] '
//                             alt="" 
//                         />
                        
//                         <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
//                             <img 
//                                 ref={el => desktopFallingItemsRef.current[0] = el} 
//                                 src="/images/pharma/bag.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => desktopFallingItemsRef.current[1] = el} 
//                                 src="/images/pharma/dropper.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => desktopFallingItemsRef.current[2] = el} 
//                                 src="/images/pharma/pills.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => desktopFallingItemsRef.current[3] = el} 
//                                 src="/images/pharma/syringe.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                         </div>

//                         <img 
//                             ref={desktopBoxLidRef}
//                             src="/images/pharma/top.png" 
//                             className='absolute -top-5 md:w-[28vw] w-[78vw] left-0 '
//                             alt="" 
//                         />
//                     </div>

//                     <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
//                         <img 
//                             ref={desktopFinalPackageRef}
//                             src="/images/pharma/package2.png" 
//                             className='md:w-[25vw] w-[75vw]'
//                             alt="" 
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile View */}
//             <div className='md:hidden'>
//                 <div ref={mobileContainerRef} className='h-full'>
//                     <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//                         <img 
//                             ref={mobileBottomBoxRef}
//                             src="/images/pharma/bottom.png" 
//                             className='w-[74vw] top-[1.8vw] relative z-[22]'
//                             alt="" 
//                         />
                        
//                         <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
//                             <img 
//                                 ref={el => mobileFallingItemsRef.current[0] = el} 
//                                 src="/images/pharma/bag.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => mobileFallingItemsRef.current[1] = el} 
//                                 src="/images/pharma/dropper.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => mobileFallingItemsRef.current[2] = el} 
//                                 src="/images/pharma/pills.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                             <img 
//                                 ref={el => mobileFallingItemsRef.current[3] = el} 
//                                 src="/images/pharma/syringe.png" 
//                                 className='absolute w-16 top-0 left-1/2'
//                                 alt="" 
//                             />
//                         </div>

//                         <img 
//                             ref={mobileBoxLidRef}
//                             src="/images/pharma/top.png" 
//                             className='absolute -top-5 w-[78vw] left-0'
//                             alt="" 
//                         />
//                     </div>

//                     <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
//                         <img 
//                             ref={mobileFinalPackageRef}
//                             src="/images/pharma/package2.png" 
//                             className='w-[75vw]'
//                             alt="" 
//                         />
//                     </div>
                    
//                     <div ref={mobileTextRef} className={`${Clash.className} md:p-[2vw] mt-[50vh] lg:p-[4vw] px-4 py-4 flex flex-col gap-[10vw] justify-between text-[#02123b]`}>
//                         <div className='flex flex-col gap-[10vw] h-full w-[100%]'>
//                             {leftContent.map((content, index) => (
//                                 <div key={`left-${index}`}>
//                                     <div 
//                                         ref={el => mobileTextRefs.current[index * 2] = el}
//                                         className='md:text-[2vw] text-[5vw] text-left'
//                                     >
//                                         {content.title}
//                                     </div>
//                                     <div 
//                                         ref={el => mobileTextRefs.current[index * 2 + 1] = el}
//                                         className='text-[4vw] md:text-[1.3vw] text-left'
//                                     >
//                                         {content.description}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className='flex flex-col gap-[10vw] h-full w-[100%]'>
//                             {rightContent.map((content, index) => (
//                                 <div key={`right-${index}`}>
//                                     <div 
//                                         ref={el => mobileTextRefs.current[(leftContent.length * 2) + (index * 2)] = el}
//                                         className='md:text-[2vw] text-[5vw] text-left'
//                                     >
//                                         {content.title}
//                                     </div>
//                                     <div 
//                                         ref={el => mobileTextRefs.current[(leftContent.length * 2) + (index * 2 + 1)] = el}
//                                         className='text-[4vw] md:text-[1.3vw] text-left'
//                                     >
//                                         {content.description}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AnimatedPharma;
