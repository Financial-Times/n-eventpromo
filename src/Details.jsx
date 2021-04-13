import xEngine from '@financial-times/x-engine';

import Footer from './Footer';
import Meta from './Meta';
import styles from './Details.scss';
import commonStyles from './styles/common.scss';

const EventDetails = (props) => {
	return (
		<div className={styles.block} aria-labelledby="details-header">
			<h2 className={commonStyles['visually-hidden']}>
				Event details and information
			</h2>
			<div className={`${styles.details} ${props.detailsModifierClassname || ''}`}>
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
			<h2 className={commonStyles['visually-hidden']}>
				Forum details and information
			</h2>
			<div className={`${styles.details} ${styles['.details--ft-forums']}`}>
				<a href={props.link} className={styles.title} data-trackable="event-promo">
					{props.title}
				</a>
				<div className={`${styles.strapline} ${styles['strapline--forum-promo']}`}>
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
