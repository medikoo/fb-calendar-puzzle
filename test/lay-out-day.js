'use strict';

module.exports = function (t, a) {
	var x, r;

	a.deep(t([]), [], "No events");

	return {
		"1 event": function (a) {
			r = t([
				{ start: 60, end: 120 }
			]);
			a(r.length, 1, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 600 }
			]);
		},
		"2 not collided": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 150, end: 200 }
			]);
			a(r.length, 2, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 600 },
				{ start: 150, end: 200, left: 0, top: 150, width: 600 }
			]);
		},
		"2 one right after another": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 120, end: 200 }
			]);
			a(r.length, 2, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 600 },
				{ start: 120, end: 200, left: 0, top: 120, width: 600 }
			]);
		},
		"2 one minute collision": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 119, end: 200 }
			]);
			a(r.length, 2, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 300 },
				{ start: 119, end: 200, left: 300, top: 119, width: 300 }
			]);
		},
		"2 colliding": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 90, end: 200 }
			]);
			a(r.length, 2, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 300 },
				{ start: 90, end: 200, left: 300, top: 90, width: 300 }
			]);
		},
		"2 same": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 60, end: 120 }
			]);
			a(r.length, 2, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 300 },
				{ start: 60, end: 120, left: 300, top: 60, width: 300 }
			]);
		},
		"3 not colliding": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 150, end: 200 },
				{ start: 250, end: 300 }
			]);
			a(r.length, 3, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 600 },
				{ start: 150, end: 200, left: 0, top: 150, width: 600 },
				{ start: 250, end: 300, left: 0, top: 250, width: 600 }
			]);
		},
		"3 right after another": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 120, end: 200 },
				{ start: 200, end: 300 }
			]);
			a(r.length, 3, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 600 },
				{ start: 120, end: 200, left: 0, top: 120, width: 600 },
				{ start: 200, end: 300, left: 0, top: 200, width: 600 }
			]);
		},
		"3, 1 & 2 colliding": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 119, end: 200 },
				{ start: 200, end: 300 }
			]);
			a(r.length, 3, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 300 },
				{ start: 119, end: 200, left: 300, top: 119, width: 300 },
				{ start: 200, end: 300, left: 0, top: 200, width: 600 }
			]);
		},
		"3 all colliding": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 90, end: 200 },
				{ start: 100, end: 300 }
			]);
			a(r.length, 3, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 200 },
				{ start: 90, end: 200, left: 200, top: 90, width: 200 },
				{ start: 100, end: 300, left: 400, top: 100, width: 200 }
			]);
		},
		"3, 1 & 2 and 2 & 3 colliding": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 100, end: 200 },
				{ start: 150, end: 300 }
			]);
			a(r.length, 3, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 300 },
				{ start: 100, end: 200, left: 300, top: 100, width: 300 },
				{ start: 150, end: 300, left: 0, top: 150, width: 300 }
			]);
		},
		"4, Two uneven collision lines for one event": function (a) {
			r = t([
				{ start: 60, end: 120 },
				{ start: 90, end: 200 },
				{ start: 110, end: 500 },
				{ start: 300, end: 400 }
			]);
			a(r.length, 4, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 200 },
				{ start: 90, end: 200, left: 200, top: 90, width: 200 },
				{ start: 110, end: 500, left: 400, top: 110, width: 200 },
				{ start: 300, end: 400, left: 0, top: 300, width: 200 }
			]);
		},
		"6, Three uneven collision lines for one event": function (a) {
			// Shown on layout #4
			r = t([
				{ start: 60, end: 120 },
				{ start: 90, end: 600 },

				{ start: 150, end: 300 },
				{ start: 250, end: 650 },

				{ start: 500, end: 650 },
				{ start: 530, end: 590 }

			]);
			a(r.length, 6, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				{ start: 60, end: 120, left: 0, top: 60, width: 150 },
				{ start: 90, end: 600, left: 150, top: 90, width: 150 },

				{ start: 150, end: 300, left: 0, top: 150, width: 150 },
				{ start: 250, end: 650, left: 300, top: 250, width: 150 },

				{ start: 500, end: 650, left: 0, top: 500, width: 150 },
				{ start: 530, end: 590, left: 450, top: 530, width: 150 }
			]);
		},
		"16: 1, 2 colliding, 3 ( 1 & 2, 2 & 3 colliding), 4 Uneven, 6 uneven": function (a) {
			// Shown on layout #5
			r = t([
				// 4 uneven
				{ start: 10, end: 90 },
				{ start: 20, end: 80 },
				{ start: 70, end: 180 },
				{ start: 100, end: 180 },

				// 2 colliding
				{ start: 200, end: 270 },
				{ start: 230, end: 290 },

				// 1
				{ start: 300, end: 340 },

				// 6 uneven
				{ start: 350, end: 400 },
				{ start: 370, end: 580 },

				{ start: 410, end: 480 },
				{ start: 450, end: 590 },

				{ start: 500, end: 595 },
				{ start: 530, end: 590 },

				// 3 ( 1 & 2, 2 & 3 colliding)
				{ start: 600, end: 660 },
				{ start: 650, end: 690 },
				{ start: 670, end: 710 }

			]);
			a(r.length, 16, "Result length");
			r.forEach(function (event, i) {
				a.deep(event, this[i], '#' + i);
			}, [
				// 4 uneven
				{ start: 10, end: 90, top: 10, left: 0, width: 200 },
				{ start: 20, end: 80, top: 20, left: 200, width: 200 },
				{ start: 70, end: 180, top: 70, left: 400, width: 200 },
				{ start: 100, end: 180, top: 100, left: 0, width: 200 },

				// 2 colliding
				{ start: 200, end: 270, top: 200, left: 0, width: 300 },
				{ start: 230, end: 290, top: 230, left: 300, width: 300 },

				// 1
				{ start: 300, end: 340, top: 300, left: 0, width: 600 },

				// 6 uneven
				{ start: 350, end: 400, top: 350, left: 0, width: 150 },
				{ start: 370, end: 580, top: 370, left: 150, width: 150 },

				{ start: 410, end: 480, top: 410, left: 0, width: 150 },
				{ start: 450, end: 590, top: 450, left: 300, width: 150 },

				{ start: 500, end: 595, top: 500, left: 0, width: 150 },
				{ start: 530, end: 590, top: 530, left: 450, width: 150 },

				// 3 ( 1 & 2, 2 & 3 colliding)
				{ start: 600, end: 660, top: 600, left: 0, width: 300 },
				{ start: 650, end: 690, top: 650, left: 300, width: 300 },
				{ start: 670, end: 710, top: 670, left: 0, width: 300 }
			]);
		}
	};
};
