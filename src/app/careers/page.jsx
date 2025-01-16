"use client"
import { useState } from 'react'
import React from 'react'
import Navbar from '../components/Navbar'
import { Clash } from '../../../public/fonts/fonts'
import Footer from '../components/Footer'
import { UploadSimple } from '@phosphor-icons/react/dist/ssr'
import Button from '../components/Button'

const page = () => {
  const [fileName, setFileName] = useState('');
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
    <div className='w-full '>
         
         <div className='md:h-screen w-full h-[50vh]  z-['>
             <div className=' h-[100%] md:h-[100%] pb-4 md:pb-0  bg-[--blue3]'>
                 <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row h-[100%] gap-6 md:gap-0 justify-end md:justify-between md:items-center text-white ${Clash.className}  `}>
                     <div className=' text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>CAreers</div>
                     <div className='text-base pr-[8vw]  md:w-[48%] md:text-[1.7vw] lg:text-[1.3vw] h-auto md:h-[50%] flex items-end'>By joining our team, you'll be part of a company that values innovation, integrity, and collaboration. We are committed to providing an environment where talent thrives, and individuals grow both personally and professionally.</div>
                 </div>
             </div>
         </div>

         <div className='-mt-1'>
         <div className='w-full overflow-hidden hidden md:block'>
            <img src="/images/image61.png" alt="" className='md:w-screen  z-[-1] object-cover'/>
        </div>
        <div className='w-full overflow-hidden md:hidden block'>
            <img src="/images/image62.png" alt="" className='w-full z-[-1] object-cover'/>
        </div>
        </div>

        <div className={`bg-bla flex  md:px-[2vw] lg:px-[4vw] px-4 ${Clash.className} h-auto lg:h-[40vw] xl:h-[30vw] md:h-[60vw]  md:items-center`}>
            <div className='flex md:justify-between w-full md:flex-row flex-col  pt-6 md:pt-0 gap-14 '>
            <div className='  md:w-[30%] w-full text-[--blue3] capitalize l:text-[4vw] md:text-[4.9vw] lg:text-[4.5vw] text-[10vw]'>
            Why Work With Us?
            </div>
            <div className='flex flex-col md:w-[45%]  text-base  lg:text-lg gap-6 text-[--blue3]' >
                <div>
                At Channel Freight Services, we believe our people are our greatest strength. We are committed to providing an environment where talent thrives, and individuals grow both personally and professionally.
                </div>
                <div>
                If you’re passionate about making a difference in the logistics industry, we’d love to hear from you. 
                </div>
                <div>
                Apply now and take the first step toward a rewarding career with Channel Freight Services.
                </div>
            </div>
            </div>
        
        </div>

        <div className={` flex  md:px-[2vw] lg:px-[4vw] py-[8vw] md:pt-0 overflow-hidden  px-4 ${Clash.className}  w-full items-center`}>
        <div className="flex justify-between md:flex-row flex-col gap-[14vw] md:gap-0 w-full ">
            <div className="md:w-[38%] flex flex-col gap-[6vw] md:gap-[3vw] lg:gap-[2vw] order-2 md:order-2">
              <div
                className={`${Clash.className} text-[--blue3] xl:text-[4vw] md:text-[4.9vw] lg:text-[4.5vw] text-[10vw] tracking-wide   leading-[1.2]`}
              >
                Join Our Team
              </div>
              <div
                className={`${Clash.className} text-[--blue3] text-base  lg:text-lg tracking-wide   leading-[1.2]`}
              >
              Apply now and take the first step towards an exciting career with us.
              </div>
              <div className="flex flex-col gap-[5vw] md:gap-[2vw] lg:gap-[1.5vw]">
                <div className="bg-transparent border text-[4vw] md:text-[2vw] lg:text-[1.2vw]  border-[#515b73] rounded-xl w-full h-[15vw] md:h-[6.5vw] lg:h-[4.2vw] flex flex-col justify-center">
                  <div
                    className={`${Clash.className}  text-[#677189] uppercase px-2 pt-2`}
                  >
                    your Name
                  </div>
                  <input
                    className={`bg-transparent text-white w-full h-full rounded-xl border-none focus:outline-none px-2 ${Clash.className}`}
                    type="text"
                  />
                </div>
                <div className="bg-transparent border text-[4vw] md:text-[2vw] lg:text-[1.2vw] border-[#515b73] rounded-xl w-full h-[15vw] md:h-[6.5vw] lg:h-[4vw] flex flex-col justify-center">
                  <div
                    className={`${Clash.className}  text-[#677189] uppercase px-2 pt-2`}
                  >
                    phone number
                  </div>
                  <input
                    className={`bg-transparent text-white w-full h-full rounded-xl border-none focus:outline-none px-2 ${Clash.className}`}
                    type="text"
                  />
                </div>
                <div className="bg-transparent border text-[4vw] md:text-[2vw] lg:text-[1.2vw] border-[#515b73] rounded-xl w-full h-[15vw] md:h-[6.5vw] lg:h-[4vw] flex flex-col justify-center">
                  <div
                    className={`${Clash.className}  text-[#677189] uppercase px-2 pt-2`}
                  >
                    email
                  </div>
                  <input
                    className={`bg-transparent text-white w-full h-full rounded-xl border-none focus:outline-none px-2 ${Clash.className}`}
                    type="text"
                  />
                </div>
                <div className="bg-transparent border text-[4vw] md:text-[2vw] lg:text-[1.2vw] border-[#515b73] rounded-xl w-full h-[15vw] md:h-[9.5vw] lg:h-[7vw] flex flex-col justify-center">
                  <div
                    className={`${Clash.className}  text-[#677189] uppercase px-2 pt-2`}
                  >
                    job roles
                  </div>
                  {/* <input
                    className={`bg-transparent text-white w-full h-full rounded-xl border-none focus:outline-none px-2 ${Clash.className}`}
                    type="file"
                  /> */}
                </div>
                <div className="max-w-xl w-full">
      <label 
        htmlFor="resume-upload" 
        className={`${Clash.className} bg-transparent border text-[4vw] md:text-[2vw] lg:text-[1.2vw] border-[#515b73] rounded-xl w-full h-[15vw] md:h-[6.5vw] lg:h-[4vw] flex flex-col justify-center px-2`}
      >
        <input
          id="resume-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />
        
        <div className="flex items-center justify-between text-gray-400">
          <span className="text-lg">
            {fileName || 'CLICK HERE TO UPLOAD RESUME'}
          </span>
          <UploadSimple size={32} />
        </div>
      </label>
    </div>
              </div>
              {/* <div
                className={`${Clash.className} cursor-pointer flex xl:text-[1vw] md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] w-fit bg-[--blue3] text-[#ffffff]  px-4 py-2 rounded-full items-center justify-center`}
              >
                Submit
              </div> */}
              <Button text='Submit' tColor='#ffffff' bgColor='#02123B' />
            </div>
            <div className="md:w-[55%] h-[80vw] md:h-auto order-1 md:order-1">
              <img src="/images/img42.jpg" className="rounded-2xl w-full h-full" alt="" />
            </div>
          </div>
        </div>


         </div>
         <Footer/>
         </>
  )
}

export default page
// lg:h-[40vw] xl:h-[30vw] md:h-[60vw]