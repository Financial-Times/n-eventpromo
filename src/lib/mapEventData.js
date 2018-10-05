const config = require('../config');
const {getFormattedDate} = require('./event-date');

function getMappedData (theEvent, variant) {
	const eventUrl = new URL(theEvent.eventUrl);
	const images = [theEvent.imageUrl, ...config.animationStaticImages];
	const showVariant = (variant === 'variant');

	eventUrl.searchParams.set('segmentId', theEvent.segmentId);
	eventUrl.searchParams.set('variant', showVariant.toString());

	return {
		dates: getFormattedDate(theEvent),
		id: theEvent.id,
		images,
		link: eventUrl.toString(),
		location: theEvent.location,
		segmentId: theEvent.segmentId,
		showVariant,
		strapline: theEvent.strapline,
		title: theEvent.title
	};
};

module.exports = {
	getMappedData
};