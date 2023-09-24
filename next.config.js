/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hasimovtabriz.com.tr", "tailwindui.com",  "images.unsplash.com", "w3.org", "res.cloudinary.com", "lh3.googleusercontent.com", "avatars.githubusercontent.com", "encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig;
