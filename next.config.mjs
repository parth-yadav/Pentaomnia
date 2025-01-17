const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true, // Important for static export
    },
    output: "export",
    trailingSlash: true,  // Add this for better static hosting compatibility
    // Add this if you're experiencing asset loading issues
  
};

export default nextConfig;