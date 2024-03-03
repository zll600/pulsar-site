"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[53440],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>d});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,d=c["".concat(u,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const i={id:"functions-runtime-java-options",title:"Customize Java runtime options",sidebar_label:"Customize Java runtime options",description:"Customize Java runtime options in Pulsar."},a=void 0,s={unversionedId:"functions-runtime-java-options",id:"functions-runtime-java-options",title:"Customize Java runtime options",description:"Customize Java runtime options in Pulsar.",source:"@site/docs/functions-runtime-java-options.md",sourceDirName:".",slug:"/functions-runtime-java-options",permalink:"/docs/next/functions-runtime-java-options",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/functions-runtime-java-options.md",tags:[],version:"current",frontMatter:{id:"functions-runtime-java-options",title:"Customize Java runtime options",sidebar_label:"Customize Java runtime options",description:"Customize Java runtime options in Pulsar."},sidebar:"docsSidebar",previous:{title:"Configure Kubernetes runtime",permalink:"/docs/next/functions-runtime-kubernetes"},next:{title:"How to deploy",permalink:"/docs/next/functions-deploy"}},u={},p=[],l={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"This setting ",(0,o.yg)("strong",{parentName:"p"},"only")," applies to process runtime and Kubernetes runtime.")),(0,o.yg)("p",null,"To pass additional arguments to the JVM command line for every process started by a function worker, you can configure the ",(0,o.yg)("inlineCode",{parentName:"p"},"additionalJavaRuntimeArguments")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file as follows."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add JVM flags, like ",(0,o.yg)("inlineCode",{parentName:"li"},"-XX:+ExitOnOutOfMemoryError")),(0,o.yg)("li",{parentName:"ul"},"Pass custom system properties, like ",(0,o.yg)("inlineCode",{parentName:"li"},"-Dlog4j2.formatMsgNoLookups"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"additionalJavaRuntimeArguments: ['-XX:+ExitOnOutOfMemoryError','-Dfoo=bar']\n")))}m.isMDXComponent=!0}}]);