// "use client"
// import React, { useState } from 'react'
// import ServicesPage from '../../components/ServicesPage'
// import Navbar from '../../components/Navbar'
// import { Clash } from '../../../../public/fonts/fonts'
// import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
// import Footer from '../../components/Footer'

// const page = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   return (
//     <>
//     <div className='absolute w-full'>
//     <Navbar/>
//     </div>
 

//     <ServicesPage title={'sea Freight'} img1={'/images/services/img1.png'} img2={'/images/services/img12.png'} desc={'With decades of experience in logistics, we excel in providing end-to-end support for businesses of all sizes, ensuring that your cargo reaches its destination efficiently and securely.'}/>
    
//     <div className='bg-white'>
//         <div>
//             <div className='flex justify-center'>
//                 <div className=' bg-black h-32 w-1'></div>
//                 <div>Transport </div>
//             </div>
//         </div>
//     </div>


//     {/* <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
//       <div className='flex flex-col justify-between h-full'>
//         <div className={`flex md:flex-row flex-col justify-between ${Clash.className} text-[--blue3]`}>
//           <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[50%]'>Navigate Global Trade <br /> with Confidence</div>
//           <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[30%]'>Whether it’s oversized cargo or containerized freight, our services are cost-effective and time-sensitive.</div>
//         </div>
//   <div className='flex md:hidden overflow-x-auto gap-3 h-[90vw] md:grid-cols-3 grid-cols-1 md:h-[90vw] lg:h-[120vw] sm:h-[60vw] md:grid-rows-7 scrollbar-hide  md:px-[2vw] lg:px-[4vw] pt-4'>
//             <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-2 h-full w-[80vw] sm:w-[60vw] md:w-auto'>
                
//                 <div className='flex flex-col justify-between h-full p-6 lg:p-8'>
//                     <div className='gap-4 flex flex-col'>
//                         <div className='rounded-full w-fit bg-[--blue2] '>
//                         <ArrowUpRight color='#ADEDFF'  className='h-12 w-12 md:w-7 md:h-7' />
//                         </div>
//                         <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
//                         Unmatched Reliability
//                         </div>
//                     </div>
//                     <div className={`${Clash.className} text-white text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>Whether it’s urgent cargo, temperature-sensitive shipments, or complex global deliveries, we ensure your goods reach their destination on time, every time.</div>
//                 </div>
//             </div>
//             <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-1 h-full w-[80vw] sm:w-[60vw] md:w-auto'>
//             <div className='flex flex-col justify-between h-full p-6 lg:p-8'>
//                     <div className='gap-4 flex flex-col'>
//                         <div className='rounded-full w-fit bg-[--blue2]'>
//                         <ArrowUpRight color='#ADEDFF'  className='h-12 w-12 md:w-7 md:h-7' />
//                         </div>
//                         <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
//                         SEA FREIGHT SERVICES
//                         </div>
//                     </div>
//                     <div className={`${Clash.className} text-white text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>We excel in sea freight solutions with a focus on innovation & efficiency. We leverage a global network of shipping conferences & direct line movements to ensure cost-effective & timely delivery.</div>
//                 </div>
//             </div>
//             <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-1 h-full w-[80vw] sm:w-[60vw] md:w-auto'>
//             <div className='flex flex-col justify-between h-full p-6 lg:p-8'>
//                     <div className='gap-4 flex flex-col'>
//                         <div className='rounded-full w-fit bg-[--blue2]'>
//                         <ArrowUpRight color='#ADEDFF'  className='h-12 w-12 md:w-10 md:h-10' />
//                         </div>
//                         <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
//                         SUPPLY CHAIN SOLUTIONS
//                         </div>
//                     </div>
//                     <div className={`text-white ${Clash.className} text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>Channel Freight Services offers tailored supply chain solutions, managing the end-to-end logistics process with precision and efficiency.</div>
//                 </div>
//             </div>
//             <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-2 h-full w-[80vw] sm:w-[60vw] md:w-auto'>
//             <div className='flex flex-col justify-between h-full p-6 lg:p-8'>
//                     <div className='gap-4 flex flex-col'>
//                         <div className='rounded-full w-fit bg-[--blue2]'>
//                         <ArrowUpRight color='#ADEDFF'  className='h-12 w-12 md:w-10 md:h-10' />
//                         </div>
//                         <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
//                         PROJECT LOGISTICS
//                         </div>
//                     </div>
//                     <div className={`text-white ${Clash.className} text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>We specialize in Project Cargo Handling, offering expert solutions for the transportation of oversized and heavy cargo across India and internationally</div>
//                 </div>
//             </div>
//         </div>
//         <div>
//         <div className='md:flex hidden md:w-full  md:ml-0 justify-between gap-[1.7vw] md:gap-0'>
//                     <div onMouseEnter={() => setHoveredCard(1)}
//                         onMouseLeave={() => setHoveredCard(null)}
//                         className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[--blue3]'>
//                         <img 
//                             src="/images/pharma.png" 
//                             alt="" 
//                             className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 1 ? 'opacity-100' : 'opacity-0'}`}
//                         />
//                         <div className='flex flex-col justify-between h-full'>
//                             <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
//                                 <div className={`uppercase ${Clash.className} ${hoveredCard === 1 ? 'text-white' : 'text-[--blue3]'} text-[2vw] z-[2]`}></div>
//                                 <div className={`${hoveredCard === 1 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
//                                     <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 1 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
//                                 </div>
//                             </div>
//                             <div className={` capitalize ${Clash.className} ${hoveredCard === 1 ? 'text-white' : 'text-[--blue3]'} text-[2vw] z-[2] my-[1.2vw] mx-[1.6vw]`}>
//                             Safety & Security
//                             </div>
//                         </div>
//                     </div>

