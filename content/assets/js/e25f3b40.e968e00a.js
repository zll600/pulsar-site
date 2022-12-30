"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"document-preview",title:"Previewing content"},o=void 0,l={unversionedId:"document-preview",id:"document-preview",title:"Previewing content",description:"This guide explains why and how to preview Pulsar content locally with detailed steps and various examples.",source:"@site/contribute/document-preview.md",sourceDirName:".",slug:"/document-preview",permalink:"/contribute/document-preview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/document-preview.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1672417414,formattedLastUpdatedAt:"Dec 30, 2022",frontMatter:{id:"document-preview",title:"Previewing content"},sidebar:"sidebarDevelopment",previous:{title:"Updating document",permalink:"/contribute/document-contribution"},next:{title:"Writing syntax guide",permalink:"/contribute/document-syntax"}},s={},c=[{value:"Why preview changes locally?",id:"why-preview-changes-locally",level:2},{value:"How to preview changes locally?",id:"how-to-preview-changes-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Preview changes",id:"preview-changes",level:3},{value:"Stop preview",id:"stop-preview",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide explains why and how to preview Pulsar content locally with detailed steps and various examples."),(0,a.kt)("h2",{id:"why-preview-changes-locally"},"Why preview changes locally?"),(0,a.kt)("p",null,"It is ",(0,a.kt)("strong",{parentName:"p"},"required")," to preview your changes locally and attach the preview screenshots in your PR description. It brings many benefits, including but not limited to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can test your writings. It's a way to check whether you use the correct ",(0,a.kt)("a",{parentName:"li",href:"/contribute/document-syntax"},"syntax"),". You ",(0,a.kt)("strong",{parentName:"li"},"must ensure")," docs can be compiled and published correctly."),(0,a.kt)("li",{parentName:"ul"},"You can get your PR merged more quickly. Reviewers know your changes clearly and can speed up the review process.")),(0,a.kt)("h2",{id:"how-to-preview-changes-locally"},"How to preview changes locally?"),(0,a.kt)("p",null,"Pulsar documentation is built using ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),". To preview your changes as you edit the files, you can run a local development server that serves your website and reflect the latest changes."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To verify docs are built correctly before submitting a contribution, you should set up your local environment to build and display the docs locally."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node >= 16.14"),(0,a.kt)("li",{parentName:"ul"},"Yarn >= 1.5"),(0,a.kt)("li",{parentName:"ul"},"Although you can use Linux, macOS, or Windows to build locally the Pulsar documentation, macOS is the preferred build environment as it offers the most complete support for documentation building.")),(0,a.kt)("h3",{id:"preview-changes"},"Preview changes"),(0,a.kt)("p",null,"Pulsar website changes refer to all the changes made to the Pulsar website, including but not limited to the following pages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pathname:///docs"},"User documents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/contribute/"},"Contribution guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pathname:///release-notes/"},"Release notes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pathname:///ecosystem"},"Ecosystem page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"pathname:///case-studies"},"Case studies")),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("p",null,"Follow these steps to preview the website changes."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change to the working directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd pulsar-site/\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the following command to preview changes:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Preview changes on master\n./preview.sh current\n\n# preview changes on a specific version\n./preview.sh 2.10.x\n\n# preview changes on multiple versions\n./preview.sh 2.10.x 2.9.x ...\n")))),(0,a.kt)("p",null,"By default, a browser window will open at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," to show the changes:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:n(5384).Z,width:"936",height:"678"})),(0,a.kt)("h3",{id:"stop-preview"},"Stop preview"),(0,a.kt)("p",null,"Switch to your command-line interface and press ",(0,a.kt)("strong",{parentName:"p"},"Control+C"),"."))}u.isMDXComponent=!0},5384:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/website-preview-3e284d8b7c2292bcb606955218a65a23.png"}}]);