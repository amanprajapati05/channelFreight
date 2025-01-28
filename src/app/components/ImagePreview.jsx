import React from 'react';

const ImagePreview = ({ src, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[1000]">
      <div className="relative w-[80%] h-[80%]">
        <img src={src} className="w-full h-full object-contain" alt="Preview" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImagePreview;