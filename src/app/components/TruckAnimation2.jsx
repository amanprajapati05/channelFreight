
// // // // // // "use client"
// // // // // // import React, { useLayoutEffect, useRef } from 'react'
// // // // // // import { useGSAP } from '@gsap/react'
// // // // // // import gsap from 'gsap'
// // // // // // import ScrollTrigger from 'gsap/ScrollTrigger'
// // // // // // import { Clash } from '../../../public/fonts/fonts'

// // // // // // // Register ScrollTrigger plugin
// // // // // // gsap.registerPlugin(ScrollTrigger)

// // // // // // const TruckAnimation2 = () => {
// // // // // //     const containerRef = useRef(null)
// // // // // //     const textRef = useRef(null)
// // // // // //     const sectionRef = useRef(null)

// // // // // //     useGSAP(() => {
// // // // // //         // Initial position setup - move elements above viewport
// // // // // //         gsap.set(containerRef.current, {
// // // // // //             y: '-100vh',
// // // // // //         })
        
// // // // // //         gsap.set(textRef.current, {
// // // // // //             y: '-100vh',
// // // // // //         })

// // // // // //         // Create the dropping animation
// // // // // //         const tl = gsap.timeline({
// // // // // //             scrollTrigger: {
// // // // // //                 trigger: sectionRef.current,
// // // // // //                 pin: true,
// // // // // //                 markers: true,
// // // // // //                 start: "top top",
// // // // // //                 end: "bottom center",
// // // // // //                 toggleActions: "play none none reverse",
// // // // // //             }
// // // // // //         })

// // // // // //         tl.to(textRef.current, {
// // // // // //             y: 0,
// // // // // //             duration: 1,
// // // // // //             ease: "power2.out"
// // // // // //         })
// // // // // //         .to(containerRef.current, {
// // // // // //             y: 0,
// // // // // //             duration: 1.2,
// // // // // //             ease: "power2.out"
// // // // // //         }, "-=0.5")  // Start slightly before the text animation ends

// // // // // //     }, [])

// // // // // //     return (
// // // // // //         <div ref={sectionRef} className='w-full h-screen  overflow-hidden'>
// // // // // //             <div 
// // // // // //                 ref={textRef}
// // // // // //                 className={`absolute top-2 text-[8vw] ${Clash.className}`}
// // // // // //             >
// // // // // //                 PACKAGING
// // // // // //             </div>
// // // // // //             <div 
// // // // // //                 ref={containerRef}
// // // // // //                 className='absolute top-1/2 transform -translate-y-1/2'
// // // // // //             >
// // // // // //                 <img 
// // // // // //                     src="/images/packaging/container.png" 
// // // // // //                     className='w-[40vw] h-full' 
// // // // // //                     alt="Container" 
// // // // // //                 />
// // // // // //             </div>
// // // // // //             <img src="/images/packaging/top.png" className='' alt="" />
// // // // // //         </div>
// // // // // //     )
// // // // // // }

// // // // // // export default TruckAnimation2
// // // // // "use client"
// // // // // import React, { useLayoutEffect, useRef } from 'react'
// // // // // import { useGSAP } from '@gsap/react'
// // // // // import gsap from 'gsap'
// // // // // import ScrollTrigger from 'gsap/ScrollTrigger'
// // // // // import { Clash } from '../../../public/fonts/fonts'

// // // // // gsap.registerPlugin(ScrollTrigger)

// // // // // const TruckAnimation2 = () => {
// // // // //     const containerRef = useRef(null)
// // // // //     const textRef = useRef(null)
// // // // //     const sectionRef = useRef(null)
// // // // //     const topImageRef = useRef(null)

// // // // //     useGSAP(() => {
// // // // //         // Initial position setup
// // // // //         gsap.set(containerRef.current, {
// // // // //             y: '-100vh',
// // // // //         })
        
// // // // //         gsap.set(textRef.current, {
// // // // //             y: '-100vh',
// // // // //         })

