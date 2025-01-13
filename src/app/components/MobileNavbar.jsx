'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
// import { ArrowUpRight, CaretDown } from 'lucide-react';
import Link from 'next/link';
import { Clash, ClashL, ClashM } from '../../../public/fonts/fonts'
import { usePathname } from 'next/navigation';
import { CaretDown,ArrowUpRight, } from '@phosphor-icons/react/dist/ssr';

// const MobileNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [sectorsOpen, setSectorsOpen] = useState(false);
//   const navRef = useRef(null);
//   const hamburgerLinesRef = useRef([]);
//   const pathname = usePathname();

//   useEffect(() => {
//     // Initial setup - move navbar out of view
//     if (navRef.current) {
//       gsap.set(navRef.current, {
//         yPercent: -100,
//         rotationX: -90,
//         transformOrigin: "top"
//       });
//     }
//   }, []);

//   const toggleNav = () => {
//     const tl = gsap.timeline();
    
//     if (!isOpen) {
//       // Opening animation
//       tl.to(navRef.current, {
//         yPercent: 0,
//         rotationX: 0,
//         duration: 0.6,
//         ease: "power2.inOut"
//       });

//       // Animate hamburger to cross
//       tl.to(hamburgerLinesRef.current[0], {
//         rotate: 45,
//         y: 2,
//         duration: 0.3,
//         backgroundColor: "var(--blue3)"
//       }, "-=0.6");
      
//       tl.to(hamburgerLinesRef.current[1], {
//         rotate: -45,
//         y: -2,
//         duration: 0.3,
//         backgroundColor: "var(--blue3)"
//       }, "-=0.6");

//     } else {
//       // Closing animation
//       tl.to(navRef.current, {
//         yPercent: -100,
//         rotationX: -90,
//         duration: 0.6,
//         ease: "power2.inOut"
//       });

//       // Animate cross back to hamburger
//       tl.to(hamburgerLinesRef.current, {
//         rotate: 0,
//         y: 0,
//         duration: 0.3,
//         backgroundColor: "white"
//       }, "-=0.6");
//     }

//     setIsOpen(!isOpen);
//     if (isOpen) {
//       setServicesOpen(false);
//       setSectorsOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* Button always visible */}
//       <div className="flex justify-between items-center px-2 py-3">
//         <div className="md:hidden">
//           <img 
//             src={isOpen ? "/images/logo21.png" : "/images/logo22.png"} 
//             className="w-full h-full" 
//             alt="logo" 
//           />
//         </div>
//         <button
//           onClick={toggleNav}
//           className={`md:hidden h-fit text-center flex gap-2 items-center border px-2 py-1 rounded ${
//             isOpen 
//               ? "text-[--blue3] border-[--blue3]" 
//               : "text-white border-white"
//           }`}
//         >
//           <div className={`${ClashM.className} text-base tracking-wider`}>
//             {isOpen ? "Close" : "Menu"}
//           </div>
//           <div className="flex flex-col">
//             <div
//               ref={el => hamburgerLinesRef.current[0] = el}
//               className={`w-4 h-[2px] mb-[2px] rounded-full transform-gpu ${
//                 isOpen ? "bg-[--blue3]" : "bg-white"
//               }`}
//             ></div>
//             <div
//               ref={el => hamburgerLinesRef.current[1] = el}
//               className={`w-4 h-[2px] mt-[2px] rounded-full transform-gpu ${
//                 isOpen ? "bg-[--blue3]" : "bg-white"
//               }`}
//             ></div>
//           </div>
//         </button>
//       </div>

