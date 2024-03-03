"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18650],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(a),d=l,m=s["".concat(o,".").concat(d)]||s[d]||h[d]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:l,i[1]=p;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24005:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=a(58168),l=(a(96540),a(15680));const r={id:"pulsar-client-node-1.8.0",title:"Pulsar Client Node 1.8.0",sidebar_label:"Pulsar Client Node 1.8.0"},i=void 0,p={unversionedId:"versioned/pulsar-client-node-1.8.0",id:"versioned/pulsar-client-node-1.8.0",title:"Pulsar Client Node 1.8.0",description:"What's Changed",source:"@site/release-notes/versioned/pulsar-client-node-1.8.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-node-1.8.0",permalink:"/release-notes/versioned/pulsar-client-node-1.8.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-client-node-1.8.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-client-node-1.8.0",title:"Pulsar Client Node 1.8.0",sidebar_label:"Pulsar Client Node 1.8.0"}},o={},c=[{value:"What&#39;s Changed",id:"whats-changed",level:2}],u={toc:c},s="wrapper";function h(e){let{components:t,...a}=e;return(0,l.yg)(s,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"whats-changed"},"What's Changed"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[feat]"," Add chunking support by @RobertIndie in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/234"},"https://github.com/apache/pulsar-client-node/pull/234")),(0,l.yg)("li",{parentName:"ul"},"[feat]"," Napi support package c++ static binary by @shibd in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/235"},"https://github.com/apache/pulsar-client-node/pull/235")),(0,l.yg)("li",{parentName:"ul"},"[feat]"," Support windows build napi of static link c++ lib by @shibd in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/238"},"https://github.com/apache/pulsar-client-node/pull/238")),(0,l.yg)("li",{parentName:"ul"},"[refactor]"," Modify the README to apply the new installation method by @shibd in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/239"},"https://github.com/apache/pulsar-client-node/pull/239")),(0,l.yg)("li",{parentName:"ul"},"[feat]"," Add support for seeking by message ID by @RobertIndie in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/241"},"https://github.com/apache/pulsar-client-node/pull/241")),(0,l.yg)("li",{parentName:"ul"},"[refactor]"," Fetch C++ client official release by @shibd in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/244"},"https://github.com/apache/pulsar-client-node/pull/244")),(0,l.yg)("li",{parentName:"ul"},"[feat]"," Support consumer seek by timestamp and reader seek by @RobertIndie in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/247"},"https://github.com/apache/pulsar-client-node/pull/247")),(0,l.yg)("li",{parentName:"ul"},"[feat]"," Support prebuild macOS-arm64 arch binaries by @shibd in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/250"},"https://github.com/apache/pulsar-client-node/pull/250")),(0,l.yg)("li",{parentName:"ul"},"[fix]"," Upgrade the version of OpenSSL that compiles MacOS CPP client dependencies by @shibd in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/251"},"https://github.com/apache/pulsar-client-node/pull/251")),(0,l.yg)("li",{parentName:"ul"},"[improve]"," Use async C function in the Consumer#receive method by @equanz in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/252"},"https://github.com/apache/pulsar-client-node/pull/252")),(0,l.yg)("li",{parentName:"ul"},"[feat]"," Add example for custom logger and LogLevel#toString by @RobertIndie in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/253"},"https://github.com/apache/pulsar-client-node/pull/253")),(0,l.yg)("li",{parentName:"ul"},"[fix]"," Fix windows default download CPP client failed by @shibd in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/257"},"https://github.com/apache/pulsar-client-node/pull/257")),(0,l.yg)("li",{parentName:"ul"},"[refactor]"," Remove useless dependencies. by @shibd in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/258"},"https://github.com/apache/pulsar-client-node/pull/258")),(0,l.yg)("li",{parentName:"ul"},"[refactor]"," Refactor the CPP client version controlling in the build script by @RobertIndie in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/259"},"https://github.com/apache/pulsar-client-node/pull/259")),(0,l.yg)("li",{parentName:"ul"},"[improve]"," Bump async from 3.2.1 to 3.2.4 by @nkurihar in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/261"},"https://github.com/apache/pulsar-client-node/pull/261")),(0,l.yg)("li",{parentName:"ul"},"[fix]"," Add license headers by @nkurihar in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/262"},"https://github.com/apache/pulsar-client-node/pull/262"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-node/milestone/13?closed=1"},"https://github.com/apache/pulsar-client-node/milestone/13?closed=1")))}h.isMDXComponent=!0}}]);