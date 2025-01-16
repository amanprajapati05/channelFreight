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

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'Pharma'} img1={'/images/sectors/imgp62.png'} img2={'/images/sectors/imgp62.png'} desc={'Pharmaceutical logistics is one of the most critical and regulated sectors, requiring precise handling of sensitive goods such as medicines, vaccines, APIs, and biological samples.'}/>

  <div className='w-full flex md:flex-row flex-col md:justify-between md:items-center md:p-[2vw] lg:p-[4vw] p-4 md:gap-0 gap-[3vw]'>
    <div  className={`text-[--blue3] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] md:w-[30%] w-full `} >Challenges & Solutions</div>
    <div className={`text-[--blue3] ${Clash.className} text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] md:w-[35%] w-full `}>We leverage cutting-edge technology for real-time shipment monitoring, ensuring zero compromises on quality.</div>
    </div>

       <div   className='md:flex flex md:w-full overflow-x-auto scrollbar-hide md:px-[2vw] lg:px-[4vw] px-4 md:mx-0 justify-between gap-[1.7vw] md:gap-0'> 
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
  description="Our in-depth knowledge, technological edge, and unparalleled commitment to quality have made us the preferred logistics partner for pharmaceutical giants worldwide. "
  image1="/images/sectors/ph1.webp"
  image2="/images/sectors/ph3.webp"
  image3="/images/sectors/ph2.webp"
/>
                </div>
  
    <Footer/>
    </>
  )
}

export default page      