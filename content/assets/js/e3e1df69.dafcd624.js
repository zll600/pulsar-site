"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2695],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),c=u(a),m=l,k=c["".concat(o,".").concat(m)]||c[m]||h[m]||i;return a?r.createElement(k,p(p({ref:t},s),{},{components:a})):r.createElement(k,p({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,p=new Array(i);p[0]=m;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n[c]="string"==typeof e?e:l,p[1]=n;for(var u=2;u<i;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8975:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>n,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const i={id:"pulsar-2.7.5",title:"Apache Pulsar 2.7.5",sidebar_label:"Apache Pulsar 2.7.5"},p=void 0,n={unversionedId:"versioned/pulsar-2.7.5",id:"versioned/pulsar-2.7.5",title:"Apache Pulsar 2.7.5",description:"2022-09-03",source:"@site/release-notes/versioned/pulsar-2.7.5.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.7.5",permalink:"/release-notes/versioned/pulsar-2.7.5",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.7.5.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.7.5",title:"Apache Pulsar 2.7.5",sidebar_label:"Apache Pulsar 2.7.5"}},o={},u=[{value:"2022-09-03",id:"2022-09-03",level:4},{value:"Broker",id:"broker",level:4},{value:"Security",id:"security",level:4},{value:"Storage",id:"storage",level:4},{value:"Proxy",id:"proxy",level:4},{value:"Admin",id:"admin",level:4},{value:"Function",id:"function",level:4},{value:"Test &amp; Others",id:"test--others",level:4},{value:"Dependency Updates",id:"dependency-updates",level:4}],s={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2022-09-03"},"2022-09-03"),(0,l.kt)("h4",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when ledger id not found in ",(0,l.kt)("inlineCode",{parentName:"li"},"OpReadEntry"),(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16966"},"#16966")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Validate rack name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16850"},"#16850")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix invalid rack name cause bookie join rack failed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16845"},"#16845")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Avoid potentially blocking calls to metadata in PersistentTopic#getMessageTTL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16899"},"#16899")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix create client with TLS config ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16326"},"#16326")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fixed deadlock on metadata cache missing while doing checkReplication ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16889"},"#16889")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix the wrong unit of NIC speed on Linux  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15770"},"#15770")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Close connection if a ping or pong message cannot be sent ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15382"},"#15382")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix MessageDeduplication#inactiveProducers may not be persistence correctly ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15206"},"#15206")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix messageDedup delete inactive producer name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12493"},"#12493")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix the reader skips compacted data which original ledger been removed. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16407"},"#16407")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix getting the last message-id from an empty compact ledger. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16402"},"#16402")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Return message ID from compacted ledger while the compaction cursor reaches the end of the topic. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16395"},"#16395")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix skips compacted data for reader/consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16301"},"#16301")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix reader skipped remaining compacted data during the topic unloading ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16300"},"#16300")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix passing incorrect authentication data ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16201"},"#16201")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix incorrect returned last message ID while the lastConfirmedEntry with negative entry ID ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16299"},"#16299")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix can not enable system topic if ",(0,l.kt)("inlineCode",{parentName:"li"},"AutoUpdateSchemaEnabled=false"),". ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15754"},"#15754")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix lost message issue due to ledger rollover. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14703"},"#14703")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix lost message issues 12221 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12223"},"#12223")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix TopicPoliciesCacheNotInitException issue. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14293"},"#14293")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix deadlock when use key_shared mode ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11965"},"#11965")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix log content error when OverloadShedder is not used. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13540"},"#13540")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Skip unnecessary DNS resolution when creating AuthenticationDataHttp instance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15221"},"#15221")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Improve error logging for topic not found [#13950) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14893"},"#14893")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Trim configuration value string which contains blank prefix or suffix string ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13984"},"#13984")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Configure DLog Bookie, Pulsar, and Admin clients via pass-through config ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15818"},"#15818")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Improve skipping of DNS resolution when creating AuthenticationDataHttp instance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15228"},"#15228")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Remove useless code to avoid confusion in OpReadEntry#checkReadCompletion. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15104"},"#15104")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Clean up individually deleted messages before the mark-delete position ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14261"},"#14261"))),(0,l.kt)("h4",{id:"security"},"Security"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Improve get the basic authentication config ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16947"},"#16947")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Support for get token from HTTP params ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16892"},"#16892")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," AuthorizationService should use provider's canLookupAsync method ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11777"},"#11777")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Avoid AuthenticationDataSource mutation for subscription name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16065"},"#16065")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Return if namespace policies are read only ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12514"},"#12514")),(0,l.kt)("li",{parentName:"ul"},"[refactor][sec]"," Switch to rely on Netty for Hostname Verification ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15824"},"#15824")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][sec]"," Ignore case when obfuscating passwords in configuration scripts ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15077"},"#15077"))),(0,l.kt)("h4",{id:"storage"},"Storage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][storage]"," ManagedCursor: mark delete no callback when create meta-ledger fail ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16841"},"#16841")),(0,l.kt)("li",{parentName:"ul"},"[fix][storage]"," Cancel offload tasks when managed ledger closed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16808"},"#16808")),(0,l.kt)("li",{parentName:"ul"},"[fix][storage]"," Fix lost compaction data due to compaction properties missed during reset-cursor. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16404"},"#16404")),(0,l.kt)("li",{parentName:"ul"},"[fix][storage]"," Do not move the non-durable cursor position when trimming ledgers while topic with compaction. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16403"},"#16403")),(0,l.kt)("li",{parentName:"ul"},"[fix][storage]"," Fix issues in advanceNonDurableCursors ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10667"},"#10667")),(0,l.kt)("li",{parentName:"ul"},"[fix][storage]"," Follow up on race condition fixes in ManagedCursorImpl #15031 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15067"},"#15067")),(0,l.kt)("li",{parentName:"ul"},"[fix][storage]"," Fix race condition in updating lastMarkDeleteEntry field ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15031"},"#15031")),(0,l.kt)("li",{parentName:"ul"},"[fix][storage]"," Fix NPE when removing cursor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12297"},"#12297")),(0,l.kt)("li",{parentName:"ul"},"[improve][storage]",' If mark-delete operation fails, mark the cursor as "dirty" ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14256"},"#14256"))),(0,l.kt)("h4",{id:"proxy"},"Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Fix client service url ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16894"},"#16894")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Prevent leak of unreleased lookupRequestSemaphore permits ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13812"},"#13812")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Remove unnecessary blocking DNS lookup in LookupProxyHandler ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15415"},"#15415")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Fix proxy connection leak when inbound connection closes while connecting is in progress ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15366"},"#15366")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Fix port exhaustion and connection issues in Pulsar Proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14078"},"#14078")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Fix DNS server denial-of-service issue when DNS entry expires ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15403"},"#15403")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Configure Netty DNS resolver to match JDK DNS caching setting, share DNS resolver instance in Proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15219"},"#15219")),(0,l.kt)("li",{parentName:"ul"},"[refactor][proxy]"," Refactor Proxy code and fix connection stalling by switching to auto read mode ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14713"},"#14713")),(0,l.kt)("li",{parentName:"ul"},"[improve][proxy]"," Fail proxy startup if brokerServiceURL is missing scheme ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14682"},"#14682")),(0,l.kt)("li",{parentName:"ul"},"[improve][proxy]"," Remove unnecessary Pulsar Client usage from Pulsar Proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13836"},"#13836"))),(0,l.kt)("h4",{id:"admin"},"Admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix validateGlobalNamespaceOwnership wrap exception issue. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14269"},"#14269")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][admin]"," Update/fix Swagger Annotation for param: authoritative ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16222"},"#16222"))),(0,l.kt)("h4",{id:"function"},"Function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][fn]"," Fix python instance not process zip file correctly ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16697"},"#16697"))),(0,l.kt)("h4",{id:"test--others"},"Test & Others"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve][test]"," Verify the authentication data in the authorization provider ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16945"},"#16945")),(0,l.kt)("li",{parentName:"ul"},"[improve][test]"," Exclude inner classes in surefire ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9875"},"#9875")),(0,l.kt)("li",{parentName:"ul"},"[fix][test]"," Enable ignored tests ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16435"},"#16435")),(0,l.kt)("li",{parentName:"ul"},"[fix][test]"," Fix setting Bookie dbStorage_*CacheMaxSizeMb in pulsar-test-latest-version docker image ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9623"},"#9623")),(0,l.kt)("li",{parentName:"ul"},"[improve][doc]"," Add more configuration methods for basic authentication ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16941"},"#16941")),(0,l.kt)("li",{parentName:"ul"},"[fix][build]"," Use grpc-bom to align grpc library versions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15234"},"#15234")),(0,l.kt)("li",{parentName:"ul"},"[improve][ci]"," Add set up Java ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16430"},"#16430")),(0,l.kt)("li",{parentName:"ul"},"Update notice year. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13653"},"#13653"))),(0,l.kt)("h4",{id:"dependency-updates"},"Dependency Updates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Upgrade protobuf to 3.16.1 to address CVE-2021-22569 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13695"},"#13695")),(0,l.kt)("li",{parentName:"ul"},"Upgrade aircompressor to 0.20 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11790"},"#11790")),(0,l.kt)("li",{parentName:"ul"},"Upgrade the BookKeeper version to 4.12.1 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16775"},"#16775")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Gson version 2.8.6 to 2.8.9 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13610"},"#13610")),(0,l.kt)("li",{parentName:"ul"},"Upgrade Log4j2 to 2.17.1 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13552"},"#13552")),(0,l.kt)("li",{parentName:"ul"},"Upgrade log4j2 version to 2.18.0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16884"},"#16884"))))}c.isMDXComponent=!0}}]);