//       {/* Navigation Menu */}
//       <div
//         ref={navRef}
//         className={`fixed top-0 left-0 w-full h-screen bg-white md:hidden ${
//           (servicesOpen || sectorsOpen) ? 'h-full' : 'h-screen'
//         }`}
//       >
//         <div className={`${Clash.className} flex flex-col text-[--blue3] text-[7.5vw] px-2`}>
//           <div className='flex items-center h-fit gap-1'>
//             HOME
//             <ArrowUpRight size={28} />
//           </div>
//           <div>ABOUT US</div>
//           <div className='flex items-center h-fit gap-1'>
//             SERVICES
//             <CaretDown 
//               size={28} 
//               onClick={() => setServicesOpen(!servicesOpen)}
//               className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
//             />
//           </div>
//           {servicesOpen && (
//             <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col`}>
//               <div>AIR FREIGHT</div>
//               <div>SEA FREIGHT</div>
//               <div>PROJECT LOGISTICS</div>
//               <div>CHARTER SERVICES</div>
//               <div>CROSS TRADE</div>
//               <div>SUPPLY CHAIN SOLUTIONS</div>
//               <div>CUSTOMS BROKERAGE</div>
//               <div>VALUE ADDED SERVICES</div>
//             </div>
//           )}
//           <div className='flex items-center h-fit gap-1'>
//             SECTOR EXPERTISE
//             <CaretDown 
//               size={28} 
//               onClick={() => setSectorsOpen(!sectorsOpen)}
//               className={`transform transition-transform ${sectorsOpen ? 'rotate-180' : ''}`}
//             />
//           </div>
//           {sectorsOpen && (
//             <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col`}>
//               <div>PHARMACEUTICALS</div>
//               <div>HAZARDOUS CHEMICALS</div>
//               <div>COLD CHAIN PRODUCTS</div>
//               <div>PACKAGING SOLUTIONS</div>
//               <div>EXHIBITION & RELOCATION</div>
//               <div>ENGINEERING</div>
//             </div>
//           )}
//           <div>CONTACT</div>
//           <div>CAREERS</div>
//           <div>GALLERY</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileNavbar;


// const MobileNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [sectorsOpen, setSectorsOpen] = useState(false);
//   const navRef = useRef(null);
//   const hamburgerLinesRef = useRef([]);

//   useEffect(() => {
//     if (navRef.current) {
//       gsap.set(navRef.current, {
//         yPercent: -100,
//         rotationX: -90,
//         transformOrigin: "top"
//       });
//     }
//   }, []);

//   const toggleNav = () => {
//     const tl = gsap.timeline();
    
//     if (!isOpen) {
//       tl.to(navRef.current, {
//         yPercent: 0,
//         rotationX: 0,
//         duration: 0.8,
//         ease: "power2.inOut"
//       });

//       tl.to(hamburgerLinesRef.current[0], {
//         rotate: 45,
//         y: 2,
//         duration: 0.3,
//         backgroundColor: "var(--blue3)"
//       }, "-=0.6");
      
//       tl.to(hamburgerLinesRef.current[1], {
//         rotate: -45,
//         y: -2,
//         duration: 0.3,
//         backgroundColor: "var(--blue3)"
//       }, "-=0.6");

//     } else {
//       tl.to(navRef.current, {
//         yPercent: -100,
//         rotationX: -90,
//         duration: 0.6,
//         ease: "power2.inOut"
//       });

//       tl.to(hamburgerLinesRef.current, {
//         rotate: 0,
//         y: 0,
//         duration: 0.3,
//         backgroundColor: "white"
//       }, "-=0.6");
//     }

//     setIsOpen(!isOpen);
//     if (isOpen) {
//       setServicesOpen(false);
//       setSectorsOpen(false);
//     }
//   };

//   return (
//     <div className="relative z-[999999]">
//       {/* Button always visible when menu is closed */}
//       <div className={`flex justify-between items-center px-2 py-3 ${isOpen ? 'hidden' : 'block'}`}>
//         <div className="md:hidden">
//           <img 
//             src="/images/logo22.png"
//             className="w-full h-full" 
//             alt="logo" 
//           />
//         </div>
//         <button
//           onClick={toggleNav}
//           className="md:hidden h-fit text-center flex gap-2 items-center border px-2 py-1 rounded text-white "
//         >
//           <div className="text-base tracking-wider">Menu</div>
//           <div className="flex flex-col">
//             <div
//               ref={el => hamburgerLinesRef.current[0] = el}
//               className="w-4 h-[2px] mb-[2px] rounded-full transform-gpu bg-white"
//             ></div>
//             <div
//               ref={el => hamburgerLinesRef.current[1] = el}
//               className="w-4 h-[2px] mt-[2px] rounded-full transform-gpu bg-white"
//             ></div>
//           </div>
//         </button>
//       </div>

