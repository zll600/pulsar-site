"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58538],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>h});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),g=n,h=u["".concat(o,".").concat(g)]||u[g]||m[g]||i;return r?a.createElement(h,l(l({ref:t},s),{},{components:r})):a.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},62884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const i={id:"client-cpp-2.9.2",title:"Client CPP 2.9.2",sidebar_label:"Client CPP 2.9.2"},l=void 0,p={unversionedId:"versioned/client-cpp-2.9.2",id:"versioned/client-cpp-2.9.2",title:"Client CPP 2.9.2",description:"- C++] Fix wrong unit of Access Token Response's expires_in field [#14554",source:"@site/release-notes/versioned/client-cpp-2.9.2.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-2.9.2",permalink:"/release-notes/versioned/client-cpp-2.9.2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-cpp-2.9.2.md",tags:[],version:"current",frontMatter:{id:"client-cpp-2.9.2",title:"Client CPP 2.9.2",sidebar_label:"Client CPP 2.9.2"}},o={},c=[],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix wrong unit of Access Token Response's ",(0,n.yg)("inlineCode",{parentName:"li"},"expires_in")," field ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14554"},"#14554")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix thread safety issue for multi topic consumer  ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14380"},"#14380")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix pulsar client cpp build fail in gcc-4.8.5 ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14053"},"#14053")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix hasMessageAvailable returns wrong value for last message ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13883"},"#13883")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix in macOS CMake might find error boost-python libs path ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13193"},"#13193")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix libcurl miss auth header when broker return 307 ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13112"},"#13112")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Define and expose PULSAR_VERSION macro ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12769"},"#12769")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix request timeout for GetLastMessageId doesn't work ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12586"},"#12586")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Support setting priority for consumers ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12526"},"#12526")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix connection read error logging ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12492"},"#12492")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Use weak ref to ClientConnection for timeout task ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12409"},"#12409")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix Version.h not found when CMake binary directory is customized ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13324"},"#13324")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix GCC compilation failure caused by warning macro ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14402"},"#14402")),(0,n.yg)("li",{parentName:"ul"},"[C++]"," Fix frequent segmentation fault of Python tests by refactoring ExecutorService ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12427"},"#12427"))))}m.isMDXComponent=!0}}]);