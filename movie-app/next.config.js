/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"movies-database-gold.vercel.app",
        port:"",
        pathname:"/img/**",
      },
    ],
  },
};

module.exports = nextConfig

