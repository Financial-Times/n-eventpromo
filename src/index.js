import React from 'react';
import renderToString from 'preact-render-to-string';

import { h } from '@financial-times/x-engine';
import { Eventpromo } from '@financial-times/x-eventpromo';
import { Teaser } from '@financial-times/x-teaser';
//import {Eventpromo} from "@financial-times/x-eventpromo/src/Eventpromo";

import eventpromoClient from './lib/event-promo-client';
import mapEventData from './lib/mapEventData';
import hasValidConcepts from './lib/hasValidConcept';
import animationToggle from './lib/animation-control';

// import template from '../templates/inarticle_dark.html';

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

	if (! eventpromoClientResponse.hasOwnProperty('eventpromo')
		|| ! typeof eventpromoClientResponse.eventpromo === 'object'
		|| Object.keys(eventpromoClientResponse.eventpromo) === 0
	) {
		throw new Error('no eventpromo match for this event');
	}

	const mappedEvent = mapEventData(eventpromoClientResponse.eventpromo, showVariant);
	console.log(mappedEvent);
	const promoElement = Eventpromo(mappedEvent);
	promoSlotSelector.innerHTML = renderToString(promoElement);

	animationToggle();

	return true;
}

module.exports = eventPromoInit;
