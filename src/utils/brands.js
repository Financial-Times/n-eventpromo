import { BDPLogo, BDPLogoDark, ForumsLogo, FTLiveLogo } from '../BrandLogo';
import detailStyles from '../Details.scss';

const audienceClapping =
	'https://www.ft.com/__assets/creatives/better-promo/audiance_clapping.jpg';
const handShake =
	'https://www.ft.com/__assets/creatives/better-promo/hand_shake.jpg';
const calculator =
	'https://www.ft.com/__assets/creatives/better-promo/calculator.jpg';

const BRANDS = {
	'ft-live': {
		BrandLogo: FTLiveLogo,
		defaultCtaText: 'Register now',
		defaultImageUrl: audienceClapping
	},
	'ft-bdp:masterclass': {
		BrandLogo: BDPLogo,
		defaultCtaText: 'Apply now',
		defaultImageUrl: audienceClapping,
		detailsModifierClassname:
			detailStyles['details--ft-board-director-programme-masterclass']
	},
	'ft-bdp:workshop': {
		BrandLogo: BDPLogo,
		defaultCtaText: 'Book your place',
		defaultImageUrl: audienceClapping,
		detailsModifierClassname:
			detailStyles['details--ft-board-director-programme-workshop']
	},
	'ft-bdp:diploma': {
		BrandLogo: BDPLogo,
		defaultCtaText: 'Apply now',
		defaultImageUrl: audienceClapping,
		detailsModifierClassname:
			detailStyles['details--ft-board-director-programme-diploma']
	},
	'ft-bdp:online-course': {
		BrandLogo: BDPLogoDark,
		defaultCtaText: 'Book now',
		defaultImageUrl: calculator,
		detailsModifierClassname:
			detailStyles['details--ft-board-director-programme-online-course'],
		darkButton: true
	},
	'ft-forums': {
		BrandLogo: ForumsLogo,
		defaultCtaText: 'Get involved',
		defaultImageUrl: handShake,
		detailsModifierClassname: detailStyles['details--ft-forums']
	}
};

export const getBranding = (brand) => BRANDS[brand] || BRANDS['ft-live'];