// // // // //         gsap.set(topImageRef.current, {
// // // // //             y: '100vh', // Start below viewport
// // // // //             opacity: 0
// // // // //         })

// // // // //         // Create the main timeline
// // // // //         const tl = gsap.timeline({
// // // // //             scrollTrigger: {
// // // // //                 trigger: sectionRef.current,
// // // // //                 pin: true,
// // // // //                 markers: true,
// // // // //                 start: "top top",
// // // // //                 end: "+=300%", // Extend scroll length
// // // // //                 scrub: 1, // Smooth scrubbing effect
// // // // //             }
// // // // //         })

// // // // //         tl
// // // // //             // Initial drop animations
// // // // //             .to(textRef.current, {
// // // // //                 y: 0,
// // // // //                 duration: 1,
// // // // //                 ease: "power2.out"
// // // // //             })
// // // // //             .to(containerRef.current, {
// // // // //                 y: 0,
// // // // //                 duration: 1,
// // // // //                 ease: "power2.out"
// // // // //             }, "-=0.8")

// // // // //             // Move text into container and fade out
// // // // //             .to(textRef.current, {
// // // // //                 y: '50vh',
// // // // //                 scale: 0.5,
// // // // //                 opacity: 0,
// // // // //                 duration: 1.5,
// // // // //                 ease: "power2.inOut"
// // // // //             })

// // // // //             // Bring in top image
// // // // //             .to(topImageRef.current, {
// // // // //                 y: 0,
// // // // //                 opacity: 1,
// // // // //                 duration: 1,
// // // // //                 ease: "power2.inOut"
// // // // //             })

// // // // //     }, [])

// // // // //     return (
// // // // //         <div ref={sectionRef} className='w-full h-screen relative overflow-hidden bg-white'>
// // // // //             <div 
// // // // //                 ref={textRef}
// // // // //                 className={`absolute top-2 left-1/2 transform -translate-x-1/2 text-[8vw] ${Clash.className}`}
// // // // //             >
// // // // //                 PACKAGING
// // // // //             </div>
// // // // //             <div 
// // // // //                 ref={containerRef}
// // // // //                 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
// // // // //             >
// // // // //                 <img 
// // // // //                     src="/images/packaging/container.png" 
// // // // //                     className='w-[40vw] h-full object-contain' 
// // // // //                     alt="Container" 
// // // // //                 />
// // // // //             </div>
// // // // //             <img 
// // // // //                 ref={topImageRef}
// // // // //                 src="/images/packaging/top.png" 
// // // // //                 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] object-contain' 
// // // // //                 alt="Container Top" 
// // // // //             />
// // // // //         </div>
// // // // //     )
// // // // // }

// // // // // export default TruckAnimation2
// // // // "use client"
// // // // import React, { useLayoutEffect, useRef } from 'react'
// // // // import { useGSAP } from '@gsap/react'
// // // // import gsap from 'gsap'
// // // // import ScrollTrigger from 'gsap/ScrollTrigger'
// // // // import { Clash } from '../../../public/fonts/fonts'

// // // // gsap.registerPlugin(ScrollTrigger)

// // // // const TruckAnimation2 = () => {
// // // //     const containerRef = useRef(null)
// // // //     const textRef = useRef(null)
// // // //     const sectionRef = useRef(null)
// // // //     const topImageRef = useRef(null)

// // // //     useGSAP(() => {
// // // //         // Initial position setup
// // // //         gsap.set(containerRef.current, {
// // // //             y: '-100vh',
// // // //         })
        
// // // //         gsap.set(textRef.current, {
// // // //             y: '-100vh',
// // // //         })

// // // //         gsap.set(topImageRef.current, {
// // // //             y: '-100vh', // Start above viewport
// // // //             opacity: 0
// // // //         })

// // // //         // Create the main timeline
// // // //         const tl = gsap.timeline({
// // // //             scrollTrigger: {
// // // //                 trigger: sectionRef.current,
// // // //                 pin: true,
// // // //                 markers: true,
// // // //                 start: "top top",
// // // //                 end: "+=300%", // Extend scroll length
// // // //                 scrub: 1, // Smooth scrubbing effect
// // // //             }
// // // //         })

