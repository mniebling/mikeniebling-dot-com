import January from './01.mdx'
import February from './02.mdx'


export default function Page({ params }) {

		switch (params.month) {
			case '01': return <January />
			case '02': return <February />
			default: return <p>Not found!</p>
		}

}
