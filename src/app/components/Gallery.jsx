// "use client"
// import React, { useEffect, useRef, useState } from 'react'
// import Navbar from '../components/Navbar'
// import { Clash } from '../../../public/fonts/fonts'
// import Timeline from '../components/Timeline'
// import ImageCard from '../components/ImageCard'
// import ToggleButton from '../components/Togglebutton'
// import Scale from '../components/Barcode'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import locomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import { ScrollTrigger } from "gsap/ScrollTrigger"; 
// import Footer from './Footer'

// gsap.registerPlugin(ScrollTrigger);

// const Gallery = () => {

//   const [isActive, setIsActive] = useState(false);
//   const cardsRef = useRef([]);
//     const slider = useRef(null);
//     const slider2 = useRef(null);
//     const triggerRef = useRef(null);
//     const triggerRef2 = useRef(null);
//     const containerRef = useRef(null);
//     const scrollContainerRef = useRef(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isReady, setIsReady] = useState(false);
//     const [locomotiveInstance, setLocomotiveInstance] = useState(null);
//     // useEffect(() => {
//     //   // Force scroll to top
//     //   window.scrollTo(0, 0);
      
//     //   // Disable scroll initially
//     //   document.body.style.overflow = 'hidden';
      
//     //   // Initialize locomotive scroll
//     //   const scrollInstance = new locomotiveScroll({
//     //     el: scrollContainerRef.current,
//     //     smooth: true,
//     //     smoothMobile: true,
//     //     multiplier: 0.1,
//     //     lerp: 0,
//     //   });
  
//     //   setLocomotiveInstance(scrollInstance);
      
//     //   // Initially disable scroll
//     //   scrollInstance.stop();
      
//     //   // Add delay before starting animations
//     //   const timer = setTimeout(() => {
//     //     setIsLoading(false);
//     //     setIsReady(true);
//     //     scrollInstance.start();
//     //     scrollInstance.update();
        
//     //     // Fade in the content
//     //     if (scrollContainerRef.current) {
//     //       scrollContainerRef.current.style.opacity = '1';
//     //     }
//     //   }, 2000); // 2 second delay
      
//     //   return () => {
//     //     clearTimeout(timer);
//     //     if (scrollInstance) {
//     //       scrollInstance.destroy();
//     //     }
//     //     document.body.style.overflow = 'auto';
//     //   };
//     // }, []);
  

//   useEffect(() => {
//     const cards = cardsRef.current;
    
//     if (isActive) {
//       // Move all cards right by 10%
//       gsap.to(cards, {
//         x: '30%',
//         duration: 0.8,
//         ease: 'power2.out'
//       });
//       // Alternating up/down movement
//       cards.forEach((card, index) => {
//         gsap.to(card, {
//           y: index % 2 === 0 ? '35%' : '-35%',
//           duration: 0.8,
//           ease: 'power2.out'
//         });
//       });
//     } else {
//       // Reset positions
//       gsap.to(cards, {
//         x: 0,
//         y: 0,
//         duration: 0.8,
//         ease: 'power2.out'
//       });
//     }
//   }, [isActive]);

//   // Function to add cards to the ref array
//   const addToRefs = (el) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   useGSAP(()=>{
//     gsap.fromTo([slider.current,containerRef.current],{
//         translateX: 0,
//       },
//       {
//         translateX: "-120%",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "2000 top",
//           scrub: 2,
//           pin: true,
//           markers: true,
//           anticipatePin: 1, // This helps prevent jarring pin start
//           fastScrollEnd: true, // Improves performance during fast scrolling
//           preventOverlaps: true,
//           invalidateOnRefresh: true,
//           onEnter: () => {
//             // Ensure smooth start of animation
//             gsap.to(slider.current, {
//               opacity: 1,
//               duration: 0.3
//             });
//           },
//         },
//       }
      
//     )
//     return () => {
//         // pin.kill();
//       };
// })

// useGSAP(()=>{
//   gsap.fromTo([slider.current,containerRef.current],{
//       translateX: 0,
//     },
//     {
//       translateX: "-300%",
//       ease: "none",
//       duration: 1,
//       scrollTrigger: {
//         trigger: triggerRef2.current,
//         start: "top top",
//         end: "2000 top",
//         scrub: 2,
//         pin: true,
//         markers: true,
//         anticipatePin: 1, // This helps prevent jarring pin start
//         fastScrollEnd: true, // Improves performance during fast scrolling
//         preventOverlaps: true,
//         invalidateOnRefresh: true,
//         onEnter: () => {
//           // Ensure smooth start of animation
//           gsap.to(slider2.current, {
//             opacity: 1,
//             duration: 0.3
//           });
//         },
//       },
//     }
    
//   )
//   return () => {
//       // pin.kill();
//     };
// })

//   return (
//     <>
//       <div className='absolute w-full z-[999]'>
//         <Navbar/>
//       </div>
 
      
//       <div ref={scrollContainerRef}  className='w-full h-screen hidden md:block'>
//         <div className='w-full h-full bg-[#02123b]'>
//           <div className='md:pt-[20vw] lg:pt-[16vw] xl:pt-[12vw] pt-[42vw] sm:pt-[32vw] bg-[#02123b]'>
//             <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row gap-6 md:gap-0 justify-end md:justify-between text-white ${Clash.className}`}>
//               <div className='text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>Gallery</div>
//             </div>
//           </div>

