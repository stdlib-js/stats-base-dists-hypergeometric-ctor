// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,a=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,v="set"in f,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,f.get),v&&i&&i.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(r){return"number"==typeof r}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return l&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString,p=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",b=v()?function(r){var n,t,e,u,i;if(null==r)return y.call(r);t=r[h],i=h,n=null!=(u=r)&&p.call(u,i);try{r[h]=void 0}catch(n){return y.call(r)}return e=y.call(r),n?r[h]=t:delete r[h],e}:function(r){return y.call(r)},N=Number,w=N.prototype.toString,g=v();function m(r){return"object"==typeof r&&(r instanceof N||(g?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Number]"===b(r)))}function d(r){return s(r)||m(r)}c(d,"isPrimitive",s),c(d,"isObject",m);var A=Number.POSITIVE_INFINITY,_=N.NEGATIVE_INFINITY,j=Math.floor;function E(r){return r<A&&r>_&&j(n=r)===n;var n}function U(r){return s(r)&&E(r)}function O(r){return m(r)&&E(r.valueOf())}function T(r){return U(r)||O(r)}function S(r){return U(r)&&r>=0}function I(r){return O(r)&&r.valueOf()>=0}function V(r){return S(r)||I(r)}function M(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function K(r){return j(r)===r&&r>=0}function F(r){return r!=r}c(T,"isPrimitive",U),c(T,"isObject",O),c(V,"isPrimitive",S),c(V,"isObject",I);var P=Math.sqrt,H=Math.ceil;function q(r){return r<0?H(r):j(r)}function k(r){return 0===r&&1/r===A}function G(r,n){var t,e,u,i;if(2===(t=arguments.length))return F(r)||F(n)?NaN:r===A||n===A?A:r===n&&0===r?k(r)?r:n:r>n?r:n;for(e=_,i=0;i<t;i++){if(F(u=arguments[i])||u===A)return u;(u>e||u===e&&0===u&&k(u))&&(e=u)}return e}function R(r){return 0===r&&1/r===_}function x(r,n){var t,e,u,i;if(2===(t=arguments.length))return F(r)||F(n)?NaN:r===_||n===_?_:r===n&&0===r?R(r)?r:n:r<n?r:n;for(e=A,i=0;i<t;i++){if(F(u=arguments[i])||u===_)return u;(u<e||u===e&&0===u&&R(u))&&(e=u)}return e}var z=1023;function L(r){return r===A||r===_}var W,C="function"==typeof Uint32Array,Y="function"==typeof Uint32Array?Uint32Array:null,B="function"==typeof Uint32Array?Uint32Array:void 0;W=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(C&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D,J=W,Q="function"==typeof Float64Array,X="function"==typeof Float64Array?Float64Array:null,Z="function"==typeof Float64Array?Float64Array:void 0;D=function(){var r,n,t;if("function"!=typeof X)return!1;try{n=new X([1,3.14,-3.14,NaN]),t=n,r=(Q&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var $,rr=D,nr="function"==typeof Uint8Array,tr="function"==typeof Uint8Array?Uint8Array:null,er="function"==typeof Uint8Array?Uint8Array:void 0;$=function(){var r,n,t;if("function"!=typeof tr)return!1;try{n=new tr(n=[1,3.14,-3.14,256,257]),t=n,r=(nr&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ur,ir=$,or="function"==typeof Uint16Array,ar="function"==typeof Uint16Array?Uint16Array:null,fr="function"==typeof Uint16Array?Uint16Array:void 0;ur=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,65536,65537]),t=n,r=(or&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,sr={uint16:ur,uint8:ir};(cr=new sr.uint16(1))[0]=4660;var lr,vr,yr=52===new sr.uint8(cr.buffer)[0];!0===yr?(lr=1,vr=0):(lr=0,vr=1);var pr={HIGH:lr,LOW:vr},hr=new rr(1),br=new J(hr.buffer),Nr=pr.HIGH,wr=pr.LOW;function gr(r,n){return hr[0]=n,r[0]=br[Nr],r[1]=br[wr],r}function mr(r,n){return 1===arguments.length?gr([0,0],r):gr(r,n)}var dr,Ar,_r=!0===yr?1:0,jr=new rr(1),Er=new J(jr.buffer);function Ur(r){return jr[0]=r,Er[_r]}!0===yr?(dr=1,Ar=0):(dr=0,Ar=1);var Or={HIGH:dr,LOW:Ar},Tr=new rr(1),Sr=new J(Tr.buffer),Ir=Or.HIGH,Vr=Or.LOW;function Mr(r,n){return Sr[Ir]=r,Sr[Vr]=n,Tr[0]}var Kr=[0,0];function Fr(r,n){var t,e;return mr(Kr,r),t=Kr[0],t&=2147483647,e=Ur(n),Mr(t|=e&=2147483648,Kr[1])}function Pr(r){return Math.abs(r)}function Hr(r,n){return F(n)||L(n)?(r[0]=n,r[1]=0,r):0!==n&&Pr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var qr=[0,0],kr=[0,0];function Gr(r,n){var t,e;return 0===n||0===r||F(r)||L(r)?r:(function(r,n){1===arguments.length?Hr([0,0],r):Hr(r,n)}(qr,r),n+=qr[1],n+=function(r){var n=Ur(r);return(n=(2146435072&n)>>>20)-z|0}(r=qr[0]),n<-1074?Fr(0,r):n>1023?r<0?_:A:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,mr(kr,r),t=kr[0],t&=2148532223,e*Mr(t|=n+z<<20,kr[1])))}var Rr=1.4426950408889634,xr=1/(1<<28);function zr(r){var n;return F(r)||r===A?r:r===_?0:r>709.782712893384?A:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<xr?1+r:function(r,n,t){var e,u,i,o;return Gr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=q(r<0?Rr*r-.5:Rr*r+.5)),1.9082149292705877e-10*n,n)}var Lr=!0===yr?1:0,Wr=new rr(1),Cr=new J(Wr.buffer),Yr=.6931471803691238,Br=1.9082149292705877e-10,Dr=1048575;function Jr(r){var n,t,e,u,i,o,a,f,c,s,l,v;return 0===r?_:F(r)||r<0?NaN:(i=0,(t=Ur(r))<1048576&&(i-=54,t=Ur(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-z|0,i+=(f=614244+(t&=Dr)&1048576|0)>>20|0,a=(r=function(r,n){return Wr[0]=r,Cr[Lr]=n>>>0,Wr[0]}(r,t|1072693248^f))-1,(Dr&2+t)<3?0===a?0===i?0:i*Yr+i*Br:(o=a*a*(.5-.3333333333333333*a),0===i?a-o:i*Yr-(o-i*Br-a)):(f=t-398458|0,c=440401-t|0,u=(l=(v=(s=a/(2+a))*s)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=e+u,(f|=c)>0?(n=.5*a*a,0===i?a-(n-s*(n+o)):i*Yr-(n-(s*(n+o)+i*Br)-a)):0===i?a-s*(a-o):i*Yr-(s*(a-o)-i*Br-a))))}function Qr(r,n){var t,e,u,i;return u=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(t=.5*i))+(1-u-t+(i*e-r*n))}var Xr=-.16666666666666632;function Zr(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Xr+u*t):r-(u*(.5*n-e*t)-n-e*Xr)}var $r=!0===yr?0:1,rn=new rr(1),nn=new J(rn.buffer);function tn(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var en=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],un=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],on=16777216,an=5.960464477539063e-8,fn=tn(20),cn=tn(20),sn=tn(20),ln=tn(20);function vn(r,n,t,e,u,i,o,a,f){var c,s,l,v,y,p,h,b,N;for(v=i,N=e[t],b=t,y=0;b>0;y++)s=an*N|0,ln[y]=N-on*s|0,N=e[b-1]+s,b-=1;if(N=Gr(N,u),N-=8*j(.125*N),N-=h=0|N,l=0,u>0?(h+=y=ln[t-1]>>24-u,ln[t-1]-=y<<24-u,l=ln[t-1]>>23-u):0===u?l=ln[t-1]>>23:N>=.5&&(l=2),l>0){for(h+=1,c=0,y=0;y<t;y++)b=ln[y],0===c?0!==b&&(c=1,ln[y]=16777216-b):ln[y]=16777215-b;if(u>0)switch(u){case 1:ln[t-1]&=8388607;break;case 2:ln[t-1]&=4194303}2===l&&(N=1-N,0!==c&&(N-=Gr(1,u)))}if(0===N){for(b=0,y=t-1;y>=i;y--)b|=ln[y];if(0===b){for(p=1;0===ln[i-p];p++);for(y=t+1;y<=t+p;y++){for(f[a+y]=en[o+y],s=0,b=0;b<=a;b++)s+=r[b]*f[a+(y-b)];e[y]=s}return vn(r,n,t+=p,e,u,i,o,a,f)}}if(0===N)for(t-=1,u-=24;0===ln[t];)t-=1,u-=24;else(N=Gr(N,-u))>=on?(s=an*N|0,ln[t]=N-on*s|0,u+=24,ln[t+=1]=s):ln[t]=0|N;for(s=Gr(1,u),y=t;y>=0;y--)e[y]=s*ln[y],s*=an;for(y=t;y>=0;y--){for(s=0,p=0;p<=v&&p<=t-y;p++)s+=un[p]*e[y+p];sn[t-y]=s}for(s=0,y=t;y>=0;y--)s+=sn[y];for(n[0]=0===l?s:-s,s=sn[0]-s,y=1;y<=t;y++)s+=sn[y];return n[1]=0===l?s:-s,7&h}function yn(r,n,t,e){var u,i,o,a,f,c,s;for((i=(t-3)/24|0)<0&&(i=0),a=t-24*(i+1),c=i-(o=e-1),s=o+4,f=0;f<=s;f++)fn[f]=c<0?0:en[c],c+=1;for(f=0;f<=4;f++){for(u=0,c=0;c<=o;c++)u+=r[c]*fn[o+(f-c)];cn[f]=u}return vn(r,n,4,cn,a,4,i,o,fn)}var pn=Math.round;function hn(r,n,t){var e,u,i,o,a;return i=r-1.5707963267341256*(e=pn(.6366197723675814*r)),o=6077100506506192e-26*e,a=n>>20|0,t[0]=i-o,a-(Ur(t[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((u=i)-(i=u-(o=6077100506303966e-26*e))-o),t[0]=i-o,a-(Ur(t[0])>>20&2047)>49&&(o=84784276603689e-45*e-((u=i)-(i=u-(o=20222662487111665e-37*e))-o),t[0]=i-o)),t[1]=i-t[0]-o,e}var bn=1.5707963267341256,Nn=6077100506506192e-26,wn=2*Nn,gn=3*Nn,mn=4*Nn,dn=[0,0,0],An=[0,0];function _n(r,n){var t,e,u,i,o,a,f;if((u=2147483647&Ur(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?hn(r,u,n):u<=1073928572?r>0?(f=r-bn,n[0]=f-Nn,n[1]=f-n[0]-Nn,1):(f=r+bn,n[0]=f+Nn,n[1]=f-n[0]+Nn,-1):r>0?(f=r-2*bn,n[0]=f-wn,n[1]=f-n[0]-wn,2):(f=r+2*bn,n[0]=f+wn,n[1]=f-n[0]+wn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?hn(r,u,n):r>0?(f=r-3*bn,n[0]=f-gn,n[1]=f-n[0]-gn,3):(f=r+3*bn,n[0]=f+gn,n[1]=f-n[0]+gn,-3):1075388923===u?hn(r,u,n):r>0?(f=r-4*bn,n[0]=f-mn,n[1]=f-n[0]-mn,4):(f=r+4*bn,n[0]=f+mn,n[1]=f-n[0]+mn,-4);if(u<1094263291)return hn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return rn[0]=r,nn[$r]}(r),f=Mr(u-((e=(u>>20)-1046)<<20|0),t),o=0;o<2;o++)dn[o]=0|f,f=16777216*(f-dn[o]);for(dn[2]=f,i=3;0===dn[i-1];)i-=1;return a=yn(dn,An,e,i),r<0?(n[0]=-An[0],n[1]=-An[1],-a):(n[0]=An[0],n[1]=An[1],a)}var jn=[0,0];function En(r){var n;if(n=Ur(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Qr(r,0);if(n>=2146435072)return NaN;switch(3&_n(r,jn)){case 0:return Qr(jn[0],jn[1]);case 1:return-Zr(jn[0],jn[1]);case 2:return-Qr(jn[0],jn[1]);default:return Zr(jn[0],jn[1])}}var Un=[0,0];function On(r){var n;if(n=Ur(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Zr(r,0);if(n>=2146435072)return NaN;switch(3&_n(r,Un)){case 0:return Zr(Un[0],Un[1]);case 1:return Qr(Un[0],Un[1]);case 2:return-Zr(Un[0],Un[1]);default:return-Qr(Un[0],Un[1])}}var Tn=3.141592653589793,Sn=1.4616321449683622,In=1.4616321449683622;function Vn(r){var n,t,e,u,i,o,a,f,c,s,l,v,y;if(F(r)||L(r))return r;if(0===r)return A;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Jr(r);if(n){if(r>=4503599627370496)return A;if(c=function(r){var n,t;return F(r)||L(r)?NaN:0===(n=Pr(t=r%2))||1===n?Fr(0,t):n<.25?On(Tn*t):n<.75?Fr(En(Tn*(n=.5-n)),t):n<1.25?(t=Fr(1,t)-t,On(Tn*t)):n<1.75?-Fr(En(Tn*(n-=1.5)),t):(t-=Fr(2,t),On(Tn*t))}(r),0===c)return A;t=Jr(Tn/Pr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(y=-Jr(r),r>=Sn-1+.27?(l=1-r,e=0):r>=Sn-1-.27?(l=r-(In-1),e=1):(l=r,e=2)):(y=0,r>=Sn+.27?(l=2-r,e=0):r>=Sn-.27?(l=r-In,e=1):(l=r-1,e=2)),e){case 0:o=.07721566490153287+(v=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),i=v*(.3224670334241136+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),y+=(a=l*o+i)-.5*l;break;case 1:o=.48383612272381005+(s=(v=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),i=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,u=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),y+=(a=v*o-(-3638676997039505e-33-s*(i+l*u)))-.12148629053584961;break;case 2:o=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),i=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),y+=-.5*l+o/i}else if(r<8)switch(a=(l=r-(e=q(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),f=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),y=.5*l+a/f,v=1,e){case 7:v*=l+6;case 6:v*=l+5;case 5:v*=l+4;case 4:v*=l+3;case 3:y+=Jr(v*=l+2)}else r<0x400000000000000?(c=Jr(r),s=.4189385332046727+(v=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=v*v),y=(r-.5)*(c-1)+s):y=r*(Jr(r)-1);return n&&(y=t-y),y}function Mn(r){return function(r){return j(r)===r&&r<0}(r)?NaN:Vn(r+1)}function Kn(r,n,t,e){var u,i,o,a;return F(r)||F(n)||F(t)||F(e)||!K(n)||!K(t)||!K(e)||n===A||t===A||t>n||e>n?NaN:(a=G(0,e+t-n),o=x(t,e),K(r)&&a<=r&&r<=o?(i=Mn(e)+Mn(t)+Mn(n-e)+Mn(n-t),u=Mn(n)+Mn(r)+Mn(e-r),zr(i-(u+=Mn(t-r)+Mn(n-t+r-e)))):0)}function Fn(r){return function(){return r}}function Pn(r){var n,t,e;for(n=r.length,t=0,e=0;e<n;e++)t+=r[e];return t}function Hn(r,n,t,e){var u,i,o,a;if(F(r)||F(n)||F(t)||F(e)||!K(n)||!K(t)||!K(e)||n===A||t===A||t>n||e>n)return NaN;if((r=q(r))<G(0,e+t-n))return 0;if(r>=x(e,t))return 1;for((i=new rr(r+1))[r]=Kn(r,n,t,e),a=r-1;a>=0;a--)o=(a+1)*(n-t-(e-a-1)),u=(t-a)*(e-a),i[a]=o/u*i[a+1];return x(Pn(i),1)}function qn(r,n,t,e){var u,i,o,a;return F(r)||F(n)||F(t)||F(e)||!K(n)||!K(t)||!K(e)||n===A||t===A||t>n||e>n?NaN:(a=G(0,e+t-n),o=x(t,e),K(r)&&a<=r&&r<=o?(i=Mn(e)+Mn(t)+Mn(n-e)+Mn(n-t),u=Mn(n)+Mn(r)+Mn(e-r),i-(u+=Mn(t-r)+Mn(n-t+r-e))):_)}function kn(r,n,t,e){var u;if(F(r)||F(n)||F(t)||F(e)||!K(n)||!K(t)||!K(e)||n===A||t===A||t>n||e>n||r<0||r>1)return NaN;if(0===r)return G(0,e+t-n);if(1===r)return x(e,t);for(u=G(0,e+t-n);!(Hn(u,n,t,e)>r);)u+=1;return u}function Gn(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function Rn(r,n,t){if(!(this instanceof Rn))return new Rn(r,n,t);if(!S(r))throw new TypeError(Gn("invalid argument. Population size must be a nonnegative integer. Value: `%s`.",r));if(!S(n))throw new TypeError(Gn("invalid argument. Subpopulation size must be a nonnegative integer. Value: `%s`.",n));if(!S(t))throw new TypeError(Gn("invalid argument. Number of draws must be a nonnegative integer. Value: `%s`.",t));if(n>r)throw new RangeError("invalid arguments. Subpopulation size must be less than or equal to the population size.");if(t>r)throw new RangeError("invalid arguments. Number of draws must be less than or equal to the population size.");return f(this,"N",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!S(e))throw new TypeError(Gn("invalid assignment. Must be a nonnegative integer. Value: `%s`.",e));if(n>e)throw new RangeError(Gn("invalid assignment. Must be larger than or equal to %u. Value: `%u`.",n,e));if(t>e)throw new RangeError(Gn("invalid assignment. Must be larger than or equal to %u. Value: `%u`.",t,e));r=e}}),f(this,"K",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!S(t))throw new TypeError(Gn("invalid assignment. Must be a nonnegative integer. Value: `%s`.",t));if(t>r)throw new RangeError(Gn("invalid assignment. Must be less than or equal to %u. Value: `%u`.",r,t));n=t}}),f(this,"n",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!S(n))throw new TypeError(Gn("invalid assignment. Must be a nonnegative integer. Value: `%s`.",n));if(n>r)throw new RangeError(Gn("invalid assignment. Must be less than or equal to %u. Value: `%u`.",r,n));t=n}}),this}return c(Kn,"factory",(function(r,n,t){var e,u;return F(r)||F(n)||F(t)||!K(r)||!K(n)||!K(t)||r===A||n===A||n>r||t>r?Fn(NaN):(u=G(0,t+n-r),e=x(n,t),function(i){var o,a;return F(i)?NaN:K(i)&&u<=i&&i<=e?(a=Mn(t)+Mn(n)+Mn(r-t)+Mn(r-n),o=Mn(r)+Mn(i)+Mn(t-i),o+=Mn(n-i)+Mn(r-n+i-t),zr(a-o)):0})})),c(Hn,"factory",(function(r,n,t){return F(r)||F(n)||F(t)||!K(r)||!K(n)||!K(t)||r===A||n===A||n>r||t>r?Fn(NaN):function(e){var u,i,o,a;if(F(e))return NaN;if((e=q(e))<G(0,t+n-r))return 0;if(e>=x(t,n))return 1;for((i=new rr(e+1))[e]=Kn(e,r,n,t),a=e-1;a>=0;a--)o=(a+1)*(r-n-(t-a-1)),u=(n-a)*(t-a),i[a]=o/u*i[a+1];return x(Pn(i),1)}})),c(qn,"factory",(function(r,n,t){var e,u;return F(r)||F(n)||F(t)||!K(r)||!K(n)||!K(t)||r===A||n===A||n>r||t>r?Fn(NaN):(u=G(0,t+n-r),e=x(n,t),function(i){var o,a;return F(i)?NaN:K(i)&&u<=i&&i<=e?(a=Mn(t)+Mn(n)+Mn(r-t)+Mn(r-n),o=Mn(r)+Mn(i)+Mn(t-i),o+=Mn(n-i)+Mn(r-n+i-t),a-o):_})})),c(kn,"factory",(function(r,n,t){return F(r)||F(n)||F(t)||!K(r)||!K(n)||!K(t)||r===A||n===A||n>r||t>r?Fn(NaN):function(e){var u;if(F(e)||e<0||e>1)return NaN;if(0===e)return G(0,t+n-r);if(1===e)return x(t,n);for(u=G(0,t+n-r);!(Hn(u,r,n,t)>e);)u+=1;return u}})),M(Rn.prototype,"kurtosis",(function(){return r=this.N,n=this.K,t=this.n,!K(r)||!K(n)||!K(t)||r===A||n===A||n>r||t>r?NaN:(e=r*r*(r-1)*(r*(r+1)-6*n*(r-n)-6*t*(r-t)),(e+=6*t*n*(r-n)*(r-t)*(5*r-6))/(t*n*(r-n)*(r-t)*(r-2)*(r-3)));var r,n,t,e})),M(Rn.prototype,"mean",(function(){return r=this.N,n=this.K,t=this.n,F(r)||F(n)||F(t)||!K(r)||!K(n)||!K(t)||r===A||n===A||n>r||t>r?NaN:t*(n/r);var r,n,t})),M(Rn.prototype,"mode",(function(){return r=this.N,n=this.K,t=this.n,!K(r)||!K(n)||!K(t)||r===A||n===A||n>r||t>r?NaN:j((t+1)*(n+1)/(r+2));var r,n,t})),M(Rn.prototype,"skewness",(function(){return r=this.N,n=this.K,t=this.n,!K(r)||!K(n)||!K(t)||r===A||n===A||n>r||t>r?NaN:(r-2*n)*P(r-1)*(r-2*t)/(P(t*n*(r-n)*(r-t))*(r-2));var r,n,t})),M(Rn.prototype,"stdev",(function(){return r=this.N,n=this.K,t=this.n,!K(r)||!K(n)||!K(t)||r===A||n===A||n>r||t>r?NaN:P(t*(n/r)*((r-n)/r)*((r-t)/(r-1)));var r,n,t})),M(Rn.prototype,"variance",(function(){return r=this.N,n=this.K,t=this.n,!K(r)||!K(n)||!K(t)||r===A||n===A||n>r||t>r?NaN:t*(n/r)*((r-n)/r)*((r-t)/(r-1));var r,n,t})),c(Rn.prototype,"cdf",(function(r){return Hn(r,this.N,this.K,this.n)})),c(Rn.prototype,"logpmf",(function(r){return qn(r,this.N,this.K,this.n)})),c(Rn.prototype,"pmf",(function(r){return Kn(r,this.N,this.K,this.n)})),c(Rn.prototype,"quantile",(function(r){return kn(r,this.N,this.K,this.n)})),Rn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Hypergeometric=n();
//# sourceMappingURL=browser.js.map
