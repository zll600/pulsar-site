"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4681],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),h=u(a),m=l,k=h["".concat(o,".").concat(m)]||h[m]||c[m]||i;return a?r.createElement(k,p(p({ref:t},s),{},{components:a})):r.createElement(k,p({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,p=new Array(i);p[0]=m;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n[h]="string"==typeof e?e:l,p[1]=n;for(var u=2;u<i;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},24016:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const i={id:"pulsar-2.8.4",title:"Apache Pulsar 2.8.4",sidebar_label:"Apache Pulsar 2.8.4"},p=void 0,n={unversionedId:"versioned/pulsar-2.8.4",id:"versioned/pulsar-2.8.4",title:"Apache Pulsar 2.8.4",description:"Broker",source:"@site/release-notes/versioned/pulsar-2.8.4.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.8.4",permalink:"/release-notes/versioned/pulsar-2.8.4",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.8.4.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.8.4",title:"Apache Pulsar 2.8.4",sidebar_label:"Apache Pulsar 2.8.4"}},o={},u=[{value:"Broker",id:"broker",level:4},{value:"Security",id:"security",level:4},{value:"Admin",id:"admin",level:4},{value:"Function",id:"function",level:4},{value:"IO",id:"io",level:4},{value:"SQL",id:"sql",level:4},{value:"Offloader",id:"offloader",level:4},{value:"Proxy",id:"proxy",level:4},{value:"Monitor",id:"monitor",level:4},{value:"CLI",id:"cli",level:4},{value:"Test &amp; Other",id:"test--other",level:4},{value:"Dependency Updates",id:"dependency-updates",level:4}],s={toc:u};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Do not print the log that the topic does not exist ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13535"},"13535")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when nextValidLedger is null ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13975"},"13975")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when ",(0,l.kt)("inlineCode",{parentName:"li"},"ReplicatedSubscriptionsController")," sends marker message with deduplication enabled ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14017"},"14017")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix avg-messagePerEntry metrics for consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14330"},"14330")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Validate rack name when setting the bookie rack info ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14336"},"14336")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Optimize find nics process. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14340"},"14340")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when subscription is already removed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14363"},"14363")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix Broker HealthCheck Endpoint Exposes Race Conditions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14367"},"14367")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Optimize RawReader#create when using Compactor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14447"},"14447")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix the latest message of the compacted topic cannot be read ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14449"},"14449")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix producerFuture not completed in ServerCnx#handleProducer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14467"},"14467")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPW in ManagedLedgerImpl ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14481"},"14481")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support shrink in ConcurrentLongHashMap ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14497"},"14497")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fixed wrong behaviour caused by not cleaning up topic policy service state. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14503"},"14503")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Optimize memory usage: support to shrink for pendingAcks map ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14515"},"14515")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Cancel offload tasks when managed ledger closed ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14744"},"14744")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Reduce unnecessary expansions for ConcurrentLong map and set ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14562"},"14562")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix metadata store deadlock when checking BacklogQuota  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14634"},"14634")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support shrink for map or set ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14663"},"14663")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix lost message issue due to ledger rollover ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14664"},"14664")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Set splitNamespaceBundle with ",(0,l.kt)("inlineCode",{parentName:"li"},"readonly=false")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14680"},"14680")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fixed duplicated delayed messages when all consumers disconnect ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14740"},"14740")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix wrong state for non-durable cursor ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14869"},"14869")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Improve error logging for topic not found ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14892"},"14892")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix topic policy reader close bug ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14897"},"14897")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Return if reset in progress ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14978"},"14978")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix potential NPE in Replicator ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15003"},"15003")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix race condition in updating lastMarkDeleteEntry field ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15031"},"15031")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix potential to add duplicated consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16826"},"16826")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Follow up on race condition fixes in ManagedCursorImpl #15031 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15067"},"15067")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Remove useless code to avoid confusion in OpReadEntry#checkReadCompletion ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15104"},"15104")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Cancel ",(0,l.kt)("inlineCode",{parentName:"li"},"fencedTopicMonitoringTask")," when topic closed normally. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15202"},"15202")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix MessageDeduplication#inactiveProducers may not be persistence correctly ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15206"},"15206")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix race condition between timeout and completion  in ",(0,l.kt)("inlineCode",{parentName:"li"},"OpAddEntry"),"  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15233"},"15233")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix problem at RateLimiter#tryAcquire ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15306"},"15306")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Use shrink map for message redelivery. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15342"},"15342")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Support shrink for ConcurrentSortedLongPairSet ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15354"},"15354")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Close connection if a ping or pong message cannot be sent ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15382"},"15382")),(0,l.kt)("li",{parentName:"ul"},"[cleanup][broker]"," Fix typo in enum name and handle closing of the channel properly since writeAndFlush is asynchronous ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15384"},"15384")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Avoid heartbeat topic to offload. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15393"},"15393")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix deadlock in broker after race condition in topic creation failure ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15570"},"15570")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," fix calculation in getNumberOfEntriesInStorage ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15627"},"15627")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when set ",(0,l.kt)("inlineCode",{parentName:"li"},"AutoTopicCreationOverride")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15653"},"15653")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix creating producer failure when set backlog quota ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15663"},"15663")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when put value to ",(0,l.kt)("inlineCode",{parentName:"li"},"RangeCache")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15707"},"15707")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix can not enable system topic if ",(0,l.kt)("inlineCode",{parentName:"li"},"AutoUpdateSchemaEnabled=false")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15759"},"15759")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix wrong unit of NIC speed on Linux  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15770"},"15770")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE in MessageDeduplication ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15820"},"15820")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when ledger id not found in ",(0,l.kt)("inlineCode",{parentName:"li"},"OpReadEntry")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15837"},"15837")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," When skipping updating mark delete position, execute callback with executor to prevent deadlock ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15971"},"15971")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE when drop backlog for time limit. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16235"},"16235")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]","Fix getInternalStats occasional lack of LeaderInfo again ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16238"},"16238")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix RawReader out of order ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16390"},"16390")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Skip reading more entries for a pending read with no more entries ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16400"},"16400")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix No such ledger exception ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16420"},"16420")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix RawReader hasMessageAvailable returns true when no messages ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16443"},"16443")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix stats-internal with option -m cause active ledger recover then close ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16662"},"16662")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix passing incorrect authentication data ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16840"},"16840")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," ManagedCursor: mark delete no callback when create meta-ledger fail ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16841"},"16841")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Avoid reconnection when a partitioned topic was created concurrently ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16867"},"16867")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Recycle OpReadEntry in some corner cases ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16869"},"16869")),(0,l.kt)("li",{parentName:"ul"},"[fix][broker]"," Fix compaction subscription acknowledge Marker msg issue. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16918"},"16918"))),(0,l.kt)("h4",{id:"security"},"Security"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Use provider's canLookupAsync method for AuthorizationService ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11777"},"11777")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Optimize the logic of allowing namespace operation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13090"},"13090")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Full-support set SSL provider, ciphers and protocols ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13740"},"13740")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Role with namespace produce authz can also get topics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13773"},"13773")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Full-support SSL provider, ciphers, and protocols for broker service and proxy service ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15034"},"15034")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Add load multiple certificates support ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14798"},"14798")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Fix handling single role and non-jwt-token in MultiRolesTokenAuthorizationProvider ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14857"},"14857")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Use tlsCertRefreshCheckDurationSec instead of 0 for refresh value ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15075"},"15075")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Skip unnecessary DNS resolution when creating AuthenticationDataHttp instance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15221"},"15221")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Improve skipping of DNS resolution when creating AuthenticationDataHttp instance ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15228"},"15228")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Fix MultiRolesTokenAuthorizationProvider ",(0,l.kt)("inlineCode",{parentName:"li"},"authorize")," issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15454"},"15454")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Fix grant all permissions but can't list topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15501"},"15501")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Switch to rely on Netty for Hostname Verification ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15824"},"15824")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Fix create client with TLS config ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16014"},"16014")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Avoid AuthenticationDataSource mutation for subscription name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16065"},"16065")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Improve get the basic authentication config ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16526"},"16526")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Fix multiple roles authorization ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16645"},"16645")),(0,l.kt)("li",{parentName:"ul"},"[fix][sec]"," Add timeout of sync methods and avoid call sync method for AuthoriationService (#15694) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16831"},"16831")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Support for get token from HTTP params ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16871"},"16871")),(0,l.kt)("li",{parentName:"ul"},"[improve][sec]"," Adapt basic authentication configuration with prefix ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16935"},"16935"))),(0,l.kt)("h4",{id:"admin"},"Admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve][admin]"," Add corresponding get command for namespace ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12322"},"12322")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix deleting namespace will fail when system topics exist ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15040"},"15040")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix validateGlobalNamespaceOwnership wrap exception issue ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14612"},"14612")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix wrong prompt exception when getting the non-persistent topic list without GET_BUDNLE permission ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14638"},"14638")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fixed 404 error msg not returned correctly using http lookup ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14677"},"14677")),(0,l.kt)("li",{parentName:"ul"},"[improve][admin]"," Provide an accurate error message when set ",(0,l.kt)("inlineCode",{parentName:"li"},"autoTopicCreation")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14684"},"14684")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix cannot delete namespace with system topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14730"},"14730")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix NPE in PulsarAdminBuilder when the service is not set ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14769"},"14769")),(0,l.kt)("li",{parentName:"ul"},"[fix][admin]"," Fix missing response type in swagger definitions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16022"},"16022"))),(0,l.kt)("h4",{id:"function"},"Function"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][fn]"," Fixing get functions for output topic and serde classname ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14103"},"14103")),(0,l.kt)("li",{parentName:"ul"},"[improve][fn]"," Pass configured metricsPort to k8s runtime ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14502"},"14502")),(0,l.kt)("li",{parentName:"ul"},"[fix][fn]"," fix some IOExceptions when create functions from package URL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14553"},"14553")),(0,l.kt)("li",{parentName:"ul"},"[fix][fn]"," handle NPE when ",(0,l.kt)("inlineCode",{parentName:"li"},"getLeader")," returns null ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15058"},"15058")),(0,l.kt)("li",{parentName:"ul"},"[improve][fn]"," Add KeyStore support in WebSocket, Function Worker HTTPS Servers  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15084"},"15084")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Check executor null when close the FileSource ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15247"},"15247")),(0,l.kt)("li",{parentName:"ul"},"[improve][fn]"," Provide default error handler for function log appender ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15728"},"15728")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Fix error when user starts with the pulsar functions local runner ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16565"},"16565")),(0,l.kt)("li",{parentName:"ul"},"[fix][function]"," Fix python instance not process zip file correctly ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16697"},"16697"))),(0,l.kt)("h4",{id:"io"},"IO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][io]"," throw exceptions when Kafka offset backing store failed to start ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14491"},"14491")),(0,l.kt)("li",{parentName:"ul"},"[fix][io]"," Handle Kafka sinks that return immutable maps as configs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14780"},"14780"))),(0,l.kt)("h4",{id:"sql"},"SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][sql]"," Fix PulsarRecordCursor deserialize issue. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14615"},"14615")),(0,l.kt)("li",{parentName:"ul"},"[fix][sql]"," Fix ",(0,l.kt)("inlineCode",{parentName:"li"},"messageQueue")," release message issue. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16155"},"16155"))),(0,l.kt)("h4",{id:"offloader"},"Offloader"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][offloader]"," Fix incorrect entryId in warn log when reading entry from tiered storage ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14685"},"14685")),(0,l.kt)("li",{parentName:"ul"},"[improve]"," TieredStorage: add debug information ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14907"},"14907")),(0,l.kt)("li",{parentName:"ul"},"[feat][offloader]"," Add pure S3 provider for the offloader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15710"},"15710")),(0,l.kt)("li",{parentName:"ul"},"[fix][offloader]"," Fix setManagedLedgerOffloadedReadPriority not work. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16436"},"16436"))),(0,l.kt)("h4",{id:"proxy"},"Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve][proxy]"," Log warning when opening connection to broker fails ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14710"},"14710")),(0,l.kt)("li",{parentName:"ul"},"[refactor][proxy]"," Refactor Proxy code and fix connection stalling by switching to auto read mode ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14713"},"14713")),(0,l.kt)("li",{parentName:"ul"},"[improve][proxy]"," Configure Netty DNS resolver to match JDK DNS caching setting, share DNS resolver instance in Proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15219"},"15219")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Fix proxy connection leak when inbound connection closes while connecting is in progress ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15366"},"15366")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Fix DNS server denial-of-service issue when DNS entry expires ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15403"},"15403")),(0,l.kt)("li",{parentName:"ul"},"[improve][proxy]"," Remove unnecessary blocking DNS lookup in LookupProxyHandler ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15415"},"15415")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Do not preserve host when forwarding admin requests. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16342"},"16342")),(0,l.kt)("li",{parentName:"ul"},"[fix][proxy]"," Fix client service URL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16834"},"16834"))),(0,l.kt)("h4",{id:"monitor"},"Monitor"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve][monitor]",": add metrics for pulsar web service thread pool ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14742"},"14742")),(0,l.kt)("li",{parentName:"ul"},"[improve][monitor]"," add message ack rate metric for consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15674"},"15674")),(0,l.kt)("li",{parentName:"ul"},"[fix][monitor]"," Fix bug: fail to expose managed ledger client stats to prometheus if bookkeeperClientExposeStatsToPrometheus is true  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16343"},"16343")),(0,l.kt)("li",{parentName:"ul"},"[improve][monitor]"," Expose topic level storage write and read rate metrics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16855"},"16855"))),(0,l.kt)("h4",{id:"cli"},"CLI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[fix][cli]"," Remove the trust certs check ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14764"},"14764"))),(0,l.kt)("h4",{id:"test--other"},"Test & Other"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve][test]"," Use Awaitility to replace Thread.sleep for pulsar-zookeeper-utils module. ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11017"},"11017")),(0,l.kt)("li",{parentName:"ul"},"[fix][test]"," Fix flaky test in PersistentStreamingDispatcherBlockConsumerTest ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/12943"},"12943")),(0,l.kt)("li",{parentName:"ul"},"[fix][build]"," Fix NoClassDefFoundError: com/google/inject/AbstractModule in pulsar-io/batch-data-generator and Jcloud offloader ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14150"},"14150")),(0,l.kt)("li",{parentName:"ul"},"[fix][test]"," Fix flaky AdminApiSchemaTest#testSchemaInfoApi ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14508"},"14508")),(0,l.kt)("li",{parentName:"ul"},"[fix][test]"," Fix NamespacesTest execution order ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14552"},"14552")),(0,l.kt)("li",{parentName:"ul"},"[fix][test]"," Fix AdminApiTest.testNamespaceSplitBundleConcurrent ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14565"},"14565")),(0,l.kt)("li",{parentName:"ul"},"[fix][test]"," Fix flaky test MemoryLimitTest#testRejectMessages (#14220) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14628"},"14628")),(0,l.kt)("li",{parentName:"ul"},"[fix][ci]"," Upgrade zlib version to 1.2.12 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14964"},"14964")),(0,l.kt)("li",{parentName:"ul"},"[improve][build]"," Ignore case when obfuscating passwords in configuration scripts ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15077"},"15077")),(0,l.kt)("li",{parentName:"ul"},"[fix][build]"," Fix LICENSE files for branch-2.8 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15261"},"15261")),(0,l.kt)("li",{parentName:"ul"},"[Improve][doc]"," Add config of IO and acceptor threads in proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15340"},"15340")),(0,l.kt)("li",{parentName:"ul"},"[improve][build]"," Configure DLog Bookie, Pulsar, and Admin clients via pass-through config ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15818"},"15818")),(0,l.kt)("li",{parentName:"ul"},"[improve][build]"," Allow pulsar_tool_env.sh PULSAR_MEM to be Overridden ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15868"},"15868")),(0,l.kt)("li",{parentName:"ul"},"[fix][test]"," TieredStorageConfigurationTests - clear system properties ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15957"},"15957")),(0,l.kt)("li",{parentName:"ul"},"[fix][doc]"," Update/fix Swagger Annotation for param: authoritative ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16222"},"16222")),(0,l.kt)("li",{parentName:"ul"},"[improve][test]"," Verify the authentication data in the authorization provider ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16900"},"16900"))),(0,l.kt)("h4",{id:"dependency-updates"},"Dependency Updates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[improve][build]"," Upgrade snakeyaml version to 1.30 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13722"},"13722")),(0,l.kt)("li",{parentName:"ul"},"[fix][build]"," Remove --illegal-access errors resulting from Google Guice (upgrade to 5.0.1 and JClouds to 2.4.0) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/13810"},"13810")),(0,l.kt)("li",{parentName:"ul"},"[fix][build]"," Remove --illegal-access errors resulting from Google Guice - Pulsar IO, Offloaders and Pulsar SQL - Bump Guice to 5.1.0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14300"},"14300")),(0,l.kt)("li",{parentName:"ul"},"[fix][build]"," Upgrade jackson and jackson-databind (2.13.2.1) to get rid of CVE-2020-36518 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/14871"},"14871")),(0,l.kt)("li",{parentName:"ul"},"[improve][build]"," Remove log4j for CVE-2022-23307 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15109"},"15109")),(0,l.kt)("li",{parentName:"ul"},"[improve][build]"," Upgrade Netty to 4.1.76.Final, Netty Tcnative, grpc and protobuf ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15212"},"15212")),(0,l.kt)("li",{parentName:"ul"},"[improve][build]"," Use grpc-bom to align grpc library versions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15234"},"15234")),(0,l.kt)("li",{parentName:"ul"},"[improve][build]"," Upgrade BookKeeper to 4.14.5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15581"},"15581")),(0,l.kt)("li",{parentName:"ul"},"[improve][build]"," Upgrade Netty to 4.1.77.Final and netty-tcnative to 2.0.52.Final ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15646"},"15646")),(0,l.kt)("li",{parentName:"ul"},"[improve][build]"," Upgrade JClouds to 2.5.0 ","[15649]","(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15649"},"https://github.com/apache/pulsar/pull/15649")),(0,l.kt)("li",{parentName:"ul"},"[fix][build]"," Tiered storage: Upgrade Hadoop to 3.3.3 to get rid of CVE-2022-26612 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/15660"},"15660")),(0,l.kt)("li",{parentName:"ul"},"[fix][build]"," Upgrade to Jetty to 9.4.48.v20220622 to get rid of CVE-2022-2047 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16520"},"16520")),(0,l.kt)("li",{parentName:"ul"},"[improve][broker]"," Upgrade log4j2 version to 2.18.0 (#16884) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/16914"},"16914"))))}h.isMDXComponent=!0}}]);