//           <div className='bg-[#02123b] relative overflow-hidden'>
//             <div ref={triggerRef} className='flex'>
//               <div   className='md:pl-[2vw] lg:pl-[4vw] px-4 w-full overflow-hidden md:pt-[5vw] pt-[16vw] bg-[#02123b] pb-[16vw] md:pb-[10vw] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>

//                 <div className='h-screen'>
//                 <div  className='relative md:h-screen flex flex-col justify-around '>
//                   {/* Regular image cards - add ref to each card */}
//                   <div ref={slider} className='flex gap-[4vw] w-full relative pt-[10vw] md:pt-0 pb-[8vw] md:pb-0'>
//                   <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
//                     <img src="/images/gallery/g1.webp" className='w-full h-full object-cover rounded-xl' alt="" />
//                   </div>
                  
                    
                 
// <ImageCard 
// ref={addToRefs}
//   images={[
//     "/images/gallery/card-1.webp",
//     "/images/gallery/card-1-1.webp",
//     "/images/gallery/card-1-2.webp",
//     "/images/gallery/card-1-3.webp",
//     // Add up to 10 images
//   ]}
//   title="Start"
//   date="12th January 1999"
// />
                   
                  

//                   <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
//                     <img src="/images/gallery/g2.webp" className='w-full h-full object-cover rounded-xl' alt="" />
//                   </div>

//                   <ImageCard 
// ref={addToRefs}
//   images={[
//    "/images/gallery/card-2.webp",
//     "/images/gallery/card-1-1.webp",
//     "/images/gallery/card-1-2.webp",
//     "/images/gallery/card-1-3.webp",
//     // Add up to 10 images
//   ]}
//   title="Air Charter"
//   date="18th June 2004"
// />

//                   <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
//                     <img src="/images/gallery/g3.webp" className='w-full h-full object-cover rounded-xl' alt="" />
//                   </div>
//                   <ImageCard 
// ref={addToRefs}
//   images={[
//     "/images/gallery/card-3.webp",
//     "/images/gallery/card-1-1.webp",
//     "/images/gallery/card-1-2.webp",
//     "/images/gallery/card-1-3.webp",
//     // Add up to 10 images
//   ]}
//  title="Air Charter"
//   date="18th June 2004"
// />  
//                   </div>
//  <div className='w-full  flex justify-center absolute md:bottom-44 bottom-12 z-[999]'>
//           <ToggleButton isActive={isActive} setIsActive={setIsActive} />
//         </div>
//                   <div ref={containerRef}  className='flex pt-[10vw] md:pt-0'>
            
//             <Scale value={5} /> 
            
//                     </div>

//                 </div>
//                 </div>
             
//               </div>
//             </div>

           
//             <div>
//             <Footer/>
//         </div>

//           </div>
//         </div>
       
//       </div>
       
//       <div ref={triggerRef2}  className='w-full h-screen md:hidden'>
//         <div className='w-full h-full bg-[#02123b]'>
//           <div className='md:pt-[20vw] lg:pt-[16vw] xl:pt-[12vw] pt-[42vw] sm:pt-[32vw] bg-[#02123b]'>
//             <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row gap-6 md:gap-0 justify-end md:justify-between text-white ${Clash.className}`}>
//               <div className='text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>Gallery</div>
//             </div>
//           </div>

//           <div className='bg-[#02123b] relative overflow-hidden'>
//             <div  className='flex'>
//               <div   className='md:pl-[2vw] lg:pl-[4vw] px-4 w-full overflow-hidden md:pt-[5vw] bg-[#02123b]  md:pb-[10vw] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>

//                 <div className='h-screen'>
//                 <div  className='relative h-[70%] flex flex-col justify-around '>
//                   {/* Regular image cards - add ref to each card */}
//                   <div ref={slider2} className='flex gap-[4vw] w-full relative pt-[10vw] md:pt-0 pb-[8vw] md:pb-0'>
//                   <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
//                     <img src="/images/gallery/g1.webp" className='w-full h-full object-cover rounded-xl' alt="" />
//                   </div>
                  
                    
                 
// <ImageCard 
// ref={addToRefs}
//   images={[
//     "/images/gallery/card-1.webp",
//     "/images/gallery/card-1-1.webp",
//     "/images/gallery/card-1-2.webp",
//     "/images/gallery/card-1-3.webp",
//     // Add up to 10 images
//   ]}
//   title="Start"
//   date="12th January 1999"
// />
                   
                  

//                   <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
//                     <img src="/images/gallery/g2.webp" className='w-full h-full object-cover rounded-xl' alt="" />
//                   </div>

//                   <ImageCard 
// ref={addToRefs}
//   images={[
//    "/images/gallery/card-2.webp",
//     "/images/gallery/card-1-1.webp",
//     "/images/gallery/card-1-2.webp",
//     "/images/gallery/card-1-3.webp",
//     // Add up to 10 images
//   ]}
//   title="Air Charter"
//   date="18th June 2004"
// />

