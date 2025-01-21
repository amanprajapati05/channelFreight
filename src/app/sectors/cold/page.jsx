"use client"
import React, { useEffect, useRef } from 'react';
import ServicesPage from '../../components/ServicesPage';
import Navbar from '../../components/Navbar';
import { Clash } from '../../../../public/fonts/fonts';
import Footer from '../../components/Footer';
import TruckAnimation from '../../components/TruckAnimation';
import BottomSector from '../../components/BottomSector';
import AnimatedTextSection from '../../components/SectorAnimated';
import locomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const page = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollInstance = new locomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      smoothMobile: true,
      multiplier: 0.1, // Adjust the speed of the scrolling (lower is slower)
      lerp: 0, // Adjust the easing (lower is smoother)
    });

    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);

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

        <div className='w-full -mt-1' data-scroll-section>
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
