import TabletopSimulator from './tabletop-simulator.mdx'

export const metadata = {
  title: 'MTG on Tabletop Simulator',
}

export default function Page() {

	return (
		<>
			<h1>{ metadata.title }</h1>
			<TabletopSimulator />
		</>
	)
}