//                   <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
//                     <img src="/images/gallery/g3.webp" className='w-full h-full object-cover rounded-xl' alt="" />
//                   </div>
//                   <ImageCard 
// ref={addToRefs}
//   images={[
//     "/images/gallery/card-3.webp",
//     "/images/gallery/card-1-1.webp",
//     "/images/gallery/card-1-2.webp",
//     "/images/gallery/card-1-3.webp",
//     // Add up to 10 images
//   ]}
//  title="Air Charter"
//   date="18th June 2004"
// />  
//                   </div>
//  <div className='w-full  flex justify-center absolute md:bottom-44 bottom-0 z-[999]'>
//           <ToggleButton isActive={isActive} setIsActive={setIsActive} />
//         </div>
//                   <div ref={containerRef}  className='flex  md:pt-0'>
            
//             <Scale value={8} /> 
            
//                     </div>

//                 </div>
//                 </div>
             
//               </div>
//             </div>

            

//           </div>
//         </div>
       
//       </div>

           
//       <div className='md:hidden'>
//             <Footer/>
//         </div>
//     </>
//   )
// }

// export default Gallery
"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Clash } from '../../../public/fonts/fonts'
import ImageCard from '../components/ImageCard'
import ToggleButton from '../components/Togglebutton'
import Scale from '../components/Barcode'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [isActive, setIsActive] = useState(false);
  const cardsRef = useRef([]);
  const slider = useRef(null);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;
    
    if (isActive) {
      gsap.to(cards, {
        x: '30%',
        duration: 0.8,
        ease: 'power2.out'
      });
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? '35%' : '-35%',
          duration: 0.8,
          ease: 'power2.out'
        });
      });
    } else {
      gsap.to(cards, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    }
  }, [isActive]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.fromTo([slider.current, containerRef.current], {
      translateX: 0,
    }, {
      translateX: "-120%",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.to(slider.current, {
            opacity: 1,
            duration: 0.3
          });
        },
      },
    });
  })

  return (
    <>
      <div className='absolute w-full z-[999]'>
        <Navbar/>
      </div>
      
      <div className='w-full h-screen'>
        <div className='w-full h-full bg-[#02123b]'>
          <div className='md:pt-[20vw] lg:pt-[16vw] xl:pt-[12vw] pt-[42vw] sm:pt-[32vw] bg-[#02123b]'>
            <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row gap-6 md:gap-0 justify-end md:justify-between text-white ${Clash.className}`}>
              <div className='text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>Gallery</div>
            </div>
          </div>

          <div className='bg-[#02123b] relative overflow-hidden'>
            <div ref={triggerRef} className='flex'>
              <div className='md:pl-[2vw] lg:pl-[4vw] px-4 w-full overflow-hidden md:pt-[5vw] pt-[16vw] bg-[#02123b] pb-[16vw] md:pb-[10vw]'>
                <div className='h-screen'>
                  <div className='relative md:h-screen flex flex-col justify-around'>
                    <div ref={slider} className='flex gap-[4vw] w-full relative pt-[10vw] md:pt-0 pb-[8vw] md:pb-0'>
                      {/* Gallery content - images and cards */}
                      <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
                        <img src="/images/gallery/g1.webp" className='w-full h-full object-cover rounded-xl' alt="" />
                      </div>

                      <ImageCard 
                        ref={addToRefs}
                        images={[
                          "/images/gallery/card-1.webp",
                          "/images/gallery/card-1-1.webp",
                          "/images/gallery/card-1-2.webp",
                          "/images/gallery/card-1-3.webp",
                        ]}
                        title="Start"
                        date="12th January 1999"
                      />

                      {/* Repeat other gallery items */}
                                        

                  <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
                    <img src="/images/gallery/g2.webp" className='w-full h-full object-cover rounded-xl' alt="" />
                  </div>

                  <ImageCard 
ref={addToRefs}
  images={[
   "/images/gallery/card-2.webp",
    "/images/gallery/card-1-1.webp",
    "/images/gallery/card-1-2.webp",
    "/images/gallery/card-1-3.webp",
    // Add up to 10 images
  ]}
  title="Air Charter"
  date="18th June 2004"
/>

                  <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
                    <img src="/images/gallery/g3.webp" className='w-full h-full object-cover rounded-xl' alt="" />
                  </div>
                  <ImageCard 
ref={addToRefs}
  images={[
    "/images/gallery/card-3.webp",
    "/images/gallery/card-1-1.webp",
    "/images/gallery/card-1-2.webp",
    "/images/gallery/card-1-3.webp",
    // Add up to 10 images
  ]}
 title="Air Charter"
  date="18th June 2004"
/>  
                    </div>

                    <div className='w-full flex justify-center absolute md:bottom-44 bottom-12 z-[999]'>
                      <ToggleButton isActive={isActive} setIsActive={setIsActive} />
                    </div>

                    <div ref={containerRef} className='flex pt-[10vw] md:pt-0'>
                      <Scale value={window.innerWidth >= 768 ? 5 : 8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery