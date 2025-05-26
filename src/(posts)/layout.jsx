import css from './layout.module.css'


export default function PostLayout(props) {

	return (
		<div className={ css.post }>
			<div className={ css.postLinks }>
				<a href='/'>Home</a>
			</div>

			<div className={ css.postBody }>
				{ props.children }
			</div>
		</div>
	)
}
