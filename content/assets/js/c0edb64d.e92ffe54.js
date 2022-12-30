"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(a),d=s,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:s,r[1]=p;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(87462),s=(a(67294),a(3905));const i={id:"admin-api-persistent-topics",title:"Managing persistent topics",sidebar_label:"Persistent topics",original_id:"admin-api-persistent-topics"},r=void 0,p={unversionedId:"admin-api-persistent-topics",id:"version-2.2.1/admin-api-persistent-topics",title:"Managing persistent topics",description:"Persistent helps to access topic which is a logical endpoint for publishing and consuming messages. Producers publish messages to the topic and consumers subscribe to the topic, to consume messages published to the topic.",source:"@site/versioned_docs/version-2.2.1/admin-api-persistent-topics.md",sourceDirName:".",slug:"/admin-api-persistent-topics",permalink:"/docs/2.2.1/admin-api-persistent-topics",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/admin-api-persistent-topics.md",tags:[],version:"2.2.1",frontMatter:{id:"admin-api-persistent-topics",title:"Managing persistent topics",sidebar_label:"Persistent topics",original_id:"admin-api-persistent-topics"},sidebar:"version-2.2.1/docsSidebar",previous:{title:"Permissions",permalink:"/docs/2.2.1/admin-api-permissions"},next:{title:"Non-Persistent topics",permalink:"/docs/2.2.1/admin-api-non-persistent-topics"}},l={},o=[{value:"Persistent topics resources",id:"persistent-topics-resources",level:2},{value:"List of topics",id:"list-of-topics",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Grant permission",id:"grant-permission",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"Get permission",id:"get-permission",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-2",level:4},{value:"Revoke permission",id:"revoke-permission",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST API",id:"rest-api-3",level:4},{value:"Java",id:"java-3",level:4},{value:"Delete topic",id:"delete-topic",level:3},{value:"pulsar-admin",id:"pulsar-admin-4",level:4},{value:"REST API",id:"rest-api-4",level:4},{value:"Java",id:"java-4",level:4},{value:"Unload topic",id:"unload-topic",level:3},{value:"pulsar-admin",id:"pulsar-admin-5",level:4},{value:"REST API",id:"rest-api-5",level:4},{value:"Java",id:"java-5",level:4},{value:"Get stats",id:"get-stats",level:3},{value:"pulsar-admin",id:"pulsar-admin-6",level:4},{value:"REST API",id:"rest-api-6",level:4},{value:"Java",id:"java-6",level:4},{value:"Get internal stats",id:"get-internal-stats",level:3},{value:"pulsar-admin",id:"pulsar-admin-7",level:4},{value:"REST API",id:"rest-api-7",level:4},{value:"Java",id:"java-7",level:4},{value:"Peek messages",id:"peek-messages",level:3},{value:"pulsar-admin",id:"pulsar-admin-8",level:4},{value:"REST API",id:"rest-api-8",level:4},{value:"Java",id:"java-8",level:4},{value:"Skip messages",id:"skip-messages",level:3},{value:"pulsar-admin",id:"pulsar-admin-9",level:4},{value:"REST API",id:"rest-api-9",level:4},{value:"Java",id:"java-9",level:4},{value:"Skip all messages",id:"skip-all-messages",level:3},{value:"pulsar-admin",id:"pulsar-admin-10",level:4},{value:"REST API",id:"rest-api-10",level:4},{value:"Java",id:"java-10",level:4},{value:"Reset cursor",id:"reset-cursor",level:3},{value:"pulsar-admin",id:"pulsar-admin-11",level:4},{value:"REST API",id:"rest-api-11",level:4},{value:"Java",id:"java-11",level:4},{value:"Lookup of topic",id:"lookup-of-topic",level:3},{value:"pulsar-admin",id:"pulsar-admin-12",level:4},{value:"REST API",id:"rest-api-12",level:4},{value:"Java",id:"java-12",level:4},{value:"Get bundle",id:"get-bundle",level:3},{value:"pulsar-admin",id:"pulsar-admin-13",level:4},{value:"REST API",id:"rest-api-13",level:4},{value:"Java",id:"java-13",level:4},{value:"Get subscriptions",id:"get-subscriptions",level:3},{value:"pulsar-admin",id:"pulsar-admin-14",level:4},{value:"REST API",id:"rest-api-14",level:4},{value:"Java",id:"java-14",level:4},{value:"Unsubscribe",id:"unsubscribe",level:3},{value:"pulsar-admin",id:"pulsar-admin-15",level:4},{value:"REST API",id:"rest-api-15",level:4},{value:"Java",id:"java-15",level:4},{value:"Last Message Id",id:"last-message-id",level:3},{value:"REST API",id:"rest-api-16",level:4},{value:"Java",id:"java-16",level:4}],m={toc:o};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Persistent helps to access topic which is a logical endpoint for publishing and consuming messages. Producers publish messages to the topic and consumers subscribe to the topic, to consume messages published to the topic."),(0,s.kt)("p",null,"In all of the instructions and commands below, the topic name structure is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\npersistent://tenant/namespace/topic\n\n")),(0,s.kt)("h2",{id:"persistent-topics-resources"},"Persistent topics resources"),(0,s.kt)("h3",{id:"list-of-topics"},"List of topics"),(0,s.kt)("p",null,"It provides a list of persistent topics exist under a given namespace."),(0,s.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,s.kt)("p",null,"List of topics can be fetched using ",(0,s.kt)("a",{parentName:"p",href:"../../reference/CliTools#list"},(0,s.kt)("inlineCode",{parentName:"a"},"list"))," command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics list \\\n  my-tenant/my-namespace\n\n")),(0,s.kt)("h4",{id:"rest-api"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/getList"},"GET /admin/v2/:schema/:tenant/:namespace")),(0,s.kt)("h4",{id:"java"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString namespace = "my-tenant/my-namespace";\nadmin.persistentTopics().getList(namespace);\n\n')),(0,s.kt)("h3",{id:"grant-permission"},"Grant permission"),(0,s.kt)("p",null,"It grants permissions on a client role to perform specific actions on a given topic."),(0,s.kt)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,s.kt)("p",null,"Permission can be granted using ",(0,s.kt)("a",{parentName:"p",href:"../../reference/CliTools#grant-permission"},(0,s.kt)("inlineCode",{parentName:"a"},"grant-permission"))," command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics grant-permission \\\n  --actions produce,consume --role application1 \\\n  persistent://test-tenant/ns1/tp1 \\\n\n")),(0,s.kt)("h4",{id:"rest-api-1"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/grantPermissionsOnTopic"},"POST /admin/v2/:schema/:tenant/:namespace/:topic/permissions/:role")),(0,s.kt)("h4",{id:"java-1"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nString role = "test-role";\nSet<AuthAction> actions  = Sets.newHashSet(AuthAction.produce, AuthAction.consume);\nadmin.persistentTopics().grantPermission(topic, role, actions);\n\n')),(0,s.kt)("h3",{id:"get-permission"},"Get permission"),(0,s.kt)("p",null,"Permission can be fetched using ",(0,s.kt)("a",{parentName:"p",href:"../../reference/CliTools#permissions"},(0,s.kt)("inlineCode",{parentName:"a"},"permissions"))," command."),(0,s.kt)("h4",{id:"pulsar-admin-2"},"pulsar-admin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin topics permissions \\\n  persistent://test-tenant/ns1/tp1 \\\n\n{\n    "application1": [\n        "consume",\n        "produce"\n    ]\n}\n\n')),(0,s.kt)("h4",{id:"rest-api-2"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/getPermissionsOnTopic"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/permissions")),(0,s.kt)("h4",{id:"java-2"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nadmin.persistentTopics().getPermissions(topic);\n\n')),(0,s.kt)("h3",{id:"revoke-permission"},"Revoke permission"),(0,s.kt)("p",null,"It revokes a permission which was granted on a client role."),(0,s.kt)("h4",{id:"pulsar-admin-3"},"pulsar-admin"),(0,s.kt)("p",null,"Permission can be revoked using ",(0,s.kt)("a",{parentName:"p",href:"../../reference/CliTools#revoke-permission"},(0,s.kt)("inlineCode",{parentName:"a"},"revoke-permission"))," command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin topics revoke-permission \\\n  --role application1 \\\n  persistent://test-tenant/ns1/tp1 \\\n\n{\n  "application1": [\n    "consume",\n    "produce"\n  ]\n}\n\n')),(0,s.kt)("h4",{id:"rest-api-3"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/revokePermissionsOnTopic"},"DELETE /admin/v2/:schema/:tenant/:namespace/:topic/permissions/:role")),(0,s.kt)("h4",{id:"java-3"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nString role = "test-role";\nadmin.persistentTopics().revokePermissions(topic, role);\n\n')),(0,s.kt)("h3",{id:"delete-topic"},"Delete topic"),(0,s.kt)("p",null,"It deletes a topic. The topic cannot be deleted if there's any active subscription or producers connected to it."),(0,s.kt)("h4",{id:"pulsar-admin-4"},"pulsar-admin"),(0,s.kt)("p",null,"Topic can be deleted using ",(0,s.kt)("a",{parentName:"p",href:"../../reference/CliTools#delete"},(0,s.kt)("inlineCode",{parentName:"a"},"delete"))," command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics delete \\\n  persistent://test-tenant/ns1/tp1 \\\n\n")),(0,s.kt)("h4",{id:"rest-api-4"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/deleteTopic"},"DELETE /admin/v2/:schema/:tenant/:namespace/:topic")),(0,s.kt)("h4",{id:"java-4"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nadmin.persistentTopics().delete(topic);\n\n')),(0,s.kt)("h3",{id:"unload-topic"},"Unload topic"),(0,s.kt)("p",null,"It unloads a topic."),(0,s.kt)("h4",{id:"pulsar-admin-5"},"pulsar-admin"),(0,s.kt)("p",null,"Topic can be unloaded using ",(0,s.kt)("a",{parentName:"p",href:"../../reference/CliTools#unload"},(0,s.kt)("inlineCode",{parentName:"a"},"unload"))," command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics unload \\\n  persistent://test-tenant/ns1/tp1 \\\n\n")),(0,s.kt)("h4",{id:"rest-api-5"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/unloadTopic"},"PUT /admin/v2/:schema/:tenant/:namespace/:topic/unload")),(0,s.kt)("h4",{id:"java-5"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nadmin.persistentTopics().unload(topic);\n\n')),(0,s.kt)("h3",{id:"get-stats"},"Get stats"),(0,s.kt)("p",null,"It shows current statistics of a given non-partitioned topic."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"msgRateIn"),": The sum of all local and replication publishers' publish rates in messages per second")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"msgThroughputIn"),": Same as above, but in bytes per second instead of messages per second")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"msgRateOut"),": The sum of all local and replication consumers' dispatch rates in messages per second")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"msgThroughputOut"),": Same as above, but in bytes per second instead of messages per second")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"averageMsgSize"),": The average size in bytes of messages published within the last interval")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"storageSize"),": The sum of the ledgers' storage size for this topic. See")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"publishers"),": The list of all local publishers into the topic. There can be zero or thousands")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"averageMsgSize"),": Average message size in bytes from this publisher within the last interval")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"producerId"),": Internal identifier for this producer on this topic")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"producerName"),": Internal identifier for this producer, generated by the client library")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"address"),": IP address and source port for the connection of this producer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"connectedSince"),": Timestamp this producer was created or last reconnected")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"subscriptions"),": The list of all local subscriptions to the topic")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"my-subscription"),": The name of this subscription (client defined)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"msgBacklog"),": The count of messages in backlog for this subscription")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"type"),": This subscription type")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"msgRateExpired"),": The rate at which messages were discarded instead of dispatched from this subscription due to TTL")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"consumers"),": The list of connected consumers for this subscription")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"consumerName"),": Internal identifier for this consumer, generated by the client library")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"availablePermits"),": The number of messages this consumer has space for in the client library's listen queue. A value of 0 means the client library's queue is full and receive() isn't being called. A nonzero value means this consumer is ready to be dispatched messages.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"replication"),": This section gives the stats for cross-colo replication of this topic")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"replicationBacklog"),": The outbound replication backlog in messages")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"connected"),": Whether the outbound replicator is connected")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"replicationDelayInSeconds"),": How long the oldest message has been waiting to be sent through the connection, if connected is true")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"inboundConnection"),": The IP and port of the broker in the remote cluster's publisher connection to this broker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"inboundConnectedSince"),": The TCP connection being used to publish messages to the remote cluster. If there are no local publishers connected, this connection is automatically closed after a minute."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "msgRateIn": 4641.528542257553,\n  "msgThroughputIn": 44663039.74947473,\n  "msgRateOut": 0,\n  "msgThroughputOut": 0,\n  "averageMsgSize": 1232439.816728665,\n  "storageSize": 135532389160,\n  "publishers": [\n    {\n      "msgRateIn": 57.855383881403576,\n      "msgThroughputIn": 558994.7078932219,\n      "averageMsgSize": 613135,\n      "producerId": 0,\n      "producerName": null,\n      "address": null,\n      "connectedSince": null\n    }\n  ],\n  "subscriptions": {\n    "my-topic_subscription": {\n      "msgRateOut": 0,\n      "msgThroughputOut": 0,\n      "msgBacklog": 116632,\n      "type": null,\n      "msgRateExpired": 36.98245516804671,\n      "consumers": []\n    }\n  },\n  "replication": {}\n}\n\n')),(0,s.kt)("h4",{id:"pulsar-admin-6"},"pulsar-admin"),(0,s.kt)("p",null,"Topic stats can be fetched using ",(0,s.kt)("a",{parentName:"p",href:"../../reference/CliTools#stats"},(0,s.kt)("inlineCode",{parentName:"a"},"stats"))," command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics stats \\\n  persistent://test-tenant/ns1/tp1 \\\n\n")),(0,s.kt)("h4",{id:"rest-api-6"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/getStats"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/stats")),(0,s.kt)("h4",{id:"java-6"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nadmin.persistentTopics().getStats(topic);\n\n')),(0,s.kt)("h3",{id:"get-internal-stats"},"Get internal stats"),(0,s.kt)("p",null,"It shows detailed statistics of a topic."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"entriesAddedCounter"),": Messages published since this broker loaded this topic")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"numberOfEntries"),": Total number of messages being tracked")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"totalSize"),": Total storage size in bytes of all messages")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"currentLedgerEntries"),": Count of messages written to the ledger currently open for writing")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"currentLedgerSize"),": Size in bytes of messages written to ledger currently open for writing")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"lastLedgerCreatedTimestamp"),": time when last ledger was created")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"lastLedgerCreationFailureTimestamp:")," time when last ledger was failed")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"waitingCursorsCount"),': How many cursors are "caught up" and waiting for a new message to be published')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"pendingAddEntriesCount"),": How many messages have (asynchronous) write requests we are waiting on completion")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"lastConfirmedEntry"),": The ledgerid:entryid of the last message successfully written. If the entryid is -1, then the ledger has been opened or is currently being opened but has no entries written yet.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"state"),": The state of this ledger for writing. LedgerOpened means we have a ledger open for saving published messages.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"ledgers"),": The ordered list of all ledgers for this topic holding its messages")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"cursors"),": The list of all cursors on this topic. There will be one for every subscription you saw in the topic stats.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"markDeletePosition"),": The ack position: the last message the subscriber acknowledged receiving")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"readPosition"),": The latest position of subscriber for reading message")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"waitingReadOp"),": This is true when the subscription has read the latest message published to the topic and is waiting on new messages to be published.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"pendingReadOps"),": The counter for how many outstanding read requests to the BookKeepers we have in progress")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"messagesConsumedCounter"),": Number of messages this cursor has acked since this broker loaded this topic")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"cursorLedger"),": The ledger being used to persistently store the current markDeletePosition")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"cursorLedgerLastEntry"),": The last entryid used to persistently store the current markDeletePosition")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"individuallyDeletedMessages"),": If Acks are being done out of order, shows the ranges of messages Acked between the markDeletePosition and the read-position")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"lastLedgerSwitchTimestamp"),": The last time the cursor ledger was rolled over")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"state"),": The state of the cursor ledger: Open means we have a cursor ledger for saving updates of the markDeletePosition."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "entriesAddedCounter": 20449518,\n    "numberOfEntries": 3233,\n    "totalSize": 331482,\n    "currentLedgerEntries": 3233,\n    "currentLedgerSize": 331482,\n    "lastLedgerCreatedTimestamp": "2016-06-29 03:00:23.825",\n    "lastLedgerCreationFailureTimestamp": null,\n    "waitingCursorsCount": 1,\n    "pendingAddEntriesCount": 0,\n    "lastConfirmedEntry": "324711539:3232",\n    "state": "LedgerOpened",\n    "ledgers": [\n        {\n            "ledgerId": 324711539,\n            "entries": 0,\n            "size": 0\n        }\n    ],\n    "cursors": {\n        "my-subscription": {\n            "markDeletePosition": "324711539:3133",\n            "readPosition": "324711539:3233",\n            "waitingReadOp": true,\n            "pendingReadOps": 0,\n            "messagesConsumedCounter": 20449501,\n            "cursorLedger": 324702104,\n            "cursorLedgerLastEntry": 21,\n            "individuallyDeletedMessages": "[(324711539:3134\u2025324711539:3136], (324711539:3137\u2025324711539:3140], ]",\n            "lastLedgerSwitchTimestamp": "2016-06-29 01:30:19.313",\n            "state": "Open"\n        }\n    }\n}\n\n')),(0,s.kt)("h4",{id:"pulsar-admin-7"},"pulsar-admin"),(0,s.kt)("p",null,"Topic internal-stats can be fetched using ",(0,s.kt)("a",{parentName:"p",href:"../../reference/CliTools#stats-internal"},(0,s.kt)("inlineCode",{parentName:"a"},"stats-internal"))," command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics stats-internal \\\n  persistent://test-tenant/ns1/tp1 \\\n\n")),(0,s.kt)("h4",{id:"rest-api-7"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/getInternalStats"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/internalStats")),(0,s.kt)("h4",{id:"java-7"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nadmin.persistentTopics().getInternalStats(topic);\n\n')),(0,s.kt)("h3",{id:"peek-messages"},"Peek messages"),(0,s.kt)("p",null,"It peeks N messages for a specific subscription of a given topic."),(0,s.kt)("h4",{id:"pulsar-admin-8"},"pulsar-admin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin topics peek-messages \\\n  --count 10 --subscription my-subscription \\\n  persistent://test-tenant/ns1/tp1 \\\n\nMessage ID: 315674752:0\nProperties:  {  "X-Pulsar-publish-time" : "2015-07-13 17:40:28.451"  }\nmsg-payload\n\n')),(0,s.kt)("h4",{id:"rest-api-8"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/peekNthMessage"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/subscription/:subName/position/:messagePosition")),(0,s.kt)("h4",{id:"java-8"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nString subName = "my-subscription";\nint numMessages = 1;\nadmin.persistentTopics().peekMessages(topic, subName, numMessages);\n\n')),(0,s.kt)("h3",{id:"skip-messages"},"Skip messages"),(0,s.kt)("p",null,"It skips N messages for a specific subscription of a given topic."),(0,s.kt)("h4",{id:"pulsar-admin-9"},"pulsar-admin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics skip \\\n  --count 10 --subscription my-subscription \\\n  persistent://test-tenant/ns1/tp1 \\\n\n")),(0,s.kt)("h4",{id:"rest-api-9"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/skipMessages"},"POST /admin/v2/:schema/:tenant/:namespace/:topic/subscription/:subName/skip/:numMessages")),(0,s.kt)("h4",{id:"java-9"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nString subName = "my-subscription";\nint numMessages = 1;\nadmin.persistentTopics().skipMessages(topic, subName, numMessages);\n\n')),(0,s.kt)("h3",{id:"skip-all-messages"},"Skip all messages"),(0,s.kt)("p",null,"It skips all old messages for a specific subscription of a given topic."),(0,s.kt)("h4",{id:"pulsar-admin-10"},"pulsar-admin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics skip-all \\\n  --subscription my-subscription \\\n  persistent://test-tenant/ns1/tp1 \\\n\n")),(0,s.kt)("h4",{id:"rest-api-10"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/skipAllMessages"},"POST /admin/v2/:schema/:tenant/:namespace/:topic/subscription/:subName/skip_all")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../../reference/RestApi#/admin/persistent/:tenant/:namespace/:topic/subscription/:subName/skip_all"},"More info")),(0,s.kt)("h4",{id:"java-10"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nString subName = "my-subscription";\nadmin.persistentTopics().skipAllMessages(topic, subName);\n\n')),(0,s.kt)("h3",{id:"reset-cursor"},"Reset cursor"),(0,s.kt)("p",null,"It resets a subscription\u2019s cursor position back to the position which was recorded X minutes before. It essentially calculates time and position of cursor at X minutes before and resets it at that position."),(0,s.kt)("h4",{id:"pulsar-admin-11"},"pulsar-admin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics reset-cursor \\\n  --subscription my-subscription --time 10 \\\n  persistent://test-tenant/ns1/tp1 \\\n\n")),(0,s.kt)("h4",{id:"rest-api-11"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/resetCursor"},"POST /admin/v2/:schema/:tenant/:namespace/:topic/subscription/:subName/resetcursor/:timestamp")),(0,s.kt)("h4",{id:"java-11"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nString subName = "my-subscription";\nlong timestamp = 2342343L;\nadmin.persistentTopics().skipAllMessages(topic, subName, timestamp);\n\n')),(0,s.kt)("h3",{id:"lookup-of-topic"},"Lookup of topic"),(0,s.kt)("p",null,"It locates broker url which is serving the given topic."),(0,s.kt)("h4",{id:"pulsar-admin-12"},"pulsar-admin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin topics lookup \\\n  persistent://test-tenant/ns1/tp1 \\\n\n "pulsar://broker1.org.com:4480"\n\n')),(0,s.kt)("h4",{id:"rest-api-12"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#/"},"GET /lookup/v2/topic/:schema/:tenant:namespace/:topic")),(0,s.kt)("h4",{id:"java-12"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nadmin.lookup().lookupDestination(topic);\n\n')),(0,s.kt)("h3",{id:"get-bundle"},"Get bundle"),(0,s.kt)("p",null,"It gives range of the bundle which contains given topic"),(0,s.kt)("h4",{id:"pulsar-admin-13"},"pulsar-admin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin topics bundle-range \\\n  persistent://test-tenant/ns1/tp1 \\\n\n "0x00000000_0xffffffff"\n\n')),(0,s.kt)("h4",{id:"rest-api-13"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#/"},"GET /lookup/v2/topic/:topic_domain/:tenant/:namespace/:topic/bundle")),(0,s.kt)("h4",{id:"java-13"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nadmin.lookup().getBundleRange(topic);\n\n')),(0,s.kt)("h3",{id:"get-subscriptions"},"Get subscriptions"),(0,s.kt)("p",null,"It shows all subscription names for a given topic."),(0,s.kt)("h4",{id:"pulsar-admin-14"},"pulsar-admin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics subscriptions \\\n  persistent://test-tenant/ns1/tp1 \\\n\n my-subscription\n\n")),(0,s.kt)("h4",{id:"rest-api-14"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/getSubscriptions"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/subscriptions")),(0,s.kt)("h4",{id:"java-14"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nadmin.persistentTopics().getSubscriptions(topic);\n\n')),(0,s.kt)("h3",{id:"unsubscribe"},"Unsubscribe"),(0,s.kt)("p",null,"It can also help to unsubscribe a subscription which is no more processing further messages."),(0,s.kt)("h4",{id:"pulsar-admin-15"},"pulsar-admin"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin topics unsubscribe \\\n  --subscription my-subscription \\\n  persistent://test-tenant/ns1/tp1 \\\n\n")),(0,s.kt)("h4",{id:"rest-api-15"},"REST API"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=master&apiversion=v2#operation/deleteSubscription"},"DELETE /admin/v2/namespaces/:tenant/:namespace/:topic/subscription/:subscription")),(0,s.kt)("h4",{id:"java-15"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nString subscriptionName = "my-subscription";\nadmin.persistentTopics().deleteSubscription(topic, subscriptionName);\n\n')),(0,s.kt)("h3",{id:"last-message-id"},"Last Message Id"),(0,s.kt)("p",null,"It gives the last committed message ID for a persistent topic, and it will be available in 2.3.0."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"\npulsar-admin topics last-message-id topic-name\n\n")),(0,s.kt)("h4",{id:"rest-api-16"},"REST API"),(0,s.kt)("p",null,"{% endpoint Get /admin/v2/:schema/:tenant/:namespace/:topic/lastMessageId %}"),(0,s.kt)("h4",{id:"java-16"},"Java"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-Java"},'\nString topic = "persistent://my-tenant/my-namespace/my-topic";\nadmin.persistentTopics().getLastMessage(topic);\n\n')))}c.isMDXComponent=!0}}]);