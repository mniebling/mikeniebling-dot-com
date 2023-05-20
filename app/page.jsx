import css from './page.module.css'

export const metadata = {
  title: 'Mike Niebling',
}


export default function Page() {

	return (
		<>
			<div className={ css.header }>
				<h1 className={ css.h1 }>Mike Niebling</h1>
			</div>

			<main className={ css.container }>
				<section className={ css.section }>
					<h2 className={ css.h2 }>Music</h2>

					<div><a href="/music/playlists">Playlists</a></div>
					<div><a href="/music/queue">Listening queue</a></div>

					<p>In 2020 I made a resolution to review all the records I liked.
					It became a nice challenge and sharpened my thinking and writing about music, although I did fall off
					at the end of the year when life got crazy. Here are my reviews, month-by-month:</p>

					<span style={{ color: '#777' }}>
						<a href="/music/2020/01-reviews">Jan</a><span> • </span>
						<a href="/">Feb</a><span> • </span>
						<a href="/">Mar</a><span> • </span>
						<a href="/">Apr</a><span> • </span>
						<a href="/">May</a><span> • </span>
						<a href="/">Jun</a><span> • </span>
						<a href="/">Jul</a><span> • </span>
						<a href="/">Aug</a><span> • </span>
						<a href="/">Sep</a><span> • </span>
						<a href="/">Oct</a><span> • </span>
						<a href="/">Nov</a><span> • </span>
						<a href="/">Dec</a>
					</span>
				</section>

				<section className={ css.section }>
					<h2 className={ css.h2 }>The Quantified Life</h2>

					<div><a href="https://www.last.fm/user/thebling">Music (Last.fm)</a></div>
					<div><a href="https://www.goodreads.com/user/show/104157118-mike">Books (Goodreads)</a></div>
					<div><a href="https://letterboxd.com/thebling/">Movies (Letterboxd)</a></div>
					<div><a href="https://www.songkick.com/users/thebling">Concerts (Songkick)</a></div>
					<div><a href="https://www.moxfield.com/users/thebling">Magic: The Gathering (Moxfield)</a></div>
				</section>

				<section className={ css.section }>
					<h2 className={ css.h2 }>Projects</h2>

					<p>
						<a href="https://www.estherpomranky.com" className={ css.projectLink } target="_blank" rel="noopener">Esther's website:</a>
						<span>I maintain Esther's art site to help her show off her paintings and link to her YouTube channel and Etsy store.</span>
					</p>

					<p>
						<a href="https://github.com/mniebling/light-fakery" className={ css.projectLink } target="_blank" rel="noopener">Light Fakery:</a>
						<span>An open-source JS library for generating random fake data. Its goal is to be as lightweight as possible with great developer ergonomics.</span>
					</p>

					<p>
						<a href="/mtg/tabletop-simulator" className={ css.projectLink }>Playing Magic on Tabletop Simulator:</a>
						<span>Adventures in quarantine gaming! This page has setup instructions and some useful commands to know in-game.</span>
					</p>

					<p>
						<a href="https://visualmortgagecalculator.com" className={ css.projectLink } target="_blank" rel="noopener">Visual Mortgage Calculator:</a>
						<span>An app for visually comparing loan payoff scenarios. I haven't messed with this in some time now.</span>
					</p>

					<p>
						<a href="https://walkability.netlify.app" className={ css.projectLink } target="_blank" rel="noopener">Walkability:</a>
						<span>A simple project I built for our house search. It helped us visualize what places are near an address within various walking distances.</span>
					</p>
				</section>
			</main>
		</>
	)
}
