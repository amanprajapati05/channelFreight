import React from 'react'
import { Clash, ClashM } from '../../../public/fonts/fonts'
import { FacebookLogo, LinkedinLogo, SkypeLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

const Footer = () => {

    const date = new Date().getFullYear()
  return (
    
    <footer>
        <div className='w-full h-screen md:h-[32vw] bg-[#02123b] px-4 py-4 md:px-[4vw] md:py-[3vw] relative'>
            <div className='flex md:flex-row flex-col md:justify-between gap-[8vh] md:gap-0 h-[85%]'>
                <div className='md:w-[30%] w-full   flex flex-col justify-between gap-5 md:gap-1 lg:gap-0 '>
                    <div className='flex flex-col gap-4 md:gap-0 lg:gap-4 '>
                    <img src="/images/logo.png" alt="" className='w-[36vw] h-fit object-cover md:object-contain lg:object-cover md:w-[9vw] md:h-[9vw] lg:w-[14vw] lg:h-fit' />
                    <div className={`${Clash.className} text-white md:text-[1.3vw] text-[4vw] sm:text-[3.5vw]`}>Delivering excellence in air, sea, and surface logistics worldwide.</div>
                    </div>
                    <div className='flex flex-col md:gap-3 gap-4  pb-[3.2vw]'>
                        <div  className={`${ClashM.className} text-white md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] tracking-wide`}>Accreditation</div>
                        <div className='flex justify-between '>
                            <div className='bg-white w-[3rem] md:w-[3vw] md:h-[3vw] h-[3rem] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/1.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[3rem] h-[3rem] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'> 
                            <img src="/images/footer/2.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[3rem] h-[3rem] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/3.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[3rem] h-[3rem] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/4.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[3rem] h-[3rem] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/5.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[3rem] h-[3rem] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/6.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[3rem] h-[3rem] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/7.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col justify-between md:w-[55%] w-full '>
                    <div className={`${ClashM.className} text-white md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] flex flex-wrap gap-3 pb-[4vw] md:pb-0`}>
                       <Link href='/about-us'>About Us&nbsp;&nbsp;/</Link>
                       <Link href='/services'> Services&nbsp;&nbsp;/</Link>
                       <Link href='/sectors'> Sector Expertise&nbsp;&nbsp;/</Link>
                       <Link href='/gallery'> Gallery&nbsp;&nbsp;/</Link>
                       <Link href='/careers'> Careers&nbsp;&nbsp;/</Link>
                       <Link href='/contact'> Contact</Link>
                    </div>
                    <div className='flex justify-between flex-wrap '>
                        <div className='md:w-[30%] w-[50%] flex flex-col gap-3'>
                            <div className={`${ClashM.className} text-white md:text-[1.3vw] text-[4vw] sm:text-[3.5vw]`}>Location</div>
                            <Link href='https://maps.app.goo.gl/vJjGJPPNySKy9Eey8' className={`${Clash.className} text-white tracking-wide text-[3.5vw] sm:text-[3vw] md:text-[1vw]`}>Suite# 112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri East,
                            Mumbai - 400099, India</Link>
                        </div>
                        <div className='md:w-[30%] w-[50%] flex flex-col gap-3'>
                            <div className={`${ClashM.className} text-white md:text-[1.3vw] text-[4vw] sm:text-[3.5vw]`}>Contact Us</div>
                            <div className={`${Clash.className} text-white tracking-wide text-[3.5vw] sm:text-[3vw] md:text-[1vw]`}>
                            <div><a href="mailto:sanjay@channel-freight.com">sanjay@channel-freight.com</a></div>
                            <div><a href="tel:02242148000">022 4214 8000</a></div>
                                 </div>
                        </div>
                        <div className='md:w-[30%] w-[50%] flex flex-col gap-3 pt-[3vw] md:pt-0'>
                            <div className={`${ClashM.className} text-white md:text-[1.3vw] text-[4vw] sm:text-[3.5vw]`}>Social Links</div>
                            <div className='flex gap-2'>
                            <div className='w-fit h-fit justify-center items-center flex p-1 bg-white rounded-full '>
                                <div><SkypeLogo  weight="fill"  color="#02123b" className='lg:w-[1.8vw] lg:h-[1.8vw] w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw] md:w-[1.8vw] md:h-[1.8vw]' /></div>
                            </div>
                            <div className='w-fit h-fit justify-center items-center flex p-1 bg-white rounded-full '>
                                <div><LinkedinLogo  weight="fill"  color="#02123b" className='md:w-[1.8vw] md:h-[1.8vw] w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw]' /></div>
                            </div>
                            <div className='w-fit h-fit justify-center items-center flex p-1 bg-white rounded-full '>
                                <div><FacebookLogo  weight="fill"  color="#02123b" className='md:w-[1.8vw] md:h-[1.8vw] w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw]' /></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-2 md:gap-0 relative  -bottom-10 tracking-wide'>
                <div className={`${Clash.className} text-[#C8C8C8] text-[3vw] sm:text-[2vw] md:text-[0.8vw]`}>© {date}  Copyright - All Rights reserved </div>
                <div className={`${Clash.className} text-[#C8C8C8] flex gap-1 text-[3vw] sm:text-[2vw] md:text-[0.8vw] `}>Designed by 
                <Link href='https://www.beeyond.agency' target='_blank' className={`${ClashM.className} text-[#C8C8C8] `}> Beeyond Tech</Link>
                </div>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer