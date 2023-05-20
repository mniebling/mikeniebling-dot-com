import css from './Review.module.css'

/**
 * @param children - MDX that will be rendered as the body of the review.
 * @param title - The name of the thing that was reviewed.
 * @param url - Spotify embed url for the record.
 * @param hot - If the review was highly recommended.
 */
export function Review(props) {

	const url = props.url?.replace('spotify:', '')

	return (
		// Insert a newline before `body` so that markdown adds a `p` tag around the
		// first paragraph of the contents.
		// const content = md.renderInline('\n' + body)
		<div className={ css.review }>
			<div className={ css.title }>
				<span>{ props.title }</span>
				{ props.hot && (
					<span className={ css.hot }>Highly recommended!</span>
				)}
			</div>

			<div className={ css.body }>{ props.children }</div>

			<div className={ css.links }>
				{ props.url && (
					<a href={ url } target="_blank">Spotify</a>
				)}
			</div>
		</div>
	)
}
