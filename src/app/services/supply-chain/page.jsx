"use client"
import React, { useState } from 'react'
import ServicesPage from '../../components/ServicesPage'
import Navbar from '../../components/Navbar'
import { Clash, ClashM } from '../../../../public/fonts/fonts'
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Footer from '../../components/Footer'
import ServicesSlider from '../../components/ServicesSlider'
import Button from '../../components/Button'
import AnimatedCard from '../../components/AnimatedCard'
import AnimatedTextSection from '../../components/SectorAnimated'
import ServicesBottom from '../../components/ServicesBottom'
import Counter from '../../components/Counter'

const page = () => {
  const text = [
    "We redefine supply chain management ",
    "through our integrated and innovative ",
    "solutions tailored for businesses of all sizes. ",
    "Our services go beyond traditional logistics to",
    " include end-to-end supply chain design, ",
    "management, and optimization."
  ];

  const text2 = [
    "We redefine supply chain",
    "management through our",
    "integrated and innovative",
    "solutions tailored for businesses",
    "of all sizes. Our services go",
    "beyond traditional logistics to",
    "include end-to-end supply chain",
    "design, management, and",
    "optimization."
  ];
  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'supply chain solutions'} img1={'/images/services/img6.png'} img2={'/images/services/img62.png'} desc={'From warehousing and distribution to customized fulfillment and streamlined inventory control, we ensure every link in your supply chain operates seamlessly.'}/>
    
   
    <div  className='md:p-[2vw]  lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex  md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[#02123b] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'>Driving Efficiency Across Borders</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
            Comprehensive and tailored supply chain strategies to ensure seamless global operations.
            </div>
            <div>
                <Button text='Get in Touch' link='/contact' bgColor='#02123b' tColor='#ffffff' />
            </div>
            </div>
        </div>
        <div>
<div  className='w-full h-full overflow-auto pt-[2vw] scrollbar-hide'>
        <div   className='flex md:w-full flex-nowrap scrollbar-hide  md:mx-0 justify-between gap-[4vw] pt-[6vw] md:gap-[2vw]'>   
             
                    <AnimatedCard
    index={1}
    title="Sustainability & Scalability "
    content="As your business grows, our scalable solutions adapt, ensuring your logistics remain resilient and competitive in a global market. "
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Customer-Centric Focus"
    content="Our team of experts works closely with clients to understand their unique challenges and design solutions that maximize value."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Warehousing & Distribution "
    content="Our state-of-the-art warehousing facilities are strategically located to optimize distribution and reduce lead times."
    Clash={Clash}
  />

 

                  
                </div>
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

    <div>
      <ServicesBottom/>
    </div>

   <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
          <div className={`${Clash.className} text-[#02123b] flex flex-col w-full items-center`}>
              <div className='md:text-[4vw] text-[9vw] text-center'>Global Expertise, Local Solutions</div>
              <div className='text-[4vw] md:text-[1.3vw] text-[#333f5e] text-center '>Empowering businesses with scalable and flexible logistics solutions worldwide.</div>
          </div>
          <div className='flex w-full md:h-[28vw] h-[250vw] md:gap-0 gap-4 md:flex-row flex-col justify-between my-[4vw]'>
            
              <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
                  <img src='/images/services/card11.webp' className='absolute w-full  inset-0 z-[-1]'/>
                  <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Customized Strategies</div>
              </div>
              <div className='md:w-[32.5%] w-full h-full rounded-2xl  '> 
                  <div className='flex flex-col h-full justify-between'>
                  <div className={`${Clash.className} w-full h-[50%] rounded-2xl border relative border-[#c8c8c8] overflow-hidden flex justify-between text-[--blue2] md:p-[1.5vw] p-[3vw] `}>
      <video 
          className="w-full h-full object-cover scale-[3] absolute right-52 opacity-25 z-[-1]"
          src="/videos/air.mp4"
          muted
          playsInline
          autoPlay
          loop
      />
  
      <div className={`${Clash.className} text-[#02123b] lg:text-[1vw] md:text-[1.8vw] text-[3vw]  `}>Global Operations</div>
      <div className='h-full flex flex-col justify-end '>
          {/* <div className={`${Clash.className} text-[#02123b] lg:text-[3vw] md:text-[3.5vw] text-[6vw] text-right md:text-left`}>000+</div> */}
          <Counter/>
          <div className={`${Clash.className} lg:text-[1vw] md:text-[1.8vw] text-[3vw] text-[#02123b] leading-[0] pb-[2vw] md:pb-0`}>successful deliveries</div>
      </div>
  
  </div>
                  <div className=' h-[45%] bg-[#02123b] rounded-2xl md:px-[1vw] px-[3vw] '>
                      <div className={`${Clash.className} text-white flex w-full h-full items-center justify-between `}>
                        <div className='md:text-[8vw] text-[24vw] '>10K+</div>
                        <div className='w-[40%] text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-center'>cross-border shipments cleared yearly.</div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
              <img src='/images/services/card12.webp' className='w-full  absolute inset-0 z-[-1]'/>
                  <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Trusted Partner</div>
              </div>
          </div>
      </div>

    <Footer/>
    </>
  )
}

export default page      