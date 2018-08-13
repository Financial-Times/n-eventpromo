const config = require('../config');
const setDate = require('./event-date');

module.exports = (theEvent, variant) => {
	const eventUrl = new URL(theEvent.eventUrl);
    const images = [...config.animationStaticImages, theEvent.imageUrl];
	const showVariant = (variant === 'variant');

	eventUrl.searchParams.set('segmentId', theEvent.segmentId);
	eventUrl.searchParams.set('variant', showVariant.toString());

    return {
        id: theEvent.id,
        eventTitle: theEvent.title,
        mainImage: encodeURI(theEvent.imageUrl),
        eventDate: setDate(theEvent),
        eventUrl: eventUrl.toString(),
        segmentId: theEvent.segmentId,
        eventLocation: theEvent.location,
        images,
        showVariant,
        strapline: theEvent.strapline
    };
};
