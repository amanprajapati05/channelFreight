"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../components/Navbar'
import { Clash, ClashM } from '../../../public/fonts/fonts'
import Footer from '../components/Footer'
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    const visionRef = useRef(null);
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const shipImageRef = useRef(null);

useEffect(() => {
    const canvas = canvasRef.current;
    const vision = visionRef.current;
    const section = sectionRef.current;
    
    if (!canvas || !vision || !section) return;

    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;
    
    const ctx = canvas.getContext('2d');
    contextRef.current = ctx;
    
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '10';
    canvas.style.pointerEvents = 'none';

    const shipImage = new Image();
    shipImage.src = '/images/ship-vertical.png';
    shipImageRef.current = shipImage;

    shipImage.onload = () => {
        const shipWidth = window.innerWidth * 0.08;
        const aspectRatio = shipImage.height / shipImage.width;
        const shipHeight = shipWidth * aspectRatio;
        const visionBottom = vision.offsetTop + vision.offsetHeight;
        const initialY = visionBottom - 200; // Store initial Y position
        
        const shipDimensions = {
            width: shipWidth,
            height: shipHeight,
            x: (window.innerWidth - shipWidth) / 2,
            y: initialY
        };

        const drawShip = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                shipImage,
                shipDimensions.x,
                shipDimensions.y,
                shipDimensions.width,
                shipDimensions.height
            );
        };

        // Initial draw at starting position
        drawShip();

        // Calculate travel distance based on section height
        const travelDistance = section.offsetHeight * 0.6; // Adjust multiplier as needed

        gsap.fromTo(shipDimensions, 
            { y: initialY }, // Start from initial position
            {
                y: initialY + travelDistance, // Move down by travel distance
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom bottom",
                    // markers: true,
                    scrub: true,
                    onUpdate: () => drawShip(),
                    onScrubComplete: () => {
                        // Ensure ship is at correct position when scrolling stops
                        drawShip();
                    }
                }
            }
        );
    };

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = document.documentElement.scrollHeight;
        
        if (shipImageRef.current) {
            const shipWidth = window.innerWidth * 0.08;
            const aspectRatio = shipImageRef.current.height / shipImageRef.current.width;
            const shipHeight = shipWidth * aspectRatio;
            const visionBottom = vision.offsetTop + vision.offsetHeight;
            const initialY = visionBottom - 200;
            
            ctx.drawImage(
                shipImageRef.current,
                (window.innerWidth - shipWidth) / 2,
                initialY,
                shipWidth,
                shipHeight
            );
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
}, []);



  useEffect(() => {
    const content = contentRef.current;
    const section = sectionRef.current;
    const dot = dotRef.current;
    const items = timelineItemsRef.current;
    const ship = shipRef.current;
    const vision = visionRef.current;
    
    


    // Calculate the total scroll distance needed
    const totalScroll = (items.length - 3) * window.innerHeight;

     
   // Original timeline animations
    gsap.to(content, {
        y: -(totalScroll),
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${totalScroll}px`,
            pin: true,
            scrub: 1,
        }
    });

    gsap.to(dot, {
        y: `${23.5}vw`,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${totalScroll}px`,
            scrub: 1,
        }
    });

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
}, []);

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

   <div className='w-full '>
        
        <div className='md:h-screen h-[50vh] '>
            <div className=' h-[100%] md:h-[100%] pb-4 md:pb-0  bg-[--blue3]'>
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

        <div className='flex justify-center items-center h-[60vw] md:h-[30vw] -top-1 relative bg-[--blue3] text-white'>
            <div className=' w-[4vw] h-[4vw] absolute left-[10vw] top-[8vw] flex justify-center items-center'>
                <img src="/images/invcommas.png" alt="" />
            </div>
            <div className={`flex justify-center items-center h-[60vw] md:h-[30vw] bg-[--blue3] text-white ${Clash.className} px-[5vw]`}
            >
                <div className='md:text-[2vw] text-[5vw] w-[75%] md:w-[70%] text-center' >To create customized solutions, provide unparalleled services at competitive costs, and foster long-term, sustainable partnerships with our clients.</div>
            </div>
            <div className=' w-[4vw] h-[4vw] absolute right-[10vw] bottom-[8vw] flex justify-center items-center'>
            <img className=' rotate-180' src="/images/invcommas.png" alt="" />
            </div>
        </div>


        <div ref={visionRef} className='bg-white text-[--blue3] w-screen h-screen '>
            <div className='flex justify-center w-full'>
                <div className='flex flex-col w-full  '>
            <div className={`${Clash.className} text-[8vw] text-center w-full   md:text-[5vw] lg:text-[4vw] py-[4vw]`}>Our Vision</div>
            <div className='w-full flex justify-center'>
            <div className={`${Clash.className} md:text-[2vw]  text-[5vw] w-[65%] md:w-[60%] text-center leading-[1.4] py-[2vw] `}>To be the most trusted and innovative global logistics partner, exceeding customer expectations and setting industry standards in supply chain solutions.</div>
            </div>
            </div>
            </div>
        </div>

        {/* this canvas */}
        {/* <canvas></canvas> */}
        <div className='h-[40vh]'></div>
        <canvas
    ref={canvasRef}
    className="fixed inset-0 pointer-events-none"
    style={{ zIndex: 10 }}
