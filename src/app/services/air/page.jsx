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

const page = () => {

const text = [
    "Leveraging an extensive global network",
    "and advanced logistics solutions, we ",
    "ensure your cargo reaches its ",
    "destination promptly and securely."
  ];

  const text2 = [
    "Leveraging an extensive",
    "global network and",
    "advanced logistics solutions,",
    "we ensure your cargo",
    "reaches its destination",
    "promptly and securely."
  ];
  const leftContent = [
    {
      title: "Full Container Load (FCL)",
      description: "FCL shipments are ideal for bulk goods, providing direct port-to-port transit with minimal handling, reducing risks and delays."
    },
    {
      title: "Sea Charters",
      description: "Ideal for urgent, large-scale, or exclusive shipments, sea charters offer full control over routes, schedules, and cargo specifications."
    }
  ];
  
  const rightContent = [
    {
      title: "Loose Container Load (LCL)",
      description: "This cost-effective solution allows businesses to ship without needing full container space, while still benefiting from our extensive global network and secure handling."
    },
    {
      title: "Break Bulk Handling",
      description: "Our expertise in break bulk cargo allows for safe transport of oversized, irregular, or heavy items that can't be containerized."
    }
  ];


  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'air Freight'} img1={'/images/services/img1.png'} img2={'/images/services/img12.png'} desc={'Experience precision and efficiency with our air freight services, designed to meet the demands of a fast-paced global marketplace. At Channel Freight Logistics India Private Limited, we understand that timely delivery is critical for your business.'}/>
    
    <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`md:flex hidden md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[#02123b] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Redefining Freight Excellence</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
            Our air freight services are backed by a commitment to reliability, agility, and exceptional customer support, making us a preferred partner for businesses worldwide.
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

                       <div className='hidden md:block'>
                        <AnimatedTextSection
      textLines={text}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
    </div>
    <div className='md:hidden block'>
                        <AnimatedTextSection
      textLines={text2}
      font={Clash.className}
      spacing="my-0"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
    </div>

<AirplaneCanvas />
<div className='hidden md:block'>
<AnimatedContent
    Clash={Clash}
    leftContent={leftContent}
    rightContent={rightContent}
    />
    

</div>
                                <div className='md:h-[50vw] md:hidden h-full mt-[125vw] md:mt-0 md:p-[2vw] lg:p-[4vw] px-4 py-4'>
                                    <div className='flex w-full flex-col md:justify-between md:flex-row h-full '>
                                        <div className={`${Clash.className} flex flex-col md:flex-row md:justify-between text-[#02123b] py-[6vw]`}>
                                            <div className='flex flex-col h-full justify-between md:w-[30%] w-full '>
                                                <div className='border-b-2 md:border-0 pb-4 md:pb-0 mb-4 md:mb-0 border-[#c8c8c8]'>
                                                <div className='md:text-[2vw] text-[6vw] md:text-right'>Tailored Solutions</div>
                                                <div className='text-[4vw] md:text-[1.3vw] md:text-right'>Whether you need express delivery, specialized handling for pharmaceuticals, or temperature-controlled shipments, our services are customized to meet your unique requirements.</div>
                                                </div>
                                                <div className='border-b-2 md:border-0 pb-4 md:pb-0 mb-4 md:mb-0 border-[#c8c8c8]'>
                                                <div className='md:text-[2vw] text-[6vw] md:text-right'>Comprehensive Global Network</div>
                                                <div className='text-[4vw] md:text-[1.3vw] md:text-right'>With access to key international airports and partnerships with leading carriers, we deliver your cargo to every corner of the world with speed and precision</div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col h-full justify-between md:w-[30%] w-full'>
                                                <div className='border-b-2 md:border-0 pb-4 md:pb-0 mb-4 md:mb-0 border-[#c8c8c8]'>
                                                <div className='md:text-[2vw] text-[6vw] text-left'>Innovative Technology</div>
                                                <div className='text-[4vw] md:text-[1.3vw] text-left'>Our advanced tracking systems provide real-time updates on your shipment, offering complete visibility and peace of mind throughout the transit, from origin to destination.</div>
                                                </div>
                                                <div className='border-b-2 md:border-0 pb-4 md:pb-0 mb-4 md:mb-0 border-[#c8c8c8]'>
                                                <div className='md:text-[2vw] text-[6vw] text-left'>Comprehensive Global Network</div>
                                                <div className='text-[4vw] md:text-[1.3vw] text-left'>With access to key international airports and partnerships with leading carriers, we deliver your cargo to every corner of the world with speed and precision</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>

                                <div className='md:p-[2vw] md:hidden block  lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full gap-4'>
        <div className={`flex  md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[#02123b] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Redefining Freight Excellence</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
            Our air freight services are backed by a commitment to reliability, agility, and exceptional customer support, making us a preferred partner for businesses worldwide.
            </div>
            <div>
                <Button text='Get in Touch' link='/contact' bgColor='#02123b' tColor='#ffffff' />
            </div>
            </div>
        </div>
        <div>
        <div   className='flex flex-nowrap overflow-auto scrollbar-hide md:w-full  md:mx-0 justify-between gap-[1.7vw] md:gap-0'>            
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
                                
                        
   
    <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
        <div className={`${Clash.className} text-[#02123b] flex flex-col w-full items-center`}>
            <div className='md:text-[4vw] text-[9vw] text-center'>Elevating Air Freight Excellence</div>
            <div className='text-[4vw] md:text-[1.3vw] text-[#333f5e] text-center '>Discover the stats, features, and solutions that make us your trusted air freight partner worldwide.</div>
        </div>
        <div className='flex w-full md:h-[28vw] h-[250vw] md:gap-0 gap-4 md:flex-row flex-col justify-between my-[4vw]'>
          
            <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
                <img src='/images/card1.webp' className='absolute w-full  inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Efficient Logistics</div>
            </div>
            <div className='md:w-[32.5%] w-full h-full rounded-2xl  '> 
                <div className='flex flex-col h-full justify-between'>
                <div className={`${Clash.className} w-full h-[32%] rounded-2xl border relative border-[#c8c8c8] overflow-hidden flex justify-between text-[--blue2] md:p-[1.5vw] p-[3vw] `}>
    <video 
        className="w-full h-full object-cover scale-[3] absolute right-52 opacity-25 z-[-1]"
        src="/videos/air.mp4"
        muted
        playsInline
        autoPlay
        loop
    />

    <div className={`${Clash.className} text-[#02123b] lg:text-[1vw] md:text-[1.8vw] text-[3vw]  `}>Partnerships</div>
    <div className='h-full flex flex-col justify-end '>
        <div className={`${Clash.className} text-[#02123b] lg:text-[3vw] md:text-[3.5vw] text-[6vw] text-right md:text-left`}>000+</div>
        <div className={`${Clash.className} lg:text-[1vw] md:text-[1.8vw] text-[3vw] text-[#02123b] leading-[0] pb-[2vw] md:pb-0`}>Airlines Connected</div>
    </div>

</div>
                <div className=' h-[64%] bg-[#02123b] rounded-2xl md:px-[1vw] px-[3vw] '>
                    <div className={`${Clash.className} text-[#c8c8c8] lg:text-[1vw] md:text-[1.8vw] text-[3vw] md:py-[1vw] py-[3vw]`}>Trusted Partner</div>
                    <div className='flex justify-center items-center h-[90%] relative'>
                        <div className={` md:text-[1.6vw] text-[4vw] text-white absolute  top-14 left-0   `}>
                            <img src="/images/inv.png" alt="" />
                        </div>
                        <div className={`${ClashM.className} px-3   md:text-[1.6vw] md:text-center text-[4vw] text-white `}>From booking to delivery, every detail is managed with care.</div>
                        <div className='absolute bottom-14 right-0 scale-x-[-1] scale-y-[-1]'><img  className='' src="/images/inv.png" alt="" /></div>
                    </div>
                </div>
                </div>
            </div>
            <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
            <img src='/images/card2.webp' className='w-full  absolute inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Global Reach</div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page      