import xEngine from '@financial-times/x-engine';

import styles from './Footer.scss';

const Footer = ({url, ctaText, children}) => {
	return (
		<div className={styles['cta-container']}>
			<div className={styles['btn-block']}>
				<a href={url} className={styles['btn']} data-trackable="event-promo">
					{ctaText}
				</a>
			</div>
			{children}
		</div>
	);
};

export default Footer;
