import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Clash } from '../../../public/fonts/fonts';

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = 99; // Set your target number
      const duration = 1000; // Animation duration in ms
      const increment = Math.ceil(end / (duration / 16)); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`${Clash.className} text-[#02123b] lg:text-[3vw] md:text-[3.5vw] text-[6vw] text-right md:text-left`}>
      {Math.round(count)}%
    </div>
  );
};

export default Counter2;