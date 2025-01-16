// import React from 'react'
// import Button from './Button'
// import { Clash } from '../../../public/fonts/fonts'

// const BottomSector = () => {
//   return (
//    <>
//     <div className='md:p-[2vw] lg:p-[4vw] p-4'>
//         <div className=' flex md:justify-between md:items-center md:flex-row flex-col md:gap-0 gap-[8vw]'
//         >
//                 <div className='flex flex-col md:w-[35%]  md:gap-[1vw] gap-[2vw]'>
//                     <div  className={`text-[--blue3] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] `}>Why Choose Us? </div>
//                     <div className={`text-[--blue3] ${Clash.className} text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] `}>We’ve handled logistics for prestigious global exhibitions, earning a reputation for reliability, efficiency, and excellence. </div>
//                     <Button text='Get In Touch' bgColor={'#02123B'} tColor={'#ffffff'} />
//                 </div>
//                 <div className=' flex relative md:w-[50%] h-full md:justify-end justify-center gap-[3vw] md:gap-[1vw] items-center '>
//                     <div className='md:w-[14vw] w-[50%] sm:w-[30%]  md:h-[17vw]  bottom-[20%]'>
//                         <img src="/images/sectors/small.png" className='rounded-xl w-full h-full object-cover' alt="" />
//                     </div>
//                     <div className='flex flex-col md:gap-[1vw] gap-[3vw]'>
//                     <div className='md:w-[30vw] md:h-[20vw]  '>
//                         <img src="/images/sectors/big.png" className='rounded-xl w-full h-full' alt="" />
//                     </div>
//                     <div className='md:h-[12vw] w-[60%] md:w-[18vw]'>
//                         <img src="/images/sectors/small2.png" className='rounded-xl ' alt="" />
//                     </div>
//                     </div>
//                 </div>
//         </div>
//     </div>
//    </>
//   )
// }

// export default BottomSector
import React from 'react';
import Button from './Button';
import { Clash } from '../../../public/fonts/fonts';

const BottomSector = ({
  title = "Why Choose Us?",
  description = "We've handled logistics for prestigious global exhibitions, earning a reputation for reliability, efficiency, and excellence.",
  buttonText = "Get In Touch",
  buttonBgColor = '#02123B',
  buttonTextColor = '#ffffff',
  image1 = "/images/sectors/small.png",
  image2 = "/images/sectors/big.png",
  image3 = "/images/sectors/small2.png"
}) => {
  return (
   <>
    <div className='md:p-[2vw] lg:p-[4vw] p-4'>
        <div className=' flex md:justify-between md:items-center md:flex-row flex-col md:gap-0 gap-[8vw]'
        >
                <div className='flex flex-col md:w-[35%]  md:gap-[1vw] gap-[2vw]'>
                    <div className={`text-[--blue3] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] `}>{title}</div>
                    <div className={`text-[--blue3] ${Clash.className} text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] `}>{description}</div>
                    <Button text={buttonText} bgColor={buttonBgColor} tColor={buttonTextColor} />
                </div>
                <div className=' flex relative md:w-[50%] h-full md:justify-end justify-center gap-[3vw] md:gap-[1vw] items-center '>
                    <div className='md:w-[14vw] w-[50%] sm:w-[30%]  md:h-[17vw]  bottom-[20%]'>
                        <img src={image1} className='rounded-xl w-full h-full object-cover' alt="" />
                    </div>
                    <div className='flex flex-col md:gap-[1vw] gap-[3vw]'>
                    <div className='md:w-[30vw] md:h-[20vw]  '>
                        <img src={image2} className='rounded-xl w-full h-full' alt="" />
                    </div>
                    <div className='md:h-[12vw] w-[60%] md:w-[18vw]'>
                        <img src={image3} className='rounded-xl ' alt="" />
                    </div>
                    </div>
                </div>
        </div>
    </div>
   </>
  )
}

export default BottomSector;