"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Clash,ClashM } from '../../../public/fonts/fonts'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

const page = () => {
        const scrollContainerRef = useRef(null);
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
    


const imageRefs = useRef([]);
    const imageRefs2 = useRef([]);
    const buttonRefs = useRef([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);

    // Initial page load handling
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        
        const timer = setTimeout(() => {
            document.body.style.overflow = 'auto';
            setIsLoading(false);
            setIsReady(true);
            ScrollTrigger.refresh();
        }, 1500);
        
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

    // useGSAP(() => {
    //     if (!isReady) return;

    //     imageRefs.current.forEach((imageContainer, index) => {
    //         if (!imageContainer || !imageContainer.parentElement) return;

    //         // Ensure parent container is properly setup
    //         gsap.set(imageContainer.parentElement, {
    //             height: 'auto',
    //             visibility: index === 0 ? "visible" : "hidden",
    //             opacity: index === 0 ? 1 : 0
    //         });

    //         // Create animation timeline
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: imageContainer.parentElement,
    //                 start: "top bottom-=100",
    //                 end: "top top+=100",
    //                 toggleActions: "play none none reverse",
    //                 scrub: true,
    //             }
    //         });

    //         // Add animation to timeline
    //         tl.fromTo(imageContainer,
    //             {
    //                 width: '15%',
    //                 height: '10vw'
    //             },
    //             {
    //                 width: '40%',
    //                 height: '25vw',
    //                 ease: "none",
    //             }
    //         );

    //         // Setup visibility for next card
    //         if (index < imageRefs.current.length - 1) {
    //             ScrollTrigger.create({
    //                 trigger: imageContainer.parentElement,
    //                 start: "center center",
    //                 onEnter: () => {
    //                     const nextCard = imageRefs.current[index + 1];
    //                     if (nextCard?.parentElement) {
    //                         gsap.to(nextCard.parentElement, {
    //                             visibility: "visible",
    //                             opacity: 1,
    //                             duration: 0.4
    //                         });
    //                     }
    //                 }
    //             });
    //         }
    //     });
    // }, [isReady]);

    useGSAP(() => {
        if (!isReady) return;
    
        imageRefs.current.forEach((imageContainer, index) => {
            if (!imageContainer || !imageContainer.parentElement) return;
    
            // Ensure parent container is properly setup
            gsap.set(imageContainer.parentElement, {
                height: 'auto',
                visibility: index === 0 ? "visible" : "hidden",
                opacity: index === 0 ? 1 : 0
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
                        // Show/hide button based on card expansion
                        if (self.progress >= 0.8 && buttonRefs.current[index]) {
                            gsap.to(buttonRefs.current[index], {
                                display: 'block',
                                opacity: 1,
                                y: 0,
                                duration: 0.3
                            });
                        } else if (buttonRefs.current[index]) {
                            gsap.to(buttonRefs.current[index], {
                                opacity: 0,
                                y: 30,
                                duration: 0.3,
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
    
            // Setup visibility for next card
            if (index < imageRefs.current.length - 1) {
                ScrollTrigger.create({
                    trigger: imageContainer.parentElement,
                    start: "center center",
                    onEnter: () => {
                        const nextCard = imageRefs.current[index + 1];
                        if (nextCard?.parentElement) {
                            gsap.to(nextCard.parentElement, {
                                visibility: "visible",
                                opacity: 1,
                                duration: 0.4
                            });
                        }
                    }
                });
            }
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

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
    <div ref={scrollContainerRef}>
 
    <div className='w-full'>
         
         <div className='md:h-screen w-full h-[50vh]  z-['>
             <div className=' h-[100%] md:h-[100%] pb-4 md:pb-0  bg-[#02123b]'>
                 <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row h-[100%] gap-6 md:gap-0 justify-end md:justify-between md:items-center text-white ${Clash.className}  `}>
                     <div className=' text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>Sector expertise</div>
                     <div className='text-base pr-[8vw]  md:w-[48%] xl:text-[1.5vw] md:text-[1.9vw] lg:text-[1.7vw] h-auto md:h-[50%] flex items-end'>From pharmaceuticals to hazardous goods, explore our specialized logistics expertise designed to meet the unique demands of diverse industries with precision, safety, and reliability.</div>
                 </div>
             </div>
         </div>

         <div className='-mt-1'>
         <div className='w-full overflow-hidden hidden md:block'>
            <img src="/images/img65.png" alt="" className='md:w-screen  z-[-1] object-cover'/>
        </div>
        <div className='w-full overflow-hidden md:hidden block'>
            <img src="/images/img44.png" alt="" className='w-full z-[-1] object-cover'/>
        </div>
        </div>
        </div>

<div className='w-full bg-white md:p-[2vw] lg:p-[4vw] p-4 md:block hidden '>
                            <div className='flex flex-col gap-4'>
                            <div className='relative' style={{ height: '26vw' }}>
                            <div   className='w-full  flex gap-[8vw] border-b border-[#c8c8c8] pb-4'>
                                <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                                    <img src="/images/sectors/pharma.webp" className='w-full h-full' alt="" />
                                </div>
                                <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Pharmaceuticals</div>
                                    <div className='flex flex-col gap-[2vw]'  
                                        >
                                        <div className='text-[#02123b] text-[5vw] hidden md:block  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Pharmaceutical logistics is one of the most critical and regulated sectors, requiring precise handling of sensitive goods such as medicines, vaccines, APIs, and biological samples.</div>
                                        <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/sectors/pharmaceuticals' /></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='relative' style={{ height: '26vw' }}>
                            <div   className='w-full  flex gap-[8vw] border-b border-[#c8c8c8] pb-4'>
                                <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                                    <img src="/images/sectors/haz.webp" className='w-full h-full' alt="" />
                                </div>
                                <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Hazardous
                                    Chemicals</div>
                                    <div className='flex flex-col gap-[2vw]'  
                                       >
                                        <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Transporting hazardous cargo involves high-stakes logistics due to the inherent risks to people, property, and the environment.</div>
                                        <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/sectors/hazardous-chemicals' /></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='relative' style={{ height: '26vw' }}>
                            <div   className='w-full  flex gap-[8vw] border-b border-[#c8c8c8] pb-4'>
                                <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                                    <img src="/images/sectors/eng.webp" className='w-full h-full' alt="" />
                                </div>
                                <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Engineering</div>
                                    <div className='flex flex-col gap-[2vw]'  
                                       >
                                        <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>We specialize in managing the transport of heavy machinery, oversized equipment, and engineering components.</div>
                                        <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/sectors/engineering'  /></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='relative' style={{ height: '26vw' }}>
                            <div   className='w-full  flex gap-[8vw] border-b border-[#c8c8c8] pb-4'>
                                <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                                    <img src="/images/sectors/cold.webp" className='w-full h-full' alt="" />
                                </div>
                                <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Cold Chain Products</div>
                                    <div className='flex flex-col gap-[2vw]' 
                                      >
                                        <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Cold chain logistics is vital for industries such as healthcare, food, agriculture, and chemicals</div>
                                        <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/sectors/cold-chain-products' /></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='relative' style={{ height: '26vw' }}>
                            <div   className='w-full  flex gap-[8vw] border-b border-[#c8c8c8] pb-4'>
                                <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                                    <img src="/images/sectors/pac.webp" className='w-full h-full' alt="" />
                                </div>
                                <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Packaging Solutions</div>
                                    <div className='flex flex-col gap-[2vw]'  
                                        >
                                        <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Our packaging solutions are designed to safeguard your shipments, regardless of size or sensitivity. </div>
                                        <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  link='/sectors/packaging-solutions' /></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='relative' style={{ height: '26vw' }}>
                            <div   className='w-full  flex gap-[8vw] border-b border-[#c8c8c8] pb-4'>
                                <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                                    <img src="/images/sectors/exh.webp" className='w-full h-full' alt="" />
                                </div>
                                <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Exhibition & Relocation</div>
                                    <div className='flex flex-col gap-[2vw]'  
                                       >
                                        <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Exhibition cargo logistics involves the timely transport and setup of display materials for trade shows and events. Precision timing and damage-free delivery are critical to success. </div>
                                        <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/sectors/exhibition-relocation'  /></div>
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
                                <img src="/images/sectors/pharma.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                            </div>
                            <div className='flex flex-col h-full justify-between w-[60%]'>
                                <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Pharmaceuticals</div>
                                <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Pharmaceutical logistics is one of the most critical and regulated sectors, requiring ...</div>
                                <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/sectors/pharmaceuticals'  />
                            </div>
                        </div>
                    
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex h-60 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                            <div ref={addToImageRefs2} className='w-[40%] h-full '>
                                <img src="/images/sectors/haz.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                            </div>
                            <div className='flex flex-col h-full justify-between w-[60%]'>
                                <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Hazardous
                                Chemicals</div>
                                <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Transporting hazardous cargo involves high-stakes logistics due to the inherent...</div>
                                <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/sectors/hazardous-chemicals'  />
                            </div>
                        </div>
                    
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                            <div ref={addToImageRefs2} className='w-[40%] h-full '>
                                <img src="/images/sectors/eng.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                            </div>
                            <div className='flex flex-col h-full justify-between w-[60%]'>
                                <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Engineering</div>
                                <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>We specialize in managing the transport of heavy machinery, oversized ...</div>
                                <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/sectors/engineering' />
                            </div>
                        </div>
                    
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex h-64 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                            <div ref={addToImageRefs2} className='w-[40%] h-full '>
                                <img src="/images/sectors/cold.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                            </div>
                            <div className='flex flex-col h-full justify-between w-[60%]'>
                                <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Cold Chain Products</div>
                                <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Cold chain logistics is vital for industries such as healthcare, food, agriculture...</div>
                                <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/sectors/cold-chain-products'  />
                            </div>
                        </div>
                    
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex h-64 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                            <div ref={addToImageRefs2} className='w-[40%] h-full '>
                                <img src="/images/sectors/pac.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                            </div>
                            <div className='flex flex-col h-full justify-between w-[60%]'>
                                <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Packaging Solutions</div>
                                <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Our packaging solutions are designed to safeguard your shipments, regardless of...</div>
                                <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/sectors/packaging-solutions' />
                            </div>
                        </div>
                    
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex h-64 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                            <div ref={addToImageRefs2} className='w-[40%] h-full '>
                                <img src="/images/sectors/exh.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                            </div>
                            <div className='flex flex-col h-full justify-between w-[60%]'>
                                <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Exhibition & Relocation</div>
                                <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Exhibition cargo logistics involves the timely transport and setup of display...</div>
                                <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/exhibition-relocation' />
                            </div>
                        </div>
                    
                    </div>
                    
                </div>


        <div className={`bg-[#02123b] px-4 py-4 md:px-[4vw] md:py-[3vw] md:h-[15vw] gap-3 md:gap-0 flex flex-col md:flex-row justify-between -mb-1 items-center ${Clash.className}`}>
                <div className='text-white md:text-[4vw] text-[9vw] w-full  md:w-[40%]' >Partner with <br />
                Industry Experts</div>
                <div className='flex flex-col w-full md:w-[40%] gap-9 md:gap-4'>
                    <div className='text-[#c8c8c8] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw]'>Rely on our specialized expertise to manage your sector’s unique logistics challenges. Let’s create a solution that works for you.</div>
                    <Button bgColor='white' tColor='black' text='Contact us' link='/contact'/>

                </div>
            </div>

            <Footer/>
            </div>
        </>
  )
}

export default page