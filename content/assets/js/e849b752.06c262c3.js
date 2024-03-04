"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[71405],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>m});var o=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},g=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=a,m=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return r?o.createElement(m,n(n({ref:t},g),{},{components:r})):o.createElement(m,n({ref:t},g))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,n[1]=s;for(var d=2;d<i;d++)n[d]=r[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=r(58168),a=(r(96540),r(15680));const i={id:"tiered-storage-overview",title:"Overview of tiered storage",sidebar_label:"Overview",original_id:"tiered-storage-overview"},n=void 0,s={unversionedId:"tiered-storage-overview",id:"version-2.8.x/tiered-storage-overview",title:"Overview of tiered storage",description:"Pulsar's Tiered Storage feature allows older backlog data to be moved from BookKeeper to long term and cheaper storage, while still allowing clients to access the backlog as if nothing has changed.",source:"@site/versioned_docs/version-2.8.x/tiered-storage-overview.md",sourceDirName:".",slug:"/tiered-storage-overview",permalink:"/docs/2.8.x/tiered-storage-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/tiered-storage-overview.md",tags:[],version:"2.8.x",frontMatter:{id:"tiered-storage-overview",title:"Overview of tiered storage",sidebar_label:"Overview",original_id:"tiered-storage-overview"},sidebar:"version-2.8.x/docsSidebar",previous:{title:"REST APIs",permalink:"/docs/2.8.x/sql-rest-api"},next:{title:"AWS S3 offloader",permalink:"/docs/2.8.x/tiered-storage-aws"}},l={},d=[{value:"When to use tiered storage?",id:"when-to-use-tiered-storage",level:2},{value:"How does tiered storage work?",id:"how-does-tiered-storage-work",level:2}],g={toc:d},p="wrapper";function c(e){let{components:t,...i}=e;return(0,a.yg)(p,(0,o.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Pulsar's ",(0,a.yg)("strong",{parentName:"p"},"Tiered Storage")," feature allows older backlog data to be moved from BookKeeper to long term and cheaper storage, while still allowing clients to access the backlog as if nothing has changed."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Tiered storage uses ",(0,a.yg)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,a.yg)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"Amazon S3")," and ",(0,a.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"GCS (Google Cloud Storage)")," for long term storage."),(0,a.yg)("p",{parentName:"li"},"With jclouds, it is easy to add support for more ",(0,a.yg)("a",{parentName:"p",href:"https://jclouds.apache.org/reference/providers/#blobstore-providers"},"cloud storage providers")," in the future."),(0,a.yg)("admonition",{parentName:"li",type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"For more information about how to use the AWS S3 offloader with Pulsar, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.8.x/tiered-storage-aws"},"here"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"For more information about how to use the GCS offloader with Pulsar, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.8.x/tiered-storage-gcs"},"here"),"."))))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Tiered storage uses ",(0,a.yg)("a",{parentName:"p",href:"http://hadoop.apache.org/"},"Apache Hadoop")," to support filesystems for long term storage."),(0,a.yg)("p",{parentName:"li"},"With Hadoop, it is easy to add support for more filesystems in the future."),(0,a.yg)("admonition",{parentName:"li",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"For more information about how to use the filesystem offloader with Pulsar, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.8.x/tiered-storage-filesystem"},"here"),".")))),(0,a.yg)("h2",{id:"when-to-use-tiered-storage"},"When to use tiered storage?"),(0,a.yg)("p",null,"Tiered storage should be used when you have a topic for which you want to keep a very long backlog for a long time."),(0,a.yg)("p",null,"For example, if you have a topic containing user actions which you use to train your recommendation systems, you may want to keep that data for a long time, so that if you change your recommendation algorithm, you can rerun it against your full user history."),(0,a.yg)("h2",{id:"how-does-tiered-storage-work"},"How does tiered storage work?"),(0,a.yg)("p",null,"A topic in Pulsar is backed by a ",(0,a.yg)("strong",{parentName:"p"},"log"),", known as a ",(0,a.yg)("strong",{parentName:"p"},"managed ledger"),". This log is composed of an ordered list of segments. Pulsar only writes to the final segment of the log. All previous segments are sealed. The data within the segment is immutable. This is known as a ",(0,a.yg)("strong",{parentName:"p"},"segment oriented architecture"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Tiered storage",src:r(70976).A,title:"Tiered Storage",width:"1110",height:"697"})),(0,a.yg)("p",null,"The tiered storage offloading mechanism takes advantage of segment oriented architecture. When offloading is requested, the segments of the log are copied one-by-one to tiered storage. All segments of the log (apart from the current segment) written to tiered storage can be offloaded."),(0,a.yg)("p",null,"Data written to BookKeeper is replicated to 3 physical machines by default. However, once a segment is sealed in BookKeeper, it becomes immutable and can be copied to long term storage. Long term storage can achieve cost savings by using mechanisms such as ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction"},"Reed-Solomon error correction")," to require fewer physical copies of data."),(0,a.yg)("p",null,"Before offloading ledgers to long term storage, you need to configure buckets, credentials, and other properties for the cloud storage service. Additionally, Pulsar uses multi-part objects to upload the segment data and brokers may crash while uploading the data. It is recommended that you add a life cycle rule for your bucket to expire incomplete multi-part upload after a day or two days to avoid getting charged for incomplete uploads. Moreover, you can trigger the offloading operation manually (via REST API or CLI) or automatically (via CLI)."),(0,a.yg)("p",null,"After offloading ledgers to long term storage, you can still query data in the offloaded ledgers with Pulsar SQL."),(0,a.yg)("p",null,"For more information about tiered storage for Pulsar topics, see ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/wiki/PIP-17:-Tiered-storage-for-Pulsar-topics"},"here"),"."))}c.isMDXComponent=!0},70976:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/pulsar-tiered-storage-72d8b53762992cfeaa58ae3b48dd2522.png"}}]);