// // // //         tl
// // // //             // Initial drop animations
// // // //             .to(textRef.current, {
// // // //                 y: 0,
// // // //                 duration: 1,
// // // //                 ease: "power2.out"
// // // //             })
// // // //             .to(containerRef.current, {
// // // //                 y: 0,
// // // //                 duration: 1,
// // // //                 ease: "power2.out"
// // // //             }, "-=0.8")

// // // //             // Move text into container and fade out
// // // //             .to(textRef.current, {
// // // //                 y: '50vh',
// // // //                 scale: 0.5,
// // // //                 opacity: 0,
// // // //                 duration: 1.5,
// // // //                 ease: "power2.inOut"
// // // //             })

// // // //             // Drop top image from above
// // // //             .to(topImageRef.current, {
// // // //                 y: -60,
// // // //                 opacity: 1,
// // // //                 duration: 1,
// // // //                 ease: "power2.out" // Added bounce effect for more natural dropping motion
// // // //             })

// // // //     }, [])

// // // //     return (
// // // //         <div ref={sectionRef} className='w-full h-screen relative overflow-hidden bg-white'>
// // // //             <div 
// // // //                 ref={textRef}
// // // //                 className={`absolute top-2 left-1/2 transform -translate-x-1/2 text-[8vw] ${Clash.className}`}
// // // //             >
// // // //                 PACKAGING
// // // //             </div>
// // // //             <div 
// // // //                 ref={containerRef}
// // // //                 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
// // // //             >
// // // //                 <img 
// // // //                     src="/images/packaging/container.png" 
// // // //                     className='w-[40vw] h-full object-contain' 
// // // //                     alt="Container" 
// // // //                 />
// // // //             </div>
// // // //             <img 
// // // //                 ref={topImageRef}
// // // //                 src="/images/packaging/top.png" 
// // // //                 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] object-contain' 
// // // //                 alt="Container Top" 
// // // //             />

// // // //             <img src="/images/packaging/truck2.png" alt="" />
// // // //         </div>
// // // //     )
// // // // }

// // // // export default TruckAnimation2
// // // "use client"
// // // import React, { useLayoutEffect, useRef } from 'react'
// // // import { useGSAP } from '@gsap/react'
// // // import gsap from 'gsap'
// // // import ScrollTrigger from 'gsap/ScrollTrigger'
// // // import { Clash } from '../../../public/fonts/fonts'

// // // gsap.registerPlugin(ScrollTrigger)

// // // const TruckAnimation2 = () => {
// // //     const containerRef = useRef(null)
// // //     const textRef = useRef(null)
// // //     const sectionRef = useRef(null)
// // //     const topImageRef = useRef(null)
// // //     const truckRef = useRef(null)
// // //     const containerGroupRef = useRef(null)

// // //     useGSAP(() => {
// // //         // Initial position setup
// // //         gsap.set(containerRef.current, {
// // //             y: '-100vh',
// // //         })
        
// // //         gsap.set(textRef.current, {
// // //             y: '-100vh',
// // //         })

// // //         gsap.set(topImageRef.current, {
// // //             y: '-100vh',
// // //             opacity: 0
// // //         })

// // //         gsap.set(truckRef.current, {
// // //             opacity: 0,
// // //         })

// // //         // Create the main timeline
// // //         const tl = gsap.timeline({
// // //             scrollTrigger: {
// // //                 trigger: sectionRef.current,
// // //                 pin: true,
// // //                 markers: true,
// // //                 start: "top top",
// // //                 end: "+=400%", // Extended for new animation
// // //                 scrub: 1,
// // //             }
// // //         })

// // //         tl
// // //             // Initial drop animations
// // //             .to(textRef.current, {
// // //                 y: 0,
// // //                 duration: 1,
// // //                 ease: "power2.out"
// // //             })
// // //             .to(containerRef.current, {
// // //                 y: 0,
// // //                 duration: 1,
// // //                 ease: "power2.out"
// // //             }, "-=0.8")

