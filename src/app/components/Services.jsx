"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Clash, ClashM } from '../../../public/fonts/fonts'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from './Footer';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const imageRefs = useRef([]);
    // const imageRefs = useRef([]);
    const buttonRefs = useRef([]);
    const contentRefs = useRef([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);
  
  // ... other refs and states

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    
    // Longer delay to ensure everything is loaded
    const timer = setTimeout(() => {
        document.body.style.overflow = 'auto';
        setIsLoading(false);
        setIsReady(true);  // Signal that component is ready
        ScrollTrigger.refresh();
    }, 1500);  // Increased delay
    
    return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'auto';
    };
}, []);

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

    useEffect(() => {
        // Set initial states for images
        imageRefs.current.forEach((imageContainer) => {
            gsap.set(imageContainer, {
                width: '15%',
                height: '10vw'
            });
        });

        // Set initial states for buttons
        buttonRefs.current.forEach((button) => {
            gsap.set(button, {
                display: 'none',
                opacity: 0,
                y: 30
            });
        });
    }, []);


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
          start: "top bottom-=100",
          end: "top top+=100",
          toggleActions: "restart reverse restart reverse",  // This ensures proper reversing
          scrub: true,
        }
      });
  
      // Add animation to timeline - exactly as it was in your original code
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
        <div className='w-full h-screen'>
                
                <div className='md:h-full w-full h-[50vh]  '>
                    <div className=' h-[100%] md:h-[100%] pb-4 md:pb-0  bg-[#02123b]'>
                        <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row h-[100%] gap-6 md:gap-0 justify-end md:justify-between md:items-center text-white ${Clash.className}  `}>
                            <div className=' text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>Services</div>
                            <div className='text-base pr-[8vw]  md:w-[48%] md:text-[1.7vw] lg:text-[1.3vw] h-auto md:h-[50%] flex items-end'>Discover our full suite of logistics services, including air, sea, and supply chain solutions, tailored to streamline operations and deliver excellence across industries worldwide.</div>
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
                                        <div className='flex flex-col gap-[2vw]'  onMouseEnter={() => handleEnter(0)}
                                            onMouseLeave={() => handleLeave(0)}>
                                            <div className='text-[#02123b] text-[5vw] hidden md:block  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                            <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
                                            <div  className='block md:hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
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
                                        <div className='flex flex-col gap-[2vw]'  onMouseEnter={() => handleEnter(1)}
                                            onMouseLeave={() => handleLeave(1)}>
                                            <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                            <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
                                            <div  className='block md:hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
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
                                        <div className='flex flex-col gap-[2vw]'  onMouseEnter={() => handleEnter(2)}
                                            onMouseLeave={() => handleLeave(2)}>
                                            <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                            <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
                                            <div  className='block md:hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
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
                                        <div className='flex flex-col gap-[2vw]'  onMouseEnter={() => handleEnter(3)}
                                            onMouseLeave={() => handleLeave(3)}>
                                            <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                            <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
                                            <div  className='block md:hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
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
                                        <div className='flex flex-col gap-[2vw]'  onMouseEnter={() => handleEnter(4)}
                                            onMouseLeave={() => handleLeave(4)}>
                                            <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                            <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
                                            <div  className='block md:hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
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
                                        <div className='flex flex-col gap-[2vw]'  onMouseEnter={() => handleEnter(5)}
                                            onMouseLeave={() => handleLeave(5)}>
                                            <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                            <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
                                            <div  className='block md:hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
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
                                        <div className='flex flex-col gap-[2vw]'  onMouseEnter={() => handleEnter(6)}
                                            onMouseLeave={() => handleLeave(6)}>
                                            <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                            <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
                                            <div  className='block md:hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
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
                                        <div className='flex flex-col gap-[2vw]'  onMouseEnter={() => handleEnter(7)}
                                            onMouseLeave={() => handleLeave(7)}>
                                            <div className='hidden md:block text-[#02123b] text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] '>Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace.</div>
                                            <div ref={addToButtonRefs}  className='md:block hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
                                            <div  className='block md:hidden '><Button text='View More' tColor='#ffffff' bgColor='#02123B'  /></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            
                                </div>
                            
                            </div>
                    <div className='w-full h-auto bg-white md:p-[2vw] lg:p-[4vw] p-4 md:hidden'>
                        <div className='flex flex-col '>
                            <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                                <div className='w-[40%] h-full '>
                                    <img src="/images/services/service/air.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                                </div>
                                <div className='flex flex-col h-full justify-between w-[60%]'>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Air Freight</div>
                                    <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Experience precision and efficiency with our air freight services, designed to meet...</div>
                                    <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/air'  />
                                </div>
                            </div>
                        
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                                <div className='w-[40%] h-full '>
                                    <img src="/images/services/service/sea.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                                </div>
                                <div className='flex flex-col h-full justify-between w-[60%]'>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Sea Freight</div>
                                    <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Our Sea Freight Services are designed to simplify global trade by offering tailored...</div>
                                    <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/sea'  />
                                </div>
                            </div>
                        
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                                <div className='w-[40%] h-full '>
                                    <img src="/images/services/service/supply.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                                </div>
                                <div className='flex flex-col h-full justify-between w-[60%]'>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Supply Chain</div>
                                    <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>We redefine supply chain management through our integrated and...</div>
                                    <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/supply' />
                                </div>
                            </div>
                        
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex h-60 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                                <div className='w-[40%] h-full '>
                                    <img src="/images/services/service/project.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                                </div>
                                <div className='flex flex-col h-full justify-between w-[60%]'>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Project Logistics</div>
                                    <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Our team is dedicated to providing end-to-end solutions for transporting...</div>
                                    <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/projectlogistics'  />
                                </div>
                            </div>
                        
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex h-64 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                                <div className='w-[40%] h-full '>
                                    <img src="/images/services/service/customs.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                                </div>
                                <div className='flex flex-col h-full justify-between w-[60%]'>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Customs Brokerage</div>
                                    <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>Our customs brokerage solutions transcend basic compliance to deliver..</div>
                                    <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/customs' />
                                </div>
                            </div>
                        
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                                <div className='w-[40%] h-full '>
                                    <img src="/images/services/service/cross.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                                </div>
                                <div className='flex flex-col h-full justify-between w-[60%]'>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Cross Trade</div>
                                    <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>We excel in Cross Trade Logistics, enabling businesses to navigate the complexities...</div>
                                    <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/cross' />
                                </div>
                            </div>
                        
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex h-60 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                                <div className='w-[40%] h-full '>
                                    <img src="/images/services/service/charter.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                                </div>
                                <div className='flex flex-col h-full justify-between w-[60%]'>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Charter Services</div>
                                    <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>We deliver tailored charter services, ensuring your cargo moves seamlessly...</div>
                                    <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/charter' />
                                </div>
                            </div>
                        
                        </div>
                        <div className='flex flex-col '>
                            <div className='flex h-56 gap-4 bg-blac border-b-2 pt-3 pb-6'>
                                <div className='w-[40%] h-full '>
                                    <img src="/images/services/service/value.webp" className='h-full w-full object-cover rounded-xl' alt="" />
                                </div>
                                <div className='flex flex-col h-full justify-between w-[60%]'>
                                    <div className={`${ClashM.className} md:text-[4vw] text-[6vw] text-[#02123b] `}>Value Added Services</div>
                                    <div className={` ${Clash.className} text-[#02123b] text-[4vw]  sm:text-[3vw]  `}>We recognize that modern businesses require more than just...</div>
                                    <Button text='View More' tColor='#ffffff' bgColor='#02123B' link='/services/value'  />
                                </div>
                            </div>
                        
                        </div>
                        
                    </div>

                <div className={`bg-[#02123b] px-4 py-4 md:px-[4vw] md:py-[3vw] md:h-[15vw] md:flex-row flex-col gap-3 md:gap-0  -mb-1 md:-mb-0 flex justify-between items-center ${Clash.className}`}>
                    <div className='text-white md:text-[4vw] text-[9vw]  w-full  md:w-[40%]' >Ready to Optimize Your Logistics?</div>
                    <div className='flex flex-col w-full md:w-[40%] gap-9 md:gap-4'>
                        <div className='text-[#c8c8c8] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw]'>Let us handle your freight and logistics needs with precision and care. Reach out to discover how our tailored solutions can empower your business.</div>
                        <Button bgColor='white' tColor='black' text='Contact us'/>

                    </div>
                </div>

                <Footer/>
                </div>
  )
}

export default Services