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

const page = () => {
      const slider = useRef();
      const triggerRef = useRef();

const text = [
    "When traditional logistics options fall  ",
    "short or deadlines demand innovative  ",
    "solutions, our bespoke air and sea ",
    "charter services step in to provide ",
    "reliability and flexibility. "
  ];

  const text2 = [
    "When traditional logistics",
    "options fall short or deadlines",
    "demand innovative solutions,",
    "our bespoke air and sea",
    "charter services step in to",
    "provide reliability and flexibility.",
  ];

  

  useGSAP(()=>{
    gsap.fromTo(slider.current,{
        translateX: 0,
      },
      {
        translateX: "-80%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1500 top",
          scrub: 0.6,
          pin: true,
       
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
    title: "Cost Efficiency",
    description: "Streamline your operations by outsourcing specialized tasks to reduce overheads",
    image: "/images/services/va1.webp"
  },
  {
    title: "Improved Customer Satisfaction",
    description: "Customized solutions enhance brand perception and reliability. ",
    image: "/images/services/va2.webp"
  },
  {
    title: "Scalability",
    description: "Adapt quickly to market fluctuations with our flexible service options.",
    image: "/images/services/va3.webp"
  },
  {
    title: "End-to-End Integration",
    description: "All services are designed to integrate seamlessly with your existing supply chain.",
    image: "/images/services/va4.webp"
  },
  
];

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'value added services'} img1={'/images/services/img5.png'} img2={'/images/services/img52.png'} desc={'At Channel Freight Logistics India, we recognize that modern businesses require more than just transportation; they need comprehensive, tailored solutions that enhance efficiency and customer satisfaction.'}/>
    
    <div ref={triggerRef} className='md:p-[2vw] hidden md:block lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex  md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[--blue3] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Enhancing Every Shipment</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
         Delivering tailored solutions that go beyond logistics, adding efficiency and excellence to your supply chain.
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
    title="Specialized Packaging "
    content="Custom-designed packaging to protect fragile, perishable, and high-value items."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Insurance Coverage"
    content="Comprehensive cargo insurance to safeguard your goods against unforeseen risks."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Inventory Management"
    content="Streamlined solutions for tracking and optimizing stock levels efficiently."
    Clash={Clash}
  />
    <AnimatedCard
    index={4}
    title="Kitting & Labeling"
    content="Personalized assembly and labeling to meet your business requirements."
    Clash={Clash}
  />        
                </div>
                </div>
        </div>

     
      </div>
    
    </div>
    <div  className='md:p-[2vw] md:hidden lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex  md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[--blue3] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Enhancing Every Shipment</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
         Delivering tailored solutions that go beyond logistics, adding efficiency and excellence to your supply chain.
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

     <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4 '>
     <ServicesSlider 
  heading="Benefits of Choosing Us" 
  slides={slides} 
/>
    </div>



                        
   
    <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
        <div className={`${Clash.className} text-[--blue3] flex flex-col w-full items-center`}>
            <div className='md:text-[4vw] text-[9vw] text-center'>Added Value, Every Step</div>
            <div className='text-[4vw] md:text-[1.3vw] text-[#333f5e] text-center '>Enhance logistics with premium services tailored to your unique needs.</div>
        </div>
        <div className='flex w-full md:h-[28vw] h-[250vw] md:gap-0 gap-4 md:flex-row flex-col justify-between my-[4vw]'>
          
            <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
                <img src='/images/card1.webp' className='absolute w-full  inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Inventory Solutions</div>
            </div>
            <div className='md:w-[32.5%] w-full h-full rounded-2xl  '> 
                <div className='flex flex-col h-full justify-between'>
                <div className={`${Clash.className} w-full h-[32%] rounded-2xl border relative border-[#c8c8c8] overflow-hidden flex justify-between text-[--blue2] md:p-[1.5vw] p-[3vw] `}>
    <video 
        className="w-full h-full object-cover scale-[3] absolute right-52 opacity-25 z-[-1]"
        src="/videos/air.mp4"
        muted
        playsInline
        autoPlay
        loop
    />

    <div className={`${Clash.className} text-[--blue3] lg:text-[1vw] md:text-[1.8vw] text-[3vw]  `}>Annual Business</div>
    <div className='h-full flex flex-col justify-end '>
        <div className={`${Clash.className} text-[--blue3] lg:text-[3vw] md:text-[3.5vw] text-[6vw] text-right md:text-left`}>000+</div>
        <div className={`${Clash.className} lg:text-[1vw] md:text-[1.8vw] text-[3vw] text-[--blue3] leading-[0] pb-[2vw] md:pb-0`}>Shipments Insured</div>
    </div>

</div>
                <div className=' h-[64%] bg-[--blue3] rounded-2xl md:px-[1vw] px-[3vw] '>
                    <div className={`${Clash.className} text-[#c8c8c8] lg:text-[1vw] md:text-[1.8vw] text-[3vw] md:py-[1vw] py-[3vw]`}>Service That Cares</div>
                    <div className='flex justify-center items-center h-[90%] relative'>
                        <div className={` md:text-[1.6vw] text-[4vw] text-white absolute  top-14 left-0   `}>
                            <img src="/images/inv.png" alt="" />
                        </div>
                        <div className={`${ClashM.className} px-3   md:text-[1.6vw] md:text-center text-[4vw] text-white `}>Adding value, ensuring excellence every time.</div>
                        <div className='absolute bottom-14 right-0 scale-x-[-1] scale-y-[-1]'><img  className='' src="/images/inv.png" alt="" /></div>
                    </div>
                </div>
                </div>
            </div>
            <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
            <img src='/images/card2.webp' className='w-full  absolute inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Custom Packaging</div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page      