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
 

    <ServicesPage title={'air Freight'} img1={'/images/services/img1.png'} img2={'/images/services/img12.png'} desc={'Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace. At Channel Freight Logistics India Private Limited, we understand that timely delivery is critical for your business.'}/>
    
    <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex md:flex-row flex-col justify-between ${Clash.className} text-[--blue3] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Redefining Freight Excellence</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col justify-between '>
            <div>
            Reliable air freight services with agility and exceptional support, a preferred partner worldwide.
            </div>
            <div>
                <Button text='Get in Touch' link='/contact' bgColor='#02123b' tColor='#ffffff' />
            </div>
            </div>
        </div>
  <div className='flex md:hidden overflow-x-auto gap-3 h-[90vw] md:grid-cols-3 grid-cols-1 md:h-[90vw] lg:h-[120vw] sm:h-[60vw] md:grid-rows-7 scrollbar-hide  md:px-[2vw] lg:px-[4vw] pt-4'>
            <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-2 h-full w-[80vw] sm:w-[60vw] md:w-auto'>
                
                <div className='flex flex-col justify-between h-full p-6 lg:p-8'>
                    <div className='gap-4 flex flex-col'>
                        <div className='rounded-full w-fit bg-[--blue2] '>
                        <ArrowUpRight color='#ADEDFF'  className='h-12 w-12 md:w-7 md:h-7' />
                        </div>
                        <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                        AIR FREIGHT SERVICES
                        </div>
                    </div>
                    <div className={`${Clash.className} text-white text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>Whether it’s urgent cargo, temperature-sensitive shipments, or complex global deliveries, we ensure your goods reach their destination on time, every time.</div>
                </div>
            </div>
            <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-1 h-full w-[80vw] sm:w-[60vw] md:w-auto'>
            <div className='flex flex-col justify-between h-full p-6 lg:p-8'>
                    <div className='gap-4 flex flex-col'>
                        <div className='rounded-full w-fit bg-[--blue2]'>
                        <ArrowUpRight color='#ADEDFF'  className='h-12 w-12 md:w-7 md:h-7' />
                        </div>
                        <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                        SEA FREIGHT SERVICES
                        </div>
                    </div>
                    <div className={`${Clash.className} text-white text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>We excel in sea freight solutions with a focus on innovation & efficiency. We leverage a global network of shipping conferences & direct line movements to ensure cost-effective & timely delivery.</div>
                </div>
            </div>
            <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-1 h-full w-[80vw] sm:w-[60vw] md:w-auto'>
            <div className='flex flex-col justify-between h-full p-6 lg:p-8'>
                    <div className='gap-4 flex flex-col'>
                        <div className='rounded-full w-fit bg-[--blue2]'>
                        <ArrowUpRight color='#ADEDFF'  className='h-12 w-12 md:w-10 md:h-10' />
                        </div>
                        <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                        SUPPLY CHAIN SOLUTIONS
                        </div>
                    </div>
                    <div className={`text-white ${Clash.className} text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>Channel Freight Services offers tailored supply chain solutions, managing the end-to-end logistics process with precision and efficiency.</div>
                </div>
            </div>
            <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-2 h-full w-[80vw] sm:w-[60vw] md:w-auto'>
            <div className='flex flex-col justify-between h-full p-6 lg:p-8'>
                    <div className='gap-4 flex flex-col'>
                        <div className='rounded-full w-fit bg-[--blue2]'>
                        <ArrowUpRight color='#ADEDFF'  className='h-12 w-12 md:w-10 md:h-10' />
                        </div>
                        <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                        PROJECT LOGISTICS
                        </div>
                    </div>
                    <div className={`text-white ${Clash.className} text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>We specialize in Project Cargo Handling, offering expert solutions for the transportation of oversized and heavy cargo across India and internationally</div>
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

                       
                        <AnimatedTextSection
      textLines={text}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />

<AirplaneCanvas />
                                <div className='h-[50vw] md:p-[2vw] lg:p-[4vw] px-4 py-4'>
                                    <div className='flex w-full justify-between h-full '>
                                        <div className={`${Clash.className} flex justify-between text-[--blue3] py-[6vw]`}>
                                            <div className='flex flex-col h-full justify-between w-[30%] '>
                                                <div>
                                                <div className='md:text-[2vw] text-[5vw] text-right'>Tailored Solutions</div>
                                                <div className='text-[4vw] md:text-[1.3vw] text-right'>Whether you need express delivery, specialized handling for pharmaceuticals, or temperature-controlled shipments, our services are customized to meet your unique requirements.</div>
                                                </div>
                                                <div>
                                                <div className='md:text-[2vw] text-[5vw] text-right'>Comprehensive Global Network</div>
                                                <div className='text-[4vw] md:text-[1.3vw] text-right'>With access to key international airports and partnerships with leading carriers, we deliver your cargo to every corner of the world with speed and precision</div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col h-full justify-between w-[30%]'>
                                                <div>
                                                <div className='md:text-[2vw] text-[5vw] text-left'>Innovative Technology</div>
                                                <div className='text-[4vw] md:text-[1.3vw] text-left'>Our advanced tracking systems provide real-time updates on your shipment, offering complete visibility and peace of mind throughout the transit, from origin to destination.</div>
                                                </div>
                                                <div>
                                                <div className='md:text-[2vw] text-[5vw] text-left'>Comprehensive Global Network</div>
                                                <div className='text-[4vw] md:text-[1.3vw] text-left'>With access to key international airports and partnerships with leading carriers, we deliver your cargo to every corner of the world with speed and precision</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                        
   
    <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
        <div className={`${Clash.className} text-[--blue3] flex flex-col w-full items-center`}>
            <div className='md:text-[4vw] text-[9vw]'>Elevating Air Freight Excellence</div>
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