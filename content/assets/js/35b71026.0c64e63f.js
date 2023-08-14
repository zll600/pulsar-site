"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[17376],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,f=u["".concat(o,".").concat(h)]||u[h]||m[h]||l;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={id:"client-java-3.1.0",title:"Client Java 3.1.0",sidebar_label:"Client Java 3.1.0"},i=void 0,p={unversionedId:"versioned/client-java-3.1.0",id:"versioned/client-java-3.1.0",title:"Client Java 3.1.0",description:"- Disable polling pattern topics when TopicListWatcher is enabled. #20779",source:"@site/release-notes/versioned/client-java-3.1.0.md",sourceDirName:"versioned",slug:"/versioned/client-java-3.1.0",permalink:"/release-notes/versioned/client-java-3.1.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-3.1.0.md",tags:[],version:"current",frontMatter:{id:"client-java-3.1.0",title:"Client Java 3.1.0",sidebar_label:"Client Java 3.1.0"}},o={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Disable polling pattern topics when TopicListWatcher is enabled. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20779"},"#20779")),(0,n.kt)("li",{parentName:"ul"},"Fix negative message re-delivery twice issue ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20750"},"#20750")),(0,n.kt)("li",{parentName:"ul"},"Fix subscribing pattern topics through Proxy not working ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20739"},"#20739")),(0,n.kt)("li",{parentName:"ul"},"Messages lost when consumers reconnect ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20695"},"#20695")),(0,n.kt)("li",{parentName:"ul"},"Fix the deadlock issue of consumers while using multiple IO threads ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20669"},"#20669")),(0,n.kt)("li",{parentName:"ul"},"Make the whole grabCnx() progress atomic ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20595"},"#20595")),(0,n.kt)("li",{parentName:"ul"},"Swallow Conscrypt ClassNotFoundException ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20371"},"#20371")),(0,n.kt)("li",{parentName:"ul"},"Improve for thread-safe ",(0,n.kt)("inlineCode",{parentName:"li"},"seek")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20321"},"#20321")),(0,n.kt)("li",{parentName:"ul"},"Document Java Client's Seek logic thread-safety improved in 20242 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20284"},"#20284")),(0,n.kt)("li",{parentName:"ul"},"Fix where the function getMsgNumInReceiverQueue always returns 0 when using message listener ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20245"},"#20245")),(0,n.kt)("li",{parentName:"ul"},"Java Client's Seek Logic Not Threadsafe 1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20242"},"#20242")),(0,n.kt)("li",{parentName:"ul"},"SchemaDefinition handle JSR310_CONVERSION_ENABLED property ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/20201"},"#20201")),(0,n.kt)("li",{parentName:"ul"},"Enable custom Encrypt/Decrypt Methods for ReaderImplementation. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12599"},"#12599"))))}m.isMDXComponent=!0}}]);