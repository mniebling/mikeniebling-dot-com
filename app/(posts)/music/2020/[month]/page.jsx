import January from './01.mdx'


export default function Page({ params }) {

	console.info(params.month)


	function reviewForMonth() {
		return <January />
	}

	return (
		<>
			{ reviewForMonth() }
		</>
	)
}
