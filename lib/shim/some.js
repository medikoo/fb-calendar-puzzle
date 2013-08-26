'use strict';

if (!Array.prototype.some) {
	Array.prototype.some = function (fun, thisp) {
		var i, length;

		if (typeof fun !== 'function') {
			throw new TypeError();
		}

		i = 0;
		length = this.length;
		while (i < length) {
			if (this.hasOwnProperty(i)) {
				if (fun.call(thisp, this[i], i, this)) {
					return true;
				}
			}
			++i;
		}
		return false;
	};
}