//                     <div onMouseEnter={() => setHoveredCard(2)}
//                         onMouseLeave={() => setHoveredCard(null)}
//                         className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[--blue3]'>
//                         <img 
//                             src="/images/cold.png" 
//                             alt="" 
//                             className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 2 ? 'opacity-100' : 'opacity-0'}`}
//                         />
//                         <div className='flex flex-col justify-between h-full py-[1.2vw] px-[1.6vw]'>
//                             <div className='flex justify-between '>
//                                 <div className={`uppercase ${Clash.className} ${hoveredCard === 2 ? 'text-white' : 'text-[--blue3]'} text-[2vw] z-[2]`}></div>
//                                 <div className={`${hoveredCard === 2 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
//                                     <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 2 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
//                                 </div>
//                             </div>
//                             <div className={` ${Clash.className} ${hoveredCard === 2 ? 'text-white' : 'text-[--blue3]'} text-[2vw] z-[2]`}>
//                             Flexibility
//                             </div>
//                         </div>
//                     </div>

//                     <div onMouseEnter={() => setHoveredCard(3)}
//                         onMouseLeave={() => setHoveredCard(null)}
//                         className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[--blue3]'>
//                         <img 
//                             src="/images/hazd.png" 
//                             alt="" 
//                             className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 3 ? 'opacity-100' : 'opacity-0'}`}
//                         />
//                         <div className='flex flex-col justify-between h-full py-[1.2vw] px-[1.6vw]'>
//                             <div className='flex justify-between '>
//                                 <div className={`uppercase ${Clash.className} ${hoveredCard === 3 ? 'text-white' : 'text-[--blue3]'} text-[2vw] z-[2]`}></div>
//                                 <div className={`${hoveredCard === 3 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
//                                     <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 3 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
//                                 </div>
//                             </div>
//                             <div className={` ${Clash.className} ${hoveredCard === 3 ? 'text-white' : 'text-[--blue3]'} text-[2vw] z-[2]`}>
//                             Sustainability
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//       </div>
//     </div> */}
//     <Footer/>
//     </>
//   )
// }

