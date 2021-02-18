import xEngine from '@financial-times/x-engine';

import Footer from './Footer';
import Meta from './Meta';
import styles from './Details.scss';
import {BDPLogo, ForumsLogo, FTLiveLogo} from './BrandLogo';

const EventDetails = ({link, title, strapline, brand, ctaText, ...props}) => {
	const detailStyles = [styles.details];
	let BrandLogo;
	let defaultCtaText;

	switch (brand) {
		case 'ft-bdp:masterclass':
			BrandLogo = BDPLogo;
			defaultCtaText = 'Apply now'
			detailStyles.push(styles['details--ft-bdp-masterclass'])
			break;
		case 'ft-bdp:workshop':
			BrandLogo = BDPLogo;
			defaultCtaText = 'Book your place'
			detailStyles.push(styles['details--ft-bdp-workshop'])
			break;
		case 'ft-bdp:diploma':
			BrandLogo = BDPLogo;
			defaultCtaText = 'Apply now'
			detailStyles.push(styles['details--ft-bdp-diploma'])
			break;
		case 'ft-forums':
			BrandLogo = ForumsLogo;
			defaultCtaText = 'Get involved'
			detailStyles.push(styles['details--ft-forums'])
			break;
		case 'ft-live':
		default:
			BrandLogo = FTLiveLogo
			defaultCtaText = 'Register now'
			break;
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
				<Footer url={link} ctaText={ctaText || defaultCtaText}>
					<BrandLogo/>
				</Footer>
			</div>
		</div>
	);
};

const ForumDetails = ({name, description, link, ctaText}) => {
	return (
		<div className={styles.block} aria-labelledby="details-header">
			<div id="details-header" hidden>
				Forum details and information
			</div>
			<div className={styles.details + ' ' + styles['details--ft-forums']}>
				<a href={link} className={styles.title} data-trackable="event-promo">
					{name}
				</a>
				<div className={styles.strapline + ' ' + styles['strapline--forum-description']}>
					<p>{description}</p>
				</div>
				<Footer url={link} ctaText={ctaText || 'Get involved'}>
					<ForumsLogo/>
				</Footer>
			</div>
		</div>
	);
};

export {
	ForumDetails,
	EventDetails
};
