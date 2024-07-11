/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/web/home',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
