import {BDPLogo, ForumsLogo, FTLiveLogo} from '../BrandLogo';

const audienceClapping = 'https://www.ft.com/__assets/creatives/better-promo/audiance_clapping.jpg';

const BRANDS = {
	'ft-live': {
		BrandLogo: FTLiveLogo,
		defaultCtaText: 'Register now',
		defaultEventImage: audienceClapping
	},
	'ft-bdp:masterclass': {
		BrandLogo: BDPLogo,
		defaultCtaText: 'Apply now',
		defaultEventImage: audienceClapping
	},
	'ft-bdp:workshop': {
		BrandLogo: BDPLogo,
		defaultCtaText: 'Book your place',
		defaultEventImage: audienceClapping
	},
	'ft-bdp:diploma': {
		BrandLogo: BDPLogo,
		defaultCtaText: 'Apply now',
		defaultEventImage: audienceClapping
	},
	'ft-forums': {
		BrandLogo: ForumsLogo,
		defaultCtaText: 'Get involved',
		defaultEventImage: audienceClapping
	}
};


export const getBranding = brand => BRANDS[brand] || BRANDS['ft-live'];
