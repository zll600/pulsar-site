"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[90325],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={Id:"how-to-landing",title:"How-to",sidebar_label:"Tutorials"},i=void 0,s={unversionedId:"how-to-landing",id:"version-2.9.x/how-to-landing",title:"How-to",description:"Learning new software can be an overwhelming task, but relax \u2013 most aspects of Pulsar can be easily configured in just a few steps. These tutorials will show you how to quickly create topics, tenants, and namespaces, produce and consume messages, and more!",source:"@site/versioned_docs/version-2.9.x/how-to-landing.md",sourceDirName:".",slug:"/how-to-landing",permalink:"/docs/2.9.x/how-to-landing",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/how-to-landing.md",tags:[],version:"2.9.x",frontMatter:{Id:"how-to-landing",title:"How-to",sidebar_label:"Tutorials"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Apache Storm",permalink:"/docs/2.9.x/adaptors-storm"},next:{title:"Set up a tenant",permalink:"/docs/2.9.x/tutorials-tenant"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Learning new software can be an overwhelming task, but relax \u2013 most aspects of Pulsar can be easily configured in just a few steps. These tutorials will show you how to quickly create topics, tenants, and namespaces, produce and consume messages, and more!"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/2.9.x/tutorials-tenant"},"How to create a tenant")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/2.9.x/tutorials-namespace"},"How to create a namespace")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/2.9.x/tutorials-topic"},"How to create a topic")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/2.9.x/tutorials-produce-consume"},"How to produce and consume messages"))))}d.isMDXComponent=!0}}]);