"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[70783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={id:"client-libraries-java-initialize",title:"Initialize a Java client",sidebar_label:"Initialize"},l=void 0,o={unversionedId:"client-libraries-java-initialize",id:"version-3.1.x/client-libraries-java-initialize",title:"Initialize a Java client",description:"You can instantiate a PulsarClient object using just a URL for the target Pulsar cluster like this:",source:"@site/versioned_docs/version-3.1.x/client-libraries-java-initialize.md",sourceDirName:".",slug:"/client-libraries-java-initialize",permalink:"/docs/3.1.x/client-libraries-java-initialize",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/client-libraries-java-initialize.md",tags:[],version:"3.1.x",frontMatter:{id:"client-libraries-java-initialize",title:"Initialize a Java client",sidebar_label:"Initialize"},sidebar:"docsSidebar",previous:{title:"Set up",permalink:"/docs/3.1.x/client-libraries-java-setup"},next:{title:"Use",permalink:"/docs/3.1.x/client-libraries-java-use"}},c={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can instantiate a ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/3.1.x/org/apache/pulsar/client/api/PulsarClient"},"PulsarClient")," object using just a URL for the target Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.1.x/reference-terminology#cluster"},"cluster")," like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'PulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650")\n        .build();\n')),(0,n.kt)("p",null,"If you have multiple brokers, you can initiate a PulsarClient like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'PulsarClient client = PulsarClient.builder()\n        .serviceUrl("pulsar://localhost:6650,localhost:6651,localhost:6652")\n        .build();\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you run a cluster in ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.1.x/getting-started-standalone"},"standalone mode"),", the broker is available at the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650")," URL by default.")),(0,n.kt)("p",null,"For detailed client configurations, see the ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.1.x/client/"},"reference doc"),"."))}d.isMDXComponent=!0}}]);