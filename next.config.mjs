const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true, // Keep if needed
    },
    // Remove the static export setting
    // output: "export",
};

export default nextConfig;
