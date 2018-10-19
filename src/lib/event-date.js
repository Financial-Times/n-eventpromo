const oDate = require('o-date');

function getFormattedDate (theEvent) {
	const year = oDate.format(theEvent.scheduledStartTime, 'yyyy');
	const eventStart = oDate.format(theEvent.scheduledStartTime, 'dd MMMM');
	const eventEnd = oDate.format(theEvent.scheduledEndTime, 'dd MMMM');
	if (eventStart === eventEnd) {
		return `${eventStart} ${year}`;
	} else {
		return `${eventStart} - ${eventEnd} ${year}`;
	}
};

module.exports = {
    getFormattedDate
};