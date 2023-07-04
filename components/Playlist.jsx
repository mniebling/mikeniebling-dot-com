import css from './Playlist.module.css'

/**
 * @param title - The playlist name
 * @param url - Spotify embed url for the playlist: https://developer.spotify.com/documentation/widgets/generate/play-button
 * @param description - Text about the playlist
 * @param featuring - No more than 3 artists who are in the playlist
 */
export function Playlist(props) {

	return (
		<div className={ css.playlist }>
			<iframe
				allow='encrypted-media'
				allowtransparency='true'
				height='80'
				src={ props.url }
				width='300'
			/>

			<div className={ css.text }>
				<div className={ css.header }>{ props.title }</div>
				<div className={ css.description }>{ props.description }</div>
				<div className={ css.featuring }>{ props.featuring }</div>
			</div>
		</div>
	)
}


{/* <div class='playlist-block'>


  <div class='playlist-text'>
    <div class='playlist-header'>Instrumental Indian Classical</div>
    <div class='playlist-description'>A variety of pieces with different ragas, talas, and instruments.</div>
    <div class='playlist-description'>Featuring Amjad Ali Khan, Shivkumar Sharma, Zakir Hussain and more.</div>
  </div>
</div> */}
