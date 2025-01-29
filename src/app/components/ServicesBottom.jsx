import React from 'react'
import Button from './Button'
import { Clash } from '../../../public/fonts/fonts'

const ServicesBottom = () => {
  return (
    <>
        <div className='w-full h-full md:p-[2vw] lg:p-[4vw] px-4 py-4'>
            <div className='flex flex-col md:flex-row justify-between w-full gap-[12vw] md:gap-0 items-center '>
                <div className='md:w-[40%] flex flex-col gap-[2vw] md:gap-[1vw]'>
                    <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}> Explore Our 
                    Featured Projects</div>
                    <div className={`${Clash.className} text-[4vw] md:text-[1.3vw] text-[#333f5e]  `}>A glimpse into our excellence—click below to explore our standout projects in detail.</div>
                    <Button text='View Project' bgColor={'#02123B'} tColor={'#ffffff'} link='/gallery' />
                </div>
                <div className='pb-[8vw] md:pb-0'>
                    <img src="/images/air.webp" className='w-full h-full' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default ServicesBottom