"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88899],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70185:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview",original_id:"sql-overview"},c=void 0,u={unversionedId:"sql-overview",id:"version-2.10.0/sql-overview",title:"Pulsar SQL Overview",description:"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the Schema Registry, you can store structured data in Pulsar and query the data by using Trino (formerly Presto SQL).",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-2.10.0/sql-overview.md",sourceDirName:".",slug:"/sql-overview",permalink:"/ja/docs/sql-overview",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/sql-overview.md",tags:[],version:"2.10.0",frontMatter:{id:"sql-overview",title:"Pulsar SQL Overview",sidebar_label:"Overview",original_id:"sql-overview"},sidebar:"version-2.10.0/docsSidebar",previous:{title:"CLI",permalink:"/ja/docs/io-cli"},next:{title:"Query data",permalink:"/ja/docs/sql-getting-started"}},l={},p=[],d={toc:p};function f(e){var r=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Pulsar is used to store streams of event data, and the event data is structured with predefined fields. With the implementation of the ",(0,o.kt)("a",{parentName:"p",href:"schema-get-started"},"Schema Registry"),", you can store structured data in Pulsar and query the data by using ",(0,o.kt)("a",{parentName:"p",href:"https://trino.io/"},"Trino (formerly Presto SQL)"),"."),(0,o.kt)("p",null,"As the core of Pulsar SQL, Presto Pulsar connector enables Presto workers within a Presto cluster to query data from Pulsar."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:t(11450).Z,width:"1847",height:"854"})),(0,o.kt)("p",null,"The query performance is efficient and highly scalable, because Pulsar adopts ",(0,o.kt)("a",{parentName:"p",href:"/ja/docs/concepts-architecture-overview#apache-bookkeeper"},"two level segment based architecture"),"."),(0,o.kt)("p",null,"Topics in Pulsar are stored as segments in ",(0,o.kt)("a",{parentName:"p",href:"https://bookkeeper.apache.org/"},"Apache BookKeeper"),". Each topic segment is replicated to some BookKeeper nodes, which enables concurrent reads and high read throughput. You can configure the number of BookKeeper nodes, and the default number is ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),". In Presto Pulsar connector, data is read directly from BookKeeper, so Presto workers can read concurrently from horizontally scalable number BookKeeper nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The Pulsar consumer and reader interfaces",src:t(19096).Z,width:"1847",height:"854"})))}f.isMDXComponent=!0},19096:function(e,r,t){r.Z=t.p+"assets/images/pulsar-sql-arch-1-8b257e31ca5666ee351dbd8bfd3289aa.png"},11450:function(e,r,t){r.Z=t.p+"assets/images/pulsar-sql-arch-2-a5eba8dcb20b1e762f3f459e05bad282.png"}}]);