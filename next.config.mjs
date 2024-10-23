/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["picsum.photos", "loremflickr.com", "cloudflare-ipfs.com"],
    },
};

export default nextConfig;
