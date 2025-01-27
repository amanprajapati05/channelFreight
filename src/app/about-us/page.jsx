"use client"
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import Navbar from '../components/Navbar'
import { Clash, ClashM } from '../../../public/fonts/fonts'
import Footer from '../components/Footer'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import StatsSection2 from '../components/StatSection2';

gsap.registerPlugin(ScrollTrigger);

const page = () => {
    const containerRefs = useRef([]);
    const overlayRefs = useRef([]);
    const textRefs = useRef([]);
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const dotRef = useRef(null);
    const timelineItemsRef = useRef([]);
    const shipRef = useRef(null);
    const shipRef2 = useRef(null);
    const visionRef = useRef(null);
    const shipContainerRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const [locomotiveInstance, setLocomotiveInstance] = useState(null);
        
    useEffect(() => {
        // Force scroll to top
        window.scrollTo(0, 0);
        
        // Initialize locomotive scroll
        const scrollInstance = new locomotiveScroll({
            el: scrollContainerRef.current,
            smooth: true,
            smoothMobile: true,
            multiplier: 0.1,
            lerp: 0,
        });

        setLocomotiveInstance(scrollInstance);
        
        // Disable scroll initially
        scrollInstance.stop();
        
        // Add a delay before starting animations
        const timer = setTimeout(() => {
            setIsLoading(false);
            setIsReady(true);
            scrollInstance.start();
            ScrollTrigger.refresh();
        }, 2000); // 2 second delay
        
        return () => {
            clearTimeout(timer);
            if (scrollInstance) {
                scrollInstance.destroy();
            }
        };
    }, []);

// useGSAP(() => {
//     if (!isReady) return;
//     const content = contentRef.current;
//     const section = sectionRef.current;
//     const dot = dotRef.current;
//     const items = timelineItemsRef.current;
//     const ship = shipRef.current;
//     const ship2 = shipRef2.current;
//     const vision = visionRef.current;
    
//     // Calculate the total scroll distance needed
//     const totalScroll = (items.length - 3) * window.innerHeight;
//     const shipMovement = window.innerWidth < 768 ? "400%" : "220%";

//     // Create a timeline for all animations
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: `+=${totalScroll}px`,
//             pin: true,
//             scrub: 0.6,
//             onUpdate: (self) => {
//                 // Change overflow based on scroll progress
//                 if (self.progress < 0.1) { // At start
//                     section.style.overflow = 'visible';
//                 } else if (self.progress > 0.9) { // Near end
//                     section.style.overflow = 'hidden';
//                 } else { // During animation
//                     section.style.overflow = 'visible';
//                 }
//             }
//         }
//     });
     
//     // Add all animations to the same timeline
//     tl.to(content, {
//         y: -(totalScroll),
//         ease: "none",
//     })
//     .to(dot, {
//         y: `${23.5}vw`,
//         ease: "none",
//     }, 0)
//     .to(ship, {
//         y: shipMovement,
//         ease: "none",
//     }, 0)
//     .to(ship2, {
//         y: shipMovement,
//         ease: "none",
//     }, 0);
//     ;
    
// }, { scope: sectionRef });

useGSAP(() => {
    if (!isReady) return; // Only run when ready

    const content = contentRef.current;
    const section = sectionRef.current;
    const dot = dotRef.current;
    const items = timelineItemsRef.current;
    const ship = shipRef.current;
    const ship2 = shipRef2.current;
    
    const totalScroll = (items.length - 3) * window.innerHeight;
    const shipMovement = window.innerWidth < 768 ? "400%" : "220%";

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${totalScroll}px`,
            pin: true,
            scrub: 0.6,
            onUpdate: (self) => {
                if (self.progress < 0.1) {
                    section.style.overflow = 'visible';
                } else if (self.progress > 0.9) {
                    section.style.overflow = 'hidden';
                } else {
                    section.style.overflow = 'visible';
                }
            }
        }
    });
    
    tl.to(content, {
        y: -(totalScroll),
        ease: "none",
    })
    .to(dot, {
        y: `${23.5}vw`,
        ease: "none",
    }, 0)
    .to(ship, {
        y: shipMovement,
        ease: "none",
    }, 0)
    .to(ship2, {
        y: shipMovement,
        ease: "none",
    }, 0);

    return () => {
        ScrollTrigger.getAll().forEach(st => st.kill());
    };
}, [isReady]); 

  const timelineData = [
    {
      year: "1999",
      title: "Foundation Year",
      description: "Channel Freight was established with a vision to revolutionize logistics through efficient and reliable service."
    },
    {
      year: "2005",
      title: "First Major Expansion",
      description: "Expanded operations to include a comprehensive sea freight service, making global shipping more accessible."
    },
    {
      year: "2010",
      title: "International Recognition",
      description: "Achieved global recognition by entering key international markets, handling large-scale projects."
    },
    {
      year: "2020",
      title: "Resilience During Global Challenges",
      description: "Achieved global recognition by entering key international markets, handling large-scale projects."
    },
    {
      year: "2024",
      title: "25 Years of Service",
      description: "Reached the 25-year milestone, with a strong reputation built on trust, efficiency, and innovation."
    }
  ];
  

    const addToContainerRefs = (el) => {
        if (el && !containerRefs.current.includes(el)) {
            containerRefs.current.push(el);
        }
    };

    useEffect(() => {
        // Create overlay elements
        containerRefs.current.forEach((container, index) => {
            // Create overlay if it doesn't exist
            if (!overlayRefs.current[index]) {
                const overlay = document.createElement('div');
                overlay.className = 'absolute inset-0 bg-white origin-left transform scale-x-0';
                overlay.style.zIndex = '1';
                container.style.position = 'relative';
                container.appendChild(overlay);
                overlayRefs.current[index] = overlay;
            }

            // Store text elements
            textRefs.current[index] = {
                left: container.children[0],
                right: container.children[1]
            };
        });
    }, []);

    const handleEnter = (index) => {
        // Animate overlay
        gsap.to(overlayRefs.current[index], {
            scaleX: 1,
            duration: 0.5,
            ease: "power2.inOut"
        });

        // Animate text color and padding
        gsap.to([textRefs.current[index].left, textRefs.current[index].right], {
            color: '#02123b',
            zIndex: 2,
            paddingLeft: '1rem',
            paddingRight: '1rem',
            duration: 0.5,
            ease: "power2.out"
        });
    };

    const handleLeave = (index) => {
        // Animate overlay
        gsap.to(overlayRefs.current[index], {
            scaleX: 0,
            duration: 0.5,
            ease: "power2.inOut"
        });

        // Animate text color and padding
        gsap.to([textRefs.current[index].left, textRefs.current[index].right], {
            color: 'white',
            paddingLeft: 0,
            paddingRight: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    };

  return (
   <>
   <div className='absolute w-full'>
   <Navbar/>
   </div>

   <div ref={scrollContainerRef} className='w-full '>
        
        <div className='md:h-screen h-[50vh] '>
            <div className=' h-[100%] md:h-[100%] pb-4 md:pb-0  bg-[#02123b]'>
                <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row h-[100%] gap-6 md:gap-0 justify-end md:justify-between md:items-center text-white ${Clash.className}  `}>
                    <div className=' text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>ABOUT US</div>
                    <div className='text-base pr-[8vw]  md:w-[48%] md:text-[1.7vw] lg:text-[1.3vw] h-auto md:h-[50%] flex items-end'>As an AEO & IATA Certified Customs Clearing Agent, our credibility & goodwill are reinforced by our commitment to providing integrated logistics solutions at competitive prices.</div>
                </div>
            </div>
        </div>

        <div className='-mt-1'>
         <div className='w-full overflow-hidden hidden md:block'>
            <img src="/images/img63.png" alt="" className='md:w-screen  z-[-1] object-cover'/>
        </div>
        <div className='w-full overflow-hidden md:hidden block'>
            <img src="/images/img61.png" alt="" className='w-full z-[-1] object-cover'/>
        </div>
        </div>

        <div className='flex justify-center items-center h-[60vw] md:h-[30vw] -top-1 relative bg-[#02123b] text-white'>
            <div className=' w-[4vw] h-[4vw] absolute left-[10vw] top-[8vw] flex justify-center items-center'>
                <img src="/images/invcommas.png" alt="" />
            </div>
            <div className={`flex justify-center items-center h-[60vw] md:h-[30vw] bg-[#02123b] text-white ${Clash.className} px-[5vw]`}
            >
                <div className='md:text-[2vw] text-[5vw] w-[75%] md:w-[70%] text-center' >To create customized solutions, provide unparalleled services at competitive costs, and foster long-term, sustainable partnerships with our clients.</div>
            </div>
            <div className=' w-[4vw] h-[4vw] absolute right-[10vw] bottom-[8vw] flex justify-center items-center'>
            <img className=' rotate-180' src="/images/invcommas.png" alt="" />
            </div>
        </div>

{/* <div>
    <StatsSection2/>
</div> */}

        <div ref={visionRef} className='bg-white text-[#02123b] w-screen md:h-[50vw] '>
            <div className='flex justify-center w-full'>
                <div className='flex flex-col w-full  '>
            <div className={`${Clash.className} text-[8vw] text-center w-full   md:text-[5vw] lg:text-[4vw] py-[4vw]`}>Our Vision</div>
            <div className='w-full flex justify-center'>
            <div className={`${Clash.className} md:text-[2vw]  text-[5vw] w-[65%] md:w-[60%] text-center leading-[1.4] py-[2vw] `}>To be the most trusted and innovative global logistics partner, exceeding customer expectations and setting industry standards in supply chain solutions.</div>
            </div>
            </div>
            </div>
        </div>


  <div ref={sectionRef} className="h-screen bg-[#02123b] md:px-[2vw] lg:px-[4vw] px-4 relative overflow-bottom-hidden">
      <div className='absolute md:block hidden inset-0'>
        <img  
            ref={shipRef}  
            className='w-[5vw] absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 z-[2]' 
            src="/images/cargoship.png" 
            alt="" 
        />
    </div>
    <div className='absolute inset-0 md:hidden'>
        <img  
            ref={shipRef2}  
            className='w-[10vw] absolute top-0 left-[10%] -translate-x-1/2 -translate-y-1/2 z-[2]' 
            src="/images/cargoship.png" 
            alt="" 
        />
    </div>

        <div className="flex w-full md:flex-row flex-col h-full justify-between items-end md:items-center">
          <div className="md:w-[30%] w-[70%] pt-[10vw]  md:pt-0  flex gap-[2vw] items-center ">
            <div className="w-[1.8vw] h-[25vw] border-[#333f5e] hidden md:flex justify-center border rounded-3xl relative ">
              <div 
                ref={dotRef}
                className="w-[0.8vw] h-[0.8vw] absolute top-[2px] rounded-full bg-[#adedff]"
              />
            </div>
            <div>
              <div className={`${Clash.className} text-[8vw] text-white md:text-[5vw] lg:text-[4vw]`}>
                25 Years of Excellence
              </div>
              <div className={`${Clash.className} text-white md:text-[1.7vw] lg:text-[1.3vw] text-base`}>
                Celebrating a legacy of innovation, growth, and customer-centric service.
              </div>
            </div>
          </div>
  
          <div className="md:w-[30%] w-[70%] h-full overflow-hidden relative">
            {/* Fixed gradient at top */}
            <div className="gradient1 w-full h-[14vw] absolute top-0 z-[2] " />
            
            {/* Scrollable content container */}
            <div 
              ref={contentRef} 
              className="flex flex-col gap-[20vh] absolute top-[50vh]"
            >
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  ref={el => timelineItemsRef.current[index] = el}
                  className="flex-shrink-0"
                >
                  <div className={`${Clash.className} text-white md:text-[1.7vw] lg:text-[1.3vw] text-base`}>
                    {item.year}
                  </div>
                  <div className={`${Clash.className} text-[6vw] text-white md:text-[3.8vw] lg:text-[3vw] leading-[1.2]`}>
                    {item.title}
                  </div>
                  <div className={`${Clash.className} text-white md:text-[1.7vw] lg:text-[1.3vw] text-base`}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Fixed gradient at bottom */}
            <div className="gradient2 w-full h-[14vw] absolute bottom-0 z-[2]" />
          </div>
        </div>
      </div>

        

        <div className='md:px-[2vw] lg:px-[4vw] px-4 bg-[#02123b] pt-4 pb-[10vw] -mt-2 md:-mt-1 text-white z-[999999999]'>
            <div className={`${ClashM.className} text-white flex justify-between border-b py-2 border-[#ffffff] md:text-[1.9vw] lg:text-[1.5vw] text-lg `}>
                <div>Airlines</div>
                <div>Awards</div>
            </div>
            <div ref={addToContainerRefs} 
                onMouseEnter={() => handleEnter(0)}
                onMouseLeave={() => handleLeave(0)}
                 className={`${Clash.className} text-white py-6 md:text-[1.7vw] lg:text-[1.3vw] text-base flex justify-between border-b border-[#ffffff] `}>
                <div>Air France</div>
                <div>Certificate of Appreciation</div>
            </div>
            <div
            ref={addToContainerRefs} 
            onMouseEnter={() => handleEnter(1)}
            onMouseLeave={() => handleLeave(1)}
             className={`${Clash.className} text-white py-6 md:text-[1.7vw] lg:text-[1.3vw] text-base flex justify-between border-b border-[#ffffff] `}>
                <div>Turkish Airlines</div>
                <div>Certificate of Appreciation</div>
            </div>
            <div
            ref={addToContainerRefs} 
            onMouseEnter={() => handleEnter(2)}
            onMouseLeave={() => handleLeave(2)}
             className={`${Clash.className} text-white py-6 md:text-[1.7vw] lg:text-[1.3vw] text-base flex justify-between border-b border-[#ffffff] `}>
                <div>Malaysian Airlines</div>
                <div>Certificate of Appreciation</div>
            </div>
            <div
            ref={addToContainerRefs} 
            onMouseEnter={() => handleEnter(3)}
            onMouseLeave={() => handleLeave(3)}
             className={`${Clash.className} text-white py-6 md:text-[1.7vw] lg:text-[1.3vw] text-base flex justify-between border-b border-[#ffffff] `}>
                <div>Ethiopian Airlines</div>
                <div>Certificate of Appreciation</div>
            </div>
            <div 
            ref={addToContainerRefs}
            onMouseEnter={() => handleEnter(4)}
            onMouseLeave={() => handleLeave(4)}
            className={`${Clash.className} text-white py-6 md:text-[1.7vw] lg:text-[1.3vw] text-base flex justify-between border-b border-[#ffffff] `}>
                <div>Egypt Air</div>
                <div>Certificate of Appreciation</div>
            </div>
            <div
            ref={addToContainerRefs}
            onMouseEnter={() => handleEnter(5)}
            onMouseLeave={() => handleLeave(5)}
             className={`${Clash.className} text-white py-6 md:text-[1.7vw] lg:text-[1.3vw] text-base flex justify-between border-b border-[#ffffff] `}>
                <div>Virgin Atlantic</div>
                <div>Certificate of Appreciation</div>
            </div>
            <div
            ref={addToContainerRefs}
            onMouseEnter={() => handleEnter(6)}
            onMouseLeave={() => handleLeave(6)}
             className={`${Clash.className} text-white py-6 md:text-[1.7vw] lg:text-[1.3vw] text-base flex justify-between border-b border-[#ffffff] `}>
                <div>Etihad Airways  </div>
                <div>Certificate of Appreciation</div>
            </div>  
            <div
            ref={addToContainerRefs}
            onMouseEnter={() => handleEnter(7)}
            onMouseLeave={() => handleLeave(7)}
             className={`${Clash.className} text-white py-6 md:text-[1.7vw] lg:text-[1.3vw] text-base flex justify-between border-b border-[#ffffff] `}>
                <div>British Airways</div>
                <div>Certificate of Appreciation</div>
            </div>  
              
        </div>

        {/* <div>
            <div className='w-full flex justify-center bg-[#02123b] -mt-1 -mb-1 pt-[4vw]'>
                <div>
                    <div className={`${Clash.className} text-[8vw] text-center w-full text-white  md:text-[5vw] lg:text-[4vw]`}>Our Offices</div>
                    <div className='w-full p-4 md:p-0  flex justify-center h-full pt-[3vw]'>
                        <img src="/images/map.webp" alt="" className='w-full h-full object-contain' />
                    </div>
                </div>
            </div>
        </div> */}
           <div className="py-[32vw] sm:py-[20vw] md:py-[16vw] lg:py-[9vw] bg-[#02123B] md:px-[2vw] lg:px-[4vw] px-4 ">
          <div
            className={`${Clash.className} text-center text-[#ffffff] text-[8vw] md:text-[5vw] lg:text-[4vw] `}
          >
            Our Offices
          </div>
          <div className="flex flex-col gap-8 md:gap-[3vw] lg:pt-[4vw] pt-[10vw]  md:pt-[6vw]">
            <div className="flex flex-row  justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0 ">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Head Office</div>
                <div className="text-lg">
                  112 A, Adarsh Industrial Estate, Chakala, Sahar Road, Andheri
                  (E), Mumbai 400 099, Maharashtra, India. 
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:02242148000">022-42148000</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Mumbai Office</div>
                <div className="text-lg">
                306, 313 - B Wing, 119, Business Point, Opp. Intl Air Cargo Complex, Sahar Road, Andheri (E), Mumbai - 400 099, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9102242149500">+91 022-42149500</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Pune Office</div>
                <div className="text-lg">
                S. No. 198. H. No. 2/1 & 2/2, Office No. 816, ‘’A’’ Wing,Nyatiempress, Viman Nagar, Pune - 411 014. Maharashtra, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9102069069600">+91 020-69069600</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0 ">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Delhi Office</div>
                <div className="text-lg">
                Khasra No. 836, Block K2, Near E2 Block, Mahipalpur Extension, New Delhi - 110 037, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9101142641240">+91 011-42641240</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Ahmedabad Office</div>
                <div className="text-lg">
                603. Sixth Floor, Lilamani Corporate Heights, Opp. Ramapir No Tekro, Near BRTS Bus Stop New Vadaj,Ahmedabad - 380 013, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9107929600603">+91 079-29600603</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Chennai Office</div>
                <div className="text-lg">
                New No. 5, Old No.69, Southern Side, 1st Floor, Kalajmagal Nagar, Chennai - 600 032, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+910444804595">+91 044-4804595</a>
                </div>
                <div className="text-lg">
                  Cell: <a href="tel:+918095761028">+91 80957 61028</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Belgaum Office</div>
                <div className="text-lg">
                Block No. 5, Next To Jamia Masjid Chowk, Mathpai Nagar, Angol, Belgaum - 590 006, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+918691003166">+91 86910 03166</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Goa Office</div>
                <div className="text-lg">
                Office No. 4, Nile’s Residency, Opp. Bharat Petrol Pump, Near Kira Paulo Hotel, Verma - 403 722, Goa, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+918879670022">+91 88796 70022</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Vadodara Office</div>
                <div className="text-lg">
                709, 7th Floor, Siddharth Complex R.C, Dutt Road, Alkapuri, Vadodara - 390 007, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9102652321256">+91 0265-2321256</a>
                </div>
              </div>
            </div>
            <div className="flex flex-row  justify-between flex-nowrap overflow-x-auto gap-8 md:gap-0">
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Bangalore Office</div>
                <div className="text-lg">
                Building No. 4-598/16/2/4, 2nd Floor, Above Axis Bank, Amruthahalli Main Road, Amurathahalli, Bangalore - 560 092, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+9108049020700">+91 080-49020700</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Hyderabad Office</div>
                <div className="text-lg">
                10-3-273/8/A First Floor, Humayun Nagar,Mehdipatnam, Hyderabad - 500 028Telangana, India
                </div>
                <div className="text-lg">
                  Mob: <a href="tel:+919618051042">+91 96180 51042</a>
                </div>
              </div>
              <div
                className={`flex flex-col flex-shrink-0 text-white bg-[#1a284c] w-full md:w-[30%] rounded-xl border border-[#263355] items-start justify-center gap-4 p-4 ${Clash.className}`}
              >
                <div className="text-2xl">Surat Office</div>
                <div className="text-lg">
                B-504 Shakuntal Apartment, Near Shangvi Tower, Gujarat Gas Circle, Adajan, Surat - 395 009, India
                </div>
                <div className="text-lg">
                  Tel: <a href="tel:+918660406787">+91 86604 06787</a>
                </div>
              </div>
            
          </div>
        </div>
      </div>
        <Footer/>

  
   </div>
   </>
  )
}

export default page
