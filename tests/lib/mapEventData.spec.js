const anEvent = require('../fixtures/liveEvent.json').eventpromo;
const imageArrayFixture = require('../fixtures/imagesArray');
const {getMappedData} = require('../../src/lib/mapEventData');

describe('mapEventData()', () => {
	test('test it extract teaser details from eventpayload', () => {
		const subject = getMappedData(anEvent);

		const expectedUrl = new URL(anEvent.eventUrl);

		expectedUrl.searchParams.set('segmentId', anEvent.segmentId);

		expect(subject).toHaveProperty('id', anEvent.id);
		expect(subject).toHaveProperty('strapline', anEvent.strapline);
		expect(subject).toHaveProperty('title', anEvent.title);
		expect(subject).toHaveProperty('images', imageArrayFixture);
		expect(subject).toHaveProperty('link', expectedUrl.toString());
		expect(subject).toHaveProperty('dates', '12 June 2018');
		expect(subject).toHaveProperty('location', anEvent.location);
		expect(subject).toHaveProperty('segmentId', anEvent.segmentId);
		expect(subject).toHaveProperty('images');
		expect(subject.images).toEqual(expect.arrayContaining(imageArrayFixture));
	});

	test('test it sets date range if start and end dates differ', () => {
		anEvent.scheduledEndTime = '2018-06-14T07:00:00.000Z';
		const subject = getMappedData(anEvent);

		expect(subject).toHaveProperty('dates', '12 June - 14 June 2018');
	});
});
