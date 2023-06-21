/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		// esmExternals: 'loose',
		// serverComponentsExternalPackages: ['activecampaign-sdk', 'api', 'ac'],
	},
};

module.exports = nextConfig;
