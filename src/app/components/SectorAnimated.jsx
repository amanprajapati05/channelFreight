import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTextSection = ({ 
  textLines = [], 
  font, 
  className = '',
  lineHeight = 'h-48',
  lineWidth = 'w-[1px]',
  lineColor = 'bg-gray-400',
  textSize = 'md:text-[4vw] text-[6vw]',
  spacing = 'my-[3vw]',
  showMarkers = false,
  textColor = 'text-[#02123b]'
}) => {
  const componentRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const textContainerRef = useRef(null);
  const textLinesRef = useRef([]);

  useEffect(() => {
    // Reset textLinesRef array to match the new number of lines
    textLinesRef.current = textLinesRef.current.slice(0, textLines.length);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: componentRef.current,
        start: "top center",
        end: "bottom center",
        markers: showMarkers,
      }
    });

    // Animate top line growing down
    timeline.fromTo(topLineRef.current,
      { scaleY: 0 },
      { 
        scaleY: 1, 
        duration: 1, 
        transformOrigin: "top"
      }
    );

    // Animate each text line individually
    textLinesRef.current.forEach((line, index) => {
      timeline.fromTo(line,
        { 
          y: 50,
          opacity: 0 
        },
        { 
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        },
        // Slight overlap between animations
        index === 0 ? ">" : "-=0.4"
      );
    });

    // Animate bottom line growing down
    timeline.fromTo(bottomLineRef.current,
      { scaleY: 0 },
      { 
        scaleY: 1, 
        duration: 1,
        transformOrigin: "top"
      },
      "-=0.2"
    );

    // Cleanup
    return () => {
      if (timeline) timeline.kill();
    };
  }, [textLines]); // Re-run effect when textLines changes

  return (
    <div ref={componentRef} className={`w-full flex h-full flex-col items-center my-[3vw] ${className}`}>
      <div 
        ref={topLineRef} 
        className={`${lineColor} ${lineWidth} ${lineHeight}`}
      />
      <div 
        ref={textContainerRef}
        className={`${font} text-center ${textColor} leading-tight ${textSize} ${spacing}`}
      >
        {textLines.map((line, index) => (
          <div
            key={index}
            ref={el => textLinesRef.current[index] = el}
            style={{ overflow: 'hidden' }}
          >
            {line}
          </div>
        ))}
      </div>
      <div 
        ref={bottomLineRef}
        className={`${lineColor} ${lineWidth} ${lineHeight}`}
      />
    </div>
  );
};

export default AnimatedTextSection;