// // //             // Move text into container and fade out
// // //             .to(textRef.current, {
// // //                 y: '50vh',
// // //                 scale: 0.5,
// // //                 opacity: 0,
// // //                 duration: 1.5,
// // //                 ease: "power2.inOut"
// // //             })

// // //             // Drop top image from above
// // //             .to(topImageRef.current, {
// // //                 y: -60,
// // //                 opacity: 1,
// // //                 duration: 1,
// // //                 ease: "power2.out"
// // //             })

// // //             // Fade out container assembly and fade in truck
// // //             .to([containerGroupRef.current], {
// // //                 opacity: 0,
// // //                 duration: 1,
// // //                 ease: "power2.inOut"
// // //             })
// // //             .to(truckRef.current, {
// // //                 opacity: 1,
// // //                 duration: 1,
// // //                 ease: "power2.inOut"
// // //             }, "-=1") // Start fading in while the container fades out

// // //     }, [])

// // //     return (
// // //         <div ref={sectionRef} className='w-full h-screen relative overflow-hidden bg-white'>
// // //             {/* Group container elements for fade out */}
// // //             <div ref={containerGroupRef}>
// // //                 <div 
// // //                     ref={textRef}
// // //                     className={`absolute top-2 left-1/2 transform -translate-x-1/2 text-[8vw] ${Clash.className}`}
// // //                 >
// // //                     PACKAGING
// // //                 </div>
// // //                 <div 
// // //                     ref={containerRef}
// // //                     className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
// // //                 >
// // //                     <img 
// // //                         src="/images/packaging/container.png" 
// // //                         className='w-[40vw] h-full object-contain' 
// // //                         alt="Container" 
// // //                     />
// // //                 </div>
// // //                 <img 
// // //                     ref={topImageRef}
// // //                     src="/images/packaging/top.png" 
// // //                     className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] object-contain' 
// // //                     alt="Container Top" 
// // //                 />
// // //             </div>

// // //             {/* Truck image that fades in */}
// // //             <img 
// // //                 ref={truckRef}
// // //                 src="/images/packaging/truck2.png" 
// // //                 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] object-contain'
// // //                 alt="Truck" 
// // //             />
// // //         </div>
// // //     )
// // // }

// // // export default TruckAnimation2
// // "use client"
// // import React, { useLayoutEffect, useRef } from 'react'
// // import { useGSAP } from '@gsap/react'
// // import gsap from 'gsap'
// // import ScrollTrigger from 'gsap/ScrollTrigger'
// // import { Clash } from '../../../public/fonts/fonts'

// // gsap.registerPlugin(ScrollTrigger)

// // const TruckAnimation2 = () => {
// //     const containerRef = useRef(null)
// //     const textRef = useRef(null)
// //     const sectionRef = useRef(null)
// //     const topImageRef = useRef(null)
// //     const truckRef = useRef(null)
// //     const shippingTextRef = useRef(null)

// //     useGSAP(() => {
// //         // Initial position setup
// //         gsap.set(containerRef.current, {
// //             y: '-100vh',
// //         })
        
// //         gsap.set(textRef.current, {
// //             y: '-100vh',
// //         })

// //         gsap.set(topImageRef.current, {
// //             y: '-100vh',
// //             opacity: 0
// //         })

// //         gsap.set(truckRef.current, {
// //             opacity: 0,
// //         })

// //         gsap.set(shippingTextRef.current, {
// //             opacity: 0,
// //         })

// //         // Create the main timeline
// //         const tl = gsap.timeline({
// //             scrollTrigger: {
// //                 trigger: sectionRef.current,
// //                 pin: true,
// //                 markers: true,
// //                 start: "top top",
// //                 end: "+=400%",
// //                 scrub: 1,
// //             }
// //         })

