import xEngine from '@financial-times/x-engine';

import Footer from './Footer';
import Meta from './Meta';
import styles from './Details.scss';

const EventDetails = (props) => {
	return (
		<div className={styles.block} aria-labelledby="details-header">
			<div id="details-header" hidden>
				Event details and information
			</div>
			<div className={styles.details} style={{'background-color': props.backgroundColor}}>
				<a href={props.link} className={styles.title} data-trackable="event-promo">
					{props.title}
				</a>
				<Meta {...props} />
				<div className={styles.strapline}>
					<p>{props.strapline}</p>
				</div>
				<Footer {...props}/>
			</div>
		</div>
	);
};

const ForumDetails = (props) => {
	return (
		<div className={styles.block} aria-labelledby="details-header">
			<div id="details-header" hidden>
				Forum details and information
			</div>
			<div className={styles.details} style={{'background-color': props.backgroundColor}}>
				<a href={props.link} className={styles.title} data-trackable="event-promo">
					{props.title}
				</a>
				<div className={styles.strapline + ' ' + styles['strapline--forum-promo']}>
					<p>{props.strapline}</p>
				</div>
				<Footer {...props}/>
			</div>
		</div>
	);
};

export {
	ForumDetails,
	EventDetails
};
