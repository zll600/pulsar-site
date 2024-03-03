"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3029],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const l={id:"pulsar-client-node-1.5.0",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"},i=void 0,o={unversionedId:"versioned/pulsar-client-node-1.5.0",id:"versioned/pulsar-client-node-1.5.0",title:"Pulsar Client Node",description:"1.5.0 &mdash; 2021-12-20",source:"@site/release-notes/versioned/pulsar-client-node-1.5.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-node-1.5.0",permalink:"/release-notes/versioned/pulsar-client-node-1.5.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-client-node-1.5.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-client-node-1.5.0",title:"Pulsar Client Node",sidebar_label:"Pulsar Client Node"}},s={},c=[{value:'1.5.0 \u2014 2021-12-20 <a id="1.5.0"></a>',id:"150--2021-12-20-",level:3},{value:"Enhancements",id:"enhancements",level:4},{value:"Fixes",id:"fixes",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"150--2021-12-20-"},"1.5.0 ","\u2014"," 2021-12-20 ",(0,a.yg)("a",{id:"1.5.0"})),(0,a.yg)("h4",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Added settings to enable building on Windows ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/169"},"#169"))),(0,a.yg)("h4",{id:"fixes"},"Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed an error when compiling pulsar-client-node with GCC v4 and Node.js v16 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/180"},"#180")),(0,a.yg)("li",{parentName:"ul"},"Fixed a segfault that occurs in MessageListenerProxy ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/183"},"#183"))),(0,a.yg)("p",null,"For a complete list of issues fixed, see\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-node/milestone/7?closed=1"},"https://github.com/apache/pulsar-client-node/milestone/7?closed=1")))}d.isMDXComponent=!0}}]);