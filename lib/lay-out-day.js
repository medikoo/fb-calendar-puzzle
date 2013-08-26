'use strict';

// Calculates events layout for single day

var keys  = Object.keys
  , round = Math.round

  , numberCompare, startCompare, collidingCompare
  , copy, concurrent, setWidth, equalLeft
  , width;

width = 600;
copy = function (arr) {
	return arr.slice(0);
};
numberCompare = function (a, b) {
	return a - b;
};
startCompare = function (a, b) {
	return numberCompare(a.start, b.start);
};
concurrent = function (event) {
	return event.end > this.start;
};
collidingCompare = function (a, b) {
	return numberCompare(b.colliding.length, a.colliding.length);
};
setWidth = function (event) {
	return this.width = event.width;
};
equalLeft = function (event) {
	return event.left == this;
};

module.exports = function (events) {
	var map, current, mapKeys, input;

	// Do not alter order of input array
	input = events;
	events = copy(events);

	// Build events map
	current = []; map = { 0: [] };
	events.sort(startCompare).forEach(function (event) {
		current = current.filter(concurrent, event);
		current.push(event);
		map[event.start] = copy(current);
	});

	// For each event find highest number of events that it collides with
	mapKeys = keys(map).sort(numberCompare);
	events.forEach(function (event) {
		event.colliding = [];
		while (mapKeys[0] < event.start) {
			mapKeys.shift();
		}
		mapKeys.some(function (key) {
			if (key >= event.end) {
				return true;
			}
			if (event.colliding.length < map[key].length) {
				event.colliding = map[key];
			}
		});
	});

	// Set width of each event object (based on maximum colliding events count)
	events.sort(collidingCompare).forEach(function (event) {
		if (!event.colliding.some(setWidth, event)) {
			event.width = round(width/event.colliding.length);
		}
		// We no longer need collision map
		delete event.colliding;
	});

	// Calculate left & top position for each event object
	current = [];
	events.sort(startCompare).forEach(function (event) {
		var left;
		current = current.filter(concurrent, event);

		// top
		event.top = event.start;

		// left
		left = 0;
		while (current.some(equalLeft, left)) {
			left += event.width;
		}
		event.left = left;
		current.push(event);
	});

	return input;
};
