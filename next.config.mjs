/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: 'www.cryptocompare.com' },
			{ hostname: 'images.cryptocompare.com' },
		],
	},
};

export default nextConfig;
