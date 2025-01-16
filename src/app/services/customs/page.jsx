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
      const slider = useRef();
      const triggerRef = useRef();

const text = [
    "We understand that navigating the ",
    "complexities of international trade",
    "regulations can be daunting, which is why ",
    "our team of licensed professionals is ",
    "committed to simplifying the customs ",
    "clearance process for our clients."
  ];

  const text2 = [
    "We understand that ",
    "navigating the complexities of",
    "international trade ",
    "regulations can be daunting,",
    "which is why our team of ",
    "licensed professionals is ",
    "committed to simplifying the ",
    "customs clearance process ",
    "  for our clients."
  ];

  

  useGSAP(()=>{
    gsap.fromTo(slider.current,{
        translateX: 0,
      },
      {
        translateX: "-80%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1500 top",
          scrub: 0.6,
          pin: true,
       
          anticipatePin: 1, // This helps prevent jarring pin start
          fastScrollEnd: true, // Improves performance during fast scrolling
          preventOverlaps: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            // Ensure smooth start of animation
            gsap.to(slider.current, {
              opacity: 1,
              duration: 0.3
            });
          },
        },
      }
      
    )
    return () => {
        // pin.kill();
      };
})


  return (
    <>
    {/* <div className='absolute w-full'>
    <Navbar/>
    </div> */}
 

    <ServicesPage title={'Customs Brokerage'} img1={'/images/services/img7.png'} img2={'/images/services/img72.png'} desc={'Our customs brokerage solutions transcend basic compliance to deliver seamless trade facilitation.'}/>
    
    <div ref={triggerRef} className='md:p-[2vw] hidden md:block lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex  md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[--blue3] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Simplifying Customs Clearance</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
        Efficient and expert customs handling to expedite clearance and eliminate logistical barriers.
            </div>
            <div>
                <Button text='Get in Touch' link='/contact' bgColor='#02123b' tColor='#ffffff' />
            </div>
            </div>
        </div>
        <div>
<div  className='w-full h-full overflow-hidden pt-[2vw]'>
        <div ref={slider}   className='flex md:w-full flex-nowrap   md:mx-0 justify-between gap-[1.7vw] md:gap-[2vw]'>   
             
                    <AnimatedCard
    index={1}
    title="Comprehensive Expertise"
    content="With decades of experience, we are adept at handling diverse industries' needs."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Personalized & Efficient "
    content="Our tailored approach prioritizes accuracy, speed, and cost-effectiveness."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Advanced Technology Integration "
    content="We incorporate cutting-edge technologies to provide real-time tracking, automated document management, and detailed reporting."
    Clash={Clash}
  />
    <AnimatedCard
    index={4}
    title="Global Reach, Local Expertise "
    content="As a trusted partner, our extensive network ensures robust on-ground support across key trade lanes."
    Clash={Clash}
  />    
      <AnimatedCard
    index={4}
    title="Value-Added Services "
    content="Advanced customs clearance for special cargo like ODC and pharmaceuticals"
    Clash={Clash}
  />    
                </div>
                </div>
        </div>

     
      </div>
    
    </div>
    <div  className='md:p-[2vw] md:hidden lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex  md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[--blue3] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Simplifying Customs Clearance</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
        Efficient and expert customs handling to expedite clearance and eliminate logistical barriers.
            </div>
            <div>
                <Button text='Get in Touch' link='/contact' bgColor='#02123b' tColor='#ffffff' />
            </div>
            </div>
        </div>
        <div>
<div  className='w-full h-full overflow-hidden pt-[2vw]'>
        <div   className='flex md:w-full flex-nowrap   md:mx-0 justify-between gap-[1.7vw] md:gap-[2vw]'>   
             
                    <AnimatedCard
    index={1}
    title="Comprehensive Project Management"
    content="From site surveys and feasibility studies to engineering analysis, we meticulously plan every aspect of your shipment."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Specialized Equipment & Techniques"
    content="We leverage state-of-the-art equipment, including hydraulic axles, flat racks, and modular trailers, tailored for oversized and over-weighted goods."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Multimodal Transportation Options"
    content="Whether by sea, road, rail, or barge, our logistics network provides flexible and reliable transportation solutions to meet diverse project requirements. "
    Clash={Clash}
  />
    <AnimatedCard
    index={4}
    title="Sector-Specific Expertise"
    content="We have supported industries including energy, construction, heavy manufacturing, and technology."
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

                        
   
    <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
        <div className={`${Clash.className} text-[--blue3] flex flex-col w-full items-center`}>
            <div className='md:text-[4vw] text-[9vw] text-center'>Customs Made Easy</div>
            <div className='text-[4vw] md:text-[1.3vw] text-[#333f5e] text-center '>Seamlessly manage clearance and compliance with our expert customs brokerage solutions.</div>
        </div>
        <div className='flex w-full md:h-[28vw] h-[250vw] md:gap-0 gap-4 md:flex-row flex-col justify-between my-[4vw]'>
          
            <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
                <img src='/images/card1.webp' className='absolute w-full  inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Faster Clearance</div>
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

    <div className={`${Clash.className} text-[--blue3] lg:text-[1vw] md:text-[1.8vw] text-[3vw]  `}>Expert Professionals</div>
    <div className='h-full flex flex-col justify-end '>
        <div className={`${Clash.className} text-[--blue3] lg:text-[3vw] md:text-[3.5vw] text-[6vw] text-right md:text-left`}>000+</div>
        <div className={`${Clash.className} lg:text-[1vw] md:text-[1.8vw] text-[3vw] text-[--blue3] leading-[0] pb-[2vw] md:pb-0`}>certified experts</div>
    </div>

</div>
                <div className=' h-[64%] bg-[--blue3] rounded-2xl md:px-[1vw] px-[3vw] '>
                    <div className={`${Clash.className} text-[#c8c8c8] lg:text-[1vw] md:text-[1.8vw] text-[3vw] md:py-[1vw] py-[3vw]`}>Seamless Boundaries</div>
                    <div className='flex justify-center items-center h-[90%] relative'>
                        <div className={` md:text-[1.6vw] text-[4vw] text-white absolute  top-14 left-0   `}>
                            <img src="/images/inv.png" alt="" />
                        </div>
                        <div className={`${ClashM.className} px-3   md:text-[1.6vw] md:text-center text-[4vw] text-white `}>Simplifying logistics, bridging borders effortlessly.</div>
                        <div className='absolute bottom-14 right-0 scale-x-[-1] scale-y-[-1]'><img  className='' src="/images/inv.png" alt="" /></div>
                    </div>
                </div>
                </div>
            </div>
            <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
            <img src='/images/card2.webp' className='w-full  absolute inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Customized Solutions</div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page      