"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Clash, ClashM } from '../../../public/fonts/fonts'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from './Footer';
import Button from './Button';
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const imageRefs = useRef([]);
    const imageRefs2 = useRef([]);
    const buttonRefs = useRef([]);
    const contentRefs = useRef([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);

      const scrollContainerRef = useRef(null);
            //   useEffect(() => {
            //     const scrollInstance = new locomotiveScroll({
            //       el: scrollContainerRef.current,
            //       smooth: true,
            //       smoothMobile: true,
            //       multiplier: 0.1, // Adjust the speed of the scrolling (lower is slower)
            //       lerp: 0, // Adjust the easing (lower is smoother)
            //     });
            
            //     return () => {
            //       if (scrollInstance) scrollInstance.destroy();
            //     };
            //   }, []);
    // Force initial scroll and handle loading state
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     document.body.style.overflow = 'hidden';
        
    //     const timer = setTimeout(() => {
    //         document.body.style.overflow = 'auto';
    //         setIsLoading(false);
    //         setIsReady(true);
    //         ScrollTrigger.refresh();
    //     }, 500);
        
    //     return () => {
    //         clearTimeout(timer);
    //         document.body.style.overflow = 'auto';
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, []);
  useEffect(() => {
             const scrollInstance = new locomotiveScroll({
               el: scrollContainerRef.current,
               smooth: true,
               smoothMobile: true,
               multiplier: 0.1, // Adjust the speed of the scrolling (lower is slower)
               lerp: 0, // Adjust the easing (lower is smoother)
             });
         
             return () => {
               if (scrollInstance) scrollInstance.destroy();
             };
           }, []);

           useEffect(() => {
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
            
            const timer = setTimeout(() => {
                document.body.style.overflow = 'auto';
                setIsLoading(false);
                setIsReady(true);
                ScrollTrigger.refresh();
            }, 1000);
            
            return () => {
                clearTimeout(timer);
                document.body.style.overflow = 'auto';
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }, []);

    const addToImageRefs = (el) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };
    const addToImageRefs2 = (el) => {
        if (el && !imageRefs2.current.includes(el)) {
            imageRefs2.current.push(el);
        }
    };
    
    const addToButtonRefs = (el) => {
        if (el && !buttonRefs.current.includes(el)) {
            buttonRefs.current.push(el);
        }
    };

    // Initialize refs and set initial states
    // useEffect(() => {
    //     if (isReady && imageRefs.current.length > 0) {
    //         // Set initial states for images
    //         imageRefs.current.forEach((imageContainer) => {
    //             if (imageContainer) {
    //                 gsap.set(imageContainer, {
    //                     width: '15%',
    //                     height: '10vw'
    //                 });
    //             }
    //         });

    //         // Set initial states for buttons
    //         buttonRefs.current.forEach((button) => {
    //             if (button) {
    //                 gsap.set(button, {
    //                     display: 'none',
    //                     opacity: 0,
    //                     y: 30
    //                 });
    //             }
    //         });

    //         // Ensure all cards are visible
    //         imageRefs.current.forEach((imageContainer) => {
    //             if (imageContainer?.parentElement) {
    //                 gsap.set(imageContainer.parentElement, { 
    //                     visibility: "visible",
    //                     opacity: 1 
    //                 });
    //             }
    //         });
    //     }
    // }, [isReady]);
    useEffect(() => {
        if (isReady && imageRefs.current.length > 0) {
            // Set initial states for images
            imageRefs.current.forEach((imageContainer) => {
                if (imageContainer) {
                    gsap.set(imageContainer, {
                        width: '15%',
                        height: '10vw'
                    });
                }
            });

            // Set initial states for buttons
            buttonRefs.current.forEach((button) => {
                if (button) {
                    gsap.set(button, {
                        display: 'none',
                        opacity: 0,
                        y: 30
                    });
                }
            });

            // Ensure first card is visible
            if (imageRefs.current[0]?.parentElement) {
                gsap.set(imageRefs.current[0].parentElement, { 
                    visibility: "visible",
                    opacity: 1 
                });
            }
        }
    }, [isReady]);

    // Handle hover animations
    const handleEnter = (index) => {
        if (buttonRefs.current[index]) {
            gsap.set(buttonRefs.current[index], {
                display: 'block'
            });
            gsap.to(buttonRefs.current[index], {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        }
    };

    const handleLeave = (index) => {
        if (buttonRefs.current[index]) {
            gsap.to(buttonRefs.current[index], {
                y: 30,
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(buttonRefs.current[index], {
                        display: 'none'
                    });
                }
            });
        }
    };


    useGSAP(() => {
        if (!isReady) return;
    
        imageRefs.current.forEach((imageContainer, index) => {
            if (!imageContainer || !imageContainer.parentElement) return;
    
            // Ensure parent container is visible
            gsap.set(imageContainer.parentElement, {
                height: 'auto',
                visibility: "visible",
                opacity: 1
            });
    
            // Create animation timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: imageContainer.parentElement,
                    start: "top bottom-=100",
                    end: "top top+=100",
                    toggleActions: "play none none reverse",
                    scrub: true,
                    onUpdate: (self) => {
                        // Show/hide button based on card expansion progress
                        if (self.progress >= 0.8 && buttonRefs.current[index]) {
                            gsap.to(buttonRefs.current[index], {
                                display: 'block',
                                opacity: 1,
                                y: 0,
                                duration: 0.3,
                                ease: "power2.out"
                            });
                        } else if (buttonRefs.current[index]) {
                            gsap.to(buttonRefs.current[index], {
                                opacity: 0,
                                y: 30,
                                duration: 0.3,
                                ease: "power2.in",
                                onComplete: () => {
                                    gsap.set(buttonRefs.current[index], {
                                        display: 'none'
                                    });
                                }
                            });
                        }
                    }
                }
            });
    
            // Add animation to timeline
            tl.fromTo(imageContainer,
                {
                    width: '15%',
                    height: '10vw'
                },
                {
                    width: '40%',
                    height: '25vw',
                    ease: "none",
                }
            );
        });
    }, [isReady]);



    useGSAP(() => {
        if (!isReady) return;
    
        imageRefs2.current.forEach((imageContainer, index) => {
            if (!imageContainer || !imageContainer.parentElement) return;
    
            // Ensure parent container is visible
            gsap.set(imageContainer.parentElement, {
                // height: 'auto',
                visibility: "visible",
                opacity: 1
            });
    
            // Create animation timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: imageContainer.parentElement,
                    start: "top bottom-=100",
                    end: "top center-=100",
                    toggleActions: "play none none reverse",
                    scrub: true,
                    // markers: true,
                }
            });
    
            // Add animation to timeline
            tl.fromTo(imageContainer,
                {
                    width: '15%',
                    height: '100%'
                },
                {
                    width: '40%',
                    height: '100%',
                    ease: "none",
                }
            );
        });
    }, [isReady]);

    // Rest of your JSX remains the same, but add visibility and opacity to card containers
    return (
        <div className='w-full h-screen'>
             
        <div className='md:h-full w-full h-[50vh]  '>
            <div className=' h-[100%] md:h-[100%] pb-4 md:pb-0  bg-[#02123b]'>
                <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row h-[100%] gap-6 md:gap-0 justify-end md:justify-between md:items-center text-white ${Clash.className}  `}>
                    <div className=' text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>Services</div>
                    <div className='text-base pr-[8vw]  md:w-[48%] xl:text-[1.5vw] md:text-[1.9vw] lg:text-[1.7vw] h-auto md:h-[50%] flex items-end'>Discover our full suite of logistics services, including air, sea, and supply chain solutions, tailored to streamline operations and deliver excellence across industries worldwide.</div>
                </div>
            </div>
        </div>

        <div className='-mt-1'>
        <div className='w-full overflow-hidden hidden md:block'>
           <img src="/images/img64.png" alt="" className='md:w-screen  z-[-1] object-cover'/>
       </div>
       <div className='w-full overflow-hidden md:hidden block'>
           <img src="/images/img43.png" alt="" className='w-full z-[-1] object-cover'/>
       </div>
       </div>
         <div className='w-full bg-white md:p-[2vw] lg:p-[4vw] p-4 md:block hidden'>
                       <div className='flex flex-col gap-4'>
                       <div className='relative' style={{ height: '26vw' }}>
                       <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                           <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                               <img src="/images/services/service/air.webp" className='w-full h-full' alt="" />
                           </div>
                           <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                               <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Air Freight</div>
                               <div className='flex flex-col gap-[2vw]'  
                                   >
                                   <div className='text-[#02123b] text-[5vw] hidden md:block  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                   <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/air-freight' /></div>
                                  
                               </div>
                           </div>
                       </div>
                       </div>
                       <div className='relative' style={{ height: '26vw' }}>
                       <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                           <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                               <img src="/images/services/service/sea.webp" className='w-full h-full' alt="" />
                           </div>
                           <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                               <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Sea Freight</div>
                               <div className='flex flex-col gap-[2vw]'  
                                  >
                                   <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                   <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/sea-freight'  /></div>
                               </div>
                           </div>
                       </div>
                       </div>
                       <div className='relative' style={{ height: '26vw' }}>
                       <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                           <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                               <img src="/images/services/service/supply.webp" className='w-full h-full' alt="" />
                           </div>
                           <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                               <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Supply Chain</div>
                               <div className='flex flex-col gap-[2vw]'  
                                   >
                                   <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                   <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/supply-chain' /></div>
                               </div>
                           </div>
                       </div>
                       </div>
                       <div className='relative' style={{ height: '26vw' }}>
                       <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                           <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                               <img src="/images/services/service/project.webp" className='w-full h-full' alt="" />
                           </div>
                           <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                               <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Project Logistics</div>
                               <div className='flex flex-col gap-[2vw]'  
                                  >
                                   <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                   <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/project-logistics' /></div>
                               </div>
                           </div>
                       </div>
                       </div>
                       <div className='relative' style={{ height: '26vw' }}>
                       <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                           <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                               <img src="/images/services/service/customs.webp" className='w-full h-full' alt="" />
                           </div>
                           <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                               <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Customs Brokerage</div>
                               <div className='flex flex-col gap-[2vw]' 
                                   >
                                   <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                   <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/customs-brokerage' /></div>
                               </div>
                           </div>
                       </div>
                       </div>
                       <div className='relative' style={{ height: '26vw' }}>
                       <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                           <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                               <img src="/images/services/service/cross.webp" className='w-full h-full' alt="" />
                           </div>
                           <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                               <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Cross Trade</div>
                               <div className='flex flex-col gap-[2vw]' 
                                 >
                                   <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                   <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/cross-trade'  /></div>
                               </div>
                           </div>
                       </div>
                       </div>
                       <div className='relative' style={{ height: '26vw' }}>
                       <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                           <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                               <img src="/images/services/service/charter.webp" className='w-full h-full' alt="" />
                           </div>
                           <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                               <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Charter Services</div>
                               <div className='flex flex-col gap-[2vw]'  
                                 >
                                   <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                   <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/charter-services' /></div>
                               </div>
                           </div>
                       </div>
                       </div>
                       <div className='relative' style={{ height: '26vw' }}>
                       <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                           <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                               <img src="/images/services/service/value.webp" className='w-full h-full' alt="" />
                           </div>
                           <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                               <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Value Added Services</div>
                               <div className='flex flex-col gap-[2vw]'  
                                   >
                                   <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                   <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/value-added-services' /></div>
                               </div>
                           </div>
                       </div>
                       </div>
                      
                       </div>
                      
                   </div>
           <div className='w-full h-auto bg-white md:p-[2vw] lg:p-[4vw] p-4 md:hidden'>
               <div className='flex flex-col '>
                   <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                       <div ref={addToImageRefs2} className='w-[40%] h-full '>
                           <img src="/images/services/service/air.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                       </div>
                       <div className='flex flex-col h-full justify-between w-[60%]'>
                           <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Air Freight</div>
                           <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Experience precision and efficiency with our air freight services, designed to meet...</div>
                           <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/air-freight'  />
                       </div>
                   </div>
               
               </div>
               <div className='flex flex-col '>
                   <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                       <div ref={addToImageRefs2} className='w-[40%] h-full '>
                           <img src="/images/services/service/sea.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                       </div>
                       <div className='flex flex-col h-full justify-between w-[60%]'>
                           <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Sea Freight</div>
                           <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Our Sea Freight Services are designed to simplify global trade by offering tailored...</div>
                           <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/sea-freight'  />
                       </div>
                   </div>
               
               </div>
               <div className='flex flex-col '>
                   <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                       <div ref={addToImageRefs2} className='w-[40%] h-full '>
                           <img src="/images/services/service/supply.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                       </div>
                       <div className='flex flex-col h-full justify-between w-[60%]'>
                           <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Supply Chain</div>
                           <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>We redefine supply chain management through our integrated and...</div>
                           <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/supply-chain' />
                       </div>
                   </div>
               
               </div>
               <div className='flex flex-col '>
                   <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                       <div ref={addToImageRefs2} className='w-[40%] h-full '>
                           <img src="/images/services/service/project.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                       </div>
                       <div className='flex flex-col h-full justify-between w-[60%]'>
                           <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Project Logistics</div>
                           <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Our team is dedicated to providing end-to-end solutions for transporting...</div>
                           <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/project-logistics'  />
                       </div>
                   </div>
               
               </div>
               <div className='flex flex-col '>
                   <div className='flex h-60 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                       <div ref={addToImageRefs2} className='w-[40%] h-full '>
                           <img src="/images/services/service/customs.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                       </div>
                       <div className='flex flex-col h-full justify-between w-[60%]'>
                           <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Customs Brokerage</div>
                           <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Our customs brokerage solutions transcend basic compliance to deliver..</div>
                           <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/customs-brokerage' />
                       </div>
                   </div>
               
               </div>
               <div className='flex flex-col '>
                   <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                       <div ref={addToImageRefs2} className='w-[40%] h-full '>
                           <img src="/images/services/service/cross.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                       </div>
                       <div className='flex flex-col h-full justify-between w-[60%]'>
                           <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Cross Trade</div>
                           <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>We excel in Cross Trade Logistics, enabling businesses to navigate the complexities...</div>
                           <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/cross-trade' />
                       </div>
                   </div>
               
               </div>
               <div className='flex flex-col '>
                   <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                       <div ref={addToImageRefs2} className='w-[40%] h-full '>
                           <img src="/images/services/service/charter.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                       </div>
                       <div className='flex flex-col h-full justify-between w-[60%]'>
                           <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Charter Services</div>
                           <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>We deliver tailored charter services, ensuring your cargo moves seamlessly...</div>
                           <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/charter-services' />
                       </div>
                   </div>
               
               </div>
               <div className='flex flex-col '>
                   <div className='flex h-64 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                       <div ref={addToImageRefs2} className='w-[40%] h-full '>
                           <img src="/images/services/service/value.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                       </div>
                       <div className='flex flex-col h-full justify-between w-[60%]'>
                           <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Value Added Services</div>
                           <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>We recognize that modern businesses require more than just...</div>
                           <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/value-added-services'  />
                       </div>
                   </div>
               
               </div>
               
           </div>
       <div className={`bg-[#02123b] px-4 py-4 md:px-[4vw] md:py-[3vw] md:h-[15vw] md:flex-row flex-col gap-3 md:gap-0  -mb-1 md:-mb-0 flex justify-between items-center ${Clash.className}`}>
           <div className='text-white md:text-[4vw] text-[9vw]  w-full  md:w-[40%]' >Ready to Optimize Your Logistics?</div>
           <div className='flex flex-col w-full md:w-[40%] gap-9 md:gap-4'>
               <div className='text-[#c8c8c8] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw]'>Let us handle your freight and logistics needs with precision and care. Reach out to discover how our tailored solutions can empower your business.</div>
               <Button bgColor='white' tColor='black' text='Contact us' link='/contact' />
           </div>
       </div>

       <Footer/>
       </div>
    );
};

export default Services;