// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-kurtosis@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-mean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-mode@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-skewness@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-stdev@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-variance@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-cdf@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-logpmf@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-pmf@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-hypergeometric-quantile@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var g=t.isPrimitive,c=e,b=s,v=i,j=n,y=r,w=o,N=a,x=u,K=m,E=d,V=h,q=l,M=p,R=f;function T(t,e,s){if(!(this instanceof T))return new T(t,e,s);if(!g(t))throw new TypeError(R("invalid argument. Population size `N` must be a nonnegative integer. Value: `%s`.",t));if(!g(e))throw new TypeError(R("invalid argument. Subpopulation size `K` must be a nonnegative integer. Value: `%s`.",e));if(!g(s))throw new TypeError(R("invalid argument. Number of draws `n` must be a nonnegative integer. Value: `%s`.",s));if(e>t)throw new RangeError("invalid arguments. Subpopulation size `K` must be less than or equal to `N`.");if(s>t)throw new RangeError("invalid arguments. Number of draws `n` must be less than or equal to `N`.");return c(this,"N",{configurable:!1,enumerable:!0,get:function(){return t},set:function(i){if(!g(i))throw new TypeError(R("invalid value. Must be a nonnegative integer. Value: `%s`.",i));if(e>i)throw new RangeError(R("invalid value. Must be larger than or equal to `%s`. Value: `%u`.","K",i));if(s>i)throw new RangeError(R("invalid value. Must be larger than or equal to `%s`. Value: `%u`.","n",i));t=i}}),c(this,"K",{configurable:!1,enumerable:!0,get:function(){return e},set:function(s){if(!g(s))throw new TypeError(R("invalid value. Must be a nonnegative integer. Value: `%s`.",s));if(s>t)throw new RangeError(R("invalid value. Must be less than or equal to `%s`. Value: `%u`.","N",s));e=s}}),c(this,"n",{configurable:!1,enumerable:!0,get:function(){return s},set:function(e){if(!g(e))throw new TypeError(R("invalid value. Must be a nonnegative integer. Value: `%s`.",e));if(e>t)throw new RangeError(R("invalid value. Must be less than or equal to `%s`. Value: `%u`.","N",e));s=e}}),this}v(T.prototype,"kurtosis",(function(){return j(this.N,this.K,this.n)})),v(T.prototype,"mean",(function(){return y(this.N,this.K,this.n)})),v(T.prototype,"mode",(function(){return w(this.N,this.K,this.n)})),v(T.prototype,"skewness",(function(){return N(this.N,this.K,this.n)})),v(T.prototype,"stdev",(function(){return x(this.N,this.K,this.n)})),v(T.prototype,"variance",(function(){return K(this.N,this.K,this.n)})),b(T.prototype,"cdf",(function(t){return E(t,this.N,this.K,this.n)})),b(T.prototype,"logpmf",(function(t){return V(t,this.N,this.K,this.n)})),b(T.prototype,"pmf",(function(t){return q(t,this.N,this.K,this.n)})),b(T.prototype,"quantile",(function(t){return M(t,this.N,this.K,this.n)}));var k=T;export{k as default};
//# sourceMappingURL=index.mjs.map
