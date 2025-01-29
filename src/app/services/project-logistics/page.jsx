"use client"
import React, { useEffect, useRef, useState } from 'react'
import ServicesPage from '../../components/ServicesPage'
import Navbar from '../../components/Navbar'
import { Clash, ClashM } from '../../../../public/fonts/fonts'
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import AnimatedCard from '../../components/AnimatedCard'
import AnimatedTextSection from '../../components/SectorAnimated'
import AirplaneCanvas from '../../components/AirplaneCanvas'
import AnimatedContent from '../../components/AnimatedServiceContent'
import ServicesSlider from '../../components/ServicesSlider'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Counter from '../../components/Counter'
import ServicesBottom from '../../components/ServicesBottom'

gsap.registerPlugin(ScrollTrigger);

const page = () => {
      const slider = useRef();
      const triggerRef = useRef();
      const [isLoading, setIsLoading] = useState(true);
      const [isReady, setIsReady] = useState(false);
      const [locomotiveInstance, setLocomotiveInstance] = useState(null);
      const scrollContainerRef = useRef(null);

      //  useEffect(() => {
      //         const scrollInstance = new locomotiveScroll({
      //           el: scrollContainerRef.current,
      //           smooth: true,
      //           smoothMobile: true,
      //           multiplier: 0.1, // Adjust the speed of the scrolling (lower is slower)
      //           lerp: 0, // Adjust the easing (lower is smoother)
      //         });
          
      //         return () => {
      //           if (scrollInstance) scrollInstance.destroy();
      //         };
      //       }, []);

      // useEffect(() => {
      //   // Force scroll to top
      //   window.scrollTo(0, 0);
        
      //   // Disable scroll initially
      //   document.body.style.overflow = 'hidden';
        
      //   // Initialize locomotive scroll
      //   const scrollInstance = new locomotiveScroll({
      //     el: scrollContainerRef.current,
      //     smooth: true,
      //     smoothMobile: true,
      //     multiplier: 0.1,
      //     lerp: 0,
      //   });
    
      //   setLocomotiveInstance(scrollInstance);
        
      //   // Initially disable scroll
      //   scrollInstance.stop();
        
      //   // Add delay before starting animations
      //   const timer = setTimeout(() => {
      //     setIsLoading(false);
      //     setIsReady(true);
      //     scrollInstance.start();
      //     gsap.to(scrollContainerRef.current, {
      //       opacity: 1,
      //       duration: 0.5,
      //     });
      //   }, 2000); // 2 second delay
        
      //   return () => {
      //     clearTimeout(timer);
      //     if (scrollInstance) {
      //       scrollInstance.destroy();
      //     }
      //     document.body.style.overflow = 'auto';
      //   };
      // }, []);


      useEffect(() => {
        const timer = setTimeout(() => {
          const scrollInstance = new locomotiveScroll({
            el: scrollContainerRef.current,
            smooth: true,
            smoothMobile: true,
            multiplier: 0.1,
            lerp: 0,
          });
      
          // Update ScrollTrigger when locomotive scroll updates
          scrollInstance.on('scroll', ScrollTrigger.update);
      
          return () => {
            scrollInstance.destroy();
            clearTimeout(timer);
          };
        }, 2000); // Small delay for DOM loading
      }, []);

const text = [
    "Whether it’s an industrial park setup, a ",
    "power plant installation, or an offshore ",
    "infrastructure build, we bring over two",
    "decades of expertise to deliver on time and ",
    "within budget."
  ];

  const text2 = [
    "Whether it’s an industrial",
    "park setup, a power plant",
    "installation, or an offshore ",
    "infrastructure build, we",
    "bring over two decades of",
    "expertise to deliver on time",
    "and within budget."
  ];

  

  useGSAP(()=>{

 // Only run when ready

    gsap.fromTo(slider.current,{
        translateX: 0,
      },
      {
        translateX: "-30%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1500 top",
          scrub: 0.6,
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
        // pin.kill();
      };
})


const slides = [
  {
    title: "Strategic Partnerships",
    description: "We collaborate with industry leaders to offer competitive pricing and innovative transport solutions.",
    image: "/images/services/p1.webp"
  },
  {
    title: "Commitment to Safety",
    description: "We adhere to stringent safety standards, ensuring the secure handling and delivery of your valuable assets.",
    image: "/images/services/p2.webp"
  },
  {
    title: "Global Reach with Local Expertise",
    description: "Operating across continents, we combine global connectivity with localized insights to deliver efficient services tailored to your project's needs.",
    image: "/images/services/p3.webp"
  },
  
];

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
    <div ref={scrollContainerRef} data-scroll-container>
    <ServicesPage title={'project logistics'} img1={'/images/services/img3.png'} img2={'/images/services/img32.png'} desc={'Our team is dedicated to providing end-to-end solutions for transporting Over-Dimensional Cargo (ODC), Super-ODC, and other heavy lift equipment critical for large-scale industrial, commercial, and infrastructural projects.'}/>
    
    <div ref={triggerRef} className='md:p-[2vw] hidden md:block lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex  md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[#02123b] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Seamless Cargo Solutions</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
            Discover the specialized services that ensure seamless execution of complex logistics projects worldwide.
            </div>
            <div>
                <Button text='Get in Touch' link='/contact' bgColor='#02123b' tColor='#ffffff' />
            </div>
            </div>
        </div>
        <div>
<div  className='w-full h-full overflow-hidden pt-[2vw]'>
        <div ref={slider}   className='flex md:w-full flex-nowrap   md:mx-0 justify-between gap-[1.7vw] md:gap-[2vw]'>   
             
                    <AnimatedCard
    index={1}
    title="Comprehensive Project Management"
    content="From site surveys and feasibility studies to engineering analysis, we meticulously plan every aspect of your shipment."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Specialized Equipment & Techniques"
    content="We leverage state-of-the-art equipment, including hydraulic axles, flat racks, and modular trailers, tailored for oversized and over-weighted goods."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Multimodal Transportation Options"
    content="Whether by sea, road, rail, or barge, our logistics network provides flexible and reliable transportation solutions to meet diverse project requirements. "
    Clash={Clash}
  />
    <AnimatedCard
    index={4}
    title="Sector-Specific Expertise"
    content="We have supported industries including energy, construction, heavy manufacturing, and technology."
    Clash={Clash}
  />
 

                  
                </div>
                </div>
        </div>

     
      </div>
    
    </div>
    <div  className='md:p-[2vw] md:hidden lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex  md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[#02123b] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Seamless Cargo Solutions</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
            Discover the specialized services that ensure seamless execution of complex logistics projects worldwide.
            </div>
            <div>
                <Button text='Get in Touch' link='/contact' bgColor='#02123b' tColor='#ffffff' />
            </div>
            </div>
        </div>
        <div>
<div  className='w-full h-full overflow-hidden pt-[2vw]'>
        <div   className='flex md:w-full flex-nowrap   md:mx-0 justify-between gap-[1.7vw] md:gap-[2vw]'>   
             
                    <AnimatedCard
    index={1}
    title="Comprehensive Project Management"
    content="From site surveys and feasibility studies to engineering analysis, we meticulously plan every aspect of your shipment."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Specialized Equipment & Techniques"
    content="We leverage state-of-the-art equipment, including hydraulic axles, flat racks, and modular trailers, tailored for oversized and over-weighted goods."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Multimodal Transportation Options"
    content="Whether by sea, road, rail, or barge, our logistics network provides flexible and reliable transportation solutions to meet diverse project requirements. "
    Clash={Clash}
  />
    <AnimatedCard
    index={4}
    title="Sector-Specific Expertise"
    content="We have supported industries including energy, construction, heavy manufacturing, and technology."
    Clash={Clash}
  />
 

                  
                </div>
                </div>
        </div>

     
      </div>
    
    </div>

                       <div className='hidden md:block'>
                        <AnimatedTextSection
      textLines={text}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
    </div>
    <div className='md:hidden block'>
                        <AnimatedTextSection
      textLines={text2}
      font={Clash.className}
      spacing="my-0"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
    </div>

     <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4 block '>
     <ServicesSlider 
  heading="Benefits of Choosing Us" 
  slides={slides} 
/>
    </div>

    <div>
      <ServicesBottom/>
    </div>

                        
   
    <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
        <div className={`${Clash.className} text-[#02123b] flex flex-col w-full items-center`}>
            <div className='md:text-[4vw] text-[9vw] text-center'>Your Trusted Partner for ODC Cargo</div>
            <div className='text-[4vw] md:text-[1.3vw] text-[#333f5e] text-center '>Simplifying global supply chains with precision, innovation, and expertise.</div>
        </div>
        <div className='flex w-full md:h-[28vw] h-[250vw] md:gap-0 gap-4 md:flex-row flex-col justify-between my-[4vw]'>
          
            <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
                <img src='/images/services/card3.webp' className='absolute w-full  inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Tailored Solutions</div>
            </div>
             <div className='md:w-[32.5%] w-full h-full rounded-2xl  '> 
                  <div className='flex flex-col h-full justify-between'>
                  <div className={`${Clash.className} w-full h-[50%] rounded-2xl border relative border-[#c8c8c8] overflow-hidden flex justify-between text-[--blue2] md:p-[1.5vw] p-[3vw] `}>
      <video 
          className="w-full h-full object-cover scale-[3] absolute right-52 opacity-25 z-[-1]"
          src="/videos/air.mp4"
          muted
          playsInline
          autoPlay
          loop
      />
  
      <div className={`${Clash.className} text-[#02123b] lg:text-[1vw] md:text-[1.8vw] text-[3vw]  `}>Global Operations</div>
      <div className='h-full flex flex-col justify-end '>
          {/* <div className={`${Clash.className} text-[#02123b] lg:text-[3vw] md:text-[3.5vw] text-[6vw] text-right md:text-left`}>000+</div> */}
          <Counter />
          <div className={`${Clash.className} lg:text-[1vw] md:text-[1.8vw] text-[3vw] text-[#02123b] leading-[0] pb-[2vw] md:pb-0`}>completed annually</div>
      </div>
  
  </div>
                  <div className=' h-[45%] bg-[#02123b] rounded-2xl md:px-[1vw] px-[3vw] '>
                      <div className={`${Clash.className} text-white flex w-full h-full items-center justify-between `}>
                        <div className='md:text-[8vw] text-[24vw] '>20+</div>
                        <div className='w-[40%] text-[4.5vw] py-2 md:py-0 sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-center'>years of expertise to deliver on time and within budget.</div>
                      </div>
                  </div>
                  </div>
              </div>
            <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
            <img src='/images/services/card4.webp' className='w-full  absolute inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Unique Logistics</div>
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default page      