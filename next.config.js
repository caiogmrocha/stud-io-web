/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
	env: {
		apiUrl: 'http://localhost:3333',
	},
};

module.exports = nextConfig;
