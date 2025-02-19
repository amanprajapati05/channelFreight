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
import SectorAnimated from '../../components/SectorAnimated'
import AnimatedTextSection from '../../components/SectorAnimated'
import CircularProgress from '../../components/CircularProgress'
import AnimatedPharma from '../../components/AnimatedPharma'
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
    "Our services include temperature-",
    "controlled transport, expedited deliveries ",
    "for critical shipments, and meticulous ",
    "compliance with international GDP and ",
    "WHO standards."
  ];
  const text2 = [
    "Our services include",
    "temperature-controlled",
    "transport, expedited deliveries",
    "for critical shipments, and",
    "meticulous compliance with",
    "international GDP and WHO",
  ];

  const leftContent = [
    {
      title: "Strict Temperature Control",
      description: "Advanced cold chain solutions to maintain product integrity from pickup to delivery."
    },
    {
      title: "Secure Packaging & Handling",
      description: "Tamper-proof packaging and expert handling to ensure your shipments arrive in perfect condition."
    }
  ];
  
  const rightContent = [
    {
      title: "Regulatory Compliance",
      description: "Adhering to international pharmaceutical shipping guidelines for safe and legal transportation."
    },
    {
      title: "Real-Time Tracking",
      description: "24/7 shipment visibility to provide complete transparency and peace of mind."
    }
  ];

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
    <div ref={scrollContainerRef} data-scroll-container>
    <ServicesPage title={'Pharmaceuticals'} img1={'/images/sectors/imgp62.png'} img2={'/images/sectors/imgp61.png'} desc={'Pharmaceutical logistics is one of the most critical and regulated sectors, requiring precise handling of sensitive goods such as medicines, vaccines, APIs, and biological samples.'}/>

  <div className='w-full flex md:flex-row flex-col md:justify-between md:items-center md:p-[2vw] lg:p-[4vw] p-4 md:gap-0 gap-[3vw]'>
    <div  className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] md:w-[30%] w-full `} >Challenges & Solutions</div>
    <div className={`text-[#02123b] ${Clash.className} text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] md:w-[35%] w-full `}>We leverage cutting-edge technology for real-time shipment monitoring, ensuring zero compromises on quality.</div>
    </div>

       <div   className='md:flex flex md:w-full overflow-x-auto scrollbar-hide md:px-[2vw] lg:px-[4vw] px-4 md:mx-0 justify-between gap-[4vw] pt-[6vw] md:gap-0'> 
                    <AnimatedCard
    index={1}
    title="Temperature Integrity"
    content="Cold chain breaks can compromise product efficacy. We address this with advanced refrigerated units, IoT-enabled trackers, and robust contingency plans. "
    Clash={Clash}
  />
                     <AnimatedCard
    index={2}
    title="Urgent Deliveries"
    content="Time-critical shipments such as vaccines or clinical trial materials are handled with priority services, reducing lead times and ensuring on-time delivery."
    Clash={Clash}
  />

<AnimatedCard
    index={3}
    title="Regulatory Hurdles"
    content="Navigating the maze of customs and compliance globally can delay shipments. Our team of regulatory experts ensures seamless documentation and approvals."
    Clash={Clash}
  />
                  
                </div>  

                <div className='my-[10vw] lg:h-[50vw] md:h-[65vw] hidden md:block'>
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

              

                <div className=''>
                <AnimatedPharma
  leftContent={leftContent}
  rightContent={rightContent}
  fallingItems={[
    "/images/pharma/pills.png",
    "/images/pharma/syringe.png",
    "/images/pharma/bag.png",
    "/images/pharma/dropper.png",
  ]}
/>
                </div>
                
                <div className='pt-[20vw] md:pt-0'>
                <BottomSector 
  description="Our in-depth knowledge, technological edge, and unparalleled commitment to quality have made us the preferred logistics partner for pharmaceutical giants worldwide. "
  image1="/images/sectors/image-124.webp"
  image2="/images/sectors/image-125.webp"
  image3="/images/sectors/image-126.webp"
/>
                </div>
  
    <Footer/>
    </div>
    </>
  )
}

export default page      