//       {/* Navigation Menu */}
//       <div
//         ref={navRef}
//         className="fixed top-0 left-0 w-full h-screen bg-white md:hidden"
//       >
//         {/* Menu Header with Close Button */}
//         <div className="flex justify-between items-center px-2 py-3  border-gray-200">
//           <div className="md:hidden">
//             <img 
//               src="/images/logo21.png"
//               className="w-full h-full" 
//               alt="logo" 
//             />
//           </div>
//           <button
//             onClick={toggleNav}
//             className="md:hidden h-fit text-center flex gap-2 items-center border px-2 py-1 rounded text-[--blue3] border-[--blue3]"
//           >
//             <div className="text-base tracking-wider">Close</div>
//             <div className="flex flex-col">
//               <div
//                 ref={el => hamburgerLinesRef.current[0] = el}
//                 className="w-4 h-[2px] mb-[2px] rounded-full transform-gpu bg-[--blue3]"
//               ></div>
//               <div
//                 ref={el => hamburgerLinesRef.current[1] = el}
//                 className="w-4 h-[2px] mt-[2px] rounded-full transform-gpu bg-[--blue3]"
//               ></div>
//             </div>
//           </button>
//         </div>

//         {/* Menu Items */}
//         <div className="flex flex-col text-[--blue3] text-[7.5vw] px-2 mt-4">
//           <div className="flex items-center h-fit gap-1">
//             HOME
//             <ArrowUpRight size={28} />
//           </div>
//           <div>ABOUT US</div>
//           <div className="flex items-center h-fit gap-1">
//             SERVICES
//             <CaretDown 
//               size={28} 
//               onClick={() => setServicesOpen(!servicesOpen)}
//               className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
//             />
//           </div>
//           {servicesOpen && (
//             <div className="tracking-wide text-[4vw] flex flex-col">
//               <div>AIR FREIGHT</div>
//               <div>SEA FREIGHT</div>
//               <div>PROJECT LOGISTICS</div>
//               <div>CHARTER SERVICES</div>
//               <div>CROSS TRADE</div>
//               <div>SUPPLY CHAIN SOLUTIONS</div>
//               <div>CUSTOMS BROKERAGE</div>
//               <div>VALUE ADDED SERVICES</div>
//             </div>
//           )}
//           <div className="flex items-center h-fit gap-1">
//             SECTOR EXPERTISE
//             <CaretDown 
//               size={28} 
//               onClick={() => setSectorsOpen(!sectorsOpen)}
//               className={`transform transition-transform ${sectorsOpen ? 'rotate-180' : ''}`}
//             />
//           </div>
//           {sectorsOpen && (
//             <div className="tracking-wide text-[4vw] flex flex-col">
//               <div>PHARMACEUTICALS</div>
//               <div>HAZARDOUS CHEMICALS</div>
//               <div>COLD CHAIN PRODUCTS</div>
//               <div>PACKAGING SOLUTIONS</div>
//               <div>EXHIBITION & RELOCATION</div>
//               <div>ENGINEERING</div>
//             </div>
//           )}
//           <div>CONTACT</div>
//           <div>CAREERS</div>
//           <div>GALLERY</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNavbar;
// import { useState, useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { Clash, ClashL, ClashM } from '../../../public/fonts/fonts';
// import { CaretDown, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

// const MobileNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [sectorsOpen, setSectorsOpen] = useState(false);
//   const navRef = useRef(null);
//   const hamburgerLinesRef = useRef([]);

//   useEffect(() => {
//     if (navRef.current) {
//       gsap.set(navRef.current, {
//         yPercent: -100,
//         rotationX: -90,
//         transformOrigin: "top"
//       });
//     }
//   }, []);

//   const toggleNav = () => {
//     const tl = gsap.timeline();
    
//     if (!isOpen) {
//       tl.to(navRef.current, {
//         yPercent: 0,
//         rotationX: 0,
//         duration: 0.8,
//         ease: "power2.inOut"
//       });

