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
      translateX: "-350%",
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

{/* <div ref={addToRefs} className="md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw] cursor-pointer"
                        onClick={() => handleImageClick("/images/gallery/g1.webp")}
                      >
                        <img src="/images/gallery/g1.webp" className="w-full h-full object-cover rounded-xl" alt="" />
                      </div> */}
      
      <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/img1.jpg",
          "/images/gallery/img2.jpg",
          
        ]}
        // title=""
        date="15-Ton Jaw Crusher & Pan Feeder Machinery to Matadi"
        onImageClick={handleImageClick}
      />

      {/* <div ref={addToRefs}     onClick={() => handleImageClick("/images/gallery/g2.webp")} className=' cursor-pointer md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
        <img src="/images/gallery/g2.webp" className='w-full h-full object-cover rounded-xl' alt="" />
      </div> */}

      <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/img3.jpg",
          "/images/gallery/img4.jpg",
        ]}
        // title="Air Charter"
        date="12-Ton Flue Gas Cooler with Refractory Lining"
        onImageClick={handleImageClick}
      />

      {/* <div ref={addToRefs}     onClick={() => handleImageClick("/images/gallery/g3.webp")} className=' cursor-pointer md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]'>
        <img src="/images/gallery/g3.webp" className='w-full h-full object-cover rounded-xl' alt="" />
      </div> */}

      <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/img5.jpg",
          "/images/gallery/img6.jpg",
          "/images/gallery/img7.jpg",
        ]}
        // title="Air Charter"
        date="10-Ton DG to MATADI"
        onImageClick={handleImageClick}
      />
       <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/img8.jpg",
          "/images/gallery/img9.jpg",
        ]}
        // title="Air Charter"
        date="10-Ton Agriculture Combine Harvester to Hamburg"
        onImageClick={handleImageClick}
      />
        <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/img10.jpg",
          "/images/gallery/img11.jpg",
          "/images/gallery/img12.jpg",
          "/images/gallery/img13.jpg",
          "/images/gallery/img14.jpg",
          "/images/gallery/img15.jpg",
          "/images/gallery/img16.jpg",
          "/images/gallery/img17.jpg",
          "/images/gallery/img18.jpg",
          "/images/gallery/img19.jpg",
          "/images/gallery/img20.jpg",
          "/images/gallery/img21.jpg",
          "/images/gallery/img22.jpg",
          "/images/gallery/img23.jpg",
          "/images/gallery/img24.jpg",
          "/images/gallery/img25.jpg",
          "/images/gallery/img26.jpg",
          "/images/gallery/img27.jpg",
          "/images/gallery/img28.jpg",
        ]}
        // title="Air Charter"
        date="9-Ton Mixed Cargo"
        onImageClick={handleImageClick}
      />
       <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/img29.jpg",
          "/images/gallery/img30.jpg",
          "/images/gallery/img31.jpg",
        ]}
        // title="Air Charter"
        date="7-Ton Packaging Machine"
        onImageClick={handleImageClick}
      />
      <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/img32.jpg",
          "/images/gallery/img33.jpg",
        ]}
        // title="Air Charter"
        date="6.3-ton Nature Organic Waste Converter – Russia"
        onImageClick={handleImageClick}
      />
      <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/img34.jpg",
          "/images/gallery/img35.jpg",
          "/images/gallery/img36.jpg",
        ]}
        // title="Air Charter"
        date="2-Ton KV Transformer to Matadi"
        onImageClick={handleImageClick}
      />
        <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/img37.jpg",
          "/images/gallery/img38.jpg",
          "/images/gallery/img39.jpg",
          "/images/gallery/img40.jpg",
          "/images/gallery/img41.jpg",
          "/images/gallery/img42.jpg",
          "/images/gallery/img43.jpg",
          "/images/gallery/img44.jpg",
          "/images/gallery/img45.jpg",
          "/images/gallery/img46.jpg",
          "/images/gallery/img47.jpg",
          "/images/gallery/img48.jpg",
          "/images/gallery/img49.jpg",
          "/images/gallery/img50.jpg",
          "/images/gallery/img51.jpg",
          "/images/gallery/img52.jpg",
          "/images/gallery/img53.jpg",
          "/images/gallery/img54.jpg",
          "/images/gallery/img55.jpg",
          "/images/gallery/img56.jpg",
          "/images/gallery/img57.jpg",
          "/images/gallery/img58.jpg",
          "/images/gallery/img59.jpg",
          "/images/gallery/img60.jpg",
          "/images/gallery/img61.jpg",
          "/images/gallery/img62.jpg",
          "/images/gallery/img63.jpg",

        ]}
        // title="Air Charter"
        date="23-Tonnes Fuel Skid to Argentina"
        onImageClick={handleImageClick}
      />
          <ImageCard 
        ref={addToRefs}
        images={[
          "/images/gallery/img64.jpg",
          "/images/gallery/img65.jpg",
          "/images/gallery/img66.jpg",
          "/images/gallery/img67.jpg",
          "/images/gallery/img68.jpg",
          "/images/gallery/img69.jpg",
          "/images/gallery/img70.jpg",
          "/images/gallery/img71.jpg",
          "/images/gallery/img72.jpg",
          "/images/gallery/img73.jpg",
          "/images/gallery/img74.jpg",
          "/images/gallery/img75.jpg",
          "/images/gallery/img76.jpg",
          "/images/gallery/img77.jpg",
          "/images/gallery/img78.jpg",
          "/images/gallery/img79.jpg",
          "/images/gallery/img80.jpg",
          "/images/gallery/img81.jpg",
          "/images/gallery/img82.jpg",
          "/images/gallery/img83.jpg",
          "/images/gallery/img84.jpg",
          "/images/gallery/img85.jpg",
          "/images/gallery/img86.jpg",
          "/images/gallery/img87.jpg",
          "/images/gallery/img88.jpg",
          "/images/gallery/img89.jpg",

        ]}
        // title="Air Charter"
        date="25-Ton Rectors and Blenders"
        onImageClick={handleImageClick}
      />
             <ImageCard 
        ref={addToRefs}
        images={[
          
          "/images/gallery/img90.jpg",
          "/images/gallery/img91.jpg",
          "/images/gallery/img92.jpg",
          "/images/gallery/img93.jpg",
          "/images/gallery/img94.jpg",
          "/images/gallery/img95.jpg",
          "/images/gallery/img96.jpg",
          "/images/gallery/img97.jpg",
          "/images/gallery/img98.jpg",
          "/images/gallery/img99.jpg",
          "/images/gallery/img100.jpg",
          "/images/gallery/img101.jpg",
          "/images/gallery/img102.jpg",
          "/images/gallery/img103.jpg",
          "/images/gallery/img104.jpg",
          "/images/gallery/img105.jpg",
          "/images/gallery/img106.jpg",
          "/images/gallery/img107.jpg",
          "/images/gallery/img108.jpg",
          "/images/gallery/img109.jpg",
          "/images/gallery/img110.jpg",
          "/images/gallery/img111.jpg",
          "/images/gallery/img112.jpg",
          "/images/gallery/img113.jpg",
          "/images/gallery/img114.jpg",
          "/images/gallery/img115.jpg",
          "/images/gallery/img116.jpg",
          "/images/gallery/img117.jpg",
          "/images/gallery/img118.jpg",
          "/images/gallery/img119.jpg",
          "/images/gallery/img120.jpg",

          
        ]}
        // title="Air Charter"
        date="28-Ton Excavator and Road Roller for Offshore"
        onImageClick={handleImageClick}
      />
                   <ImageCard 
        ref={addToRefs}
        images={[
          
          "/images/gallery/img121.jpg",
          "/images/gallery/img122.jpg",
          "/images/gallery/img123.jpg",
          "/images/gallery/img124.jpg",
          "/images/gallery/img125.jpg",
          "/images/gallery/img126.jpg",
          
          
        ]}
        // title="Air Charter"
        date="46-Ton Centrifugal Fan Assembled with Motors to Iraq"
        onImageClick={handleImageClick}
      />
                        <ImageCard 
        ref={addToRefs}
        images={[
          
          "/images/gallery/img127.jpg",
          "/images/gallery/img128.jpg",
          
          
        ]}
        // title="Air Charter"
        date="63-Ton Cold Forging Machine"
        onImageClick={handleImageClick}
      />
                        <ImageCard 
        ref={addToRefs}
        images={[
          
          "/images/gallery/img129.jpg",
          
          
        ]}
        // title="Air Charter"
        date="Offshore Crawler"
        onImageClick={handleImageClick}
      />
                          <ImageCard 
        ref={addToRefs}
        images={[
          
          "/images/gallery/img130.jpg",
          "/images/gallery/img131.jpg",
          "/images/gallery/img132.jpg",
          "/images/gallery/img133.jpg",
          
          
        ]}
        // title="Air Charter"
        date="Oil Refinery Equipment"
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
      <div className='w-full h-screen hidden md:block bg-[#02123b]'>
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
                      <Scale value={13} />
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
                      <Scale value={12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-center absolute bottom-[45vh] z-[99]'>
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