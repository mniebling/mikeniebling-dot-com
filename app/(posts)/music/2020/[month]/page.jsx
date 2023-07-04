import January from './01.mdx'
import February from './02.mdx'
import March from './03.mdx'
import April from './04.mdx'
import May from './05.mdx'
import June from './06.mdx'
import July from './07.mdx'
import August from './08.mdx'
import September from './09.mdx'
import October from './10.mdx'
import November from './11.mdx'
import December from './12.mdx'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {

  return [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12',
	]
}


export default function Page({ params }) {

	switch (params.month) {
		case '01': return <January />
		case '02': return <February />
		case '03': return <March />
		case '04': return <April />
		case '05': return <May />
		case '06': return <June />
		case '07': return <July />
		case '08': return <August />
		case '09': return <September />
		case '10': return <October />
		case '11': return <November />
		case '12': return <December />
		default: return <p>Not found!</p>
	}
}
