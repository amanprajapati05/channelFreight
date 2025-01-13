"use client"
import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import { Clash,ClashM } from '../../../public/fonts/fonts'
import Button from '../components/Button'
import Footer from '../components/Footer'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const page = () => {

    const imageRefs = useRef([]);
    const buttonRefs = useRef([]);
    const contentRefs = useRef([]);

    const addToImageRefs = (el) => {
      if (el && !imageRefs.current.includes(el)) {
        imageRefs.current.push(el);
      }
    };
   
    
    const addToButtonRefs = (el) => {
        if (el && !buttonRefs.current.includes(el)) {
            buttonRefs.current.push(el);
        }
    };

    const handleEnter = (index) => {
        if (buttonRefs.current[index]) {
            // First make the button visible
            gsap.set(buttonRefs.current[index], {
                display: 'block'
            });
            // Then animate it
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
                    // Hide the button after animation completes
                    gsap.set(buttonRefs.current[index], {
                        display: 'none'
                    });
                }
            });
        }
    };
    

  useGSAP(() => {
      imageRefs.current.forEach((imageContainer, index) => {
        // Set initial height for all cards
        gsap.set(imageContainer.parentElement, {
          height: 'auto' // This ensures each card takes its natural height
        });
    
        // Create timeline for each card
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imageContainer.parentElement,
            markers: true,
            start: "top bottom-=100",
            end: "top top+=100",
            toggleActions: "play none none reverse",
            scrub: true,
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
    
        // Add a scroll trigger to handle the next card
        if (index < imageRefs.current.length - 1) {
          ScrollTrigger.create({
            trigger: imageContainer.parentElement,
            start: "bottom bottom",
            onEnter: () => {
              // Only after current card is fully visible, enable next card's animation
              const nextCard = imageRefs.current[index + 1];
              if (nextCard) {
                gsap.set(nextCard.parentElement, { visibility: "visible" });
              }
            }
          });
    
          // Initially hide next card
          if (index > 0) {
            gsap.set(imageContainer.parentElement, { visibility: "hidden" });
          }
        }
      });
    
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
    <div className='w-full'>
         
         <div className='md:h-screen w-full h-[50vh]  z-['>
             <div className=' h-[100%] md:h-[100%] pb-4 md:pb-0  bg-[--blue3]'>
                 <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row h-[100%] gap-6 md:gap-0 justify-end md:justify-between md:items-center text-white ${Clash.className}  `}>
                     <div className=' text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>Sector expertise</div>
                     <div className='text-base pr-[8vw]  md:w-[48%] md:text-[1.7vw] lg:text-[1.3vw] h-auto md:h-[50%] flex items-end'>From pharmaceuticals to hazardous goods, explore our specialized logistics expertise designed to meet the unique demands of diverse industries with precision, safety, and reliability.</div>
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

     <div className='w-full bg-white md:p-[2vw] lg:p-[4vw] p-4 '>
                <div className='flex flex-col gap-4'>
                <div className='relative' style={{ height: '26vw' }}>
                <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                    <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                        <img src="/images/img138.png" className='w-full h-full' alt="" />
                    </div>
                    <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                        <div className={`${ClashM.className} text-[3vw] text-[--blue3] `}>Air Freight</div>
                        <div className='flex flex-col gap-[2vw]'  onMouseEnter={() => handleEnter(0)}
                            onMouseLeave={() => handleLeave(0)}>
                            <div className='text-[--blue3] text-[1.4vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                            <div    ref={addToButtonRefs}   className='cursor-pointer flex xl:text-[1vw] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] w-fit bg-[--blue3] text-[#ffffff]  px-4 py-2 rounded-full items-center justify-center'  style={{ opacity: 0,display: 'none', transform: 'translateY(30px)' }}>View More</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='relative' style={{ height: '26vw' }}>
                <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                    <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                        <img src="/images/img138.png" className='w-full h-full' alt="" />
                    </div>
                    <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                        <div className={`${ClashM.className} text-[3vw] text-[--blue3] `}>Air Freight</div>
                        <div className='flex flex-col gap-[2vw]'  onMouseEnter={() => handleEnter(1)}
                            onMouseLeave={() => handleLeave(1)}>
                            <div className='text-[--blue3] text-[1.4vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                            <div    ref={addToButtonRefs}   className='bg-[--blue3] px-2 py-1 w-fit rounded-full text-white'  style={{ opacity: 0,display: 'none', transform: 'translateY(30px)' }}>View More</div>
                        </div>
                    </div>
                </div>
                </div>

                {/* <div className='relative' style={{ height: '26vw' }}>
                <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                    <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                        <img src="/images/img138.png" className='w-full h-full' alt="" />
                    </div>
                    <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                        <div className={`${ClashM.className} text-[3vw] text-[--blue3] `}>Air Freight</div>
                        <div className='flex flex-col gap-[3vw]'>
                            <div className='text-[--blue3] text-[1.4vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                            <div className='bg-[--blue3] px-2 py-1 w-fit rounded-full text-white '>View More</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='relative' style={{ height: '26vw' }}>
                <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                    <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                        <img src="/images/img138.png" className='w-full h-full' alt="" />
                    </div>
                    <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                        <div className={`${ClashM.className} text-[3vw] text-[--blue3] `}>Air Freight</div>
                        <div className='flex flex-col gap-[3vw]'>
                            <div className='text-[--blue3] text-[1.4vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                            <div className='bg-[--blue3] px-2 py-1 w-fit rounded-full text-white '>View More</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='relative' style={{ height: '26vw' }}>
                <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                    <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                        <img src="/images/img138.png" className='w-full h-full' alt="" />
                    </div>
                    <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                        <div className={`${ClashM.className} text-[3vw] text-[--blue3] `}>Air Freight</div>
                        <div className='flex flex-col gap-[3vw]'>
                            <div className='text-[--blue3] text-[1.4vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                            <div className='bg-[--blue3] px-2 py-1 w-fit rounded-full text-white '>View More</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='relative' style={{ height: '26vw' }}>
                <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                    <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                        <img src="/images/img138.png" className='w-full h-full' alt="" />
                    </div>
                    <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                        <div className={`${ClashM.className} text-[3vw] text-[--blue3] `}>Air Freight</div>
                        <div className='flex flex-col gap-[3vw]'>
                            <div className='text-[--blue3] text-[1.4vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                            <div className='bg-[--blue3] px-2 py-1 w-fit rounded-full text-white '>View More</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='relative' style={{ height: '26vw' }}>
                <div   className='w-full  flex gap-[8vw] border-b border-black pb-4'>
                    <div ref={addToImageRefs} className='w-[50%] h-[25vw] relative'>
                        <img src="/images/img138.png" className='w-full h-full' alt="" />
                    </div>
                    <div className={`flex flex-col w-[50%] ${Clash.className} justify-between `}>
                        <div className={`${ClashM.className} text-[3vw] text-[--blue3] `}>Air Freight</div>
                        <div className='flex flex-col gap-[3vw]'>
                            <div className='text-[--blue3] text-[1.4vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                            <div className='bg-[--blue3] px-2 py-1 w-fit rounded-full text-white '>View More</div>
                        </div>
                    </div>
                </div>
                </div> */}
                </div>
               
            </div>


        <div className={`bg-[--blue3] px-4 py-4 md:px-[4vw] md:py-[3vw] md:h-[15vw] gap-3 md:gap-0 flex flex-col md:flex-row justify-between items-center ${Clash.className}`}>
                <div className='text-white md:text-[4vw] text-[9vw] w-full  md:w-[40%]' >Partner with <br />
                Industry Experts</div>
                <div className='flex flex-col w-full md:w-[40%] gap-9 md:gap-4'>
                    <div className='text-[#c8c8c8] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw]'>Rely on our specialized expertise to manage your sector’s unique logistics challenges. Let’s create a solution that works for you.</div>
                    <Button bgColor='white' tColor='black' text='Contact us'/>

                </div>
            </div>

            <Footer/>
        </>
  )
}

export default page