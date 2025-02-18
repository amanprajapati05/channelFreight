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
import ShipAnimation from '../../components/ShipAnimation'
import ShipAnimation2 from '../../components/ShipAnimation2'
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ServicesBottom from '../../components/ServicesBottom'
import Counter from '../../components/Counter'

const page = () => {

  const scrollContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [locomotiveInstance, setLocomotiveInstance] = useState(null);
      
  useEffect(() => {
      // Force scroll to top
      window.scrollTo(0, 0);
      
      // Initialize locomotive scroll
      const scrollInstance = new locomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          smoothMobile: true,
          multiplier: 0.1,
          lerp: 0,
      });

      setLocomotiveInstance(scrollInstance);
      
      // Disable scroll initially
      scrollInstance.stop();
      
      // Add a delay before starting animations
      const timer = setTimeout(() => {
          setIsLoading(false);
          setIsReady(true);
          scrollInstance.start();
          ScrollTrigger.refresh();
      }, 500); // 2 second delay
      
      return () => {
          clearTimeout(timer);
          if (scrollInstance) {
              scrollInstance.destroy();
          }
      };
  }, []);

const text = [
    "Transport large volumes",
    "with precision and flexibility,",
    "tailored to meet your unique",
    "shipping needs."
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
 

<div ref={scrollContainerRef} data-scroll-container>
    <ServicesPage title={'sea Freight'} img1={'/images/services/img2.png'} img2={'/images/services/img22.png'} desc={'With decades of experience in logistics, we excel in providing end-to-end support for businesses of all sizes, ensuring that your cargo reaches its destination efficiently and securely.'}/>
    
    <div className='md:p-[2vw] hidden md:block lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex md:flex-row flex-col justify-between ${Clash.className} text-[#02123b] gap-4 md:gap-0`}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[50%]'>Navigate Global Trade <br /> with Confidence</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col justify-between gap-4 md:gap-0'>
            <div>
            Whether it’s oversized cargo or containerized freight, our services are cost-effective and time-sensitive.
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
    content="Our commitment to timely deliveries ensures that your supply chain remains uninterrupted."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Eco-Conscious Shipping"
    content="We prioritize sustainability by utilizing innovative solutions to minimize the environmental impact of maritime operations."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Technology-Driven Transparency"
    content="With advanced tracking systems, gain real-time updates on your shipment’s journey, fostering confidence and control."
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


<AirplaneCanvas imagePath="/images/services/cargo.webp" />

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
                                                <div className='border-b-2 md:border-0 pb-4 md:pb-0 mb-4 md:mb-0 border-[#c8c8c8] gap-[2vw] flex flex-col'>
                                                <div className='md:text-[2vw] text-[6vw] md:text-right'>Full Container Load (FCL)</div>
                                                <div className='text-[4vw] md:text-[1.3vw] md:text-right'>FCL shipments are ideal for bulk goods, providing direct port-to-port transit with minimal handling, reducing risks and delays.</div>
                                                </div>
                                                <div className='border-b-2 md:border-0 pb-4 md:pb-0 mb-4 md:mb-0 border-[#c8c8c8] gap-[2vw] flex flex-col'>
                                                <div className='md:text-[2vw] text-[6vw] md:text-right'>Sea Charters</div>
                                                <div className='text-[4vw] md:text-[1.3vw] md:text-right'>Ideal for urgent, large-scale, or exclusive shipments, sea charters offer full control over routes, schedules, and cargo specifications.</div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col h-full justify-between md:w-[30%] w-full'>
                                                <div className='border-b-2 md:border-0 pb-4 md:pb-0 mb-4 md:mb-0 border-[#c8c8c8] gap-[2vw] flex flex-col'>
                                                <div className='md:text-[2vw] text-[6vw] text-left'>Loose Container Load (LCL)</div>
                                                <div className='text-[4vw] md:text-[1.3vw] text-left'>This cost-effective solution allows businesses to ship without needing full container space, while still benefiting from our extensive global network and secure handling.</div>
                                                </div>
                                                <div className='border-b-2 md:border-0 pb-4 md:pb-0 mb-4 md:mb-0 border-[#c8c8c8] gap-[2vw] flex flex-col'>
                                                <div className='md:text-[2vw] text-[6vw] text-left'>Break Bulk Handling</div>
                                                <div className='text-[4vw] md:text-[1.3vw] text-left'>Our expertise in break bulk cargo allows for safe transport of oversized, irregular, or heavy items that can’t be containerized.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>


<div className=''>
    <ShipAnimation2/>
    </div>

   
    <div className='md:p-[2vw] md:hidden block lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full gap-4'>
        <div className={`flex md:flex-row flex-col justify-between ${Clash.className} text-[#02123b] gap-4 md:gap-0`}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[50%]'>Navigate Global Trade <br /> with Confidence</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col justify-between gap-4 md:gap-0'>
            <div>
            Whether it’s oversized cargo or containerized freight, our services are cost-effective and time-sensitive.
            </div>
            <div>
                <Button text='Get in Touch' link='/contact' bgColor='#02123b' tColor='#ffffff' />
            </div>
            </div>
        </div>
        <div>
        <div   className='flex flex-nowrap overflow-auto scrollbar-hide md:w-full  md:mx-0 justify-between gap-[4vw] pt-[6vw] md:gap-0'>            
                    <AnimatedCard
    index={1}
    title="Unmatched Reliability"
    content="Our commitment to timely deliveries ensures that your supply chain remains uninterrupted."
    Clash={Clash}
  />

<AnimatedCard
    index={2}
    title="Eco-Conscious Shipping"
    content="We prioritize sustainability by utilizing innovative solutions to minimize the environmental impact of maritime operations."
    Clash={Clash}
  />
  <AnimatedCard
    index={3}
    title="Technology-Driven Transparency"
    content="With advanced tracking systems, gain real-time updates on your shipment’s journey, fostering confidence and control."
    Clash={Clash}
  />

                  
                </div>
        </div>

     
      </div>
    
    </div>

    <div>
      <ServicesBottom/>
    </div>

     <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
           <div className={`${Clash.className} text-[#02123b] flex flex-col w-full items-center`}>
               <div className='md:text-[4vw] text-[9vw] text-center'>Efficient, Secure, & Scalable</div>
               <div className='text-[4vw] md:text-[1.3vw] text-[#333f5e] text-center '>Transport large volumes with precision and flexibility, tailored to meet your unique shipping needs.</div>
           </div>
           <div className='flex w-full md:h-[28vw] h-[250vw] md:gap-0 gap-4 md:flex-row flex-col justify-between my-[4vw]'>
             
               <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
                   <img src='/images/services/card1.webp' className='absolute w-full  inset-0 z-[-1]'/>
                   <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Flexible Routes</div>
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
                       <div className={`${Clash.className} text-[#c8c8c8] lg:text-[1vw] md:text-[1.8vw] text-[3vw] md:py-[1vw] py-[3vw]`}>Trusted Network</div>
                       <div className='flex justify-center items-center h-[90%] relative'>
                           <div className={` md:text-[1.6vw] text-[4vw] text-white absolute  top-14 left-0   `}>
                               <img src="/images/inv.png" alt="" />
                           </div>
                           <div className={`${ClashM.className} px-3 md:pl-0 pl-6  md:text-[1.6vw] md:text-center text-[4vw] text-white `}>Where timing meets trust, and logistics meet excellence</div>
                           <div className='absolute bottom-14 right-0 scale-x-[-1] scale-y-[-1]'><img  className='' src="/images/inv.png" alt="" /></div>
                       </div>
                   </div>
                   </div>
               </div>
               <div className='md:w-[32.5%] w-full  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
               <img src='/images/services/card2.webp' className='w-full  absolute inset-0 z-[-1]'/>
                   <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] md:p-[1.5vw] p-[3vw]`}>Secured Storage</div>
               </div>
           </div>
       </div>
       </div>
    <Footer/>
    </>
  )
}

export default page      