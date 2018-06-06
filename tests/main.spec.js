const {JSDOM} = require('jsdom');
const fetchMock = require('fetch-mock');
const eventPromoInit = require('../src/main');

//fixtures
const conceptFixture = JSON.stringify(require('./fixtures/conceptFixture.json'));
const eventPromoDataEl = 	`<script class="js-event-promo-data" type="application/json">${conceptFixture}</script>
<div class="event-promo js-event-promo" ></div>`;
const noEventPromo = '<div class="no-event"></div>';

let dom = new JSDOM('<!DOCTYPE html><div class="event-promo-container"></div>');
let document = dom.window.document;


describe('Unit tests: main', () => {

	beforeEach(() => {

	});

	afterEach(() => {

	});

	describe('eventPromoInit method', () => {

		describe('error cases', () => {

			describe('when dom missing', () => {
				test('should throw error when .js-even-promo-data missing', async () => {
					const eventContainer = document.querySelector('.event-promo-container');
					eventContainer.innerHTML= noEventPromo;

					try {
						await eventPromoInit(document);
					}
					catch(err) {
						expect(err.message).toEqual('no dom for eventpromo');
					}

				});
				test('should throw error when .js-even-promo missing', async () => {
					const eventContainer = document.querySelector('.event-promo-container');
					eventContainer.innerHTML= noEventPromo;

					try {
						await eventPromoInit(document);
					}
					catch(err) {
						expect(err.message).toEqual('no dom for eventpromo');
					}
				});
			});
			describe('when concepts are invalid', () => {

				test('should throw error when concepts are empty', async () => {

					const eventContainer = document.querySelector('.event-promo-container');
					eventContainer.innerHTML= `<script class="js-event-promo-data" type="application/json">{}</script>
					<div class="event-promo js-event-promo" ></div>`;

					try {
						await eventPromoInit(document);
					} catch(err) {
						expect(err.message).toEqual('no valid concept ids for eventpromo');
					}

				});
				test('should throw error when concepts keys are empty', async () => {
					const eventContainer = document.querySelector('.event-promo-container');
					eventContainer.innerHTML= `<script class="js-event-promo-data" type="application/json">
					{"conceptIds": {}} </script>
					<div class="event-promo js-event-promo" ></div>`;

					try {
						await eventPromoInit(document);
					} catch(err) {
						expect(err.message).toEqual('no valid concept ids for eventpromo');
					}

				});
			});
			test('should throw error when api call fails', async () => {
				const eventContainer = document.querySelector('.event-promo-container');
					eventContainer.innerHTML= eventPromoDataEl;
					try {
						await eventPromoInit(document);
					} catch(err) {
						expect(err.message).toEqual('failed to fetch eventpromos');
					}

			});
			test('should throw error when api call returns no event', async () => {
				fetchMock.post('/eventpromo/api/', {
					'eventpromos': []
				});
				const eventContainer = document.querySelector('.event-promo-container');
					eventContainer.innerHTML= eventPromoDataEl;
					try {
						await eventPromoInit(document);
					} catch(err) {
						expect(err.message).toEqual('no eventpromo match for this event');
					}

			});
		});
		describe('success', () => {

			test('should update dom', () => {

			});
			test('should return true', () => {

			});
		});
	});
});
