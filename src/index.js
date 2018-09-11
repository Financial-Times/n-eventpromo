import renderToString from 'preact-render-to-string/jsx';
import {Eventpromo} from '@financial-times/x-eventpromo';
import eventpromoClient from './lib/event-promo-client';
import mapEventData from './lib/mapEventData';
import hasValidConcepts from './lib/hasValidConcept';
//import animationToggle from './lib/animation-control';

async function eventPromoInit (rootEl) {
	const promoDataSelector = rootEl.querySelector('.js-event-promo-data');
	const promoSlotSelector = rootEl.querySelector('.js-event-promo');
	const showVariant = window.FT.flags.eventPromoVariantTest || false;

	if (!promoDataSelector || !promoSlotSelector) {
		throw new Error('no dom for eventpromo');
	}

	const concepts = JSON.parse(promoDataSelector.innerHTML);
	if (!concepts || !hasValidConcepts(concepts)) {
		throw new Error('no valid concept ids for eventpromo');
	}

	let eventpromoClientResponse;
	try {
		eventpromoClientResponse = await eventpromoClient.getEventsFromApi(concepts);
	}
	catch (err) {
		throw new Error('failed to fetch eventpromos');
	}

	if (!eventpromoClientResponse.hasOwnProperty('eventpromo')
		|| !typeof eventpromoClientResponse.eventpromo === 'object'
		|| Object.keys(eventpromoClientResponse.eventpromo) === 0
	) {
		throw new Error('no eventpromo match for this event');
	}

    const mappedEvent = mapEventData(eventpromoClientResponse.eventpromo, showVariant);
    const promoElement = Eventpromo(mappedEvent);
    const stringPromoElement = renderToString(promoElement, {}, {pretty:false});

	promoSlotSelector.innerHTML = stringPromoElement;

	// animationToggle();

	return true;
}

module.exports = eventPromoInit;
