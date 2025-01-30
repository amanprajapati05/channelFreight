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


const page = () => {
  

  const text = [
    "From transportation to on-site assembly,  ",
    "we specialize in handling fragile and high-",
    "value items, ensuring timely and damage-",
    "free delivery to venues worldwide."
  ];

  const text2 =[
    "From transportation to on-",
    "site assembly, we specialize in",
    "handling fragile and high-value",
    "items, ensuring timely and",
    "damage-free delivery to",
    "venues worldwide."

  ]

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'Exhibition & Relocation'} img1={'/images/sectors/imge61.png'} img2={'/images/sectors/imge62.png'} desc={'Exhibition cargo logistics involves the timely transport and setup of display materials for trade shows and events. Precision timing and damage-free delivery are critical to success.'}/>

  <div className='w-full flex md:flex-row flex-col md:justify-between md:items-center md:p-[2vw] lg:p-[4vw] p-4 md:gap-0 gap-[3vw]'>
    <div  className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] md:w-[30%] w-full `} >Our Expertise</div>
    <div className={`text-[#02123b] ${Clash.className} text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] md:w-[35%] w-full `}>Comprehensive, temperature-controlled logistics solutions ensuring the safety and integrity of sensitive goods throughout the entire supply chain.</div>
    </div>

       <div   className='md:flex flex md:w-full overflow-x-auto scrollbar-hide md:px-[2vw] lg:px-[4vw] px-4 md:mx-0 justify-between gap-[4vw] pt-[6vw] md:gap-0'> 
                    <AnimatedCard
    index={1}
    title="Cargo Security"
    content="Customized packaging and real-time tracking protect valuable assets. "
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Time Constraints"
    content="Detailed pre-planning and express services ensure punctuality. "
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Site Coordination"
    content="Our dedicated teams manage on-ground logistics for smooth installations. "
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
  description="We’ve handled logistics for prestigious global exhibitions, earning a reputation for reliability, efficiency, and excellence."
/>
                </div>
  
    <Footer/>
    </>
  )
}

export default page      