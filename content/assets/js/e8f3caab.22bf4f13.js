"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[33855],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>g});var l=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},p=Object.keys(e);for(l=0;l<p.length;l++)t=p[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)t=p[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),o=function(e){var a=l.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=o(e.components);return l.createElement(u.Provider,{value:a},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,u=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),h=o(t),m=r,g=h["".concat(u,".").concat(m)]||h[m]||c[m]||p;return t?l.createElement(g,i(i({ref:a},s),{},{components:t})):l.createElement(g,i({ref:a},s))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=m;var n={};for(var u in a)hasOwnProperty.call(a,u)&&(n[u]=a[u]);n.originalType=e,n[h]="string"==typeof e?e:r,i[1]=n;for(var o=2;o<p;o++)i[o]=t[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65722:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>n,toc:()=>o});var l=t(58168),r=(t(96540),t(15680));const p={id:"pulsar-2.7.0",title:"Apache Pulsar 2.7.0",sidebar_label:"Apache Pulsar 2.7.0"},i=void 0,n={unversionedId:"versioned/pulsar-2.7.0",id:"versioned/pulsar-2.7.0",title:"Apache Pulsar 2.7.0",description:"2020-11-25",source:"@site/release-notes/versioned/pulsar-2.7.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.7.0",permalink:"/release-notes/versioned/pulsar-2.7.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.7.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.7.0",title:"Apache Pulsar 2.7.0",sidebar_label:"Apache Pulsar 2.7.0"}},u={},o=[{value:"2020-11-25",id:"2020-11-25",level:4},{value:"Transactions",id:"transactions",level:4},{value:"Topic policy",id:"topic-policy",level:4},{value:"Broker",id:"broker",level:4},{value:"Functions",id:"functions",level:4},{value:"IO connectors",id:"io-connectors",level:4},{value:"Schema",id:"schema",level:4},{value:"Tiered storage",id:"tiered-storage",level:4},{value:"Clients",id:"clients",level:4},{value:"Admin",id:"admin",level:4},{value:"Fixes",id:"fixes",level:4}],s={toc:o},h="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(h,(0,l.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h4",{id:"2020-11-25"},"2020-11-25"),(0,r.yg)("p",null,"The following lists fixes and enhancements in the 2.7.0 release."),(0,r.yg)("h4",{id:"transactions"},"Transactions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Implement the Transaction Buffer Client ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/6544"},"#6544")),(0,r.yg)("li",{parentName:"ul"},"Support produce messages with transaction and commit transaction ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7552"},"#7552")),(0,r.yg)("li",{parentName:"ul"},"Support consume transaction messages ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7781"},"#7781")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7833"},"#7833")),(0,r.yg)("li",{parentName:"ul"},"Message acknowledgment with transaction ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7856"},"#7856")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8007"},"#8007")),(0,r.yg)("li",{parentName:"ul"},"Support transaction abort on partition ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7953"},"#7953")),(0,r.yg)("li",{parentName:"ul"},"Support transaction abort on subscription ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7979"},"#7979")),(0,r.yg)("li",{parentName:"ul"},"Handle pending ack at the client side ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8037"},"#8037")),(0,r.yg)("li",{parentName:"ul"},"Pending ack state implementation ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8426"},"#8426")),(0,r.yg)("li",{parentName:"ul"},"Support get reponse for message acknowledge ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8161"},"#8161")),(0,r.yg)("li",{parentName:"ul"},"Refactor the transaction buffer implementation ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8291"},"#8291")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8347"},"#8347")),(0,r.yg)("li",{parentName:"ul"},"Transaction marker deletion ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8318"},"#8318")),(0,r.yg)("li",{parentName:"ul"},"Support produce messages with transaction in batch ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8415"},"#8415")),(0,r.yg)("li",{parentName:"ul"},"Register transaction metadata before send or ack messages ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8493"},"#8493")),(0,r.yg)("li",{parentName:"ul"},"Expose transaction interface ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8505"},"#8505")),(0,r.yg)("li",{parentName:"ul"},"Guarantee transaction metadata handlers connected ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8563"},"#8563")),(0,r.yg)("li",{parentName:"ul"},"Add the batch size in transaction ack command ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8659"},"#8659")),(0,r.yg)("li",{parentName:"ul"},"Implement the Transaction Log ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8658"},"#8658"))),(0,r.yg)("h4",{id:"topic-policy"},"Topic policy"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Support setting message TTL on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7738"},"#7738")),(0,r.yg)("li",{parentName:"ul"},"Support setting retention on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7747"},"#7747")),(0,r.yg)("li",{parentName:"ul"},"Support setting delayed delivery policy on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7784"},"#7784")),(0,r.yg)("li",{parentName:"ul"},"Support setting max unacked message per subscription on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7802"},"#7802")),(0,r.yg)("li",{parentName:"ul"},"Support setting persistence policie on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7817"},"#7817")),(0,r.yg)("li",{parentName:"ul"},"Support setting max unacked messages per consumer on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7818"},"#7818")),(0,r.yg)("li",{parentName:"ul"},"Support setting deduplication policy on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7821"},"#7821")),(0,r.yg)("li",{parentName:"ul"},"Support setting message dispatch rate on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7863"},"#7863"),")"),(0,r.yg)("li",{parentName:"ul"},"Support setting compaction threshold on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7881"},"#7881")),(0,r.yg)("li",{parentName:"ul"},"Support setting offload policy on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7883"},"#7883")),(0,r.yg)("li",{parentName:"ul"},"Support setting max producers for a topic ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7914"},"#7914")),(0,r.yg)("li",{parentName:"ul"},"Support setting max consumers for a topic ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7968"},"#7968")),(0,r.yg)("li",{parentName:"ul"},"Support setting publish rate limitation for a topic ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7948"},"#7948")),(0,r.yg)("li",{parentName:"ul"},"Support setting inactive topic policy on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7986"},"#7986")),(0,r.yg)("li",{parentName:"ul"},"Support setting subscribe rate for a topic ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7991"},"#7991")),(0,r.yg)("li",{parentName:"ul"},"Support setting max consumers per subscription on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8003"},"#8003")),(0,r.yg)("li",{parentName:"ul"},"Support setting subscription dispatch rate on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8087"},"#8087")),(0,r.yg)("li",{parentName:"ul"},"Support setting deduplication snapshot interval on topic level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8552"},"#8552"))),(0,r.yg)("h4",{id:"broker"},"Broker"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Upgrade BookKeeper version to 4.12.0 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8447"},"#8447")),(0,r.yg)("li",{parentName:"ul"},"Capture the add entry latency of managed-ledger ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/4419"},"#4419")),(0,r.yg)("li",{parentName:"ul"},"Keep max-concurrent http web-request configurable ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7250"},"#7250")),(0,r.yg)("li",{parentName:"ul"},"Perform the unload in background after bundle split ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7387"},"#7387")),(0,r.yg)("li",{parentName:"ul"},"Cleanup already deleted namespace topics when remove cluster ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7473"},"#7473")),(0,r.yg)("li",{parentName:"ul"},"Support partitioned topics in the Reader ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7518"},"#7518")),(0,r.yg)("li",{parentName:"ul"},"Support partitioned topic lookup ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7605"},"#7605")),(0,r.yg)("li",{parentName:"ul"},"Make OrderedExecutor threads number configurable ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7765"},"#7765")),(0,r.yg)("li",{parentName:"ul"},"Add config to lazily recover cursors when recovering a managed ledger ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7858"},"#7858")),(0,r.yg)("li",{parentName:"ul"},"Make BookKeeper throttle configurable ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7901"},"#7901")),(0,r.yg)("li",{parentName:"ul"},"Report compacted topic ledger info when calling get internal stats ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7988"},"#7988")),(0,r.yg)("li",{parentName:"ul"},"Add broker config to enforce producer to publish encrypted message ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8055"},"#8055")),(0,r.yg)("li",{parentName:"ul"},"Expose ensemble placement policy in bookkeeper.conf ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8210"},"#8210")),(0,r.yg)("li",{parentName:"ul"},"Support limit topic publish rate at the broker level ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8235"},"#8235")),(0,r.yg)("li",{parentName:"ul"},"Support limit the max tenants of the Pulsar cluster ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8261"},"#8261")),(0,r.yg)("li",{parentName:"ul"},"Support limit the max namespaces per tenant ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8267"},"#8267")),(0,r.yg)("li",{parentName:"ul"},"Support limit max subscriptions per topic ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8289"},"#8289")),(0,r.yg)("li",{parentName:"ul"},"Added metrics for topic lookups operations ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8272"},"#8272")),(0,r.yg)("li",{parentName:"ul"},"Added REST handler for broker ready probe ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8303"},"#8303")),(0,r.yg)("li",{parentName:"ul"},"Configure namespace anti-affinity in local policies ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8349"},"#8349")),(0,r.yg)("li",{parentName:"ul"},"Handle hash collision in KeyShared subscription mode ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8396"},"#8396")),(0,r.yg)("li",{parentName:"ul"},"Configure maxMsgReplDelayInSeconds for each repl-cluster ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8409"},"#8409")),(0,r.yg)("li",{parentName:"ul"},"Support taking de-duplication snapshots based on time ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8474"},"#8474")),(0,r.yg)("li",{parentName:"ul"},"Support namespace-level duplication snapshot ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8506"},"#8506")),(0,r.yg)("li",{parentName:"ul"},"Expose consumer names after the mark delete position for the Key_Shared subscription ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8545"},"#8545")),(0,r.yg)("li",{parentName:"ul"},"Close topics that remain fenced forcefully ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8561"},"#8561"))),(0,r.yg)("h4",{id:"functions"},"Functions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Separate out FunctionMetadata related helper functions ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7146"},"#7146")),(0,r.yg)("li",{parentName:"ul"},"Attach names for all producers/readers in worker service ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7165"},"#7165")),(0,r.yg)("li",{parentName:"ul"},"Add support to read compacted topic ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7193"},"#7193")),(0,r.yg)("li",{parentName:"ul"},"Re-work Function MetaDataManager to make all metadata writes only by the leader ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7255"},"#7255")),(0,r.yg)("li",{parentName:"ul"},"Fix leader/scheduler assignment processing lag problem ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7237"},"#7237")),(0,r.yg)("li",{parentName:"ul"},"Set source spec's negativeacktimeout as well as timeout ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7337"},"#7337")),(0,r.yg)("li",{parentName:"ul"},"Add an endpoint to check whether function worker service is initialized ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7350"},"#7350")),(0,r.yg)("li",{parentName:"ul"},"Functions metadata compaction ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7377"},"#7377")),(0,r.yg)("li",{parentName:"ul"},"Implement rebalance mechanism ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7388"},"#7388")),(0,r.yg)("li",{parentName:"ul"},"Improve security setting ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7424"},"#7424")),(0,r.yg)("li",{parentName:"ul"},"Allow function rebalance to be run periodically ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7449"},"#7449")),(0,r.yg)("li",{parentName:"ul"},"Log scheduler stats for Pulsar Functions ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7474"},"#7474")),(0,r.yg)("li",{parentName:"ul"},"Add BatchPushSource interface ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7493"},"#7493")),(0,r.yg)("li",{parentName:"ul"},"Rejigger contract between LeaderService and rest of components ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7520"},"#7520")),(0,r.yg)("li",{parentName:"ul"},"Allow null consume in BatchPushSource ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7573"},"#7573")),(0,r.yg)("li",{parentName:"ul"},"Add readiness api for the worker leader ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7601"},"#7601")),(0,r.yg)("li",{parentName:"ul"},"Reduce in the leader init time in Pulsar Functions ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7611"},"#7611")),(0,r.yg)("li",{parentName:"ul"},"Export Function worker internal stats via Prometheus ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7641"},"#7641")),(0,r.yg)("li",{parentName:"ul"},"Allow ability to specify retain key ordering in functions ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7647"},"#7647")),(0,r.yg)("li",{parentName:"ul"},"Added ability to specify runtime for localrunner ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7681"},"#7681")),(0,r.yg)("li",{parentName:"ul"},"Add additional metrics for Pulsar Function Worker ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7685"},"#7685")),(0,r.yg)("li",{parentName:"ul"},"Use available cores for io thread processing ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7689"},"#7689")),(0,r.yg)("li",{parentName:"ul"},"Added ability to specify producer config for functions and sources ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7721"},"#7721")),(0,r.yg)("li",{parentName:"ul"},"Allow the option to make producers thread local ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7764"},"#7764")),(0,r.yg)("li",{parentName:"ul"},"Add ability for BatchPushSource to notify errors asynchronously ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7865"},"#7865")),(0,r.yg)("li",{parentName:"ul"},"Allow ability to specify sub position in functions ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7891"},"#7891")),(0,r.yg)("li",{parentName:"ul"},"Add hostname to consumer/producer properties in Pulsar Functions ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7897"},"#7897")),(0,r.yg)("li",{parentName:"ul"},"Allow specifying state storage url for Source/Sink localrun ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7930"},"#7930")),(0,r.yg)("li",{parentName:"ul"},"Enable function worker JVM metrics to be reported via Prometheus ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8097"},"#8097")),(0,r.yg)("li",{parentName:"ul"},"Add ability to specify EnvironmentBasedSecretsProvider in LocalRunner ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8098"},"#8098")),(0,r.yg)("li",{parentName:"ul"},"Added ability to specify secrets class in localrunner builder ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8127"},"#8127")),(0,r.yg)("li",{parentName:"ul"},"Add access to the current message from the function context ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8290"},"#8290")),(0,r.yg)("li",{parentName:"ul"},"Enable e2e encryption for Pulsar Function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8432"},"#8432")),(0,r.yg)("li",{parentName:"ul"},"Support key_based batch builder for functions and sources ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8523"},"#8523")),(0,r.yg)("li",{parentName:"ul"},"Refactor Context and State API to allow plugging different state store implementations ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8537"},"#8537"))),(0,r.yg)("h4",{id:"io-connectors"},"IO connectors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[HDFS]"," Add config to create sub directory from current time ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7771"},"#7771")),(0,r.yg)("li",{parentName:"ul"},"[NSQ]"," Add NSQ Source ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8372"},"#8372"))),(0,r.yg)("h4",{id:"schema"},"Schema"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add java8 date and time type to primitive schemas ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7874"},"#7874")),(0,r.yg)("li",{parentName:"ul"},"Native protobuf schema support ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7874"},"#7874")),(0,r.yg)("li",{parentName:"ul"},"Refactor multi-version schema reader ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8464"},"#8464"))),(0,r.yg)("h4",{id:"tiered-storage"},"Tiered storage"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Support Azure BlobStore offload ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8436"},"#8436"))),(0,r.yg)("h4",{id:"clients"},"Clients"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[cgo]"," Remove CGO client from repo ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8514"},"#8514"))),(0,r.yg)("h4",{id:"admin"},"Admin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Pulsar Admin]"," support config request timeout ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7698"},"#7698")),(0,r.yg)("li",{parentName:"ul"},"[Pulsar Admin]"," Ensure deleting a partitioned-topic on a non existing namespace returns 404  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7777"},"#7777")),(0,r.yg)("li",{parentName:"ul"},"[Pulsar Admin]"," Added support to force deleting namespace ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7993"},"#7993")),(0,r.yg)("li",{parentName:"ul"},"[Pulsar Admin]"," Allow to get ledger metadata along with topic stats-internal ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8180"},"#8180")),(0,r.yg)("li",{parentName:"ul"},"[Pulsar Admin]"," Support remove namespace level offload policy ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8446"},"#8446")),(0,r.yg)("li",{parentName:"ul"},"[Pulsar Admin]"," Suport get list of bundles under a namespace ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8450"},"#8450")),(0,r.yg)("li",{parentName:"ul"},"[Pulsar Admin]"," Add ability to examine specific message by position relative to earliest or latest message ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8494"},"#8494")),(0,r.yg)("li",{parentName:"ul"},"[Pulsar Admin]"," Add key-shared consumer range to internal topic stats ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8567"},"#8567"))),(0,r.yg)("h4",{id:"fixes"},"Fixes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Prevent redirection of lookup requests from looping ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7200"},"#7200")),(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Ensure that admin operations are gated by super user check ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7226"},"#7226")),(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Fix race condition when delete topic forcelly ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7356"},"#7356")),(0,r.yg)("li",{parentName:"ul"},"[Tiered Storage]"," Fix NPE when offload data to GCS ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7400"},"#7400")),(0,r.yg)("li",{parentName:"ul"},"[Function]","Fix race condition in which exitFuture in FunctionAssignmentTailer never gets completed even though the tailer thread has exited ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7351"},"#7351")),(0,r.yg)("li",{parentName:"ul"},"[Function]"," Various fixes and optimizations for processing assignments in function worker ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7338"},"#7338")),(0,r.yg)("li",{parentName:"ul"},"[Function]"," Fix deadlock between create function and leader initialization ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7508"},"#7508")),(0,r.yg)("li",{parentName:"ul"},"[Pulsar Admin]"," Fix exceptions being ignored in PulsarAdmin ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7510"},"#7510")),(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Fix the nondurable consumer can not specify the initial position ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7702"},"#7702")),(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Fixed race condition on deleting topic with active readers ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7715"},"#7715")),(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Avoid ConcurrentModificationException of LocalBrokerData ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7729"},"#7729")),(0,r.yg)("li",{parentName:"ul"},"[Pulsar Proxy]"," Fix memory leak with debug log-level  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7963"},"#7963")),(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Double check from zookeeper if availableBrokers is empty for discovery service ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/7975"},"#7975")),(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Fix broker-ml bucket stats show high metrics rate ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8218"},"#8218")),(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Fix incorrect configuration for zk-cache expire time  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8302"},"#8302")),(0,r.yg)("li",{parentName:"ul"},"[Function]"," Fix returned status code for get function state when state does not exist ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8437"},"#8437")),(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Fix the residual of inactive partitioned-topic cleaning ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8442"},"#8442")),(0,r.yg)("li",{parentName:"ul"},"[Pulsar Proxy]"," Fix request.getContentLength() to return 0 if it is less than 0 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8448"},"#8448")),(0,r.yg)("li",{parentName:"ul"},"[Broker]"," Fix race condition when calling acknowledgementWasProcessed() ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8499"},"#8499"))))}c.isMDXComponent=!0}}]);