import Footer from './Footer';
import Meta from './Meta';
import styles from './Details.scss';

const EventDetails = ({link, title, strapline, brand, ...props}) => {
	const detailStyles = [styles.details];

	if (styles[`details--${brand}`]) {
		detailStyles.push(styles[`details--${brand}`]);
	}
	return (
		<div className={styles.block} aria-labelledby="details-header">
			<div id="details-header" hidden>
				Event details and information
			</div>
			<div className={detailStyles.join(' ')}>
				<a href={link} className={styles.title} data-trackable="event-promo">
					{title}
				</a>
				<Meta {...props} />
				<div className={styles.strapline}>
					<p>{strapline}</p>
				</div>
				<Footer {...props}/>
			</div>
		</div>
	);
};

const ForumDetails = ({title, strapline, link, ...props}) => {
	return (
		<div className={styles.block} aria-labelledby="details-header">
			<div id="details-header" hidden>
				Forum details and information
			</div>
			<div className={styles.details + ' ' + styles['details--ft-forums']}>
				<a href={link} className={styles.title} data-trackable="event-promo">
					{title}
				</a>
				<div className={styles.strapline + ' ' + styles['strapline--forum-promo']}>
					<p>{strapline}</p>
				</div>
				<Footer {...props} brand='ft-forums'/>
			</div>
		</div>
	);
};

export {
	ForumDetails,
	EventDetails
};
