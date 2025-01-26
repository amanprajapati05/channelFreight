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
import BottomSector from '../../components/BottomSector'
import AnimatedTextSection from '../../components/SectorAnimated'
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

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
  const text = [
    "With certified personnel, ADR-compliant ",
    "vehicles, and a deep understanding of  ",
    "IMDG and IATA regulations, we ensure the ",
    "highest levels of safety and compliance."
  ];
  const text2 = [
    "With certified personnel,",
    "ADR-compliant vehicles, and",
    "a deep understanding of",
    "IMDG and IATA regulations,",
    "we ensure the highest levels",
    " of safety and compliance.",

  ];

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
<div ref={scrollContainerRef} data-scroll-container>
    <ServicesPage title={'Hazardous Chemicals'} img1={'/images/sectors/ig71.png'} img2={'/images/sectors/ig72.png'} desc={'Transporting hazardous cargo involves high-stakes logistics due to the inherent risks to people, property, and the environment. These shipments require specialized handling, adherence to safety regulations, and robust contingency planning.'}/>

  <div className='w-full flex md:flex-row flex-col md:justify-between md:items-center md:p-[2vw] lg:p-[4vw] p-4 md:gap-0 gap-[3vw]'>
    <div  className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] md:w-[30%] w-full `} >Challenges & Solutions</div>
    <div className={`text-[#02123b] ${Clash.className} text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] md:w-[35%] w-full `}>Channel Freight excels in the safe and efficient transportation of hazardous cargo, including chemicals, flammables, and radioactive materials.</div>
    </div>

       <div   className='md:flex flex overflow-x-auto scrollbar-hide md:w-full md:px-[2vw] lg:px-[4vw] px-4 md:mx-0 justify-between gap-[1.7vw] md:gap-0'> 
                    <AnimatedCard
    index={1}
    title="Safety Risks"
    content="Comprehensive training and risk assessments ensure zero incidents."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Complex Documentation"
    content="Our team streamlines the approval process, minimizing delays."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Emergency Management"
    content="Predefined response protocols handle any unforeseen incidents with efficiency and care."
    Clash={Clash}
  />

                  
                </div>  

                <div className='my-[10vw] hidden md:block'>
                <AnimatedTextSection
      textLines={text}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
                </div>
                <div className='my-[10vw] block md:hidden '>
                <AnimatedTextSection
      textLines={text2}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
                </div>
                
                <div>
                <BottomSector 
  description="Clients trust us for our precision, innovation, and global expertise. With Channel Freight, you’re not just shipping goods—you’re safeguarding lives."
  image1="/images/sectors/h1.webp"
  image2="/images/sectors/h3.webp"
  image3="/images/sectors/h2.webp"
/>
                </div>
  
    <Footer/>
    </div>
    </>
  )
}

export default page      