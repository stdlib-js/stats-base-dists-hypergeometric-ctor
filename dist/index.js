"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=l(function(k,f){"use strict";var o=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,g=require("@stdlib/utils-define-property"),h=require("@stdlib/utils-define-nonenumerable-read-only-property"),u=require("@stdlib/utils-define-nonenumerable-read-only-accessor"),m=require("@stdlib/stats-base-dists-hypergeometric-kurtosis"),c=require("@stdlib/stats-base-dists-hypergeometric-mean"),w=require("@stdlib/stats-base-dists-hypergeometric-mode"),v=require("@stdlib/stats-base-dists-hypergeometric-skewness"),q=require("@stdlib/stats-base-dists-hypergeometric-stdev"),y=require("@stdlib/stats-base-dists-hypergeometric-variance"),d=require("@stdlib/stats-base-dists-hypergeometric-cdf"),b=require("@stdlib/stats-base-dists-hypergeometric-logpmf"),E=require("@stdlib/stats-base-dists-hypergeometric-pmf"),V=require("@stdlib/stats-base-dists-hypergeometric-quantile"),i=require("@stdlib/string-format");function M(e){return d(e,this.N,this.K,this.n)}function R(e){return b(e,this.N,this.K,this.n)}function T(e){return E(e,this.N,this.K,this.n)}function z(e){return V(e,this.N,this.K,this.n)}function n(e,r,s){if(!(this instanceof n))return new n(e,r,s);if(!o(e))throw new TypeError(i("invalid argument. Population size must be a nonnegative integer. Value: `%s`.",e));if(!o(r))throw new TypeError(i("invalid argument. Subpopulation size must be a nonnegative integer. Value: `%s`.",r));if(!o(s))throw new TypeError(i("invalid argument. Number of draws must be a nonnegative integer. Value: `%s`.",s));if(r>e)throw new RangeError("invalid arguments. Subpopulation size must be less than or equal to the population size.");if(s>e)throw new RangeError("invalid arguments. Number of draws must be less than or equal to the population size.");return g(this,"N",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!o(t))throw new TypeError(i("invalid assignment. Must be a nonnegative integer. Value: `%s`.",t));if(r>t)throw new RangeError(i("invalid assignment. Must be larger than or equal to %u. Value: `%u`.",r,t));if(s>t)throw new RangeError(i("invalid assignment. Must be larger than or equal to %u. Value: `%u`.",s,t));e=t}}),g(this,"K",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!o(t))throw new TypeError(i("invalid assignment. Must be a nonnegative integer. Value: `%s`.",t));if(t>e)throw new RangeError(i("invalid assignment. Must be less than or equal to %u. Value: `%u`.",e,t));r=t}}),g(this,"n",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!o(t))throw new TypeError(i("invalid assignment. Must be a nonnegative integer. Value: `%s`.",t));if(t>e)throw new RangeError(i("invalid assignment. Must be less than or equal to %u. Value: `%u`.",e,t));s=t}}),this}u(n.prototype,"kurtosis",function(){return m(this.N,this.K,this.n)});u(n.prototype,"mean",function(){return c(this.N,this.K,this.n)});u(n.prototype,"mode",function(){return w(this.N,this.K,this.n)});u(n.prototype,"skewness",function(){return v(this.N,this.K,this.n)});u(n.prototype,"stdev",function(){return q(this.N,this.K,this.n)});u(n.prototype,"variance",function(){return y(this.N,this.K,this.n)});h(n.prototype,"cdf",M);h(n.prototype,"logpmf",R);h(n.prototype,"pmf",T);h(n.prototype,"quantile",z);f.exports=n});var N=p();module.exports=N;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
