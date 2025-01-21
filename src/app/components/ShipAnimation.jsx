import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Clash, ClashM } from '../../../public/fonts/fonts';

gsap.registerPlugin(ScrollTrigger);

const ShipAnimation = () => {
    const containerRef = useRef(null);
    const shipRef = useRef(null);
    const initialTextRef = useRef(null);
    const finalTextRef = useRef(null);
    const hasPassedCenter = useRef(false);

    useGSAP(() => {
        // Set initial ship position
        const setInitialPosition = () => {
            if (!shipRef.current) return;
            
            const windowWidth = window.innerWidth;
            const shipWidth = shipRef.current.offsetWidth;
            
            gsap.set(shipRef.current, {
                x: windowWidth + shipWidth / 2,
                y: 0,
                opacity: 1
            });
        };

        // Initialize the animation
        const initAnimation = () => {
            // Set initial text states
            if (initialTextRef.current && finalTextRef.current) {
                gsap.set(finalTextRef.current, { opacity: 0 });
                gsap.set(initialTextRef.current, { opacity: 1 });
            }

            // Create the scrollTrigger animation
            const scrollTrigger = ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top top',
                end: '+=200%',
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                fastScrollEnd: true,
                onUpdate: (self) => {
                    if (!shipRef.current) return;
                    
                    const progress = self.progress;
                    const windowWidth = window.innerWidth;
                    const shipWidth = shipRef.current.offsetWidth;
                    const totalDistance = windowWidth + shipWidth * 2;
                    const x = windowWidth + shipWidth / 2 - progress * totalDistance;
                    
                    // Update ship position
                    gsap.set(shipRef.current, { x });

                    // Handle text transitions
                    if (initialTextRef.current && finalTextRef.current) {
                        const shipCenterX = x + shipWidth / 2;
                        const windowCenterX = windowWidth / 2;
                        const threshold = 50;

                        if (Math.abs(shipCenterX - windowCenterX) < threshold) {
                            if (!hasPassedCenter.current) {
                                gsap.to(initialTextRef.current, { 
                                    opacity: 0, 
                                    duration: 0.3 
                                });
                                gsap.to(finalTextRef.current, { 
                                    opacity: 1, 
                                    duration: 0.3 
                                });
                                hasPassedCenter.current = true;
                            }
                        } else if (shipCenterX > windowCenterX + threshold) {
                            if (hasPassedCenter.current) {
                                gsap.to(initialTextRef.current, { 
                                    opacity: 1, 
                                    duration: 0.3 
                                });
                                gsap.to(finalTextRef.current, { 
                                    opacity: 0, 
                                    duration: 0.3 
                                });
                                hasPassedCenter.current = false;
                            }
                        }
                    }
                },
                onLeaveBack: () => {
                    if (initialTextRef.current && finalTextRef.current) {
                        gsap.set(initialTextRef.current, { opacity: 1 });
                        gsap.set(finalTextRef.current, { opacity: 0 });
                        hasPassedCenter.current = false;
                    }
                }
            });

            return scrollTrigger;
        };

        // Initialize with a small delay to ensure DOM is ready
        const initTimeout = setTimeout(() => {
            setInitialPosition();
            const scrollTrigger = initAnimation();

            // Setup resize handler
            const handleResize = () => {
                setInitialPosition();
                scrollTrigger.refresh();
            };

            window.addEventListener('resize', handleResize);

            // Return cleanup function
            return () => {
                clearTimeout(initTimeout);
                window.removeEventListener('resize', handleResize);
                scrollTrigger.kill();
            };
        }, 100);

        // Cleanup function
        return () => {
            clearTimeout(initTimeout);
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={`h-screen mt-[4vw] w-full relative overflow-hidden bg-white text-[#02123b]`}>
            <img
                ref={shipRef}
                src="/images/ship3.png"
                alt="Ship"
                className="absolute transform-gpu will-change-transform md:h-[200px] opacity-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-[9999999]"
                style={{  width: 'auto' }}
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
    );
};

export default ShipAnimation;