// // // // // // // // // import React, { useState, useRef } from 'react';
// // // // // // // // // import { useGSAP } from '@gsap/react';
// // // // // // // // // import gsap from 'gsap';

// // // // // // // // // const ExpandableSectionsWithImages = ({ Clash }) => {
// // // // // // // // //   const [expandedIndex, setExpandedIndex] = useState(null);
// // // // // // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
// // // // // // // // //   const verticalLineRefs = useRef([null, null, null]);
// // // // // // // // //   const contentRefs = useRef([null, null, null]);
// // // // // // // // //   const imagesContainerRef = useRef(null);
// // // // // // // // //   const imageRefs = useRef([]);

// // // // // // // // //   const images = [
// // // // // // // // //     "/images/sectors/images.png",
// // // // // // // // //     "/images/sectors/images2.png",
// // // // // // // // //     "/images/sectors/images3.png"
// // // // // // // // //   ];

// // // // // // // // //   const sections = [
// // // // // // // // //     {
// // // // // // // // //       title: "End-to-End Solutions",
// // // // // // // // //       content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients."
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Global Standards",
// // // // // // // // //       content: "We follow the highest industry standards, ensuring consistency and quality across all shipments."
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       title: "Expert Consultation",
// // // // // // // // //       content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency."
// // // // // // // // //     }
// // // // // // // // //   ];

// // // // // // // // //   useGSAP(() => {
// // // // // // // // //     verticalLineRefs.current.forEach((ref, index) => {
// // // // // // // // //       if (ref) {
// // // // // // // // //         if (expandedIndex === index) {
// // // // // // // // //           gsap.to(ref, {
// // // // // // // // //             scaleY: 0,
// // // // // // // // //             duration: 0.3,
// // // // // // // // //             ease: 'power2.inOut'
// // // // // // // // //           });
          
// // // // // // // // //           gsap.fromTo(contentRefs.current[index],
// // // // // // // // //             {
// // // // // // // // //               height: 0,
// // // // // // // // //               opacity: 0,
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //               height: 'auto',
// // // // // // // // //               opacity: 1,
// // // // // // // // //               duration: 0.5,
// // // // // // // // //               ease: 'power2.out'
// // // // // // // // //             }
// // // // // // // // //           );
// // // // // // // // //         } else {
// // // // // // // // //           gsap.to(ref, {
// // // // // // // // //             scaleY: 1,
// // // // // // // // //             duration: 0.3,
// // // // // // // // //             ease: 'power2.inOut'
// // // // // // // // //           });
          
// // // // // // // // //           gsap.to(contentRefs.current[index], {
// // // // // // // // //             height: 0,
// // // // // // // // //             opacity: 0,
// // // // // // // // //             duration: 0.5,
// // // // // // // // //             ease: 'power2.out'
// // // // // // // // //           });
// // // // // // // // //         }
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //   }, [expandedIndex]);

// // // // // // // // //   const animateImageTransition = (newIndex) => {
// // // // // // // // //     const currentImage = imageRefs.current[currentImageIndex];
// // // // // // // // //     const nextImage = imageRefs.current[newIndex];

// // // // // // // // //     gsap.to(currentImage, {
// // // // // // // // //       xPercent: -100,
// // // // // // // // //       opacity: 0,
// // // // // // // // //       duration: 0.5,
// // // // // // // // //       ease: 'power2.inOut'
// // // // // // // // //     });

// // // // // // // // //     gsap.fromTo(nextImage,
// // // // // // // // //       {
// // // // // // // // //         xPercent: 100,
// // // // // // // // //         opacity: 0
// // // // // // // // //       },
// // // // // // // // //       {
// // // // // // // // //         xPercent: 0,
// // // // // // // // //         opacity: 1,
// // // // // // // // //         duration: 0.5,
// // // // // // // // //         ease: 'power2.inOut'
// // // // // // // // //       }
// // // // // // // // //     );
// // // // // // // // //   };

// // // // // // // // //   const handleClick = (index) => {
// // // // // // // // //     if (expandedIndex !== index) {
// // // // // // // // //       const nextImageIndex = (currentImageIndex + 1) % images.length;
// // // // // // // // //       animateImageTransition(nextImageIndex);
// // // // // // // // //       setCurrentImageIndex(nextImageIndex);
// // // // // // // // //     }
// // // // // // // // //     setExpandedIndex(expandedIndex === index ? null : index);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="md:p-[2vw] lg:p-[4vw] p-4">
// // // // // // // // //       <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}>
// // // // // // // // //         Redefining Packaging Excellence
// // // // // // // // //       </div>
// // // // // // // // //       <div className="flex justify-between w-full bg-bl items-start pt-[4vw]">
// // // // // // // // //         <div className="w-[30%] h-auto relative" ref={imagesContainerRef}>
// // // // // // // // //           {images.map((src, index) => (
// // // // // // // // //             <img
// // // // // // // // //               key={index}
// // // // // // // // //               ref={el => imageRefs.current[index] = el}
// // // // // // // // //               src={src}
// // // // // // // // //               className={`w-full absolute top-0 left-0 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
// // // // // // // // //               alt=""
// // // // // // // // //               style={{
// // // // // // // // //                 opacity: index === currentImageIndex ? 1 : 0,
// // // // // // // // //                 transform: index === currentImageIndex ? 'translateX(0%)' : 'translateX(100%)'
// // // // // // // // //               }}
// // // // // // // // //             />
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         <div className="w-[65%]">
// // // // // // // // //           {sections.map((section, index) => (
// // // // // // // // //             <div key={index} className="border-t w-full flex gap-[3vw] items-start py-[2vw]">
// // // // // // // // //               <div>
// // // // // // // // //                 <div 
// // // // // // // // //                   onClick={() => handleClick(index)}
// // // // // // // // //                   className="border-[#c8c8c8] border rounded-full w-[4vw] h-[4vw] flex justify-center items-center relative cursor-pointer"
// // // // // // // // //                 >
// // // // // // // // //                   <div className="w-[25px] h-[2px] bg-gray-500"></div>
// // // // // // // // //                   <div 
// // // // // // // // //                     ref={el => verticalLineRefs.current[index] = el}
// // // // // // // // //                     className="w-[2px] h-[25px] bg-gray-500 absolute"
// // // // // // // // //                   ></div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
              
// // // // // // // // //               <div className="flex flex-col gap-[1vw]">
// // // // // // // // //                 <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // // // // //                   {section.title}
// // // // // // // // //                 </div>
                
// // // // // // // // //                 <div 
// // // // // // // // //                   ref={el => contentRefs.current[index] = el}
// // // // // // // // //                   style={{ height: 0, overflow: 'hidden' }}
// // // // // // // // //                   className="content-wrapper"
// // // // // // // // //                 >
// // // // // // // // //                   <div className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-[#02123b] z-[2] w-[70%]`}>
// // // // // // // // //                     {section.content}
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ExpandableSectionsWithImages;
// // // // // // // // import React, { useState, useRef } from 'react';
// // // // // // // // import { useGSAP } from '@gsap/react';
// // // // // // // // import gsap from 'gsap';

