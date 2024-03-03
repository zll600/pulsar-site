"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55662],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,h=s["".concat(o,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={id:"client-cpp-2.9.3",title:"Client CPP 2.9.3",sidebar_label:"Client CPP 2.9.3"},l=void 0,c={unversionedId:"versioned/client-cpp-2.9.3",id:"versioned/client-cpp-2.9.3",title:"Client CPP 2.9.3",description:"- fix Fix UnknownError might be returned for a partitioned producer #15161",source:"@site/release-notes/versioned/client-cpp-2.9.3.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.9.3",permalink:"/release-notes/versioned/client-cpp-2.9.3",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-cpp-2.9.3.md",tags:[],version:"current",frontMatter:{id:"client-cpp-2.9.3",title:"Client CPP 2.9.3",sidebar_label:"Client CPP 2.9.3"}},o={},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"[fix][c++]"," Fix UnknownError might be returned for a partitioned producer ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15161"},"#15161")),(0,a.yg)("li",{parentName:"ul"},"[fix][c++]"," Fix connection is not closed when broker closes the connection to proxy ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15009"},"#15009")),(0,a.yg)("li",{parentName:"ul"},"[fix][c++]"," Fix producer is never destructed until client is closed ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14797"},"#14797")),(0,a.yg)("li",{parentName:"ul"},"[fix][c++]"," Fix segmentation fault when creating socket failed ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14834"},"#14834")),(0,a.yg)("li",{parentName:"ul"},"[fix][c++]"," Fix send callback might not be invoked in key-based batching ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14898"},"#14898")),(0,a.yg)("li",{parentName:"ul"},"[fix][c++]"," Fix single message metadata not set correctly ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15072"},"#15072")),(0,a.yg)("li",{parentName:"ul"},"[fix][c++]"," Fix the race condition of connect timeout task ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14823"},"#14823")),(0,a.yg)("li",{parentName:"ul"},"[fix][c++]"," Handle exception in creating socket when fd limit is reached ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14587"},"#14587")),(0,a.yg)("li",{parentName:"ul"},"[fix][c++]"," Wait until event loop terminates when closing the Client ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15316"},"#15316")),(0,a.yg)("li",{parentName:"ul"},"[fix][c++]"," Avoid race condition causing double callback on close ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15508"},"#15508")),(0,a.yg)("li",{parentName:"ul"},"[improve][c++]"," Add braces around initialization of subobject ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14735"},"#14735"))))}m.isMDXComponent=!0}}]);