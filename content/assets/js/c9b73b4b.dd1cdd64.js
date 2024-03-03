"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[58743],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),y=o,d=p["".concat(i,".").concat(y)]||p[y]||f[y]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},50426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(58168),o=(n(96540),n(15680));const a={id:"functions-deploy-cluster-resource",title:"Allocate resources to function instance",sidebar_label:"Allocate resources to function instance",description:"Allocate resources to function instance in Pulsar."},l=void 0,c={unversionedId:"functions-deploy-cluster-resource",id:"version-3.2.x/functions-deploy-cluster-resource",title:"Allocate resources to function instance",description:"Allocate resources to function instance in Pulsar.",source:"@site/versioned_docs/version-3.2.x/functions-deploy-cluster-resource.md",sourceDirName:".",slug:"/functions-deploy-cluster-resource",permalink:"/docs/3.2.x/functions-deploy-cluster-resource",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/functions-deploy-cluster-resource.md",tags:[],version:"3.2.x",frontMatter:{id:"functions-deploy-cluster-resource",title:"Allocate resources to function instance",sidebar_label:"Allocate resources to function instance",description:"Allocate resources to function instance in Pulsar."},sidebar:"docsSidebar",previous:{title:"Deploy a function in cluster mode",permalink:"/docs/3.2.x/functions-deploy-cluster"},next:{title:"Enable parallel processing",permalink:"/docs/3.2.x/functions-deploy-cluster-parallelism"}},i={},s=[],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"When running functions in cluster mode, you can specify the resources that can be allocated to each function instance."),(0,o.yg)("p",null,"The following table outlines the resources that can be allocated to function instances."),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Resource"),(0,o.yg)("th",{parentName:"tr",align:null},"Specified as"),(0,o.yg)("th",{parentName:"tr",align:null},"Supported runtime"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"CPU"),(0,o.yg)("td",{parentName:"tr",align:null},"The number of cores"),(0,o.yg)("td",{parentName:"tr",align:null},"Kubernetes")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"RAM"),(0,o.yg)("td",{parentName:"tr",align:null},"The number of bytes"),(0,o.yg)("td",{parentName:"tr",align:null},"Kubernetes")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Disk space"),(0,o.yg)("td",{parentName:"tr",align:null},"The number of bytes"),(0,o.yg)("td",{parentName:"tr",align:null},"Kubernetes")))),(0,o.yg)("p",null,"For example, the following command allocates 8 cores, 8GB of RAM, and 10GB of disk space to a function."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --jar target/my-functions.jar \\\n  --classname org.example.functions.MyFunction \\\n  --cpu 8 \\\n  --ram 8589934592 \\\n  --disk 10737418240\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The resources allocated to a given function are applied to each instance of the function. For example, if you apply 8GB of RAM to a function with a ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.2.x/functions-deploy-cluster-parallelism"},"parallelism")," of 5, you are applying 40GB of RAM for the function in total.")))}f.isMDXComponent=!0}}]);