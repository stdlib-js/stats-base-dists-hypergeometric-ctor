// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var t=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:function(){return r[n]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,i=Object.prototype,a=i.toString,u=i.__defineGetter__,o=i.__defineSetter__,f=i.__lookupGetter__,c=i.__lookupSetter__;var s=function(r,e,n){var t,s,v,l;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===a.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((s="value"in n)&&(f.call(r,e)||c.call(r,e)?(t=r.__proto__,r.__proto__=i,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),v="get"in n,l="set"in n,s&&(v||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&u&&u.call(r,e,n.get),l&&o&&o.call(r,e,n.set),r},v=t,l=s,p=n()?v:l,g=p;var h=function(r,e,n){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})},y=h;var w=function(r){return"number"==typeof r};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var m=function(){return d&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,N=b;var E=function(r){return N.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},A="function"==typeof Symbol?Symbol.toStringTag:"",_=P,V=A,T=b;var O=E,x=function(r){var e,n,t;if(null==r)return T.call(r);n=r[V],e=_(r,V);try{r[V]=void 0}catch(e){return T.call(r)}return t=T.call(r),e?r[V]=n:delete r[V],t},S=m()?x:O,k=Number,U=k.prototype.toString;var I=S,M=k,F=function(r){try{return U.call(r),!0}catch(r){return!1}},R=m();var K=function(r){return"object"==typeof r&&(r instanceof M||(R?F(r):"[object Number]"===I(r)))},$=w,G=K;var C=y,L=function(r){return $(r)||G(r)},q=K;C(L,"isPrimitive",w),C(L,"isObject",q);var H=L,W=Number.POSITIVE_INFINITY,B=k.NEGATIVE_INFINITY,z=Math.floor,Z=z;var X=function(r){return Z(r)===r},Y=W,D=B,J=X;var Q=function(r){return r<Y&&r>D&&J(r)},rr=H.isPrimitive,er=Q;var nr=function(r){return rr(r)&&er(r)},tr=H.isObject,ir=Q;var ar=function(r){return tr(r)&&ir(r.valueOf())},ur=nr,or=ar;var fr=y,cr=function(r){return ur(r)||or(r)},sr=ar;fr(cr,"isPrimitive",nr),fr(cr,"isObject",sr);var vr=cr,lr=vr.isPrimitive;var pr=function(r){return lr(r)&&r>=0},gr=vr.isObject;var hr=function(r){return gr(r)&&r.valueOf()>=0},yr=pr,wr=hr;var dr=y,mr=function(r){return yr(r)||wr(r)},br=hr;dr(mr,"isPrimitive",pr),dr(mr,"isObject",br);var Nr=mr,Er=p;var jr=function(r,e,n){Er(r,e,{configurable:!1,enumerable:!1,get:n})},Pr=jr,Ar=z;var _r=function(r){return Ar(r)===r&&r>=0},Vr=_r,Tr=W;var Or=function(r,e,n){var t;return!Vr(r)||!Vr(e)||!Vr(n)||r===Tr||e===Tr||e>r||n>r?NaN:(t=r*r*(r-1)*(r*(r+1)-6*e*(r-e)-6*n*(r-n)),(t+=6*n*e*(r-e)*(r-n)*(5*r-6))/(n*e*(r-e)*(r-n)*(r-2)*(r-3)))};var xr=function(r){return r!=r},Sr=_r,kr=xr,Ur=W;var Ir=function(r,e,n){return kr(r)||kr(e)||kr(n)||!Sr(r)||!Sr(e)||!Sr(n)||r===Ur||e===Ur||e>r||n>r?NaN:n*(e/r)},Mr=_r,Fr=z,Rr=W;var Kr=function(r,e,n){return!Mr(r)||!Mr(e)||!Mr(n)||r===Rr||e===Rr||e>r||n>r?NaN:Fr((n+1)*(e+1)/(r+2))},$r=Math.sqrt,Gr=_r,Cr=$r,Lr=W;var qr=function(r,e,n){return!Gr(r)||!Gr(e)||!Gr(n)||r===Lr||e===Lr||e>r||n>r?NaN:(r-2*e)*Cr(r-1)*(r-2*n)/(Cr(n*e*(r-e)*(r-n))*(r-2))},Hr=_r,Wr=$r,Br=W;var zr=function(r,e,n){return!Hr(r)||!Hr(e)||!Hr(n)||r===Br||e===Br||e>r||n>r?NaN:Wr(n*(e/r)*((r-e)/r)*((r-n)/(r-1)))},Zr=_r,Xr=W;var Yr=function(r,e,n){return!Zr(r)||!Zr(e)||!Zr(n)||r===Xr||e===Xr||e>r||n>r?NaN:n*(e/r)*((r-e)/r)*((r-n)/(r-1))},Dr=Math.ceil,Jr=z,Qr=Dr;var re=function(r){return r<0?Qr(r):Jr(r)},ee=W;var ne=function(r){return 0===r&&1/r===ee},te=xr,ie=B,ae=W;var ue=function(r,e){var n,t,i,a;if(2===(n=arguments.length))return te(r)||te(e)?NaN:r===ae||e===ae?ae:r===e&&0===r?ne(r)?r:e:r>e?r:e;for(t=ie,a=0;a<n;a++){if(te(i=arguments[a])||i===ae)return i;(i>t||i===t&&0===i&&ne(i))&&(t=i)}return t},oe=B;var fe=function(r){return 0===r&&1/r===oe},ce=xr,se=B,ve=W;var le=function(r,e){var n,t,i,a;if(2===(n=arguments.length))return ce(r)||ce(e)?NaN:r===se||e===se?se:r===e&&0===r?fe(r)?r:e:r<e?r:e;for(t=ve,a=0;a<n;a++){if(ce(i=arguments[a])||i===se)return i;(i<t||i===t&&0===i&&fe(i))&&(t=i)}return t},pe=W,ge=B;var he=function(r){return r===pe||r===ge},ye=S,we="function"==typeof Uint32Array;var de="function"==typeof Uint32Array?Uint32Array:null,me=function(r){return we&&r instanceof Uint32Array||"[object Uint32Array]"===ye(r)},be=de;var Ne=function(){var r,e;if("function"!=typeof be)return!1;try{e=new be(e=[1,3.14,-3.14,4294967296,4294967297]),r=me(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Ee="function"==typeof Uint32Array?Uint32Array:void 0,je=function(){throw new Error("not implemented")},Pe=Ne()?Ee:je,Ae=S,_e="function"==typeof Float64Array;var Ve="function"==typeof Float64Array?Float64Array:null,Te=function(r){return _e&&r instanceof Float64Array||"[object Float64Array]"===Ae(r)},Oe=Ve;var xe=function(){var r,e;if("function"!=typeof Oe)return!1;try{e=new Oe([1,3.14,-3.14,NaN]),r=Te(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r};var Se="function"==typeof Float64Array?Float64Array:void 0,ke=function(){throw new Error("not implemented")},Ue=xe()?Se:ke,Ie=S,Me="function"==typeof Uint8Array;var Fe="function"==typeof Uint8Array?Uint8Array:null,Re=function(r){return Me&&r instanceof Uint8Array||"[object Uint8Array]"===Ie(r)},Ke=Fe;var $e=function(){var r,e;if("function"!=typeof Ke)return!1;try{e=new Ke(e=[1,3.14,-3.14,256,257]),r=Re(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Ge="function"==typeof Uint8Array?Uint8Array:void 0,Ce=function(){throw new Error("not implemented")},Le=$e()?Ge:Ce,qe=S,He="function"==typeof Uint16Array;var We="function"==typeof Uint16Array?Uint16Array:null,Be=function(r){return He&&r instanceof Uint16Array||"[object Uint16Array]"===qe(r)},ze=We;var Ze=function(){var r,e;if("function"!=typeof ze)return!1;try{e=new ze(e=[1,3.14,-3.14,65536,65537]),r=Be(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r};var Xe,Ye="function"==typeof Uint16Array?Uint16Array:void 0,De=function(){throw new Error("not implemented")},Je={uint16:Ze()?Ye:De,uint8:Le};(Xe=new Je.uint16(1))[0]=4660;var Qe,rn,en=52===new Je.uint8(Xe.buffer)[0];!0===en?(Qe=1,rn=0):(Qe=0,rn=1);var nn=Pe,tn={HIGH:Qe,LOW:rn},an=new Ue(1),un=new nn(an.buffer),on=tn.HIGH,fn=tn.LOW;var cn=function(r,e){return an[0]=e,r[0]=un[on],r[1]=un[fn],r};var sn=function(r,e){return 1===arguments.length?cn([0,0],r):cn(r,e)},vn=Pe,ln=!0===en?1:0,pn=new Ue(1),gn=new vn(pn.buffer);var hn,yn,wn=function(r){return pn[0]=r,gn[ln]};!0===en?(hn=1,yn=0):(hn=0,yn=1);var dn=Pe,mn={HIGH:hn,LOW:yn},bn=new Ue(1),Nn=new dn(bn.buffer),En=mn.HIGH,jn=mn.LOW;var Pn=function(r,e){return Nn[En]=r,Nn[jn]=e,bn[0]},An=Pn,_n=sn,Vn=wn,Tn=An,On=[0,0];var xn=function(r,e){var n,t;return _n(On,r),n=On[0],n&=2147483647,t=Vn(e),Tn(n|=t&=2147483648,On[1])};var Sn=function(r){return Math.abs(r)},kn=he,Un=xr,In=Sn;var Mn=function(r,e){return Un(e)||kn(e)?(r[0]=e,r[1]=0,r):0!==e&&In(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)};var Fn=wn;var Rn=function(r){var e=Fn(r);return(e=(2146435072&e)>>>20)-1023|0},Kn=W,$n=B,Gn=xr,Cn=he,Ln=xn,qn=function(r,e){return 1===arguments.length?Mn([0,0],r):Mn(r,e)},Hn=Rn,Wn=sn,Bn=An,zn=[0,0],Zn=[0,0];var Xn=function(r,e){var n,t;return 0===e||0===r||Gn(r)||Cn(r)?r:(qn(zn,r),e+=zn[1],(e+=Hn(r=zn[0]))<-1074?Ln(0,r):e>1023?r<0?$n:Kn:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,Wn(Zn,r),n=Zn[0],n&=2148532223,t*Bn(n|=e+1023<<20,Zn[1])))},Yn=Xn;var Dn=Yn,Jn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Qn=xr,rt=re,et=B,nt=W,tt=function(r,e,n){var t,i,a;return a=(t=r-e)-(i=t*t)*Jn(i),Dn(1-(e-t*a/(2-a)-r),n)};var it=function(r){var e;return Qn(r)||r===nt?r:r===et?0:r>709.782712893384?nt:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(e=rt(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),tt(r-.6931471803691238*e,1.9082149292705877e-10*e,e))},at=z;var ut=function(r){return at(r)===r&&r<0},ot=Pe,ft=!0===en?1:0,ct=new Ue(1),st=new ot(ct.buffer);var vt=function(r,e){return ct[0]=r,st[ft]=e>>>0,ct[0]};var lt=wn,pt=vt,gt=xr,ht=B,yt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},wt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},dt=.6931471803691238,mt=1.9082149292705877e-10;var bt=function(r){var e,n,t,i,a,u,o,f,c,s,v;return 0===r?ht:gt(r)||r<0?NaN:(i=0,(n=lt(r))<1048576&&(i-=54,n=lt(r*=0x40000000000000)),n>=2146435072?r+r:(i+=(n>>20)-1023|0,i+=(o=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=pt(r,n|1072693248^o))-1,(1048575&2+n)<3?0===u?0===i?0:i*dt+i*mt:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*dt-(a-i*mt-u)):(o=n-398458|0,f=440401-n|0,t=(s=(v=(c=u/(2+u))*c)*v)*yt(s),a=v*wt(s)+t,(o|=f)>0?(e=.5*u*u,0===i?u-(e-c*(e+a)):i*dt-(e-(c*(e+a)+i*mt)-u)):0===i?u-c*(u-a):i*dt-(c*(u-a)-i*mt-u))))},Nt=bt;var Et=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},jt=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Pt=function(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*Et(a),t+=i*i*jt(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))},At=-.16666666666666632;var _t=function(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(At+i*n):r-(i*(.5*e-t*n)-e-t*At)},Vt=Pe,Tt=!0===en?0:1,Ot=new Ue(1),xt=new Vt(Ot.buffer);var St=function(r){return Ot[0]=r,xt[Tt]};var kt=function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n};var Ut=z,It=Yn,Mt=function(r){return kt(0,r)},Ft=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Rt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Kt=5.960464477539063e-8,$t=Mt(20),Gt=Mt(20),Ct=Mt(20),Lt=Mt(20);function qt(r,e,n,t,i,a,u,o,f){var c,s,v,l,p,g,h,y,w;for(l=a,w=t[n],y=n,p=0;y>0;p++)s=Kt*w|0,Lt[p]=w-16777216*s|0,w=t[y-1]+s,y-=1;if(w=It(w,i),w-=8*Ut(.125*w),w-=h=0|w,v=0,i>0?(h+=p=Lt[n-1]>>24-i,Lt[n-1]-=p<<24-i,v=Lt[n-1]>>23-i):0===i?v=Lt[n-1]>>23:w>=.5&&(v=2),v>0){for(h+=1,c=0,p=0;p<n;p++)y=Lt[p],0===c?0!==y&&(c=1,Lt[p]=16777216-y):Lt[p]=16777215-y;if(i>0)switch(i){case 1:Lt[n-1]&=8388607;break;case 2:Lt[n-1]&=4194303}2===v&&(w=1-w,0!==c&&(w-=It(1,i)))}if(0===w){for(y=0,p=n-1;p>=a;p--)y|=Lt[p];if(0===y){for(g=1;0===Lt[a-g];g++);for(p=n+1;p<=n+g;p++){for(f[o+p]=Ft[u+p],s=0,y=0;y<=o;y++)s+=r[y]*f[o+(p-y)];t[p]=s}return qt(r,e,n+=g,t,i,a,u,o,f)}}if(0===w)for(n-=1,i-=24;0===Lt[n];)n-=1,i-=24;else(w=It(w,-i))>=16777216?(s=Kt*w|0,Lt[n]=w-16777216*s|0,i+=24,Lt[n+=1]=s):Lt[n]=0|w;for(s=It(1,i),p=n;p>=0;p--)t[p]=s*Lt[p],s*=Kt;for(p=n;p>=0;p--){for(s=0,g=0;g<=l&&g<=n-p;g++)s+=Rt[g]*t[p+g];Ct[n-p]=s}for(s=0,p=n;p>=0;p--)s+=Ct[p];for(e[0]=0===v?s:-s,s=Ct[0]-s,p=1;p<=n;p++)s+=Ct[p];return e[1]=0===v?s:-s,7&h}var Ht=function(r,e,n,t){var i,a,u,o,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),o=n-24*(a+1),c=a-(u=t-1),s=u+4,f=0;f<=s;f++)$t[f]=c<0?0:Ft[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*$t[u+(f-c)];Gt[f]=i}return 4,qt(r,e,4,Gt,o,4,a,u,$t)},Wt=Math.round,Bt=wn;var zt=wn,Zt=St,Xt=An,Yt=Ht,Dt=function(r,e,n){var t,i,a,u,o;return a=r-1.5707963267341256*(t=Wt(.6366197723675814*r)),u=6077100506506192e-26*t,o=e>>20|0,n[0]=a-u,o-(Bt(n[0])>>20&2047)>16&&(u=20222662487959506e-37*t-((i=a)-(a=i-(u=6077100506303966e-26*t))-u),n[0]=a-u,o-(Bt(n[0])>>20&2047)>49&&(u=84784276603689e-45*t-((i=a)-(a=i-(u=20222662487111665e-37*t))-u),n[0]=a-u)),n[1]=a-n[0]-u,t},Jt=1.5707963267341256,Qt=6077100506506192e-26,ri=2*Qt,ei=4*Qt,ni=[0,0,0],ti=[0,0];var ii=function(r,e){var n,t,i,a,u,o,f;if((i=2147483647&zt(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?Dt(r,i,e):i<=1073928572?r>0?(f=r-Jt,e[0]=f-Qt,e[1]=f-e[0]-Qt,1):(f=r+Jt,e[0]=f+Qt,e[1]=f-e[0]+Qt,-1):r>0?(f=r-2*Jt,e[0]=f-ri,e[1]=f-e[0]-ri,2):(f=r+2*Jt,e[0]=f+ri,e[1]=f-e[0]+ri,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?Dt(r,i,e):r>0?(f=r-3*Jt,e[0]=f-1.8231301519518578e-10,e[1]=f-e[0]-1.8231301519518578e-10,3):(f=r+3*Jt,e[0]=f+1.8231301519518578e-10,e[1]=f-e[0]+1.8231301519518578e-10,-3):1075388923===i?Dt(r,i,e):r>0?(f=r-4*Jt,e[0]=f-ei,e[1]=f-e[0]-ei,4):(f=r+4*Jt,e[0]=f+ei,e[1]=f-e[0]+ei,-4);if(i<1094263291)return Dt(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=Zt(r),f=Xt(i-((t=(i>>20)-1046)<<20|0),n),u=0;u<2;u++)ni[u]=0|f,f=16777216*(f-ni[u]);for(ni[2]=f,a=3;0===ni[a-1];)a-=1;return o=Yt(ni,ti,t,a),r<0?(e[0]=-ti[0],e[1]=-ti[1],-o):(e[0]=ti[0],e[1]=ti[1],o)},ai=wn,ui=Pt,oi=_t,fi=ii,ci=[0,0];var si=wn,vi=Pt,li=_t,pi=ii,gi=[0,0];var hi=xr,yi=he,wi=function(r){var e;if(e=ai(r),(e&=2147483647)<=1072243195)return e<1044381696?1:ui(r,0);if(e>=2146435072)return NaN;switch(3&fi(r,ci)){case 0:return ui(ci[0],ci[1]);case 1:return-oi(ci[0],ci[1]);case 2:return-ui(ci[0],ci[1]);default:return oi(ci[0],ci[1])}},di=function(r){var e;if(e=si(r),(e&=2147483647)<=1072243195)return e<1045430272?r:li(r,0);if(e>=2146435072)return NaN;switch(3&pi(r,gi)){case 0:return li(gi[0],gi[1]);case 1:return vi(gi[0],gi[1]);case 2:return-li(gi[0],gi[1]);default:return-vi(gi[0],gi[1])}},mi=Sn,bi=xn,Ni=3.141592653589793;var Ei=xr,ji=he,Pi=Sn,Ai=Nt,_i=re,Vi=function(r){var e,n;return hi(r)||yi(r)?NaN:0===(e=mi(n=r%2))||1===e?bi(0,n):e<.25?di(Ni*n):e<.75?bi(wi(Ni*(e=.5-e)),n):e<1.25?(n=bi(1,n)-n,di(Ni*n)):e<1.75?-bi(wi(Ni*(e-=1.5)),n):(n-=bi(2,n),di(Ni*n))},Ti=W,Oi=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},xi=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Si=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},ki=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},Ui=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},Ii=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},Mi=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},Fi=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},Ri=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},Ki=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},$i=1.4616321449683622,Gi=1.4616321449683622;var Ci=ut,Li=function(r){var e,n,t,i,a,u,o,f;if(Ei(r)||ji(r))return r;if(0===r)return Ti;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-Ai(r);if(e){if(r>=4503599627370496)return Ti;if(0===(i=Vi(r)))return Ti;n=Ai(3.141592653589793/Pi(i*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(f=-Ai(r),r>=$i-1+.27?(u=1-r,t=0):r>=$i-1-.27?(u=r-(Gi-1),t=1):(u=r,t=2)):(f=0,r>=$i+.27?(u=2-r,t=0):r>=$i-.27?(u=r-Gi,t=1):(u=r-1,t=2)),t){case 0:f+=u*(.07721566490153287+(o=u*u)*Oi(o))+o*(.3224670334241136+o*xi(o))-.5*u;break;case 1:f+=-.12148629053584961+((o=u*u)*(.48383612272381005+(a=o*u)*Ui(a))-(-3638676997039505e-33-a*(a*Ii(a)-.1475877229945939+u*(.06462494023913339+a*Mi(a)))));break;case 2:f+=-.5*u+u*(u*Fi(u)-.07721566490153287)/(1+u*Ri(u))}else if(r<8)switch(f=.5*(u=r-(t=_i(r)))+u*(u*ki(u)-.07721566490153287)/(1+u*Si(u)),o=1,t){case 7:o*=u+6;case 6:o*=u+5;case 5:o*=u+4;case 4:o*=u+3;case 3:f+=Ai(o*=u+2)}else f=r<0x400000000000000?(r-.5)*((i=Ai(r))-1)+(a=.4189385332046727+(o=1/r)*Ki(u=o*o)):r*(Ai(r)-1);return e&&(f=n-f),f};var qi=function(r){return Ci(r)?NaN:Li(r+1)},Hi=_r,Wi=xr,Bi=it,zi=qi,Zi=ue,Xi=le,Yi=W;var Di=function(r){return function(){return r}},Ji=_r,Qi=xr,ra=Di,ea=it,na=qi,ta=ue,ia=le,aa=W;var ua=function(r,e,n,t){var i,a,u,o;return Wi(r)||Wi(e)||Wi(n)||Wi(t)||!Hi(e)||!Hi(n)||!Hi(t)||e===Yi||n===Yi||n>e||t>e?NaN:(o=Zi(0,t+n-e),u=Xi(n,t),Hi(r)&&o<=r&&r<=u?(a=zi(t)+zi(n)+zi(e-t)+zi(e-n),i=zi(e)+zi(r)+zi(t-r),i+=zi(n-r)+zi(e-n+r-t),Bi(a-i)):0)};y(ua,"factory",(function(r,e,n){var t,i;return Qi(r)||Qi(e)||Qi(n)||!Ji(r)||!Ji(e)||!Ji(n)||r===aa||e===aa||e>r||n>r?ra(NaN):(i=ta(0,n+e-r),t=ia(e,n),function(a){var u,o;if(Qi(a))return NaN;if(Ji(a)&&i<=a&&a<=t)return o=na(n)+na(e)+na(r-n)+na(r-e),u=na(r)+na(a)+na(n-a),u+=na(e-a)+na(r-e+a-n),ea(o-u);return 0})}));var oa=ua;var fa=function(r){var e,n,t;for(e=r.length,n=0,t=0;t<e;t++)n+=r[t];return n},ca=_r,sa=xr,va=re,la=ue,pa=le,ga=oa,ha=W,ya=Ue,wa=fa;var da=_r,ma=xr,ba=Di,Na=re,Ea=ue,ja=le,Pa=oa,Aa=W,_a=Ue,Va=fa;var Ta=function(r,e,n,t){var i,a,u,o,f;if(sa(r)||sa(e)||sa(n)||sa(t)||!ca(e)||!ca(n)||!ca(t)||e===ha||n===ha||n>e||t>e)return NaN;if((r=va(r))<la(0,t+n-e))return 0;if(r>=pa(t,n))return 1;for((a=new ya(r+1))[r]=ga(r,e,n,t),f=r-1;f>=0;f--)u=(f+1)*(e-n-(t-f-1)),i=(n-f)*(t-f),a[f]=u/i*a[f+1];return o=wa(a),pa(o,1)};y(Ta,"factory",(function(r,e,n){return ma(r)||ma(e)||ma(n)||!da(r)||!da(e)||!da(n)||r===Aa||e===Aa||e>r||n>r?ba(NaN):function(t){var i,a,u,o,f;if(ma(t))return NaN;if((t=Na(t))<Ea(0,n+e-r))return 0;if(t>=ja(n,e))return 1;for((a=new _a(t+1))[t]=Pa(t,r,e,n),f=t-1;f>=0;f--)u=(f+1)*(r-e-(n-f-1)),i=(e-f)*(n-f),a[f]=u/i*a[f+1];return o=Va(a),ja(o,1)}}));var Oa=Ta,xa=_r,Sa=xr,ka=qi,Ua=ue,Ia=le,Ma=B,Fa=W;var Ra=_r,Ka=Di,$a=xr,Ga=qi,Ca=ue,La=le,qa=B,Ha=W;var Wa=function(r,e,n,t){var i,a,u,o;return Sa(r)||Sa(e)||Sa(n)||Sa(t)||!xa(e)||!xa(n)||!xa(t)||e===Fa||n===Fa||n>e||t>e?NaN:(o=Ua(0,t+n-e),u=Ia(n,t),xa(r)&&o<=r&&r<=u?(a=ka(t)+ka(n)+ka(e-t)+ka(e-n),i=ka(e)+ka(r)+ka(t-r),a-(i+=ka(n-r)+ka(e-n+r-t))):Ma)};y(Wa,"factory",(function(r,e,n){var t,i;return $a(r)||$a(e)||$a(n)||!Ra(r)||!Ra(e)||!Ra(n)||r===Ha||e===Ha||e>r||n>r?Ka(NaN):(i=Ca(0,n+e-r),t=La(e,n),function(a){var u,o;if($a(a))return NaN;if(Ra(a)&&i<=a&&a<=t)return o=Ga(n)+Ga(e)+Ga(r-n)+Ga(r-e),u=Ga(r)+Ga(a)+Ga(n-a),u+=Ga(e-a)+Ga(r-e+a-n),o-u;return qa})}));var Ba=Wa,za=_r,Za=xr,Xa=ue,Ya=le,Da=Oa,Ja=W;var Qa=_r,ru=xr,eu=Di,nu=ue,tu=le,iu=Oa,au=W;var uu=function(r,e,n,t){var i;if(Za(r)||Za(e)||Za(n)||Za(t)||!za(e)||!za(n)||!za(t)||e===Ja||n===Ja||n>e||t>e||r<0||r>1)return NaN;if(0===r)return Xa(0,t+n-e);if(1===r)return Ya(t,n);for(i=Xa(0,t+n-e);!(Da(i,e,n,t)>r);)i+=1;return i};y(uu,"factory",(function(r,e,n){return ru(r)||ru(e)||ru(n)||!Qa(r)||!Qa(e)||!Qa(n)||r===au||e===au||e>r||n>r?eu(NaN):function(t){var i;if(ru(t)||t<0||t>1)return NaN;if(0===t)return nu(0,n+e-r);if(1===t)return tu(n,e);i=nu(0,n+e-r);for(;!(iu(i,r,e,n)>t);)i+=1;return i}}));var ou=uu;var fu=function(r){return"string"==typeof r},cu=String.prototype.valueOf;var su=S,vu=function(r){try{return cu.call(r),!0}catch(r){return!1}},lu=m();var pu=function(r){return"object"==typeof r&&(r instanceof String||(lu?vu(r):"[object String]"===su(r)))},gu=fu,hu=pu;var yu=y,wu=function(r){return gu(r)||hu(r)},du=pu;yu(wu,"isPrimitive",fu),yu(wu,"isObject",du);var mu=wu,bu=X;var Nu=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&bu(r.length)&&r.length>=0&&r.length<=9007199254740991},Eu=H.isPrimitive,ju=xr;var Pu=function(r){return Eu(r)&&ju(r)},Au=H.isObject,_u=xr;var Vu=function(r){return Au(r)&&_u(r.valueOf())},Tu=Pu,Ou=Vu;var xu=y,Su=function(r){return Tu(r)||Ou(r)},ku=Vu;xu(Su,"isPrimitive",Pu),xu(Su,"isObject",ku);var Uu=Nu,Iu=vr.isPrimitive,Mu=mu.isPrimitive,Fu=Su.isPrimitive;var Ru=function(r,e,n){var t,i,a;if(!Uu(r)&&!Mu(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Iu(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");(i=n)<0&&(i=0)}else i=0;if(Mu(r)){if(!Mu(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(t=r.length,Fu(e)){for(a=i;a<t;a++)if(Fu(r[a]))return!0;return!1}for(a=i;a<t;a++)if(r[a]===e)return!0;return!1},Ku=mu.isPrimitive;var $u=function(r){if(!Ku(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Gu=mu.isPrimitive;var Cu=function(r){if(!Gu(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Lu=$u,qu=Cu,Hu=mu.isPrimitive;var Wu=function(r){return Hu(r)&&r===qu(r)&&r!==Lu(r)},Bu=W,zu=B;var Zu=function(r){return r==r&&r>zu&&r<Bu},Xu=Nr.isPrimitive,Yu=mu.isPrimitive;var Du=function(r,e){var n,t;if(!Yu(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Xu(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(n="",t=e;1==(1&t)&&(n+=r),0!==(t>>>=1);)r+=r;return n},Ju=vr.isPrimitive,Qu=mu.isPrimitive;var ro=Du,eo=function(r,e,n){var t,i;if(!Qu(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Qu(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Ju(n))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+n+"`.");t=n<0?r.length+n:n}else t=0;if(0===e.length)return!0;if(t<0||t+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(t+i)!==e.charCodeAt(i))return!1;return!0};var no=function(r,e,n){var t=!1,i=e-r.length;return i<0||(eo(r,"-")&&(t=!0,r=r.substr(1)),r=n?r+ro("0",i):ro("0",i)+r,t&&(r="-"+r)),r},to=Wu,io=Cu,ao=$u,uo=Zu,oo=H.isPrimitive,fo=no;var co=function(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!uo(t)){if(!oo(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=fo(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=fo(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=to(r.specifier)?io(n):ao(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n},so=mu.isPrimitive,vo=/[-\/\\^$*+?.()|[\]{}]/g;var lo=function(r){var e,n;if(!so(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(n=r.length-1;n>=0&&"/"!==r[n];n--);return void 0===n||n<=0?r.replace(vo,"\\$&"):(e=(e=r.substring(1,n)).replace(vo,"\\$&"),r=r[0]+e+r.substring(n))},po=/./;var go=function(r){return"boolean"==typeof r},ho=Boolean.prototype.toString;var yo=S,wo=function(r){try{return ho.call(r),!0}catch(r){return!1}},mo=m();var bo=function(r){return"object"==typeof r&&(r instanceof Boolean||(mo?wo(r):"[object Boolean]"===yo(r)))},No=go,Eo=bo;var jo=y,Po=function(r){return No(r)||Eo(r)},Ao=bo;jo(Po,"isPrimitive",go),jo(Po,"isObject",Ao);var _o="object"==typeof self?self:null,Vo="object"==typeof window?window:null,To=Po.isPrimitive,Oo=function(){return new Function("return this;")()},xo=_o,So=Vo,ko=r(Object.freeze({__proto__:null}));var Uo=function(r){if(arguments.length){if(!To(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Oo()}if(xo)return xo;if(So)return So;if(ko)return ko;throw new Error("unexpected error. Unable to resolve global object.")},Io=Uo(),Mo=Io.document&&Io.document.childNodes,Fo=Int8Array,Ro=po,Ko=Mo,$o=Fo;var Go=function(){return"function"==typeof Ro||"object"==typeof $o||"function"==typeof Ko};var Co=function(){return/^\s*function\s*([^(]*)/i},Lo=Co;y(Lo,"REGEXP",Co());var qo=Lo,Ho=S;var Wo=Array.isArray?Array.isArray:function(r){return"[object Array]"===Ho(r)};var Bo=function(r){return null!==r&&"object"==typeof r};y(Bo,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var n,t;if(!Wo(e))return!1;if(0===(n=e.length))return!1;for(t=0;t<n;t++)if(!1===r(e[t]))return!1;return!0}}(Bo));var zo=Bo;var Zo=S,Xo=qo.REGEXP,Yo=function(r){return zo(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Do=function(r){var e,n,t;if(("Object"===(n=Zo(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(t=r.constructor).name)return t.name;if(e=Xo.exec(t.toString()))return e[1]}return Yo(r)?"Buffer":n},Jo=Do;var Qo=Do;var rf=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Jo(r).toLowerCase():e},ef=function(r){return Qo(r).toLowerCase()},nf=Go()?ef:rf;var tf=function(r){return"function"===nf(r)},af=RegExp.prototype.exec;var uf=S,of=function(r){try{return af.call(r),!0}catch(r){return!1}},ff=m();var cf=lo,sf=tf,vf=mu.isPrimitive,lf=function(r){return"object"==typeof r&&(r instanceof RegExp||(ff?of(r):"[object RegExp]"===uf(r)))};var pf=Wu,gf=Cu,hf=$u,yf=function(r,e,n){if(!vf(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(vf(e))e=cf(e),e=new RegExp(e,"g");else if(!lf(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!vf(n)&&!sf(n))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+n+"`.");return r.replace(e,n)},wf=Zu,df=H.isPrimitive,mf=Sn,bf=/e\+(\d)$/,Nf=/e-(\d)$/,Ef=/^(\d+)$/,jf=/^(\d+)e/,Pf=/\.0$/,Af=/\.0*e/,_f=/(\..*[^0])0*e/;var Vf=function(r){var e,n,t=parseFloat(r.arg);if(!wf(t)){if(!df(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":mf(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=yf(n,_f,"$1e"),n=yf(n,Af,"e"),n=yf(n,Pf,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=yf(n,bf,"e+0$1"),n=yf(n,Nf,"e-0$1"),r.alternate&&(n=yf(n,Ef,"$1."),n=yf(n,jf,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=pf(r.specifier)?gf(n):hf(n)},Tf=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Of=Du;var xf=mu.isPrimitive,Sf=Ru,kf=xr,Uf=co,If=Vf,Mf=function(r){var e,n,t,i,a;for(e=0,t=[],a=Tf.exec(r);a;)(n=r.slice(e,Tf.lastIndex-a[0].length)).length&&t.push(n),(i=u(a,t.length))&&t.push(i),e=Tf.lastIndex,a=Tf.exec(r);return(n=r.slice(e)).length&&t.push(n),t;function u(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Ff=function(r,e,n){var t=e-r.length;return t<0?r:r=n?r+Of(" ",t):Of(" ",t)+r},Rf=no,Kf=String.fromCharCode;var $f=Nr.isPrimitive,Gf=p,Cf=y,Lf=Pr,qf=Or,Hf=Ir,Wf=Kr,Bf=qr,zf=zr,Zf=Yr,Xf=Oa,Yf=Ba,Df=oa,Jf=ou,Qf=function(r){var e,n,t,i,a,u,o,f,c;if(!xf(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Mf(r),u="",o=1,f=0;f<e.length;f++)if(t=e[f],xf(t))u+=t;else{for(t.mapping&&(o=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=!Sf(n,"-");break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[o],10),o+=1,kf(t.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if("*"===t.precision&&t.hasPeriod){if(t.precision=parseInt(arguments[o],10),o+=1,kf(t.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,t.hasPeriod=!1)}switch(t.arg=arguments[o],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t.hasPeriod&&(t.padZeros=!1),t.arg=Uf(t);break;case"s":t.maxWidth=t.hasPeriod?t.precision:-1;break;case"c":if(!kf(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=kf(a)?String(t.arg):Kf(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t.hasPeriod||(t.precision=6),t.arg=If(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Rf(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ff(t.arg,t.width,t.padRight)),u+=t.arg||"",o+=1}return u};function rc(r,e,n){if(!(this instanceof rc))return new rc(r,e,n);if(!$f(r))throw new TypeError(Qf("invalid argument. Population size `N` must be a nonnegative integer. Value: `%s`.",r));if(!$f(e))throw new TypeError(Qf("invalid argument. Subpopulation size `K` must be a nonnegative integer. Value: `%s`.",e));if(!$f(n))throw new TypeError(Qf("invalid argument. Number of draws `n` must be a nonnegative integer. Value: `%s`.",n));if(e>r)throw new RangeError("invalid arguments. Subpopulation size `K` must be less than or equal to `N`.");if(n>r)throw new RangeError("invalid arguments. Number of draws `n` must be less than or equal to `N`.");return Gf(this,"N",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!$f(t))throw new TypeError(Qf("invalid value. Must be a nonnegative integer. Value: `%s`.",t));if(e>t)throw new RangeError(Qf("invalid value. Must be larger than or equal to `%s`. Value: `%u`.","K",t));if(n>t)throw new RangeError(Qf("invalid value. Must be larger than or equal to `%s`. Value: `%u`.","n",t));r=t}}),Gf(this,"K",{configurable:!1,enumerable:!0,get:function(){return e},set:function(n){if(!$f(n))throw new TypeError(Qf("invalid value. Must be a nonnegative integer. Value: `%s`.",n));if(n>r)throw new RangeError(Qf("invalid value. Must be less than or equal to `%s`. Value: `%u`.","N",n));e=n}}),Gf(this,"n",{configurable:!1,enumerable:!0,get:function(){return n},set:function(e){if(!$f(e))throw new TypeError(Qf("invalid value. Must be a nonnegative integer. Value: `%s`.",e));if(e>r)throw new RangeError(Qf("invalid value. Must be less than or equal to `%s`. Value: `%u`.","N",e));n=e}}),this}Lf(rc.prototype,"kurtosis",(function(){return qf(this.N,this.K,this.n)})),Lf(rc.prototype,"mean",(function(){return Hf(this.N,this.K,this.n)})),Lf(rc.prototype,"mode",(function(){return Wf(this.N,this.K,this.n)})),Lf(rc.prototype,"skewness",(function(){return Bf(this.N,this.K,this.n)})),Lf(rc.prototype,"stdev",(function(){return zf(this.N,this.K,this.n)})),Lf(rc.prototype,"variance",(function(){return Zf(this.N,this.K,this.n)})),Cf(rc.prototype,"cdf",(function(r){return Xf(r,this.N,this.K,this.n)})),Cf(rc.prototype,"logpmf",(function(r){return Yf(r,this.N,this.K,this.n)})),Cf(rc.prototype,"pmf",(function(r){return Df(r,this.N,this.K,this.n)})),Cf(rc.prototype,"quantile",(function(r){return Jf(r,this.N,this.K,this.n)}));var ec=rc;export{ec as default};
//# sourceMappingURL=mod.js.map
