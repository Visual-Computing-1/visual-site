"use strict";(self.webpackChunkusaco_guide=self.webpackChunkusaco_guide||[]).push([[106],{25600:function(e,t,n){n.d(t,{v:function(){return T}});var r,a=n(2337),o=n(67294),i=n(73503),s=n(68629),l=n(51450),u=n(79366),c=n(93149),d=n(77906),m=n(18496),f=n(81075),p=n(6864),v=n(82136),g=n(15834),b=n(48597);function x(){var e=(0,o.useState)(b.k)[0];return(0,o.useEffect)((function(){return function(){return e.dispose()}}),[e]),e}function h(e,t){var n=t.resolveItems();if(n.length<=0)return null;var a=t.resolveActiveIndex(),o=null!=a?a:-1,i=function(){switch(e.focus){case r.First:return n.findIndex((function(e){return!t.resolveDisabled(e)}));case r.Previous:var a=n.slice().reverse().findIndex((function(e,n,r){return!(-1!==o&&r.length-n-1>=o)&&!t.resolveDisabled(e)}));return-1===a?a:n.length-1-a;case r.Next:return n.findIndex((function(e,n){return!(n<=o)&&!t.resolveDisabled(e)}));case r.Last:var i=n.slice().reverse().findIndex((function(e){return!t.resolveDisabled(e)}));return-1===i?i:n.length-1-i;case r.Specific:return n.findIndex((function(n){return t.resolveId(n)===e.id}));case r.Nothing:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}();return-1===i?a:i}!function(e){e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing"}(r||(r={}));var y,E,k,w=n(56216);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(E||(E={})),function(e){e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem"}(k||(k={}));var N=((y={})[k.CloseMenu]=function(e){return e.menuState===E.Closed?e:(0,a.gY)({},e,{activeItemIndex:null,menuState:E.Closed})},y[k.OpenMenu]=function(e){return e.menuState===E.Open?e:(0,a.gY)({},e,{menuState:E.Open})},y[k.GoToItem]=function(e,t){var n=h(t,{resolveItems:function(){return e.items},resolveActiveIndex:function(){return e.activeItemIndex},resolveId:function(e){return e.id},resolveDisabled:function(e){return e.dataRef.current.disabled}});return""===e.searchQuery&&e.activeItemIndex===n?e:(0,a.gY)({},e,{searchQuery:"",activeItemIndex:n})},y[k.Search]=function(e,t){var n=e.searchQuery+t.value.toLowerCase(),r=e.items.findIndex((function(e){var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}));return-1===r||r===e.activeItemIndex?(0,a.gY)({},e,{searchQuery:n}):(0,a.gY)({},e,{searchQuery:n,activeItemIndex:r})},y[k.ClearSearch]=function(e){return""===e.searchQuery?e:(0,a.gY)({},e,{searchQuery:""})},y[k.RegisterItem]=function(e,t){return(0,a.gY)({},e,{items:[].concat(e.items,[{id:t.id,dataRef:t.dataRef}])})},y[k.UnregisterItem]=function(e,t){var n=e.items.slice(),r=null!==e.activeItemIndex?n[e.activeItemIndex]:null,o=n.findIndex((function(e){return e.id===t.id}));return-1!==o&&n.splice(o,1),(0,a.gY)({},e,{items:n,activeItemIndex:o===e.activeItemIndex||null===r?null:n.indexOf(r)})},y),I=(0,o.createContext)(null);function C(e){var t=(0,o.useContext)(I);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+T.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,C),n}return t}function S(e,t){return(0,i.E)(t.type,N,e,t)}I.displayName="MenuContext";var R=o.Fragment;function T(e){var t,n=(0,o.useReducer)(S,{menuState:E.Closed,buttonRef:(0,o.createRef)(),itemsRef:(0,o.createRef)(),items:[],searchQuery:"",activeItemIndex:null}),r=n[0],a=r.menuState,l=r.itemsRef,u=r.buttonRef,c=n[1];(0,p.s)("mousedown",(function(e){var t,n,r,o=e.target;a===E.Open&&((null==(t=u.current)?void 0:t.contains(o))||(null==(n=l.current)?void 0:n.contains(o))||(c({type:k.CloseMenu}),(0,f.sP)(o,f.tJ.Loose)||(e.preventDefault(),null==(r=u.current)||r.focus())))}));var d=(0,o.useMemo)((function(){return{open:a===E.Open}}),[a]);return o.createElement(I.Provider,{value:n},o.createElement(v.up,{value:(0,i.E)(a,(t={},t[E.Open]=v.ZM.Open,t[E.Closed]=v.ZM.Closed,t))},(0,s.sY)({props:e,slot:d,defaultTag:R,name:"Menu"})))}var M=(0,s.yV)((function e(t,n){var i,d=C([T.name,e.name].join(".")),f=d[0],p=d[1],v=(0,l.T)(f.buttonRef,n),b="headlessui-menu-button-"+(0,m.M)(),h=x(),y=(0,o.useCallback)((function(e){switch(e.key){case u.R.Space:case u.R.Enter:case u.R.ArrowDown:e.preventDefault(),e.stopPropagation(),p({type:k.OpenMenu}),h.nextFrame((function(){return p({type:k.GoToItem,focus:r.First})}));break;case u.R.ArrowUp:e.preventDefault(),e.stopPropagation(),p({type:k.OpenMenu}),h.nextFrame((function(){return p({type:k.GoToItem,focus:r.Last})}))}}),[p,h]),w=(0,o.useCallback)((function(e){if(e.key===u.R.Space)e.preventDefault()}),[]),N=(0,o.useCallback)((function(e){if((0,c.P)(e.currentTarget))return e.preventDefault();t.disabled||(f.menuState===E.Open?(p({type:k.CloseMenu}),h.nextFrame((function(){var e;return null==(e=f.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),e.stopPropagation(),p({type:k.OpenMenu})))}),[p,h,f,t.disabled]),I=(0,o.useMemo)((function(){return{open:f.menuState===E.Open}}),[f]),S=t,R={ref:v,id:b,type:(0,g.f)(t,f.buttonRef),"aria-haspopup":!0,"aria-controls":null==(i=f.itemsRef.current)?void 0:i.id,"aria-expanded":t.disabled?void 0:f.menuState===E.Open,onKeyDown:y,onKeyUp:w,onClick:N};return(0,s.sY)({props:(0,a.gY)({},S,R),slot:I,defaultTag:"button",name:"Menu.Button"})})),F=s.AN.RenderStrategy|s.AN.Static,O=(0,s.yV)((function e(t,n){var i,c,d=C([T.name,e.name].join(".")),f=d[0],p=d[1],g=(0,l.T)(f.itemsRef,n),h="headlessui-menu-items-"+(0,m.M)(),y=x(),N=(0,v.oJ)(),I=null!==N?N===v.ZM.Open:f.menuState===E.Open;(0,o.useEffect)((function(){var e=f.itemsRef.current;e&&f.menuState===E.Open&&e!==document.activeElement&&e.focus({preventScroll:!0})}),[f.menuState,f.itemsRef]),(0,w.B)({container:f.itemsRef.current,enabled:f.menuState===E.Open,accept:function(e){return"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}});var S=(0,o.useCallback)((function(e){switch(y.dispose(),e.key){case u.R.Space:if(""!==f.searchQuery)return e.preventDefault(),e.stopPropagation(),p({type:k.Search,value:e.key});case u.R.Enter:if(e.preventDefault(),e.stopPropagation(),p({type:k.CloseMenu}),null!==f.activeItemIndex){var t,n=f.items[f.activeItemIndex].id;null==(t=document.getElementById(n))||t.click()}(0,b.k)().nextFrame((function(){var e;return null==(e=f.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case u.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),p({type:k.GoToItem,focus:r.Next});case u.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),p({type:k.GoToItem,focus:r.Previous});case u.R.Home:case u.R.PageUp:return e.preventDefault(),e.stopPropagation(),p({type:k.GoToItem,focus:r.First});case u.R.End:case u.R.PageDown:return e.preventDefault(),e.stopPropagation(),p({type:k.GoToItem,focus:r.Last});case u.R.Escape:e.preventDefault(),e.stopPropagation(),p({type:k.CloseMenu}),(0,b.k)().nextFrame((function(){var e;return null==(e=f.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case u.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(p({type:k.Search,value:e.key}),y.setTimeout((function(){return p({type:k.ClearSearch})}),350))}}),[p,y,f]),R=(0,o.useCallback)((function(e){if(e.key===u.R.Space)e.preventDefault()}),[]),M=(0,o.useMemo)((function(){return{open:f.menuState===E.Open}}),[f]),O={"aria-activedescendant":null===f.activeItemIndex||null==(i=f.items[f.activeItemIndex])?void 0:i.id,"aria-labelledby":null==(c=f.buttonRef.current)?void 0:c.id,id:h,onKeyDown:S,onKeyUp:R,role:"menu",tabIndex:0,ref:g},D=t;return(0,s.sY)({props:(0,a.gY)({},D,O),slot:M,defaultTag:"div",features:F,visible:I,name:"Menu.Items"})})),D=o.Fragment;T.Button=M,T.Items=O,T.Item=function e(t){var n=t.disabled,i=void 0!==n&&n,l=t.onClick,u=(0,a.gK)(t,["disabled","onClick"]),c=C([T.name,e.name].join(".")),f=c[0],p=c[1],v="headlessui-menu-item-"+(0,m.M)(),g=null!==f.activeItemIndex&&f.items[f.activeItemIndex].id===v;(0,d.e)((function(){if(f.menuState===E.Open&&g){var e=(0,b.k)();return e.nextFrame((function(){var e;return null==(e=document.getElementById(v))||null==e.scrollIntoView?void 0:e.scrollIntoView({block:"nearest"})})),e.dispose}}),[v,g,f.menuState]);var x=(0,o.useRef)({disabled:i});(0,d.e)((function(){x.current.disabled=i}),[x,i]),(0,d.e)((function(){var e,t;x.current.textValue=null==(e=document.getElementById(v))||null==(t=e.textContent)?void 0:t.toLowerCase()}),[x,v]),(0,d.e)((function(){return p({type:k.RegisterItem,id:v,dataRef:x}),function(){return p({type:k.UnregisterItem,id:v})}}),[x,v]);var h=(0,o.useCallback)((function(e){return i?e.preventDefault():(p({type:k.CloseMenu}),(0,b.k)().nextFrame((function(){var e;return null==(e=f.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),l?l(e):void 0)}),[p,f.buttonRef,i,l]),y=(0,o.useCallback)((function(){if(i)return p({type:k.GoToItem,focus:r.Nothing});p({type:k.GoToItem,focus:r.Specific,id:v})}),[i,v,p]),w=(0,o.useCallback)((function(){i||g||p({type:k.GoToItem,focus:r.Specific,id:v})}),[i,g,v,p]),N=(0,o.useCallback)((function(){i||g&&p({type:k.GoToItem,focus:r.Nothing})}),[i,g,p]),I=(0,o.useMemo)((function(){return{active:g,disabled:i}}),[g,i]),S={id:v,role:"menuitem",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,disabled:void 0,onClick:h,onFocus:y,onPointerMove:w,onMouseMove:w,onPointerLeave:N,onMouseLeave:N};return(0,s.sY)({props:(0,a.gY)({},u,S),slot:I,defaultTag:D,name:"Menu.Item"})}},15834:function(e,t,n){n.d(t,{f:function(){return i}});var r=n(67294),a=n(77906);function o(e){var t;if(e.type)return e.type;var n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function i(e,t){var n=(0,r.useState)((function(){return o(e)})),i=n[0],s=n[1];return(0,a.e)((function(){s(o(e))}),[e.type,e.as]),(0,a.e)((function(){i||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&s("button")}),[i,t]),i}},56216:function(e,t,n){n.d(t,{B:function(){return o}});var r=n(67294),a=n(77906);function o(e){var t=e.container,n=e.accept,o=e.walk,i=e.enabled,s=void 0===i||i,l=(0,r.useRef)(n),u=(0,r.useRef)(o);(0,r.useEffect)((function(){l.current=n,u.current=o}),[n,o]),(0,a.e)((function(){if(t&&s)for(var e=l.current,n=u.current,r=Object.assign((function(t){return e(t)}),{acceptNode:e}),a=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,r,!1);a.nextNode();)n(a.currentNode)}),[t,s,l,u])}},27838:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(15861),a=n(87757),o=n.n(a),i=n(67294),s=n(93056),l=n(80064),u=n(19901),c=n(80033),d=n(5560);var m=n(69798),f=n(51404),p=n(38588),v=n(28338),g=n(81442);function b(e){return i.createElement(p.u.Root,{show:e.isOpen,as:i.Fragment},i.createElement(v.V,{as:"div",static:!0,className:"fixed z-20 inset-0 overflow-hidden",open:e.isOpen,onClose:function(){return e.onClose()}},i.createElement("div",{className:"absolute inset-0 overflow-hidden"},i.createElement(p.u.Child,{as:i.Fragment,enter:"ease-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"},i.createElement(v.V.Overlay,{className:"absolute inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity"})),i.createElement("div",{className:"fixed inset-y-0 pl-16 max-w-xl right-0 flex"},i.createElement(p.u.Child,{as:i.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full"},i.createElement("form",{className:"h-full flex flex-col bg-white dark:bg-dark-surface shadow-xl",onSubmit:e.onSubmit},i.createElement("div",{className:"flex-1 h-0 overflow-y-auto"},i.createElement("header",{className:"space-y-1 py-6 px-4 bg-blue-700 dark:bg-blue-900 sm:px-6"},i.createElement("div",{className:"flex items-center justify-between space-x-3"},i.createElement(v.V.Title,{className:"text-lg leading-7 font-medium text-white"},e.title),i.createElement("div",{className:"h-7 flex items-center"},i.createElement("button",{type:"button",className:"text-blue-200 hover:text-white",onClick:function(){return e.onClose()}},i.createElement("span",{className:"sr-only"},"Close panel"),i.createElement(g.b0D,{className:"h-6 w-6","aria-hidden":"true"})))),i.createElement("div",null,i.createElement("p",{className:"text-sm leading-5 text-blue-300"},e.subtitle))),i.createElement("div",{className:"flex-1 flex flex-col justify-between"},e.children)),i.createElement("div",{className:"flex-shrink-0 px-4 py-4 space-x-4 flex justify-end border-t border-gray-200 dark:border-gray-800"},e.footerButtons)))))))}var x=function(e){var t=e.label,n=e.id,r=e.value,a=e.onChange,o=e.errorMsg,s=void 0===o?null:o;return i.createElement("div",{className:"space-y-1"},i.createElement("label",{htmlFor:n,className:"block text-sm font-medium leading-5 text-gray-900 dark:text-dark-high-emphasis"},t),i.createElement("div",{className:"relative rounded-md shadow-sm"},i.createElement("input",{type:"text",id:n,className:"input"+(s?" pr-10 border-red-300 dark:border-red-300 text-red-900 dark:text-red-300 placeholder-red-300 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 dark:focus:ring-red-300":""),value:r,onChange:a}),s&&i.createElement("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},i.createElement("svg",{className:"h-5 w-5 text-red-500",fill:"currentColor",viewBox:"0 0 20 20"},i.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})))),s&&i.createElement("p",{className:"mt-2 text-sm text-red-600 dark:text-red-400"},s))};function h(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function y(e){var t,n=e.isOpen,a=e.onClose,p=(0,i.useContext)(u.Z),v=(0,i.useState)(""),g=v[0],y=v[1],E=(0,i.useState)(""),k=E[0],w=E[1],N=(0,i.useState)(""),I=N[0],C=N[1],S=(0,m.Z)("","contact_form_topic"),R=S[0],T=S[1],M=(0,m.Z)("","contact_form_message"),F=M[0],O=M[1],D=(0,i.useState)(!1),P=D[0],_=D[1],L=(0,i.useState)(""),A=L[0],Y=L[1],Z=(0,i.useState)(!0),B=Z[0],G=Z[1],U=(0,i.useState)(!1),V=U[0],z=U[1],Q=(0,i.useContext)(l.Z),j=(t=(0,d.$)(),(0,i.useCallback)(function(){var e=(0,r.Z)(o().mark((function e(n){var r,a,i,s,l,u,d,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.name,a=n.email,i=n.moduleName,s=n.url,l=n.lang,u=n.topic,d=n.message,r){e.next=3;break}throw new Error("Please enter your name.");case 3:if(a){e.next=5;break}throw new Error("Please enter your email.");case 5:if(u){e.next=7;break}throw new Error("Please select a topic");case 7:if(d){e.next=9;break}throw new Error("Please enter a message.");case 9:if(t){e.next=11;break}throw new Error("Too fast! Please wait ten seconds and try again.");case 11:return m=(0,c.V1)((0,c.$C)(t),"submitContactForm"),e.abrupt("return",m({name:r,email:a,moduleName:i,url:s,lang:l,topic:u,message:d}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t]));i.useEffect((function(){var e=null==Q?void 0:Q.markdownLayoutInfo;e&&e instanceof f.YV?C(s.g6[e.section]+" - "+e.title):C("")}),[null==Q?void 0:Q.markdownLayoutInfo]);var J=(0,i.useContext)(u.Z).firebaseUser;(0,i.useEffect)((function(){J&&(""===k&&w(J.email),""===g&&y(J.displayName))}),[J]),i.useEffect((function(){n&&(_(!1),z(!1),G(!0))}),[n]);var K=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),z(!0),""!==g&&""!==k&&h(k)&&""!==R&&""!==F){e.next=4;break}return e.abrupt("return");case 4:return G(!1),e.prev=5,e.next=8,j({name:g,email:k,moduleName:I,url:window.location.href,lang:p.lang,topic:R,message:F});case 8:n=e.sent,T(""),O(""),_(!0),Y(n.data),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),G(!0),alert("Form submission failed: "+e.t0.message);case 19:return e.prev=19,z(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[5,15,19,22]])})));return function(t){return e.apply(this,arguments)}}();return i.createElement(b,{isOpen:n,onClose:a,title:"Contact Us",subtitle:i.createElement(i.Fragment,null,"Contact us about anything: suggestions, bugs, assistance, and more! This will be submitted as a public"," ",i.createElement("a",{href:"https://github.com/Visual-Computing-1/visual-site/issues",target:"_blank",rel:"noreferrer",className:"underline"},"Github issue"),"."),footerButtons:i.createElement(i.Fragment,null,i.createElement("span",{className:"inline-flex rounded-md shadow-sm"},i.createElement("button",{type:"button",className:"btn",onClick:a},"Cancel")),i.createElement("span",{className:"inline-flex rounded-md shadow-sm"},i.createElement("button",{type:"submit",disabled:!B,className:"btn-primary"},"Contact Us"))),onSubmit:K},i.createElement("div",{className:"bg-gray-50 dark:bg-gray-900 mb-4"},i.createElement("div",{className:"px-4 py-5 sm:p-6"},i.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900 dark:text-gray-200"},"Ask on the USACO Forum!"),i.createElement("div",{className:"mt-2 max-w-xl text-sm leading-5 text-gray-500 dark:text-gray-400"},i.createElement("p",null,"Get a faster response by reaching out on the USACO Forum instead.")),i.createElement("div",{className:"mt-5"},i.createElement("span",{className:"inline-flex rounded-md shadow-sm"},i.createElement("a",{href:"https://forum.usaco.guide/",target:"_blank",rel:"noreferrer",className:"btn"},"Join Forum"))))),i.createElement("div",{className:"px-4 sm:px-6"},P&&i.createElement("div",{className:"rounded-md bg-green-50 dark:bg-green-800 p-4"},i.createElement("div",{className:"flex"},i.createElement("div",{className:"flex-grow-0"},i.createElement("svg",{className:"h-5 w-5 text-green-400",viewBox:"0 0 20 20",fill:"currentColor"},i.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))),i.createElement("div",{className:"ml-3"},i.createElement("h3",{className:"text-sm leading-5 font-medium text-green-800 dark:text-dark-high-emphasis"},"Message received!"),i.createElement("div",{className:"mt-2 text-sm leading-5 text-green-700 dark:text-dark-high-emphasis"},i.createElement("p",null,"Your message has been submitted as an issue in our GitHub repository. You can track the issue here:"," ",i.createElement("a",{href:A,target:"_blank",rel:"noreferrer",className:"font-semibold hover:underline"},A)))))),!P&&i.createElement("div",{className:"space-y-6 pb-5"},i.createElement(x,{label:"Name (will not be shown publicly)",id:"contact_name",value:g,onChange:function(e){return y(e.target.value)},errorMsg:V&&""===g?"This field is required.":null}),i.createElement(x,{label:"Email (will not be shown publicly)",id:"contact_email",value:k,onChange:function(e){return w(e.target.value)},errorMsg:V?""===k?"This field is required.":h(k)?null:"Please enter a valid email address.":null}),i.createElement(x,{label:"Module (if applicable)",id:"contact_module",value:I,onChange:function(e){return C(e.target.value)}}),i.createElement("fieldset",{className:"space-y-2"},i.createElement("legend",{className:"text-sm leading-5 font-medium text-gray-900 dark:text-dark-high-emphasis"},"Topic"),i.createElement("div",{className:"space-y-3"},["Typo / Broken Link","Request - Missing Section or Editorial","Unclear Explanation","Website Bug","Suggestion","Other"].map((function(e,t){return i.createElement("div",{key:t},i.createElement("div",{className:"relative flex items-start"},i.createElement("div",{className:"absolute flex items-center h-5"},i.createElement("input",{id:"contact_topic_"+t,type:"radio",name:"type",className:"form-radio h-4 w-4 text-blue-600 dark:bg-gray-600 dark:focus:ring-offset-dark-surface",checked:R===e,onChange:function(){return T(e)}})),i.createElement("div",{className:"pl-7 text-sm leading-5"},i.createElement("label",{htmlFor:"contact_topic_"+t,className:"font-medium text-gray-900 dark:text-dark-high-emphasis"},e))))})),V&&""===R&&i.createElement("p",{className:"mt-2 text-sm text-red-600 dark:text-red-400"},"This field is required."))),i.createElement("div",{className:"space-y-1"},i.createElement("label",{htmlFor:"contact_message",className:"block text-sm font-medium leading-5 text-gray-900 dark:text-dark-high-emphasis"},"Message (markdown is supported)"),i.createElement("div",{className:"relative rounded-md shadow-sm"},i.createElement("textarea",{id:"contact_message",rows:4,className:"textarea "+(V&&""===F?"border-red-300 dark:border-red-300 text-red-900 dark:text-red-300 placeholder-red-300 focus:border-red-300 dark:focus:border-red-300  focus:ring-red-300 dark:focus:ring-red-300":""),value:F,onChange:function(e){return O(e.target.value)}}),V&&""===F&&i.createElement("div",{className:"absolute top-0 pt-2 right-0 pr-3 flex items-center pointer-events-none"},i.createElement("svg",{className:"h-5 w-5 text-red-500",fill:"currentColor",viewBox:"0 0 20 20"},i.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})))),V&&""===F&&i.createElement("p",{className:"mt-2 text-sm text-red-600 dark:text-red-400"},"This field is required.")))))}},70863:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(65926);function o(){return r.createElement("div",{className:"flex items-center space-x-2 whitespace-nowrap flex-nowrap"},r.createElement("div",{className:"h-9 w-9 flex-shrink-0"},r.createElement(a.Z,null)),r.createElement("span",{className:"font-bold text-xl tracking-tight text-black dark:text-gray-300"},"Visual Computing"))}},8851:function(e,t,n){var r=n(80366);t.Z=r.default.button.withConfig({displayName:"MobileMenuButtonContainer",componentId:"sc-c93z66-0"})([""," .dark &{","}"],{transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",borderRadius:"0.375rem","--tw-text-opacity":"1",color:"rgba(161, 161, 170, var(--tw-text-opacity))",":hover":{"--tw-text-opacity":"1",color:"rgba(113, 113, 122, var(--tw-text-opacity))","--tw-bg-opacity":"1",backgroundColor:"rgba(244, 244, 245, var(--tw-bg-opacity))"},":focus":{outline:"2px solid transparent",outlineOffset:"2px","--tw-bg-opacity":"1",backgroundColor:"rgba(244, 244, 245, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(113, 113, 122, var(--tw-text-opacity))"}},{color:"rgba(255, 255, 255, 0.6)",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(39, 39, 42, var(--tw-bg-opacity))",color:"rgba(255, 255, 255, 0.87)"},":focus":{"--tw-bg-opacity":"1",backgroundColor:"rgba(63, 63, 70, var(--tw-bg-opacity))"}})},69798:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294);function a(e,t,n,r){var a,o=!1,i=0;function s(){a&&clearTimeout(a)}function l(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];var d=this,m=Date.now()-i;function f(){i=Date.now(),n.apply(d,u)}function p(){a=void 0}o||(r&&!a&&f(),s(),void 0===r&&m>e?f():!0!==t&&(a=setTimeout(r?p:f,void 0===r?e-m:e)))}return"boolean"!=typeof t&&(r=n,n=t,t=void 0),l.cancel=function(){s(),o=!0},l}var o=function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))};function i(e,t,n,i){var s=r.useState(void 0!==i?i:e),l=s[0],u=s[1],c=r.useRef(!0),d=r.useState((function(){return a(n,(function(e,t){console.log("throttled ",t),o(e,t)}))}))[0];return r.useEffect((function(){if(c.current){var r=window.localStorage.getItem(t);if(null!==r)try{u(JSON.parse(r))}catch(a){console.error("Couldn't parse key",t)}else u(e instanceof Function?e():e);c.current=!1}else n?(console.log("c"),d(t,l)):o(t,l);return function(){o(t,l),d.cancel()}}),[t,l]),[l,u]}}}]);
//# sourceMappingURL=762fb8c9dda1d01c9028eba1129ebbfd781fef07-cd64f61549ac1d2f7ea7.js.map