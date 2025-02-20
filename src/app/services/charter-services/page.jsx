"use client"
import React, { useEffect, useRef, useState } from 'react'
import ServicesPage from '../../components/ServicesPage'
import Navbar from '../../components/Navbar'
import { Clash, ClashM } from '../../../../public/fonts/fonts'
import { AirTrafficControl, Anchor, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import AnimatedCard from '../../components/AnimatedCard'
import AnimatedTextSection from '../../components/SectorAnimated'
import AirplaneCanvas from '../../components/AirplaneCanvas'
import AnimatedServiceCards from '../../components/AnimatedServiceCards'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Counter from '../../components/Counter'
import ServicesBottom from '../../components/ServicesBottom'


gsap.registerPlugin(ScrollTrigger);

const page = () => {

    const slider = useRef();
    const triggerRef = useRef();

          const scrollContainerRef = useRef(null);
    
           useEffect(() => {
                  const scrollInstance = new locomotiveScroll({
                    el: scrollContainerRef.current,
                    smooth: true,
                    smoothMobile: true,
                    multiplier: 0.1, // Adjust the speed of the scrolling (lower is slower)
                    lerp: 0, // Adjust the easing (lower is smoother)
                  });
              
                  return () => {
                    if (scrollInstance) scrollInstance.destroy();
                  };
                }, []);



  useGSAP(()=>{
    gsap.fromTo(slider.current,{
        translateX: 0,
      },
      {
        translateX: "-30%",
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

const text = [
    "When traditional logistics options fall  ",
    "short or deadlines demand innovative  ",
    "solutions, our bespoke air and sea ",
    "charter services step in to provide ",
    "reliability and flexibility. "
  ];

  const text2 = [
    "When traditional logistics",
    "options fall short or deadlines",
    "demand innovative solutions,",
    "our bespoke air and sea",
    "charter services step in to",
    "provide reliability and flexibility.",
  ];


  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
      <div ref={scrollContainerRef} className='w-full h-full overflow-hidden'>
    <ServicesPage title={'charter services'} img1={'/images/services/img9.png'} img2={'/images/services/img92.png'} desc={'Channel Freight Logistics India Pvt. Ltd. delivers tailored charter services, ensuring your cargo moves seamlessly across the globe with unmatched precision and speed.'}/>
    
    <div ref={triggerRef} className='md:p-[2vw] hidden md:block lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex  md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[#02123b] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Your Trusted Partner in Critical Logistics</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
            Trust Channel Freight to transform your logistics challenges into success stories. 
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
    title="Customized Approaches"
    content="Every shipment is unique. We design solutions that cater to your specific requirements, ensuring seamless execution."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Industry Expertise"
    content="With seasoned professionals managing each charter, we bring unparalleled insight and efficiency to the process."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Global Reach"
    content="Our expansive network ensures your cargo reaches even the most remote destinations, overcoming geographic and logistical challenges."
    Clash={Clash}
  />
    <AnimatedCard
    index={4}
    title="End-to-End Management"
    content="From route planning to customs clearance, we handle every aspect of your shipment, allowing you to focus on your core business operations."
    Clash={Clash}
  />        
                </div>
                </div>
        </div>

     
      </div>
    
    </div>
    <div  className='md:p-[2vw] md:hidden lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex  md:flex-row flex-col justify-between gap-4 md:gap-0 ${Clash.className} text-[#02123b] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[40%]'> Your Trusted Partner in Critical Logistics</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col gap-4 md:gap-0 justify-between '>
            <div>
            Trust Channel Freight to transform your logistics challenges into success stories. 
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
    title="Customized Approaches"
    content="Every shipment is unique. We design solutions that cater to your specific requirements, ensuring seamless execution."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Industry Expertise"
    content="With seasoned professionals managing each charter, we bring unparalleled insight and efficiency to the process."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Global Reach"
    content="Our expansive network ensures your cargo reaches even the most remote destinations, overcoming geographic and logistical challenges."
    Clash={Clash}
  />
    <AnimatedCard
    index={4}
    title="End-to-End Management"
    content="From route planning to customs clearance, we handle every aspect of your shipment, allowing you to focus on your core business operations."
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

<div className={`w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4 ${Clash.className}`}>
<div className='md:text-[4vw] text-[9vw] text-left md:text-center text-[#02123b]'>Comprehensive Charter Offerings</div>

<div className='md:block hidden'>
<AnimatedServiceCards/>
</div>

<div className='w-full flex flex-col  my-[4vw] md:hidden gap-8'>
    <div className='h-full w-full rounded-xl bg-[#F5F5F5] text-[#02123b] p-[4vw] flex flex-col gap-4 justify-between' >
        <div className='w-full h-full flex flex-col justify-between gap-8'>
            <div className='flex flex-col gap-4'>
                <div className='text-[4vw] md:text-[1.3vw] bg-[#333F5E] rounded-full w-fit text-white p-2'><AirTrafficControl  /></div>
                <div className='md:text-[3vw] text-[7vw] leading-[1.2]'>Air Charter Solutions</div>
            </div>
            <div className='text-[4vw] md:text-[1.3vw]'>
            Ideal for time-sensitive, oversized, or specialized cargo, our air charters connect you to global destinations efficiently. 
            </div>
        </div>
        <div className='w-full h-[80vw]'>
            <img src="/images/services/plane.webp" className='rounded-xl w-full h-full object-cover' alt="" />
        </div>
    </div>
    <div className='h-full w-full rounded-xl bg-[#333F5E] text-white  flex flex-col justify-between gap-4  p-[4vw]'>

        <div className='w-full h-full  flex-col  flex justify-between gap-8'>
            <div className='flex flex-col gap-4'>
                <div className='text-[4vw] md:text-[1.3vw] bg-white w-fit p-2 text-[#333F5E] rounded-full'><Anchor/></div>
                <div className='md:text-[3vw] text-[7vw] leading-[1]'>Sea Charter Expertise</div>
            </div>
            <div className='text-[4vw] md:text-[1.3vw]'>
            For voluminous and heavy shipments, our sea charters offer dedicated vessels capable of accommodating unique specifications, ensuring cost-effective and reliable transport across international waters. 
            </div>
        </div>
        <div className='w-full h-[80vw]'>
            <img src="/images/services/cargo2.webp" className='rounded-xl w-full h-full object-cover' alt="" />
        </div>
    
</div>
</div>
</div>
                
                        
<div>
      <ServicesBottom/>
    </div>

   <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
          <div className={`${Clash.className} text-[#02123b] flex flex-col w-full items-center`}>
              <div className='md:text-[4vw] text-[9vw] text-center'>Trusted Partner in Critical Logistics</div>
              <div className='text-[4vw] md:text-[1.3vw] text-[#333f5e] text-center '>Delivering bespoke logistics solutions for your most demanding freight needs.</div>
          </div>
          <div className='flex w-full md:h-[28vw] h-[250vw] md:gap-0 gap-4 md:flex-row flex-col justify-between my-[4vw]'>
            
              <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
                  <img src='/images/services/card9.webp' className='absolute w-full  inset-0 z-[-1]'/>
                  <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Scalable Chartering</div>
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
  
      <div className={`${Clash.className} text-[#02123b] lg:text-[1vw] md:text-[1.8vw] text-[3vw]  `}>Countries Served</div>
      <div className='h-full flex flex-col justify-end '>
          {/* <div className={`${Clash.className} text-[#02123b] lg:text-[3vw] md:text-[3.5vw] text-[6vw] text-right md:text-left`}>000+</div> */}
          <Counter end={190}/>
          <div className={`${Clash.className} lg:text-[1vw] md:text-[1.8vw] text-[3vw] text-[#02123b] leading-[0] pb-[2vw] md:pb-0`}>Across the globe</div>
      </div>
  
  </div>
                  <div className=' h-[64%] bg-[#02123b] rounded-2xl md:px-[1vw] px-[3vw] '>
                      <div className={`${Clash.className} text-[#c8c8c8] lg:text-[1vw] md:text-[1.8vw] text-[3vw] md:py-[1vw] py-[3vw]`}>Logistics Without Limits</div>
                      <div className='flex justify-center items-center h-[90%] relative'>
                          <div className={` md:text-[1.6vw] text-[4vw] text-white absolute  top-14 left-0   `}>
                              <img src="/images/inv.png" alt="" />
                          </div>
                          <div className={`${ClashM.className} px-3 md:pl-0 pl-6  md:text-[1.6vw] md:text-center text-[4vw] text-white `}>Customized charters, delivered with care and precision.</div>
                          <div className='absolute bottom-14 right-0 scale-x-[-1] scale-y-[-1]'><img  className='' src="/images/inv.png" alt="" /></div>
                      </div>
                  </div>
                  </div>
              </div>
              <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
              <img src='/images/services/card10.webp' className='w-full  absolute inset-0 z-[-1]'/>
                  <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Cargo Solutions</div>
              </div>
          </div>
      </div>
    <Footer/>
    </div>
    </>
  )
}

export default page      