// //         tl
// //             // Initial drop animations
// //             .to(textRef.current, {
// //                 y: 0,
// //                 duration: 1,
// //                 ease: "power2.out"
// //             })
// //             .to(containerRef.current, {
// //                 y: 0,
// //                 duration: 1,
// //                 ease: "power2.out"
// //             }, "-=0.8")

// //             // Move text into container and fade out
// //             .to(textRef.current, {
// //                 y: '50vh',
// //                 scale: 0.5,
// //                 opacity: 0,
// //                 duration: 1.5,
// //                 ease: "power2.inOut"
// //             })

// //             // Drop top image from above
// //             .to(topImageRef.current, {
// //                 y: -60,
// //                 opacity: 1,
// //                 duration: 1,
// //                 ease: "power2.out"
// //             })

// //             // Transform container into truck container
// //             .to([containerRef.current, topImageRef.current], {
// //                 // x: '15%', // Move slightly right to align with truck
// //                 duration: 1,
// //                 ease: "power2.inOut"
// //             })
// //             .to(truckRef.current, {
// //                 opacity: 1,
// //                 duration: 0.5,
// //                 ease: "power2.inOut"
// //             })
// //             // Final fade out of original container
// //             .to([containerRef.current, topImageRef.current], {
// //                 opacity: 0,
// //                 duration: 0.5,
// //                 ease: "power2.inOut"
// //             })

// //     }, [])

// //     return (
// //         <div ref={sectionRef} className='w-full h-screen relative overflow-hidden bg-white'>
// //             <div 
// //                 ref={textRef}
// //                 className={`absolute top-2 left-[25%] transform -translate-x-1/2 text-[6vw] ${Clash.className}`}
// //             >
// //                 PACKAGING
// //             </div>
// //             <div 
// //                 ref={containerRef}
// //                 className='absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2'
// //             >
// //                 <img 
// //                     src="/images/packaging/container.png" 
// //                     className='w-[30vw] h-full object-contain' 
// //                     alt="Container" 
// //                 />
// //             </div>
// //             <img 
// //                 ref={topImageRef}
// //                 src="/images/packaging/top.png" 
// //                 className='absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2 w-[30vw] object-contain' 
// //                 alt="Container Top" 
// //             />

// //             {/* Truck with SHIPPING text */}
// //             <div className="absolute top-[52%] left-[31%] transform -translate-x-1/2 -translate-y-1/2">
// //                 <img 
// //                     ref={truckRef}
// //                     src="/images/packaging/truck2.png" 
// //                     className='w-[42vw] object-contain'
// //                     alt="Truck" 
// //                 />
               
// //             </div>

// //             <div className='absolute top-[65%] left-[55%] w-full transform -translate-x-1/2 -translate-y-1/2'>
                
// //             <img src="/images/packaging/road.png" className='w-[90vw] h-full' alt="" />
// //             </div>
// //             <div className='absolute top-[38%] left-[125%] w-full transform -translate-x-1/2 -translate-y-1/2'>
// //                 <img src="/images/packaging/lamp.png" alt="" />
// //             </div>
// //         </div>
// //     )
// // }

// // export default TruckAnimation2
// "use client"
// import React, { useLayoutEffect, useRef } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// import { Clash } from '../../../public/fonts/fonts'

// gsap.registerPlugin(ScrollTrigger)

// const TruckAnimation2 = () => {
//     const containerRef = useRef(null)
//     const textRef = useRef(null)
//     const sectionRef = useRef(null)
//     const topImageRef = useRef(null)
//     const truckRef = useRef(null)
//     const shippingTextRef = useRef(null)
//     const roadRef = useRef(null)
//     const lampRef = useRef(null)

//     useGSAP(() => {
//         // Initial position setup
//         gsap.set(containerRef.current, {
//             y: '-100vh',
//         })
        
//         gsap.set(textRef.current, {
//             y: '-100vh',
//         })

//         gsap.set(topImageRef.current, {
//             y: '-100vh',
//             opacity: 0
//         })

//         gsap.set(truckRef.current, {
//             opacity: 0,
//         })

