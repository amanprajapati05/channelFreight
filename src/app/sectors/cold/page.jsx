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
    "We offer industry-leading cold chain ",
    "logistics, integrating refrigerated transport, ",
    "temperature-controlled warehouses, and ",
    "advanced packaging solutions."
  ];

  
  const text2 = [
    "We offer industry-leading cold",
    "chain logistics, integrating",
    "refrigerated transport,",
    "temperature-controlled",
    "warehouses, and advanced",
    "packaging solutions."
  ];

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'cold chain products'} img1={'/images/sectors/ig61.png'} img2={'/images/sectors/ig62.png'} desc={'Cold chain logistics is vital for industries such as healthcare, food, agriculture, and chemicals. It involves the seamless movement of perishable goods under strict temperature controls to preserve quality and safety.'}/>

    <div className='w-full -mt-1'>
    <TruckAnimation/>
    </div>
    <div className='w-full h-screen bg-[#02123b]'></div>

                <div className='  my-[10vw] hidden md:block'>
                <AnimatedTextSection
      textLines={text}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
                </div>
                <div className='  my-[10vw] block md:hidden'>
                <AnimatedTextSection
      textLines={text2}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
                </div>
                
                <div>
                <BottomSector 
  description="Clients trust us for our precision, innovation, and global expertise. With Channel Freight, your perishable goods are in the safest hands, delivered fresh and on time, every time."
  image1="/images/sectors/cc1.webp"
  image2="/images/sectors/cc3.webp"
  image3="/images/sectors/cc2.webp"
/>
                </div>
  
    <Footer/>
    </>
  )
}

export default page      