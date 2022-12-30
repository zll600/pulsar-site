"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,u=e.parentName,o=n(e,["components","mdxType","originalType","parentName"]),h=s(a),m=l,k=h["".concat(u,".").concat(m)]||h[m]||c[m]||p;return a?r.createElement(k,i(i({ref:t},o),{},{components:a})):r.createElement(k,i({ref:t},o))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,i=new Array(p);i[0]=m;var n={};for(var u in t)hasOwnProperty.call(t,u)&&(n[u]=t[u]);n.originalType=e,n[h]="string"==typeof e?e:l,i[1]=n;for(var s=2;s<p;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>n,toc:()=>s});var r=a(87462),l=(a(67294),a(3905));const p={id:"pulsar-2.6.2",title:"Apache Pulsar 2.6.2",sidebar_label:"Apache Pulsar 2.6.2"},i=void 0,n={unversionedId:"versioned/pulsar-2.6.2",id:"versioned/pulsar-2.6.2",title:"Apache Pulsar 2.6.2",description:"2020-11-09",source:"@site/release-notes/versioned/pulsar-2.6.2.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.6.2",permalink:"/release-notes/versioned/pulsar-2.6.2",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.6.2.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.6.2",title:"Apache Pulsar 2.6.2",sidebar_label:"Apache Pulsar 2.6.2"}},u={},s=[{value:"2020-11-09",id:"2020-11-09",level:4},{value:"Broker",id:"broker",level:4},{value:"Proxy",id:"proxy",level:4},{value:"Pulsar SQL",id:"pulsar-sql",level:4},{value:"Pulsar Functions",id:"pulsar-functions",level:4},{value:"Pulsar Perf",id:"pulsar-perf",level:4},{value:"Pulsar Admin",id:"pulsar-admin",level:4},{value:"Tiered Storage",id:"tiered-storage",level:4}],o={toc:s};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2020-11-09"},"2020-11-09"),(0,l.kt)("p",null,"The following lists fixes and enhancements in the 2.6.2 release."),(0,l.kt)("h4",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Catch throwable when start pulsar ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7221"},"7221")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Protobuf-shaded package can not update version ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7228"},"7228")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Check for null arguments in Namespaces Rest API ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7247"},"7247")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Handle SubscriptionBusyException in resetCursor api ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7335"},"7335")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Converted the namespace bundle unload into async operation ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7364"},"7364")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Update Jersey to 2.31 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7515"},"7515")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Stop to dispatch when skip message temporally since Key_Shared consumer stuck on delivery ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7553"},"7553")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix bug where producer for geo-replication is not closed when topic is unloaded ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7735"},"7735")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Make resetting cursor in REST API asynchronous ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7744"},"7744")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Reestablish namespace bundle ownership from false negative releasing and false positive acquiring ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7773"},"7773")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," make pulsar executor pool size configurable ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7782"},"7782")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Redirect Get message by id request when broker not serve for the topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7786"},"7786")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Make zk cache executor thread pool size configurable ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7794"},"7794")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Implement toString() method for TopicMessageIdImpl class ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7807"},"7807")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix pending batchIndexAcks bitSet batchSize in PersistentAcknowledgmentsGroupingTracker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7828"},"7828")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix deadlock when adding consumer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7841"},"7841")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Split message ranges by ledger ID and store them in individualDeletedMessages ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7861"},"7861")),(0,l.kt)("li",{parentName:"ul"},"[Broker]","  Fix pulsar metrics providing wrong information ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7905"},"7905")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Don't fail the health check request when trying to delete the previous subscription ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7906"},"7906")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add configuration to set number of channels per bookie ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7910"},"7910")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix publish buffer of one ServerCnx calculated multi-times when check broker's publish buffer ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7926"},"7926")),(0,l.kt)("li",{parentName:"ul"},"[Broker]",' Add some logging to improve Authentication debugging and Fix typos in code "occured" -> "occurred" ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7934"},"7934")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix NPE when acknowledge messages at the broker side ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7937"},"7937")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix the wrong issuer url concatenate ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7980"},"7980")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Upgrade the snakeyaml version to 1.26 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7994"},"7994")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Exclude vertx from bookkeeper-http package ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7997"},"7997")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Check null point before setting auto read ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7999"},"7999")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix IndexOutOfBoundsException in the KeyShared subscription when dispatching messages to consumers ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8024"},"8024")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Upgrade jetty-util version to 9.4.31 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8035"},"8035")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add replicated check to checkInactiveSubscriptions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8066"},"8066")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add get-last-message-id admin for v1 api ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8081"},"8081")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix client lookup hangs when broker restarts ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8101"},"8101")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Should not cache the owner that does not belong to current server ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8111"},"8111")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support to specify multi ipv6 hosts in brokerServiceUrl ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8120"},"8120")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Intercept messages to consumers and add intercept exception ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8129"},"8129")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add ChannelFutures utility class to pulsar-common ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8137"},"8137")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Support Disable Replicated Subscriptions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8144"},"8144")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix error code returned to client when service unit is not ready ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8147"},"8147")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Skip intercepting multipart requests ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8156"},"8156")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Enable intercept filters only when interceptors are configured ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8157"},"8157")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Clean inactive non-persistent subscriptions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8166"},"8166")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Add a new state for namespace-level TTL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8178"},"8178")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix peek messages failed with subscriptionName not exist ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8182"},"8182")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix pulsar service close exception ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8197"},"8197")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Use ThreadPoolExecutor instead of EventLoop ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8208"},"8208")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Close ZK connections at end of metadata setup ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8228"},"8228")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Delete associated ledgers before deleting cluster metadata ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8244"},"8244")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix stuck lookup operations when the broker is starting up ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8273"},"8273")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix Broker enters an infinite loop in ManagedLedgerImpl.asyncReadEntries ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8284"},"8284")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix message TTL on Key_Shared subscription and Fix ordering issue when replay messages ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8292"},"8292")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix race condition in updating readPosition in ManagedCursorImpl ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8299"},"8299")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Refresh ZooKeeper-data cache in background to avoid deadlock and blocking IO on ZK thread ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8304"},"8304")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Upgrade hdfs2 version to 2.8.5 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8319"},"8319")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Upgrade solr version to 8.6.3 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8328"},"8328")),(0,l.kt)("li",{parentName:"ul"},"[Broker]"," Fix deadlock that occurred during topic ownership check ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8406"},"8406"))),(0,l.kt)("h4",{id:"proxy"},"Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Proxy]"," Add advertisedAddress config field to ProxyConfiguration ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7542"},"7542")," "),(0,l.kt)("li",{parentName:"ul"},"[Proxy]"," Fix deadlock in pulsar proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7690"},"7690")),(0,l.kt)("li",{parentName:"ul"},"[Proxy]"," Handle NPE while updating proxy stats ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7766"},"7766")),(0,l.kt)("li",{parentName:"ul"},"[Proxy]"," Fix the null exception when starting the proxy service ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8019"},"8019")),(0,l.kt)("li",{parentName:"ul"},"[Proxy]"," Add proxy plugin interface to support user defined additional servlet ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8067"},"8067"))),(0,l.kt)("h4",{id:"pulsar-sql"},"Pulsar SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Pulsar SQL]"," Upgrade Presto version to 332 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7194"},"7194")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar SQL]"," Replace com.ning.asynchttpclient with org.asynchttpclient ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8099"},"8099"))),(0,l.kt)("h4",{id:"pulsar-functions"},"Pulsar Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Pulsar Functions]"," During Function update, cleanup should only happen for temp files that were generated ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7201"},"7201")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Functions]"," Have metadata tailer use its own thread for processing ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7211"},"7211")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Functions]"," Allow kubernetes runtime to customize function instance class path ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7844"},"7844")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Functions]"," SinkRecord adds an overridden method  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8038"},"8038")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Functions]"," Set dryrun of KubernetesRuntime is null ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8064"},"8064")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Functions]"," Allow disabling forwarding source message properties ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8158"},"8158")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Functions]"," Missed dryRun on maintenance of secrets ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8286"},"8286"))),(0,l.kt)("h4",{id:"pulsar-perf"},"Pulsar Perf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Pulsar Perf]"," Support setting message key ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7989"},"7989")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Perf]"," Make pulsar-perf ioThread number configurable ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8090"},"8090"))),(0,l.kt)("h4",{id:"pulsar-admin"},"Pulsar Admin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Support initial namespace of the cluster without startup the broker ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7434"},"7434")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Fix some params on consumer broken by #4400 (regex, initialSouscriptionPosition) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7795"},"7795")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Return more informative error message when trying to create subscription on non-persistent through Rest API or pulsar-admin CLI ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7831"},"7831")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Add cli command to get last message Id ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8082"},"8082")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Support delete all data associated with a cluster ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8133"},"8133")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Support delete schema ledgers when delete topics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8167"},"8167")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Add command to delete a cluster's metadata from ZK ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8169"},"8169")),(0,l.kt)("li",{parentName:"ul"},"[Pulsar Admin]"," Support reset cursor to a batch index for Pulsar Admin ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8329"},"8329"))),(0,l.kt)("h4",{id:"tiered-storage"},"Tiered Storage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[Tiered Storage]"," Refactored JCloud Tiered Storage ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6335"},"6335")),(0,l.kt)("li",{parentName:"ul"},"[Tiered Storage]"," Remove duplicate updates ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8198"},"8198")),(0,l.kt)("li",{parentName:"ul"},"[Tiered Storage]"," Make the field name in ",(0,l.kt)("inlineCode",{parentName:"li"},"OffloadPolicies")," match with config file ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8310"},"8310"))))}h.isMDXComponent=!0}}]);