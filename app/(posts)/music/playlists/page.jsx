import Playlists from './playlists.mdx'

export const metadata = {
  title: 'Playlists',
}

export default function Page() {

	return (
		<>
			<h1>{ metadata.title }</h1>
			<Playlists />
		</>
	)
}
