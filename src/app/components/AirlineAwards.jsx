// import React, { useRef, useState } from 'react';
// import gsap from 'gsap';

// const AirlinesAwards = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [activeImage, setActiveImage] = useState(null);
//   const overlayRefs = useRef([]);
//   const textRefs = useRef([]);
//   const containerRefs = useRef([]);

//   // Array of image URLs for each airline
//   const airlineImages = [
//     "/api/placeholder/300/200", // Air France
//     "/api/placeholder/300/200", // Turkish Airlines
//     "/api/placeholder/300/200", // Malaysian Airlines
//     "/api/placeholder/300/200", // Ethiopian Airlines
//     "/api/placeholder/300/200", // Egypt Air
//     "/api/placeholder/300/200", // Virgin Atlantic
//     "/api/placeholder/300/200", // Etihad Airways
//   ];

//   const handleEnter = (index, e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//     setActiveImage(index);
    
//     // Existing GSAP animations
//     gsap.to(overlayRefs.current[index], {
//       scaleX: 1,
//       duration: 0.5,
//       ease: "power2.inOut"
//     });

//     gsap.to([textRefs.current[index].left, textRefs.current[index].right], {
//       color: '#02123b',
//       zIndex: 2,
//       paddingLeft: '1rem',
//       paddingRight: '1rem',
//       duration: 0.5,
//       ease: "power2.out"
//     });
//   };

//   const handleLeave = (index) => {
//     setActiveImage(null);
    
//     // Existing GSAP animations
//     gsap.to(overlayRefs.current[index], {
//       scaleX: 0,
//       duration: 0.5,
//       ease: "power2.inOut"
//     });

//     gsap.to([textRefs.current[index].left, textRefs.current[index].right], {
//       color: 'white',
//       paddingLeft: 0,
//       paddingRight: 0,
//       duration: 0.5,
//       ease: "power2.out"
//     });
//   };

//   const handleMouseMove = (e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   const addToContainerRefs = (el) => {
//     if (el && !containerRefs.current.includes(el)) {
//       containerRefs.current.push(el);
//     }
//   };

//   return (
//     <div className="md:px-8 lg:px-16 px-4 bg-[#02123b] pt-4 pb-40 -mt-2 md:-mt-1 text-white relative">
//       <div className="text-white flex justify-between border-b py-2 border-white md:text-[1.9vw] lg:text-[1.5vw] text-lg">
//         <div>Airlines</div>
//         <div>Awards</div>
//       </div>
      
//       {[
//         "Air France",
//         "Turkish Airlines",
//         "Malaysian Airlines",
//         "Ethiopian Airlines",
//         "Egypt Air",
//         "Virgin Atlantic",
//         "Etihad Airways"
//       ].map((airline, index) => (
//         <div
//           key={index}
//           ref={addToContainerRefs}
//           onMouseEnter={(e) => handleEnter(index, e)}
//           onMouseLeave={() => handleLeave(index)}
//           onMouseMove={handleMouseMove}
//           className="text-white py-6 md:text-[1.7vw] lg:text-[1.3vw] text-base flex justify-between border-b border-white relative"
//         >
//           <div>{airline}</div>
//           <div>Certificate of Appreciation</div>
          
//           {activeImage === index && (
//             <div
//               className="fixed pointer-events-none z-50 transition-opacity duration-300"
//               style={{
//                 left: `${mousePosition.x}px`,
//                 top: `${mousePosition.y}px`,
//                 transform: 'translate(-50%, -50%)'
//               }}
//             >
//               <img
//                 src={airlineImages[index]}
//                 alt={airline}
//                 className="w-64 h-48 object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AirlinesAwards;
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { Clash } from '../../../public/fonts/fonts';

const AirlinesAwards = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState(null);
  const overlayRefs = useRef([]);
  const textRefs = useRef([]);
  const containerRefs = useRef([]);

  // Array of image URLs for each airline
  const airlineImages = [
    "/images/certificates/airfrance.webp", // Air France
    "/images/certificates/turkishcargo.webp", // Turkish Airlines
    "/images/certificates/maskargo.webp", // Malaysian Airlines
    "/images/certificates/ethiopian.webp", // Ethiopian Airlines
    "/images/certificates/egyptair.webp", // Egypt Air
    "/images/certificates/virginatlantic.webp", // Virgin Atlantic
    "/images/certificates/etihadcargo.webp", // Etihad Airways
  ];

  const handleEnter = (index, e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setActiveImage(index);
    
    // Existing GSAP animations
    gsap.to(overlayRefs.current[index], {
      scaleX: 1,
      duration: 0.5,
      ease: "power2.inOut"
    });

    gsap.to([textRefs.current[index]?.left, textRefs.current[index]?.right], {
      color: '#02123b',
      zIndex: 2,
      paddingLeft: '1rem',
      paddingRight: '1rem',
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handleLeave = (index) => {
    setActiveImage(null);
    
    // Existing GSAP animations
    gsap.to(overlayRefs.current[index], {
      scaleX: 0,
      duration: 0.5,
      ease: "power2.inOut"
    });

    gsap.to([textRefs.current[index]?.left, textRefs.current[index]?.right], {
      color: 'white',
      paddingLeft: 0,
      paddingRight: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const addToRefs = (el, index, type) => {
    if (el) {
      if (type === 'overlay') {
        overlayRefs.current[index] = el;
      } else if (type === 'container') {
        if (!containerRefs.current[index]) {
          containerRefs.current[index] = el;
        }
      } else if (type === 'textLeft' || type === 'textRight') {
        if (!textRefs.current[index]) {
          textRefs.current[index] = {};
        }
        textRefs.current[index][type === 'textLeft' ? 'left' : 'right'] = el;
      }
    }
  };

  const airlines = [
    "Air France",
    "Turkish Airlines",
    "Malaysian Airlines",
    "Ethiopian Airlines",
    "Egypt Air",
    "Virgin Atlantic",
    "Etihad Airways"
  ];

  return (
    <div className={`md:px-8 lg:px-16 px-4 bg-[#02123b] pt-4 lg:pt-10 pb-40 -mt-2 md:-mt-1 text-white ${Clash.className}`}>
      <div className="text-white flex justify-between border-b py-2 border-white md:text-[1.9vw] lg:text-[1.5vw] text-lg">
        <div>Airlines</div>
        <div>Awards</div>
      </div>
      
      {airlines.map((airline, index) => (
        <div
          key={index}
          ref={(el) => addToRefs(el, index, 'container')}
          onMouseEnter={(e) => handleEnter(index, e)}
          onMouseLeave={() => handleLeave(index)}
          onMouseMove={handleMouseMove}
          className="text-white py-6 md:text-[1.7vw] lg:text-[1.3vw] text-base flex justify-between border-b border-white relative"
        >
          {/* White background overlay */}
          <div
            ref={(el) => addToRefs(el, index, 'overlay')}
            className="absolute inset-0 bg-white origin-left"
            style={{ transform: 'scaleX(0)', zIndex: 1 }}
          />
          
          {/* Text elements with refs */}
          <div ref={(el) => addToRefs(el, index, 'textLeft')} className="relative z-10">
            {airline}
          </div>
          <div ref={(el) => addToRefs(el, index, 'textRight')} className="relative z-10">
            Certificate of Appreciation
          </div>
          
          {/* Hover image */}
          {activeImage === index && (
            <div
              className="fixed pointer-events-none z-50 transition-opacity duration-300"
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <img
                src={airlineImages[index]}
                alt={airline}
                className="w-64 h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AirlinesAwards;