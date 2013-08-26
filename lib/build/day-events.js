'use strict';

// Builds event objects for events view

var layOutDay = require('../lay-out-day')

  , width = 600
  , padding = 10;

module.exports = function (events) {
	var el, i, event, next, html;

	el = document.createElement('ul');
	el.className = 'events';
	events = layOutDay(events);

	html = '';
	for (i = 0; event = events[i]; ++i) {
		next = events[i + 1];
		html += '<li style="' +
			'top: ' + event.top + 'px; ' +
			'left: ' + (padding + event.left) + 'px; ' +
			'width: ' + event.width + 'px; ' +
			'height: ' + (event.end - event.start) + 'px; ' +
			'"><div class="deco"><p>Event #' + event.id + '</p></div></li>';
	}
	el.innerHTML = html;
	return el;
};
