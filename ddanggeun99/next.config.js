/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  env: { NEXT_PUBLIC_SERVER_URL: process.env.SERVER_URL },
};
