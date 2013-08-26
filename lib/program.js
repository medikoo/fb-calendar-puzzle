'use strict';

// Initial program

// Setup ES5 shims for older implementations
require('./shim/keys');
require('./shim/for-each');
require('./shim/filter');
require('./shim/some');

// Expose build function
window.LAYOUT = require('./build/day');
