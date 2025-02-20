"use client"
import React, { useEffect, useRef, useState } from 'react'
import ServicesPage from '../../components/ServicesPage'
import Navbar from '../../components/Navbar'
import { Clash, ClashM } from '../../../../public/fonts/fonts'
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import AnimatedCard from '../../components/AnimatedCard'
import BottomSector from '../../components/BottomSector'
import SectorAnimated from '../../components/SectorAnimated'
import AnimatedTextSection from '../../components/SectorAnimated'
import CircularProgress from '../../components/CircularProgress'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ExpandableSectionsWithImages from '../../components/ExpandableSectionsWithImages';
import TruckAnimation2 from '../../components/TruckAnimation2'
import TruckAnimation from '../../components/TruckAnimation'

gsap.registerPlugin(ScrollTrigger);

const page = () => {
         const scrollContainerRef = useRef(null);
         const slider = useRef();
         const [expandedIndex, setExpandedIndex] = useState(null);

          const [isLoading, setIsLoading] = useState(true);
          const [isReady, setIsReady] = useState(false);
          const [locomotiveInstance, setLocomotiveInstance] = useState(null);
  
         const verticalLineRefs = useRef([null, null, null]);
         const contentRefs = useRef([null, null, null]);
  const containerRef = useRef(null);
               const triggerRef = useRef();
                  
                        //  useEffect(() => {
                        //         const scrollInstance = new locomotiveScroll({
                        //           el: scrollContainerRef.current,
                        //           smooth: true,
                        //           smoothMobile: true,
                        //           multiplier: 0.1, // Adjust the speed of the scrolling (lower is slower)
                        //           lerp: 0, // Adjust the easing (lower is smoother)
                        //         });
                            
                        //         return () => {
                        //           if (scrollInstance) scrollInstance.destroy();
                        //         };
                        //       }, []);

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
                        

  const text = [
    "Our expertise lies in understanding the ",
    "specific needs of diverse industries and ",
    "delivering tailor-made packaging that ",
    "ensures safety, compliance, and cost",
    "efficiency."
  ];
  const text2 = [
    "Our expertise lies in",
    "understanding the specific ",
    "needs of diverse industries ",
    "and delivering tailor-made",
    "packaging that ensures safety",
    "compliance, and cost ",
    "efficiency."
  ];
  // useGSAP(()=>{

  //   // Only run when ready
   
  //      gsap.fromTo(slider.current,{
  //          translateX: 0,
  //        },
  //        {
  //          translateX: "-30%",
  //          ease: "none",
  //          duration: 1,
  //          scrollTrigger: {
  //            trigger: triggerRef.current,
  //            start: "top top",
  //            end: "1500 top",
  //            scrub: 0.6,
  //            pin: true,
  //            // markers: true,
  //            anticipatePin: 1, // This helps prevent jarring pin start
  //            fastScrollEnd: true, // Improves performance during fast scrolling
  //            preventOverlaps: true,
  //            invalidateOnRefresh: true,
  //            onEnter: () => {
  //              // Ensure smooth start of animation
  //              gsap.to(slider.current, {
  //                opacity: 1,
  //                duration: 0.3
  //              });
  //            },
  //          },
  //        }
         
  //      )
  //      return () => {
  //          // pin.kill();
  //        };
  //  })

  useGSAP(() => {
    gsap.fromTo(slider.current,
      {
        translateX: 0,
      },
      {
        translateX: "-30%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1500 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          invalidateOnRefresh: true,
          pinSpacing: false, // Add this
          onEnter: () => {
            gsap.to(slider.current, {
              opacity: 1,
              duration: 0.3
            });
          },
        },
      }
    );
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

useGSAP(() => {
    verticalLineRefs.current.forEach((ref, index) => {
      if (ref) {
        if (expandedIndex === index) {
          gsap.to(ref, {
            scaleY: 0,
            duration: 0.3,
            ease: 'power2.inOut'
          });
          
          gsap.fromTo(contentRefs.current[index],
            {
              height: 0,
              opacity: 0,
            },
            {
              height: 'auto',
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out'
            }
          );
        } else {
          gsap.to(ref, {
            scaleY: 1,
            duration: 0.3,
            ease: 'power2.inOut'
          });
          
          gsap.to(contentRefs.current[index], {
            height: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out'
          });
        }
      }
    });
  }, [expandedIndex]);

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const sections = [
    {
      title: "End-to-End Solutions",
      content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients."
    },
    {
      title: "Global Standards",
      content: "We follow the highest industry standards, ensuring consistency and quality across all shipments."
    },
    {
      title: "Expert Consultation",
      content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency."
    }
  ];
   

  return (
    <>
    <div className='absolute w-full'>
    <Navbar/>
    </div>
 
    <div ref={scrollContainerRef} data-scroll-container>
    <ServicesPage title={'Packaging Solutions'} img1={'/images/sectors/imgpa1.png'} img2={'/images/sectors/imgpa2.png'} desc={'The engineering industry is the backbone of modern infrastructure and technology, encompassing everything from heavy machinery and industrial equipment to intricate components and tools.'}/>


    <div ref={triggerRef} className='hidden md:h-[250vw] lg:h-[200vw] xl:h-[170vw]  md:block' >
  <div  className='w-full hidden md:flex md:flex-row flex-col md:justify-between md:items-center md:p-[2vw] lg:p-[4vw] p-4 md:gap-0 gap-[3vw]'>
    <div  className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] md:w-[30%] w-full `} >Challenges & Solutions</div>
    <div className={`text-[#02123b] ${Clash.className} text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] md:w-[35%] w-full `}>At Channel Freight, we are industry leaders in offering innovative, reliable, and customized packaging solutions.</div>
    
    </div>
    <div  className='w-full h-full overflow-hidden pt-[2vw] md:flex hidden  md:w-full overflow-x-auto scrollbar-hide md:px-[2vw] lg:px-[4vw] px-4 md:mx-0 justify-between gap-[1.7vw] md:gap-0'>
        <div ref={slider}   className='flex md:w-full flex-nowrap   md:mx-0 justify-between gap-[1.7vw] md:gap-[2vw]'>   
             
        <AnimatedCard
    index={1}
    title="Tailored Solutions for Unique Needs"
    content="From custom crating for oversized goods to tamper-proof seals for sensitive items, our packaging solutions are as unique as the goods we handle."
    Clash={Clash}
  />
                     <AnimatedCard
    index={2}
    title="Protection Against Damage"
    content="Our robust packaging materials and state-of-the-art techniques safeguard goods from physical, environmental, and handling risks during transit."
    Clash={Clash}
  />

<AnimatedCard
    index={3}
    title="Compliance with Regulations"
    content="We ensure adherence to all packaging and labeling standards for domestic and international shipping, including DG handling and cold chain requirements."
    Clash={Clash}
  />

<AnimatedCard
    index={4}
    title="Sustainability Concerns"
    content="Embracing eco-friendly materials and innovative designs, we offer sustainable packaging options that align with global environmental goals."
    Clash={Clash}
  />
 

                  
                </div>
                </div>
    </div>



      
              
                <div   className='w-full md:hidden flex md:flex-row flex-col md:justify-between md:items-center md:p-[2vw] lg:p-[4vw] p-4 md:gap-0 gap-[3vw]'>
    <div  className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] md:w-[30%] w-full `} >Challenges & Solutions</div>
    <div className={`text-[#02123b] ${Clash.className} text-[5vw]  sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] md:w-[35%] w-full `}>At Channel Freight, we are industry leaders in offering innovative, reliable, and customized packaging solutions.</div>
    </div>

       <div  className='flex md:hidden md:w-full overflow-x-auto scrollbar-hide md:px-[2vw] lg:px-[4vw] px-4 md:mx-0 justify-between gap-[4vw] pt-[6vw] md:gap-0'> 
                    <AnimatedCard
    index={1}
    title="Tailored Solutions for Unique Needs"
    content="From custom crating for oversized goods to tamper-proof seals for sensitive items, our packaging solutions are as unique as the goods we handle."
    Clash={Clash}
  />
                     <AnimatedCard
    index={2}
    title="Protection Against Damage"
    content="Our robust packaging materials and state-of-the-art techniques safeguard goods from physical, environmental, and handling risks during transit."
    Clash={Clash}
  />

<AnimatedCard
    index={3}
    title="Compliance with Regulations"
    content="We ensure adherence to all packaging and labeling standards for domestic and international shipping, including DG handling and cold chain requirements."
    Clash={Clash}
  />

<AnimatedCard
    index={4}
    title="Sustainability Concerns"
    content="Embracing eco-friendly materials and innovative designs, we offer sustainable packaging options that align with global environmental goals."
    Clash={Clash}
  />
                  
                </div>    

                <div className='my-[10vw] lg:h-[50vw] md:h-[65vw]   hidden md:block'>
                <AnimatedTextSection
      textLines={text}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
                </div>
                <div className='my-[10vw] block md:hidden '>
                <AnimatedTextSection
      textLines={text2}
      font={Clash.className}
      spacing="my-4"
    //   showMarkers={true} // Useful for debugging animations// Additional classes for the container
    />
                </div> 

              <div className=''>
              <TruckAnimation2/>
              </div>

              <div className='h-full'>

               <ExpandableSectionsWithImages Clash={Clash} />
               </div>

              
              
                
                <div>
                <BottomSector 
  description="At Channel Freight, packaging is not just a service—it’s a science. Our cutting-edge facilities, experienced teams, and commitment to innovation make us the go-to partner for businesses seeking reliable, efficient, and forward-thinking packaging solutions."
  image1="/images/sectors/pack-123.webp"
  image2="/images/sectors/pack-122.webp"
  image3="/images/sectors/pack-121.webp"
/>
                </div>
  
    <Footer/>
    </div>
    </>
  )
}

export default page      