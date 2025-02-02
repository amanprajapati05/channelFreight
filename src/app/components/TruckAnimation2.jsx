// "use client"
// import React, { use } from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { Clash } from '../../../public/fonts/fonts'

// const TruckAnimation2 = () => {

    

//   return (
//     <div className='w-full h-screen relative'>
//         <div className={   `absolute top-2 text-[8vw] ${Clash.className} `}>PACKAGING</div>
//         <div className='absolute top-1/2'>
//             <img src="/images/packaging/container.png" className='w-[40vw] h-full' alt="" />
//         </div>
//     </div>
//   )
// }

// export default TruckAnimation2
"use client"
import React, { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Clash } from '../../../public/fonts/fonts'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const TruckAnimation2 = () => {
    const containerRef = useRef(null)
    const textRef = useRef(null)
    const sectionRef = useRef(null)

    useGSAP(() => {
        // Initial position setup - move elements above viewport
        gsap.set(containerRef.current, {
            y: '-100vh',
        })
        
        gsap.set(textRef.current, {
            y: '-100vh',
        })

        // Create the dropping animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                markers: true,
                start: "top top",
                end: "bottom center",
                toggleActions: "play none none reverse",
            }
        })

        tl.to(textRef.current, {
            y: 0,
            duration: 1,
            ease: "bounce.out"
        })
        .to(containerRef.current, {
            y: 0,
            duration: 1.2,
            ease: "bounce.out"
        }, "-=0.5")  // Start slightly before the text animation ends

    }, [])

    return (
        <div ref={sectionRef} className='w-full h-screen relative overflow-hidden'>
            <div 
                ref={textRef}
                className={`absolute top-2 text-[8vw] ${Clash.className}`}
            >
                PACKAGING
            </div>
            <div 
                ref={containerRef}
                className='absolute top-1/2 transform -translate-y-1/2'
            >
                <img 
                    src="/images/packaging/container.png" 
                    className='w-[40vw] h-full' 
                    alt="Container" 
                />
            </div>
        </div>
    )
}

export default TruckAnimation2