//         gsap.set(shippingTextRef.current, {
//             opacity: 0,
//         })

//         gsap.set([roadRef.current, lampRef.current], {
//             opacity: 0,
//         })

//         // Create the main timeline
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 pin: true,
//                 markers: true,
//                 start: "top top",
//                 end: "+=400%",
//                 scrub: 1,
//             }
//         })

//         tl
//             // Initial drop animations
//             .to(textRef.current, {
//                 y: 0,
//                 duration: 1,
//                 ease: "power2.out"
//             })
//             .to(containerRef.current, {
//                 y: 0,
//                 duration: 1,
//                 ease: "power2.out"
//             }, "-=0.8")

//             // Move text into container and fade out
//             .to(textRef.current, {
//                 y: '50vh',
//                 scale: 0.5,
//                 opacity: 0,
//                 duration: 1.5,
//                 ease: "power2.inOut"
//             })

//             // Drop top image from above
//             .to(topImageRef.current, {
//                 y: -60,
//                 opacity: 1,
//                 duration: 1,
//                 ease: "power2.out"
//             })

//             // Transform container into truck container
//             .to([containerRef.current, topImageRef.current], {
//                 duration: 1,
//                 ease: "power2.inOut"
//             })
//             .to(truckRef.current, {
//                 opacity: 1,
//                 duration: 0.5,
//                 ease: "power2.inOut"
//             })
//             // Final fade out of original container
//             .to([containerRef.current, topImageRef.current], {
//                 opacity: 0,
//                 duration: 0.5,
//                 ease: "power2.inOut"
//             })
//             // Fade in road and lamp together
//             .to([roadRef.current, lampRef.current], {
//                 opacity: 1,
//                 duration: 1,
//                 ease: "power2.inOut"
//             })

//     }, [])

//     return (
//         <div ref={sectionRef} className='w-full h-screen relative overflow-hidden bg-white'>
//             <div 
//                 ref={textRef}
//                 className={`absolute top-2 left-[25%] transform -translate-x-1/2 text-[6vw] ${Clash.className}`}
//             >
//                 PACKAGING
//             </div>
//             <div 
//                 ref={containerRef}
//                 className='absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2'
//             >
//                 <img 
//                     src="/images/packaging/container.png" 
//                     className='w-[30vw] h-full object-contain' 
//                     alt="Container" 
//                 />
//             </div>
//             <img 
//                 ref={topImageRef}
//                 src="/images/packaging/top.png" 
//                 className='absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2 w-[30vw] object-contain' 
//                 alt="Container Top" 
//             />

//             {/* Truck with SHIPPING text */}
//             <div className="absolute top-[52%] left-[31%] transform -translate-x-1/2 -translate-y-1/2">
//                 <img 
//                     ref={truckRef}
//                     src="/images/packaging/truck2.png" 
//                     className='w-[42vw] object-contain'
//                     alt="Truck" 
//                 />
//             </div>

//             <div className='absolute top-[65%] left-[55%] w-full transform -translate-x-1/2 -translate-y-1/2'>
//                 <img 
//                     ref={roadRef}
//                     src="/images/packaging/road.png" 
//                     className='w-[90vw] h-full' 
//                     alt="" 
//                 />
//             </div>
//             <div className='absolute top-[38%] left-[125%] w-full transform -translate-x-1/2 -translate-y-1/2'>
//                 <img 
//                     ref={lampRef}
//                     src="/images/packaging/lamp.png" 
//                     alt="" 
//                 />
//             </div>
//         </div>
//     )
// }

// export default TruckAnimation2
"use client"
import React, { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Clash } from '../../../public/fonts/fonts'

gsap.registerPlugin(ScrollTrigger)

