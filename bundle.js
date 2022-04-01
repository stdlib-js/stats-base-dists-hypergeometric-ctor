// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).Hypergeometric=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var t=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:function(){return r[n]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,f=i.__lookupGetter__,c=i.__lookupSetter__;var s=function(r,e,n){var t,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===a.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((s="value"in n)&&(f.call(r,e)||c.call(r,e)?(t=r.__proto__,r.__proto__=i,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),l="get"in n,v="set"in n,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,n.get),v&&u&&u.call(r,e,n.set),r},l=t,v=s,p=n()?l:v,g=p;var h=function(r,e,n){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})},d=h;var y=function(r){return"number"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var m=function(){return w&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,N=b;var E=function(r){return N.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},A="function"==typeof Symbol?Symbol.toStringTag:"",_=P,T=A,V=b;var O=E,x=function(r){var e,n,t;if(null==r)return V.call(r);n=r[T],e=_(r,T);try{r[T]=void 0}catch(e){return V.call(r)}return t=V.call(r),e?r[T]=n:delete r[T],t},S=m()?x:O,k=Number,U=k.prototype.toString;var I=S,M=k,F=function(r){try{return U.call(r),!0}catch(r){return!1}},R=m();var K=function(r){return"object"==typeof r&&(r instanceof M||(R?F(r):"[object Number]"===I(r)))},$=y,G=K;var C=d,H=function(r){return $(r)||G(r)},L=K;C(H,"isPrimitive",y),C(H,"isObject",L);var q=H,W=Number.POSITIVE_INFINITY,B=k.NEGATIVE_INFINITY,z=Math.floor,Z=z;var X=function(r){return Z(r)===r},Y=W,D=B,J=X;var Q=function(r){return r<Y&&r>D&&J(r)},rr=q.isPrimitive,er=Q;var nr=function(r){return rr(r)&&er(r)},tr=q.isObject,ir=Q;var ar=function(r){return tr(r)&&ir(r.valueOf())},or=nr,ur=ar;var fr=d,cr=function(r){return or(r)||ur(r)},sr=ar;fr(cr,"isPrimitive",nr),fr(cr,"isObject",sr);var lr=cr,vr=lr.isPrimitive;var pr=function(r){return vr(r)&&r>=0},gr=lr.isObject;var hr=function(r){return gr(r)&&r.valueOf()>=0},dr=pr,yr=hr;var wr=d,mr=function(r){return dr(r)||yr(r)},br=hr;wr(mr,"isPrimitive",pr),wr(mr,"isObject",br);var Nr=mr,Er=p;var jr=function(r,e,n){Er(r,e,{configurable:!1,enumerable:!1,get:n})},Pr=jr,Ar=z;var _r=function(r){return Ar(r)===r&&r>=0},Tr=_r,Vr=W;var Or=function(r,e,n){var t;return!Tr(r)||!Tr(e)||!Tr(n)||r===Vr||e===Vr||e>r||n>r?NaN:(t=r*r*(r-1)*(r*(r+1)-6*e*(r-e)-6*n*(r-n)),(t+=6*n*e*(r-e)*(r-n)*(5*r-6))/(n*e*(r-e)*(r-n)*(r-2)*(r-3)))};var xr=function(r){return r!=r},Sr=_r,kr=xr,Ur=W;var Ir=function(r,e,n){return kr(r)||kr(e)||kr(n)||!Sr(r)||!Sr(e)||!Sr(n)||r===Ur||e===Ur||e>r||n>r?NaN:n*(e/r)},Mr=_r,Fr=z,Rr=W;var Kr=function(r,e,n){return!Mr(r)||!Mr(e)||!Mr(n)||r===Rr||e===Rr||e>r||n>r?NaN:Fr((n+1)*(e+1)/(r+2))},$r=Math.sqrt,Gr=_r,Cr=$r,Hr=W;var Lr=function(r,e,n){return!Gr(r)||!Gr(e)||!Gr(n)||r===Hr||e===Hr||e>r||n>r?NaN:(r-2*e)*Cr(r-1)*(r-2*n)/(Cr(n*e*(r-e)*(r-n))*(r-2))},qr=_r,Wr=$r,Br=W;var zr=function(r,e,n){return!qr(r)||!qr(e)||!qr(n)||r===Br||e===Br||e>r||n>r?NaN:Wr(n*(e/r)*((r-e)/r)*((r-n)/(r-1)))},Zr=_r,Xr=W;var Yr=function(r,e,n){return!Zr(r)||!Zr(e)||!Zr(n)||r===Xr||e===Xr||e>r||n>r?NaN:n*(e/r)*((r-e)/r)*((r-n)/(r-1))},Dr=Math.ceil,Jr=z,Qr=Dr;var re=function(r){return r<0?Qr(r):Jr(r)},ee=W;var ne=function(r){return 0===r&&1/r===ee},te=xr,ie=B,ae=W;var oe=function(r,e){var n,t,i,a;if(2===(n=arguments.length))return te(r)||te(e)?NaN:r===ae||e===ae?ae:r===e&&0===r?ne(r)?r:e:r>e?r:e;for(t=ie,a=0;a<n;a++){if(te(i=arguments[a])||i===ae)return i;(i>t||i===t&&0===i&&ne(i))&&(t=i)}return t},ue=oe,fe=B;var ce=function(r){return 0===r&&1/r===fe},se=xr,le=B,ve=W;var pe=function(r,e){var n,t,i,a;if(2===(n=arguments.length))return se(r)||se(e)?NaN:r===le||e===le?le:r===e&&0===r?ce(r)?r:e:r<e?r:e;for(t=ve,a=0;a<n;a++){if(se(i=arguments[a])||i===le)return i;(i<t||i===t&&0===i&&ce(i))&&(t=i)}return t},ge=pe,he=W,de=B;var ye=function(r){return r===he||r===de},we=S,me="function"==typeof Uint32Array;var be="function"==typeof Uint32Array?Uint32Array:null,Ne=function(r){return me&&r instanceof Uint32Array||"[object Uint32Array]"===we(r)},Ee=be;var je=function(){var r,e;if("function"!=typeof Ee)return!1;try{e=new Ee(e=[1,3.14,-3.14,4294967296,4294967297]),r=Ne(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Pe="function"==typeof Uint32Array?Uint32Array:void 0,Ae=function(){throw new Error("not implemented")},_e=je()?Pe:Ae,Te=S,Ve="function"==typeof Float64Array;var Oe="function"==typeof Float64Array?Float64Array:null,xe=function(r){return Ve&&r instanceof Float64Array||"[object Float64Array]"===Te(r)},Se=Oe;var ke=function(){var r,e;if("function"!=typeof Se)return!1;try{e=new Se([1,3.14,-3.14,NaN]),r=xe(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var Ue="function"==typeof Float64Array?Float64Array:void 0,Ie=function(){throw new Error("not implemented")},Me=ke()?Ue:Ie,Fe=S,Re="function"==typeof Uint8Array;var Ke="function"==typeof Uint8Array?Uint8Array:null,$e=function(r){return Re&&r instanceof Uint8Array||"[object Uint8Array]"===Fe(r)},Ge=Ke;var Ce=function(){var r,e;if("function"!=typeof Ge)return!1;try{e=new Ge(e=[1,3.14,-3.14,256,257]),r=$e(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var He="function"==typeof Uint8Array?Uint8Array:void 0,Le=function(){throw new Error("not implemented")},qe=Ce()?He:Le,We=S,Be="function"==typeof Uint16Array;var ze="function"==typeof Uint16Array?Uint16Array:null,Ze=function(r){return Be&&r instanceof Uint16Array||"[object Uint16Array]"===We(r)},Xe=ze;var Ye=function(){var r,e;if("function"!=typeof Xe)return!1;try{e=new Xe(e=[1,3.14,-3.14,65536,65537]),r=Ze(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var De,Je="function"==typeof Uint16Array?Uint16Array:void 0,Qe=function(){throw new Error("not implemented")},rn={uint16:Ye()?Je:Qe,uint8:qe};(De=new rn.uint16(1))[0]=4660;var en,nn,tn=52===new rn.uint8(De.buffer)[0];!0===tn?(en=1,nn=0):(en=0,nn=1);var an=_e,on={HIGH:en,LOW:nn},un=new Me(1),fn=new an(un.buffer),cn=on.HIGH,sn=on.LOW;var ln=function(r,e){return un[0]=e,r[0]=fn[cn],r[1]=fn[sn],r};var vn=function(r,e){return 1===arguments.length?ln([0,0],r):ln(r,e)},pn=vn,gn=_e,hn=!0===tn?1:0,dn=new Me(1),yn=new gn(dn.buffer);var wn,mn,bn=function(r){return dn[0]=r,yn[hn]};!0===tn?(wn=1,mn=0):(wn=0,mn=1);var Nn=_e,En={HIGH:wn,LOW:mn},jn=new Me(1),Pn=new Nn(jn.buffer),An=En.HIGH,_n=En.LOW;var Tn=function(r,e){return Pn[An]=r,Pn[_n]=e,jn[0]},Vn=Tn,On=pn,xn=bn,Sn=Vn,kn=[0,0];var Un=function(r,e){var n,t;return On(kn,r),n=kn[0],n&=2147483647,t=xn(e),Sn(n|=t&=2147483648,kn[1])};var In=function(r){return Math.abs(r)},Mn=ye,Fn=xr,Rn=In;var Kn=function(r,e){return Fn(e)||Mn(e)?(r[0]=e,r[1]=0,r):0!==e&&Rn(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var $n=function(r,e){return 1===arguments.length?Kn([0,0],r):Kn(r,e)},Gn=bn;var Cn=function(r){var e=Gn(r);return(e=(2146435072&e)>>>20)-1023|0},Hn=W,Ln=B,qn=xr,Wn=ye,Bn=Un,zn=$n,Zn=Cn,Xn=pn,Yn=Vn,Dn=[0,0],Jn=[0,0];var Qn=function(r,e){var n,t;return 0===e||0===r||qn(r)||Wn(r)?r:(zn(Dn,r),e+=Dn[1],(e+=Zn(r=Dn[0]))<-1074?Bn(0,r):e>1023?r<0?Ln:Hn:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Xn(Jn,r),n=Jn[0],n&=2148532223,t*Yn(n|=e+1023<<20,Jn[1])))},rt=Qn;var et=rt,nt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var tt=xr,it=re,at=B,ot=W,ut=function(r,e,n){var t,i,a;return a=(t=r-e)-(i=t*t)*nt(i),et(1-(e-t*a/(2-a)-r),n)},ft=1.4426950408889634,ct=1/(1<<28);var st=function(r){var e;return tt(r)||r===ot?r:r===at?0:r>709.782712893384?ot:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<ct?1+r:(e=it(r<0?ft*r-.5:ft*r+.5),ut(r-.6931471803691238*e,1.9082149292705877e-10*e,e))},lt=z;var vt=function(r){return lt(r)===r&&r<0},pt=_e,gt=!0===tn?1:0,ht=new Me(1),dt=new pt(ht.buffer);var yt=function(r,e){return ht[0]=r,dt[gt]=e>>>0,ht[0]};var wt=bn,mt=yt,bt=xr,Nt=B,Et=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},jt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Pt=.6931471803691238,At=1.9082149292705877e-10,_t=1048575;var Tt=function(r){var e,n,t,i,a,o,u,f,c,s,l;return 0===r?Nt:bt(r)||r<0?NaN:(i=0,(n=wt(r))<1048576&&(i-=54,n=wt(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(u=(n&=_t)+614244&1048576|0)>>20|0,o=(r=mt(r,n|1072693248^u))-1,(_t&2+n)<3?0===o?0===i?0:i*Pt+i*At:(a=o*o*(.5-.3333333333333333*o),0===i?o-a:i*Pt-(a-i*At-o)):(u=n-398458|0,f=440401-n|0,t=(s=(l=(c=o/(2+o))*c)*l)*Et(s),a=l*jt(s)+t,(u|=f)>0?(e=.5*o*o,0===i?o-(e-c*(e+a)):i*Pt-(e-(c*(e+a)+i*At)-o)):0===i?o-c*(o-a):i*Pt-(c*(o-a)-i*At-o))))},Vt=Tt;var Ot=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},xt=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var St=function(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*Ot(a),t+=i*i*xt(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))},kt=-.16666666666666632;var Ut=function(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(kt+i*n):r-(i*(.5*e-t*n)-e-t*kt)},It=_e,Mt=!0===tn?0:1,Ft=new Me(1),Rt=new It(Ft.buffer);var Kt=function(r){return Ft[0]=r,Rt[Mt]};var $t=function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n};var Gt=z,Ct=rt,Ht=function(r){return $t(0,r)},Lt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],qt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Wt=16777216,Bt=5.960464477539063e-8,zt=Ht(20),Zt=Ht(20),Xt=Ht(20),Yt=Ht(20);function Dt(r,e,n,t,i,a,o,u,f){var c,s,l,v,p,g,h,d,y;for(v=a,y=t[n],d=n,p=0;d>0;p++)s=Bt*y|0,Yt[p]=y-Wt*s|0,y=t[d-1]+s,d-=1;if(y=Ct(y,i),y-=8*Gt(.125*y),y-=h=0|y,l=0,i>0?(h+=p=Yt[n-1]>>24-i,Yt[n-1]-=p<<24-i,l=Yt[n-1]>>23-i):0===i?l=Yt[n-1]>>23:y>=.5&&(l=2),l>0){for(h+=1,c=0,p=0;p<n;p++)d=Yt[p],0===c?0!==d&&(c=1,Yt[p]=16777216-d):Yt[p]=16777215-d;if(i>0)switch(i){case 1:Yt[n-1]&=8388607;break;case 2:Yt[n-1]&=4194303}2===l&&(y=1-y,0!==c&&(y-=Ct(1,i)))}if(0===y){for(d=0,p=n-1;p>=a;p--)d|=Yt[p];if(0===d){for(g=1;0===Yt[a-g];g++);for(p=n+1;p<=n+g;p++){for(f[u+p]=Lt[o+p],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(p-d)];t[p]=s}return Dt(r,e,n+=g,t,i,a,o,u,f)}}if(0===y)for(n-=1,i-=24;0===Yt[n];)n-=1,i-=24;else(y=Ct(y,-i))>=Wt?(s=Bt*y|0,Yt[n]=y-Wt*s|0,i+=24,Yt[n+=1]=s):Yt[n]=0|y;for(s=Ct(1,i),p=n;p>=0;p--)t[p]=s*Yt[p],s*=Bt;for(p=n;p>=0;p--){for(s=0,g=0;g<=v&&g<=n-p;g++)s+=qt[g]*t[p+g];Xt[n-p]=s}for(s=0,p=n;p>=0;p--)s+=Xt[p];for(e[0]=0===l?s:-s,s=Xt[0]-s,p=1;p<=n;p++)s+=Xt[p];return e[1]=0===l?s:-s,7&h}var Jt=function(r,e,n,t){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)zt[f]=c<0?0:Lt[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*zt[o+(f-c)];Zt[f]=i}return 4,Dt(r,e,4,Zt,u,4,a,o,zt)},Qt=Math.round,ri=bn;var ei=bn,ni=Kt,ti=Vn,ii=Jt,ai=function(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=Qt(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(ri(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(ri(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t},oi=1.5707963267341256,ui=6077100506506192e-26,fi=2*ui,ci=3*ui,si=4*ui,li=[0,0,0],vi=[0,0];var pi=function(r,e){var n,t,i,a,o,u,f;if((i=2147483647&ei(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?ai(r,i,e):i<=1073928572?r>0?(f=r-oi,e[0]=f-ui,e[1]=f-e[0]-ui,1):(f=r+oi,e[0]=f+ui,e[1]=f-e[0]+ui,-1):r>0?(f=r-2*oi,e[0]=f-fi,e[1]=f-e[0]-fi,2):(f=r+2*oi,e[0]=f+fi,e[1]=f-e[0]+fi,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ai(r,i,e):r>0?(f=r-3*oi,e[0]=f-ci,e[1]=f-e[0]-ci,3):(f=r+3*oi,e[0]=f+ci,e[1]=f-e[0]+ci,-3):1075388923===i?ai(r,i,e):r>0?(f=r-4*oi,e[0]=f-si,e[1]=f-e[0]-si,4):(f=r+4*oi,e[0]=f+si,e[1]=f-e[0]+si,-4);if(i<1094263291)return ai(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=ni(r),f=ti(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)li[o]=0|f,f=16777216*(f-li[o]);for(li[2]=f,a=3;0===li[a-1];)a-=1;return u=ii(li,vi,t,a),r<0?(e[0]=-vi[0],e[1]=-vi[1],-u):(e[0]=vi[0],e[1]=vi[1],u)},gi=bn,hi=St,di=Ut,yi=pi,wi=[0,0];var mi=bn,bi=St,Ni=Ut,Ei=pi,ji=[0,0];var Pi=3.141592653589793,Ai=xr,_i=ye,Ti=function(r){var e;if(e=gi(r),(e&=2147483647)<=1072243195)return e<1044381696?1:hi(r,0);if(e>=2146435072)return NaN;switch(3&yi(r,wi)){case 0:return hi(wi[0],wi[1]);case 1:return-di(wi[0],wi[1]);case 2:return-hi(wi[0],wi[1]);default:return di(wi[0],wi[1])}},Vi=function(r){var e;if(e=mi(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Ni(r,0);if(e>=2146435072)return NaN;switch(3&Ei(r,ji)){case 0:return Ni(ji[0],ji[1]);case 1:return bi(ji[0],ji[1]);case 2:return-Ni(ji[0],ji[1]);default:return-bi(ji[0],ji[1])}},Oi=In,xi=Un,Si=Pi;var ki=xr,Ui=ye,Ii=In,Mi=Vt,Fi=re,Ri=function(r){var e,n;return Ai(r)||_i(r)?NaN:0===(e=Oi(n=r%2))||1===e?xi(0,n):e<.25?Vi(Si*n):e<.75?xi(Ti(Si*(e=.5-e)),n):e<1.25?(n=xi(1,n)-n,Vi(Si*n)):e<1.75?-xi(Ti(Si*(e-=1.5)),n):(n-=xi(2,n),Vi(Si*n))},Ki=W,$i=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Gi=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Ci=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},Hi=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},Li=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},qi=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},Wi=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},Bi=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},zi=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},Zi=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},Xi=1.4616321449683622,Yi=1.4616321449683622;var Di=vt,Ji=function(r){var e,n,t,i,a,o,u,f;if(ki(r)||Ui(r))return r;if(0===r)return Ki;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-Mi(r);if(e){if(r>=4503599627370496)return Ki;if(0===(i=Ri(r)))return Ki;n=Mi(3.141592653589793/Ii(i*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(f=-Mi(r),r>=Xi-1+.27?(o=1-r,t=0):r>=Xi-1-.27?(o=r-(Yi-1),t=1):(o=r,t=2)):(f=0,r>=Xi+.27?(o=2-r,t=0):r>=Xi-.27?(o=r-Yi,t=1):(o=r-1,t=2)),t){case 0:f+=o*(.07721566490153287+(u=o*o)*$i(u))+u*(.3224670334241136+u*Gi(u))-.5*o;break;case 1:f+=-.12148629053584961+((u=o*o)*(.48383612272381005+(a=u*o)*Li(a))-(-3638676997039505e-33-a*(a*qi(a)-.1475877229945939+o*(.06462494023913339+a*Wi(a)))));break;case 2:f+=-.5*o+o*(o*Bi(o)-.07721566490153287)/(1+o*zi(o))}else if(r<8)switch(f=.5*(o=r-(t=Fi(r)))+o*(o*Hi(o)-.07721566490153287)/(1+o*Ci(o)),u=1,t){case 7:u*=o+6;case 6:u*=o+5;case 5:u*=o+4;case 4:u*=o+3;case 3:f+=Mi(u*=o+2)}else f=r<0x400000000000000?(r-.5)*((i=Mi(r))-1)+(a=.4189385332046727+(u=1/r)*Zi(o=u*u)):r*(Mi(r)-1);return e&&(f=n-f),f};var Qi=function(r){return Di(r)?NaN:Ji(r+1)},ra=_r,ea=xr,na=st,ta=Qi,ia=ue,aa=ge,oa=W;var ua=function(r){return function(){return r}},fa=_r,ca=xr,sa=ua,la=st,va=Qi,pa=ue,ga=ge,ha=W;var da=function(r,e,n,t){var i,a,o,u;return ea(r)||ea(e)||ea(n)||ea(t)||!ra(e)||!ra(n)||!ra(t)||e===oa||n===oa||n>e||t>e?NaN:(u=ia(0,t+n-e),o=aa(n,t),ra(r)&&u<=r&&r<=o?(a=ta(t)+ta(n)+ta(e-t)+ta(e-n),i=ta(e)+ta(r)+ta(t-r),i+=ta(n-r)+ta(e-n+r-t),na(a-i)):0)};d(da,"factory",(function(r,e,n){var t,i;return ca(r)||ca(e)||ca(n)||!fa(r)||!fa(e)||!fa(n)||r===ha||e===ha||e>r||n>r?sa(NaN):(i=pa(0,n+e-r),t=ga(e,n),function(a){var o,u;if(ca(a))return NaN;if(fa(a)&&i<=a&&a<=t)return u=va(n)+va(e)+va(r-n)+va(r-e),o=va(r)+va(a)+va(n-a),o+=va(e-a)+va(r-e+a-n),la(u-o);return 0})}));var ya=da;var wa=function(r){var e,n,t;for(e=r.length,n=0,t=0;t<e;t++)n+=r[t];return n},ma=_r,ba=xr,Na=re,Ea=ue,ja=ge,Pa=ya,Aa=W,_a=Me,Ta=wa;var Va=_r,Oa=xr,xa=ua,Sa=re,ka=ue,Ua=ge,Ia=ya,Ma=W,Fa=Me,Ra=wa;var Ka=function(r,e,n,t){var i,a,o,u,f;if(ba(r)||ba(e)||ba(n)||ba(t)||!ma(e)||!ma(n)||!ma(t)||e===Aa||n===Aa||n>e||t>e)return NaN;if((r=Na(r))<Ea(0,t+n-e))return 0;if(r>=ja(t,n))return 1;for((a=new _a(r+1))[r]=Pa(r,e,n,t),f=r-1;f>=0;f--)o=(f+1)*(e-n-(t-f-1)),i=(n-f)*(t-f),a[f]=o/i*a[f+1];return u=Ta(a),ja(u,1)};d(Ka,"factory",(function(r,e,n){return Oa(r)||Oa(e)||Oa(n)||!Va(r)||!Va(e)||!Va(n)||r===Ma||e===Ma||e>r||n>r?xa(NaN):function(t){var i,a,o,u,f;if(Oa(t))return NaN;if((t=Sa(t))<ka(0,n+e-r))return 0;if(t>=Ua(n,e))return 1;for((a=new Fa(t+1))[t]=Ia(t,r,e,n),f=t-1;f>=0;f--)o=(f+1)*(r-e-(n-f-1)),i=(e-f)*(n-f),a[f]=o/i*a[f+1];return u=Ra(a),Ua(u,1)}}));var $a=Ka,Ga=_r,Ca=xr,Ha=Qi,La=ue,qa=ge,Wa=B,Ba=W;var za=_r,Za=ua,Xa=xr,Ya=Qi,Da=ue,Ja=ge,Qa=B,ro=W;var eo=function(r,e,n,t){var i,a,o,u;return Ca(r)||Ca(e)||Ca(n)||Ca(t)||!Ga(e)||!Ga(n)||!Ga(t)||e===Ba||n===Ba||n>e||t>e?NaN:(u=La(0,t+n-e),o=qa(n,t),Ga(r)&&u<=r&&r<=o?(a=Ha(t)+Ha(n)+Ha(e-t)+Ha(e-n),i=Ha(e)+Ha(r)+Ha(t-r),a-(i+=Ha(n-r)+Ha(e-n+r-t))):Wa)};d(eo,"factory",(function(r,e,n){var t,i;return Xa(r)||Xa(e)||Xa(n)||!za(r)||!za(e)||!za(n)||r===ro||e===ro||e>r||n>r?Za(NaN):(i=Da(0,n+e-r),t=Ja(e,n),function(a){var o,u;if(Xa(a))return NaN;if(za(a)&&i<=a&&a<=t)return u=Ya(n)+Ya(e)+Ya(r-n)+Ya(r-e),o=Ya(r)+Ya(a)+Ya(n-a),o+=Ya(e-a)+Ya(r-e+a-n),u-o;return Qa})}));var no=eo,to=_r,io=xr,ao=ue,oo=ge,uo=$a,fo=W;var co=_r,so=xr,lo=ua,vo=ue,po=ge,go=$a,ho=W;var yo=function(r,e,n,t){var i;if(io(r)||io(e)||io(n)||io(t)||!to(e)||!to(n)||!to(t)||e===fo||n===fo||n>e||t>e||r<0||r>1)return NaN;if(0===r)return ao(0,t+n-e);if(1===r)return oo(t,n);for(i=ao(0,t+n-e);!(uo(i,e,n,t)>r);)i+=1;return i};d(yo,"factory",(function(r,e,n){return so(r)||so(e)||so(n)||!co(r)||!co(e)||!co(n)||r===ho||e===ho||e>r||n>r?lo(NaN):function(t){var i;if(so(t)||t<0||t>1)return NaN;if(0===t)return vo(0,n+e-r);if(1===t)return po(n,e);i=vo(0,n+e-r);for(;!(go(i,r,e,n)>t);)i+=1;return i}}));var wo=yo;var mo=function(r){return"string"==typeof r},bo=String.prototype.valueOf;var No=S,Eo=function(r){try{return bo.call(r),!0}catch(r){return!1}},jo=m();var Po=function(r){return"object"==typeof r&&(r instanceof String||(jo?Eo(r):"[object String]"===No(r)))},Ao=mo,_o=Po;var To=d,Vo=function(r){return Ao(r)||_o(r)},Oo=Po;To(Vo,"isPrimitive",mo),To(Vo,"isObject",Oo);var xo=Vo,So=X;var ko=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&So(r.length)&&r.length>=0&&r.length<=9007199254740991},Uo=q.isPrimitive,Io=xr;var Mo=function(r){return Uo(r)&&Io(r)},Fo=q.isObject,Ro=xr;var Ko=function(r){return Fo(r)&&Ro(r.valueOf())},$o=Mo,Go=Ko;var Co=d,Ho=function(r){return $o(r)||Go(r)},Lo=Ko;Co(Ho,"isPrimitive",Mo),Co(Ho,"isObject",Lo);var qo=ko,Wo=lr.isPrimitive,Bo=xo.isPrimitive,zo=Ho.isPrimitive;var Zo=function(r,e,n){var t,i,a;if(!qo(r)&&!Bo(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Wo(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");(i=n)<0&&(i=0)}else i=0;if(Bo(r)){if(!Bo(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(t=r.length,zo(e)){for(a=i;a<t;a++)if(zo(r[a]))return!0;return!1}for(a=i;a<t;a++)if(r[a]===e)return!0;return!1},Xo=Zo,Yo=xo.isPrimitive;var Do=function(r){if(!Yo(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Jo=xo.isPrimitive;var Qo=function(r){if(!Jo(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},ru=Do,eu=Qo,nu=xo.isPrimitive;var tu=function(r){return nu(r)&&r===eu(r)&&r!==ru(r)},iu=W,au=B;var ou=function(r){return r==r&&r>au&&r<iu},uu=Nr.isPrimitive,fu=xo.isPrimitive;var cu=function(r,e){var n,t;if(!fu(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!uu(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(n="",t=e;1==(1&t)&&(n+=r),0!==(t>>>=1);)r+=r;return n},su=lr.isPrimitive,lu=xo.isPrimitive;var vu=function(r,e,n){var t,i;if(!lu(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!lu(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!su(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");t=n<0?r.length+n:n}else t=0;if(0===e.length)return!0;if(t<0||t+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(t+i)!==e.charCodeAt(i))return!1;return!0},pu=cu,gu=vu;var hu=function(r,e,n){var t=!1,i=e-r.length;return i<0||(gu(r,"-")&&(t=!0,r=r.substr(1)),r=n?r+pu("0",i):pu("0",i)+r,t&&(r="-"+r)),r},du=tu,yu=Qo,wu=Do,mu=ou,bu=q.isPrimitive,Nu=hu;var Eu=function(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!mu(t)){if(!bu(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=Nu(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=Nu(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=du(r.specifier)?yu(n):wu(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n},ju=xo.isPrimitive,Pu=/[-\/\\^$*+?.()|[\]{}]/g;var Au=function(r){var e,n;if(!ju(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(n=r.length-1;n>=0&&"/"!==r[n];n--);return void 0===n||n<=0?r.replace(Pu,"\\$&"):(e=(e=r.substring(1,n)).replace(Pu,"\\$&"),r=r[0]+e+r.substring(n))},_u=/./;var Tu=function(r){return"boolean"==typeof r},Vu=Boolean.prototype.toString;var Ou=S,xu=function(r){try{return Vu.call(r),!0}catch(r){return!1}},Su=m();var ku=function(r){return"object"==typeof r&&(r instanceof Boolean||(Su?xu(r):"[object Boolean]"===Ou(r)))},Uu=Tu,Iu=ku;var Mu=d,Fu=function(r){return Uu(r)||Iu(r)},Ru=ku;Mu(Fu,"isPrimitive",Tu),Mu(Fu,"isObject",Ru);var Ku=Fu;var $u=function(){return new Function("return this;")()},Gu="object"==typeof self?self:null,Cu="object"==typeof window?window:null,Hu="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Lu="object"==typeof Hu?Hu:null;module.exports=Lu;var qu=Ku.isPrimitive,Wu=$u,Bu=Gu,zu=Cu,Zu=r(Object.freeze({__proto__:null}));var Xu=function(r){if(arguments.length){if(!qu(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Wu()}if(Bu)return Bu;if(zu)return zu;if(Zu)return Zu;throw new Error("unexpected error. Unable to resolve global object.")},Yu=Xu(),Du=Yu.document&&Yu.document.childNodes,Ju=Int8Array,Qu=_u,rf=Du,ef=Ju;var nf=function(){return"function"==typeof Qu||"object"==typeof ef||"function"==typeof rf};var tf=function(){return/^\s*function\s*([^(]*)/i},af=tf;d(af,"REGEXP",tf());var of=af,uf=S;var ff=Array.isArray?Array.isArray:function(r){return"[object Array]"===uf(r)};var cf=function(r){return null!==r&&"object"==typeof r};d(cf,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var n,t;if(!ff(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(cf));var sf=cf;var lf=S,vf=of.REGEXP,pf=function(r){return sf(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var gf=function(r){var e,n,t;if(("Object"===(n=lf(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=vf.exec(t.toString()))return e[1]}return pf(r)?"Buffer":n},hf=gf;var df=gf;var yf=function(r){var e;return null===r?"null":"object"===(e=typeof r)?hf(r).toLowerCase():e},wf=function(r){return df(r).toLowerCase()},mf=nf()?wf:yf;var bf=function(r){return"function"===mf(r)},Nf=RegExp.prototype.exec;var Ef=S,jf=function(r){try{return Nf.call(r),!0}catch(r){return!1}},Pf=m();var Af=Au,_f=bf,Tf=xo.isPrimitive,Vf=function(r){return"object"==typeof r&&(r instanceof RegExp||(Pf?jf(r):"[object RegExp]"===Ef(r)))};var Of=tu,xf=Qo,Sf=Do,kf=function(r,e,n){if(!Tf(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Tf(e))e=Af(e),e=new RegExp(e,"g");else if(!Vf(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Tf(n)&&!_f(n))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+n+"`.");return r.replace(e,n)},Uf=ou,If=q.isPrimitive,Mf=In,Ff=/e\+(\d)$/,Rf=/e-(\d)$/,Kf=/^(\d+)$/,$f=/^(\d+)e/,Gf=/\.0$/,Cf=/\.0*e/,Hf=/(\..*[^0])0*e/;var Lf=function(r){var e,n,t=parseFloat(r.arg);if(!Uf(t)){if(!If(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":Mf(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=kf(n,Hf,"$1e"),n=kf(n,Cf,"e"),n=kf(n,Gf,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=kf(n,Ff,"e+0$1"),n=kf(n,Rf,"e-0$1"),r.alternate&&(n=kf(n,Kf,"$1."),n=kf(n,$f,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=Of(r.specifier)?xf(n):Sf(n)},qf=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Wf=cu;var Bf=xo.isPrimitive,zf=Xo,Zf=xr,Xf=Eu,Yf=Lf,Df=function(r){var e,n,t,i,a;for(e=0,t=[],a=qf.exec(r);a;)(n=r.slice(e,qf.lastIndex-a[0].length)).length&&t.push(n),(i=o(a,t.length))&&t.push(i),e=qf.lastIndex,a=qf.exec(r);return(n=r.slice(e)).length&&t.push(n),t;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Jf=function(r,e,n){var t=e-r.length;return t<0?r:r=n?r+Wf(" ",t):Wf(" ",t)+r},Qf=hu,rc=String.fromCharCode;var ec=function(r){var e,n,t,i,a,o,u,f,c;if(!Bf(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Df(r),o="",u=1,f=0;f<e.length;f++)if(t=e[f],Bf(t))o+=t;else{for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=!zf(n,"-");break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Zf(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if("*"===t.precision&&t.hasPeriod){if(t.precision=parseInt(arguments[u],10),u+=1,Zf(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,t.hasPeriod=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t.hasPeriod&&(t.padZeros=!1),t.arg=Xf(t);break;case"s":t.maxWidth=t.hasPeriod?t.precision:-1;break;case"c":if(!Zf(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Zf(a)?String(t.arg):rc(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t.hasPeriod||(t.precision=6),t.arg=Yf(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Qf(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Jf(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o},nc=Nr.isPrimitive,tc=p,ic=d,ac=Pr,oc=Or,uc=Ir,fc=Kr,cc=Lr,sc=zr,lc=Yr,vc=$a,pc=no,gc=ya,hc=wo,dc=ec;function yc(r,e,n){if(!(this instanceof yc))return new yc(r,e,n);if(!nc(r))throw new TypeError(dc("invalid argument. Population size `N` must be a nonnegative integer. Value: `%s`.",r));if(!nc(e))throw new TypeError(dc("invalid argument. Subpopulation size `K` must be a nonnegative integer. Value: `%s`.",e));if(!nc(n))throw new TypeError(dc("invalid argument. Number of draws `n` must be a nonnegative integer. Value: `%s`.",n));if(e>r)throw new RangeError("invalid arguments. Subpopulation size `K` must be less than or equal to `N`.");if(n>r)throw new RangeError("invalid arguments. Number of draws `n` must be less than or equal to `N`.");return tc(this,"N",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!nc(t))throw new TypeError(dc("invalid value. Must be a nonnegative integer. Value: `%s`.",t));if(e>t)throw new RangeError(dc("invalid value. Must be larger than or equal to `%s`. Value: `%u`.","K",t));if(n>t)throw new RangeError(dc("invalid value. Must be larger than or equal to `%s`. Value: `%u`.","n",t));r=t}}),tc(this,"K",{configurable:!1,enumerable:!0,get:function(){return e},set:function(n){if(!nc(n))throw new TypeError(dc("invalid value. Must be a nonnegative integer. Value: `%s`.",n));if(n>r)throw new RangeError(dc("invalid value. Must be less than or equal to `%s`. Value: `%u`.","N",n));e=n}}),tc(this,"n",{configurable:!1,enumerable:!0,get:function(){return n},set:function(e){if(!nc(e))throw new TypeError(dc("invalid value. Must be a nonnegative integer. Value: `%s`.",e));if(e>r)throw new RangeError(dc("invalid value. Must be less than or equal to `%s`. Value: `%u`.","N",e));n=e}}),this}return ac(yc.prototype,"kurtosis",(function(){return oc(this.N,this.K,this.n)})),ac(yc.prototype,"mean",(function(){return uc(this.N,this.K,this.n)})),ac(yc.prototype,"mode",(function(){return fc(this.N,this.K,this.n)})),ac(yc.prototype,"skewness",(function(){return cc(this.N,this.K,this.n)})),ac(yc.prototype,"stdev",(function(){return sc(this.N,this.K,this.n)})),ac(yc.prototype,"variance",(function(){return lc(this.N,this.K,this.n)})),ic(yc.prototype,"cdf",(function(r){return vc(r,this.N,this.K,this.n)})),ic(yc.prototype,"logpmf",(function(r){return pc(r,this.N,this.K,this.n)})),ic(yc.prototype,"pmf",(function(r){return gc(r,this.N,this.K,this.n)})),ic(yc.prototype,"quantile",(function(r){return hc(r,this.N,this.K,this.n)})),yc}));
//# sourceMappingURL=bundle.js.map
