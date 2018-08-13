const anEvent = require('../fixtures/liveEvent.json').eventpromo;
const imageArrayFixture = require('../fixtures/imagesArray');
const mapEventData = require('../../src/lib/mapEventData');

describe('mapEventData()', () => {
	test('test it extract teaser details from eventpayload', () => {
		const subject = mapEventData(anEvent);

		const expectedUrl = new URL(anEvent.eventUrl);
		const imageArray = [];
		expectedUrl.searchParams.set('segmentId', anEvent.segmentId);
		expectedUrl.searchParams.set('variant', subject.showVariant);

		expect(subject).toHaveProperty('id', anEvent.id);
		expect(subject).toHaveProperty('eventTitle', anEvent.title);
		expect(subject).toHaveProperty('mainImage', encodeURI(anEvent.imageUrl));
		expect(subject).toHaveProperty('eventUrl', expectedUrl.toString());
		expect(subject).toHaveProperty('eventDate', '12 June 2018');
		expect(subject).toHaveProperty('eventLocation', anEvent.location);
		expect(subject).toHaveProperty('segmentId', anEvent.segmentId);
		expect(subject).toHaveProperty('images');
		expect(subject).toHaveProperty('showVariant', false);
		expect(subject.images).toEqual(expect.arrayContaining(imageArray));
	});

	//Relelvant to AB test propbably ok to remove amend on conclusion.
	test('test provides the correct control properties', () => {

		const subject = mapEventData(anEvent);
		const expectedUrl = new URL(anEvent.eventUrl);
		const imageArray = [];
		expectedUrl.searchParams.set('segmentId', anEvent.segmentId);
		expectedUrl.searchParams.set('variant', subject.showVariant);

		expect(subject).toHaveProperty('showVariant', false);
		expect(subject.images).toEqual(expect.arrayContaining(imageArray));
	});

	test('test provides the correct control properties', () => {

		const subject = mapEventData(anEvent, 'variant');
		const expectedUrl = new URL(anEvent.eventUrl);
		expectedUrl.searchParams.set('segmentId', anEvent.segmentId);
		expectedUrl.searchParams.set('variant', subject.showVariant);

		expect(subject).toHaveProperty('showVariant', true);
		expect(subject.images).toEqual(expect.arrayContaining(imageArrayFixture));
	});

	test('test it sets date range if start and end dates differ', () => {
		anEvent.scheduledEndTime = '2018-06-14T07:00:00.000Z';
		const subject = mapEventData(anEvent);

		expect(subject).toHaveProperty('eventDate', '12 June - 14 June 2018');
	});
});
