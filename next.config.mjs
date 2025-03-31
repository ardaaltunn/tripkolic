/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Static HTML Export
    trailingSlash: true, // Trailing slashes for all routes
    distDir: 'out', // Output directory name
    images: {
        unoptimized: true, // Disable image optimization
    },
};

export default nextConfig; 