const config = require('../config');

async function getEventsFromApi (eventConcepts = [], uuid = null) {
	const fetchOptions = {
		headers: {
			'accept': 'application/json',
			'content-type': 'application/json'
		},
		method: 'POST'
	};
	let fetchResponse;
	let apiPath = config.apiPath;
	let data = eventConcepts;

	if(uuid) {
		apiPath = config.apiHistoryPath,
		data = uuid;
	}
	try {
		fetchResponse = await fetch(apiPath, {
			body: JSON.stringify(data),
			fetchOptions
		});
	}
	catch (err) {
		throw new Error('failed to fetch eventpromos from enventpromo-api');
	}

	try {
		const jsonResponse = await fetchResponse.json();
		return jsonResponse;
	}
	catch (err) {
		throw new Error('failed to parse response from enventpromo-api');
	}
}

async function readerHistoryEventsFromApi (uuid) {
	return await getEventsFromApi([],uuid);
}

module.exports = {
	getEventsFromApi,
	readerHistoryEventsFromApi
};
