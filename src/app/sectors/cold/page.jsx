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
import TruckAnimation from '../../components/TruckAnimation'

const page = () => {
  

  const text = [
    "With certified personnel, ADR-compliant",
    "vehicles, and a deep understanding of",
    "IMDG and IATA regulations, we ensure the",
    "highest levels of safety and compliance."
  ];

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'cold chain products'} img1={'/images/sectors/ig71.png'} img2={'/images/sectors/ig72.png'} desc={'Cold chain logistics is vital for industries such as healthcare, food, agriculture, and chemicals. It involves the seamless movement of perishable goods under strict temperature controls to preserve quality and safety.'}/>

    <div className='w-full -mt-1'>
    <TruckAnimation/>
    </div>
    <div className='w-full h-screen bg-[--blue3]'></div>
                <div className='  my-[10vw]'>
                <AnimatedTextSection
      textLines={text}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
                </div>
                
                <div>
                  <BottomSector/>
                </div>
  
    <Footer/>
    </>
  )
}

export default page      