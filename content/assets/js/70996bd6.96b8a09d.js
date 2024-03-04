"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[25794],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>y});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),c=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(i.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=n,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return t?r.createElement(y,l(l({ref:a},p),{},{components:t})):r.createElement(y,l({ref:a},p))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85365:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(58168),n=(t(96540),t(15680));const s={Id:"tutorials-namespace",title:"Create a namespace",sidebar_label:"Create a namespace"},l=void 0,o={unversionedId:"tutorials-namespace",id:"version-2.8.x/tutorials-namespace",title:"Create a namespace",description:"Pulsar namespaces are logical groupings of topics.",source:"@site/versioned_docs/version-2.8.x/tutorials-namespace.md",sourceDirName:".",slug:"/tutorials-namespace",permalink:"/docs/2.8.x/tutorials-namespace",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/tutorials-namespace.md",tags:[],version:"2.8.x",frontMatter:{Id:"tutorials-namespace",title:"Create a namespace",sidebar_label:"Create a namespace"},sidebar:"version-2.8.x/docsSidebar",previous:{title:"Set up a tenant",permalink:"/docs/2.8.x/tutorials-tenant"},next:{title:"Create a topic",permalink:"/docs/2.8.x/tutorials-topic"}},i={},c=[{value:"Related Topics",id:"related-topics",level:4}],p={toc:c},u="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Pulsar namespaces are logical groupings of topics."),(0,n.yg)("p",null,"Namespaces can be managed via:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The namespaces command of the pulsar-admin tool"),(0,n.yg)("li",{parentName:"ul"},"The /admin/v2/namespaces endpoint of the admin ",(0,n.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,n.yg)("li",{parentName:"ul"},"The namespaces method of the PulsarAdmin object in the Java API")),(0,n.yg)("p",null,"In this tutorial, we create a namespace called pulsar in the tenant apache. Then we list namespaces of tenant apache to see if the namespace is created successfully."),(0,n.yg)("p",null,"Create the namespace."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces create apache/pulsar\n")),(0,n.yg)("p",null,"Verify the namespace."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces list apache\n")),(0,n.yg)("p",null,"You should see similar output to show the namespace apache/pulsar has been successfully created."),(0,n.yg)("h4",{id:"related-topics"},"Related Topics"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.8.x/tutorials-tenant"},"Set up a tenant")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.8.x/tutorials-topic"},"Create a topic")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.8.x/tutorials-produce-consume"},"Produce and consume messages")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/2.8.x/admin-api-clusters"},"Manage clusters"))))}m.isMDXComponent=!0}}]);