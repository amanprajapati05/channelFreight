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
    "We manage the complexities of this sector",
    "with a robust portfolio of services that",
    "include heavy-lift transport, multimodal",
    "solutions, and secure packaging for high- ",
    "value items."
  ];
  const text2 = [
    "We manage the complexities",
    "of this sector with a robust",
    "portfolio of services that",
    "include heavy-lift transport,",
    " multimodal solutions, and",
    "secure packaging for high-",
    "value items."
  ];

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
    <div ref={scrollContainerRef} data-scroll-container>
    <ServicesPage title={'Engineering'} img1={'/images/sectors/imgen1.png'} img2={'/images/sectors/imgen2.png'} desc={'The engineering industry is the backbone of modern infrastructure and technology, encompassing everything from heavy machinery and industrial equipment to intricate components and tools.'}/>

  <div className='w-full flex md:flex-row flex-col md:justify-between md:items-center md:p-[2vw] lg:p-[4vw] p-4 md:gap-0 gap-[3vw]'>
    <div  className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] md:w-[30%] w-full `} >Challenges & Solutions</div>
    <div className={`text-[#02123b] ${Clash.className} text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] md:w-[35%] w-full `}>Our expertise spans sectors like energy, infrastructure, and industrial projects.</div>
    </div>

       <div   className='md:flex flex md:w-full overflow-x-auto scrollbar-hide md:px-[2vw] lg:px-[4vw] px-4 md:mx-0 justify-between gap-[4vw] pt-[6vw] md:gap-0'> 
                    <AnimatedCard
    index={1}
    title="Handling Oversized & Heavy Cargo"
    content="We utilize specialized equipment such as cranes, flatbeds, and heavy-lift vehicles, coupled with precise route surveys and load planning, to safely transport oversized items."
    Clash={Clash}
  />
                     <AnimatedCard
    index={2}
    title="Protecting Fragile & High-Value Components"
    content="Our advanced packaging solutions and real-time monitoring systems safeguard sensitive engineering goods, ensuring they arrive intact."
    Clash={Clash}
  />

<AnimatedCard
    index={3}
    title="Coordinating Complex Projects"
    content="Our project logistics team seamlessly integrates various logistics modes and processes, ensuring on-time and budget-friendly deliveries, even for the most challenging projects."
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
  description="With us, clients can trust that their most critical assets are in expert hands, delivered with precision and reliability."
  image1="/images/sectors/e1.webp"
  image2="/images/sectors/e2.webp"
  image3="/images/sectors/e3.webp"
/>
                </div>
  
    <Footer/>
    </div>
    </>
  )
}

export default page      