// // // import gsap from "gsap"


// // // export const animatePageIn = () => {
// // //   const bannerOne = document.getElementById("banner-1")
// // //   const bannerTwo = document.getElementById("banner-2")
// // //   const bannerThree = document.getElementById("banner-3")
// // //   const bannerFour = document.getElementById("banner-4")

// // //   if (bannerOne && bannerTwo && bannerThree && bannerFour) {
// // //     const tl = gsap.timeline()

// // //     tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
// // //       yPercent: 0,
// // //     }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
// // //       yPercent: 100,

// // //       stagger: 0.1,
// // //       ease: "power2.inOut",
// // //     })
// // //   }
// // // }

// // // export const animatePageOut = (href, router) => {
// // //     return new Promise((resolve) => {
// // //       const banners = [
// // //         document.getElementById("banner-1"),
// // //         document.getElementById("banner-2"),
// // //         document.getElementById("banner-3"),
// // //         document.getElementById("banner-4"),
// // //       ].filter(Boolean);
  
// // //       if (banners.length === 0) {
// // //         router.push(href);
// // //         return resolve();
// // //       }
// // //       const tl = gsap.timeline();
// // //       tl.set(banners, {
// // //         yPercent: -100,
// // //       }).to(banners, {
// // //         yPercent: 0,
// // //         stagger: 0.1,
// // //         ease: "power2.inOut",
// // //         onComplete: () => {
// // //           router.push(href)
// // //         },
// // //       })
// // //     });
// // //   };

// // import gsap from "gsap"

// // export const animatePageIn = () => {
// //   const banners = [
// //     document.getElementById("banner-1"),
// //     document.getElementById("banner-2"),
// //     document.getElementById("banner-3"),
// //     document.getElementById("banner-4"),
// //     document.getElementById("banner-5")
// //   ]

// //   if (banners.every(b => b !== null)) {
// //     const tl = gsap.timeline()
// //     tl.set(banners, {
// //       yPercent: 0,
// //     }).to(banners, {
// //       yPercent: 100,
// //       stagger: 0.1,
// //       ease: "power2.inOut",
// //     })
// //   }
// // }

// // export const animatePageOut = (href, router) => {
// //   return new Promise((resolve) => {
// //     const banners = [
// //       document.getElementById("banner-1"),
// //       document.getElementById("banner-2"),
// //       document.getElementById("banner-3"),
// //       document.getElementById("banner-4"),
// //       document.getElementById("banner-5")
// //     ].filter(Boolean)

// //     if (banners.length === 0) {
// //       router.push(href)
// //       return resolve()
// //     }
    
// //     const tl = gsap.timeline()
// //     tl.set(banners, {
// //       yPercent: -100,
// //     }).to(banners, {
// //       yPercent: 0,
// //       stagger: 0.1,
// //       ease: "power2.inOut",
// //       onComplete: () => {
// //         router.push(href)
// //       },
// //     })
// //   })
// // }
// // utils/animation.js
// import gsap from "gsap";

// export const animatePageIn = () => {
//   const banners = Array.from({ length: 5 }, (_, i) => 
//     document.getElementById(`banner-${i + 1}`)
//   );

//   if (banners.every(b => b)) {
//     gsap.set(banners, { 
//       yPercent: 0,
//       zIndex: 100,
//       overwrite: true
//     });

//     gsap.to(banners, {
//       yPercent: 100,
//       stagger: 0.1,
//       duration: 0.8,
//       ease: "power2.inOut",
//     });
//   }
// };

// export const animatePageOut = (href, router) => {
//   return new Promise((resolve) => {
//     const banners = Array.from({ length: 5 }, (_, i) => 
//       document.getElementById(`banner-${i + 1}`)
//     );

//     if (!banners.length) {
//       router.push(href);
//       return resolve();
//     }

//     gsap.set(banners, {
//       yPercent: -100,
//       zIndex: 100,
//       overwrite: true
//     });

//     gsap.to(banners, {
//       yPercent: 0,
//       stagger: 0.1,
//       duration: 0.8,
//       ease: "power2.inOut",
//       onComplete: () => {
//         router.push(href);
//         resolve();
//       }
//     });
//   });
// };
import gsap from "gsap";

export const animatePageIn = () => {
  gsap.to("#banner-1", {
    yPercent: 100,
    duration: 0.8,
    ease: "power2.inOut",
  });
  gsap.to("#banner-2", {
    yPercent: 100,
    duration: 0.8,
    delay: 0.1,
    ease: "power2.inOut",
  });
  gsap.to("#banner-3", {
    yPercent: 100,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.inOut",
  });
  gsap.to("#banner-4", {
    yPercent: 100,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.inOut",
  });
  gsap.to("#banner-5", {
    yPercent: 100,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.inOut",
  });
};

export const animatePageOut = (href, router) => {
  return new Promise((resolve) => {
    gsap.set(["#banner-1", "#banner-2", "#banner-3", "#banner-4", "#banner-5"], {
      yPercent: -100,
    });

    gsap.to("#banner-1", {
      yPercent: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to("#banner-2", {
      yPercent: 0,
      duration: 0.8,
      delay: 0.1,
      ease: "power2.inOut",
    });
    gsap.to("#banner-3", {
      yPercent: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.inOut",
    });
    gsap.to("#banner-4", {
      yPercent: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.inOut",
    });
    gsap.to("#banner-5", {
      yPercent: 0,
      duration: 0.8,
      delay: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(href);
        resolve();
      }
    });
  });
};