"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[71339],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=o(r),m=a,g=s["".concat(c,".").concat(m)]||s[m]||h[m]||p;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var o=2;o<p;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var n=r(58168),a=(r(96540),r(15680));const p={id:"client-cpp-3.4.1",title:"Client CPP 3.4.1",sidebar_label:"Client CPP 3.4.1"},l=void 0,i={unversionedId:"versioned/client-cpp-3.4.1",id:"versioned/client-cpp-3.4.1",title:"Client CPP 3.4.1",description:"What's Changed",source:"@site/release-notes/versioned/client-cpp-3.4.1.md",sourceDirName:"versioned",slug:"/versioned/client-cpp-3.4.1",permalink:"/release-notes/versioned/client-cpp-3.4.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-cpp-3.4.1.md",tags:[],version:"current",frontMatter:{id:"client-cpp-3.4.1",title:"Client CPP 3.4.1",sidebar_label:"Client CPP 3.4.1"}},c={},o=[{value:"What&#39;s Changed",id:"whats-changed",level:2}],u={toc:o},s="wrapper";function h(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"whats-changed"},"What's Changed"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fix Protobuf symbols not found in libpulsarwithdeps.a when building on macOS by @BewareMyPower in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/354"},"https://github.com/apache/pulsar-client-cpp/pull/354")),(0,a.yg)("li",{parentName:"ul"},"Fix the flush callback might be called repeatedly by @BewareMyPower in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/353"},"https://github.com/apache/pulsar-client-cpp/pull/353")),(0,a.yg)("li",{parentName:"ul"},"Log topic lookup result by @erobot in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/351"},"https://github.com/apache/pulsar-client-cpp/pull/351")),(0,a.yg)("li",{parentName:"ul"},"Fix bad_weak_ptr when close a ClientConnection during construction by @BewareMyPower in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/350"},"https://github.com/apache/pulsar-client-cpp/pull/350")),(0,a.yg)("li",{parentName:"ul"},"Fix crash when removing connection from the pool by @BewareMyPower in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/347"},"https://github.com/apache/pulsar-client-cpp/pull/347")),(0,a.yg)("li",{parentName:"ul"},"Fix lazy partitioned producer might send duplicated messages by @BewareMyPower in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/342"},"https://github.com/apache/pulsar-client-cpp/pull/342")),(0,a.yg)("li",{parentName:"ul"},"Use absolute path to find credential files in unit tests by @BewareMyPower in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/340"},"https://github.com/apache/pulsar-client-cpp/pull/340")),(0,a.yg)("li",{parentName:"ul"},"Fix close() returns ResultAlreadyClosed after unsubscribe or close by @BewareMyPower in ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-cpp/pull/338"},"https://github.com/apache/pulsar-client-cpp/pull/338"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp/compare/v3.4.0...v3.4.1"},"https://github.com/apache/pulsar-client-cpp/compare/v3.4.0...v3.4.1")))}h.isMDXComponent=!0}}]);