"use client";
import { animatePageIn } from "../app/utils/animation";
import { useEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      animatePageIn();
    });
    return () => ctx.revert();
  }, [pathname]);

  return (
    <div>
      {/* First banner - starts at 0% */}
      <div
        id="banner-1"
        className="min-h-screen bg-white z-[999999999] fixed top-0"
        style={{ left: "0%", width: "20%" }}
      />
      {/* Second banner - starts at 20% */}
      <div
        id="banner-2"
        className="min-h-screen bg-white z-[999999999] fixed top-0"
        style={{ left: "20%", width: "20%" }}
      />
      {/* Third banner - starts at 40% */}
      <div
        id="banner-3"
        className="min-h-screen bg-white z-[999999999] fixed top-0"
        style={{ left: "40%", width: "20%" }}
      />
      {/* Fourth banner - starts at 60% */}
      <div
        id="banner-4"
        className="min-h-screen bg-white z-[999999999] fixed top-0"
        style={{ left: "60%", width: "20%" }}
      />
      {/* Fifth banner - starts at 80% */}
      <div
        id="banner-5"
        className="min-h-screen bg-white z-[999999999] fixed top-0"
        style={{ left: "80%", width: "20%" }}
      />
      {children}
    </div>
  );
}