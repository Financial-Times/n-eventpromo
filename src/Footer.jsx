import xEngine from '@financial-times/x-engine';
import styles from './Footer.scss';

const Footer = ({link, ctaText, BrandLogo, defaultCtaText, darkButton}) => {
	return (
		<div className={styles['cta-container']}>
			<div className={styles['btn-block']}>
				<a href={link} className={`${styles['btn']} ${darkButton ? styles['btn--dark'] : ''}`.trim()}
				   data-trackable="event-promo">
					{ctaText || defaultCtaText}
				</a>
			</div>
			<BrandLogo/>
		</div>
	);
};

export default Footer;
