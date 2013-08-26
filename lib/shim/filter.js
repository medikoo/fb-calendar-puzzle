'use strict';

if (!Array.prototype.filter) {
	Array.prototype.filter = function (fun, thisp) {
		var i, length, result;

		if (typeof fun !== 'function') {
			throw new TypeError();
		}

		i = 0;
		length = this.length;
		result = [];
		while (i < length) {
			if (this.hasOwnProperty(i)) {
				if (fun.call(thisp, this[i], i, this)) {
					result.push(this[i]);
				}
			}
			++i;
		}
		return result;
	};
}
