'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Clash, ClashM } from '../../../public/fonts/fonts';
import { usePathname } from 'next/navigation';
import { CaretDown, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import TransitionLink from './TransitionLink';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const navRef = useRef(null);
  const navbarRef = useRef(null);
  const hamburgerLinesRef = useRef([]);
  const pathname = usePathname();

  // Helper function to check if a path is active
  const isActivePath = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  useEffect(() => {
    if (navRef.current) {
      gsap.set(navRef.current, {
        yPercent: -100,
        rotationX: -90,
        transformOrigin: "top"
      });
    }
  }, []);

  const toggleNav = () => {
    const tl = gsap.timeline();
    
    if (!isOpen) {
      tl.to(navRef.current, {
        yPercent: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });

      tl.to(navbarRef.current, {
        backgroundColor: 'white',
        duration: 0.2
      }, "-=0");

      tl.to(hamburgerLinesRef.current[0], {
        rotate: 50,
        y: 3,
       
        duration: 0.6,
        backgroundColor: "#02123b"
      }, "-=0.6");
      
      tl.to(hamburgerLinesRef.current[1], {
        rotate: -50,
        y: -3,
        
        duration: 0.6,
        backgroundColor: "#02123b"
      }, "-=0.6");

    } else {
      tl.to(navbarRef.current, {
        backgroundColor: 'transparent',
        duration: 0.2
      });

      tl.to(navRef.current, {
        yPercent: -100,
        rotationX: -90,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.1");

      tl.to(hamburgerLinesRef.current, {
        rotate: 0,
        y: 0,
        duration: 0.6,
        backgroundColor: "white"
      }, "-=0.6");
    }

    setIsOpen(!isOpen);
    if (isOpen) {
      setServicesOpen(false);
      setSectorsOpen(false);
    }
  };

  return (
    <>
      <div ref={navbarRef} className={`${isOpen ? 'fixed' : 'absolute'} top-0 left-0 w-full z-[9999999]`}>
        <div className="flex justify-between items-center px-2 py-3 z-[99999]">
          <TransitionLink href='/' className="md:hidden">
            {isOpen ? 
              <img src="/images/logo2.png" className="w-[35vw] " alt="logo" /> : 
              <img src="/images/logo3.png" className="w-[35vw] h-full" alt="logo" />
            }
          </TransitionLink>
          <button
            onClick={toggleNav}
            className={`md:hidden h-fit text-center flex gap-2 items-center border px-2 py-1 rounded ${isOpen ? 'text-[#02123b] border-[#02123b]' : 'text-white border-white'}`}
          >
            <div className={`${ClashM.className} text-base tracking-wider`}>
              {isOpen ? 'Close' : 'Menu'}
            </div>
            <div className="flex flex-col">
              <div
                ref={el => hamburgerLinesRef.current[0] = el}
                className="w-4 h-[2px] mb-[2px] rounded-full transform-gpu bg-white"
              ></div>
              <div
                ref={el => hamburgerLinesRef.current[1] = el}
                className="w-4 h-[2px] mt-[2px] rounded-full transform-gpu bg-white"
              ></div>
            </div>
          </button>
        </div>
      </div>

      <div
        ref={navRef}
        className="fixed pt-[20vw] left-0 w-full h-screen bg-white md:hidden overflow-y-auto z-[9999]"
      >
        <div className={`${Clash.className} flex flex-col text-[#02123b] text-[7.5vw] px-2 pt-4 pb-20`}>
          <TransitionLink href='/' className="flex items-center h-fit gap-1">
            HOME
            {isActivePath('/') && <ArrowUpRight size={28} weight="bold" />}
          </TransitionLink>
          
          <TransitionLink href='/about-us' className="flex items-center h-fit gap-1">
            ABOUT US
            {isActivePath('/about-us') && <ArrowUpRight size={28} weight="bold" />}
          </TransitionLink>
          
          <div className="flex items-center h-fit gap-1">
            <TransitionLink href='/services' className="flex-1">SERVICES</TransitionLink>
            {isActivePath('/services') && <ArrowUpRight size={28} weight="bold" />}
            <CaretDown 
              size={28} 
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {servicesOpen && (
            <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col pl-4`}>
              {[
                ['air-freight', 'AIR FREIGHT'],
                ['sea-freight', 'SEA FREIGHT'],
                ['project-logistics', 'PROJECT LOGISTICS'],
                ['charter-services', 'CHARTER SERVICES'],
                ['cross-trade', 'CROSS TRADE'],
                ['supply-chain', 'SUPPLY CHAIN SOLUTIONS'],
                ['customs-brokerage', 'CUSTOMS BROKERAGE'],
                ['value-added-services', 'VALUE ADDED SERVICES']
              ].map(([path, label]) => (
                <TransitionLink 
                  key={path} 
                  href={`/services/${path}`}
                  className="flex items-center h-fit gap-1"
                >
                  {label}
                  {isActivePath(`/services/${path}`) && <ArrowUpRight size={20} weight="bold" />}
                </TransitionLink>
              ))}
            </div>
          )}
          
          <div className="flex items-center h-fit gap-1">
            <TransitionLink href='/sectors' className="flex-1">SECTOR EXPERTISE</TransitionLink>
            {isActivePath('/sectors') && <ArrowUpRight size={28} weight="bold" />}
            <CaretDown 
              size={28} 
              onClick={() => setSectorsOpen(!sectorsOpen)}
              className={`transform transition-transform ${sectorsOpen ? 'rotate-180' : ''}`}
            />
          </div>
          
          {sectorsOpen && (
            <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col pl-4`}>
              {[
                ['pharmaceuticals', 'PHARMACEUTICALS'],
                ['hazardous-chemicals', 'HAZARDOUS CHEMICALS'],
                ['cold-chain-products', 'COLD CHAIN PRODUCTS'],
                ['packaging', 'PACKAGING SOLUTIONS'],
                ['exhibition-relocation', 'EXHIBITION & RELOCATION'],
                ['engineering', 'ENGINEERING']
              ].map(([path, label]) => (
                <TransitionLink 
                  key={path} 
                  href={`/sectors/${path}`}
                  className="flex items-center h-fit gap-1"
                >
                  {label}
                  {isActivePath(`/sectors/${path}`) && <ArrowUpRight size={20} weight="bold" />}
                </TransitionLink>
              ))}
            </div>
          )}
          
          <TransitionLink href='/contact' className="flex items-center h-fit gap-1">
            CONTACT
            {isActivePath('/contact') && <ArrowUpRight size={28} weight="bold" />}
          </TransitionLink>
          
          <TransitionLink href='/careers' className="flex items-center h-fit gap-1">
            CAREERS
            {isActivePath('/careers') && <ArrowUpRight size={28} weight="bold" />}
          </TransitionLink>
          
          <TransitionLink href='/gallery' className="flex items-center h-fit gap-1">
            GALLERY
            {isActivePath('/gallery') && <ArrowUpRight size={28} weight="bold" />}
          </TransitionLink>

          <div className='pt-[12vw]'>
           <div className={`text-[4vw] ${ClashM.className}`}>Accrediation</div>
            <div className='flex flex-col md:gap-3 gap-4 py-4 '>
                                    <div className='flex justify-between '>
                                        <div className='bg-white w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw]   flex justify-center items-center relative'>
                                        <img src="/images/footer/1.png" alt="" className='w-full h-full  md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                                        </div>
                                        <div className='bg-white w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw]  flex justify-center items-center'> 
                                        <img src="/images/footer/2.png" alt="" className='w-full h-full  md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                                        </div>
                                        <div className='bg-white w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw]  flex justify-center items-center'>
                                        <img src="/images/footer/3.png" alt="" className='w-full h-full  md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                                        </div>
                                        <div className='bg-white w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw]  flex justify-center items-center'>
                                        <img src="/images/footer/4.png" alt="" className='w-full h-full  md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                                        </div>
                                        <div className='bg-white w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw]  flex justify-center items-center'>
                                        <img src="/images/footer/5.png" alt="" className='w-full h-full  md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                                        </div>
                                        <div className='bg-white w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw]  flex justify-center items-center'>
                                        <img src="/images/footer/6.png" alt="" className='w-full h-full  md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                                        </div>
                                        <div className='bg-white w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw]  flex justify-center items-center'>
                                        <img src="/images/footer/7.png" alt="" className='w-full h-full  md:w-[3vw] md:h-[3vw] lg:w-fit lg:h-fit object-contain' />
                                        </div>
                                    </div>
                                </div>
          </div>

          <div className='flex gap-[6vw] pt-[6vw]'>
            <div className={` flex text-[4vw] items-center gap-1 ${ClashM.className}`}>
              Facebook <ArrowUpRight  weight="bold" />
            </div>
            <div className={` flex text-[4vw] items-center gap-1 ${ClashM.className}`}>
              Linkedin <ArrowUpRight  weight="bold" />
            </div>
            <div className={` flex text-[4vw] items-center gap-1 ${ClashM.className}`}>
              Skype <ArrowUpRight  weight="bold" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
