"use client"
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Clash } from '../../../public/fonts/fonts'
import ImageCard from '../components/ImageCard'
import ToggleButton from '../components/Togglebutton'
import Scale from '../components/Barcode'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Footer from './Footer'
import ImagePreview from '../components/ImagePreview'

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [isActive, setIsActive] = useState(false);
  const cardsRef = useRef([]);
  const slider = useRef(null);
  const slider2 = useRef(null);
  const triggerRef = useRef(null);
  const triggerRef2 = useRef(null);
  const containerRef = useRef(null);
  const scaleRef = useRef(null);
  const scaleMobileRef = useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);
  
    const handleOpen = () => setIsOpen(true);

    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    const handleImageClick = (src) => {
      setSelectedImage(src);
      setIsPreviewOpen(true);
    };
  
    const handleClosePreview = () => {
      setIsPreviewOpen(false);
      setSelectedImage('');
    };

  useEffect(() => {
    const cards = cardsRef.current;
    
    if (isActive) {
      gsap.to(cards, {
        x: '30%',
        duration: 0.8,
        ease: 'power2.out'
      });
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? '35%' : '-35%',
          duration: 0.8,
          ease: 'power2.out'
        });
      });
    } else {
      gsap.to(cards, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    }
  }, [isActive]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // useGSAP(() => {
  //   // Desktop animation
  //   gsap.fromTo([slider.current, containerRef.current], {
  //     translateX: 0,
  //   }, {
  //     translateX: "-120%",
  //     ease: "none",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: triggerRef.current,
  //       start: "top top",
  //       end: "2000 top",
  //       scrub: 2,
  //       pin: true,
  //       anticipatePin: 1,
  //       fastScrollEnd: true,
  //       preventOverlaps: true,
  //       invalidateOnRefresh: true,
  //       onEnter: () => {
  //         gsap.to(slider.current, {
  //           opacity: 1,
  //           duration: 0.3
  //         });
  //       },
  //     },
  //   });
  // });

  // useGSAP(() => {
  //   // Mobile animation
  //   gsap.fromTo([slider2.current, containerRef.current], {
  //     translateX: 0,
  //   }, {
  //     translateX: "-300%",
  //     ease: "none",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: triggerRef2.current,
  //       start: "top top",
  //       end: "2000 top",
  //       scrub: 2,
  //       pin: true,
  //       anticipatePin: 1,
  //       fastScrollEnd: true,
  //       preventOverlaps: true,
  //       invalidateOnRefresh: true,
  //       onEnter: () => {
  //         gsap.to(slider2.current, {
  //           opacity: 1,
  //           duration: 0.3
  //         });
  //       },
  //     },
  //   });
  // });

  useGSAP(() => {
    // Desktop animation
    gsap.fromTo([slider.current, scaleRef.current], {
      translateX: 0,
    }, {
      translateX: "-120%",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Move Scale component with slider
          gsap.set(scaleRef.current, {
            x: self.progress * -120 + "%"
          });
        }
      },
    });
  });
  
  // useGSAP(() => {
  //   // Mobile animation
  //   gsap.fromTo([slider2.current, scaleMobileRef.current], {
  //     translateX: 0,
  //   }, {
  //     translateX: "-300%",
  //     ease: "none",
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: triggerRef2.current,
  //       start: "top top", 
  //       end: "2000 top",
  //       scrub: 2,
  //       pin: true,
  //       anticipatePin: 1,
  //       fastScrollEnd: true,
  //       preventOverlaps: true,
  //       invalidateOnRefresh: true,
  //       onUpdate: (self) => {
  //         // Move Scale component with slider
  //         gsap.set(scaleMobileRef.current, {
  //           x: self.progress * -300 + "%"
  //         });
  //       }
  //     },
  //   });
  // });

  const renderGalleryContent = (sliderRef) => (
    <>

<div ref={addToRefs} className="md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw] cursor-pointer"
                        onClick={() => handleImageClick("/images/gallery/g1.webp")}
                      >
                        <img src="/images/gallery/g1.webp" className="w-full h-full object-cover rounded-xl" alt="" />
                      </div>
      
      <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/card-1.webp",
          "/images/gallery/card-1-1.webp",
          "/images/gallery/card-1-2.webp",
          "/images/gallery/card-1-3.webp",
        ]}
        title="Start"
        date="12th January 1999"
        onImageClick={handleImageClick}
      />

      <div ref={addToRefs}     onClick={() => handleImageClick("/images/gallery/g2.webp")} className=' cursor-pointer md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
        <img src="/images/gallery/g2.webp" className='w-full h-full object-cover rounded-xl' alt="" />
      </div>

      <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/card-2.webp",
          "/images/gallery/card-1-1.webp",
          "/images/gallery/card-1-2.webp",
          "/images/gallery/card-1-3.webp",
        ]}
        title="Air Charter"
        date="18th June 2004"
        onImageClick={handleImageClick}
      />

      <div ref={addToRefs}     onClick={() => handleImageClick("/images/gallery/g3.webp")} className=' cursor-pointer md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
        <img src="/images/gallery/g3.webp" className='w-full h-full object-cover rounded-xl' alt="" />
      </div>

      <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/card-3.webp",
          "/images/gallery/card-1-1.webp",
          "/images/gallery/card-1-2.webp",
          "/images/gallery/card-1-3.webp",
        ]}
        title="Air Charter"
        date="18th June 2004"
        onImageClick={handleImageClick}
      />
    </>
  );

  return (
    <>
      <div className='absolute w-full z-[999]'>
        <Navbar/>
      </div>
      
      {/* Desktop Layout */}
      <div className='w-full h-screen hidden md:block'>
        <div className='w-full h-full bg-[#02123b]'>
          <div className='md:pt-[20vw] lg:pt-[16vw] xl:pt-[12vw] pt-[42vw] sm:pt-[32vw] bg-[#02123b]'>
            <div className={`md:pl-[2vw] lg:pl-[4vw] px-4 md:px-0 flex flex-col md:flex-row gap-6 md:gap-0 justify-end md:justify-between text-white ${Clash.className}`}>
              <div className='text-[10vw] lg:text-[6vw] md:text-[8vw] h-auto md:h-[50%] uppercase'>Gallery</div>
            </div>
          </div>

          <div className='bg-[#02123b]  '>
            <div ref={triggerRef} className='flex'>
              <div className='md:pl-[2vw] lg:pl-[4vw] px-4 w-full md:pt-[5vw] pt-[16vw] bg-[#02123b] pb-[16vw] md:pb-[10vw]'>
                <div className='h-screen'>
                  <div className='relative md:h-screen flex flex-col justify-around'>
                    <div ref={slider} className='flex gap-[4vw] w-full pt-[10vw] md:pt-0 pb-[8vw] md:pb-0'>
                      {renderGalleryContent(slider)}
                    </div>
                    <div className='w-full flex justify-center absolute md:bottom-44  z-[999]'>
                      <ToggleButton isActive={isActive} setIsActive={setIsActive} />
                    </div>
                    <div ref={scaleRef} className='flex pt-[10vw] md:pt-0'>
                      <Scale value={5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div ref={triggerRef2} className='w-full h-screen md:hidden '>
        <div className='w-full h-full bg-[#02123b]'>
          <div className='pt-[42vw] sm:pt-[32vw] bg-[#02123b]'>
            <div className={`px-4 flex flex-col gap-6 justify-end text-white ${Clash.className}`}>
              <div className='text-[10vw] h-auto uppercase'>Gallery</div>
            </div>
          </div>

          <div className='bg-[#02123b] relative '>
            <div className='flex'>
              <div className='px-4 w-full bg-[#02123b]'>
                <div className='h-screen'>
                  <div className='relative h-[70%] flex flex-col justify-around  overflow-x-auto'>
                    <div ref={slider2} className='flex gap-[4vw] w-full relative pt-[10vw] pb-[12vw]'>
                      {renderGalleryContent(slider2)}
                    </div>
                    <div ref={scaleMobileRef} className='flex'>
                      <Scale value={8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-center absolute bottom-[75vw] z-[99]'>
                      <ToggleButton isActive={isActive} setIsActive={setIsActive} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <Footer/>
      </div>
      {isPreviewOpen && <ImagePreview src={selectedImage} onClose={handleClosePreview} />}
    </>
  )
}

export default Gallery