//       tl.to(hamburgerLinesRef.current[0], {
//         rotate: 50,
//         y: 2,
//         duration: 0.3,
//         backgroundColor: "var(--blue3)"
//       }, "-=0.6");
      
//       tl.to(hamburgerLinesRef.current[1], {
//         rotate: -50,
//         y: -2,
//         duration: 0.3,
//         backgroundColor: "var(--blue3)"
//       }, "-=0.6");

//     } else {
//       tl.to(navRef.current, {
//         yPercent: -100,
//         rotationX: -90,
//         duration: 0.8,
//         ease: "power2.inOut"
//       });

//       tl.to(hamburgerLinesRef.current, {
//         rotate: 0,
//         y: 0,
//         duration: 0.6,
//         backgroundColor: "white"
//       }, "-=0.6");
//     }

//     setIsOpen(!isOpen);
//     if (isOpen) {
//       setServicesOpen(false);
//       setSectorsOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* Fixed navbar container */}
//       <div className="fixed top-0 left-0 w-full z-[999999]">
//         {/* Button always visible when menu is closed */}
//         <div className={`flex justify-between items-center px-2 py-3 z-[99999] ${isOpen?'bg-white':'bg-transparent'} `}>
//           <div className="md:hidden">
//             {isOpen ? <img 
//                 src="/images/logo21.png"
//                 className="w-full h-full" 
//                 alt="logo" 
//               />: <img 
//               src="/images/logo22.png"
//               className="w-full h-full" 
//               alt="logo" 
//             />
//             }
           
//           </div>
//           <button
//             onClick={toggleNav}
//             className={`md:hidden h-fit text-center flex gap-2 items-center border px-2 py-1 rounded ${isOpen?'text-[--blue3]':'text-white'} ${isOpen?'border-[--blue3]':'border-white'}  `}
//           >
//             <div className={`${ClashM.className} text-base tracking-wider`}>{isOpen?'Close':'Menu'}</div>
//             <div className="flex flex-col">
//               <div
//                 ref={el => hamburgerLinesRef.current[0] = el}
//                 className="w-4 h-[2px] mb-[2px] rounded-full transform-gpu bg-white"
//               ></div>
//               <div
//                 ref={el => hamburgerLinesRef.current[1] = el}
//                 className="w-4 h-[2px] mt-[2px] rounded-full transform-gpu bg-white"
//               ></div>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <div
//         ref={navRef}
//         className="fixed pt-[20vw] left-0 w-full h-screen bg-white md:hidden overflow-y-auto z-[9999]"
//       >

//         {/* Scrollable Menu Items Container */}
//         <div className={`${Clash.className} flex flex-col text-[--blue3] text-[7.5vw] px-2 pt-4 pb-20`}>
//           <div className="flex items-center h-fit gap-1">
//             HOME
//             <ArrowUpRight size={28} />
//           </div>
//           <div>ABOUT US</div>
//           <div className="flex items-center h-fit gap-1">
//             SERVICES
//             <CaretDown 
//               size={28} 
//               onClick={() => setServicesOpen(!servicesOpen)}
//               className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
//             />
//           </div>
//           {servicesOpen && (
//             <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col pl-4`}>
//               <div>AIR FREIGHT</div>
//               <div>SEA FREIGHT</div>
//               <div>PROJECT LOGISTICS</div>
//               <div>CHARTER SERVICES</div>
//               <div>CROSS TRADE</div>
//               <div>SUPPLY CHAIN SOLUTIONS</div>
//               <div>CUSTOMS BROKERAGE</div>
//               <div>VALUE ADDED SERVICES</div>
//             </div>
//           )}
//           <div className="flex items-center h-fit gap-1">
//             SECTOR EXPERTISE
//             <CaretDown 
//               size={28} 
//               onClick={() => setSectorsOpen(!sectorsOpen)}
//               className={`transform transition-transform ${sectorsOpen ? 'rotate-180' : ''}`}
//             />
//           </div>
//           {sectorsOpen && (
//             <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col pl-4`}>
//               <div>PHARMACEUTICALS</div>
//               <div>HAZARDOUS CHEMICALS</div>
//               <div>COLD CHAIN PRODUCTS</div>
//               <div>PACKAGING SOLUTIONS</div>
//               <div>EXHIBITION & RELOCATION</div>
//               <div>ENGINEERING</div>
//             </div>
//           )}
//           <div>CONTACT</div>
//           <div>CAREERS</div>
//           <div>GALLERY</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileNavbar;



