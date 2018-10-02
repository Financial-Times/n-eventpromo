const fetchMock = require('fetch-mock');
const config = require('../../src/config');
const eventpromoClient = require('../../src/lib/event-promo-client');
const concepts = require('../fixtures/conceptFixture');
const liveEvent = require('../fixtures/liveEvent');

afterEach(() => {
	fetchMock.restore();
});

describe('Unit tests: getEventsFromApi()', async () => {
	test('should get events on success', async () => {
		fetchMock.post(config.apiPath, liveEvent);
		const subject = await eventpromoClient.getEventsFromApi(concepts);
		expect(subject).toEqual(liveEvent);
	});

	test('should get events on success when called with no concepts', async () => {
		fetchMock.post(config.apiPath, liveEvent);
		const subject = await eventpromoClient.getEventsFromApi();
		expect(subject).toEqual(liveEvent);
	});

	describe('should raise errors', async () => {

		test('when we fail to get response from api', async () => {
			const error = new Error('some network failure');
			fetchMock.post(config.apiPath, {throws: error});

			let hasError = false;
			try {
				await eventpromoClient.getEventsFromApi(concepts);
			} catch (e) {
				hasError = true;
				expect(e.message).toEqual('failed to fetch eventpromos from enventpromo-api');
			}
			expect(hasError).toEqual(true);
		});

		test('when response from api cannot be parsed', async () => {
			const fakeResponse = { status: 200, body: 'invalid json data'};
			fetchMock.post(config.apiPath, fakeResponse);

			let hasError = false;
			try {
				await eventpromoClient.getEventsFromApi(concepts);
			} catch (e) {
				hasError = true;
				expect(e.message).toMatch('failed to parse response from enventpromo-api');
			}
			expect(hasError).toEqual(true);
		});
	});
});

describe('Unit tests: getReaderHistoryEventsFromApi()', async () => {
	test('should get events on success', async () => {
		const uuid = '0000000';
		const fakeResponse = { status: 200, body: 'an event'};
		fetchMock.post(config.apiPath, fakeResponse);
		const subject = await eventpromoClient.getReaderHistoryEventsFromApi(uuid);
		expect(subject).toEqual(fakeResponse);
	});
});
