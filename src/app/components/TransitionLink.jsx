// // 'use client';

// // import Link from "next/link";
// // import React from "react";
// // import { useRouter } from "next/navigation";
// // import { gsap } from 'gsap';

// // export const TransitionLink = ({
// //   children,
// //   href,
// //   ...props
// // }) => {
// //   const router = useRouter();

// //   const createOverlays = () => {
// //     const container = document.createElement('div');
// //     container.className = 'fixed inset-0 z-[9999] pointer-events-none';
// //     document.body.appendChild(container);

// //     const overlays = Array.from({ length: 5 }, (_, i) => {
// //       const overlay = document.createElement('div');
// //       overlay.className = 'absolute top-0 h-screen bg-white';
// //       overlay.style.width = '20%';
// //       overlay.style.left = `${i * 20}%`;
// //       overlay.style.transform = 'translateY(-100%)';
// //       container.appendChild(overlay);
// //       return overlay;
// //     });
// //     return { container, overlays };
// //   };

// //   const handleTransition = async (e) => {
// //     e.preventDefault();
    
// //     const { container, overlays } = createOverlays();

// //     // Cover animation
// //     const coverTl = gsap.timeline();
// //     await coverTl.to(overlays, {
// //       yPercent: 0,
// //       duration: 1,
// //       ease: "power2.inOut",
// //       stagger: {
// //         amount: 0.3,
// //         from: "start"
// //       }
// //     }).then(async () => {
// //       router.push(href);
// //     });

// //     // Wait for new page
// //     await new Promise(resolve => setTimeout(resolve, 1000));

// //     // Reveal animation
// //     await gsap.to(overlays, {
// //       yPercent: 100,
// //       duration: 0.5,
// //       ease: "power2.inOut",
// //       stagger: {
// //         amount: 0.3,
// //         from: "end"
// //       }
// //     });

// //     container.remove();
// //   };

// //   return (
// //     <Link {...props} href={href} onClick={handleTransition}>
// //       {children}
// //     </Link>
// //   );
// // };
// 'use client';

// import Link from "next/link";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { gsap } from 'gsap';

// export const TransitionLink = ({
//   children,
//   href,
//   ...props
// }) => {
//   const router = useRouter();

//   const createOverlays = () => {
//     const container = document.createElement('div');
//     container.className = 'fixed inset-0 z-[9999] pointer-events-none';
//     document.body.appendChild(container);

//     const overlays = Array.from({ length: 5 }, (_, i) => {
//       const overlay = document.createElement('div');
//       overlay.className = 'absolute top-0 h-screen bg-white';
//       overlay.style.width = '20%';
//       overlay.style.left = `${i * 20}%`;
//       overlay.style.transform = 'translateY(-100%)';
//       container.appendChild(overlay);
//       return overlay;
//     });
//     return { container, overlays };
//   };

//   const handleTransition = async (e) => {
//     e.preventDefault();
    
//     const { container, overlays } = createOverlays();

//     // Cover animation with completion callback
//     await new Promise(resolve => {
//       gsap.to(overlays, {
//         yPercent: 0,
//         duration: 1,
//         ease: "power2.inOut",
//         stagger: {
//           amount: 0.3,
//           from: "start"
//         },
//         onComplete: resolve
//       });
//     });

//     // After cover is complete, change route
//     router.push(href);

//     // Wait for new page
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     // Reveal animation
//     await gsap.to(overlays, {
//       yPercent: 100,
//       duration: 0.5,
//       ease: "power2.inOut",
//       stagger: {
//         amount: 0.3,
//         from: "end"
//       }
//     });

//     container.remove();
//   };

//   return (
//     <Link {...props} href={href} onClick={handleTransition}>
//       {children}
//     </Link>
//   );
// };
'use client';

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { gsap } from 'gsap';

export const TransitionLink = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const createOverlays = () => {
    const container = document.createElement('div');
    container.className = 'fixed inset-0 z-[9999] pointer-events-none';
    document.body.appendChild(container);

    const overlays = Array.from({ length: 5 }, (_, i) => {
      const overlay = document.createElement('div');
      overlay.className = 'absolute top-0 h-screen bg-white';
      overlay.style.width = '20%';
      overlay.style.left = `${i * 20}%`;
      overlay.style.transform = 'translateY(-100%)';
      container.appendChild(overlay);
      return overlay;
    });
    return { container, overlays };
  };

  const handleTransition = async (e) => {
    e.preventDefault();
    
    const { container, overlays } = createOverlays();

    // Cover animation
    await new Promise(resolve => {
      gsap.to(overlays, {
        yPercent: 0,
        duration: 0.7,
        ease: "power2.inOut",
        stagger: {
          amount: 0.3,
          from: "start"
        },
        onComplete: () => {
          setTimeout(resolve, 500); // Additional pause when screen is white
          router.push(href)
        }
      });
    });

  ;

    // Wait for new page with white screen
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reveal animation
    gsap.to(overlays, {
      yPercent: 100,
      duration: 0.7,
      ease: "power2.inOut",
      stagger: {
        amount: 0.3,
        from: "start"
      },
      onComplete: () => container.remove()
    });
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};