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

const page = () => {

const text = [
    "When traditional logistics options fall ",
    "short or deadlines demand innovative ",
    "Isolutions, our bespoke air and sea ",
    "charter services step in to provide ",
    "reliability and flexibility."
  ];

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'charter services'} img1={'/images/services/img1.png'} img2={'/images/services/img12.png'} desc={'Channel Freight Logistics India Pvt. Ltd. delivers tailored charter services, ensuring your cargo moves seamlessly across the globe with unmatched precision and speed.'}/>
    
    <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex md:flex-row flex-col justify-between ${Clash.className} text-[--blue3] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'>Your Trusted Partner in Critical Logistics</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col justify-between '>
            <div>
            Trust Channel Freight to transform your logistics challenges into success stories.
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
    title="Safety & Security"
    content="Rigorous quality controls for handling high-value and sensitive goods."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Flexibility"
    content="Solutions for diverse industries, including automotive, healthcare, and e-commerce"
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Sustainability"
    content="Initiatives to reduce carbon footprints, aligning with environmentally conscious logistics."
    Clash={Clash}
  />

                  
                </div>
        </div>

     
      </div>
    
    </div>


<div className={`w-full h-screen md:p-[2vw] lg:p-[4vw] px-4 py-4${Clash.className}`}>
<div className='md:text-[4vw] text-[9vw] text-center'>Trusted Partner in Critical Logistics</div>
<div className='w-full flex h-[70%] '>
    <div className='h-full w-[60%] rounded-xl'>

    </div>
</div>
</div>
                
                        
   
    <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
        <div className={`${Clash.className} text-[--blue3] flex flex-col w-full items-center`}>
            <div className='md:text-[4vw] text-[9vw]'>Trusted Partner in Critical Logistics</div>
            <div className='text-[4vw] md:text-[1.3vw] text-[#333f5e] '>Discover the stats, features, and solutions that make us your trusted air freight partner worldwide.</div>
        </div>
        <div className='flex w-full h-[28vw] justify-between my-[4vw]'>
          
            <div className='w-[32.5%]  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
                <img src='/images/card1.webp' className='absolute w-full  inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] p-[1.5vw]`}>Global Network</div>
            </div>
            <div className='w-[32.5%]  h-full rounded-2xl  '> 
                <div className='flex flex-col h-full justify-between'>
                <div className={`${Clash.className} w-full h-[32%] rounded-2xl border relative border-[#c8c8c8] overflow-hidden flex justify-between text-[--blue2] p-[1.5vw] `}>
    <video 
        className="w-full h-full object-cover scale-[3] absolute right-52 opacity-25 z-[-1]"
        src="/videos/air.mp4"
        muted
        playsInline
        autoPlay
        loop
    />

    <div className={`${Clash.className} text-[--blue3] text-[1vw] `}>Partnerships</div>
    <div className='h-full flex flex-col justify-end '>
        <div className={`${Clash.className} text-[--blue3] text-[3vw]`}>000+</div>
        <div className={`${Clash.className} text-[1vw] text-[--blue3] leading-[0]`}>Airlines Connected</div>
    </div>

</div>
                <div className=' h-[64%] bg-[--blue3] rounded-2xl px-[1vw]'>
                    <div className={`${Clash.className} text-[#c8c8c8] text-[1vw] py-[1vw]`}>Trusted Partner</div>
                    <div className='flex justify-center items-center h-[90%] relative'>
                        <div className={` md:text-[1.6vw] text-[4vw] text-white absolute  top-14 left-0   `}>
                            <img src="/images/inv.png" alt="" />
                        </div>
                        <div className={`${ClashM.className} px-3   md:text-[1.6vw] text-center text-[4vw] text-white `}>From booking to delivery, every detail is managed with care.</div>
                        <div className='absolute bottom-14 right-0 scale-x-[-1] scale-y-[-1]'><img  className='' src="/images/inv.png" alt="" /></div>
                    </div>
                </div>
                </div>
            </div>
            <div className='w-[32.5%]  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
            <img src='/images/card2.webp' className='w-full  absolute inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] p-[1.5vw]`}>Global Reach</div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page      