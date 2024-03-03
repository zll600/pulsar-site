"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[31060],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),g=l,m=u["".concat(p,".").concat(g)]||u[g]||y[g]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(58168),l=(n(96540),n(15680));const a={id:"client-libraries-python-setup",title:"Set up Python client",sidebar_label:"Set up",description:"Learn how to set up Python client library in Pulsar."},i=void 0,o={unversionedId:"client-libraries-python-setup",id:"client-libraries-python-setup",title:"Set up Python client",description:"Learn how to set up Python client library in Pulsar.",source:"@site/docs/client-libraries-python-setup.md",sourceDirName:".",slug:"/client-libraries-python-setup",permalink:"/docs/next/client-libraries-python-setup",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-python-setup.md",tags:[],version:"current",frontMatter:{id:"client-libraries-python-setup",title:"Set up Python client",sidebar_label:"Set up",description:"Learn how to set up Python client library in Pulsar."},sidebar:"docsSidebar",previous:{title:"Python client",permalink:"/docs/next/client-libraries-python"},next:{title:"Initialize",permalink:"/docs/next/client-libraries-python-initialize"}},p={},s=[{value:"Step 1: Install Python client library",id:"step-1-install-python-client-library",level:2},{value:"Step 2: Connect to Pulsar cluster",id:"step-2-connect-to-pulsar-cluster",level:2}],c={toc:s},u="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"To set up Python client library in Pulsar, complete the following steps."),(0,l.yg)("h2",{id:"step-1-install-python-client-library"},"Step 1: Install Python client library"),(0,l.yg)("p",null,"Use ",(0,l.yg)("a",{parentName:"p",href:"https://pip.pypa.io/"},"pip")," to install the latest version:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"pip install 'pulsar-client==3.4.0'\n")),(0,l.yg)("p",null,"You can install optional components alongside the client library:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"# avro serialization\npip install 'pulsar-client[avro]==3.4.0'\n\n# functions runtime\npip install 'pulsar-client[functions]==3.4.0'\n\n# all optional components\npip install 'pulsar-client[all]==3.4.0'\n")),(0,l.yg)("p",null,"Installation via PyPi is available for the following Python versions:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"Platform"),(0,l.yg)("th",{parentName:"tr",align:"left"},"Supported Python versions"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"macOS (>= 11.0)"),(0,l.yg)("td",{parentName:"tr",align:"left"},"3.7, 3.8, 3.9 and 3.10")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},"Linux (including Alpine Linux)"),(0,l.yg)("td",{parentName:"tr",align:"left"},"3.7, 3.8, 3.9 and 3.10")))),(0,l.yg)("h2",{id:"step-2-connect-to-pulsar-cluster"},"Step 2: Connect to Pulsar cluster"),(0,l.yg)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,l.yg)("a",{parentName:"p",href:"/docs/next/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,l.yg)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,l.yg)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,l.yg)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,l.yg)("inlineCode",{parentName:"p"},"6650"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,l.yg)("p",null,"If you have multiple brokers, separate ",(0,l.yg)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,l.yg)("p",null,"If you use ",(0,l.yg)("a",{parentName:"p",href:"/docs/next/security-tls-authentication"},"mTLS")," authentication, add ",(0,l.yg)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")))}y.isMDXComponent=!0}}]);