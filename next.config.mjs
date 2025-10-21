/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
        remotePatterns: [
        
                 {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    //   {
    //     protocol: 'https',
    //     hostname: 'images.unsplash.com',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'plus.unsplash.com', 
    //          },
    //   {
    //     protocol: "https",
    //     hostname: "via.placeholder.com",
    //          },
    //          {
    //              protocol: "https",
    //              hostname: "www.beachfrontcondos.com"
    //          },
    //          {protocol: "https", hostname: "fpg.roomsketcher.com"},
    //          {protocol: "https", hostname: "cdn.home-designing.com"},
    ],
  },
};

export default nextConfig;
