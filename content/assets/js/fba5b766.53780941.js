(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40873],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),v=o,m=u["".concat(i,".").concat(v)]||u[v]||p[v]||s;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=v;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},53184:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(32793),o=r(1048),s=r(67294),a=r(86010),l=r(94780),i=r(44063),c=r(71657),d=r(90948),u=r(1588),p=r(27621);function v(e){return(0,p.Z)("MuiTableHead",e)}(0,u.Z)("MuiTableHead",["root"]);var m=r(85893);const f=["className","component"],b=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),N={variant:"head"},g="thead",y=s.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:s,component:d=g}=r,u=(0,o.Z)(r,f),p=(0,n.Z)({},r,{component:d}),y=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},v,t)})(p);return(0,m.jsx)(i.Z.Provider,{value:N,children:(0,m.jsx)(b,(0,n.Z)({as:d,className:(0,a.Z)(y.root,s),ref:t,role:d===g?null:"rowgroup",ownerState:p},u))})}))},10147:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),s=r(55063),a=r(52969),l=r.n(a);const i={id:"client-node",title:"Node.js Client Release Notes",sidebar_label:"Node.js Client"},c=void 0,d={unversionedId:"client-node",id:"client-node",title:"Node.js Client Release Notes",description:"",source:"@site/release-notes/client-node.mdx",sourceDirName:".",slug:"/client-node",permalink:"/release-notes/client-node",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/client-node.mdx",tags:[],version:"current",frontMatter:{id:"client-node",title:"Node.js Client Release Notes",sidebar_label:"Node.js Client"},sidebar:"releaseNote",previous:{title:"Go Client",permalink:"/release-notes/client-go"},next:{title:"C# Client",permalink:"/release-notes/client-cs"}},u={},p=[],v={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{data:l(),mdxType:"ClientReleaseTable"}))}m.isMDXComponent=!0},52969:e=>{e.exports=[{tagName:"v1.8.2",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.8.2/",doc:"/docs/client-libraries-node",version:"v1.8.x"},{tagName:"v1.8.1",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.8.1/",doc:"/docs/client-libraries-node",version:""},{tagName:"v1.8.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.8.0/",doc:"/docs/client-libraries-node",version:""},{tagName:"v1.6.2",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.6.2/",doc:"/docs/client-libraries-node",version:"v1.6.x"},{tagName:"v1.5.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.5.0/",doc:"/docs/client-libraries-node",version:"v1.5.x"},{tagName:"v1.4.1",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.4.1/",doc:"/docs/client-libraries-node",version:"v1.4.x"},{tagName:"v1.4.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.4.0/",doc:"/docs/client-libraries-node",version:""},{tagName:"v1.3.2",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.3.2/",doc:"/docs/client-libraries-node",version:"v1.3.x"},{tagName:"v1.3.1",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.3.1/",doc:"/docs/client-libraries-node",version:""},{tagName:"v1.3.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.3.0/",doc:"/docs/client-libraries-node",version:""},{tagName:"v1.2.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.2.0/",doc:"/docs/client-libraries-node",version:"v1.2.x"},{tagName:"v1.1.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.1.0/",doc:"/docs/client-libraries-node",version:"v1.1.x"},{tagName:"v1.0.0",releaseNotes:"/release-notes/versioned/pulsar-client-node-1.0.0/",doc:"/docs/client-libraries-node",version:"v1.0.x"}]},55063:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(67294),o=r(7906),s=r(295),a=r(53252),l=r(53184),i=r(53816),c=r(95999);function d(e){return n.createElement(o.Z,{size:"small"},n.createElement(l.Z,null,n.createElement(i.Z,null,["Version","Release Note","Documentation"].map((e=>n.createElement(a.Z,{className:"font-bold",sx:{color:"inherit"},key:e},n.createElement(c.Z,null,e)))))),n.createElement(s.Z,null,e.data.map(((e,t)=>n.createElement(i.Z,{key:t,sx:{color:"inherit"}},n.createElement(a.Z,{sx:{color:"inherit"}},e.version),n.createElement(a.Z,{sx:{color:"inherit"}},n.createElement("a",{href:e.releaseNotes},e.tagName)),n.createElement(a.Z,{sx:{color:"inherit"}},n.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}}}]);