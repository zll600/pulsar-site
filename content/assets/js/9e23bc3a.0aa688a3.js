"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1445],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=u(a),m=l,f=h["".concat(o,".").concat(m)]||h[m]||c[m]||p;return a?r.createElement(f,n(n({ref:t},s),{},{components:a})):r.createElement(f,n({ref:t},s))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,n=new Array(p);n[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[h]="string"==typeof e?e:l,n[1]=i;for(var u=2;u<p;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var r=a(87462),l=(a(67294),a(3905));const p={id:"pulsar-2.6.3",title:"Apache Pulsar 2.6.3",sidebar_label:"Apache Pulsar 2.6.3"},n=void 0,i={unversionedId:"versioned/pulsar-2.6.3",id:"versioned/pulsar-2.6.3",title:"Apache Pulsar 2.6.3",description:"2021-01-26",source:"@site/release-notes/versioned/pulsar-2.6.3.md",sourceDirName:"versioned",slug:"/versioned/pulsar-2.6.3",permalink:"/release-notes/versioned/pulsar-2.6.3",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-2.6.3.md",tags:[],version:"current",frontMatter:{id:"pulsar-2.6.3",title:"Apache Pulsar 2.6.3",sidebar_label:"Apache Pulsar 2.6.3"}},o={},u=[{value:"2021-01-26",id:"2021-01-26",level:4},{value:"Broker",id:"broker",level:4},{value:"Proxy",id:"proxy",level:4},{value:"Pulsar Perf",id:"pulsar-perf",level:4},{value:"Pulsar IO",id:"pulsar-io",level:4},{value:"Functions",id:"functions",level:4}],s={toc:u};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"2021-01-26"},"2021-01-26"),(0,l.kt)("h4",{id:"broker"},"Broker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update the BookKeeper to version 4.11.1 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8604"},"#8604")),(0,l.kt)("li",{parentName:"ul"},"Use the correct configuration for the expiration time of the ZooKeeper cache ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8302"},"#8302")),(0,l.kt)("li",{parentName:"ul"},"Refresh ZooKeeper-data cache in background to avoid deadlock and blocking IO on the ZooKeeper thread ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8304"},"#8304")),(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"elapsedMs")," in the creation of the ledger log ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8473"},"#8473")),(0,l.kt)("li",{parentName:"ul"},"Fix the race condition when calling ",(0,l.kt)("inlineCode",{parentName:"li"},"acknowledgementWasProcessed()")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8499"},"#8499")),(0,l.kt)("li",{parentName:"ul"},"Fix the way to handle errors for client requests ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8518"},"#8518")),(0,l.kt)("li",{parentName:"ul"},"Expose consumer names after the mark delete position for the Key_Shared subscription ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8545"},"#8545")),(0,l.kt)("li",{parentName:"ul"},"Close topics that remain fenced forcefully ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8561"},"#8561")),(0,l.kt)("li",{parentName:"ul"},"Expose the last disconnected timestamp for producers and consumers ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8605"},"#8605")),(0,l.kt)("li",{parentName:"ul"},"Support the HAProxy proxy protocol for Pulsar broker and Pulsar Proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8686"},"#8686")),(0,l.kt)("li",{parentName:"ul"},"Clear delayed messages when clearing the backlog ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8691"},"#8691")),(0,l.kt)("li",{parentName:"ul"},"Fix the Jclouds Azure credential error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8693"},"#8693")),(0,l.kt)("li",{parentName:"ul"},"Improve environment configiguration handling ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8709"},"#8709")),(0,l.kt)("li",{parentName:"ul"},"Fix the issue with failing to get ",(0,l.kt)("inlineCode",{parentName:"li"},"lastMessageId")," for an empty topic due to message retention ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8725"},"#8725")),(0,l.kt)("li",{parentName:"ul"},"Ensure that the Offload manager is initialized once ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8739"},"#8739")),(0,l.kt)("li",{parentName:"ul"},"Fix the issue with getting partition metadata for a non-existed topic ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8818"},"#8818")),(0,l.kt)("li",{parentName:"ul"},"Fix the exception cast error ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8828"},"#8828")),(0,l.kt)("li",{parentName:"ul"},"Export Prometheus metric for messageTTL ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8871"},"#8871")),(0,l.kt)("li",{parentName:"ul"},'Fix the issue that GenericJsonReader converts the null value to string "null" ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8883"},"#8883")),(0,l.kt)("li",{parentName:"ul"},"Capture stats with precise backlog ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8928"},"#8928")),(0,l.kt)("li",{parentName:"ul"},"Monitor if a cursor moves its mark-delete position ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8930"},"#8930")),(0,l.kt)("li",{parentName:"ul"},"Intercept ",(0,l.kt)("inlineCode",{parentName:"li"},"beforeSendMessage")," calls ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8932"},"#8932")),(0,l.kt)("li",{parentName:"ul"},"Expose non-contiguous deleted messages ranges stats ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8936"},"#8936")),(0,l.kt)("li",{parentName:"ul"},"Fix NPE in ",(0,l.kt)("inlineCode",{parentName:"li"},"PersistentStickyKeyDispatcherMultipleConsumers")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8969"},"#8969")),(0,l.kt)("li",{parentName:"ul"},"Fix the issue that an exception is thrown when peeking at compressed messages (Readonly buffers are not supported by Airlift) ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8990"},"#8990")),(0,l.kt)("li",{parentName:"ul"},"Remove the duplicated broker Prometheus metrics type ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8995"},"#8995")),(0,l.kt)("li",{parentName:"ul"},"Improve the way to handle errors when the broker does not trust client certificates ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8998"},"#8998")),(0,l.kt)("li",{parentName:"ul"},"Add the raw Prometheus metrics provider ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9021"},"#9021")),(0,l.kt)("li",{parentName:"ul"},"Support chained authentication with same authentication method name ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9094"},"#9094")),(0,l.kt)("li",{parentName:"ul"},"Fix regression in apply-config-from-env.py ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9097"},"#9097"))),(0,l.kt)("h4",{id:"proxy"},"Proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fix the ",(0,l.kt)("inlineCode",{parentName:"li"},"request.getContentLength()")," to return 0 if it is less than 0 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8448"},"#8448")),(0,l.kt)("li",{parentName:"ul"},"Add the error log for the Pulsar Proxy starter ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8451"},"#8451")),(0,l.kt)("li",{parentName:"ul"},"Support enabling WebSocket on Pulsar Proxy ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8613"},"#8613")),(0,l.kt)("li",{parentName:"ul"},"Fix the issue that the Proxy ",(0,l.kt)("inlineCode",{parentName:"li"},"bindAddress")," configuration does not work for the ",(0,l.kt)("inlineCode",{parentName:"li"},"servicePort")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9068"},"#9068"))),(0,l.kt)("h4",{id:"pulsar-perf"},"Pulsar Perf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Support WebSocket Producer for V2 topics ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8535"},"#8535"))),(0,l.kt)("h4",{id:"pulsar-io"},"Pulsar IO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make Schema information of Source topic available to downstream Sinks ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8854"},"#8854")),(0,l.kt)("li",{parentName:"ul"},"Fix the error log of the Debezium connector ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/9063"},"#9063"))),(0,l.kt)("h4",{id:"functions"},"Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Propagate user-defined parameter into instances of Golang Pulsar Functions ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8132"},"#8132")),(0,l.kt)("li",{parentName:"ul"},"Go functions supports Kubernetes runtime ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/8352"},"#8352"))))}h.isMDXComponent=!0}}]);