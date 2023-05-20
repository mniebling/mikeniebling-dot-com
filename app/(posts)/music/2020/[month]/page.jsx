import January from './01.mdx'


export async function generateMetadata({ params }) {

	function monthNameFromNumber(number) {
		const date = new Date(2023, number - 1)
		return date.toLocaleDateString('en-US', { month: 'long' })
	}

	return {
		title: `${monthNameFromNumber(params.month)} 2020`,
	}
}


export default function Page({ params }) {

	// This is kind of janky but this is the only place where we have dynamic content so far
	// I think the "correct" solution is something using contentlayer?
	// On the other hand maybe I have to implement that because of the other posts as well...
	function Month(number) {
		switch (number) {
			case '01': return January()
		}
	}

	return (
		<>
			{ Month(params.month) }
		</>
	)
}