// const MobileNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [sectorsOpen, setSectorsOpen] = useState(false);
//   const navRef = useRef(null);
//   const navbarRef = useRef(null);
//   const hamburgerLinesRef = useRef([]);

//   useEffect(() => {
//     if (navRef.current) {
//       gsap.set(navRef.current, {
//         yPercent: -100,
//         rotationX: -90,
//         transformOrigin: "top"
//       });
//       gsap.set(navbarRef.current, {
//         backgroundColor: 'transparent'
//       });
//     }
//   }, []);

//   const toggleNav = () => {
//     const tl = gsap.timeline();
    
//     if (!isOpen) {
//       // Opening animation
//       tl.to(navRef.current, {
//         yPercent: 0,
//         rotationX: 0,
//         duration: 0.8,
//         ease: "power2.inOut"
//       });

//       // Sync navbar background change with menu animation
//       tl.to(navbarRef.current, {
//         backgroundColor: 'white',
//         duration: 0.2
//       }, "-=0.9"); // Start halfway through the menu animation

//       tl.to(hamburgerLinesRef.current[0], {
//         rotate: 50,
//         y: 2,
//         duration: 0.3,
//         backgroundColor: "var(--blue3)"
//       }, "-=0.6");
      
//       tl.to(hamburgerLinesRef.current[1], {
//         rotate: -50,
//         y: -2,
//         duration: 0.3,
//         backgroundColor: "var(--blue3)"
//       }, "-=0.6");

//     } else {
//       // Closing animation
//       tl.to(navRef.current, {
//         yPercent: -100,
//         rotationX: -90,
//         duration: 0.8,
//         ease: "power2.inOut"
//       });

//       // Sync navbar background removal with menu animation
//       tl.to(navbarRef.current, {
//         backgroundColor: 'transparent',
//         duration: 0.4
//       }, "-=0.4"); // Start towards the end of the closing animation

//       tl.to(hamburgerLinesRef.current, {
//         rotate: 0,
//         y: 0,
//         duration: 0.6,
//         backgroundColor: "white"
//       }, "-=0.6");
//     }

