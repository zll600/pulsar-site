"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1973],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"pulsar-cs-2.4.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},s=void 0,l={unversionedId:"versioned/pulsar-cs-2.4.0",id:"versioned/pulsar-cs-2.4.0",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/versioned/pulsar-cs-2.4.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-2.4.0",permalink:"/release-notes/versioned/pulsar-cs-2.4.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-cs-2.4.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-cs-2.4.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},i={},u=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-dotpulsar/wiki/Compression"},"Zstd compression")," via the ",(0,a.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/ZstdSharp.Port"},"ZstdSharp.Port")," NuGet package")),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The presence of ",(0,a.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/ZstdNet"},"ZstdNet")," on a non-Windows system will cause DotPulsar to fault consumers, producers, and readers")))}p.isMDXComponent=!0}}]);