"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[50712],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const o={id:"getting-started-home",title:"Get started",sidebar_label:"Get Started"},i=void 0,l={unversionedId:"getting-started-home",id:"version-3.2.x/getting-started-home",title:"Get started",description:"Getting up and running with Pulsar is simple. Download it, install it, and try it out.",source:"@site/versioned_docs/version-3.2.x/getting-started-home.md",sourceDirName:".",slug:"/getting-started-home",permalink:"/docs/3.2.x/getting-started-home",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/getting-started-home.md",tags:[],version:"3.2.x",frontMatter:{id:"getting-started-home",title:"Get started",sidebar_label:"Get Started"},sidebar:"docsSidebar",previous:{title:"About",permalink:"/docs/3.2.x/"},next:{title:"Run Pulsar locally",permalink:"/docs/3.2.x/getting-started-standalone"}},s={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Getting up and running with Pulsar is simple. Download it, install it, and try it out."),(0,a.yg)("p",null,"You have three options. Click any of these links to begin your Pulsar journey!"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.2.x/getting-started-standalone"},"Run a standalone Pulsar cluster locally")," - Run a single instance of Pulsar in standalone mode on a single machine."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.2.x/getting-started-docker"},"Run a standalone Pulsar cluster in Docker")," - Run one or more instances of Pulsar in a Docker container. If you want to quickly set up a small Pulsar cluster on your local laptop, go to ",(0,a.yg)("a",{parentName:"li",href:"/docs/3.2.x/getting-started-docker-compose"},"Run a Pulsar cluster with Docker Compose"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/3.2.x/getting-started-helm"},"Run a standalone Pulsar cluster in Kubernetes")," - Run one or more instances of Pulsar in Kubernetes using a Helm chart.")))}p.isMDXComponent=!0}}]);