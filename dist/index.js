/** @license Apache-2.0 */

'use strict';

/**
* Hypergeometric distribution constructor.
*
* @module @stdlib/stats-base-dists-hypergeometric-ctor
*
* @example
* var Hypergeometric = require( '@stdlib/stats-base-dists-hypergeometric-ctor' );
*
* var hypergeometric = new Hypergeometric( 40, 10, 8 );
*
* var y = hypergeometric.cdf( 2.8 );
* // returns ~0.688
*
* var mode = hypergeometric.mode;
* // returns 2.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
