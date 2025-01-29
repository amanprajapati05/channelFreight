import gsap from "gsap"


export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,

      stagger: 0.1,
      ease: "power2.inOut",
    })
  }
}

// export const animatePageOut = (href, router) => {
//   const bannerOne = document.getElementById("banner-1")
//   const bannerTwo = document.getElementById("banner-2")
//   const bannerThree = document.getElementById("banner-3")
//   const bannerFour = document.getElementById("banner-4")

//   if (bannerOne && bannerTwo && bannerThree && bannerFour) {
//     const tl = gsap.timeline()

    // tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
    //   yPercent: -100,
    // }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
    //   yPercent: 0,
    //   stagger: 0.2,
    //   onComplete: () => {
    //     router.push(href)
    //   },
    // })
//   }
// }
export const animatePageOut = (href, router) => {
    return new Promise((resolve) => {
      const banners = [
        document.getElementById("banner-1"),
        document.getElementById("banner-2"),
        document.getElementById("banner-3"),
        document.getElementById("banner-4"),
      ].filter(Boolean);
  
      if (banners.length === 0) {
        router.push(href);
        return resolve();
      }
      const tl = gsap.timeline();
      tl.set(banners, {
        yPercent: -100,
      }).to(banners, {
        yPercent: 0,
        stagger: 0.1,
        ease: "power2.inOut",
        onComplete: () => {
          router.push(href)
        },
      })

    //   gsap.to(banners, {
    //     yPercent: 0,
    //     stagger: 0.2,
    //     onComplete: () => {
    //       router.push(href);
    //       resolve();
    //     },
    //   });
    });
  };