// // // // // // // // const ExpandableSectionsWithImages = ({ Clash }) => {
// // // // // // // //   const [expandedIndex, setExpandedIndex] = useState(null);
// // // // // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
// // // // // // // //   const verticalLineRefs = useRef([null, null, null]);
// // // // // // // //   const contentRefs = useRef([null, null, null]);
// // // // // // // //   const imagesContainerRef = useRef(null);

// // // // // // // //   const sections = [
// // // // // // // //     {
// // // // // // // //       title: "End-to-End Solutions",
// // // // // // // //       content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients."
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Global Standards",
// // // // // // // //       content: "We follow the highest industry standards, ensuring consistency and quality across all shipments."
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       title: "Expert Consultation",
// // // // // // // //       content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency."
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   useGSAP(() => {
// // // // // // // //     verticalLineRefs.current.forEach((ref, index) => {
// // // // // // // //       if (ref) {
// // // // // // // //         if (expandedIndex === index) {
// // // // // // // //           gsap.to(ref, {
// // // // // // // //             scaleY: 0,
// // // // // // // //             duration: 0.3,
// // // // // // // //             ease: 'power2.inOut'
// // // // // // // //           });
          
// // // // // // // //           gsap.fromTo(contentRefs.current[index],
// // // // // // // //             {
// // // // // // // //               height: 0,
// // // // // // // //               opacity: 0,
// // // // // // // //             },
// // // // // // // //             {
// // // // // // // //               height: 'auto',
// // // // // // // //               opacity: 1,
// // // // // // // //               duration: 0.5,
// // // // // // // //               ease: 'power2.out'
// // // // // // // //             }
// // // // // // // //           );
// // // // // // // //         } else {
// // // // // // // //           gsap.to(ref, {
// // // // // // // //             scaleY: 1,
// // // // // // // //             duration: 0.3,
// // // // // // // //             ease: 'power2.inOut'
// // // // // // // //           });
          
// // // // // // // //           gsap.to(contentRefs.current[index], {
// // // // // // // //             height: 0,
// // // // // // // //             opacity: 0,
// // // // // // // //             duration: 0.5,
// // // // // // // //             ease: 'power2.out'
// // // // // // // //           });
// // // // // // // //         }
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //   }, [expandedIndex]);

// // // // // // // //   const handleClick = (index) => {
// // // // // // // //     if (expandedIndex !== index) {
// // // // // // // //       const images = imagesContainerRef.current.children;
// // // // // // // //       const nextImageIndex = (currentImageIndex + 1) % images.length;
      
// // // // // // // //       gsap.fromTo(images[nextImageIndex],
// // // // // // // //         {
// // // // // // // //           xPercent: 100,
// // // // // // // //         },
// // // // // // // //         {
// // // // // // // //           xPercent: 0,
// // // // // // // //           duration: 0.5,
// // // // // // // //           ease: 'power2.inOut',
// // // // // // // //         }
// // // // // // // //       );

// // // // // // // //       setCurrentImageIndex(nextImageIndex);
// // // // // // // //     }
// // // // // // // //     setExpandedIndex(expandedIndex === index ? null : index);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="md:p-[2vw] lg:p-[4vw] p-4">
// // // // // // // //       <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}>
// // // // // // // //         Redefining Packaging Excellence
// // // // // // // //       </div>
// // // // // // // //       <div className="flex justify-between w-full bg-bl items-start pt-[4vw]">
// // // // // // // //         <div className="w-[30%] h-auto overflow-hidden" ref={imagesContainerRef}>
// // // // // // // //           <img src="/images/sectors/images.png" className="w-full " alt="" />
// // // // // // // //           <img src="/images/sectors/images2.png" className="w-full" alt="" />
// // // // // // // //           <img src="/images/sectors/images3.png" className="w-full" alt="" />
// // // // // // // //         </div>

// // // // // // // //         <div className="w-[65%]">
// // // // // // // //           {sections.map((section, index) => (
// // // // // // // //             <div key={index} className="border-t w-full flex gap-[3vw] items-start py-[2vw]">
// // // // // // // //               <div>
// // // // // // // //                 <div 
// // // // // // // //                   onClick={() => handleClick(index)}
// // // // // // // //                   className="border-[#c8c8c8] border rounded-full w-[4vw] h-[4vw] flex justify-center items-center relative cursor-pointer"
// // // // // // // //                 >
// // // // // // // //                   <div className="w-[25px] h-[2px] bg-gray-500"></div>
// // // // // // // //                   <div 
// // // // // // // //                     ref={el => verticalLineRefs.current[index] = el}
// // // // // // // //                     className="w-[2px] h-[25px] bg-gray-500 absolute"
// // // // // // // //                   ></div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
              
// // // // // // // //               <div className="flex flex-col gap-[1vw]">
// // // // // // // //                 <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // // // //                   {section.title}
// // // // // // // //                 </div>
                
// // // // // // // //                 <div 
// // // // // // // //                   ref={el => contentRefs.current[index] = el}
// // // // // // // //                   style={{ height: 0, overflow: 'hidden' }}
// // // // // // // //                   className="content-wrapper"
// // // // // // // //                 >
// // // // // // // //                   <div className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-[#02123b] z-[2] w-[70%]`}>
// // // // // // // //                     {section.content}
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ExpandableSectionsWithImages;
// // // // // // // import React, { useState, useRef } from 'react';
// // // // // // // import { useGSAP } from '@gsap/react';
// // // // // // // import gsap from 'gsap';

// // // // // // // const ExpandableSectionsWithImages = ({ Clash }) => {
// // // // // // //   const [expandedIndex, setExpandedIndex] = useState(null);
// // // // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
// // // // // // //   const verticalLineRefs = useRef([null, null, null]);
// // // // // // //   const contentRefs = useRef([null, null, null]);
// // // // // // //   const imagesContainerRef = useRef(null);

// // // // // // //   const sections = [
// // // // // // //     {
// // // // // // //       title: "End-to-End Solutions",
// // // // // // //       content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients."
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Global Standards",
// // // // // // //       content: "We follow the highest industry standards, ensuring consistency and quality across all shipments."
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Expert Consultation",
// // // // // // //       content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency."
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   useGSAP(() => {
// // // // // // //     verticalLineRefs.current.forEach((ref, index) => {
// // // // // // //       if (ref) {
// // // // // // //         if (expandedIndex === index) {
// // // // // // //           gsap.to(ref, {
// // // // // // //             scaleY: 0,
// // // // // // //             duration: 0.3,
// // // // // // //             ease: 'power2.inOut'
// // // // // // //           });
          
// // // // // // //           gsap.fromTo(contentRefs.current[index],
// // // // // // //             {
// // // // // // //               height: 0,
// // // // // // //               opacity: 0,
// // // // // // //             },
// // // // // // //             {
// // // // // // //               height: 'auto',
// // // // // // //               opacity: 1,
// // // // // // //               duration: 0.5,
// // // // // // //               ease: 'power2.out'
// // // // // // //             }
// // // // // // //           );
// // // // // // //         } else {
// // // // // // //           gsap.to(ref, {
// // // // // // //             scaleY: 1,
// // // // // // //             duration: 0.3,
// // // // // // //             ease: 'power2.inOut'
// // // // // // //           });
          
// // // // // // //           gsap.to(contentRefs.current[index], {
// // // // // // //             height: 0,
// // // // // // //             opacity: 0,
// // // // // // //             duration: 0.5,
// // // // // // //             ease: 'power2.out'
// // // // // // //           });
// // // // // // //         }
// // // // // // //       }
// // // // // // //     });
// // // // // // //   }, [expandedIndex]);

// // // // // // //   const handleClick = (index) => {
// // // // // // //     if (expandedIndex !== index) {
// // // // // // //       const images = imagesContainerRef.current.children;
// // // // // // //       const nextImageIndex = (currentImageIndex + 1) % images.length;
      
// // // // // // //       // Move next image into position
// // // // // // //       gsap.set(images[nextImageIndex], {
// // // // // // //         xPercent: 100,
// // // // // // //         zIndex: 1
// // // // // // //       });
      
// // // // // // //       // Animate next image sliding in
// // // // // // //       gsap.to(images[nextImageIndex], {
// // // // // // //         xPercent: 0,
// // // // // // //         duration: 0.5,
// // // // // // //         ease: 'power2.inOut',
// // // // // // //         onComplete: () => {
// // // // // // //           // Reset z-index after animation
// // // // // // //           gsap.set(images[currentImageIndex], { zIndex: 0 });
// // // // // // //           gsap.set(images[nextImageIndex], { zIndex: 1 });
// // // // // // //         }
// // // // // // //       });

// // // // // // //       setCurrentImageIndex(nextImageIndex);
// // // // // // //     }
// // // // // // //     setExpandedIndex(expandedIndex === index ? null : index);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="md:p-[2vw] lg:p-[4vw] p-4">
// // // // // // //       <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}>
// // // // // // //         Redefining Packaging Excellence
// // // // // // //       </div>
// // // // // // //       <div className="flex justify-between w-full bg-bl items-start pt-[4vw]">
// // // // // // //         <div className="w-[30%] relative overflow-hidden" ref={imagesContainerRef}>
// // // // // // //           {/* First image determines container height */}
// // // // // // //           <div className="w-full relative" style={{ paddingBottom: '100%' }}></div>
// // // // // // //           <img 
// // // // // // //             src="/images/sectors/images.png" 
// // // // // // //             className="w-full absolute top-0 left-0" 
// // // // // // //             alt=""
// // // // // // //             style={{ zIndex: currentImageIndex === 0 ? 1 : 0 }}
// // // // // // //           />
// // // // // // //           <img 
// // // // // // //             src="/images/sectors/images2.png" 
// // // // // // //             className="w-full absolute top-0 left-0" 
// // // // // // //             alt=""
// // // // // // //             style={{ zIndex: currentImageIndex === 1 ? 1 : 0 }}
// // // // // // //           />
// // // // // // //           <img 
// // // // // // //             src="/images/sectors/images3.png" 
// // // // // // //             className="w-full absolute top-0 left-0" 
// // // // // // //             alt=""
// // // // // // //             style={{ zIndex: currentImageIndex === 2 ? 1 : 0 }}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         <div className="w-[65%]">
// // // // // // //           {sections.map((section, index) => (
// // // // // // //             <div key={index} className="border-t w-full flex gap-[3vw] items-start py-[2vw]">
// // // // // // //               <div>
// // // // // // //                 <div 
// // // // // // //                   onClick={() => handleClick(index)}
// // // // // // //                   className="border-[#c8c8c8] border rounded-full w-[4vw] h-[4vw] flex justify-center items-center relative cursor-pointer"
// // // // // // //                 >
// // // // // // //                   <div className="w-[25px] h-[2px] bg-gray-500"></div>
// // // // // // //                   <div 
// // // // // // //                     ref={el => verticalLineRefs.current[index] = el}
// // // // // // //                     className="w-[2px] h-[25px] bg-gray-500 absolute"
// // // // // // //                   ></div>
// // // // // // //                 </div>
// // // // // // //               </div>
              
// // // // // // //               <div className="flex flex-col gap-[1vw]">
// // // // // // //                 <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // // //                   {section.title}
// // // // // // //                 </div>
                
// // // // // // //                 <div 
// // // // // // //                   ref={el => contentRefs.current[index] = el}
// // // // // // //                   style={{ height: 0, overflow: 'hidden' }}
// // // // // // //                   className="content-wrapper"
// // // // // // //                 >
// // // // // // //                   <div className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-[#02123b] z-[2] w-[70%]`}>
// // // // // // //                     {section.content}
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ExpandableSectionsWithImages;
// // // // // // import React, { useState, useRef } from 'react';
// // // // // // import { useGSAP } from '@gsap/react';
// // // // // // import gsap from 'gsap';

// // // // // // const ExpandableSectionsWithImages = ({ Clash }) => {
// // // // // //   const [expandedIndex, setExpandedIndex] = useState(null);
// // // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
// // // // // //   const verticalLineRefs = useRef([null, null, null]);
// // // // // //   const contentRefs = useRef([null, null, null]);
// // // // // //   const imagesContainerRef = useRef(null);

// // // // // //   const sections = [
// // // // // //     {
// // // // // //       title: "End-to-End Solutions",
// // // // // //       content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients."
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Global Standards",
// // // // // //       content: "We follow the highest industry standards, ensuring consistency and quality across all shipments."
// // // // // //     },
// // // // // //     {
// // // // // //       title: "Expert Consultation",
// // // // // //       content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency."
// // // // // //     }
// // // // // //   ];

// // // // // //   useGSAP(() => {
// // // // // //     verticalLineRefs.current.forEach((ref, index) => {
// // // // // //       if (ref) {
// // // // // //         if (expandedIndex === index) {
// // // // // //           gsap.to(ref, {
// // // // // //             scaleY: 0,
// // // // // //             duration: 0.3,
// // // // // //             ease: 'power2.inOut'
// // // // // //           });
          
// // // // // //           gsap.fromTo(contentRefs.current[index],
// // // // // //             {
// // // // // //               height: 0,
// // // // // //               opacity: 0,
// // // // // //             },
// // // // // //             {
// // // // // //               height: 'auto',
// // // // // //               opacity: 1,
// // // // // //               duration: 0.5,
// // // // // //               ease: 'power2.out'
// // // // // //             }
// // // // // //           );
// // // // // //         } else {
// // // // // //           gsap.to(ref, {
// // // // // //             scaleY: 1,
// // // // // //             duration: 0.3,
// // // // // //             ease: 'power2.inOut'
// // // // // //           });
          
// // // // // //           gsap.to(contentRefs.current[index], {
// // // // // //             height: 0,
// // // // // //             opacity: 0,
// // // // // //             duration: 0.5,
// // // // // //             ease: 'power2.out'
// // // // // //           });
// // // // // //         }
// // // // // //       }
// // // // // //     });
// // // // // //   }, [expandedIndex]);

// // // // // //   const handleClick = (index) => {
// // // // // //     if (expandedIndex !== index) {
// // // // // //       const images = imagesContainerRef.current.children;
// // // // // //       const nextImageIndex = (currentImageIndex + 1) % images.length;
      
// // // // // //       // Set initial position for next image
// // // // // //       gsap.set(images[nextImageIndex], {
// // // // // //         display: 'block',
// // // // // //         x: '100%'
// // // // // //       });

// // // // // //       // Slide animation
// // // // // //       gsap.to(images[nextImageIndex], {
// // // // // //         x: '0%',
// // // // // //         duration: 0.5,
// // // // // //         ease: 'power2.inOut',
// // // // // //         onComplete: () => {
// // // // // //           // Hide previous image after animation
// // // // // //           gsap.set(images[currentImageIndex], {
// // // // // //             display: 'none'
// // // // // //           });
// // // // // //         }
// // // // // //       });

// // // // // //       setCurrentImageIndex(nextImageIndex);
// // // // // //     }
// // // // // //     setExpandedIndex(expandedIndex === index ? null : index);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="md:p-[2vw] lg:p-[4vw] p-4">
// // // // // //       <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}>
// // // // // //         Redefining Packaging Excellence
// // // // // //       </div>
// // // // // //       <div className="flex justify-between w-full bg-bl items-start pt-[4vw]">
// // // // // //         <div className="w-[30%] overflow-x-hidden" ref={imagesContainerRef}>
// // // // // //           <img 
// // // // // //             src="/images/sectors/images.png" 
// // // // // //             className="w-full" 
// // // // // //             alt=""
// // // // // //             style={{ display: currentImageIndex === 0 ? 'block' : 'none' }}
// // // // // //           />
// // // // // //           <img 
// // // // // //             src="/images/sectors/images2.png" 
// // // // // //             className="w-full" 
// // // // // //             alt=""
// // // // // //             style={{ display: currentImageIndex === 1 ? 'block' : 'none' }}
// // // // // //           />
// // // // // //           <img 
// // // // // //             src="/images/sectors/images3.png" 
// // // // // //             className="w-full" 
// // // // // //             alt=""
// // // // // //             style={{ display: currentImageIndex === 2 ? 'block' : 'none' }}
// // // // // //           />
// // // // // //         </div>

// // // // // //         <div className="w-[65%]">
// // // // // //           {sections.map((section, index) => (
// // // // // //             <div key={index} className="border-t w-full flex gap-[3vw] items-start py-[2vw]">
// // // // // //               <div>
// // // // // //                 <div 
// // // // // //                   onClick={() => handleClick(index)}
// // // // // //                   className="border-[#c8c8c8] border rounded-full w-[4vw] h-[4vw] flex justify-center items-center relative cursor-pointer"
// // // // // //                 >
// // // // // //                   <div className="w-[25px] h-[2px] bg-gray-500"></div>
// // // // // //                   <div 
// // // // // //                     ref={el => verticalLineRefs.current[index] = el}
// // // // // //                     className="w-[2px] h-[25px] bg-gray-500 absolute"
// // // // // //                   ></div>
// // // // // //                 </div>
// // // // // //               </div>
              
// // // // // //               <div className="flex flex-col gap-[1vw]">
// // // // // //                 <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // // //                   {section.title}
// // // // // //                 </div>
                
// // // // // //                 <div 
// // // // // //                   ref={el => contentRefs.current[index] = el}
// // // // // //                   style={{ height: 0, overflow: 'hidden' }}
// // // // // //                   className="content-wrapper"
// // // // // //                 >
// // // // // //                   <div className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-[#02123b] z-[2] w-[70%]`}>
// // // // // //                     {section.content}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ExpandableSectionsWithImages;
// // // // // import React, { useState, useRef } from 'react';
// // // // // import { useGSAP } from '@gsap/react';
// // // // // import gsap from 'gsap';

// // // // // const ExpandableSectionsWithImages = ({ Clash }) => {
// // // // //   const [expandedIndex, setExpandedIndex] = useState(null);
// // // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
// // // // //   const verticalLineRefs = useRef([null, null, null]);
// // // // //   const contentRefs = useRef([null, null, null]);
// // // // //   const imagesContainerRef = useRef(null);

// // // // //   const sections = [
// // // // //     {
// // // // //       title: "End-to-End Solutions",
// // // // //       content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients."
// // // // //     },
// // // // //     {
// // // // //       title: "Global Standards",
// // // // //       content: "We follow the highest industry standards, ensuring consistency and quality across all shipments."
// // // // //     },
// // // // //     {
// // // // //       title: "Expert Consultation",
// // // // //       content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency."
// // // // //     }
// // // // //   ];

// // // // //   useGSAP(() => {
// // // // //     verticalLineRefs.current.forEach((ref, index) => {
// // // // //       if (ref) {
// // // // //         if (expandedIndex === index) {
// // // // //           gsap.to(ref, {
// // // // //             scaleY: 0,
// // // // //             duration: 0.3,
// // // // //             ease: 'power2.inOut'
// // // // //           });
          
// // // // //           gsap.fromTo(contentRefs.current[index],
// // // // //             {
// // // // //               height: 0,
// // // // //               opacity: 0,
// // // // //             },
// // // // //             {
// // // // //               height: 'auto',
// // // // //               opacity: 1,
// // // // //               duration: 0.5,
// // // // //               ease: 'power2.out'
// // // // //             }
// // // // //           );
// // // // //         } else {
// // // // //           gsap.to(ref, {
// // // // //             scaleY: 1,
// // // // //             duration: 0.3,
// // // // //             ease: 'power2.inOut'
// // // // //           });
          
// // // // //           gsap.to(contentRefs.current[index], {
// // // // //             height: 0,
// // // // //             opacity: 0,
// // // // //             duration: 0.5,
// // // // //             ease: 'power2.out'
// // // // //           });
// // // // //         }
// // // // //       }
// // // // //     });
// // // // //   }, [expandedIndex]);

// // // // //   const handleClick = (index) => {
// // // // //     if (expandedIndex !== index) {
// // // // //       const images = imagesContainerRef.current.children;
// // // // //       const nextImageIndex = (currentImageIndex + 1) % images.length;
      
// // // // //       // Reduce brightness of current image
// // // // //       gsap.to(images[currentImageIndex], {
// // // // //         filter: 'brightness(0.75)',
// // // // //         duration: 0.3
// // // // //       });

// // // // //       // Position and animate next image
// // // // //       gsap.fromTo(images[nextImageIndex],
// // // // //         {
// // // // //           xPercent: 100,
// // // // //           zIndex: 1,
// // // // //           filter: 'brightness(1)',
// // // // //           display: 'block',
// // // // //           position: 'absolute',
// // // // //           top: 0,
// // // // //           left: 0
// // // // //         },
// // // // //         {
// // // // //           xPercent: 0,
// // // // //           duration: 0.5,
// // // // //           ease: 'power2.inOut'
// // // // //         }
// // // // //       );

// // // // //       setCurrentImageIndex(nextImageIndex);
// // // // //     }
// // // // //     setExpandedIndex(expandedIndex === index ? null : index);
// // // // //   };

// // // // //   return (
// // // // //     <div className="md:p-[2vw] lg:p-[4vw] p-4">
// // // // //       <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}>
// // // // //         Redefining Packaging Excellence
// // // // //       </div>
// // // // //       <div className="flex justify-between w-full bg-bl items-start pt-[4vw]">
// // // // //         <div className="w-[30%] relative overflow-x-hidden" ref={imagesContainerRef}>
// // // // //           {/* Container height reference */}
// // // // //           <div className="w-full" style={{ paddingBottom: '100%' }}></div>
// // // // //           <img 
// // // // //             src="/images/sectors/images.png" 
// // // // //             className="w-full absolute top-0 left-0" 
// // // // //             alt=""
// // // // //             style={{ 
// // // // //               zIndex: currentImageIndex === 0 ? 1 : 0,
// // // // //               filter: currentImageIndex === 0 ? 'brightness(1)' : 'brightness(0.75)'
// // // // //             }}
// // // // //           />
// // // // //           <img 
// // // // //             src="/images/sectors/images2.png" 
// // // // //             className="w-full absolute top-0 left-0" 
// // // // //             alt=""
// // // // //             style={{ 
// // // // //               zIndex: currentImageIndex === 1 ? 1 : 0,
// // // // //               filter: currentImageIndex === 1 ? 'brightness(1)' : 'brightness(0.75)'
// // // // //             }}
// // // // //           />
// // // // //           <img 
// // // // //             src="/images/sectors/images3.png" 
// // // // //             className="w-full absolute top-0 left-0" 
// // // // //             alt=""
// // // // //             style={{ 
// // // // //               zIndex: currentImageIndex === 2 ? 1 : 0,
// // // // //               filter: currentImageIndex === 2 ? 'brightness(1)' : 'brightness(0.75)'
// // // // //             }}
// // // // //           />
// // // // //         </div>

// // // // //         <div className="w-[65%]">
// // // // //           {sections.map((section, index) => (
// // // // //             <div key={index} className="border-t w-full flex gap-[3vw] items-start py-[2vw]">
// // // // //               <div>
// // // // //                 <div 
// // // // //                   onClick={() => handleClick(index)}
// // // // //                   className="border-[#c8c8c8] border rounded-full w-[4vw] h-[4vw] flex justify-center items-center relative cursor-pointer"
// // // // //                 >
// // // // //                   <div className="w-[25px] h-[2px] bg-gray-500"></div>
// // // // //                   <div 
// // // // //                     ref={el => verticalLineRefs.current[index] = el}
// // // // //                     className="w-[2px] h-[25px] bg-gray-500 absolute"
// // // // //                   ></div>
// // // // //                 </div>
// // // // //               </div>
              
// // // // //               <div className="flex flex-col gap-[1vw]">
// // // // //                 <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // // //                   {section.title}
// // // // //                 </div>
                
// // // // //                 <div 
// // // // //                   ref={el => contentRefs.current[index] = el}
// // // // //                   style={{ height: 0, overflow: 'hidden' }}
// // // // //                   className="content-wrapper"
// // // // //                 >
// // // // //                   <div className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-[#02123b] z-[2] w-[70%]`}>
// // // // //                     {section.content}
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ExpandableSectionsWithImages;
// // // // import React, { useState, useRef } from 'react';
// // // // import { useGSAP } from '@gsap/react';
// // // // import gsap from 'gsap';

// // // // const ExpandableSectionsWithImages = ({ Clash }) => {
// // // //   const [expandedIndex, setExpandedIndex] = useState(null);
// // // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
// // // //   const verticalLineRefs = useRef([null, null, null]);
// // // //   const contentRefs = useRef([null, null, null]);
// // // //   const imagesContainerRef = useRef(null);

// // // //   const sections = [
// // // //     {
// // // //       title: "End-to-End Solutions",
// // // //       content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients."
// // // //     },
// // // //     {
// // // //       title: "Global Standards",
// // // //       content: "We follow the highest industry standards, ensuring consistency and quality across all shipments."
// // // //     },
// // // //     {
// // // //       title: "Expert Consultation",
// // // //       content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency."
// // // //     }
// // // //   ];

// // // //   useGSAP(() => {
// // // //     verticalLineRefs.current.forEach((ref, index) => {
// // // //       if (ref) {
// // // //         if (expandedIndex === index) {
// // // //           gsap.to(ref, {
// // // //             scaleY: 0,
// // // //             duration: 0.3,
// // // //             ease: 'power2.inOut'
// // // //           });
          
// // // //           gsap.fromTo(contentRefs.current[index],
// // // //             {
// // // //               height: 0,
// // // //               opacity: 0,
// // // //             },
// // // //             {
// // // //               height: 'auto',
// // // //               opacity: 1,
// // // //               duration: 0.5,
// // // //               ease: 'power2.out'
// // // //             }
// // // //           );
// // // //         } else {
// // // //           gsap.to(ref, {
// // // //             scaleY: 1,
// // // //             duration: 0.3,
// // // //             ease: 'power2.inOut'
// // // //           });
          
// // // //           gsap.to(contentRefs.current[index], {
// // // //             height: 0,
// // // //             opacity: 0,
// // // //             duration: 0.5,
// // // //             ease: 'power2.out'
// // // //           });
// // // //         }
// // // //       }
// // // //     });
// // // //   }, [expandedIndex]);

// // // //   const handleClick = (index) => {
// // // //     if (expandedIndex !== index) {
// // // //       const images = imagesContainerRef.current.children;
// // // //       const nextImageIndex = (currentImageIndex + 1) % images.length;
      
// // // //       // Reset current image for next animation
// // // //       gsap.set(images[currentImageIndex], {
// // // //         xPercent: 0
// // // //       });

// // // //       // Reset next image position
// // // //       gsap.set(images[nextImageIndex], {
// // // //         xPercent: 100,
// // // //         display: 'block'
// // // //       });

// // // //       // Animate next image sliding in
// // // //       gsap.to(images[nextImageIndex], {
// // // //         xPercent: 0,
// // // //         duration: 0.5,
// // // //         ease: 'power2.inOut'
// // // //       });

// // // //       setCurrentImageIndex(nextImageIndex);
// // // //     }
// // // //     setExpandedIndex(expandedIndex === index ? null : index);
// // // //   };

// // // //   return (
// // // //     <div className="md:p-[2vw] lg:p-[4vw] p-4">
// // // //       <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}>
// // // //         Redefining Packaging Excellence
// // // //       </div>
// // // //       <div className="flex justify-between w-full bg-bl items-start pt-[4vw]">
// // // //         <div className="w-[30%] relative overflow-x-hidden" ref={imagesContainerRef}>
// // // //           {/* Container height reference */}
// // // //           <div className="w-full" style={{ paddingBottom: '100%' }}></div>
// // // //           <img 
// // // //             src="/images/sectors/images.png" 
// // // //             className="w-full absolute top-0 left-0" 
// // // //             alt=""
// // // //             style={{ 
// // // //               zIndex: currentImageIndex === 0 ? 1 : 0,
// // // //               filter: currentImageIndex === 0 ? 'brightness(1)' : 'brightness(0.75)'
// // // //             }}
// // // //           />
// // // //           <img 
// // // //             src="/images/sectors/images2.png" 
// // // //             className="w-full absolute top-0 left-0" 
// // // //             alt=""
// // // //             style={{ 
// // // //               zIndex: currentImageIndex === 1 ? 1 : 0,
// // // //               filter: currentImageIndex === 1 ? 'brightness(1)' : 'brightness(0.75)'
// // // //             }}
// // // //           />
// // // //           <img 
// // // //             src="/images/sectors/images3.png" 
// // // //             className="w-full absolute top-0 left-0" 
// // // //             alt=""
// // // //             style={{ 
// // // //               zIndex: currentImageIndex === 2 ? 1 : 0,
// // // //               filter: currentImageIndex === 2 ? 'brightness(1)' : 'brightness(0.75)'
// // // //             }}
// // // //           />
// // // //         </div>

// // // //         <div className="w-[65%]">
// // // //           {sections.map((section, index) => (
// // // //             <div key={index} className="border-t w-full flex gap-[3vw] items-start py-[2vw]">
// // // //               <div>
// // // //                 <div 
// // // //                   onClick={() => handleClick(index)}
// // // //                   className="border-[#c8c8c8] border rounded-full w-[4vw] h-[4vw] flex justify-center items-center relative cursor-pointer"
// // // //                 >
// // // //                   <div className="w-[25px] h-[2px] bg-gray-500"></div>
// // // //                   <div 
// // // //                     ref={el => verticalLineRefs.current[index] = el}
// // // //                     className="w-[2px] h-[25px] bg-gray-500 absolute"
// // // //                   ></div>
// // // //                 </div>
// // // //               </div>
              
// // // //               <div className="flex flex-col gap-[1vw]">
// // // //                 <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // // //                   {section.title}
// // // //                 </div>
                
// // // //                 <div 
// // // //                   ref={el => contentRefs.current[index] = el}
// // // //                   style={{ height: 0, overflow: 'hidden' }}
// // // //                   className="content-wrapper"
// // // //                 >
// // // //                   <div className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-[#02123b] z-[2] w-[70%]`}>
// // // //                     {section.content}
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ExpandableSectionsWithImages;
// // // import React, { useState, useRef } from 'react';
// // // import { useGSAP } from '@gsap/react';
// // // import gsap from 'gsap';

// // // const ExpandableSectionsWithImages = ({ Clash }) => {
// // //   const [expandedIndex, setExpandedIndex] = useState(null);
// // //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
// // //   const verticalLineRefs = useRef([null, null, null]);
// // //   const contentRefs = useRef([null, null, null]);
// // //   const imagesContainerRef = useRef(null);

// // //   const sections = [
// // //     {
// // //       title: "End-to-End Solutions",
// // //       content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients."
// // //     },
// // //     {
// // //       title: "Global Standards",
// // //       content: "We follow the highest industry standards, ensuring consistency and quality across all shipments."
// // //     },
// // //     {
// // //       title: "Expert Consultation",
// // //       content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency."
// // //     }
// // //   ];

// // //   useGSAP(() => {
// // //     verticalLineRefs.current.forEach((ref, index) => {
// // //       if (ref) {
// // //         if (expandedIndex === index) {
// // //           gsap.to(ref, {
// // //             scaleY: 0,
// // //             duration: 0.3,
// // //             ease: 'power2.inOut'
// // //           });
          
// // //           gsap.fromTo(contentRefs.current[index],
// // //             {
// // //               height: 0,
// // //               opacity: 0,
// // //             },
// // //             {
// // //               height: 'auto',
// // //               opacity: 1,
// // //               duration: 0.5,
// // //               ease: 'power2.out'
// // //             }
// // //           );
// // //         } else {
// // //           gsap.to(ref, {
// // //             scaleY: 1,
// // //             duration: 0.3,
// // //             ease: 'power2.inOut'
// // //           });
          
// // //           gsap.to(contentRefs.current[index], {
// // //             height: 0,
// // //             opacity: 0,
// // //             duration: 0.5,
// // //             ease: 'power2.out'
// // //           });
// // //         }
// // //       }
// // //     });
// // //   }, [expandedIndex]);

// // //   const handleClick = (index) => {
// // //     if (expandedIndex !== index) {
// // //       const images = imagesContainerRef.current.children;
// // //       const nextImageIndex = (currentImageIndex + 1) % images.length;
      
// // //       gsap.fromTo(images[nextImageIndex],
// // //         { x: '100%' },
// // //         { 
// // //           x: '0%',
// // //           duration: 0.5,
// // //           ease: 'power2.inOut'
// // //         }
// // //       );

// // //       setCurrentImageIndex(nextImageIndex);
// // //     }
// // //     setExpandedIndex(expandedIndex === index ? null : index);
// // //   };

// // //   return (
// // //     <div className="md:p-[2vw] lg:p-[4vw] p-4">
// // //       <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}>
// // //         Redefining Packaging Excellence
// // //       </div>
// // //       <div className="flex justify-between w-full bg-bl items-start pt-[4vw]">
// // //         <div className="w-[30%] overflow-x-hidden" ref={imagesContainerRef}>
// // //           <img src="/images/sectors/images.png" className="w-full" alt="" />
// // //           <img src="/images/sectors/images2.png" className="w-full" alt="" />
// // //           <img src="/images/sectors/images3.png" className="w-full" alt="" />
// // //         </div>

// // //         <div className="w-[65%]">
// // //           {sections.map((section, index) => (
// // //             <div key={index} className="border-t w-full flex gap-[3vw] items-start py-[2vw]">
// // //               <div>
// // //                 <div 
// // //                   onClick={() => handleClick(index)}
// // //                   className="border-[#c8c8c8] border rounded-full w-[4vw] h-[4vw] flex justify-center items-center relative cursor-pointer"
// // //                 >
// // //                   <div className="w-[25px] h-[2px] bg-gray-500"></div>
// // //                   <div 
// // //                     ref={el => verticalLineRefs.current[index] = el}
// // //                     className="w-[2px] h-[25px] bg-gray-500 absolute"
// // //                   ></div>
// // //                 </div>
// // //               </div>
              
// // //               <div className="flex flex-col gap-[1vw]">
// // //                 <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// // //                   {section.title}
// // //                 </div>
                
// // //                 <div 
// // //                   ref={el => contentRefs.current[index] = el}
// // //                   style={{ height: 0, overflow: 'hidden' }}
// // //                   className="content-wrapper"
// // //                 >
// // //                   <div className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-[#02123b] z-[2] w-[70%]`}>
// // //                     {section.content}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ExpandableSectionsWithImages;
// // import React, { useState, useRef } from 'react';
// // import { useGSAP } from '@gsap/react';
// // import gsap from 'gsap';

// // const ExpandableSectionsWithImages = ({ Clash }) => {
// //   const [expandedIndex, setExpandedIndex] = useState(null);
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
// //   const verticalLineRefs = useRef([null, null, null]);
// //   const contentRefs = useRef([null, null, null]);
// //   const imagesContainerRef = useRef(null);

// //   const sections = [
// //     {
// //       title: "End-to-End Solutions",
// //       content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients."
// //     },
// //     {
// //       title: "Global Standards",
// //       content: "We follow the highest industry standards, ensuring consistency and quality across all shipments."
// //     },
// //     {
// //       title: "Expert Consultation",
// //       content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency."
// //     }
// //   ];

// //   useGSAP(() => {
// //     verticalLineRefs.current.forEach((ref, index) => {
// //       if (ref) {
// //         if (expandedIndex === index) {
// //           gsap.to(ref, {
// //             scaleY: 0,
// //             duration: 0.3,
// //             ease: 'power2.inOut'
// //           });
          
// //           gsap.fromTo(contentRefs.current[index],
// //             {
// //               height: 0,
// //               opacity: 0,
// //             },
// //             {
// //               height: 'auto',
// //               opacity: 1,
// //               duration: 0.5,
// //               ease: 'power2.out'
// //             }
// //           );
// //         } else {
// //           gsap.to(ref, {
// //             scaleY: 1,
// //             duration: 0.3,
// //             ease: 'power2.inOut'
// //           });
          
// //           gsap.to(contentRefs.current[index], {
// //             height: 0,
// //             opacity: 0,
// //             duration: 0.5,
// //             ease: 'power2.out'
// //           });
// //         }
// //       }
// //     });
// //   }, [expandedIndex]);

// //   const handleClick = (index) => {
// //     if (expandedIndex !== index) {
// //       const images = imagesContainerRef.current.children;
// //       const nextImageIndex = (currentImageIndex + 1) % images.length;
      
// //       // Prepare next image
// //       gsap.set(images[nextImageIndex], {
// //         x: '100%',
// //         display: 'block'
// //       });

// //       // Slide in the next image
// //       gsap.to(images[nextImageIndex], {
// //         x: '0%',
// //         duration: 0.5,
// //         ease: 'power2.inOut'
// //       });

// //       setCurrentImageIndex(nextImageIndex);
// //     }
// //     setExpandedIndex(expandedIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="md:p-[2vw] lg:p-[4vw] p-4">
// //       <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}>
// //         Redefining Packaging Excellence
// //       </div>
// //       <div className="flex justify-between w-full bg-bl items-start pt-[4vw]">
// //         <div className="w-[30%] relative overflow-x-hidden" ref={imagesContainerRef}>
// //           {/* Spacer div to maintain container height */}
// //           <div className="w-full" style={{ paddingBottom: '100%' }}></div>
// //           <img 
// //             src="/images/sectors/images.png" 
// //             className="w-full absolute top-0 left-0" 
// //             alt="" 
// //           />
// //           <img 
// //             src="/images/sectors/images2.png" 
// //             className="w-full absolute top-0 left-0" 
// //             alt="" 
// //           />
// //           <img 
// //             src="/images/sectors/images3.png" 
// //             className="w-full absolute top-0 left-0" 
// //             alt="" 
// //           />
// //         </div>

// //         <div className="w-[65%]">
// //           {sections.map((section, index) => (
// //             <div key={index} className="border-t w-full flex gap-[3vw] items-start py-[2vw]">
// //               <div>
// //                 <div 
// //                   onClick={() => handleClick(index)}
// //                   className="border-[#c8c8c8] border rounded-full w-[4vw] h-[4vw] flex justify-center items-center relative cursor-pointer"
// //                 >
// //                   <div className="w-[25px] h-[2px] bg-gray-500"></div>
// //                   <div 
// //                     ref={el => verticalLineRefs.current[index] = el}
// //                     className="w-[2px] h-[25px] bg-gray-500 absolute"
// //                   ></div>
// //                 </div>
// //               </div>
              
// //               <div className="flex flex-col gap-[1vw]">
// //                 <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
// //                   {section.title}
// //                 </div>
                
// //                 <div 
// //                   ref={el => contentRefs.current[index] = el}
// //                   style={{ height: 0, overflow: 'hidden' }}
// //                   className="content-wrapper"
// //                 >
// //                   <div className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-[#02123b] z-[2] w-[70%]`}>
// //                     {section.content}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExpandableSectionsWithImages;
// import React, { useState, useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// const ExpandableSectionsWithImages = ({ Clash }) => {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [zIndex, setZIndex] = useState(1);
  
//   const verticalLineRefs = useRef([null, null, null]);
//   const contentRefs = useRef([null, null, null]);
//   const imagesContainerRef = useRef(null);

//   const sections = [
//     {
//       title: "End-to-End Solutions",
//       content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients."
//     },
//     {
//       title: "Global Standards",
//       content: "We follow the highest industry standards, ensuring consistency and quality across all shipments."
//     },
//     {
//       title: "Expert Consultation",
//       content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency."
//     }
//   ];

//   useGSAP(() => {
//     verticalLineRefs.current.forEach((ref, index) => {
//       if (ref) {
//         if (expandedIndex === index) {
//           gsap.to(ref, {
//             scaleY: 0,
//             duration: 0.3,
//             ease: 'power2.inOut'
//           });
          
//           gsap.fromTo(contentRefs.current[index],
//             {
//               height: 0,
//               opacity: 0,
//             },
//             {
//               height: 'auto',
//               opacity: 1,
//               duration: 0.5,
//               ease: 'power2.out'
//             }
//           );
//         } else {
//           gsap.to(ref, {
//             scaleY: 1,
//             duration: 0.3,
//             ease: 'power2.inOut'
//           });
          
//           gsap.to(contentRefs.current[index], {
//             height: 0,
//             opacity: 0,
//             duration: 0.5,
//             ease: 'power2.out'
//           });
//         }
//       }
//     });
//   }, [expandedIndex]);

//   const handleClick = (index) => {
//     if (expandedIndex !== index) {
//       const images = imagesContainerRef.current.children;
//       const nextImageIndex = (currentImageIndex + 1) % images.length;
      
//       // Set new z-index for next image
//       const newZIndex = zIndex + 1;
      
//       // Set initial position and z-index for next image
//       gsap.set(images[nextImageIndex], {
//         x: '100%',
//         zIndex: newZIndex
//       });

//       // Slide in the next image
//       gsap.to(images[nextImageIndex], {
//         x: '0%',
//         duration: 0.5,
//         ease: 'power2.inOut'
//       });

//       setZIndex(newZIndex);
//       setCurrentImageIndex(nextImageIndex);
//     }
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className="md:p-[2vw] lg:p-[4vw] p-4">
//       <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}>
//         Redefining Packaging Excellence
//       </div>
//       <div className="flex justify-between w-full bg-bl items-start pt-[4vw]">
//         <div className="w-[30%] h-[40vw] relative overflow-x-hidden" ref={imagesContainerRef}>
//           {/* Spacer div to maintain container height */}
//           <div className="w-full" style={{ paddingBottom: '100%' }}></div>
//           <img 
//             src="/images/sectors/images.png" 
//             className="w-full absolute top-0 left-0" 
//             alt=""
//             style={{ zIndex: 1 }}
//           />
//           <img 
//             src="/images/sectors/images2.png" 
//             className="w-full absolute top-0 left-0" 
//             alt=""
//             style={{ zIndex: 1 }}
//           />
//           <img 
//             src="/images/sectors/images3.png" 
//             className="w-full absolute top-0 left-0" 
//             alt=""
//             style={{ zIndex: 1 }}
//           />
//         </div>

//         <div className="w-[65%]">
//           {sections.map((section, index) => (
//             <div key={index} className="border-t w-full flex gap-[3vw] items-start py-[2vw]">
//               <div>
//                 <div 
//                   onClick={() => handleClick(index)}
//                   className="border-[#c8c8c8] border rounded-full w-[4vw] h-[4vw] flex justify-center items-center relative cursor-pointer"
//                 >
//                   <div className="xl:w-[25px] xl:h-[2px] lg:w-[20px] lg:h-[1.5px] w-[15px] h-[1px] bg-gray-500"></div>
//                   <div 
//                     ref={el => verticalLineRefs.current[index] = el}
//                     className="xl:w-[2px] xl:h-[25px] lg:w-[1px] lg:h-[20px] w-[1px] h-[15px] bg-gray-500 absolute"
//                   ></div>
//                 </div>
//               </div>
              
//               <div className="flex flex-col gap-[1vw]">
//                 <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
//                   {section.title}
//                 </div>
                
//                 <div 
//                   ref={el => contentRefs.current[index] = el}
//                   style={{ height: 0, overflow: 'hidden' }}
//                   className="content-wrapper"
//                 >
//                   <div className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-[#02123b] z-[2] w-[70%]`}>
//                     {section.content}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpandableSectionsWithImages;
import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ExpandableSectionsWithImages = ({ Clash }) => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Start with first section open
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zIndex, setZIndex] = useState(1);
  
  const verticalLineRefs = useRef([null, null, null]);
  const contentRefs = useRef([null, null, null]);
  const imagesContainerRef = useRef(null);

  const sections = [
    {
      title: "End-to-End Solutions",
      content: "Our packaging services are seamlessly integrated with our logistics operations, providing a one-stop solution for clients.",
      image: "/images/sectors/images.png"
    },
    {
      title: "Global Standards",
      content: "We follow the highest industry standards, ensuring consistency and quality across all shipments.",
      image: "/images/sectors/images2.png"
    },
    {
      title: "Expert Consultation",
      content: "Our team of packaging experts offers tailored advice, helping clients optimize their packaging strategies to minimize costs and maximize efficiency.",
      image: "/images/sectors/images3.png"
    }
  ];

  // Initially open the first section
  useEffect(() => {
    if (contentRefs.current[0]) {
      gsap.to(contentRefs.current[0], {
        height: 'auto',
        opacity: 1,
        duration: 0
      });
      gsap.to(verticalLineRefs.current[0], {
        scaleY: 0,
        duration: 0
      });
    }
  }, []);

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
              duration: 1,
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
            duration: 1,
            ease: 'power2.out'
          });
        }
      }
    });
  }, [expandedIndex]);

  const handleClick = (index) => {
    if (expandedIndex !== index) {
      const images = imagesContainerRef.current.children;
      
      // Set new z-index for next image
      const newZIndex = zIndex + 1;
      
      // Set initial position and z-index for clicked section's image
      gsap.set(images[index], {
        x: '100%',
        zIndex: newZIndex
      });

      // Slide in the clicked section's image
      gsap.to(images[index], {
        x: '0%',
        duration: 1,
        ease: 'power1.inOut'
      });

      setZIndex(newZIndex);
      setCurrentImageIndex(index);
    }
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="md:p-[2vw] h-full lg:p-[4vw] p-4">
      <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw]`}>
        Redefining Packaging Excellence
      </div>
      <div className="flex justify-between w-full bg-bl items-start md:pt-[4vw] pt-[8vw] pb-[4vw] md:pb-0"> 
        <div className="w-[30%] h-[40vw] hidden md:block relative overflow-x-hidden" ref={imagesContainerRef}>
          {sections.map((section, index) => (
            <img 
              key={index}
              src={section.image}
              className="w-full absolute top-0 left-0" 
              alt=""
              style={{ 
                zIndex: index === currentImageIndex ? zIndex : 1,
                transform: index === 0 ? 'translateX(0)' : 'translateX(100%)'
              }}
            />
          ))}
        </div>

        <div className="md:w-[65%] w-full">
          {sections.map((section, index) => (
            <div key={index} className="border-t w-full flex gap-[3vw] items-start md:py-[2vw] py-[4vw]">
              <div>
                <div 
                  onClick={() => handleClick(index)}
                  className="border-[#c8c8c8] border rounded-full md:w-[4vw] w-[8vw] h-[8vw] md:h-[4vw] flex justify-center items-center relative cursor-pointer"
                >
                  <div className="xl:w-[25px] xl:h-[2px] lg:w-[20px] lg:h-[1.5px] w-[15px] h-[1px] bg-gray-500"></div>
                  <div 
                    ref={el => verticalLineRefs.current[index] = el}
                    className="xl:w-[2px] xl:h-[25px] lg:w-[1px] lg:h-[20px] w-[1px] h-[15px] bg-gray-500 absolute"
                  ></div>
                </div>
              </div>
              
              <div className="flex flex-col gap-[1vw]">
                <div className={`${Clash.className} text-[#02123b] text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>
                  {section.title}
                </div>
                
                <div 
                  ref={el => contentRefs.current[index] = el}
                  style={{ height: 0, overflow: 'hidden' }}
                  className="content-wrapper"
                >
                  <div className={`${Clash.className} text-[5vw] sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] text-[#02123b] z-[2] md:w-[70%]`}>
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandableSectionsWithImages;