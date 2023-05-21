/** @type { import('next').NextConfig } */
const nextConfig = {
	experimental: {
		mdxRs: true,
	},
	pageExtensions: ['jsx', 'mdx'],
}

const withMDX = require('@next/mdx')()

module.exports = withMDX(nextConfig)
