(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[64136],{15680:(e,t,r)=>{"use strict";r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},v="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=l(r),m=s,g=v["".concat(i,".").concat(m)]||v[m]||d[m]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[v]="string"==typeof e?e:s,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},618:(e,t,r)=>{"use strict";r.d(t,{A:()=>f});var n=r(58168),s=r(98587),o=r(96540),a=r(54533),c=r(64111),i=r(27256),l=r(3541),p=r(11848),v=r(27553),d=r(34548);function m(e){return(0,d.Ay)("MuiTableHead",e)}(0,v.A)("MuiTableHead",["root"]);var g=r(74848);const u=["className","component"],N=(0,p.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),b={variant:"head"},x="thead",f=o.forwardRef((function(e,t){const r=(0,l.A)({props:e,name:"MuiTableHead"}),{className:o,component:p=x}=r,v=(0,s.A)(r,u),d=(0,n.A)({},r,{component:p}),f=(e=>{const{classes:t}=e;return(0,c.A)({root:["root"]},m,t)})(d);return(0,g.jsx)(i.A.Provider,{value:b,children:(0,g.jsx)(N,(0,n.A)({as:p,className:(0,a.A)(f.root,o),ref:t,role:p===x?null:"rowgroup",ownerState:d},v))})}))},55016:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(58168),s=(r(96540),r(15680)),o=r(21590),a=r(49678),c=r.n(a);const i={id:"client-cpp",title:"C++ Client Release Notes",sidebar_label:"C++ Client"},l=void 0,p={unversionedId:"client-cpp",id:"client-cpp",title:"C++ Client Release Notes",description:"",source:"@site/release-notes/client-cpp.mdx",sourceDirName:".",slug:"/client-cpp",permalink:"/release-notes/client-cpp",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/client-cpp.mdx",tags:[],version:"current",frontMatter:{id:"client-cpp",title:"C++ Client Release Notes",sidebar_label:"C++ Client"},sidebar:"releaseNote",previous:{title:"WebSocket Client",permalink:"/release-notes/client-ws"},next:{title:"Python Client",permalink:"/release-notes/client-python"}},v={},d=[],m={toc:d},g="wrapper";function u(e){let{components:t,...r}=e;return(0,s.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)(o.A,{data:c(),mdxType:"ClientReleaseTable"}))}u.isMDXComponent=!0},49678:e=>{e.exports=[{tagName:"v3.5.0",vtag:"3.5.x",releaseNotes:"/release-notes/versioned/client-cpp-3.5.0/",doc:"/docs/client-libraries-cpp",version:"v3.5.x"},{tagName:"v3.4.2",vtag:"3.4.x",releaseNotes:"/release-notes/versioned/client-cpp-3.4.2/",doc:"/docs/client-libraries-cpp",version:"v3.4.x"},{tagName:"v3.4.1",vtag:"3.4.x",releaseNotes:"/release-notes/versioned/client-cpp-3.4.1/",doc:"/docs/client-libraries-cpp",version:""},{tagName:"v3.4.0",vtag:"3.4.x",releaseNotes:"/release-notes/versioned/client-cpp-3.4.0/",doc:"/docs/client-libraries-cpp",version:""},{tagName:"v3.3.0",vtag:"3.3.x",releaseNotes:"/release-notes/versioned/client-cpp-3.3.0/",doc:"/docs/client-libraries-cpp",version:"v3.3.x"},{tagName:"v3.2.0",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/client-cpp-3.2.0/",doc:"/docs/client-libraries-cpp",version:"v3.2.x"},{tagName:"v3.1.2",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/client-cpp-3.1.2/",doc:"/docs/client-libraries-cpp",version:"v3.1.x"},{tagName:"v3.1.1",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/client-cpp-3.1.1/",doc:"/docs/client-libraries-cpp",version:""},{tagName:"v3.1.0",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/client-cpp-3.1.0/",doc:"/docs/client-libraries-cpp",version:""},{tagName:"v3.0.0",vtag:"3.0.0",releaseNotes:"/release-notes/versioned/client-cpp-3.0.0/",doc:"/docs/client-libraries-cpp",version:"v3.0.x"},{tagName:"v2.10.3",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-cpp-2.10.3/",doc:"/docs/2.10.x/client-libraries-cpp",version:"v2.10.x"},{tagName:"v2.10.2",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-cpp-2.10.2/",doc:"/docs/2.10.x/client-libraries-cpp",version:""},{tagName:"v2.10.1",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-cpp-2.10.1/",doc:"/docs/2.10.x/client-libraries-cpp",version:""},{tagName:"v2.10.0",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-cpp-2.10.0/",doc:"/docs/2.10.x/client-libraries-cpp",version:""},{tagName:"v2.9.4",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-cpp-2.9.4/",doc:"/docs/2.9.x/client-libraries-cpp",version:"v2.9.x"},{tagName:"v2.9.3",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-cpp-2.9.3/",doc:"/docs/2.9.x/client-libraries-cpp",version:""},{tagName:"v2.9.2",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-cpp-2.9.2/",doc:"/docs/2.9.x/client-libraries-cpp",version:""},{tagName:"v2.8.4",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.4/",doc:"/docs/2.8.x/client-libraries-cpp",version:"v2.8.x"},{tagName:"v2.8.3",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.3/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.8.2",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.2/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.8.1",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.1/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.8.0",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-cpp-2.8.0/",doc:"/docs/2.8.x/client-libraries-cpp",version:""},{tagName:"v2.7.5",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/client-cpp-2.7.5/",doc:"/docs/2.7.5/client-libraries-cpp",version:"v2.7.x"},{tagName:"v2.7.4",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/client-cpp-2.7.4/",doc:"/docs/2.7.4/client-libraries-cpp",version:""},{tagName:"v2.7.3",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/client-cpp-2.7.3/",doc:"/docs/2.7.3/client-libraries-cpp",version:""},{tagName:"v2.7.2",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/client-cpp-2.7.2/",doc:"/docs/2.7.2/client-libraries-cpp",version:""},{tagName:"v2.7.1",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/client-cpp-2.7.1/",doc:"/docs/2.7.1/client-libraries-cpp",version:""},{tagName:"v2.7.0",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/client-cpp-2.7.0/",doc:"/docs/2.7.0/client-libraries-cpp",version:""},{tagName:"v2.6.4",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/client-cpp-2.6.4/",doc:"/docs/2.6.4/client-libraries-cpp",version:"v2.6.x"},{tagName:"v2.6.2",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/client-cpp-2.6.2/",doc:"/docs/2.6.2/client-libraries-cpp",version:""},{tagName:"v2.5.1",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/client-cpp-2.5.1/",doc:"/docs/2.5.1/client-libraries-cpp",version:"v2.5.x"}]},21590:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var n=r(96540),s=r(53881),o=r(88933),a=r(46780),c=r(618),i=r(73231),l=r(21312);function p(e){return n.createElement(s.A,{size:"small"},n.createElement(c.A,null,n.createElement(i.A,null,["Version","Release Note","Documentation"].map((e=>n.createElement(a.A,{className:"font-bold",sx:{color:"inherit"},key:e},n.createElement(l.A,null,e)))))),n.createElement(o.A,null,e.data.map(((e,t)=>n.createElement(i.A,{key:t,sx:{color:"inherit"}},n.createElement(a.A,{sx:{color:"inherit"}},e.version),n.createElement(a.A,{sx:{color:"inherit"}},n.createElement("a",{href:e.releaseNotes},e.tagName)),n.createElement(a.A,{sx:{color:"inherit"}},n.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}}}]);