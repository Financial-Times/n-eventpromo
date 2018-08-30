const { promoInit } = require('../../main');

const demoVersion = document.location.search ? document.location.search.trim().split('=')[1] : false; // use either 'control' or 'variant' as values

// Set a fake windows.FT.flags object just for local demo
if(!window.FT) {
	window.FT = {
			flags :  {
				eventPromoLightVsLightSL : demoVersion
		}
	};
}

async function init () {
	if (!document.querySelector('.event-promo')) {
		throw new Error('.event-promo not found');
	}

	try {
		await promoInit(document);
	}
	catch (err) {
		throw new Error('failed to initialise eventpromo');
	}
}

init ();
