const fetchMock = require('fetch-mock');
const config = require('../../src/lib/config');
const {getEventsFromApi} = require('../../src/lib/event-promo-client');
const concepts = require('../fixtures/conceptFixture');
const liveEvent = require('../fixtures/liveEvent');

afterEach(() => {
	fetchMock.restore();
});

describe('Unit tests: getEventsFromApi()', async () => {
	test('should get events on success', async () => {
		fetchMock.post(config.get('eventpromoDataSourceUrl'), liveEvent);
		const subject = await getEventsFromApi(concepts);
		expect(subject).toEqual(liveEvent);
	});

	test('should get events on success when called with no concepts', async () => {
		fetchMock.post(config.get('eventpromoDataSourceUrl'), liveEvent);
		const subject = await getEventsFromApi();
		expect(subject).toEqual(liveEvent);
	});

	describe('should raise errors', async () => {

		test('when we fail to get response from api', async () => {
			const error = new Error('some network failure');
			fetchMock.post(config.get('eventpromoDataSourceUrl'), {throws: error});

			let hasError = false;
			try {
				await getEventsFromApi(concepts);
			} catch (e) {
				hasError = true;
				expect(e.message).toMatch(/failed to fetch/);
			}
			expect(hasError).toEqual(true);
		});

		test('when response from api cannot be parsed', async () => {
			const fakeResponse = {status: 200, body: 'invalid json data'};
			fetchMock.post(config.get('eventpromoDataSourceUrl'), fakeResponse);

			let hasError = false;
			try {
				await getEventsFromApi(concepts);
			} catch (e) {
				hasError = true;
				expect(e.message).toMatch(/failed to parse response/);
			}
			expect(hasError).toEqual(true);
		});
	});
});
