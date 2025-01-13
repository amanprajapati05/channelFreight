     

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

const text = [
    "Whether it’s an industrial park setup, a ",
    "power plant installation, or an offshore ",
    "infrastructure build, we bring over two",
    "decades of expertise to deliver on time and ",
    "within budget."
  ];




  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'project logistics'} img1={'/images/services/img1.png'} img2={'/images/services/img12.png'} desc={'Our team is dedicated to providing end-to-end solutions for transporting Over-Dimensional Cargo (ODC), Super-ODC, and other heavy lift equipment critical for large-scale industrial, commercial, and infrastructural projects.'}/>
    
    <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex md:flex-row flex-col justify-between ${Clash.className} text-[--blue3] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[50%]'>Seamless Cargo Solutions</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col justify-between '>
            <div>
            Discover the specialized services that ensure seamless execution of complex logistics projects worldwide.
            </div>
            <div>
                <Button text='Get in Touch' link='/contact' bgColor='#02123b' tColor='#ffffff' />
            </div>
            </div>
        </div>
        <div>
        <div   className='md:flex hidden md:w-full  md:mx-0 justify-between gap-[1.7vw] md:gap-0'>            
                    <AnimatedCard
    index={1}
    title="Unmatched Reliability"
    content="Rigorous quality controls for handling high-value and sensitive goods."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Eco-Conscious Shipping"
    content="Solutions for diverse industries, including automotive, healthcare, and e-commerce"
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Technology-Driven Transparency"
    content="Initiatives to reduce carbon footprints, aligning with environmentally conscious logistics."
    Clash={Clash}
  />

                  
                </div>
        </div>

     
      </div>
    
    </div>

                       
                        <AnimatedTextSection
      textLines={text}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />

{/* 
<div className='md:p-[2vw] lg:p-[4vw] px-4 py-4'>
    <ServicesSlider/>
    </div>                   */}
   

    <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
        <div className={`${Clash.className} text-[--blue3] flex flex-col w-full items-center`}>
            <div className='md:text-[4vw] text-[9vw] leading-[1.3]'>Efficient, Secure, & Scalable</div>
            <div className='text-[4vw] md:text-[1.3vw] text-[#333f5e] '>Transport large volumes with precision and flexibility, tailored to meet your unique shipping needs.</div>
        </div>
        {/* <div className='flex w-full md:flex-row flex-col  md:h-[28vw] justify-between my-[4vw]'>
          
            <div className='w-[32.5%]  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
                <img src='/images/card1.webp' className='absolute w-full  inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] p-[1.5vw]`}>Tailored Solutions</div>
            </div>
            <div className='w-[32.5%]  h-full rounded-2xl  '> 
                <div className='flex flex-col h-full justify-between'>
                <div className={`${Clash.className} w-full h-[48%] rounded-2xl border relative border-[#c8c8c8] overflow-hidden flex justify-between text-[--blue2] p-[1.5vw] `}>
    <video 
        className="w-full h-full object-cover scale-[3] absolute right-52 opacity-25 z-[-1]"
        src="/videos/air.mp4"
        muted
        playsInline
        autoPlay
        loop
    />

    <div className={`${Clash.className} text-[--blue3] text-[1vw] `}>Global Operations</div>
    <div className='h-full flex flex-col justify-end '>
        <div className={`${Clash.className} text-[--blue3] text-[3vw]`}>000+</div>
        <div className={`${Clash.className} text-[1vw] text-[--blue3] leading-[0]`}>completed annually</div>
    </div>

</div>
                <div className=' h-[47%] bg-[--blue3] rounded-2xl px-[2vw] '>
                    <div className={`flex  items-center justify-between  w-full h-full ${Clash.className} text-white`}>
                        <div className='text-[7vw] '>20+</div>
                        <div className='text-[4vw] md:text-[1.3vw] w-[50%] -mr-[1vw]'>years of expertise to deliver on time and within budget</div>
                    </div>
                </div>
                </div>
            </div>
            <div className='w-[32.5%]  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
            <img src='/images/card2.webp' className='w-full  absolute inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] p-[1.5vw]`}>Unique Logistics</div>
            </div>
        </div> */}
        <div className='flex w-full md:flex-row flex-col md:h-[28vw] justify-between my-[4vw] gap-4 md:gap-0'>
          
          <div className='w-full md:w-[32.5%] h-[70vw] md:h-full relative overflow-hidden rounded-2xl flex flex-col justify-end'>
            <img src='/images/card1.webp' className='absolute w-full h-full object-cover inset-0 z-[-1]'/>
            <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] p-[3vw] md:p-[1.5vw]`}>
              Tailored Solutions
            </div>
          </div>
    
          <div className='w-full md:w-[32.5%] h-[70vw] md:h-full rounded-2xl'> 
            <div className='flex flex-col h-full justify-between'>
              <div className={`${Clash.className} w-full h-[48%] rounded-2xl border relative border-[#c8c8c8] overflow-hidden flex justify-between text-[--blue2] p-[3vw] md:p-[1.5vw]`}>
                <video 
                  className="w-full h-full object-cover scale-[3] absolute right-52 opacity-25 z-[-1]"
                  src="/videos/air.mp4"
                  muted
                  playsInline
                  autoPlay
                  loop
                />
    
                <div className={`${Clash.className} text-[--blue3] md:text-[1vw] text-[3vw]`}>
                  Global Operations
                </div>
                <div className='h-full flex flex-col justify-end'>
                  <div className={`${Clash.className} text-[--blue3] text-[8vw] md:text-[3vw]`}>
                    000+
                  </div>
                  <div className={`${Clash.className} md:text-[1vw] pb-[1vw] md:pb-0 text-[3vw] text-[--blue3] leading-[0]`}>
                    completed annually
                  </div>
                </div>
              </div>
    
              <div className='h-[47%] bg-[--blue3] rounded-2xl md:px-[2vw] px-[4vw]'>
                <div className={`flex items-center justify-between w-full h-full ${Clash.className} text-white`}>
                  <div className='text-[10vw] md:text-[4vw]'>20+</div>
                  <div className='text-[4vw] md:text-[1.3vw] w-[50%] -mr-[1vw]'>
                    years of expertise to deliver on time and within budget
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className='w-full md:w-[32.5%] h-[70vw] md:h-full relative overflow-hidden rounded-2xl flex flex-col justify-end'>
            <img src='/images/card2.webp' className='absolute w-full h-full object-cover inset-0 z-[-1]'/>
            <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] p-[3vw] md:p-[1.5vw]`}>
              Unique Logistics
            </div>
          </div>
    
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page      