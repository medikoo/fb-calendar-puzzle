'use strict';

if (!Object.keys) {
	// Basic and not perfectly safe implementation
	// (safe enough for this task)

	Object.keys = function (obj) {
		var keys = [];
		for (var name in obj) {
			if (obj.hasOwnProperty(name)) {
				keys.push(name);
			}
		}
		return keys;
	};
}
