import {BDPLogo, ForumsLogo, FTLiveLogo} from '../BrandLogo';

const audienceClapping = 'https://www.ft.com/__assets/creatives/better-promo/audiance_clapping.jpg';
const handShake = 'https://www.ft.com/__assets/creatives/better-promo/hand_shake.jpg';

const BRANDS = {
	'ft-live': {
		BrandLogo: FTLiveLogo,
		defaultCtaText: 'Register now',
		defaultImageUrl: audienceClapping,
		backgroundColor: 'rgba(38, 42, 51, 0.9)'
	},
	'ft-bdp:masterclass': {
		BrandLogo: BDPLogo,
		defaultCtaText: 'Apply now',
		defaultImageUrl: audienceClapping,
		backgroundColor: 'rgb(108, 89, 153, 0.9)'
	},
	'ft-bdp:workshop': {
		BrandLogo: BDPLogo,
		defaultCtaText: 'Book your place',
		defaultImageUrl: audienceClapping,
		backgroundColor: 'rgb(18, 165, 179, 0.9)'
	},
	'ft-bdp:diploma': {
		BrandLogo: BDPLogo,
		defaultCtaText: 'Apply now',
		defaultImageUrl: audienceClapping,
		backgroundColor: 'rgb(153, 15, 61, 0.9)'
	},
	'ft-forums': {
		BrandLogo: ForumsLogo,
		defaultCtaText: 'Get involved',
		defaultImageUrl: handShake,
		backgroundColor: 'rgb(18, 165, 179, 0.9)'
	}
};


export const getBranding = brand => BRANDS[brand] || BRANDS['ft-live'];
