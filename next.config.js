/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { domains: ['cdn.chec.io'] },
  env: {
    COMMERCE_PUBLIC_KEY: process.env.COMMERCE_PUBLIC_KEY,
    COMMERCE_PRIVATE_KEY: process.env.COMMERCE_PRIVATE_KEY,
  },
};
