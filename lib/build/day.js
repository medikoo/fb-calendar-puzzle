'use strict';

// Builds single day events view

var buildLegend = require('./day-legend')
  , buildEvents = require('./day-events')

module.exports = function (container, events) {
	container.appendChild(buildLegend(9, 21));
	container.appendChild(buildEvents(events));
};
