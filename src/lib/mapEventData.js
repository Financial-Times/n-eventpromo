const config = require('../config');
const setDate = require('./event-date');

module.exports = (theEvent, variant) => {
	const eventUrl = new URL(theEvent.eventUrl);
	const images = [theEvent.imageUrl, ...config.animationStaticImages];
	const showVariant = (variant === 'variant');

	eventUrl.searchParams.set('segmentId', theEvent.segmentId);
	eventUrl.searchParams.set('variant', showVariant.toString());

	return {
		dates: setDate(theEvent),
		id: theEvent.id,
		image1: images[0],
		image2: images[1],
		image3: images[2],
		link: eventUrl.toString(),
		location: theEvent.location,
		segmentId: theEvent.segmentId,
		showVariant,
		title: theEvent.title
	};
};
