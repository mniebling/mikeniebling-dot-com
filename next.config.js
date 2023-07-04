/** @type { import('next').NextConfig } */
const nextConfig = {
	experimental: {
		mdxRs: true,
	},
	output: 'export', // required for hosting on Netlify
	pageExtensions: ['jsx', 'mdx'],
}

const withMDX = require('@next/mdx')()

module.exports = withMDX(nextConfig)
