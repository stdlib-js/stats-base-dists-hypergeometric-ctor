"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=l(function(k,f){
var o=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,g=require('@stdlib/utils-define-property/dist'),h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),m=require('@stdlib/stats-base-dists-hypergeometric-kurtosis/dist'),c=require('@stdlib/stats-base-dists-hypergeometric-mean/dist'),w=require('@stdlib/stats-base-dists-hypergeometric-mode/dist'),v=require('@stdlib/stats-base-dists-hypergeometric-skewness/dist'),q=require('@stdlib/stats-base-dists-hypergeometric-stdev/dist'),y=require('@stdlib/stats-base-dists-hypergeometric-variance/dist'),d=require('@stdlib/stats-base-dists-hypergeometric-cdf/dist'),b=require('@stdlib/stats-base-dists-hypergeometric-logpmf/dist'),E=require('@stdlib/stats-base-dists-hypergeometric-pmf/dist'),V=require('@stdlib/stats-base-dists-hypergeometric-quantile/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function M(e){return d(e,this.N,this.K,this.n)}function R(e){return b(e,this.N,this.K,this.n)}function T(e){return E(e,this.N,this.K,this.n)}function z(e){return V(e,this.N,this.K,this.n)}function n(e,r,s){if(!(this instanceof n))return new n(e,r,s);if(!o(e))throw new TypeError(i('12R93',e));if(!o(r))throw new TypeError(i('12R94',r));if(!o(s))throw new TypeError(i('12R95',s));if(r>e)throw new RangeError(i('12RCw'));if(s>e)throw new RangeError(i('12RCx'));return g(this,"N",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!o(t))throw new TypeError(i('12R96',t));if(r>t)throw new RangeError(i('12R97',r,t));if(s>t)throw new RangeError(i('12R97',s,t));e=t}}),g(this,"K",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!o(t))throw new TypeError(i('12R96',t));if(t>e)throw new RangeError(i('12R98',e,t));r=t}}),g(this,"n",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!o(t))throw new TypeError(i('12R96',t));if(t>e)throw new RangeError(i('12R98',e,t));s=t}}),this;}u(n.prototype,"kurtosis",function(){return m(this.N,this.K,this.n)});u(n.prototype,"mean",function(){return c(this.N,this.K,this.n)});u(n.prototype,"mode",function(){return w(this.N,this.K,this.n)});u(n.prototype,"skewness",function(){return v(this.N,this.K,this.n)});u(n.prototype,"stdev",function(){return q(this.N,this.K,this.n)});u(n.prototype,"variance",function(){return y(this.N,this.K,this.n)});h(n.prototype,"cdf",M);h(n.prototype,"logpmf",R);h(n.prototype,"pmf",T);h(n.prototype,"quantile",z);f.exports=n
});var N=p();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
