/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_HOST_URL: process.env.NEXT_HOST_URL,
  },
};
