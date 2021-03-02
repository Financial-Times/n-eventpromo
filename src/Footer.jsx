import styles from './Footer.scss';
import {getBranding} from './utils/brands';

const Footer = ({link, ctaText, brand}) => {
	const {BrandLogo, defaultCtaText} = getBranding(brand);
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
