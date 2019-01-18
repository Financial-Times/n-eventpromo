import React from 'react';
import {Eventpromo} from '@financial-times/x-eventpromo';
import xEngine from '@financial-times/x-engine';
import {getEventsFromApi} from './lib/event-promo-client';
import {getMappedData} from './lib/mapEventData';
import {hasValidConcept} from './lib/hasValidConcept';

async function eventPromoInit (rootEl) {
	const promoDataSelector = rootEl.querySelector('.js-event-promo-data');
	const promoSlotSelector = rootEl.querySelector('.js-event-promo');

	if (!promoDataSelector || !promoSlotSelector) {
		throw new Error('no dom for eventpromo');
	}

	const concepts = JSON.parse(promoDataSelector.innerHTML);
	if (!concepts || !hasValidConcept(concepts)) {
		throw new Error('no valid concept ids for eventpromo');
	}

	let eventpromoClientResponse;
	try {
		eventpromoClientResponse = await getEventsFromApi(concepts);
	}
	catch (err) {
		throw new Error('failed to fetch eventpromos');
	}

	if (!eventpromoClientResponse.hasOwnProperty('eventpromo')
		|| !typeof eventpromoClientResponse.eventpromo === 'object'
		|| Object.keys(eventpromoClientResponse.eventpromo) === []
	) {
		throw new Error('no eventpromo match for this event');
	}

    const mappedEvent = getMappedData(eventpromoClientResponse.eventpromo);

	const promoElement = <Eventpromo isPaused={false} {...mappedEvent} />;
    xEngine.render(promoElement, promoSlotSelector);

	return mappedEvent;
}

export {
	eventPromoInit
};