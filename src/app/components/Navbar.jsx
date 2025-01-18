
'use client'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Clash,  ClashM } from '../../../public/fonts/fonts'
import gsap from "gsap";
import { Airplane,  Boat, ChartBar, Cube, DropboxLogo, Flask, GearFine, GlobeSimple, Nut, Package, Pill, ShippingContainer, ThermometerSimple, TrainRegional } from '@phosphor-icons/react/dist/ssr'
import MobileNavbar from './MobileNavbar'
import Link from 'next/link';


const NavItem = ({ children, onMouseEnter, isActive, isPersistent,link }) => {
  const pathname = usePathname()
  const underlineRef = useRef(null)
  const isCurrentRoute = pathname === link

  useEffect(() => {
    if (isPersistent || isCurrentRoute) {
      gsap.to(underlineRef.current, {
        width: "100%",
        left: "0%",
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(underlineRef.current, {
        width: "0%",
        left: "100%",
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(underlineRef.current, { left: "0%" });
        }
      });
    }
  }, [isPersistent, isCurrentRoute]);

  const handleMouseEnter = (e) => {
    if (!isPersistent && !isCurrentRoute) {
      gsap.fromTo(underlineRef.current,
        { width: "0%", left: "0%" },
        { width: "100%", left: "0%", duration: 0.3, ease: "power2.out" }
      );
    }
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = () => {
    if (!isPersistent && !isCurrentRoute) {
      gsap.to(underlineRef.current, {
        right: "100%", 
        width: "0%", 
        duration: 0.3, 
        ease: "power2.out",
        onComplete: () => {
          gsap.set(underlineRef.current, { left: "0%" });
        }
      });
    }
  };

  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={link}>
      {children}
      </Link>
      <div 
        ref={underlineRef} 
        className={`absolute bottom-0 h-[2px] ${isActive ? 'bg-[#02123b]' : 'bg-white'}`}
        style={{ width: (isPersistent || isCurrentRoute) ? "100%" : "0%" }}
      />
    </div>
  );
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (activeMenu) {
      gsap.fromTo(
        menuRef.current,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        }
      );
    }
  }, [activeMenu]);


  useEffect(() => {
    const getResponsiveHeight = () => {
      // Get the current window width
      const width = window.innerWidth;
      
      // Define collapsed heights
      let collapsedHeight;
      if (width < 640) { // sm
        collapsedHeight = 64; // equivalent to h-16
      } else if (width < 768) { // md
        collapsedHeight = 80; // equivalent to h-20
      } else if (width < 1024) { // lg
        collapsedHeight = 96; // equivalent to h-24
      } else { // xl and larger
        collapsedHeight = 112; // equivalent to h-28
      }
      
      // Define expanded heights
      let expandedHeight;
      if (width < 640) { // sm
        expandedHeight = 256; // equivalent to h-64
      } else if (width < 768) { // md
        expandedHeight = 200; // equivalent to h-80
      } else if (width < 1024) { // lg
        expandedHeight = '42vw'; // equivalent to h-96
      } else if (width < 1280) { // xl and larger
        expandedHeight = '36vw'; // equivalent to h-112
      }
      else{
        expandedHeight = '28vw'; // equivalent to h-
      }

      
      return { collapsedHeight, expandedHeight };
    };

    const { collapsedHeight, expandedHeight } = getResponsiveHeight();

    if (activeMenu) {
      gsap.fromTo(
        containerRef.current,
        {
          height: collapsedHeight,
          y: 0,
        },
        {
          height: expandedHeight,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        }
      );
    } else {
      gsap.to(containerRef.current, {
        height: collapsedHeight,
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    // Add resize listener to update heights when screen size changes
    const handleResize = () => {
      const { collapsedHeight, expandedHeight } = getResponsiveHeight();
      gsap.set(containerRef.current, {
        height: activeMenu ? expandedHeight : collapsedHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeMenu]);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="h-20 relative mt-2 z-[99999999] " onMouseLeave={handleMouseLeave}>
      <MobileNavbar/>

      <div  ref={containerRef}  className={activeMenu ? 'mx-2  md:h-[28vw]  rounded-2xl bg-white' : 'h-[6vw]'}>
        {/* Main navbar */}
        <div className="hidden relative justify-end md:px-[2vw] lg:px-[4vw] px-4 items-center md:h-[10vw] lg:h-[8vw] xl:h-[6vw] text-[#02123b] md:flex rounded-2xl">
          <div className="absolute md:left-[2vw] lg:left-[4vw] hidden md:block">
            <Link href={'/'}>
            <img 
              src={activeMenu ? '/images/img4.png' : '/images/image5.png'} 
              className="md:w-[15vw] lg:w-[14vw] xl:w-[10vw]" 
              alt="logo" 
            />
            </Link>
          </div>
          <div className={`md:flex justify-center md:gap-[2.5vw] items-center h-[6vw] ${activeMenu ? 'text-[#02123b]' : 'text-white'} hidden md:text-[1.7vw] lg:text-[1.4vw] xl:text-[1.1vw] ${Clash.className}`}>
          <NavItem 
              isActive={activeMenu}
              onMouseEnter={() => setActiveMenu(null)}
              link='/about'
            >
              ABOUT US
            </NavItem>
            <NavItem 

              onMouseEnter={() => handleMouseEnter('services')}
              isActive={activeMenu}
              isPersistent={activeMenu === 'services'}
              link='/services'
            >
              SERVICES
            </NavItem>

            <NavItem 
              onMouseEnter={() => handleMouseEnter('sectors')}
              isActive={activeMenu}
              isPersistent={activeMenu === 'sectors'}
              link='/sectors'
            >
              SECTOR EXPERTISE
            </NavItem>
            <NavItem 
              isActive={activeMenu}
              onMouseEnter={() => setActiveMenu(null)}
              link='/careers'
            >
              CAREERS
            </NavItem>
            <NavItem 
              isActive={activeMenu}
              onMouseEnter={() => setActiveMenu(null)}
              link='/contact'
            >
              CONTACT
            </NavItem>
          </div>
        </div>

        {/* Dropdown menus */}
        {activeMenu && (
          <div ref={menuRef} className="w-full md:h-[32vw] lg:h-[30vw] xl:h-[22vw] rounded-2xl ">
            <div className="w-full flex flex-col justify-around h-full">
              {activeMenu === 'sectors' && (
                <>
                  <div className="flex justify-between md:px-[2vw] lg:px-[4vw]">
                    
                    <Link href='/sectors/pharma' className="flex flex-col hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl items-start w-[30%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><Pill className="lg:w-[1.4vw] lg:h-[1.4vw] md:w-[1.8vw] md:h-[1.8vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Pharmaceuticals</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Safe, temperature-controlled transport maintaining regulatory compliance
                      </div>
                    </Link>
                   
                    <Link href='/sectors/hazardous' className="flex flex-col hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl items-start w-[30%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><Flask className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Hazardous Chemicals</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Secure handling and transport solutions for regulated and hazardous materials.
                      </div>
                    </Link>
                    <Link href='/sectors/cold' className="flex flex-col hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl items-start w-[30%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><ThermometerSimple className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Cold Chain Products</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Efficient temperature-controlled logistics for sensitive goods, ensuring freshness and safety.
                      </div>
                    </Link>
                  </div>
                  <div className="flex justify-between md:px-[2vw] lg:px-[4vw]">
                    <div className="flex flex-col hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl items-start w-[30%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><GearFine className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Engineering</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Tailored logistics for complex machinery and engineering equipment across industries.
                      </div>
                    </div>
                    <div className="flex flex-col hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl items-start w-[30%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><Cube className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Packaging Solutions</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Customized packaging designed for secure, efficient transport of various goods.
                      </div>
                    </div>
                    <Link href='/sectors/exhibition' className="flex flex-col hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl items-start w-[30%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><DropboxLogo className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Exhibition & Relocation</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Comprehensive support for seamless event logistics and relocation services worldwide.
                      </div>
                    </Link>
                  </div>
                </>
              )}

              {activeMenu === 'services' && (
                <>
                  <div className="flex justify-between md:px-[2vw] lg:px-[4vw]">
                    <Link href='/services/air' className="flex flex-col hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl items-start w-[24%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><Airplane className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Air Freight Services</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Rapid global air transport for urgent and critical shipments.
                      </div>
                    </Link>
                    <Link href='/services/sea' className="hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl flex flex-col items-start w-[24%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><Boat className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Sea Freight Services</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Cost-effective ocean shipping for bulk or containerized cargo.
                      </div>
                    </Link>
                    <Link href='/services/supply' className=" hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl flex flex-col items-start w-[24%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><Nut className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Supply Chain Solutions</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        End-to-end logistics management for streamlined business operations.
                      </div>
                    </Link>
                    <Link href='/services/project' className=" hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl flex flex-col items-start w-[24%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><ChartBar className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Project Logistics</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Managing specialized cargo operations with tailored solutions & global expertise.
                      </div>
                    </Link>
                  </div>
                  <div className="flex justify-between md:px-[2vw] lg:px-[4vw]">
                    <Link href='/services/customs' className=" hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl flex flex-col items-start w-[24%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><TrainRegional className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Customs Brokerage</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Simplifying customs clearance by expert compliance & minimal shipment delays.
                      </div>
                    </Link>
                    <Link href='/services/charter' className=" hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl flex flex-col items-start w-[24%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><ShippingContainer className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Charter Services</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        On-demand air transport for urgent or specialized cargo.
                      </div>
                    </Link>
                    <Link href='/services/cross' className=" hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl flex flex-col items-start w-[24%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><GlobeSimple className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Cross Trade</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Expert logistics for international shipments across multiple countries.
                      </div>
                    </Link>
                    <Link href='/services/value' className=" hover:bg-[#f5f5f5] py-[1vw] px-[2vw] hover:rounded-xl flex flex-col items-start w-[24%] gap-[0.5vw] cursor-pointer">
                      <div className="flex justify-center items-center text-[#02123b] gap-[0.5vw]">
                        <div><Package className="w-[1.4vw] h-[1.4vw]" color="#02123b" /></div>
                        <div className={`${ClashM.className} md:text-[1.8vw] lg:text-[1.6vw]  xl:text-[1.3vw]`}>Value Added Services</div>
                      </div>
                      <div className={`${Clash.className} text-[#02123b] md:text-[1.6vw] lg:text-[1.4vw] xl:text-[1vw]`}>
                        Customized packaging, labeling, and inventory services for flexibility.
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar