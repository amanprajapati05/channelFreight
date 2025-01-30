// "use client"

// import { animatePageIn } from "../app/utils/animation"
// import { useEffect } from "react"
// import { gsap } from "gsap"

// export default function Template({ children }) {
//   useEffect(() => {

//     const ctx = gsap.context(() => {
//       animatePageIn();
//     });
  
//     return () => ctx.revert();
    
//   }, [])
//   return (
//     <div>
//       <div
//         id="banner-1"
//         className="min-h-screen bg-white z-[999999999] fixed top-0 left-0 w-1/4"
//       />
//       <div
//         id="banner-2"
//         className="min-h-screen bg-white z-[999999999] fixed top-0 left-1/4 w-1/4"
//       />
//       <div
//         id="banner-3"
//         className="min-h-screen bg-white z-[999999999] fixed top-0 left-2/4 w-1/4"
//       />
//       <div
//         id="banner-4"
//         className="min-h-screen bg-white z-[999999999] fixed top-0 left-3/4 w-1/4"
//       />
//       {children}
//     </div>
//   )
// }
"use client";
import { animatePageIn } from "../app/utils/animation";
import { useEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Template({ children }) {
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const ctx = gsap.context(() => {
      animatePageIn();
    });

    return () => ctx.revert();
  }, [pathname]); // Add pathname as a dependency

  return (
    <div>
      {/* Banners remain the same */}
      <div
        id="banner-1"
        className="min-h-screen bg-white z-[999999999] fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-white z-[999999999] fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-white z-[999999999] fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-white z-[999999999] fixed top-0 left-3/4 w-1/4"
      />
      {children}
    </div>
  );
}
