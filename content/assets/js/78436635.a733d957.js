"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[74397],{15680:(e,a,t)=>{t.d(a,{xA:()=>o,yg:()=>m});var r=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=s(e.components);return r.createElement(u.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,p=e.originalType,u=e.parentName,o=n(e,["components","mdxType","originalType","parentName"]),c=s(t),g=l,m=c["".concat(u,".").concat(g)]||c[g]||h[g]||p;return t?r.createElement(m,i(i({ref:a},o),{},{components:t})):r.createElement(m,i({ref:a},o))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var p=t.length,i=new Array(p);i[0]=g;var n={};for(var u in a)hasOwnProperty.call(a,u)&&(n[u]=a[u]);n.originalType=e,n[c]="string"==typeof e?e:l,i[1]=n;for(var s=2;s<p;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},98419:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>n,toc:()=>s});var r=t(58168),l=(t(96540),t(15680));const p={id:"pulsar-2.7.3",title:"Apache Pulsar 2.7.3",sidebar_label:"Apache Pulsar 2.7.3"},i=void 0,n={unversionedId:"versioned/pulsar-2.7.3",id:"versioned/pulsar-2.7.3",title:"Apache Pulsar 2.7.3",description:"2021-07-27",source:"@site/release-notes/versioned/pulsar-2.7.3.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.7.3",permalink:"/release-notes/versioned/pulsar-2.7.3",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.7.3.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.7.3",title:"Apache Pulsar 2.7.3",sidebar_label:"Apache Pulsar 2.7.3"}},u={},s=[{value:"2021-07-27",id:"2021-07-27",level:4},{value:"Broker",id:"broker",level:4},{value:"Dependency upgrade",id:"dependency-upgrade",level:4},{value:"Proxy",id:"proxy",level:4},{value:"Pulsar Admin",id:"pulsar-admin",level:4},{value:"Docker",id:"docker",level:4},{value:"Functions and Pulsar IO",id:"functions-and-pulsar-io",level:4}],o={toc:s},c="wrapper";function h(e){let{components:a,...t}=e;return(0,l.yg)(c,(0,r.A)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h4",{id:"2021-07-27"},"2021-07-27"),(0,l.yg)("h4",{id:"broker"},"Broker"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix Delayed Messages. ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11374"},"#11374")),(0,l.yg)("li",{parentName:"ul"},"Fix missing replicator metrics. ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11264"},"#11264")),(0,l.yg)("li",{parentName:"ul"},"Fix branch-2.7 test. ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11254"},"#11254")),(0,l.yg)("li",{parentName:"ul"},"Fix broker dispatch byte rate limiter ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11249"},"#11249")),(0,l.yg)("li",{parentName:"ul"},"Fix websocket TLS bug ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11243"},"#11243")),(0,l.yg)("li",{parentName:"ul"},"Fix init WebSocketService with ClusterData ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11234"},"#11234")),(0,l.yg)("li",{parentName:"ul"},"Fix ledger roll over scheduler task ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11226"},"#11226")),(0,l.yg)("li",{parentName:"ul"},"Remove unused listener to reduce creating executor pool ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11215"},"#11215")),(0,l.yg)("li",{parentName:"ul"},"Make the compaction phase one loop timeout configurable ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11206"},"#11206")),(0,l.yg)("li",{parentName:"ul"},"Fix failing auth test. ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11186"},"#11186")),(0,l.yg)("li",{parentName:"ul"},"Fix the dead lock when using hasMessageAvailableAsync and readNextAsync ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11183"},"#11183")),(0,l.yg)("li",{parentName:"ul"},"Fix compaction entry read exception ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11175"},"#11175")),(0,l.yg)("li",{parentName:"ul"},"On multi-topic consumer, we shouldn't keep checking the partitioned metadata ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11168"},"#11168")),(0,l.yg)("li",{parentName:"ul"},"Fix replay topic policy message not work ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11136"},"#11136")),(0,l.yg)("li",{parentName:"ul"},"Fix broker dispatch byte rate limiter. ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11135"},"#11135")),(0,l.yg)("li",{parentName:"ul"},"Change test group to broker for ReplicatorTest and fix the test ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11134"},"#11134")),(0,l.yg)("li",{parentName:"ul"},"Fix ledger rollover scheduled task ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11116"},"#11116")),(0,l.yg)("li",{parentName:"ul"},"Fix race condition of the SystemTopicBasedTopicPoliciesService ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11097"},"#11097")),(0,l.yg)("li",{parentName:"ul"},"Print message metadata when getting message by id ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11092"},"#11092")),(0,l.yg)("li",{parentName:"ul"},"Fix flaky test testEnableAndDisableTopicDelayedDelivery ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11009"},"#11009")),(0,l.yg)("li",{parentName:"ul"},"Fix potential data lost on the system topic when topic compaction has not triggered yet ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11003"},"#11003")),(0,l.yg)("li",{parentName:"ul"},"Fix direct memory leak in getLastMessageId ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10977"},"#10977")),(0,l.yg)("li",{parentName:"ul"},"Fix the backlog issue with --precise-backlog=true ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10966"},"#10966")),(0,l.yg)("li",{parentName:"ul"},"Fix NonRecoverableLedgerException when get last message ID by Reader ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10957"},"#10957")),(0,l.yg)("li",{parentName:"ul"},"Fix compaction not working for system topic ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10941"},"#10941")),(0,l.yg)("li",{parentName:"ul"},"Fix issue where Key_Shared consumers could get stuck ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10920"},"#10920")),(0,l.yg)("li",{parentName:"ul"},"When the Replicator is enabled, no managedLedger is created when updating the number of partitions ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10910"},"#10910")),(0,l.yg)("li",{parentName:"ul"},"Handle multiple topic creation for the same topic-name in broker ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10847"},"#10847")),(0,l.yg)("li",{parentName:"ul"},"Release OpAddEntry.data when entry is copied and discarded ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10773"},"#10773")),(0,l.yg)("li",{parentName:"ul"},"Fix issue that message ordering could be broken when redelivering messages on Key_Shared subscription ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10762"},"#10762")),(0,l.yg)("li",{parentName:"ul"},"Fix solution for preventing race conditions between timeout and completion ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10740"},"#10740")),(0,l.yg)("li",{parentName:"ul"},"Cancel scheduled tasks as the first step in closing ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10739"},"#10739")),(0,l.yg)("li",{parentName:"ul"},"MINOR: Add error message to setMaxPendingMessagesAcrossPartitions ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10709"},"#10709")),(0,l.yg)("li",{parentName:"ul"},"Make PrometheusMetricsTest. testAuthMetrics pass on CI ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10699"},"#10699")),(0,l.yg)("li",{parentName:"ul"},"Fix issue where StackOverflowError occurs when trying to redeliver a large number of already acked messages ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10696"},"#10696")),(0,l.yg)("li",{parentName:"ul"},'Revert "Creating a topic does not wait for creating cursor of replicators" ',(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10674"},"#10674")),(0,l.yg)("li",{parentName:"ul"},"Use single instance of parser ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10664"},"#10664")),(0,l.yg)("li",{parentName:"ul"},"Ensure all the ReadHandle gets properly closed on cache invalidation ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10659"},"#10659")),(0,l.yg)("li",{parentName:"ul"},"Fix ConcurrentOpenLongPairRangeSet remove all ranges ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10656"},"#10656")),(0,l.yg)("li",{parentName:"ul"},"TopicPoliciesTest.testMaxSubscriptionsFailFast fails ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10640"},"#10640")),(0,l.yg)("li",{parentName:"ul"},"Add metrics for non-contiguous deleted messages range ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10638"},"#10638")),(0,l.yg)("li",{parentName:"ul"},"Fixed missed ZK caching when fetching a list of namespaces for a tenant ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10594"},"#10594")),(0,l.yg)("li",{parentName:"ul"},"Made OpAddEntry.toString() more robust to nulls to prevent NPEs ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10548"},"#10548")),(0,l.yg)("li",{parentName:"ul"},"Fix partitioned system topic check bug ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10529"},"#10529")),(0,l.yg)("li",{parentName:"ul"},"Make failPendingMessages called from within the ProducerImpl object mutex ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10528"},"#10528")),(0,l.yg)("li",{parentName:"ul"},"Fix deadlock on Monitoring thread blocked by LeaderService.isLeader() ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10512"},"#10512")),(0,l.yg)("li",{parentName:"ul"},"Fix: Topic loading fails without any error when replicator init fails ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10432"},"#10432")),(0,l.yg)("li",{parentName:"ul"},"Fix hasMessageAvailable return true but can't read message ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10414"},"#10414")),(0,l.yg)("li",{parentName:"ul"},"Added more unit tests to the JavaInstanceTest class ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10369"},"#10369")),(0,l.yg)("li",{parentName:"ul"},"Fix authorization error if partition number of partitioned topic is updated. ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10333"},"#10333")),(0,l.yg)("li",{parentName:"ul"},"Fix the inconsistency of AdvertisedAddress ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10312"},"#10312")),(0,l.yg)("li",{parentName:"ul"},"Fix missing LoggerFactoryPtr type. ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10164"},"#10164")),(0,l.yg)("li",{parentName:"ul"},"Ensure read-lock is not continuously held on a section while iterating over concurrent maps ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9787"},"#9787")),(0,l.yg)("li",{parentName:"ul"},"Zookeeper connections monitor data ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9778"},"#9778")),(0,l.yg)("li",{parentName:"ul"},"Change getWorkerService method to throw UnsupportedOperationException ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9738"},"#9738")),(0,l.yg)("li",{parentName:"ul"},"Fix flaky unit test ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9262"},"#9262")),(0,l.yg)("li",{parentName:"ul"},"Supply debug log for OpAddEntry ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9239"},"#9239"))),(0,l.yg)("h4",{id:"dependency-upgrade"},"Dependency upgrade"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Upgrade Jetty to 9.4.42.v20210604 ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10907"},"#10907"))),(0,l.yg)("h4",{id:"proxy"},"Proxy"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Enable AutoTopicCreationType partitioned through proxy ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8048"},"#8048"))),(0,l.yg)("h4",{id:"pulsar-admin"},"Pulsar Admin"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix create partitioned topic in replicated namespace ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11140"},"#11140")),(0,l.yg)("li",{parentName:"ul"},"Add authoritative flag for topic policy to avoid redirect loop ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/11131"},"#11131")),(0,l.yg)("li",{parentName:"ul"},"Fix non-persistent topic get partitioned metadata error on discovery ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10806"},"#10806")),(0,l.yg)("li",{parentName:"ul"},"Fix kinesis sink backoff class not found ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10744"},"#10744"))),(0,l.yg)("h4",{id:"docker"},"Docker"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"K8s Function Name Length Check Allows Invalid StatefulSet  ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10531"},"#10531"))),(0,l.yg)("h4",{id:"functions-and-pulsar-io"},"Functions and Pulsar IO"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix kinesis sink connector does not ack messages ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10769"},"#10769")),(0,l.yg)("li",{parentName:"ul"},"Remove reference to ProducerSpec from Pulsar Functions GO ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10635"},"#10635")),(0,l.yg)("li",{parentName:"ul"},"Process async results in the same Java runnable thread ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/10618"},"#10618"))))}h.isMDXComponent=!0}}]);