import React from 'react'
import Navbar from '../components/Navbar'
import { Clash } from '../../../public/fonts/fonts'
import Services from '../components/Services'

const page = () => {
  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
    {/* <div className='w-full h-screen'>
         
         <div className='md:h-full w-full h-[60%]  z-['>
             <div className=' h-[100%] md:h-[100%] pb-4 md:pb-0  bg-[--blue3]'>
                 <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row h-[100%] gap-6 md:gap-0 justify-end md:justify-between md:items-center text-white ${Clash.className}  `}>
                     <div className=' text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>Services</div>
                     <div className='text-base pr-[8vw]  md:w-[48%] md:text-[1.7vw] lg:text-[1.3vw] h-auto md:h-[50%] flex items-end'>Discover our full suite of logistics services, including air, sea, and supply chain solutions, tailored to streamline operations and deliver excellence across industries worldwide.</div>
                 </div>
             </div>
         </div>

         <div>
         <div className='w-full overflow-hidden hidden md:block'>
            <img src="/images/img64.png" alt="" className='md:w-screen  z-[-1] object-cover'/>
        </div>
        <div className='w-full overflow-hidden md:hidden block'>
            <img src="/images/img43.png" alt="" className='w-full z-[-1] object-cover'/>
        </div>
        </div>
        </div> */}
        <Services/>
        </>
  )
}

export default page