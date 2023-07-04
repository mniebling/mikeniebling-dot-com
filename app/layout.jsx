import Head from 'next/head'
import './global.css'

export const metadata = {
  title: {
		template: '%s: Mike Niebling',
	},
}

// Next.js support for Google web fonts:
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts
import { IBM_Plex_Serif } from 'next/font/google'

const typeface = IBM_Plex_Serif({
	display: 'swap',
	style: ['normal', 'italic'],
	subsets: ['latin'],
	variable: '--font-family-primary',
	weight: ['400', '700'],
})

export default function RootLayout(props) {

	return (
		<html lang='en' className={ typeface.variable }>
			<body>{ props.children }</body>
		</html>
	)
}
