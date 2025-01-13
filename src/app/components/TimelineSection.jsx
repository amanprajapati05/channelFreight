import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clash } from '../../../public/fonts/fonts';

gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const dotRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const content = contentRef.current;
    const section = sectionRef.current;
    const dot = dotRef.current;
    const items = timelineItemsRef.current;
    
    // Calculate the total scroll distance needed
    const totalScroll = (items.length - 3) * window.innerHeight;
    
    // Content animation
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

    // Dot movement animation
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

  return (
    <div ref={sectionRef} className="h-screen bg-[--blue3] md:px-[2vw] lg:px-[4vw] px-4">
      <div className="flex w-full h-full justify-between items-center">
        <div className="w-[30%] flex gap-[2vw] items-center">
          <div className="w-[1.8vw] h-[25vw] border-[#333f5e] flex justify-center border rounded-3xl relative">
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
  );
};

export default TimelineSection;