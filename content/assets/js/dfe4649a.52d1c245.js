"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5286],{15680:(e,a,r)=>{r.d(a,{xA:()=>s,yg:()=>g});var t=r(96540);function l(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){l(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,l=function(e,a){if(null==e)return{};var r,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(l[r]=e[r]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=t.createContext({}),u=function(e){var a=t.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):p(p({},a),e)),r},s=function(e){var a=u(e.components);return t.createElement(o.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=l,g=c["".concat(o,".").concat(m)]||c[m]||h[m]||n;return r?t.createElement(g,p(p({ref:a},s),{},{components:r})):t.createElement(g,p({ref:a},s))}));function g(e,a){var r=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=r.length,p=new Array(n);p[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[c]="string"==typeof e?e:l,p[1]=i;for(var u=2;u<n;u++)p[u]=r[u];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32170:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var t=r(58168),l=(r(96540),r(15680));const n={id:"pulsar-2.5.2",title:"Apache Pulsar 2.5.2",sidebar_label:"Apache Pulsar 2.5.2"},p=void 0,i={unversionedId:"versioned/pulsar-2.5.2",id:"versioned/pulsar-2.5.2",title:"Apache Pulsar 2.5.2",description:"2020-05-19",source:"@site/release-notes/versioned/pulsar-2.5.2.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.5.2",permalink:"/release-notes/versioned/pulsar-2.5.2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.5.2.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.5.2",title:"Apache Pulsar 2.5.2",sidebar_label:"Apache Pulsar 2.5.2"}},o={},u=[{value:"2020-05-19",id:"2020-05-19",level:4},{value:"Fixes and Enhancements",id:"fixes-and-enhancements",level:4},{value:"Broker",id:"broker",level:5},{value:"Pulsar Schema",id:"pulsar-schema",level:5},{value:"Pulsar Functions",id:"pulsar-functions",level:5},{value:"Tiered Storage",id:"tiered-storage",level:5},{value:"Pulsar IO",id:"pulsar-io",level:5}],s={toc:u},c="wrapper";function h(e){let{components:a,...r}=e;return(0,l.yg)(c,(0,t.A)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h4",{id:"2020-05-19"},"2020-05-19"),(0,l.yg)("h4",{id:"fixes-and-enhancements"},"Fixes and Enhancements"),(0,l.yg)("h5",{id:"broker"},"Broker"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Implement AutoTopicCreation by namespace level override\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6471"},"#6471")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Add custom deletionLag and threshold for offload policies per namespace\xa0 ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6422"},"#6422")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Invalidate managed ledgers zookeeper cache instead of reloading on watcher triggered ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6659"},"#6659")," "),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Retention policy should be respected when there is no traffic\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6676"},"#6676")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Fixed double delete on a namespace\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6713"},"#6713")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," fix get batch message from http response, only get the first message",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6715"},"#6715")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Fix Deadlock by Consumer and Reader",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6728"},"#6728")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," avoid backpressure by skipping dispatching if consumer channel is not writable\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6740"},"#6740")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," fix when producing encrypted messages, MessageMetadata objects are not released after they are created. ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6745"},"#6745")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Bump netty version to 4.1.48.Final ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6746"},"#6746")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Increase timeout for loading topics\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6750"},"#6750")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Fix wrong cursor state for cursor without consumer\xa0\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6766"},"#6766")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," change nondurable cursor to active to improve performance\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6769"},"#6769")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," register loadbalance znode should attempt to wait until session expired\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6788"},"#6788")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Fix some empty message related problems in the compacted topic.\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6795"},"#6795")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Avoid creating partitioned topic for partition name\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6846"},"#6846")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Add Tls with keystore type config support\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6853"},"#6853")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," fix consumer stuck when batchReceivePolicy maxNumMessages > maxReceiverQueueSize\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6862"},"#6862")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," use originalAuthMethod on originalAuthChecker in Proxy Authentication\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6870"},"#6870")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Close producer when the topic does not exists.\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6879"},"#6879")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Handle all exceptions from ",(0,l.yg)("inlineCode",{parentName:"li"},"topic.addProducer"),"\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6881"},"#6881")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," fix topicPublishRateLimiter not effective after restart broker\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6893"},"#6893")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Expose pulsar_out_bytes_total and pulsar_out_messages_total for namespace/subscription/consumer.\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6918"},"#6918")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Policy ttlDurationDefaultInSeconds not applying \xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6920"},"#6920")),(0,l.yg)("li",{parentName:"ul"},"[Broker]"," Fix pulsar admin thread number explode bug. ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6940"},"#6940"))),(0,l.yg)("h5",{id:"pulsar-schema"},"Pulsar Schema"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Schema]"," Fix long field parse in GenricJsonRecord ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6622"},"#6622")," "),(0,l.yg)("li",{parentName:"ul"},"[Schema]"," Fix the leak of cursor reset if message encode fails in Avro schema.\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6695"},"#6695")," "),(0,l.yg)("li",{parentName:"ul"},"[Schema]"," fix Get schema by version can get the deleted schema info #6754\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6754"},"#6754")),(0,l.yg)("li",{parentName:"ul"},"[Schema]"," Fix serialization of enums with json/avro schemas in python ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6808"},"#6808")," "),(0,l.yg)("li",{parentName:"ul"},"[Schema]"," Pulsar SQL Support Avro Schema ",(0,l.yg)("inlineCode",{parentName:"li"},"ByteBuffer")," Type ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6925"},"#6925")," ")),(0,l.yg)("h5",{id:"pulsar-functions"},"Pulsar Functions"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Functions]"," Support function with format: ",(0,l.yg)("inlineCode",{parentName:"li"},"Function<I, CompletableFuture<O>>"),(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6684"},"#6684")),(0,l.yg)("li",{parentName:"ul"},"[Functions]"," Function endpoint admin/v3/functions/{tenant}/{namespace} always returns 404 ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6767"},"#6767")),(0,l.yg)("li",{parentName:"ul"},"[Functions]"," Ensure that all dangling consumers are cleaned up during failures ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6778"},"#6778")),(0,l.yg)("li",{parentName:"ul"},"[Functions]"," Fix localrunner netty dependency issue\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6779"},"#6779")),(0,l.yg)("li",{parentName:"ul"},"[Functions]"," Fix SerDe validation of function's update ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6888"},"#6888"))),(0,l.yg)("h5",{id:"tiered-storage"},"Tiered Storage"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Tiered Storage]","  Extract common SerDe method in tiered storage to managed-ledger module\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6533"},"#6533")),(0,l.yg)("li",{parentName:"ul"},"[Tiered Storage]","  Make SchemaStorage accessible in Offloader\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6567"},"#6567")),(0,l.yg)("li",{parentName:"ul"},"[Tiered Storage]","  Avoid prefetch too much data causing OutOfMemory, when offloading data to HDFS\xa0",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6717"},"#6717"))),(0,l.yg)("h5",{id:"pulsar-io"},"Pulsar IO"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[IO]"," JDBC sink does not handle null in schema ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6848"},"#6848"))))}h.isMDXComponent=!0}}]);