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
import BottomSector from '../../components/BottomSector'


const page = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 

    <ServicesPage title={'Hazardous Chemicals'} img1={'/images/sectors/ig71.png'} img2={'/images/sectors/ig72.png'} desc={'Transporting hazardous cargo involves high-stakes logistics due to the inherent risks to people, property, and the environment. These shipments require specialized handling, adherence to safety regulations, and robust contingency planning.'}/>

  <div className='w-full flex md:flex-row flex-col md:justify-between md:items-center md:p-[2vw] lg:p-[4vw] p-4 md:gap-0 gap-[3vw]'>
    <div  className={`text-[--blue3] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] md:w-[30%] w-full `} >Challenges & Solutions</div>
    <div className={`text-[--blue3] ${Clash.className} text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] md:w-[35%] w-full `}>Channel Freight excels in the safe and efficient transportation of hazardous cargo, including chemicals, flammables, and radioactive materials.</div>
    </div>

       <div   className='md:flex flex md:w-full md:px-[2vw] lg:px-[4vw] px-4 md:mx-0 justify-between gap-[1.7vw] md:gap-0'> 
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
                
                <div>
                  <BottomSector/>
                </div>
  
    <Footer/>
    </>
  )
}

export default page      