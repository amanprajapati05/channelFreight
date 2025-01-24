'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Clash, ClashM } from '../../../public/fonts/fonts';
import { usePathname } from 'next/navigation';
import { CaretDown, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

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
        y: 2,
        duration: 0.6,
        backgroundColor: "var(#02123b)"
      }, "-=0.6");
      
      tl.to(hamburgerLinesRef.current[1], {
        rotate: -50,
        y: -2,
        duration: 0.6,
        backgroundColor: "var(#02123b)"
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
      <div ref={navbarRef} className={`${isOpen ? 'fixed' : 'absolute'} top-0 left-0 w-full z-[999999]`}>
        <div className="flex justify-between items-center px-2 py-3 z-[99999]">
          <div className="md:hidden">
            {isOpen ? 
              <img src="/images/logo21.png" className="w-full h-full" alt="logo" /> : 
              <img src="/images/logo22.png" className="w-full h-full" alt="logo" />
            }
          </div>
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
          <Link href='/' className="flex items-center h-fit gap-1">
            HOME
            {isActivePath('/') && <ArrowUpRight size={28} weight="bold" />}
          </Link>
          
          <Link href='/about-us' className="flex items-center h-fit gap-1">
            ABOUT US
            {isActivePath('/about-us') && <ArrowUpRight size={28} weight="bold" />}
          </Link>
          
          <div className="flex items-center h-fit gap-1">
            <Link href='/services' className="flex-1">SERVICES</Link>
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
                ['air', 'AIR FREIGHT'],
                ['sea', 'SEA FREIGHT'],
                ['projectlogistics', 'PROJECT LOGISTICS'],
                ['charter', 'CHARTER SERVICES'],
                ['cross', 'CROSS TRADE'],
                ['supply', 'SUPPLY CHAIN SOLUTIONS'],
                ['customs', 'CUSTOMS BROKERAGE'],
                ['value', 'VALUE ADDED SERVICES']
              ].map(([path, label]) => (
                <Link 
                  key={path} 
                  href={`/services/${path}`}
                  className="flex items-center h-fit gap-1"
                >
                  {label}
                  {isActivePath(`/services/${path}`) && <ArrowUpRight size={20} weight="bold" />}
                </Link>
              ))}
            </div>
          )}
          
          <div className="flex items-center h-fit gap-1">
            <Link href='/sectors' className="flex-1">SECTOR EXPERTISE</Link>
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
                ['pharma', 'PHARMACEUTICALS'],
                ['hazardous', 'HAZARDOUS CHEMICALS'],
                ['cold', 'COLD CHAIN PRODUCTS'],
                ['packaging', 'PACKAGING SOLUTIONS'],
                ['exhibition', 'EXHIBITION & RELOCATION'],
                ['engineering', 'ENGINEERING']
              ].map(([path, label]) => (
                <Link 
                  key={path} 
                  href={`/sectors/${path}`}
                  className="flex items-center h-fit gap-1"
                >
                  {label}
                  {isActivePath(`/sectors/${path}`) && <ArrowUpRight size={20} weight="bold" />}
                </Link>
              ))}
            </div>
          )}
          
          <Link href='/contact' className="flex items-center h-fit gap-1">
            CONTACT
            {isActivePath('/contact') && <ArrowUpRight size={28} weight="bold" />}
          </Link>
          
          <Link href='/careers' className="flex items-center h-fit gap-1">
            CAREERS
            {isActivePath('/careers') && <ArrowUpRight size={28} weight="bold" />}
          </Link>
          
          <Link href='/gallery' className="flex items-center h-fit gap-1">
            GALLERY
            {isActivePath('/gallery') && <ArrowUpRight size={28} weight="bold" />}
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
