(self.webpackChunkusaco_guide=self.webpackChunkusaco_guide||[]).push([[516],{74459:function(t,e,n){"use strict";n.r(e),n.d(e,{ReactP5Wrapper:function(){return f}});var r=!0,o={Date:r,RegExp:r,String:r,Number:r};function u(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{cyclesFix:!0},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=[],a=Array.isArray(t),c=function(c){var l=t[c],s=a?+c:c;if(!(c in e))return i.push({type:"REMOVE",path:[s],oldValue:t[c]}),"continue";var f=e[c],p="object"==typeof l&&"object"==typeof f;if(!(l&&f&&p)||o[Object.getPrototypeOf(l).constructor.name]||n.cyclesFix&&r.includes(l))l===f||p&&(isNaN(l)?l+""==f+"":+l==+f)||i.push({path:[s],type:"CHANGE",value:f,oldValue:l});else{var v=u(l,f,n,n.cyclesFix?r.concat([l]):[]);i.push.apply(i,v.map((function(t){return t.path.unshift(s),t})))}};for(var l in t)c(l);var s=Array.isArray(e);for(var f in e)f in t||i.push({type:"CREATE",path:[s?+f:f],value:e[f]});return i}var i=n(32318),a=n.n(i),c=n(67294),l="undefined"==typeof window?c.useEffect:c.useLayoutEffect;function s(t){var e;null===(e=t.current)||void 0===e||e.remove(),t.current=void 0}var f=(0,c.memo)((function(t){var e=t.sketch,n=t.children,r=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(t,["sketch","children"]),o=(0,c.createRef)(),u=(0,c.useRef)();return l((function(){null!==o.current&&(s(u),u.current=function(t,e){return new(a())(t,e)}(e,o.current))}),[e]),l((function(){var t,e;return null===(e=null===(t=u.current)||void 0===t?void 0:t.updateWithProps)||void 0===e?void 0:e.call(t,r)}),[r]),l((function(){return function(){return s(u)}}),[]),c.createElement("div",{ref:o},n)}),(function(t,e){return 0===u(t,e).length}))},31530:function(t,e,n){"use strict";var r=n(28710).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},49920:function(t,e,n){var r=n(47293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},24994:function(t,e,n){"use strict";var r=n(13383).IteratorPrototype,o=n(70030),u=n(79114),i=n(58003),a=n(97497),c=function(){return this};t.exports=function(t,e,n,l){var s=e+" Iterator";return t.prototype=o(r,{next:u(+!l,n)}),i(t,s,!1,!0),a[s]=c,t}},47850:function(t,e,n){var r=n(70111),o=n(84326),u=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[u])?!!e:"RegExp"==o(t))}},13383:function(t,e,n){"use strict";var r,o,u,i=n(47293),a=n(60614),c=n(70030),l=n(79518),s=n(31320),f=n(5112),p=n(31913),v=f("iterator"),d=!1;[].keys&&("next"in(u=[].keys())?(o=l(l(u)))!==Object.prototype&&(r=o):d=!0),null==r||i((function(){var t={};return r[v].call(t)!==t}))?r={}:p&&(r=c(r)),a(r[v])||s(r,v,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},79518:function(t,e,n){var r=n(17854),o=n(92597),u=n(60614),i=n(47908),a=n(6200),c=n(49920),l=a("IE_PROTO"),s=r.Object,f=s.prototype;t.exports=c?s.getPrototypeOf:function(t){var e=i(t);if(o(e,l))return e[l];var n=e.constructor;return u(n)&&e instanceof n?n.prototype:e instanceof s?f:null}},97651:function(t,e,n){var r=n(17854),o=n(46916),u=n(19670),i=n(60614),a=n(84326),c=n(22261),l=r.TypeError;t.exports=function(t,e){var n=t.exec;if(i(n)){var r=o(n,t,e);return null!==r&&u(r),r}if("RegExp"===a(t))return o(c,t,e);throw l("RegExp#exec called on incompatible receiver")}},22261:function(t,e,n){"use strict";var r,o,u=n(46916),i=n(1702),a=n(41340),c=n(67066),l=n(52999),s=n(72309),f=n(70030),p=n(29909).get,v=n(9441),d=n(38173),g=s("native-string-replace",String.prototype.replace),x=RegExp.prototype.exec,h=x,y=i("".charAt),E=i("".indexOf),b=i("".replace),R=i("".slice),I=(o=/b*/g,u(x,r=/a/,"a"),u(x,o,"a"),0!==r.lastIndex||0!==o.lastIndex),O=l.BROKEN_CARET,A=void 0!==/()??/.exec("")[1];(I||A||O||v||d)&&(h=function(t){var e,n,r,o,i,l,s,v=this,d=p(v),m=a(t),w=d.raw;if(w)return w.lastIndex=v.lastIndex,e=u(h,w,m),v.lastIndex=w.lastIndex,e;var S=d.groups,P=O&&v.sticky,k=u(c,v),T=v.source,j=0,C=m;if(P&&(k=b(k,"y",""),-1===E(k,"g")&&(k+="g"),C=R(m,v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==y(m,v.lastIndex-1))&&(T="(?: "+T+")",C=" "+C,j++),n=new RegExp("^(?:"+T+")",k)),A&&(n=new RegExp("^"+T+"$(?!\\s)",k)),I&&(r=v.lastIndex),o=u(x,P?n:v,C),P?o?(o.input=R(o.input,j),o[0]=R(o[0],j),o.index=v.lastIndex,v.lastIndex+=o[0].length):v.lastIndex=0:I&&o&&(v.lastIndex=v.global?o.index+o[0].length:r),A&&o&&o.length>1&&u(g,o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&S)for(o.groups=l=f(null),i=0;i<S.length;i++)l[(s=S[i])[0]]=o[s[1]];return o}),t.exports=h},67066:function(t,e,n){"use strict";var r=n(19670);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},52999:function(t,e,n){var r=n(47293),o=n(17854).RegExp,u=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),i=u||r((function(){return!o("a","y").sticky})),a=u||r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:a,MISSED_STICKY:i,UNSUPPORTED_Y:u}},9441:function(t,e,n){var r=n(47293),o=n(17854).RegExp;t.exports=r((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},38173:function(t,e,n){var r=n(47293),o=n(17854).RegExp;t.exports=r((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},58003:function(t,e,n){var r=n(3070).f,o=n(92597),u=n(5112)("toStringTag");t.exports=function(t,e,n){t&&!n&&(t=t.prototype),t&&!o(t,u)&&r(t,u,{configurable:!0,value:e})}},28710:function(t,e,n){var r=n(1702),o=n(19303),u=n(41340),i=n(84488),a=r("".charAt),c=r("".charCodeAt),l=r("".slice),s=function(t){return function(e,n){var r,s,f=u(i(e)),p=o(n),v=f.length;return p<0||p>=v?t?"":void 0:(r=c(f,p))<55296||r>56319||p+1===v||(s=c(f,p+1))<56320||s>57343?t?a(f,p):r:t?l(f,p,p+2):s-56320+(r-55296<<10)+65536}};t.exports={codeAt:s(!1),charAt:s(!0)}},25438:function(t,e,n){var r=n(82109),o=Math.hypot,u=Math.abs,i=Math.sqrt;r({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,e){for(var n,r,o=0,a=0,c=arguments.length,l=0;a<c;)l<(n=u(arguments[a++]))?(o=o*(r=l/n)*r+1,l=n):o+=n>0?(r=n/l)*r:n;return l===1/0?1/0:l*i(o)}})},76373:function(t,e,n){"use strict";var r=n(82109),o=n(17854),u=n(46916),i=n(1702),a=n(24994),c=n(84488),l=n(17466),s=n(41340),f=n(19670),p=n(84326),v=n(47976),d=n(47850),g=n(67066),x=n(58173),h=n(31320),y=n(47293),E=n(5112),b=n(36707),R=n(31530),I=n(97651),O=n(29909),A=n(31913),m=E("matchAll"),w="RegExp String",S="RegExp String Iterator",P=O.set,k=O.getterFor(S),T=RegExp.prototype,j=o.TypeError,C=i(g),N=i("".indexOf),_=i("".matchAll),M=!!_&&!y((function(){_("a",/./)})),F=a((function(t,e,n,r){P(this,{type:S,regexp:t,string:e,global:n,unicode:r,done:!1})}),w,(function(){var t=k(this);if(t.done)return{value:void 0,done:!0};var e=t.regexp,n=t.string,r=I(e,n);return null===r?{value:void 0,done:t.done=!0}:t.global?(""===s(r[0])&&(e.lastIndex=R(n,l(e.lastIndex),t.unicode)),{value:r,done:!1}):(t.done=!0,{value:r,done:!1})})),B=function(t){var e,n,r,o,u,i,a=f(this),c=s(t);return e=b(a,RegExp),void 0===(n=a.flags)&&v(T,a)&&!("flags"in T)&&(n=C(a)),r=void 0===n?"":s(n),o=new e(e===RegExp?a.source:a,r),u=!!~N(r,"g"),i=!!~N(r,"u"),o.lastIndex=l(a.lastIndex),new F(o,c,u,i)};r({target:"String",proto:!0,forced:M},{matchAll:function(t){var e,n,r,o,i=c(this);if(null!=t){if(d(t)&&(e=s(c("flags"in T?t.flags:C(t))),!~N(e,"g")))throw j("`.matchAll` does not allow non-global regexes");if(M)return _(i,t);if(void 0===(r=x(t,m))&&A&&"RegExp"==p(t)&&(r=B),r)return u(r,t,i)}else if(M)return _(i,t);return n=s(i),o=new RegExp(t,"g"),A?u(B,o,n):o[m](n)}}),A||m in T||h(T,m,B)},13728:function(t,e,n){n(76373)}}]);
//# sourceMappingURL=516-a0c6f8f87db9a4f5e86c.js.map