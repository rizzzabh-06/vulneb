/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost:3000', '*.compute.amazonaws.com', 'anish.dev', 'www.anish.dev']
        }
    }
};

module.exports = nextConfig;
