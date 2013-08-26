'use strict';

// Builds time legend for events view

module.exports = function (shour, ehour) {
	var el, hour, isPM, html;

	el = document.createElement('ul');
	el.className = 'legend';
	html = '';
	while (shour <= ehour) {
		hour = shour%12;
		if (hour != shour) {
			isPM = true;
		}
		if (!hour) {
			hour = 12;
		}
		html += '<li><span class="hour">' + hour + ':00</span> ' +
			(isPM ? 'P' : 'A') + 'M</li>';
		if ((shour + 0.5) <= ehour) {
			html += '<li>' + hour + ':30</li>';
		}
		++shour;
	}
	el.innerHTML = html;
	return el;
};