// export default page      

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

const page = () => {

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
 

    <ServicesPage title={'sea Freight'} img1={'/images/services/img1.png'} img2={'/images/services/img12.png'} desc={'With decades of experience in logistics, we excel in providing end-to-end support for businesses of all sizes, ensuring that your cargo reaches its destination efficiently and securely.'}/>
    
    <div className='md:p-[2vw] lg:p-[4vw] px-4 py-4  md:h-[50vw] '>
      <div className='flex flex-col justify-between h-full'>
        <div className={`flex md:flex-row flex-col justify-between ${Clash.className} text-[--blue3] `}>
          <div className='leading-[1.2] md:text-[4vw] text-[9vw] w-full md:w-[50%]'>Navigate Global Trade <br /> with Confidence</div>

          <div className='text-[4vw] md:text-[1.3vw] w-full md:w-[40%] flex flex-col justify-between '>
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

<AirplaneCanvas imagePath="/images/services/cargo.webp" />

<AnimatedContent 
  Clash={Clash} 
  leftContent={leftContent}
  rightContent={rightContent}
/>



    {/* <div className='w-full h-screen flex flex-col relative justify-center items-center'>
      <div className='absolute inset-0'>
        <canvas></canvas>
      </div>
        <div className={`${Clash.className} text-center md:text-[4vw] text-[7vw] px-2 md:px-0 text-[--blue3]`}>
            Your Cargo,
        </div>
        <div className={`${ClashM.className} text-center md:text-[5vw] text-[10vw] text-[--blue3]`}>
            securely managed at every step.
        </div>
    </div> */}

    <ShipAnimation/>
                        
   
    <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
        <div className={`${Clash.className} text-[--blue3] flex flex-col w-full items-center`}>
            <div className='md:text-[4vw] text-[9vw]'>Efficient, Secure, & Scalable</div>
            <div className='text-[4vw] md:text-[1.3vw] text-[#333f5e] '>Transport large volumes with precision and flexibility, tailored to meet your unique shipping needs.</div>
        </div>
        <div className='flex w-full h-[28vw] justify-between my-[4vw]'>
          
            <div className='w-[32.5%]  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
                <img src='/images/card1.webp' className='absolute w-full  inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] p-[1.5vw]`}>Flexible Routes</div>
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

    <div className={`${Clash.className} text-[--blue3] text-[1vw] `}>Global Reach</div>
    <div className='h-full flex flex-col justify-end '>
        <div className={`${Clash.className} text-[--blue3] text-[3vw]`}>000+</div>
        <div className={`${Clash.className} text-[1vw] text-[--blue3] leading-[0]`}>Countries Served</div>
    </div>

</div>
                <div className=' h-[64%] bg-[--blue3] rounded-2xl px-[1vw]'>
                    <div className={`${Clash.className} text-[#c8c8c8] text-[1vw] py-[1vw]`}>Trusted Network</div>
                    <div className='flex justify-center items-center h-[90%] relative'>
                        <div className={` md:text-[1.6vw] text-[4vw] text-white absolute  top-14 left-0   `}>
                            <img src="/images/inv.png" alt="" />
                        </div>
                        <div className={`${ClashM.className} px-3   md:text-[1.6vw] text-center text-[4vw] text-white `}>Where timing meets trust, and logistics meet excellence</div>
                        <div className='absolute bottom-14 right-0 scale-x-[-1] scale-y-[-1]'><img  className='' src="/images/inv.png" alt="" /></div>
                    </div>
                </div>
                </div>
            </div>
            <div className='w-[32.5%]  relative h-full overflow-hidden rounded-2xl flex flex-col justify-end'>
            <img src='/images/card2.webp' className='w-full  absolute inset-0 z-[-1]'/>
                <div className={`${Clash.className} text-white md:text-[2vw] text-[5vw] p-[1.5vw]`}>Secured Storage</div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page      