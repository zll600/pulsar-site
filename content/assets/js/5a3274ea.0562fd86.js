"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9801],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>v});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,v=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return t?n.createElement(v,i(i({ref:r},s),{},{components:t})):n.createElement(v,i({ref:r},s))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},70901:(e,r,t)=>{t.d(r,{A:()=>o});var n=t(56347);function o(){let{pathname:e}=(0,n.zy)();return e.endsWith("/")&&(e=e.slice(0,-1)),e.slice(0,e.lastIndexOf("/"))+"/"}},49846:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=t(58168),o=(t(96540),t(15680)),a=t(70901),i=t(56347);const c={id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview"},l=void 0,p={unversionedId:"helm-overview",id:"helm-overview",title:"Apache Pulsar Helm Chart",description:"",source:"@site/docs/helm-overview.md",sourceDirName:".",slug:"/helm-overview",permalink:"/docs/next/helm-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/helm-overview.md",tags:[],version:"current",frontMatter:{id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview"}},s={},u=[],m={toc:u},f="wrapper";function v(e){let{components:r,...t}=e;return(0,o.yg)(f,(0,n.A)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)(i.rd,{to:(0,a.A)()+"deploy-kubernetes",mdxType:"Redirect"}))}v.isMDXComponent=!0}}]);