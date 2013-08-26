'use strict';

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function (fun, thisp) {
		var i, length;

		if (typeof fun !== 'function') {
			throw new TypeError();
		}

		i = 0;
		length = this.length;
		while (i < length) {
			if (this.hasOwnProperty(i)) {
				fun.call(thisp, this[i], i, this);
			}
			++i;
		}
	};
}
