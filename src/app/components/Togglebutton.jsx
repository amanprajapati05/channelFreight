import React from 'react';

const ToggleButton = ({ isActive, setIsActive }) => {
  return (
    <button
    onClick={() => setIsActive(!isActive)}
    className={`relative flex gap-2 items-center p-1 md:p-2 rounded-full bg-[#333f5e] transition-all duration-300`}
  >
    {/* Left dot pattern */}
    <div className={`flex gap-1 transition-opacity duration-300 ${isActive ? 'opacity-30' : 'opacity-100'}`}>
      <div className="w-2 h-1  bg-white"></div>
      <div className="w-2 h-1 relative top-1  bg-white"></div>
      <div className="w-2 h-1  bg-white"></div>
    </div>
    
    {/* Moving white container */}
    <div className={`bg-white rounded-full p-1 flex justify-between items-center gap-2 transition-all duration-300 ${isActive ? 'order-first' : ''}`}>
        <div className="w-2 h-1  bg-black"></div>
        <div className="w-2 h-1  bg-black"></div>
        <div className="w-2 h-1  bg-black"></div>
      </div>
    
  
    
  </button>
  );
};

export default ToggleButton;