//     setIsOpen(!isOpen);
//     if (isOpen) {
//       setServicesOpen(false);
//       setSectorsOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* Fixed navbar container */}
//       <div ref={navbarRef} className="fixed top-0 left-0 w-full z-[999999]">
//         {/* Button always visible when menu is closed */}
//         <div className="flex justify-between items-center px-2 py-3 z-[99999]">
//           <div className="md:hidden">
//             {isOpen ? 
//               <img 
//                 src="/images/logo21.png"
//                 className="w-full h-full" 
//                 alt="logo" 
//               /> : 
//               <img 
//                 src="/images/logo22.png"
//                 className="w-full h-full" 
//                 alt="logo" 
//               />
//             }
//           </div>
//           <button
//             onClick={toggleNav}
//             className={`md:hidden h-fit text-center flex gap-2 items-center border px-2 py-1 rounded ${isOpen ? 'text-[--blue3] border-[--blue3]' : 'text-white border-white'}`}
//           >
//             <div className={`${ClashM.className} text-base tracking-wider`}>
//               {isOpen ? 'Close' : 'Menu'}
//             </div>
//             <div className="flex flex-col">
//               <div
//                 ref={el => hamburgerLinesRef.current[0] = el}
//                 className="w-4 h-[2px] mb-[2px] rounded-full transform-gpu bg-white"
//               ></div>
//               <div
//                 ref={el => hamburgerLinesRef.current[1] = el}
//                 className="w-4 h-[2px] mt-[2px] rounded-full transform-gpu bg-white"
//               ></div>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <div
//         ref={navRef}
//         className="fixed pt-[20vw] left-0 w-full h-screen bg-white md:hidden overflow-y-auto z-[9999]"
//       >
//         {/* Scrollable Menu Items Container */}
//         <div className={`${Clash.className} flex flex-col text-[--blue3] text-[7.5vw] px-2 pt-4 pb-20`}>
//           <div className="flex items-center h-fit gap-1">
//             HOME
//             <ArrowUpRight size={28} />
//           </div>
//           <div>ABOUT US</div>
//           <div className="flex items-center h-fit gap-1">
//             SERVICES
//             <CaretDown 
//               size={28} 
//               onClick={() => setServicesOpen(!servicesOpen)}
//               className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
//             />
//           </div>
//           {servicesOpen && (
//             <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col pl-4`}>
//               <div>AIR FREIGHT</div>
//               <div>SEA FREIGHT</div>
//               <div>PROJECT LOGISTICS</div>
//               <div>CHARTER SERVICES</div>
//               <div>CROSS TRADE</div>
//               <div>SUPPLY CHAIN SOLUTIONS</div>
//               <div>CUSTOMS BROKERAGE</div>
//               <div>VALUE ADDED SERVICES</div>
//             </div>
//           )}
//           <div className="flex items-center h-fit gap-1">
//             SECTOR EXPERTISE
//             <CaretDown 
//               size={28} 
//               onClick={() => setSectorsOpen(!sectorsOpen)}
//               className={`transform transition-transform ${sectorsOpen ? 'rotate-180' : ''}`}
//             />
//           </div>
//           {sectorsOpen && (
//             <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col pl-4`}>
//               <div>PHARMACEUTICALS</div>
//               <div>HAZARDOUS CHEMICALS</div>
//               <div>COLD CHAIN PRODUCTS</div>
//               <div>PACKAGING SOLUTIONS</div>
//               <div>EXHIBITION & RELOCATION</div>
//               <div>ENGINEERING</div>
//             </div>
//           )}
//           <div>CONTACT</div>
//           <div>CAREERS</div>
//           <div>GALLERY</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileNavbar;



const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const navRef = useRef(null);
  const navbarRef = useRef(null);
  const hamburgerLinesRef = useRef([]);

  useEffect(() => {
    if (navRef.current) {
      gsap.set(navRef.current, {
        yPercent: -100,
        rotationX: -90,
        transformOrigin: "top"
      });
      gsap.set(navbarRef.current, {
        backgroundColor: 'transparent'
      });
    }
  }, []);

  const toggleNav = () => {
    const tl = gsap.timeline();
    
    if (!isOpen) {
      // Start menu animation first
      tl.to(navRef.current, {
        yPercent: 0,
        rotationX: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });

      // Quick background color change after a slight delay
      tl.to(navbarRef.current, {
        backgroundColor: 'white',
        duration: 0.2
      }, "-=0"); // Start when menu is 60% through its animation

      // Hamburger animation
      tl.to(hamburgerLinesRef.current[0], {
        rotate: 50,
        y: 2,
        duration: 0.6,
        backgroundColor: "var(--blue3)"
      }, "-=0.6");
      
      tl.to(hamburgerLinesRef.current[1], {
        rotate: -50,
        y: -2,
        duration: 0.6,
        backgroundColor: "var(--blue3)"
      }, "-=0.6");

    } else {
      // Quick background color change first
      tl.to(navbarRef.current, {
        backgroundColor: 'transparent',
        duration: 0.2
      });

      // Then start menu closing animation
      tl.to(navRef.current, {
        yPercent: -100,
        rotationX: -90,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.1"); // Start slightly before background transition completes

      // Reset hamburger
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
      {/* Fixed navbar container */}
      <div ref={navbarRef} className="fixed top-0 left-0 w-full z-[999999]">
        {/* Button always visible when menu is closed */}
        <div className="flex justify-between items-center px-2 py-3 z-[99999]">
          <div className="md:hidden">
            {isOpen ? 
              <img 
                src="/images/logo21.png"
                className="w-full h-full" 
                alt="logo" 
              /> : 
              <img 
                src="/images/logo22.png"
                className="w-full h-full" 
                alt="logo" 
              />
            }
          </div>
          <button
            onClick={toggleNav}
            className={`md:hidden h-fit text-center flex gap-2 items-center border px-2 py-1 rounded ${isOpen ? 'text-[--blue3] border-[--blue3]' : 'text-white border-white'}`}
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

      {/* Navigation Menu */}
      <div
        ref={navRef}
        className="fixed pt-[20vw] left-0 w-full h-screen bg-white md:hidden overflow-y-auto z-[9999]"
      >
        {/* Scrollable Menu Items Container */}
        <div className={`${Clash.className} flex flex-col text-[--blue3] text-[7.5vw] px-2 pt-4 pb-20`}>
          <div className="flex items-center h-fit gap-1">
            HOME
            <ArrowUpRight size={28} />
          </div>
          <div>ABOUT US</div>
          <div className="flex items-center h-fit gap-1">
            SERVICES
            <CaretDown 
              size={28} 
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
            />
          </div>
          {servicesOpen && (
            <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col pl-4`}>
              <div>AIR FREIGHT</div>
              <div>SEA FREIGHT</div>
              <div>PROJECT LOGISTICS</div>
              <div>CHARTER SERVICES</div>
              <div>CROSS TRADE</div>
              <div>SUPPLY CHAIN SOLUTIONS</div>
              <div>CUSTOMS BROKERAGE</div>
              <div>VALUE ADDED SERVICES</div>
            </div>
          )}
          <div className="flex items-center h-fit gap-1">
            SECTOR EXPERTISE
            <CaretDown 
              size={28} 
              onClick={() => setSectorsOpen(!sectorsOpen)}
              className={`transform transition-transform ${sectorsOpen ? 'rotate-180' : ''}`}
            />
          </div>
          {sectorsOpen && (
            <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col pl-4`}>
              <div>PHARMACEUTICALS</div>
              <div>HAZARDOUS CHEMICALS</div>
              <div>COLD CHAIN PRODUCTS</div>
              <div>PACKAGING SOLUTIONS</div>
              <div>EXHIBITION & RELOCATION</div>
              <div>ENGINEERING</div>
            </div>
          )}
          <div>CONTACT</div>
          <div>CAREERS</div>
          <div>GALLERY</div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;

// const MobileNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [sectorsOpen, setSectorsOpen] = useState(false);
//   const navRef = useRef(null);
//   const navbarRef = useRef(null);
//   const hamburgerLinesRef = useRef([]);

//   useEffect(() => {
//     if (navRef.current) {
//       gsap.set(navRef.current, {
//         yPercent: -100,
//         rotationX: -90,
//         transformOrigin: "top"
//       });
//       gsap.set(navbarRef.current, {
//         backgroundColor: 'transparent'
//       });
//     }
//   }, []);

//   const toggleNav = () => {
//     const tl = gsap.timeline();
    
//     if (!isOpen) {
//       // Start both animations at the same time
//       tl.to([navRef.current, navbarRef.current], {
//         duration: 0.8,
//         ease: "power2.inOut",
//         stagger: 0, // ensures they start together
//         yPercent: (i) => i === 0 ? 0 : null, // only apply to navRef
//         rotationX: (i) => i === 0 ? 0 : null, // only apply to navRef
//         backgroundColor: (i) => i === 1 ? 'white' : null // only apply to navbarRef
//       });

//       // Hamburger animation
//       tl.to(hamburgerLinesRef.current[0], {
//         rotate: 50,
//         y: 2,
//         duration: 0.3,
//         backgroundColor: "var(--blue3)"
//       }, "-=0.6");
      
//       tl.to(hamburgerLinesRef.current[1], {
//         rotate: -50,
//         y: -2,
//         duration: 0.3,
//         backgroundColor: "var(--blue3)"
//       }, "-=0.6");

//     } else {
//       // Close animations - start together
//       tl.to([navRef.current, navbarRef.current], {
//         duration: 0.8,
//         ease: "power2.inOut",
//         stagger: 0,
//         yPercent: (i) => i === 0 ? -100 : null,
//         rotationX: (i) => i === 0 ? -90 : null,
//         backgroundColor: (i) => i === 1 ? 'transparent' : null
//       });

//       // Reset hamburger
//       tl.to(hamburgerLinesRef.current, {
//         rotate: 0,
//         y: 0,
//         duration: 0.6,
//         backgroundColor: "white"
//       }, "-=0.6");
//     }

//     setIsOpen(!isOpen);
//     if (isOpen) {
//       setServicesOpen(false);
//       setSectorsOpen(false);
//     }
//   };

//   return (
//     <>
//       {/* Fixed navbar container */}
//       <div ref={navbarRef} className="fixed top-0 left-0 w-full z-[999999]">
//         {/* Button always visible when menu is closed */}
//         <div className="flex justify-between items-center px-2 py-3 z-[99999]">
//           <div className="md:hidden">
//             {isOpen ? 
//               <img 
//                 src="/images/logo21.png"
//                 className="w-full h-full" 
//                 alt="logo" 
//               /> : 
//               <img 
//                 src="/images/logo22.png"
//                 className="w-full h-full" 
//                 alt="logo" 
//               />
//             }
//           </div>
//           <button
//             onClick={toggleNav}
//             className={`md:hidden h-fit text-center flex gap-2 items-center border px-2 py-1 rounded ${isOpen ? 'text-[--blue3] border-[--blue3]' : 'text-white border-white'}`}
//           >
//             <div className={`${ClashM.className} text-base tracking-wider`}>
//               {isOpen ? 'Close' : 'Menu'}
//             </div>
//             <div className="flex flex-col">
//               <div
//                 ref={el => hamburgerLinesRef.current[0] = el}
//                 className="w-4 h-[2px] mb-[2px] rounded-full transform-gpu bg-white"
//               ></div>
//               <div
//                 ref={el => hamburgerLinesRef.current[1] = el}
//                 className="w-4 h-[2px] mt-[2px] rounded-full transform-gpu bg-white"
//               ></div>
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Navigation Menu */}
//       <div
//         ref={navRef}
//         className="fixed pt-[20vw] left-0 w-full h-screen bg-white md:hidden overflow-y-auto z-[9999]"
//       >
//         {/* Scrollable Menu Items Container */}
//         <div className={`${Clash.className} flex flex-col text-[--blue3] text-[7.5vw] px-2 pt-4 pb-20`}>
//           <div className="flex items-center h-fit gap-1">
//             HOME
//             <ArrowUpRight size={28} />
//           </div>
//           <div>ABOUT US</div>
//           <div className="flex items-center h-fit gap-1">
//             SERVICES
//             <CaretDown 
//               size={28} 
//               onClick={() => setServicesOpen(!servicesOpen)}
//               className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
//             />
//           </div>
//           {servicesOpen && (
//             <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col pl-4`}>
//               <div>AIR FREIGHT</div>
//               <div>SEA FREIGHT</div>
//               <div>PROJECT LOGISTICS</div>
//               <div>CHARTER SERVICES</div>
//               <div>CROSS TRADE</div>
//               <div>SUPPLY CHAIN SOLUTIONS</div>
//               <div>CUSTOMS BROKERAGE</div>
//               <div>VALUE ADDED SERVICES</div>
//             </div>
//           )}
//           <div className="flex items-center h-fit gap-1">
//             SECTOR EXPERTISE
//             <CaretDown 
//               size={28} 
//               onClick={() => setSectorsOpen(!sectorsOpen)}
//               className={`transform transition-transform ${sectorsOpen ? 'rotate-180' : ''}`}
//             />
//           </div>
//           {sectorsOpen && (
//             <div className={`${Clash.className} tracking-wide text-[4vw] flex flex-col pl-4`}>
//               <div>PHARMACEUTICALS</div>
//               <div>HAZARDOUS CHEMICALS</div>
//               <div>COLD CHAIN PRODUCTS</div>
//               <div>PACKAGING SOLUTIONS</div>
//               <div>EXHIBITION & RELOCATION</div>
//               <div>ENGINEERING</div>
//             </div>
//           )}
//           <div>CONTACT</div>
//           <div>CAREERS</div>
//           <div>GALLERY</div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileNavbar;