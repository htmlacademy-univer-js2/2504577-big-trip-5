(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);s&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",c="month",l="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,c),r=n-i<0,a=t.clone().add(s+(r?-1:1),c);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:o,d:a,D:d,h:r,m:i,s,ms:n,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",$={};$[y]=v;var b="$isDayjsObject",g=function(e){return e instanceof E||!(!e||!e[b])},M=function e(t,n,s){var i;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();$[r]&&(i=r),n&&($[r]=n,i=r);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;$[o]=t,i=o}return!s&&i&&(y=i),i||!s&&y},w=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new E(n)},S=_;S.l=M,S.i=g,S.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function v(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[b]=!0}var m=v.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,l=!!S.u(t)||t,p=S.p(e),f=function(e,t){var s=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return l?s:s.endOf(a)},h=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return l?f(1,0):f(31,11);case c:return l?f(1,m):f(0,m+1);case o:var $=this.$locale().weekStart||0,b=(v<$?v+7:v)-$;return f(l?_-b:_+(6-b),m);case a:case d:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case s:return h(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,l=S.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[c]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[i]=p+"Minutes",o[s]=p+"Seconds",o[n]=p+"Milliseconds",o)[l],h=l===a?this.$D+(t-this.$W):t;if(l===c||l===u){var v=this.clone().set(d,1);v.$d[f](h),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[S.p(e)]()},m.add=function(n,l){var d,p=this;n=Number(n);var f=S.p(l),h=function(e){var t=w(p);return S.w(t.date(t.date()+Math.round(e*n)),p)};if(f===c)return this.set(c,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return h(1);if(f===o)return h(7);var v=(d={},d[i]=e,d[r]=t,d[s]=1e3,d)[f]||1,m=this.$d.getTime()+n*v;return S.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),r=this.$H,a=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,i,r){return e&&(e[n]||e(t,s))||i[n].slice(0,r)},f=function(e){return S.s(r%12||12,e,"0")},v=u||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(h,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,l,3);case"MMMM":return d(l,o);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(r);case"HH":return S.s(r,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return v(r,a,!0);case"A":return v(r,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,p){var f,h=this,v=S.p(d),m=w(n),_=(m.utcOffset()-this.utcOffset())*e,y=this-m,$=function(){return S.m(h,m)};switch(v){case u:f=$()/12;break;case c:f=$();break;case l:f=$()/3;break;case o:f=(y-_)/6048e5;break;case a:f=(y-_)/864e5;break;case r:f=y/t;break;case i:f=y/e;break;case s:f=y/1e3;break;default:f=y}return p?f:S.a(f)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return $[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=M(e,t,!0);return s&&(n.$L=s),n},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),k=E.prototype;return w.prototype=k,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",c],["$y",u],["$D",d]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,E,w),e.$i=!0),w},w.locale=M,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=$[y],w.Ls=$,w.p={},w}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,s=6e4,i=36e5,r=864e5,a=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,c=2628e6,l=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:o,months:c,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof y},p=function(e,t,n){return new y(e,n,t.$l)},f=function(e){return t.p(e)+"s"},h=function(e){return e<0},v=function(e){return h(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},_=function(e,t){return e?h(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function h(e,t,n){var s=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return p(e*u[f(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){s.$d[f(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var i=e.match(l);if(i){var r=i.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var m=h.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*u[n]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=v(e/o),e%=o,this.$d.months=v(e/c),e%=c,this.$d.days=v(e/r),e%=r,this.$d.hours=v(e/i),e%=i,this.$d.minutes=v(e/s),e%=s,this.$d.seconds=v(e/n),e%=n,this.$d.milliseconds=e},m.toISOString=function(){var e=_(this.$d.years,"Y"),t=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=_(n,"D"),i=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3,a=Math.round(1e3*a)/1e3);var o=_(a,"S"),c=e.negative||t.negative||s.negative||i.negative||r.negative||o.negative,l=i.format||r.format||o.format?"T":"",u=(c?"-":"")+"P"+e.format+t.format+s.format+l+i.format+r.format+o.format;return"P"===u||"-P"===u?"P0D":u},m.toJSON=function(){return this.toISOString()},m.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(a,(function(e,t){return t||String(s[e])}))},m.as=function(e){return this.$ms/u[f(e)]},m.get=function(e){var t=this.$ms,n=f(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?v(t/u[n]):this.$d[n],t||0},m.add=function(e,t,n){var s;return s=t?e*u[f(t)]:d(e)?e.$ms:p(e,this).$ms,p(this.$ms+s*(n?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return p(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.valueOf=function(){return this.asMilliseconds()},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},h}(),$=function(e,t,n){return e.add(t.years()*n,"y").add(t.months()*n,"M").add(t.days()*n,"d").add(t.hours()*n,"h").add(t.minutes()*n,"m").add(t.seconds()*n,"s").add(t.milliseconds()*n,"ms")};return function(n,s,i){e=i,t=i().$utils(),i.duration=function(e,t){var n=i.locale();return p(e,{$l:n},t)},i.isDuration=d;var r=s.prototype.add,a=s.prototype.subtract;s.prototype.add=function(e,t){return d(e)?$(this,e,1):r.bind(this)(e,t)},s.prototype.subtract=function(e,t){return d(e)?$(this,e,-1):a.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var r={},a=[],o=0;o<e.length;o++){var c=e[o],l=s.base?c[0]+s.base:c[0],u=r[l]||0,d="".concat(l," ").concat(u);r[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=i(f,s);s.byIndex=o,t.splice(o,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=s(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var c=s(e,i),l=0;l<r.length;l++){var u=n(r[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e=[{id:"1",name:"Chamonix",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",pictures:[{src:"https://loremflickr.com/248/152?random=1",description:"picture description"},{src:"https://loremflickr.com/248/152?random=2",description:"picture description"}]},{id:"2",name:"Canada",description:"Canada is a parliamentary democracy and a constitutional monarchy in the Westminster tradition.",pictures:[{src:"https://loremflickr.com/248/152?random=3",description:"picture description"},{src:"https://loremflickr.com/248/152?random=4",description:"picture description"}]},{id:"3",name:"Seoul",description:"Seoul, the capital of South Korea, sits on the Han River (Korea) in the country's northwest situated about 30 miles (~50 km) south of the de-militarized zone (DMZ).",pictures:[{src:"https://loremflickr.com/248/152?random=5",description:"picture description"},{src:"https://loremflickr.com/248/152?random=6",description:"picture description"}]}],t=[{type:"taxi",offers:[{id:"1",title:"Upgrade to a business class",price:120}]},{type:"flight",offers:[{id:"1",title:"Add luggage",price:50},{id:"2",title:"Switch to comfort",price:80},{id:"3",title:"Add meal",price:15},{id:"4",title:"Choose seats",price:5},{id:"5",title:"Travel by train",price:40}]}],s=[{type:"flight",basePrice:"160",dateFrom:"2019-07-10T10:02:00.000Z",dateTo:"2019-07-10T12:47:00.000Z",destination:"2",offers:["1","3"]},{type:"taxi",basePrice:"1100",dateFrom:"2019-07-11T08:13:00.000Z",dateTo:"2019-07-11T13:07:00.000Z",destination:"1",offers:["1"]},{type:"flight",basePrice:"1000",dateFrom:"2020-04-21T17:55:00.000Z",dateTo:"2020-04-22T05:35:00.000Z",destination:"3",offers:["3","4"]}];var i=n(379),r=n.n(i),a=n(795),o=n.n(a),c=n(569),l=n.n(c),u=n(565),d=n.n(u),p=n(216),f=n.n(p),h=n(589),v=n.n(h),m=n(10),_={};_.styleTagTransform=v(),_.setAttributes=d(),_.insert=l().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=f(),r()(m.Z,_),m.Z&&m.Z.locals&&m.Z.locals;const y="shake";class ${#e=null;constructor(){if(new.target===$)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(y),setTimeout((()=>{this.element.classList.remove(y),e?.()}),600)}}function b(e,t,n="beforeend"){if(!(e instanceof $))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function g(e,t){if(!(e instanceof $&&t instanceof $))throw new Error("Can replace only components");const n=e.element,s=t.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}const M={TAXI:"taxi",BUS:"bus",TRAIN:"train",SHIP:"ship",DRIVE:"drive",FLIGHT:"flight",CHECK_IN:"check-in",SIGHTSEEING:"sightseeing",RESTAURANT:"restaurant"};function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}function S(e,t=!1){return`<div class="event__type-item">\n            <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${t?"checked":""}>\n            <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${w(e)}</label>\n          </div>`}class E extends ${constructor({destinations:e,offers:t}){super(),this.destinations=e,this.offers=t}get template(){return function(e,t){const{offers:n}=t;return`<li class="trip-events__item">\n              <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n                        ${Object.values(M).map((e=>"flight"===e?S(e,!0):S(e))).join("")}\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      Flight\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      ${e.map((({name:e})=>function(e){return`<option value="${e}"></option>`}(e))).join("")}\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="0">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Cancel</button>\n                </header>\n                <section class="event__details">\n                  <section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                      ${n.map((({title:e,price:t})=>function(e,t){const n=e.split(" ").pop();return`<div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${n}-1" type="checkbox" name="event-offer-${n}">\n            <label class="event__offer-label" for="event-offer-${n}-1">\n              <span class="event__offer-title">${e}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${t}</span>\n            </label>\n          </div>`}(e,t))).join("")}\n                    </div>\n                  </section>\n                </section>\n              </form>\n            </li>`}(this.destinations,this.offers)}}var k=n(484),D=n.n(k),O=n(646),A=n.n(O);D().extend(A());const x=(e,t="YYYY-MM-DD")=>D()(e).format(t),C=e=>D()(e).format("YYYY-MM-DDTHH:mm"),T=e=>D()(e).format("HH:mm");function j(e,t=!1){return`<div class='event__type-item'>\n            <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${t?"checked":""}>\n            <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${w(e)}</label>\n          </div>`}function Y(e,t,n=!1){const s=e.split(" ").pop();return`<div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-${s}-1" type="checkbox" name="event-offer-${s}" ${n?"checked":""}>\n            <label class="event__offer-label" for="event-offer-${s}-1">\n              <span class="event__offer-title">${e}</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">${t}</span>\n            </label>\n          </div>`}class H extends ${constructor({point:e,destinations:t,offers:n,onFormSubmit:s}){super(),this.point=e,this.destinations=t,this.offers=n,this.handleFormSubmit=s,this.element.querySelector(".event--edit").addEventListener("submit",this.#t),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#t)}get template(){return function(e,t,n){const{type:s,destination:i,dateFrom:r,dateTo:a,basePrice:o,offers:c}=e,{name:l,description:u,pictures:d}=t.find((e=>e.id===i)),{offers:p}=n,f=`${x(r,"DD/MM/YYYY")} ${T(r)}`,h=`${x(a,"DD/MM/YYYY")} ${T(a)}`;return`<li class="trip-events__item">\n              <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n                        ${Object.values(M).map((e=>e===s?j(e,!0):j(e))).join("")}\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      ${s}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${l}" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      ${t.map((({name:e})=>function(e){return`<option value="${e}"></option>`}(e))).join("")}\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${f}">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${h}">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${o}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Delete</button>\n                  <button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>\n                </header>\n                <section class="event__details">\n                  <section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                      ${p.map((({id:e,title:t,price:n})=>c.includes(e)?Y(t,n,!0):Y(t,n)))}\n                    </div>\n                  </section>\n\n                  <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">${u}</p>\n\n                    <div class="event__photos-container">\n                      <div class="event__photos-tape">\n                        ${d.map((({src:e,description:t})=>`<img class="event__photo" src="${e}" alt="${t}">`))}\n                      </div>\n                    </div>\n                  </section>\n                </section>\n              </form>\n            </li>`}(this.point,this.destinations,this.offers)}#t=e=>{e.preventDefault(),this.handleFormSubmit()}}class I extends ${get template(){return'<ul class="trip-events__list"></ul>'}}class L extends ${constructor({point:e,destination:t,offers:n,onEditClick:s}){super(),this.point=e,this.destination=t,this.offers=n,this.handleEditClick=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#n)}get template(){return function(e,t,n){const{type:s,basePrice:i,dateFrom:r,dateTo:a,offers:o}=e,{name:c}=t,{offers:l}=n,u=l.filter((e=>o.includes(e.id))),d=x(r),p=(f=r,D()(f).format("MMM DD").toUpperCase());var f;const h=C(r),v=C(r);return`<li class="trip-events__item">\n          <div class="event">\n            <time class="event__date" datetime="${d}">${p}</time>\n            <div class="event__type">\n              <img class="event__type-icon" width="42" height="42" src="img/icons/${s}.png" alt="Event type icon">\n            </div>\n            <h3 class="event__title">${s} ${c}</h3>\n            <div class="event__schedule">\n              <p class="event__time">\n                <time class="event__start-time" datetime="${h}">${T(r)}</time>\n                &mdash;\n                <time class="event__end-time" datetime="${v}">${T(a)}</time>\n              </p>\n              <p class="event__duration">${function(e,t){const n=D()(e),s=D()(t),i=D().duration(s.diff(n)),r=i.days(),a=i.hours(),o=i.minutes(),c=[];return r>0&&c.push(`${r}D`),a>0&&c.push(`${a}H`),o>0&&c.push(`${o}M`),c.join(" ")}(r,a)}</p>\n            </div>\n            <p class="event__price">\n              &euro;&nbsp;<span class="event__price-value">${i}</span>\n            </p>\n            <h4 class="visually-hidden">Offers:</h4>\n            <ul class="event__selected-offers">\n              ${u.map((({title:e,price:t})=>function(e,t){return`<li class="event__offer">\n            <span class="event__offer-title">${e}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${t}</span>\n          </li>`}(e,t))).join("")}\n            </ul>\n            <button class="event__favorite-btn event__favorite-btn--active" type="button">\n              <span class="visually-hidden">Add to favorite</span>\n              <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n              </svg>\n            </button>\n            <button class="event__rollup-btn" type="button">\n              <span class="visually-hidden">Open event</span>\n            </button>\n          </div>\n          </li>`}(this.point,this.destination,this.offers)}#n=e=>{e.preventDefault(),this.handleEditClick()}}class F extends ${get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}}const P={EVERYTHING:"everything",FUTURE:"future",PRESENT:"present",PAST:"past"};function B(e,t=!1){return`<div class="trip-filters__filter">\n            <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}" ${t?"checked":""}>\n            <label class="trip-filters__filter-label" for="filter-${e}">${e}</label>\n          </div>`}const N=document.querySelector(".trip-controls__filters"),Z=document.querySelector(".trip-events"),U=new class{#s=[...s];#i=[...e];#r=[...t];getDestinationObjectsById(e){return this.#i.find((t=>t.id===e))}getOfferObjectsByType(e){return this.#r.find((t=>t.type===e))}get destinationObjects(){return this.#i}get pointObjects(){return this.#s}},W=new class{eventListComponent=new I;constructor({tripContainerElement:e,pointsModel:t}){this.tripContainerElement=e,this.pointsModel=t,this.routePointObjects=this.pointsModel.pointObjects}getEventCreateView(){const e=M.FLIGHT,t=this.pointsModel.getOfferObjectsByType(e),n=this.pointsModel.destinationObjects;return new E({destinations:n,offers:t})}#a(e){const t=e=>{"Escape"===e.key&&(e.preventDefault(),o(),document.removeEventListener("keydown",t))},n=this.pointsModel.getDestinationObjectsById(e.destination),s=this.pointsModel.destinationObjects,i=this.pointsModel.getOfferObjectsByType(e.type),r=new L({point:e,destination:n,offers:i,onEditClick:()=>{g(a,r),document.addEventListener("keydown",t)}}),a=new H({point:e,destinations:s,offers:i,onFormSubmit:()=>{o(),document.removeEventListener("keydown",t)}});function o(){g(r,a)}b(r,this.eventListComponent.element)}render(){b(new F,this.tripContainerElement),b(this.eventListComponent,this.tripContainerElement);for(let e=0;e<this.routePointObjects.length;e++)this.#a(this.routePointObjects[e])}}({tripContainerElement:Z,pointsModel:U});b(new class extends ${get template(){return`<form class="trip-filters" action="#" method="get">\n            ${Object.values(P).map((e=>"everything"===e?B(e,!0):B(e))).join("")}\n            <button class="visually-hidden" type="submit">Accept filter</button>\n          </form>`}},N),W.render()})()})();
//# sourceMappingURL=bundle.e0a46edfec49654ccf30.js.map