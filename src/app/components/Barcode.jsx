import React from 'react';

const Scale = ({ value = 2 }) => {
  const generateUnit = (unitNumber) => {
    const bars = [];
    const barsPerUnit = 60;  // Exactly 60 bars between numbers
    
    // Generate 60 bars for this unit
    for (let i = 0; i < barsPerUnit; i++) {
      const isFirstBar = i === 0;
      const isTallBar = i % 10 === 9;  // Every 10th bar (9, 19, 29, etc.)
      
      bars.push(
        <div 
          key={`unit-${unitNumber}-bar-${i}`}
          className={`
            ${isFirstBar ? 'w-[1px]' : 'md:w-[0.02vw] w-[0.08vw]'}
            ${isFirstBar ? 'bg-white' : 'bg-[#333f5e]'}
            ${isTallBar || isFirstBar ? 'h-6' : 'h-5'}
          `}
        />
      );
    }
    
    // Add the number after the 60 bars
    bars.push(
      <div 
        key={`unit-${unitNumber}-number`}
        className='text-white '
      >
        {unitNumber}
      </div>
    );
    
    return bars;
  };

  const renderScale = () => {
    let allElements = [];
    
    // Generate units up to the specified value
    for (let i = 1; i <= value; i++) {
      allElements = [...allElements, ...generateUnit(i)];
    }
    
    return allElements;
  };

  return (
    <div className='flex justify-center bg-[#02123b] gap-[1vw] md:gap-[0.5vw] items-center  p-4'>
      {renderScale()}
    </div>
  );
};

export default Scale;