/>

        {/* <img
                        ref={shipRef}
                        src="/images/ship-vertical.png"
                        alt="Scrolling ship"
                        className="pointer-events-none fixed z-10"
                        style={{
                            position: 'fixed',
                            opacity: 0
                        }}
                    /> */}

    

  <div ref={sectionRef} className="h-screen bg-[--blue3] md:px-[2vw] lg:px-[4vw] px-4">
        <div className="flex w-full md:flex-row flex-col h-full justify-between items-center">
          <div className="md:w-[30%] w-full flex gap-[2vw] items-center ">
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
  
          <div className="w-[30%] h-full overflow-hidden relative">
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

        

        <div className='md:px-[2vw] lg:px-[4vw] px-4 bg-[--blue3] pt-4 pb-[10vw] -mt-2 md:-mt-1 text-white'>
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

        <div>
            <div className='w-full flex justify-center bg-[--blue3] pt-[4vw]'>
                <div>
                    <div className={`${Clash.className} text-[8vw] text-center w-full text-white  md:text-[5vw] lg:text-[4vw]`}>Our Offices</div>
                    <div className='w-full p-4 md:p-0  flex justify-center h-full pt-[3vw]'>
                        <img src="/images/map.webp" alt="" className='w-full h-full object-contain' />
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
{/* <div className=' bg-white flex justify-between px-[5vw]'>
            <div className={`${Clash.className} text-[--blue3] flex flex-col text-center items-center justify-center w-[28%]`}>
                <div className='text-[2vw]'>150+<br/>Countries Served</div>
                <div className='text-[1vw]'>Providing reliable logistics solutions and deliveries worldwide.</div>
            </div>
            <div className={`${Clash.className} text-[--blue3] flex flex-col text-center items-center justify-center w-[28%]`}>
                <div className='text-[2vw]'>500+<br/>Satisfied Clients</div>
                <div className='text-[1vw]'>Trusted by a diverse portfolio of clients worldwide.</div>
            </div>
            <div className={`${Clash.className} text-[--blue3] flex flex-col text-center items-center justify-center w-[28%]`}>
                <div className='text-[2vw]'>1,000,000+<br/>Shipments Delivered</div>
                <div className='text-[1vw]'>Successfully handled over one million shipments across air, sea, and land.</div>
            </div>
        </div> */}
          {/* this part */}
        {/* <div className='h-screen bg-[--blue3] md:px-[2vw] lg:px-[4vw] px-4 '>
            <div className='flex w-full h-full justify-between items-center'>
                <div className='w-[30%] flex gap-[2vw] items-center'>
                    <div className='w-[1.8vw] h-[25vw] border-[#333f5e] flex justify-center  border rounded-3xl'>
                            <div className='w-[0.8vw] h-[0.8vw] mt-[2px] rounded-full bg-[#adedff] '></div>
                    </div>
                    <div>
                        <div className={`${Clash.className} text-[8vw]  text-white  md:text-[5vw] lg:text-[4vw] `}>25 Years of Excellence</div>
                        <div className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `} >Celebrating a legacy of innovation, growth, and customer-centric service.</div>
                    </div>
                </div>
                <div className='w-[30%] h-full gap-[20vh] overflow-hidden flex  flex-col relative'>
                    <div className='gradient1 w-full h-[10vw] absolute top-0 z-[2]'></div>
                    <div className=' flex-shrink-0' >
                    <div  className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `}>1999</div>
                    <div className={`${Clash.className} text-[6vw]  text-white  md:text-[3.8vw] lg:text-[3vw] `} > Foundation Year</div>
                    <div  className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `}>Channel Freight was established with a vision to revolutionize logistics through efficient and reliable service.</div>
                    </div>
                    <div className=' flex-shrink-0'>
                    <div  className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `}>2005</div>
                    <div className={`${Clash.className} text-[6vw]  text-white  md:text-[3.8vw] lg:text-[3vw] `} > First Major Expansion</div>
                    <div  className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `}>Expanded operations to include a comprehensive sea freight service, making global shipping more accessible.</div>
                    </div>
                    <div className=' flex-shrink-0 '>
                    <div  className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `}>2010</div>
                    <div className={`${Clash.className} text-[6vw]  text-white  md:text-[3.8vw] lg:text-[3vw] leading-[1.2] `} >International Recognition</div>
                    <div  className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `}>Achieved global recognition by entering key international markets, handling large-scale projects.</div>
                    </div>
                    <div className=' flex-shrink-0 '>
                    <div  className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `}>2020</div>
                    <div className={`${Clash.className} text-[6vw]  text-white  md:text-[3.8vw] lg:text-[3vw] leading-[1.2] `} >Resilience During Global Challenges</div>
                    <div  className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `}>Achieved global recognition by entering key international markets, handling large-scale projects.</div>
                    </div>
                    <div className=' flex-shrink-0 '>
                    <div  className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `}>2024</div>
                    <div className={`${Clash.className} text-[6vw]  text-white  md:text-[3.8vw] lg:text-[3vw] leading-[1.2] `} >25 Years of Service</div>
                    <div  className={`${Clash.className} text-white  md:text-[1.7vw] lg:text-[1.3vw] text-base   `}>Reached the 25-year milestone, with a strong reputation built on trust, efficiency, and innovation.</div>
                    </div>
                    <div className='gradient2 w-full h-[10vw] absolute bottom-0'></div>
                </div>
            </div>
        </div> */}