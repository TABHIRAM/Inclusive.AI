/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
        ],
      },
      reactStrictMode: false, // Disable React Strict Mode
};

export default nextConfig;
