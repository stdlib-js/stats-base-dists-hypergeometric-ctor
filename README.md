<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Hypergeometric

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Hypergeometric distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-hypergeometric-ctor
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var Hypergeometric = require( '@stdlib/stats-base-dists-hypergeometric-ctor' );
```

#### Hypergeometric( N, K, n )

Returns a [hypergeometric][hypergeometric-distribution] distribution object with parameters `N` (population size), `K` (subpopulation size), and `n` (number of draws).

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var mu = hypergeometric.mean;
// returns 3.75
```

* * *

## hypergeometric

A [hypergeometric][hypergeometric-distribution] distribution object has the following properties and methods...

### Writable Properties

#### hypergeometric.N

Population size of the distribution. `N` **must** be a nonnegative integer that is both larger than or equal to `K` and `n`.

```javascript
var hypergeometric = new Hypergeometric( 100, 50, 20 );

var N = hypergeometric.N;
// returns 100.0

hypergeometric.N = 60;

N = hypergeometric.N;
// returns 60.0
```

#### hypergeometric.K

Subpopulation size of the distribution. `K` **must** be a nonnegative integer that is smaller than or equal to `N`.

```javascript
var hypergeometric = new Hypergeometric( 100, 50, 20 );

var K = hypergeometric.K;
// returns 50.0

hypergeometric.K = 30;

K = hypergeometric.K;
// returns 30.0
```

<!--lint disable no-duplicate-headings-in-section -->

#### hypergeometric.n

Number of draws of the distribution. `n` **must** be a nonnegative integer that is smaller than or equal to `N`.

```javascript
var hypergeometric = new Hypergeometric( 100, 50, 20 );

var n = hypergeometric.n;
// returns 20.0

hypergeometric.n = 80;

n = hypergeometric.n;
// returns 80.0
```

* * *

### Computed Properties

#### Hypergeometric.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var kurtosis = hypergeometric.kurtosis;
// returns ~-0.276
```

#### Hypergeometric.prototype.mean

Returns the [expected value][expected-value].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var mu = hypergeometric.mean;
// returns ~3.75
```

#### Hypergeometric.prototype.mode

Returns the [mode][mode].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var mode = hypergeometric.mode;
// returns 4.0
```

#### Hypergeometric.prototype.skewness

Returns the [skewness][skewness].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var skewness = hypergeometric.skewness;
// returns ~-0.323
```

#### Hypergeometric.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var s = hypergeometric.stdev;
// returns ~0.86
```

#### Hypergeometric.prototype.variance

Returns the [variance][variance].

```javascript
var hypergeometric = new Hypergeometric( 20, 15, 5 );

var s2 = hypergeometric.variance;
// returns ~0.74
```

* * *

### Methods

#### Hypergeometric.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var hypergeometric = new Hypergeometric( 8, 2, 4 );

var y = hypergeometric.cdf( 0.5 );
// returns ~0.214
```

#### Hypergeometric.prototype.logpmf( x )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF).

```javascript
var hypergeometric = new Hypergeometric( 8, 2, 4 );

var y = hypergeometric.logpmf( 2.0 );
// returns ~-1.54
```

#### Hypergeometric.prototype.pmf( x )

Evaluates the [probability mass function][pmf] (PMF).

```javascript
var hypergeometric = new Hypergeometric( 8, 2, 4 );

var y = hypergeometric.pmf( 2.0 );
// returns ~0.214
```

#### Hypergeometric.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var hypergeometric = new Hypergeometric( 8, 2, 4 );

var y = hypergeometric.quantile( 0.8 );
// returns 2.0

y = hypergeometric.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Hypergeometric = require( '@stdlib/stats-base-dists-hypergeometric-ctor' );

var hypergeometric = new Hypergeometric( 100, 50, 20 );

var mu = hypergeometric.mean;
// returns 10.0

var mode = hypergeometric.mode;
// returns 10.0

var s2 = hypergeometric.variance;
// returns ~4.04

var y = hypergeometric.cdf( 10.5 );
// returns ~0.598
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-hypergeometric-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-hypergeometric-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-hypergeometric-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-hypergeometric-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-hypergeometric-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-hypergeometric-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-hypergeometric-ctor/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-hypergeometric-ctor/main/LICENSE

[hypergeometric-distribution]: https://en.wikipedia.org/wiki/Hypergeometric_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