const TruckAnimation2 = () => {
    const containerRef = useRef(null)
    const textRef = useRef(null)
    const sectionRef = useRef(null)
    const topImageRef = useRef(null)
    const truckRef = useRef(null)
    const shippingTextRef = useRef(null)
    const roadRef = useRef(null)
    const lampRef = useRef(null)

    useGSAP(() => {
        // Initial position setup
        gsap.set(containerRef.current, {
            y: '-100vh',
        })
        
        gsap.set(textRef.current, {
            y: '-100vh',
        })

        gsap.set(topImageRef.current, {
            y: '-100vh',
            opacity: 0
        })

        gsap.set(truckRef.current, {
            opacity: 0,
        })

        gsap.set(shippingTextRef.current, {
            opacity: 0,
        })

        gsap.set([roadRef.current, lampRef.current], {
            opacity: 0,
        })

        // Create the main timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                // markers: true,
                start: "top top",
                end: "+=300%",
                scrub: 1,
            }
        })

        tl
            // Initial drop animations
            .to(textRef.current, {
                y: 30,
                duration: 1,
                ease: "power2.out"
            })
            .to(containerRef.current, {
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8")

            // Move text into container and fade out
            .to(textRef.current, {
                y: '40vh',
                scale: 0.5,
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut"
            })

            // Drop top image from above
            .to(topImageRef.current, {
                y: '-4vw',
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            })

            // Transform container into truck container
            .to([containerRef.current, topImageRef.current], {
                duration: 1,
                ease: "power2.inOut"
            })
            .to(truckRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut"
            })
            // Final fade out of original container
            .to([containerRef.current, topImageRef.current], {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut"
            })
            // Fade in road and lamp together
            .to([roadRef.current, lampRef.current], {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut"
            })
            
            // Move lamp left and truck right
            .to(lampRef.current, {
                x: '-75vw', // Move lamp to the left
                duration: 1.5,
                ease: "power2.inOut"
            })
            .to(truckRef.current, {
                x: '95vw', // Move truck to the right
                duration: 1.5,
                ease: "power2.inOut"
            }, "<") // Start at the same time as lamp movement

    }, [])

    return (
        <div ref={sectionRef} className='w-full h-screen relative overflow-hidden bg-white'>
            <div 
                ref={textRef}
                className={`absolute top-2 text-[#02123B] left-[25%] transform -translate-x-1/2 text-[7vw] ${Clash.className}`}
            >
                PACKAGING
            </div>
            <div 
                ref={containerRef}
                className='absolute md:top-[46%] lg:top-[49%] top-[90vw] left-[25%] transform -translate-x-1/2 -translate-y-1/2'
            >
                <img 
                    src="/images/packaging/container.png" 
                    className='w-[30vw] h-full object-contain' 
                    alt="Container" 
                />
            </div>
            <img 
                ref={topImageRef}
                src="/images/packaging/top.png" 
                className='absolute md:top-[50%] lg:top-[50%] top-[90vw] left-[25%] transform -translate-x-1/2 -translate-y-1/2 w-[30vw] object-contain' 
                alt="Container Top" 
            />

            {/* Truck with SHIPPING text */}
            <div className="absolute md:top-[52%] top-[95.4vw] xl:top-[52.5%] left-[31%] z-[9999] transform -translate-x-1/2 -translate-y-1/2">
                <img 
                    ref={truckRef}
                    src="/images/packaging/truck2.png" 
                    className='w-[42vw] object-contain'
                    alt="Truck" 
                />
            </div>

            <div className='absolute bg-white top-[103vw] md:top-[59%] lg:top-[65%] xl:top-[65%] left-[55%] w-full transform z-[99] -translate-x-1/2 -translate-y-1/2'>
                <img 
                    ref={roadRef}
                    src="/images/packaging/road.png" 
                    className='w-[90vw] h-full' 
                    alt="" 
                />
            </div>
            <div className='absolute top-[84.5vw]  md:top-[41.2%] lg:top-[34%] xl:top-[36%] left-[125%] w-full transform z-[-1] -translate-x-1/2 -translate-y-1/2'>
                <img 
                    ref={lampRef}
                    src="/images/packaging/lamp.png" 
                    className='w-[20vw] object-contain'
                    alt="" 
                />
            </div>
        </div>
    )
}

export default TruckAnimation2