"use client"
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Clash, ClashM } from '../../../public/fonts/fonts'
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Footer from './Footer';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button  from './Button';
import CircularProgress from './CircularProgress';

import StatsSection from './Statsection';

gsap.registerPlugin(ScrollTrigger);
const Hero2 = () => {
    
    useEffect( () => {

        (
    
          async () => {
    
              const LocomotiveScroll = (await import('locomotive-scroll')).default
    
              const locomotiveScroll = new LocomotiveScroll();
    
          }
    
        )()
    
      }, [])

    const slider = useRef();
    const triggerRef = useRef();
    const triggerRef2 = useRef();
    const canvasRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);

    const card1Ref = useRef();
    const card2Ref = useRef();
    const card3Ref = useRef();
    const card4Ref = useRef();


    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
        
    //     const setCanvasSize = () => {
    //       canvas.width = window.innerWidth;
    //       canvas.height = window.innerHeight;
    //     };
    //     setCanvasSize();
    //     window.addEventListener('resize', setCanvasSize);
    
    //     const image = new Image();
    //     image.src = '/images/ship.png';
    //     shipImage.current = image;
    
    //     image.onload = () => {
    //       // Calculate initial position to start from right edge
    //       const initialX = canvas.width + (image.width / 2);
    //       // Calculate y position to vertically center the ship
    //       const y = (canvas.height - image.height) / 2;
    
    //       const tl = gsap.timeline({
    //         scrollTrigger: {
    //           trigger: containerRef2.current,
    //           start: 'top top',
    //           end: '2035vw center',
    //         //   markers: true,
    //           scrub: true,
    //           pin: true,
    //           onUpdate: (self) => {
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
                
    //             const progress = self.progress;
    //             // Calculate x position relative to canvas center
    //             const totalDistance = canvas.width + image.width * 2;
    //             const x = initialX - (progress * totalDistance);
                
    //             // Draw image centered vertically
    //             ctx.drawImage(image, x, y);
    
    //             // Calculate the center of the ship instead of its end
    //             const shipCenterX = x + (image.width / 2);
    //             const canvasCenterX = canvas.width / 2;
    //             const threshold = 50; // Reduced threshold for tighter transition
    
    //             // Check if ship's center is crossing canvas center
    //             if (Math.abs(shipCenterX - canvasCenterX) < threshold) {
    //               if (!hasPassedCenter.current) {
    //                 // Ship's center is passing center point
    //                 gsap.to(initialTextRef.current, { opacity: 0, duration: 0.3 });
    //                 gsap.to(finalTextRef.current, { opacity: 1, duration: 0.3 });
    //                 hasPassedCenter.current = true;
    //               }
    //             } else if (shipCenterX > canvasCenterX + threshold) {
    //               if (hasPassedCenter.current) {
    //                 // Ship's center has moved back past center
    //                 gsap.to(initialTextRef.current, { opacity: 1, duration: 0.3 });
    //                 gsap.to(finalTextRef.current, { opacity: 0, duration: 0.3 });
    //                 hasPassedCenter.current = false;
    //               }
    //             }
    //           },
    //           onLeaveBack: () => {
    //             // Reset text when scrolling back to top
    //             gsap.set(initialTextRef.current, { opacity: 1 });
    //             gsap.set(finalTextRef.current, { opacity: 0 });
    //             hasPassedCenter.current = false;
    //           }
    //         }
    //       });
    
    //       return () => {
    //         tl.kill();
    //         window.removeEventListener('resize', setCanvasSize);
    //       };
    //     };
    //   }, []);


    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
    //     let timeline;
        
    //     // Canvas resize handler
    //     const setCanvasSize = () => {
    //       canvas.width = window.innerWidth;
    //       canvas.height = window.innerHeight;
    //     };
        
    //     setCanvasSize();
    //     window.addEventListener('resize', setCanvasSize);
      
    //     // Image loading
    //     const image = new Image();
    //     image.src = '/images/ship.png';
    //     shipImage.current = image;
      
    //     const setupAnimation = () => {
    //       const initialX = canvas.width + (image.width / 2);
    //       const y = (canvas.height - image.height) / 2;
      
    //       timeline = gsap.timeline({
    //         scrollTrigger: {
    //           trigger: containerRef2.current,
    //           start: 'top top',
    //           end: '2035vw center',
    //           scrub: true,
    //           pin: true,
    //           onUpdate: (self) => {
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
                
    //             const progress = self.progress;
    //             const totalDistance = canvas.width + image.width * 2;
    //             const x = initialX - (progress * totalDistance);
                
    //             ctx.drawImage(image, x, y);
      
    //             const shipCenterX = x + (image.width / 2);
    //             const canvasCenterX = canvas.width / 2;
    //             const threshold = 50;
      
    //             if (Math.abs(shipCenterX - canvasCenterX) < threshold) {
    //               if (!hasPassedCenter.current) {
    //                 gsap.to(initialTextRef.current, { opacity: 0, duration: 0.3 });
    //                 gsap.to(finalTextRef.current, { opacity: 1, duration: 0.3 });
    //                 hasPassedCenter.current = true;
    //               }
    //             } else if (shipCenterX > canvasCenterX + threshold) {
    //               if (hasPassedCenter.current) {
    //                 gsap.to(initialTextRef.current, { opacity: 1, duration: 0.3 });
    //                 gsap.to(finalTextRef.current, { opacity: 0, duration: 0.3 });
    //                 hasPassedCenter.current = false;
    //               }
    //             }
    //           },
    //           onLeaveBack: () => {
    //             gsap.set(initialTextRef.current, { opacity: 1 });
    //             gsap.set(finalTextRef.current, { opacity: 0 });
    //             hasPassedCenter.current = false;
    //           }
    //         }
    //       });
    //     };
      
    //     // Set up load handler
    //     image.onload = setupAnimation;
      
    //     // Cleanup function
    //     return () => {
    //       // Clean up the timeline if it exists
    //       if (timeline) {
    //         timeline.kill();
    //       }
          
    //       // Remove resize listener
    //       window.removeEventListener('resize', setCanvasSize);
          
    //       // Clear the canvas
    //       if (canvas && ctx) {
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //       }
          
    //       // Clean up image resources
    //       if (shipImage.current) {
    //         shipImage.current.onload = null;
    //         shipImage.current = null;
    //       }
    //     };
    //   }, []);
  
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
        
    //     const setCanvasSize = () => {
    //       canvas.width = window.innerWidth;
    //       canvas.height = window.innerHeight;
    //     };
    //     setCanvasSize();
    //     window.addEventListener('resize', setCanvasSize);
    
    //     const image = new Image();
    //     image.src = '/images/ship.png';
    //     shipImage.current = image;
    
    //     image.onload = () => {
    //       const initialX = canvas.width + (image.width / 2);
    //       const y = (canvas.height - image.height) / 2;
    
    //       const tl = gsap.timeline({
    //         scrollTrigger: {
    //           trigger: containerRef2.current,
    //           start: 'top top',
    //           end: '2035vw center',
    //           scrub: true,
    //           pin: true,
    //           onUpdate: (self) => {
    //             // Clear the canvas
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
                
    //             const progress = self.progress;
    //             const totalDistance = canvas.width + image.width * 2;
    //             const x = initialX - (progress * totalDistance);
                
    //             // Draw white background rectangle specifically for the ship
    //             ctx.fillStyle = 'white';
    //             ctx.fillRect(x, y, image.width, image.height);
                
    //             // Draw the ship image on top
    //             ctx.drawImage(image, x, y);
    
    //             const shipCenterX = x + (image.width / 2);
    //             const canvasCenterX = canvas.width / 2;
    //             const threshold = 50;
    
    //             if (Math.abs(shipCenterX - canvasCenterX) < threshold) {
    //               if (!hasPassedCenter.current) {
    //                 gsap.to(initialTextRef.current, { opacity: 0, duration: 0.3 });
    //                 gsap.to(finalTextRef.current, { opacity: 1, duration: 0.3 });
    //                 hasPassedCenter.current = true;
    //               }
    //             } else if (shipCenterX > canvasCenterX + threshold) {
    //               if (hasPassedCenter.current) {
    //                 gsap.to(initialTextRef.current, { opacity: 1, duration: 0.3 });
    //                 gsap.to(finalTextRef.current, { opacity: 0, duration: 0.3 });
    //                 hasPassedCenter.current = false;
    //               }
    //             }
    //           },
    //           onLeaveBack: () => {
    //             gsap.set(initialTextRef.current, { opacity: 1 });
    //             gsap.set(finalTextRef.current, { opacity: 0 });
    //             hasPassedCenter.current = false;
    //           }
    //         }
    //       });
    
    //       return () => {
    //         tl.kill();
    //         window.removeEventListener('resize', setCanvasSize);
    //       };
    //     };
    // }, []);

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
    //     let timeline;
        
    //     const setCanvasSize = () => {
    //         if (canvas) {
    //             canvas.width = window.innerWidth;
    //             canvas.height = window.innerHeight;
    //         }
    //     };
        
    //     setCanvasSize();
    //     window.addEventListener('resize', setCanvasSize);
    
    //     const image = new Image();
    //     image.src = '/images/ship.png';
    //     shipImage.current = image;
    
    //     image.onload = () => {
    //         if (!canvas) return; // Guard clause in case component unmounted
    
    //         const initialX = canvas.width + (image.width / 2);
    //         const y = (canvas.height - image.height) / 2;
    
    //         // Kill any existing ScrollTrigger instances first
    //         ScrollTrigger.getAll().forEach(st => st.kill());
    
    //         timeline = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: containerRef2.current,
    //                 start: 'top top',
    //                 end: '2035vw center',
    //                 scrub: true,
    //                 pin: true,
    //                 onUpdate: (self) => {
    //                     if (!canvas || !ctx) return; // Guard against null canvas
    
    //                     // Clear the canvas
    //                     ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
    //                     const progress = self.progress;
    //                     const totalDistance = canvas.width + image.width * 2;
    //                     const x = initialX - (progress * totalDistance);
                        
    //                     // Draw white background rectangle for the ship
    //                     ctx.fillStyle = 'white';
    //                     ctx.fillRect(x, y, image.width, image.height);
                        
    //                     // Draw the ship image
    //                     ctx.drawImage(image, x, y);
    
    //                     const shipCenterX = x + (image.width / 2);
    //                     const canvasCenterX = canvas.width / 2;
    //                     const threshold = 50;
    
    //                     if (Math.abs(shipCenterX - canvasCenterX) < threshold) {
    //                         if (!hasPassedCenter.current) {
    //                             gsap.to(initialTextRef.current, { opacity: 0, duration: 0.3 });
    //                             gsap.to(finalTextRef.current, { opacity: 1, duration: 0.3 });
    //                             hasPassedCenter.current = true;
    //                         }
    //                     } else if (shipCenterX > canvasCenterX + threshold) {
    //                         if (hasPassedCenter.current) {
    //                             gsap.to(initialTextRef.current, { opacity: 1, duration: 0.3 });
    //                             gsap.to(finalTextRef.current, { opacity: 0, duration: 0.3 });
    //                             hasPassedCenter.current = false;
    //                         }
    //                     }
    //                 },
    //                 onLeaveBack: () => {
    //                     if (initialTextRef.current && finalTextRef.current) {
    //                         gsap.set(initialTextRef.current, { opacity: 1 });
    //                         gsap.set(finalTextRef.current, { opacity: 0 });
    //                         hasPassedCenter.current = false;
    //                     }
    //                 }
    //             }
    //         });
    //     };
    
    //     // Cleanup function
    //     return () => {
    //         window.removeEventListener('resize', setCanvasSize);
            
    //         // Kill the timeline if it exists
    //         if (timeline) {
    //             timeline.kill();
    //         }
    
    //         // Kill all ScrollTrigger instances
    //         ScrollTrigger.getAll().forEach(st => st.kill());
    
    //         // Kill any ongoing GSAP animations
    //         gsap.killTweensOf([initialTextRef.current, finalTextRef.current]);
    
    //         // Clear the canvas if it exists
    //         if (canvas && ctx) {
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         }
    //     };
    // }, []);

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
    //     let scrollTriggerInstance = null;
        
    //     const setCanvasSize = () => {
    //         if (canvas) {
    //             canvas.width = window.innerWidth;
    //             canvas.height = window.innerHeight;
    //         }
    //     };
        
    //     setCanvasSize();
    //     window.addEventListener('resize', setCanvasSize);
    
    //     const image = new Image();
    //     image.src = '/images/ship.png';
    //     shipImage.current = image;
    
    //     image.onload = () => {
    //         if (!canvas) return;
    
    //         const initialX = canvas.width + (image.width / 2);
    //         const y = (canvas.height - image.height) / 2;
    
    //         // Create ScrollTrigger instance
    //         scrollTriggerInstance = ScrollTrigger.create({
    //             trigger: containerRef2.current,
    //             start: 'top top',
    //             end: '2035vw center',
    //             scrub: true,
    //             pin: true,
    //             anticipatePin: 1,
    //             onUpdate: (self) => {
    //                 if (!canvas || !ctx) return;
    
    //                 ctx.clearRect(0, 0, canvas.width, canvas.height);
                    
    //                 const progress = self.progress;
    //                 const totalDistance = canvas.width + image.width * 2;
    //                 const x = initialX - (progress * totalDistance);
                    
    //                 ctx.fillStyle = 'white';
    //                 ctx.fillRect(x, y, image.width, image.height);
    //                 ctx.drawImage(image, x, y);
    
    //                 const shipCenterX = x + (image.width / 2);
    //                 const canvasCenterX = canvas.width / 2;
    //                 const threshold = 50;
    
    //                 if (Math.abs(shipCenterX - canvasCenterX) < threshold) {
    //                     if (!hasPassedCenter.current) {
    //                         gsap.to(initialTextRef.current, { opacity: 0, duration: 0.3 });
    //                         gsap.to(finalTextRef.current, { opacity: 1, duration: 0.3 });
    //                         hasPassedCenter.current = true;
    //                     }
    //                 } else if (shipCenterX > canvasCenterX + threshold) {
    //                     if (hasPassedCenter.current) {
    //                         gsap.to(initialTextRef.current, { opacity: 1, duration: 0.3 });
    //                         gsap.to(finalTextRef.current, { opacity: 0, duration: 0.3 });
    //                         hasPassedCenter.current = false;
    //                     }
    //                 }
    //             },
    //             onLeaveBack: () => {
    //                 if (initialTextRef.current && finalTextRef.current) {
    //                     gsap.set(initialTextRef.current, { opacity: 1 });
    //                     gsap.set(finalTextRef.current, { opacity: 0 });
    //                     hasPassedCenter.current = false;
    //                 }
    //             }
    //         });
    //     };
    
    //     // Important: Clean up in this specific order
    //     return () => {
    //         // First remove event listener
    //         window.removeEventListener('resize', setCanvasSize);
    
    //         // Kill any ongoing GSAP animations
    //         gsap.killTweensOf([initialTextRef.current, finalTextRef.current]);
    
    //         // Clear the canvas
    //         if (canvas && ctx) {
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         }
    
    //         // Finally, kill the ScrollTrigger instance
    //         if (scrollTriggerInstance) {
    //             scrollTriggerInstance.kill();
    //         }
    
    //         // Revert any pins after a small delay to ensure proper cleanup
    //         requestAnimationFrame(() => {
    //             ScrollTrigger.refresh();
    //         });
    //     };
    // }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const canvas = canvasRef.current;
        const container = containerRef2.current;
        const initialText = initialTextRef.current;
        const finalText = finalTextRef.current;
        
        if (!canvas || !container) return;
        
        const ctx = canvas.getContext('2d');
        let scrollTriggerInstance;
        
        // Canvas resize handler
        const setCanvasSize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };
        
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);
    
        // Load image
        const image = new Image();
        image.src = '/images/ship.png';
        
        const initAnimation = () => {
            if (!canvas || !ctx || !container) return;
    
            const initialX = canvas.width + (image.width / 2);
            const y = (canvas.height - image.height) / 2;
    
            // Kill any existing instances first
            if (scrollTriggerInstance) {
                scrollTriggerInstance.kill();
            }
    
            // Create new ScrollTrigger
            scrollTriggerInstance = ScrollTrigger.create({
                trigger: container,
                start: 'top top',
                end: '2035vw center',
                scrub: true,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    if (!canvas || !ctx) return;
    
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    
                    const progress = self.progress;
                    const totalDistance = canvas.width + image.width * 2;
                    const x = initialX - (progress * totalDistance);
                    
                    ctx.fillStyle = 'white';
                    ctx.fillRect(x, y, image.width, image.height);
                    ctx.drawImage(image, x, y);
    
                    const shipCenterX = x + (image.width / 2);
                    const canvasCenterX = canvas.width / 2;
                    const threshold = 50;
    
                    if (Math.abs(shipCenterX - canvasCenterX) < threshold) {
                        if (!hasPassedCenter.current) {
                            gsap.to(initialText, { opacity: 0, duration: 0.3 });
                            gsap.to(finalText, { opacity: 1, duration: 0.3 });
                            hasPassedCenter.current = true;
                        }
                    } else if (shipCenterX > canvasCenterX + threshold) {
                        if (hasPassedCenter.current) {
                            gsap.to(initialText, { opacity: 1, duration: 0.3 });
                            gsap.to(finalText, { opacity: 0, duration: 0.3 });
                            hasPassedCenter.current = false;
                        }
                    }
                },
                onLeaveBack: () => {
                    if (initialText && finalText) {
                        gsap.set(initialText, { opacity: 1 });
                        gsap.set(finalText, { opacity: 0 });
                        hasPassedCenter.current = false;
                    }
                }
            });
        };
    
        // Initialize once image is loaded
        image.onload = () => {
            shipImage.current = image;
            initAnimation();
        };
    
        // Cleanup function
        return () => {
            // First, kill GSAP animations
            gsap.killTweensOf([initialText, finalText]);
            
            // Remove event listener
            window.removeEventListener('resize', setCanvasSize);
    
            // Kill ScrollTrigger instance
            if (scrollTriggerInstance) {
                // Disable the pin before killing
                scrollTriggerInstance.disable();
                scrollTriggerInstance.kill(false); // false prevents clearing of vars
            }
    
            // Clear ScrollTrigger cache
            ScrollTrigger.clearMatchMedia();
            ScrollTrigger.getAll().forEach(st => st.kill());
    
            // Clear canvas
            if (canvas && ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
    
            // Final refresh after a short delay
            setTimeout(() => {
                ScrollTrigger.refresh(true);
            }, 100);
        };
    }, []);

    const handleMouseEnter = (expandingCardRef, shrinkingCardRef, isSmallCard) => {
        if (isSmallCard) {
            // Timeline for synchronized animations
            const tl = gsap.timeline();
            
            // Expand the small card
            tl.to(expandingCardRef.current, {
                width: '66%',
                duration: 0,
                ease: "power3.out"
            }, 0); // Start at 0
            
            // Shrink the large card
            tl.to(shrinkingCardRef.current, {
                width: '33%',
                duration: 0,
                ease: "power3.out"
            }, 0); // Start at 0 (simultaneous)
        }

        // Play video
        const video = expandingCardRef.current.querySelector('video');
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    };

    const handleMouseLeave = (cardRef, otherCardRef, isSmallCard) => {
        if (isSmallCard) {
            // Timeline for reset animations
            const tl = gsap.timeline();
            
            // Reset small card
            tl.to(cardRef.current, {
                width: '33%',
                duration: 0,
                ease: "power3.out"
            }, 0);
            
            // Reset large card
            tl.to(otherCardRef.current, {
                width: '66%',
                duration: 0,
                ease: "power3   .out"
            }, 0);
        }

        // Pause video
        const video = cardRef.current.querySelector('video');
        if (video) {
            video.pause();
        }
    };

    useGSAP(()=>{
        gsap.fromTo(slider.current,{
            translateX: 0,
          },
          {
            translateX: "-150%",
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top top",
              end: "1500 top",
              scrub: 0.6,
              pin: true,
           
              anticipatePin: 1, // This helps prevent jarring pin start
              fastScrollEnd: true, // Improves performance during fast scrolling
              preventOverlaps: true,
              invalidateOnRefresh: true,
              onEnter: () => {
                // Ensure smooth start of animation
                gsap.to(slider.current, {
                  opacity: 1,
                  duration: 0.3
                });
              },
            },
          }
          
        )
        return () => {
            // pin.kill();
          };
    })
   
    const circle1Ref = useRef(null);
    const circle2Ref = useRef(null);
    const circle3Ref = useRef(null);
    const dot1Ref = useRef(null);
    const dot2Ref = useRef(null);
    const dot3Ref = useRef(null);
    const containerRef = useRef(null);

    
    const shipImage = useRef(null);
    const containerRef2 = useRef(null);
    const initialTextRef = useRef(null);
    const finalTextRef = useRef(null);
    const hasPassedCenter = useRef(false);

    // useEffect(() => {
    //     // Set initial states starting from bottom
    //     [circle1Ref, circle2Ref, circle3Ref].forEach(ref => {
    //         gsap.set(ref.current, {
    //             strokeDasharray: '377, 377',
    //             strokeDashoffset: -377  // Negative value to start from bottom
    //         });
    //     });

    //     [dot1Ref, dot2Ref, dot3Ref].forEach(ref => {
    //         gsap.set(ref.current, {
    //             rotation: -90,  // Start from bottom
    //             transformOrigin: '50% 50%'
    //         });
    //     });

    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: containerRef.current,
    //             start: 'top center+=100',
    //             end: 'center center',
    //             scrub: 0.5
    //         }
    //     });

    //     [circle1Ref, circle2Ref, circle3Ref].forEach(ref => {
    //         tl.to(ref.current, {
    //             strokeDashoffset: 0,
    //             duration: 1,
    //             ease: 'none'
    //         }, 0);
    //     });

    //     [dot1Ref, dot2Ref, dot3Ref].forEach(ref => {
    //         tl.to(ref.current, {
    //             rotation: 270,  // End at bottom (complete circle)
    //             duration: 1,
    //             ease: 'none'
    //         }, 0);
    //     });

    //     return () => {
    //         ScrollTrigger.getAll().forEach(t => t.kill());
    //     };
    // }, []);
  return (
    <>
    <div className=''>
    <Navbar/>
    </div>
      <div className='  h-screen  '>
           
            <video   autoPlay 
          muted 
          loop 
          playsInline
          className=" absolute top-0 z-[-1] w-full h-full object-cover  ">
                <source src="/videos/Homepage-Hero.mp4" type="video/mp4"/>
            </video>
            <div  className='lg:pt-[9vw] md:pt-[20vw] flex h-[80%] md:h-auto'>
                <div  className='flex md:flex-row flex-col justify-center   text-white md:justify-between px-[4vw] md:px-[2vw] lg:px-[4vw]   '>
                    <div className={`${Clash.className} text-[14vw] sm:text-[9vw] leading-[1.2] xl:text-[6vw] md:text-[9vw] lg:text-[7.5vw] uppercase`}>Innovative,<br/> Pro Active <br/>
                    & Speed. </div>
                    <div className={`${Clash.className} leading-8  md:leading-normal text-[5vw] sm:text-[3.4vw] pt-[3.4vw] md:pt-0   xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] xl:w-[30%] md:w-[38%]  lg:w-[33%] text-start flex items-end`}>We create customised solutions to meet the changing demands of a dynamic industry and always stay a step ahead of contemporaries.</div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center text-center w-full absolute bottom-10 '>
                    <div className={`${Clash.className} text-white font-thin`}>Scroll Down</div>
            </div>
            </div>
            <div className=''>
            <div className=' flex md:flex-row flex-col gap-9 md:gap-0 justify-between bg-white md:items-center px-[4vw] md:px-[2vw] lg:px-[4vw] pt-[10vw] md:pt-[8vw] lg:pt-[6vw]'>
                <div className='gap-4 flex flex-col '>
                    <div className={`text-[#02123b] ${Clash.className} text-[8vw] sm:leading-[1.2] md:leading-none md:text-[5vw] lg:text-[4vw] `}>Reliable and Efficient Global Services</div>
                    <div className={`text-[#02123b] ${Clash.className} text-[5vw] hidden md:block sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] `}>From air and sea freight to warehousing and distribution , we provide a full suite of logistics solutions.
                        <br /> Our services are designed to ensure smooth operations and efficient delivery for all businesses.</div>
                        <div className={`text-[#02123b] ${Clash.className} text-[5vw] md:hidden sm:text-[3.4vw] xl:text-[1.3vw] md:text-[1.9vw] lg:text-[1.5vw] `}>From air and sea freight to warehousing and distribution , we provide a full suite of logistics solutions.
                       Our services are designed to ensure smooth operations and efficient delivery for all businesses.</div>
                </div>
                <Button bgColor='#02123b' tColor='#ffffff' text='View More' />
            </div>
        </div>
        <div className=''>
<div className='flex md:hidden overflow-x-auto gap-4 h-[90vw] md:grid-cols-3 grid-cols-1 md:h-[90vw] lg:h-[120vw] sm:h-[60vw] md:grid-rows-7 scrollbar-hide px-[4vw] md:px-[2vw] lg:px-[4vw] py-4'>
    <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-2 h-full w-[80vw] sm:w-[60vw] md:w-auto relative overflow-hidden'>
        <div className='bg-[#02123b] absolute inset-0 w-full h-full opacity-60 z-[1]'></div>
        <video 
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-[0]"
            src="/videos/airfreight.mp4"
            muted
            playsInline
            loop
        />
        <div className='flex flex-col justify-between h-full p-6 lg:p-8 relative z-[2]'>
            <div className='gap-4 flex flex-col'>
                <div className='rounded-full w-fit bg-[--blue2]'>
                    <ArrowUpRight color='#ADEDFF' className='h-12 w-12 md:w-7 md:h-7' />
                </div>
                <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                    AIR FREIGHT SERVICES
                </div>
            </div>
            <div className={`${Clash.className} text-white text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>
                Whether it's urgent cargo, temperature-sensitive shipments, or complex global deliveries, we ensure your goods reach their destination on time, every time.
            </div>
        </div>
    </div>

    <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-1 h-full w-[80vw] sm:w-[60vw] md:w-auto relative overflow-hidden'>
        <div className='bg-[#02123b] absolute inset-0 w-full h-full opacity-60 z-[1]'></div>
        <video 
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-[0]"
            src="/videos/seafreight.mp4"
            muted
            playsInline
            loop
        />
        <div className='flex flex-col justify-between h-full p-6 lg:p-8 relative z-[2]'>
            <div className='gap-4 flex flex-col'>
                <div className='rounded-full w-fit bg-[--blue2]'>
                    <ArrowUpRight color='#ADEDFF' className='h-12 w-12 md:w-7 md:h-7' />
                </div>
                <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                    SEA FREIGHT SERVICES
                </div>
            </div>
            <div className={`${Clash.className} text-white text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>
                We excel in sea freight solutions with a focus on innovation & efficiency. We leverage a global network of shipping conferences & direct line movements to ensure cost-effective & timely delivery.
            </div>
        </div>
    </div>

    <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-1 h-full w-[80vw] sm:w-[60vw] md:w-auto relative overflow-hidden'>
        <div className='bg-[#02123b] absolute inset-0 w-full h-full opacity-60 z-[1]'></div>
        <video 
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-[0]"
            src="/videos/supplychain.mp4"
            muted
            playsInline
            loop
        />
        <div className='flex flex-col justify-between h-full p-6 lg:p-8 relative z-[2]'>
            <div className='gap-4 flex flex-col'>
                <div className='rounded-full w-fit bg-[--blue2]'>
                    <ArrowUpRight color='#ADEDFF' className='h-12 w-12 md:w-10 md:h-10' />
                </div>
                <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                    SUPPLY CHAIN SOLUTIONS
                </div>
            </div>
            <div className={`text-white ${Clash.className} text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>
                Channel Freight Services offers tailored supply chain solutions, managing the end-to-end logistics process with precision and efficiency.
            </div>
        </div>
    </div>

    <div className='bg-black rounded-3xl flex-shrink-0 md:row-span-2 md:col-span-2 h-full w-[80vw] sm:w-[60vw] md:w-auto relative overflow-hidden'>
        <div className='bg-[#02123b] absolute inset-0 w-full h-full opacity-60 z-[1]'></div>
        <video 
            className="absolute inset-0 w-full h-full object-cover opacity-50 z-[0]"
            src="/videos/projectlogistics.mp4"
            muted
            playsInline
            loop
        />
        <div className='flex flex-col justify-between h-full p-6 lg:p-8 relative z-[2]'>
            <div className='gap-4 flex flex-col'>
                <div className='rounded-full w-fit bg-[--blue2]'>
                    <ArrowUpRight color='#ADEDFF' className='h-12 w-12 md:w-10 md:h-10' />
                </div>
                <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                    PROJECT LOGISTICS
                </div>
            </div>
            <div className={`text-white ${Clash.className} text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>
                We specialize in Project Cargo Handling, offering expert solutions for the transportation of oversized and heavy cargo across India and internationally
            </div>
        </div>
    </div>
</div>
        </div>
        <div className='bg-white h-full hidden md:block'>
                    <div className='px-[4vw] md:px-[2vw] lg:px-[4vw] pt-4 md:pb-20 pb-8'>
                        {/* First Row */}
                        <div className='flex gap-3 h-[30vw] mb-3'>
                            <div 
                                ref={card1Ref}
                                className=" rounded-3xl relative overflow-hidden "
                                style={{ width: '66%', transition: 'width 0.5s ease' }}
                                onMouseEnter={() => handleMouseEnter(card1Ref, card2Ref, false)}
                                onMouseLeave={() => handleMouseLeave(card1Ref, card2Ref, false)}
                            >   
                             <div className='bg-[#02123b] absolute inset-0 w-full h-full opacity-60 z-[1]'></div>
                             <video 
                    className="absolute inset-0 w-full h-full object-cover z-[0]"
                    src="/videos/airfreight.mp4"
                    muted
                    playsInline
                    loop
                />
                                {/* Card content */}
                                <div className='flex flex-col justify-between h-full p-6 lg:p-8 relative z-[2]'>
                                    <div className='gap-4 flex flex-col'>
                                        <div className='rounded-full w-fit bg-[--blue2] p-1'>
                                            <ArrowUpRight color='#ADEDFF' className='h-12 w-12 md:w-8 md:h-8' />
                                        </div>
                                        <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                                            AIR FREIGHT SERVICES
                                        </div>
                                    </div>
                                    <div className={`${Clash.className} text-white text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>
                                        Whether it's urgent cargo, temperature-sensitive shipments, or complex global deliveries, we ensure your goods reach their destination on time, every time.
                                    </div>
                                </div>
                            </div>
        
                            <div 
                                ref={card2Ref}
                                className="bg-black rounded-3xl relative overflow-hidden"
                                style={{ width: '33%', transition: 'width 0.5s ease' }}
                                onMouseEnter={() => handleMouseEnter(card2Ref, card1Ref, true)}
                                onMouseLeave={() => handleMouseLeave(card2Ref, card1Ref, true)}
                            >
                                <div className='bg-[#02123b] absolute inset-0 w-full h-full opacity-60 z-[1]'></div>
                                {/* Same content structure as card1 */}
                                <video 
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 z-[0]"
                                    src="/videos/seafreight.mp4"
                                    muted
                                    playsInline
                                    loop
                                />
                                {/* Card content */}
                                <div className='flex flex-col justify-between h-full p-6 lg:p-8 relative z-10'>
                                    <div className='gap-4 flex flex-col'>
                                    <div className='rounded-full w-fit bg-[--blue2] p-1'>
                                            <ArrowUpRight color='#ADEDFF' className='h-12 w-12 md:w-8 md:h-8' />
                                        </div>
                                        <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                                            AIR FREIGHT SERVICES
                                        </div>
                                    </div>
                                    <div className={`${Clash.className} text-white text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>
                                        Whether it's urgent cargo, temperature-sensitive shipments, or complex global deliveries, we ensure your goods reach their destination on time, every time.
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        {/* Second Row */}
                        <div className='flex gap-3 h-[30vw]'>
                            <div 
                                ref={card3Ref}
                                className="bg-black rounded-3xl relative overflow-hidden"
                                style={{ width: '33%', transition: 'width 0.5s ease' }}
                                onMouseEnter={() => handleMouseEnter(card3Ref, card4Ref, true)}
                                onMouseLeave={() => handleMouseLeave(card3Ref, card4Ref, true)}
                            >
                                <div className='bg-[#02123b] absolute inset-0 w-full h-full opacity-60 z-[1]'></div>
                                {/* Same content structure as other cards */}
                                <video 
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 z-[0]"
                                    src="/videos/supplychain.mp4"
                                    muted
                                    playsInline
                                    loop
                                />
                                {/* Card content */}
                                <div className='flex flex-col justify-between h-full p-6 lg:p-8 relative z-10'>
                                    <div className='gap-4 flex flex-col'>
                                    <div className='rounded-full w-fit bg-[--blue2] p-1'>
                                            <ArrowUpRight color='#ADEDFF' className='h-12 w-12 md:w-8 md:h-8' />
                                        </div>
                                        <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                                            AIR FREIGHT SERVICES
                                        </div>
                                    </div>
                                    <div className={`${Clash.className} text-white text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>
                                        Whether it's urgent cargo, temperature-sensitive shipments, or complex global deliveries, we ensure your goods reach their destination on time, every time.
                                    </div>
                                </div>
                            </div>
        
                            <div 
                                ref={card4Ref}
                                className="bg-black rounded-3xl relative overflow-hidden"
                                style={{ width: '66%', transition: 'width 0.5s ease' }}
                                onMouseEnter={() => handleMouseEnter(card4Ref, card3Ref, false)}
                                onMouseLeave={() => handleMouseLeave(card4Ref, card3Ref, false)}
                            >
                                <div className='bg-[#02123b] absolute inset-0 w-full h-full opacity-60 z-[1]'></div>
                                {/* Same content structure as other cards */}
                                <video 
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 z-[0]"
                                    src="/videos/projectlogistics.mp4"
                                    muted
                                    playsInline
                                    loop
                                />
                                {/* Card content */}
                                <div className='flex flex-col justify-between h-full p-6 lg:p-8 relative z-10'>
                                    <div className='gap-4 flex flex-col'>
                                    <div className='rounded-full w-fit bg-[--blue2] p-1'>
                                            <ArrowUpRight color='#ADEDFF' className='h-12 w-12 md:w-8 md:h-8' />
                                        </div>
                                        <div className={`text-white text-[5vw] md:text-[2.2vw] lg:text-[2vw] ${Clash.className}`}>
                                            AIR FREIGHT SERVICES
                                        </div>
                                    </div>
                                    <div className={`${Clash.className} text-white text-base md:text-[1.5vw] lg:text-[1.4vw] md:leading-[1.4] lg:pr-3`}>
                                        Whether it's urgent cargo, temperature-sensitive shipments, or complex global deliveries, we ensure your goods reach their destination on time, every time.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-screen relative'>
            <img src="/images/aboutbg.png" alt="" className=' z-[-1] w-full h-full hidden md:block absolute top-0' />
            <img src="/images/content.png" alt="" className=' z-[-1] w-full h-full md:hidden absolute top-0' />
            <div className='flex flex-col justify-center items-center h-full text-center text-white gap-4'>
                <div className={`${Clash.className} text-white text-5xl`}>About Us</div>
                <div className={`${Clash.className} text-white text-lg w-[80%] md:w-[50%] font-thin`}>Channel Freight Services (I) Pvt Ltd is a completely customer driven organisation. Our team, comprising a young set of professionals ensures that the milestones achieved are pegged on every project they handle. They rise to every occasion with pure dedication and impeccable speed. </div>
                <Button bgColor='#ffffff' tColor='#02123b' text='Read More' />
            </div>
        </div>
        <div>
                   
               <div className='-mt-1'>
               <StatsSection/>
               </div>
                
               
                <div className={`w-full md:h-[35vw] h-[70vw] bg-[#02123b]  relative ${Clash.className} -mt-1`}>
                    <div className=' whitespace-nowrap overflow-x-hidden overflow-y-hidden '>
                        <div className='container'>
                            <div className='md:text-[18vw] text-[40vw] text-white  inline-block'>
                            SECURE. STEADY. GLOBAL.
                            </div>
                            <div className='md:text-[18vw] text-[40vw] text-white  inline-block'>
                            SECURE. STEADY. GLOBAL.
                            </div>
                        </div>
                </div>
                <div className='absolute w-full  top-0'>
                <div className='whitespace-nowrap overflow-hidden flex gap-8 h-full'>
                    <div className='container2  '>
                        {/* First set of images */}
                        <div className='relative inline-flex whitespace-nowrap h-full md:py-[8.1vw] py-[20vw] '>
                            <div className='flex flex-nowrap md:gap-[5vw] gap-[15vw] items-center h-full'>
                                <img src="/images/img123.png" alt=""  className='md:w-[15vw] w-[30vw] h-[25vw] md:h-[10vw] relative md:-top-[8vw] -top-[16vw] ' />
                                <img src="/images/img124.png" alt="" className='md:w-[15vw] md:h-[10vw] w-[30vw] h-[25vw] relative md:-bottom-[8vw] -bottom-[16vw]' />
                                <img src="/images/img125.png" alt="" className='md:w-[15vw] md:h-[10vw] w-[30vw] h-[25vw] relative md:-top-[8vw] -top-[16vw]' />
                                <img src="/images/img126.png" alt="" className='md:w-[15vw] md:h-[10vw] w-[30vw] h-[25vw] relative md:-bottom-[8vw] -bottom-[16vw]' />
                                <img src="/images/img127.png" alt="" className='md:w-[15vw] md:h-[10vw] w-[30vw] h-[25vw] relative md:-top-[8vw] -top-[16vw]' />
                            </div>
                        </div>
                        {/* Second set of images */}
                        <div className='relative md:left-[3.5vw] left-[15vw] inline-flex whitespace-nowrap h-full bg-blac'>
                            <div className='flex flex-nowrap md:gap-[5vw] gap-[15vw] items-center h-full'>
                                <img src="/images/img123.png" alt="" className='md:w-[15vw] md:h-[10vw] w-[30vw] h-[25vw] relative md:-bottom-[8vw] -bottom-[16vw]' />
                                <img src="/images/img124.png" alt="" className='md:w-[15vw] md:h-[10vw] w-[30vw] h-[25vw] relative md:-top-[8vw] -top-[16vw]' />
                                <img src="/images/img125.png" alt="" className='md:w-[15vw] md:h-[10vw] w-[30vw] h-[25vw] relative md:-bottom-[8vw] -bottom-[16vw]' />
                                <img src="/images/img126.png" alt="" className='md:w-[15vw] md:h-[10vw] w-[30vw] h-[25vw] relative md:-top-[8vw] -top-[16vw]' />
                                <img src="/images/img127.png" alt="" className='md:w-[15vw] md:h-[10vw] w-[30vw] h-[25vw] relative md:-bottom-[8vw] -bottom-[16vw]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                </div>
                <div ref={triggerRef} className='bg-white hidden md:block md:h-[35vw] mb-[2vw] w-full overflow-hidden'>
            <div ref={slider} className='flex md:flex-row flex-col gap-[8vw] py-[7vw]'>
                <div className='md:w-[50%] ml-[4vw] flex flex-col gap-[2vw] flex-shrink-0'>
                    <div className={`${Clash.className} leading-[1.2] md:text-[4vw] text-[9vw] text-[#02123b]`}>
                        Innovative Solutions for Every Industry
                    </div>
                    <div className={`${Clash.className} text-[4vw] md:text-[1.4vw] text-[#02123b]`}>
                        With deep industry knowledge, we create logistics solutions that are efficient, compliant, and responsive to evolving market needs.
                    </div>
                    {/* <div className={`${ClashM.className} text-white px-4 py-2 rounded-3xl bg-[#02123b] w-fit text-sm`}>
                        View More &gt;
                    </div> */}
                    <Button bgColor='#02123b' tColor='#ffffff' text='View More' />
                </div>
            
                <div className='flex md:w-[150%] ml-[4vw] md:ml-0 gap-[1.7vw]'>
                    <div onMouseEnter={() => setHoveredCard(1)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/pharma.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 1 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard === 1 ? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>PHARMACEuticals</div>
                                <div className={`${hoveredCard === 1 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 1 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 1 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                                Pharmaceutical logistics is one of the most critical and regulated sectors, requiring precise handling of sensitive goods such as medicines, vaccines, APIs, and biological samples.
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={() => setHoveredCard(2)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/cold.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 2 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard === 2 ? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>Cold Chain <br /> Products</div>
                                <div className={`${hoveredCard === 2 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 2 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 2 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            Cold chain logistics is vital for industries such as healthcare, food, agriculture, and chemicals. It involves the seamless movement of perishable goods under strict temperature controls to preserve quality and safety. 
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={() => setHoveredCard(3)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/hazd.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 3 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard === 3 ? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>Hazardous <br /> chemicals</div>
                                <div className={`${hoveredCard === 3 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 3 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 3 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            Transporting hazardous cargo involves high-stakes logistics due to the inherent risks to people, property, and the environment.
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={() => setHoveredCard(4)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/eng.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 4 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard === 4 ? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>engineering</div>
                                <div className={`${hoveredCard === 4 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 4 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 4 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            We ensure safe handling and transportation while accommodating rapid advancements in bio-technology.
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={() => setHoveredCard(5)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/exhib.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 5 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard === 5 ? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>exhibition & <br /> relocation</div>
                                <div className={`${hoveredCard === 5 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 5 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 5 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            Exhibition cargo logistics involves the timely transport and setup of display materials for trade shows and events. Precision timing and damage-free delivery are critical to success.
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => setHoveredCard(6)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/pack.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 6 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard ===  6? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>packaging <br /> solutions</div>
                                <div className={`${hoveredCard === 6 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 6 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 6 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            We manage the end-to-end supply chain for clinical materials, ensuring timely and secure deliveries to research centers.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white md:hidden block md:h-[35vw] w-full overflow-hidden'>
            <div  className='flex md:flex-row flex-col gap-[8vw] py-[7vw]'>
                <div className='md:w-[50%] ml-[4vw] flex flex-col gap-[2vw] flex-shrink-0'>
                    <div className={`${Clash.className} leading-[1.2] md:text-[4vw] text-[9vw] text-[#02123b]`}>
                        Innovative Solutions for Every Industry
                    </div>
                    <div className={`${Clash.className} text-[4vw] md:text-[1.4vw] text-[#02123b]`}>
                        With deep industry knowledge, we create logistics solutions that are efficient, compliant, and responsive to evolving market needs.
                    </div>
                    {/* <div className={`${ClashM.className} text-white px-4 py-2 rounded-3xl bg-[#02123b] w-fit text-sm`}>
                        View More &gt;
                    </div> */}
                    <Button bgColor='#02123b' tColor='#ffffff' text='View More' />
                </div>
            
                {/* <div className='flex md:w-[150%] ml-[4vw] overflow-auto scrollbar-hide md:ml-0 gap-[1.7vw]'>
                    <div onMouseEnter={() => setHoveredCard(1)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/pharma.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 1 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard === 1 ? 'text-white' : 'text-[#02123b]'} text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>PHARMACEuticals</div>
                                <div className={`${hoveredCard === 1 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 1 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[4vw] md:text-[1.4vw] md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw] ${hoveredCard === 1 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                                Pharmaceutical logistics is one of the most critical and regulated sectors, requiring precise handling of sensitive goods such as medicines, vaccines, APIs, and biological samples.
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={() => setHoveredCard(2)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/cold.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 2 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard === 2 ? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>Cold Chain <br /> Products</div>
                                <div className={`${hoveredCard === 2 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 2 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 2 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            Cold chain logistics is vital for industries such as healthcare, food, agriculture, and chemicals. It involves the seamless movement of perishable goods under strict temperature controls to preserve quality and safety. 
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={() => setHoveredCard(3)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/hazd.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 3 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard === 3 ? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>Hazardous <br /> chemicals</div>
                                <div className={`${hoveredCard === 3 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 3 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 3 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            Transporting hazardous cargo involves high-stakes logistics due to the inherent risks to people, property, and the environment.
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={() => setHoveredCard(4)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/eng.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 4 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard === 4 ? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>engineering</div>
                                <div className={`${hoveredCard === 4 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 4 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 4 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            We ensure safe handling and transportation while accommodating rapid advancements in bio-technology.
                            </div>
                        </div>
                    </div>

                    <div onMouseEnter={() => setHoveredCard(5)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/exhib.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 5 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard === 5 ? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>exhibition & <br /> relocation</div>
                                <div className={`${hoveredCard === 5 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 5 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 5 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            Exhibition cargo logistics involves the timely transport and setup of display materials for trade shows and events. Precision timing and damage-free delivery are critical to success.
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => setHoveredCard(6)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/pack.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 6 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between my-[1.2vw] mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard ===  6? 'text-white' : 'text-[#02123b]'} text-[2vw] z-[2]`}>packaging <br /> solutions</div>
                                <div className={`${hoveredCard === 6 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 6 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[1.17vw] my-[1.2vw] mx-[1.6vw] ${hoveredCard === 6 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            We manage the end-to-end supply chain for clinical materials, ensuring timely and secure deliveries to research centers.
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='flex md:w-[150%] ml-[4vw] overflow-auto scrollbar-hide md:ml-0 gap-[1.7vw]'>
            <div onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                className='rounded-xl flex-shrink-0 w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                <img 
                    src="/images/pharma.png" 
                    alt="" 
                    className={`absolute inset-0 w-full h-full object-cover z-[-1] transition-opacity duration-300 ${hoveredCard === 1 ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex justify-between md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw]'>
                        <div className={`uppercase ${Clash.className} ${hoveredCard === 1 ? 'text-white' : 'text-[#02123b]'} text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>PHARMACEuticals</div>
                        <div className={`${hoveredCard === 1 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                            <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 1 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                        </div>
                    </div>
                    <div className={`${Clash.className} text-[4vw] md:text-[1.4vw] md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw] ${hoveredCard === 1 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                        Pharmaceutical logistics is one of the most critical and regulated sectors, requiring precise handling of sensitive goods such as medicines, vaccines, APIs, and biological samples.
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                className='rounded-xl flex-shrink-0 w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                <img 
                    src="/images/cold.png" 
                    alt="" 
                    className={`absolute inset-0 w-full h-full object-cover z-[-1] transition-opacity duration-300 ${hoveredCard === 2 ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex justify-between md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw]'>
                        <div className={`uppercase ${Clash.className} ${hoveredCard === 2 ? 'text-white' : 'text-[#02123b]'} text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>Cold Chain <br /> Products</div>
                        <div className={`${hoveredCard === 2 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                            <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 2 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                        </div>
                    </div>
                    <div className={`${Clash.className} text-[4vw] md:text-[1.4vw] md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw] ${hoveredCard === 2 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                        Cold chain logistics is vital for industries such as healthcare, food, agriculture, and chemicals. It involves the seamless movement of perishable goods under strict temperature controls to preserve quality and safety.
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
                className='rounded-xl flex-shrink-0 w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                <img 
                    src="/images/hazd.png" 
                    alt="" 
                    className={`absolute inset-0 w-full h-full object-cover z-[-1] transition-opacity duration-300 ${hoveredCard === 3 ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex justify-between md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw]'>
                        <div className={`uppercase ${Clash.className} ${hoveredCard === 3 ? 'text-white' : 'text-[#02123b]'} text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>Hazardous <br /> chemicals</div>
                        <div className={`${hoveredCard === 3 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                            <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 3 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                        </div>
                    </div>
                    <div className={`${Clash.className} text-[4vw] md:text-[1.4vw] md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw] ${hoveredCard === 3 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                        Transporting hazardous cargo involves high-stakes logistics due to the inherent risks to people, property, and the environment.
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHoveredCard(4)}
                onMouseLeave={() => setHoveredCard(null)}
                className='rounded-xl flex-shrink-0 w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                <img 
                    src="/images/eng.png" 
                    alt="" 
                    className={`absolute inset-0 w-full h-full object-cover z-[-1] transition-opacity duration-300 ${hoveredCard === 4 ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex justify-between md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw]'>
                        <div className={`uppercase ${Clash.className} ${hoveredCard === 4 ? 'text-white' : 'text-[#02123b]'} text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>engineering</div>
                        <div className={`${hoveredCard === 4 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                            <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 4 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                        </div>
                    </div>
                    <div className={`${Clash.className} text-[4vw] md:text-[1.4vw] md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw] ${hoveredCard === 4 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                        We ensure safe handling and transportation while accommodating rapid advancements in bio-technology.
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setHoveredCard(5)}
                onMouseLeave={() => setHoveredCard(null)}
                className='rounded-xl flex-shrink-0 w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                <img 
                    src="/images/exhib.png" 
                    alt="" 
                    className={`absolute inset-0 w-full h-full object-cover z-[-1] transition-opacity duration-300 ${hoveredCard === 5 ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex justify-between md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw]'>
                        <div className={`uppercase ${Clash.className} ${hoveredCard === 5 ? 'text-white' : 'text-[#02123b]'} text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>exhibition & <br /> relocation</div>
                        <div className={`${hoveredCard === 5 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                            <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 5 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                        </div>
                    </div>
                    <div className={`${Clash.className} text-[4vw] md:text-[1.4vw] md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw] ${hoveredCard === 5 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                        Exhibition cargo logistics involves the timely transport and setup of display materials for trade shows and events. Precision timing and damage-free delivery are critical to success.
                    </div>
                </div>
            </div>
            <div onMouseEnter={() => setHoveredCard(6)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className='rounded-xl flex-shrink-0  w-[80vw] h-[80vw] md:w-[28vw] md:h-[28vw] sm:w-[60vw] sm:h-[60vw] relative border border-[#02123b]'>
                        <img 
                            src="/images/pack.png" 
                            alt="" 
                            className={`absolute inset-0 w-full h-full z-[-1] transition-opacity duration-300 ${hoveredCard === 6 ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw]'>
                                <div className={`uppercase ${Clash.className} ${hoveredCard ===  6? 'text-white' : 'text-[#02123b]'} text-[6vw] md:text-[2.2vw] lg:text-[2vw] z-[2]`}>packaging <br /> solutions</div>
                                <div className={`${hoveredCard === 6 ? 'bg-[#ADEDFF]' : 'bg-[#333f5e]'} w-fit h-fit rounded-full flex items-center justify-center`}>
                                    <ArrowUpRight className={`h-12 p-2 w-12 md:w-10 md:h-10 z-[222] ${hoveredCard === 6 ? 'text-[#333f5e]' : 'text-[#ADEDFF]'}`} />
                                </div>
                            </div>
                            <div className={`${Clash.className} text-[4vw] md:text-[1.4vw] md:my-[1.2vw] my-[2.4vw] mx-[3.2vw] md:mx-[1.6vw] ${hoveredCard === 6 ? 'text-white' : 'text-[#02123b]'} z-[2]`}>
                            We manage the end-to-end supply chain for clinical materials, ensuring timely and secure deliveries to research centers.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
                 <div ref={containerRef2} className={`h-screen mt-[4vw] w-full relative overflow-hidden text-[#02123b]`}>
                      <canvas 
                        ref={canvasRef} 
                        className="absolute inset-0 w-full h-full z-10 bg-white "
                      />
                      <div className="relative z-20 flex flex-col justify-center items-center h-full md:mt-5">
                        <div ref={initialTextRef} className="transition-opacity duration-300">
                          <div className={`${Clash.className} text-center md:text-[4vw] text-[7vw] px-2 md:px-0 text-[#02123b]`}>
                            Logistics is more than moving goods,
                          </div>
                          <div className={`${ClashM.className} text-center md:text-[5vw] text-[10vw] text-[#02123b]`}>
                            It's About Trust
                          </div>
                        </div>
                        <div 
                          ref={finalTextRef} 
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity w-full duration-300"
                        >
                          <div className={`${Clash.className} text-center md:text-[4vw] text-[7vw] text-[#02123b]`}>
                          Partner with us for
                          </div>
                          <div className={`${ClashM.className} text-center md:text-[5vw] text-[10vw] text-[#02123b]`}>
                          Seamless Freight Services
                          </div>
                        </div>
                      </div>
                
                     
                    </div>
                    <div className='w-full'>
        <video
        className=" inset-0 w-full h-full object-cover -mb-1 z-[0]"
        src="/videos/freight.mp4"
        muted
        playsInline
        autoPlay
        loop
        />
      </div>
        <Footer/>
    
    </>
  )
}

export default Hero2