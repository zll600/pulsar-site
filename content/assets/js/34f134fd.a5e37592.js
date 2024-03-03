"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[20030],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(a),h=n,g=c["".concat(s,".").concat(h)]||c[h]||m[h]||l;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},33217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(58168),n=(a(96540),a(15680));const l={id:"client-java-2.8.3",title:"Client Java 2.8.3",sidebar_label:"Client Java 2.8.3"},i=void 0,p={unversionedId:"versioned/client-java-2.8.3",id:"versioned/client-java-2.8.3",title:"Client Java 2.8.3",description:"- Fix adding message to list potential issue 14377",source:"@site/release-notes/versioned/client-java-2.8.3.md",sourceDirName:"versioned",slug:"/versioned/client-java-2.8.3",permalink:"/release-notes/versioned/client-java-2.8.3",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-2.8.3.md",tags:[],version:"current",frontMatter:{id:"client-java-2.8.3",title:"Client Java 2.8.3",sidebar_label:"Client Java 2.8.3"}},s={},o=[],u={toc:o},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fix adding message to list potential issue ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14377"},"14377")),(0,n.yg)("li",{parentName:"ul"},"Fix send to deadLetterTopic not working when reach maxRedeliverCount ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14317"},"14317")),(0,n.yg)("li",{parentName:"ul"},"Fix time unit mismatch in errMsg when producer send fails. ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14299"},"14299")),(0,n.yg)("li",{parentName:"ul"},"Fix PersistentAcknowledgmentsGroupingTracker set BitSet issue. ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14260"},"14260")),(0,n.yg)("li",{parentName:"ul"},"Check ",(0,n.yg)("inlineCode",{parentName:"li"},"getTlsTrustStorePath")," NPE when user forget to set it. ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14253"},"14253")),(0,n.yg)("li",{parentName:"ul"},"[Issue 12262]"," Fix consume failure when BatchReceivePolicy#maxNumBytes < message size ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14139"},"14139")),(0,n.yg)("li",{parentName:"ul"},"Use ",(0,n.yg)("inlineCode",{parentName:"li"},"scheduleWithFixedDelay")," instead of ",(0,n.yg)("inlineCode",{parentName:"li"},"scheduleAtFixedRate")," for java producer batch timer ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14125"},"14125")),(0,n.yg)("li",{parentName:"ul"},"Add a default timeout for OAuth2 Metadata Resolver ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14056"},"14056")),(0,n.yg)("li",{parentName:"ul"},"Fix send chunking message failed when ordering key is set. ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13699"},"13699")),(0,n.yg)("li",{parentName:"ul"},"Fixed Producer semaphore permit release issue ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13682"},"13682")),(0,n.yg)("li",{parentName:"ul"},"Fix the wrong multi-topic has message available behavior ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13634"},"13634")),(0,n.yg)("li",{parentName:"ul"},"Use PulsarByteBufAllocator to allocate buffer for chunks ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13536"},"13536")),(0,n.yg)("li",{parentName:"ul"},"Fix resources leak when create producer failed ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13505"},"13505")),(0,n.yg)("li",{parentName:"ul"},"Fix semaphore and memory leak when chunks failed to enqueue ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13454"},"13454")),(0,n.yg)("li",{parentName:"ul"},"Fix invalid setting of enabled ciphers to fix warning from BoringSSL ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13435"},"13435")),(0,n.yg)("li",{parentName:"ul"},"[Producer]"," Change the time units from ns to ms ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13057"},"13057")),(0,n.yg)("li",{parentName:"ul"},"Fix consume message order issue when use listener. ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13023"},"13023")),(0,n.yg)("li",{parentName:"ul"},"Use sendAsync instead of send when produce message to retry topic. ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12946"},"12946")),(0,n.yg)("li",{parentName:"ul"},"[Java Client]"," Avoid IllegalStateException in ClientCnx debug logs ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12899"},"12899")),(0,n.yg)("li",{parentName:"ul"},"[pulsar-client]"," Add conf backoff values ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12520"},"12520")),(0,n.yg)("li",{parentName:"ul"},"Add log error tracking for semaphore count leak ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12410"},"12410"))))}m.isMDXComponent=!0}}]);