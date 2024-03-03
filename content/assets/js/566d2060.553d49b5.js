"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[63188],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(o,".").concat(d)]||u[d]||h[d]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const l={id:"pulsar-client-node-1.8.1",title:"Pulsar Client Node 1.8.1",sidebar_label:"Pulsar Client Node 1.8.1"},i=void 0,p={unversionedId:"versioned/pulsar-client-node-1.8.1",id:"versioned/pulsar-client-node-1.8.1",title:"Pulsar Client Node 1.8.1",description:"What's Changed",source:"@site/release-notes/versioned/pulsar-client-node-1.8.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-node-1.8.1",permalink:"/release-notes/versioned/pulsar-client-node-1.8.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-client-node-1.8.1.md",tags:[],version:"current",frontMatter:{id:"pulsar-client-node-1.8.1",title:"Pulsar Client Node 1.8.1",sidebar_label:"Pulsar Client Node 1.8.1"}},o={},c=[{value:"What&#39;s Changed",id:"whats-changed",level:2}],s={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"whats-changed"},"What's Changed"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[refactor]"," optimize ci and build from source code by @shibd in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/280"},"https://github.com/apache/pulsar-client-node/pull/280")),(0,r.yg)("li",{parentName:"ul"},"[fix]"," an issue where the latest client does not work on Rocky Linux 8 by @massakam in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/285"},"https://github.com/apache/pulsar-client-node/pull/285")),(0,r.yg)("li",{parentName:"ul"},"[fix]"," Make it compatible with GLIBCXX_3.4.19 (CentOS 7) by @BewareMyPower in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/288"},"https://github.com/apache/pulsar-client-node/pull/288")),(0,r.yg)("li",{parentName:"ul"},"[refactor]"," Rename binary module_name from Pulsar to pulsar by @hrsakai in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/290"},"https://github.com/apache/pulsar-client-node/pull/290")),(0,r.yg)("li",{parentName:"ul"},"[refactor]"," Update the release process by @RobertIndie in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/291"},"https://github.com/apache/pulsar-client-node/pull/291")),(0,r.yg)("li",{parentName:"ul"},"[feat]"," Upgrade cpp client version to 3.1.1 by @shibd in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/292"},"https://github.com/apache/pulsar-client-node/pull/292")),(0,r.yg)("li",{parentName:"ul"},"[fix]"," Remove unnecessary / at the end of CPP_CLIENT_BASE_URL by @massakam in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/294"},"https://github.com/apache/pulsar-client-node/pull/294")),(0,r.yg)("li",{parentName:"ul"},"[fix]"," Fix the binary host url by @RobertIndie in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/295"},"https://github.com/apache/pulsar-client-node/pull/295")),(0,r.yg)("li",{parentName:"ul"},"[feat]"," Upgrade cpp client version to 3.1.2 by @shibd in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/297"},"https://github.com/apache/pulsar-client-node/pull/297")),(0,r.yg)("li",{parentName:"ul"},"[refactor]"," Optimize release process by @shibd in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/298"},"https://github.com/apache/pulsar-client-node/pull/298")," "),(0,r.yg)("li",{parentName:"ul"},"[fix]"," Use the certificate provided by the node.js by @shibd in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-client-node/pull/301"},"https://github.com/apache/pulsar-client-node/pull/301"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Full Changelog"),":",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-node/pulls?q=is%3Apr+is%3Aclosed+label%3Arelease%2Fv1.8.1"},"https://github.com/apache/pulsar-client-node/pulls?q=is%3Apr+is%3Aclosed+label%3Arelease%2Fv1.8.1")))}h.isMDXComponent=!0}}]);