// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.4-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-kurtosis@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-mean@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-mode@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-skewness@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-stdev@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-variance@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-cdf@v0.2.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-logpmf@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-pmf@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-quantile@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function u(s,r,i){if(!(this instanceof u))return new u(s,r,i);if(!t(s))throw new TypeError(l("12R93",s));if(!t(r))throw new TypeError(l("12R94",r));if(!t(i))throw new TypeError(l("12R95",i));if(r>s)throw new RangeError(l("12RCw"));if(i>s)throw new RangeError(l("12RCx"));return e(this,"N",{configurable:!1,enumerable:!0,get:function(){return s},set:function(e){if(!t(e))throw new TypeError(l("12R96",e));if(r>e)throw new RangeError(l("12R97",r,e));if(i>e)throw new RangeError(l("12R97",i,e));s=e}}),e(this,"K",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!t(e))throw new TypeError(l("12R96",e));if(e>s)throw new RangeError(l("12R98",s,e));r=e}}),e(this,"n",{configurable:!1,enumerable:!0,get:function(){return i},set:function(e){if(!t(e))throw new TypeError(l("12R96",e));if(e>s)throw new RangeError(l("12R98",s,e));i=e}}),this}r(u.prototype,"kurtosis",(function(){return i(this.N,this.K,this.n)})),r(u.prototype,"mean",(function(){return n(this.N,this.K,this.n)})),r(u.prototype,"mode",(function(){return o(this.N,this.K,this.n)})),r(u.prototype,"skewness",(function(){return h(this.N,this.K,this.n)})),r(u.prototype,"stdev",(function(){return m(this.N,this.K,this.n)})),r(u.prototype,"variance",(function(){return d(this.N,this.K,this.n)})),s(u.prototype,"cdf",(function(t){return p(t,this.N,this.K,this.n)})),s(u.prototype,"logpmf",(function(t){return f(t,this.N,this.K,this.n)})),s(u.prototype,"pmf",(function(t){return c(t,this.N,this.K,this.n)})),s(u.prototype,"quantile",(function(t){return a(t,this.N,this.K,this.n)}));export{u as default};
//# sourceMappingURL=index.mjs.map