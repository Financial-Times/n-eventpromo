import xEngine from '@financial-times/x-engine';

import styles from './Footer.scss';

const Footer = ({link, ctaText, BrandLogo, defaultCtaText}) => {
	return (
		<div className={styles['cta-container']}>
			<div className={styles['btn-block']}>
				<a href={link} className={styles['btn']} data-trackable="event-promo">
					{ctaText || defaultCtaText}
				</a>
			</div>
			<BrandLogo/>
		</div>
	);
};

export default Footer;
