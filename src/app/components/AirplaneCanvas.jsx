import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AirplaneCanvas = ({ 
  imagePath = '/images/services/airplane.webp',
  imageWidth = 300,
  canvasHeight = 400,
  topPosition = "10vw",
  animationDuration = 1.5
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvasHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Load image
    const image = new Image();
    imageRef.current = image;
    image.src = imagePath;
    
    image.onload = () => {
      const imageHeight = (image.height * imageWidth) / image.width;
      
      // Initial position (centered horizontally, above the canvas)
      let x = (canvas.width - imageWidth) / 2;
      let y = -imageHeight;
      
      // Create GSAP animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "+=200",
          markers: false,
          scrub: false,
          once: true,
          onEnter: () => {
            gsap.to({ y: y }, {
              y: (canvas.height - imageHeight) / 2,
              duration: animationDuration,
              ease: "power2.out",
              onUpdate: function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(image, x, this.targets()[0].y, imageWidth, imageHeight);
              },
              onComplete: function() {
                ctx.drawImage(image, x, (canvas.height - imageHeight) / 2, imageWidth, imageHeight);
              }
            });
          }
        }
      });

      animationRef.current = timeline;
    };

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [imagePath, imageWidth, canvasHeight, animationDuration]);

  return (
    <div ref={containerRef} className="w-full h-0 relative">
      <canvas 
        ref={canvasRef}
        className={`absolute left-0 top-[${topPosition}]`}
        style={{ 
          pointerEvents: 'none',
          zIndex: 10 
        }}
      />
    </div>
  );
};

export default AirplaneCanvas;