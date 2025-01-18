"use client"
import React, { useState } from 'react'
import ServicesPage from '../../components/ServicesPage'
import Navbar from '../../components/Navbar'
import { Clash } from '../../../../public/fonts/fonts'
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Footer from '../../components/Footer'
import ServicesSlider from '../../components/ServicesSlider'

const page = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'supply chain solutions'} img1={'/images/services/img1.png'} img2={'/images/services/img12.png'} desc={'From warehousing and distribution to customized fulfillment and streamlined inventory control, we ensure every link in your supply chain operates seamlessly.'}/>
    
    <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex md:flex-row flex-col justify-between ${Clash.className} text-[#02123b]`}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[50%]'>Driving Efficiency <br /> Across Borders</div>
          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[30%]'>Comprehensive and tailored supply chain strategies to ensure seamless global operations.</div>
        </div>

      </div>
    </div>
    <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4'>
    <ServicesSlider/>
    </div>
    
    <Footer/>
    </>
  )
}

export default page      