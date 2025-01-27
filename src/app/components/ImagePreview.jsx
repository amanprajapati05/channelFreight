"use client"
import React from 'react';

const ImagePreview = ({ src, alt = "", onClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div 
        onClick={handleOpen} 
        className="cursor-pointer md:w-[30%] flex-shrink-0 lg:w-[25%] xl:w-[20%] w-[50%] rounded-xl h-[45vw] md:h-[28vw] lg:h-[23vw] xl:h-[19vw]"
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {isOpen && (
        <div 
          className=" inset-0 bg-black/80 z-[999999999]  -translate-y-1/2 -top-[50%]   absolute"
          onClick={handleClose}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={handleClose}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <img 
              src={src} 
              alt={alt} 
              className="w-[80vw] h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePreview;