"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Clash } from '../../../public/fonts/fonts'
import Timeline from '../components/Timeline'
import ImageCard from '../components/ImageCard'
import ToggleButton from '../components/Togglebutton'
import Scale from '../components/Barcode'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from "gsap/ScrollTrigger";
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
      // Move all cards right by 10%
      gsap.to(cards, {
        x: '30%',
        duration: 0.8,
        ease: 'power2.out'
      });
      // Alternating up/down movement
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? '35%' : '-35%',
          duration: 0.8,
          ease: 'power2.out'
        });
      });
    } else {
      // Reset positions
      gsap.to(cards, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    }
  }, [isActive]);

  // Function to add cards to the ref array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(()=>{
    gsap.fromTo([slider.current,containerRef.current],{
        translateX: 0,
      },
      {
        translateX: "-135%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 2,
          pin: true,
          // markers: true,
          anticipatePin: 1, // This helps prevent jarring pin start
          fastScrollEnd: true, // Improves performance during fast scrolling
          preventOverlaps: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            // Ensure smooth start of animation
            gsap.to(slider.current, {
              opacity: 1,
              duration: 0.3
            });
          },
        },
      }
      
    )
    return () => {
        pin.kill();
      };
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
              <div   className='md:pl-[2vw] lg:pl-[4vw] px-4 w-full overflow-hidden md:pt-[5vw] pt-[16vw] bg-[#02123b] pb-[16vw] md:pb-[10vw] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>

                <div className='h-screen'>
                <div  className='relative md:h-screen flex flex-col justify-around '>
                  {/* Regular image cards - add ref to each card */}
                  <div ref={slider} className='flex gap-[4vw] w-full relative pt-[10vw] md:pt-0 pb-[8vw] md:pb-0'>
                  <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
                    <img src="/images/images.png" className='w-full h-full object-cover rounded-xl' alt="" />
                  </div>
                  
                    
                    <ImageCard ref={addToRefs}/>
                   
                  

                  <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
                    <img src="/images/images.png" className='w-full h-full object-cover rounded-xl' alt="" />
                  </div>

                  <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
                    <img src="/images/images.png" className='w-full h-full object-cover rounded-xl' alt="" />
                  </div>

                  <div ref={addToRefs} className='md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
                    <img src="/images/images.png" className='w-full h-full object-cover rounded-xl' alt="" />
                  </div>
                  </div>
 <div className='w-full  flex justify-center absolute md:bottom-40 bottom-12 z-[999]'>
          <ToggleButton isActive={isActive} setIsActive={setIsActive} />
        </div>
                  <div ref={containerRef}  className='flex pt-[10vw] md:pt-0'>
            <Scale value={1} /> 
            <Scale value={1} /> 
            <Scale value={1} /> 
            <Scale value={1} /> 
            <Scale value={1} /> 
            <Scale value={1} /> 
            <Scale value={1} /> 
            <Scale value={1} /> 
                    </div>

                </div>
                </div>
             
              </div>
            </div>

           
            <div>
            <Footer/>
        </div>
            

          </div>
        </div>
       
      </div>
    </>
  )
}

export default Gallery
    
        {/* <div className='w-full flex justify-center'>
   {/* <div className='md:w-[30%] flex-shrink-0  lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw] '>
                            <div className='w-full h-full bg-[#333f5e] flex flex-col rounded-xl p-2 gap-1 md:gap-3 md:p-3 lg:p-4 lg:gap-5'>
                                <div className={`${Clash.className} text-white flex flex-col gap-[1px] lg:gap-[2px]`}>
                                    <div className={`${ClashM.className} text-[4.2vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] tracking-wider leading-[0.9] md:leading-none `}>Start</div>
                                    <div className='text-[3.6vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>12th January 1999</div>
                                </div>
                                <div
                                    className='w-full rounded-xl h-[70%] relative  bg-gray-700'
                                >
                                    <img src="/images/images.png" className='absolute z-[3] object-cover rotate-2 translate-y-2 w-full rounded-xl h-full' alt="" />
                                    <img src="/images/images2.png" className='absolute z-[1] rotate-12 translate-x-6 object-cover w-full rounded-xl h-full' alt="" />
                                    <img src="/images/images3.png" className='absolute z-[2] -rotate-12 -translate-x-6 object-cover w-full rounded-xl h-full' alt="" />
                                </div>

                            </div>
                        </div> */}
                         {/* <div className='flex bg-[#333f5e] rounded-full p-1 gap-1'>
                        <div className='flex '>
                            <div className='bg-white '></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='bg-white rounded-full flex justify-between items-center'>
                            <div className='bg-black w-1 h-2'></div>
                            <div className='bg-black w-1 h-2'></div>
                            <div className='bg-black w-1 h-2'></div>
                        </div>
                    </div> */}
                    
                {/* <div className='flex justify-center w-full gap-2 items-center'>
                    <div className='w-[0.14vw] bg-white h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.14vw] bg-[#333f5e] h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.14vw] bg-[#333f5e] h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.14vw] bg-[#333f5e] h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.14vw] bg-[#333f5e] h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.14vw] bg-[#333f5e] h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='text-white  h-[1.4vw]'>1</div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.14vw] bg-[#333f5e] h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.14vw] bg-[#333f5e] h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.14vw] bg-[#333f5e] h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.14vw] bg-[#333f5e] h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.14vw] bg-[#333f5e] h-[1.4vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='w-[0.13vw] bg-[#333f5e] h-[1.1vw]'></div>
                    <div className='text-white h-[1.4vw]'>2</div>


                </div> */}