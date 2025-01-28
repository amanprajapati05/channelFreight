"use client"
import React, { useEffect, useRef, useState } from 'react';
import ServicesPage from '../../components/ServicesPage';
import Navbar from '../../components/Navbar';
import { Clash } from '../../../../public/fonts/fonts';
import Footer from '../../components/Footer';
import TruckAnimation from '../../components/TruckAnimation';
import BottomSector from '../../components/BottomSector';
import AnimatedTextSection from '../../components/SectorAnimated';
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const scrollContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [locomotiveInstance, setLocomotiveInstance] = useState(null);

  // useEffect(() => {
  //   // Force scroll to top
  //   window.scrollTo(0, 0);
    
  //   // Disable scroll initially
  //   document.body.style.overflow = 'hidden';
    
  //   // Initialize locomotive scroll
  //   const scrollInstance = new locomotiveScroll({
  //     el: scrollContainerRef.current,
  //     smooth: true,
  //     smoothMobile: true,
  //     multiplier: 0.1,
  //     lerp: 0,
  //   });

  //   setLocomotiveInstance(scrollInstance);
    
  //   // Initially disable scroll
  //   scrollInstance.stop();
    
  //   // Add delay before starting animations
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //     setIsReady(true);
  //     scrollInstance.start();
  //     scrollInstance.update();
      
  //     // Fade in the content
  //     if (scrollContainerRef.current) {
  //       scrollContainerRef.current.style.opacity = '1';
  //     }
  //   }, 2000); // 2 second delay
    
  //   return () => {
  //     clearTimeout(timer);
  //     if (scrollInstance) {
  //       scrollInstance.destroy();
  //     }
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.style.overflow = 'hidden';
    
  //   const scrollInstance = new locomotiveScroll({
  //     el: scrollContainerRef.current,
  //     smooth: true,
  //     smoothMobile: true,
  //     multiplier: 0.1,
  //     lerp: 0,
  //     onScroll: () => {
  //       ScrollTrigger.update();
  //     }
  //   });
  
  //   ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
  //     scrollTop(value) {
  //       return arguments.length 
  //         ? scrollInstance.scrollTo(value, 0, 0) 
  //         : scrollInstance.scroll.instance.scroll.y;
  //     },
  //     getBoundingClientRect() {
  //       return {
  //         top: 0,
  //         left: 0,
  //         width: window.innerWidth,
  //         height: window.innerHeight
  //       };
  //     }
  //   });
  
  //   setLocomotiveInstance(scrollInstance);
    
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //     setIsReady(true);
  //     scrollInstance.start();
  //     scrollInstance.update();
  //     ScrollTrigger.refresh();
      
  //     if (scrollContainerRef.current) {
  //       scrollContainerRef.current.style.opacity = '1';
  //     }
  //   }, 2000);
    
  //   return () => {
  //     clearTimeout(timer);
  //     if (scrollInstance) {
  //       scrollInstance.destroy();
  //     }
  //     ScrollTrigger.getAll().forEach(t => t.kill());
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.style.overflow = 'hidden';
    
  //   // Create scroll instance
  //   const scrollInstance = new locomotiveScroll({
  //     el: scrollContainerRef.current,
  //     smooth: true,
  //     smoothMobile: true,
  //     multiplier: 1,
  //     lerp: 0.1,
  //     smartphone: {
  //       smooth: true,
  //       multiplier: 1,
  //       breakpoint: 767
  //     },
  //     tablet: {
  //       smooth: true,
  //       multiplier: 1,
  //       breakpoint: 1024
  //     },
  //     gestureDirection: 'vertical',
  //     touchMultiplier: 2,
  //     resetNativeScroll: true
  //   });

  //   setLocomotiveInstance(scrollInstance);
    
  //   // Initially disable scroll
  //   if (scrollInstance && scrollInstance.stop) {
  //     scrollInstance.stop();
  //   }

  //   // Setup ScrollTrigger proxy
  //   ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
  //     scrollTop(value) {
  //       if (!scrollInstance) return 0;
  //       return arguments.length 
  //         ? scrollInstance.scrollTo(value, { duration: 0, disableLerp: true })
  //         : scrollInstance.scroll.instance?.scroll?.y || 0;
  //     },
  //     getBoundingClientRect() {
  //       return {
  //         top: 0,
  //         left: 0,
  //         width: window.innerWidth,
  //         height: window.innerHeight
  //       };
  //     }
  //   });

  //   // Add scroll listener for ScrollTrigger update
  //   const scrollHandler = () => {
  //     ScrollTrigger.update();
  //   };
  //   scrollContainerRef.current?.addEventListener('scroll', scrollHandler);

  //   // Add delay before starting animations
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //     setIsReady(true);
  //     if (scrollInstance && scrollInstance.start) {
  //       scrollInstance.start();
  //       scrollInstance.update();
  //     }
  //     ScrollTrigger.refresh();
      
  //     if (scrollContainerRef.current) {
  //       scrollContainerRef.current.style.opacity = '1';
  //     }
  //     document.body.style.overflow = '';
  //   }, 2000);
    
  //   // Cleanup
  //   return () => {
  //     clearTimeout(timer);
  //     scrollContainerRef.current?.removeEventListener('scroll', scrollHandler);
  //     if (scrollInstance && scrollInstance.destroy) {
  //       scrollInstance.destroy();
  //     }
  //     ScrollTrigger.getAll().forEach(t => t.kill());
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);

  const text = [
    "We offer industry-leading cold chain ",
    "logistics, integrating refrigerated transport, ",
    "temperature-controlled warehouses, and ",
    "advanced packaging solutions.",
  ];

  const text2 = [
    "We offer industry-leading cold",
    "chain logistics, integrating",
    "refrigerated transport,",
    "temperature-controlled",
    "warehouses, and advanced",
    "packaging solutions.",
  ];

  return (
    <>
      <div className='absolute w-full'>
        <Navbar />
      </div>

      <div ref={scrollContainerRef} data-scroll-container>
        <ServicesPage
          title={'cold chain products'}
          img1={'/images/sectors/img61.png'}
          img2={'/images/sectors/img62.png'}
          desc={
            'Cold chain logistics is vital for industries such as healthcare, food, agriculture, and chemicals. It involves the seamless movement of perishable goods under strict temperature controls to preserve quality and safety.'
          }
        />

        <div className='w-full -mt-1 md:-mt-[7vw]' data-scroll-section>
          <TruckAnimation />
        </div>

        <div className='w-full h-screen bg-[#02123b]' data-scroll-section></div>

        <div className='my-[10vw] hidden md:block' data-scroll-section>
          <AnimatedTextSection
            textLines={text}
            font={Clash.className}
            spacing="my-4"
          />
        </div>
        <div className='my-[10vw] block md:hidden' data-scroll-section>
          <AnimatedTextSection
            textLines={text2}
            font={Clash.className}
            spacing="my-4"
          />
        </div>

        <div data-scroll-section>
          <BottomSector
            description="Clients trust us for our precision, innovation, and global expertise. With Channel Freight, your perishable goods are in the safest hands, delivered fresh and on time, every time."
            image1="/images/sectors/cc1.webp"
            image2="/images/sectors/cc3.webp"
            image3="/images/sectors/cc2.webp"
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default page;
