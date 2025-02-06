import React from 'react'
import { Clash, ClashM } from '../../../public/fonts/fonts'
import { FacebookLogo, LinkedinLogo, SkypeLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import TransitionLink from './TransitionLink'

const Footer = () => {

    const date = new Date().getFullYear()
    const accreditations = [
        {
            img: "/images/footer/1.png",
            tooltip: "International Federation of Freight Forwarders Associations"
        },
        {
            img: "/images/footer/2.png",
            tooltip: "International Air Transport Association"
        },
        {
            img: "/images/footer/3.png",
            tooltip: "Multimodal Transport Operator "
        },
        {
            img: "/images/footer/4.png",
            tooltip: "Federation of Freight Forwarders' Associations in India"
        },
        {
            img: "/images/footer/5.png",
            tooltip: "Good Distribution Practices"
        },
        {
            img: "/images/footer/6.png",
            tooltip: "World Cargo Alliance"
        },
        {
            img: "/images/footer/7.png",
            tooltip: "Authorised Economic Operator"
        }
    ]
  return (
    
    <footer>
        <div className='w-full h-screen md:h-[32vw] bg-[#02123b] px-4 py-4 md:px-[4vw] md:py-[3vw] relative -mt-1'>
            <div className='flex md:flex-row flex-col md:justify-between gap-[8vh] md:gap-0 h-[85%]'>
                <div className='md:w-[30%] w-full   flex flex-col justify-between gap-5 md:gap-1 lg:gap-0 '>
                    <div className='flex flex-col gap-4 md:gap-0 lg:gap-4 '>
                        <TransitionLink href='/'>
                    <img src="/images/logo6.png" alt="" className='w-[45vw] h-fit object-contain md:object-contain lg:object-cover md:w-[9vw] md:h-[9vw] lg:w-[14vw] lg:h-fit' />
                    </TransitionLink>
                    <div className={`${Clash.className} text-white md:text-[1.3vw] text-[4vw] sm:text-[3.5vw]`}>Delivering excellence in air, sea, and surface logistics worldwide.</div>
                    </div>
                    <div className='flex flex-col md:gap-3 gap-4  pb-[3.2vw]'>
                        <div  className={`${ClashM.className} text-white md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] tracking-wide`}>Accreditation</div>
                        <div className='flex justify-between '>
                            {/* <div className='bg-white w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw]  rounded-full flex justify-center items-center relative'>
                                <div className={`absolute hidden ${Clash.className} text-xs text-white w-[23vw] rounded-lg -left-11 -top-12 bg-[#333f5e] py-2 px-3 `}>International Federation of Freight Forwarders Associations</div>
                            <img src="/images/footer/1.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'> 
                            <img src="/images/footer/2.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/3.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/4.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/5.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/6.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div>
                            <div className='bg-white w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                            <img src="/images/footer/7.png" alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                            </div> */}
                            {/* {accreditations.map((item, index) => (
                                    <div key={index} className='group relative'>
                                        <div className='bg-white w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                                            <img src={item.img} alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                                        </div>
                                        <div className={`absolute hidden group-hover:block ${Clash.className} text-xs text-white w-[23vw] rounded-lg -left-11 -top-12 bg-[#333f5e] py-2 px-3`}>
                                            {item.tooltip}
                                        </div>
                                    </div>
                                ))} */}
                                {/* {accreditations.map((item, index) => (
                                    <div key={index} className='group relative'>
                                        <div className='bg-white w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                                            <img src={item.img} alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                                        </div>
                                        <div className={`absolute hidden group-hover:block ${Clash.className} text-xs text-white whitespace-nowrap rounded-lg -translate-x-1/2 -top-12 left-1/2`}>
                                            <div className="relative">
                                                <div className="bg-[#333f5e] py-2 px-3 rounded-lg">
                                                    {item.tooltip}
                                                </div>
                                                <div className="absolute w-3 h-3 bg-[#333f5e] rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))} */}
                                {accreditations.map((item, index) => (
                                    <div key={index} className='group relative'>
                                        <div className='bg-white w-[12vw] h-[12vw] md:w-[3vw] md:h-[3vw] rounded-full flex justify-center items-center'>
                                            <img src={item.img} alt="" className='w-full h-full rounded-full md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                                        </div>
                                        <div className={`absolute hidden group-hover:block ${Clash.className} text-xs text-white whitespace-nowrap rounded-lg -top-12 ${index === 0 ? 'left-0' : 'left-1/2 -translate-x-1/2'}`}>
                                            <div className="relative">
                                                <div className="bg-[#333f5e] py-2 px-3 rounded-lg">
                                                    {item.tooltip}
                                                </div>
                                                <div className={`absolute w-3 h-3 bg-[#333f5e] rotate-45 -bottom-1.5 ${index === 0 ? 'left-6' : 'left-1/2 -translate-x-1/2'}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
                <div className=' flex flex-col justify-between md:w-[55%] w-full '>
                    <div className={`${ClashM.className} text-white md:text-[1.3vw] text-[4vw] sm:text-[3.5vw] flex flex-wrap gap-3 pb-[8vw] md:pb-0 leading-4`}>
                       <TransitionLink href='/about-us'>About Us&nbsp;&nbsp;/</TransitionLink>
                       <TransitionLink href='/services'> Services&nbsp;&nbsp;/</TransitionLink>
                       <TransitionLink href='/sectors'> Sector Expertise&nbsp;&nbsp;/</TransitionLink>
                       <TransitionLink href='/gallery'> Gallery&nbsp;&nbsp;/</TransitionLink>
                       <TransitionLink href='/careers'> Careers&nbsp;&nbsp;/</TransitionLink>
                       <TransitionLink href='/contact'> Contact</TransitionLink>
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
                        {/* <div className='md:w-[30%] w-[50%] flex flex-col gap-3 pt-[3vw] md:pt-0'>
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
                        </div> */}
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