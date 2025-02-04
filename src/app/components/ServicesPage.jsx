import React from 'react'
import { Clash } from '../../../public/fonts/fonts'

const ServicesPage = ({title,desc,img1,img2}) => {
  return (


<>
    <div className='w-full '>
             
             <div className='md:h-screen h-[120vw] '>
             <div className=' w-full h-full  '>
                 <div className=' h-[100%] md:h-[100%] pb-4 md:pb-0  bg-[#02123b]'>
                     <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row h-[100%] gap-6 md:gap-0 justify-end md:justify-between md:items-center text-white ${Clash.className}  `}>
                         <div className=' text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase leading-[1.2]'>{title}</div>
                         <div className='text-base pr-[8vw]  md:w-[48%] md:text-[1.7vw] lg:text-[1.4vw]  h-auto md:h-[50%] flex items-end'>{desc}</div>
                     </div>
                 </div>
             </div>
             </div>

            </div>
              <div className='h-full -mt-1'>
              <div className='w-full h-[50vw] overflow-hidden hidden md:block'>
                  <img src={img1} alt="" className='md:w-screen   object-cover'/>
              </div>
              <div className='w-full h-[135vw] overflow-hidden md:hidden block'>
                  <img src={img2} alt="" className='w-full  object-cover'/>
              </div>
          </div>
          </>


  )
}

export default ServicesPage