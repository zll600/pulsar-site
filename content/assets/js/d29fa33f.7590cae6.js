"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),b=i,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},87549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={id:"client-libraries-cpp-initialize",title:"Initialize a C++ client object",sidebar_label:"Initialize"},l=void 0,o={unversionedId:"client-libraries-cpp-initialize",id:"version-3.1.x/client-libraries-cpp-initialize",title:"Initialize a C++ client object",description:"You can instantiate a Client object using just a URL for the target Pulsar cluster like this:",source:"@site/versioned_docs/version-3.1.x/client-libraries-cpp-initialize.md",sourceDirName:".",slug:"/client-libraries-cpp-initialize",permalink:"/docs/3.1.x/client-libraries-cpp-initialize",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/client-libraries-cpp-initialize.md",tags:[],version:"3.1.x",frontMatter:{id:"client-libraries-cpp-initialize",title:"Initialize a C++ client object",sidebar_label:"Initialize"},sidebar:"docsSidebar",previous:{title:"Set up",permalink:"/docs/3.1.x/client-libraries-cpp-setup"},next:{title:"Use",permalink:"/docs/3.1.x/client-libraries-cpp-use"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can instantiate a Client object using just a URL for the target Pulsar ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.1.x/reference-terminology#cluster"},"cluster")," like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Client client("pulsar://localhost:6650");\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you run a cluster in ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.1.x/getting-started-standalone"},"standalone mode"),", the broker is available at the ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650")," URL by default.")))}d.isMDXComponent=!0}}]);