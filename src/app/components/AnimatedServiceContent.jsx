import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({ 
  Clash, 
  leftContent = [
    {
      title: "",
      description: ""
    }
  ],
  rightContent = [
    {
      title: "",
      description: ""
    }
  ]
}) => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const textElements = textRefs.current;

    // Initially hide all text with clip-path
    gsap.set(textElements, { 
      clipPath: "inset(0 0 100% 0)",
      opacity: 1
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        markers: false,
      },
      delay: 0.5
    });

    // Reveal each text element with clip-path animation
    textElements.forEach((element, index) => {
      timeline.to(element, {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.8,
        ease: "power1.inOut"
      }, index * 0.2);
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className='h-[50vw] md:p-[2vw] lg:p-[4vw] px-4 py-4'>
      <div className='flex w-full justify-between h-full'>
        <div className={`${Clash.className} flex justify-between text-[#02123b] py-[6vw]`}>
          {/* Left Column */}
          <div className='flex flex-col h-full justify-between w-[30%]'>
            {leftContent.map((content, index) => (
              <div key={`left-${index}`}>
                <div 
                  ref={el => textRefs.current[index * 2] = el} 
                  className='md:text-[2vw] text-[5vw] text-right'
                >
                  {content.title}
                </div>
                <div 
                  ref={el => textRefs.current[index * 2 + 1] = el} 
                  className='text-[4vw] md:text-[1.3vw] text-right'
                >
                  {content.description}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className='flex flex-col h-full justify-between w-[30%]'>
            {rightContent.map((content, index) => (
              <div key={`right-${index}`}>
                <div 
                  ref={el => textRefs.current[(leftContent.length * 2) + (index * 2)] = el} 
                  className='md:text-[2vw] text-[5vw] text-left'
                >
                  {content.title}
                </div>
                <div 
                  ref={el => textRefs.current[(leftContent.length * 2) + (index * 2 + 1)] = el} 
                  className='text-[4vw] md:text-[1.3vw] text-left'
                >
                  {content.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AnimatedContent;