// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;
// // // 
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: "export",
//   };
  
// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about-us': { page: '/about-us' },
      '/contact': { page: '/contact' },
      '/services': { page: '/services' },
      '/gallery': { page: '/gallery' },
      '/careers': { page: '/careers' },
      '/sectors': { page: '/sectors' },
      '/services': { page: '/services' },
      '/sectors/cold-chain-products': { page: '/sectors/cold-chain-products' },
      '/sectors/engineering': { page: '/sectors/engineering' },
      '/sectors/exhibition-relocation': { page: '/sectors/exhibition-relocation' },
      '/sectors/hazardous-chemicals': { page: '/sectors/hazardous-chemicals' },
      '/sectors/packaging-solutions': { page: '/sectors/packaging-solutions' },
      '/sectors/pharmaceuticals': { page: '/sectors/pharmaceuticals' },
      '/services/air-freight': { page: '/services/air-freight' },
      '/services/sea-freight': { page: '/services/sea-freight' },
      '/services/charter-services': { page: '/services/charter-services' },
      '/services/cross-trade': { page: '/services/cross-trade' },
      '/services/customs-brokerage': { page: '/services/customs-brokerage' },
      '/services/project-logistics': { page: '/services/project-logistics' },
      '/services/supply-chain': { page: '/services/supply-chain' },
      '/services/value-added-services': { page: '/services/value-added-services' },


      // Add all your routes here that you want pre-rendered
    }
  }
};

export default nextConfig;