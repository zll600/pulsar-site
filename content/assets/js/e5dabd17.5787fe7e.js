"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1998],{3905:(e,a,n)=>{n.d(a,{Zo:()=>o,kt:()=>k});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),c=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},o=function(e){var a=c(e.components);return t.createElement(p.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,s=e.originalType,p=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=l,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||s;return n?t.createElement(k,i(i({ref:a},o),{},{components:n})):t.createElement(k,i({ref:a},o))}));function k(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var s=n.length,i=new Array(s);i[0]=u;var r={};for(var p in a)hasOwnProperty.call(a,p)&&(r[p]=a[p]);r.originalType=e,r[d]="string"==typeof e?e:l,i[1]=r;for(var c=2;c<s;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43413:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=n(87462),l=(n(67294),n(3905));const s={id:"admin-api-namespaces",title:"Managing Namespaces",sidebar_label:"Namespaces",original_id:"admin-api-namespaces"},i=void 0,r={unversionedId:"admin-api-namespaces",id:"version-2.3.0/admin-api-namespaces",title:"Managing Namespaces",description:"Pulsar namespaces are logical groupings of topics.",source:"@site/versioned_docs/version-2.3.0/admin-api-namespaces.md",sourceDirName:".",slug:"/admin-api-namespaces",permalink:"/docs/2.3.0/admin-api-namespaces",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.0/admin-api-namespaces.md",tags:[],version:"2.3.0",frontMatter:{id:"admin-api-namespaces",title:"Managing Namespaces",sidebar_label:"Namespaces",original_id:"admin-api-namespaces"},sidebar:"version-2.3.0/docsSidebar",previous:{title:"Brokers",permalink:"/docs/2.3.0/admin-api-brokers"},next:{title:"Permissions",permalink:"/docs/2.3.0/admin-api-permissions"}},p={},c=[{value:"Namespaces resources",id:"namespaces-resources",level:2},{value:"Create",id:"create",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"Get policies",id:"get-policies",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"List namespaces within a tenant",id:"list-namespaces-within-a-tenant",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST API",id:"rest-api-2",level:4},{value:"Java",id:"java-2",level:4},{value:"Delete",id:"delete",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"REST",id:"rest",level:4},{value:"Java",id:"java-3",level:4},{value:"set replication cluster",id:"set-replication-cluster",level:4},{value:"CLI",id:"cli",level:6},{value:"REST",id:"rest-1",level:6},{value:"Java",id:"java-4",level:6},{value:"get replication cluster",id:"get-replication-cluster",level:4},{value:"CLI",id:"cli-1",level:6},{value:"REST",id:"rest-2",level:6},{value:"Java",id:"java-5",level:6},{value:"set backlog quota policies",id:"set-backlog-quota-policies",level:4},{value:"CLI",id:"cli-2",level:6},{value:"REST",id:"rest-3",level:6},{value:"Java",id:"java-6",level:6},{value:"get backlog quota policies",id:"get-backlog-quota-policies",level:4},{value:"CLI",id:"cli-3",level:6},{value:"REST",id:"rest-4",level:6},{value:"Java",id:"java-7",level:6},{value:"remove backlog quota policies",id:"remove-backlog-quota-policies",level:4},{value:"CLI",id:"cli-4",level:6},{value:"REST",id:"rest-5",level:6},{value:"Java",id:"java-8",level:6},{value:"set persistence policies",id:"set-persistence-policies",level:4},{value:"CLI",id:"cli-5",level:6},{value:"REST",id:"rest-6",level:6},{value:"Java",id:"java-9",level:6},{value:"get persistence policies",id:"get-persistence-policies",level:4},{value:"CLI",id:"cli-6",level:6},{value:"REST",id:"rest-7",level:6},{value:"Java",id:"java-10",level:6},{value:"unload namespace bundle",id:"unload-namespace-bundle",level:4},{value:"CLI",id:"cli-7",level:6},{value:"REST",id:"rest-8",level:6},{value:"Java",id:"java-11",level:6},{value:"set message-ttl",id:"set-message-ttl",level:4},{value:"CLI",id:"cli-8",level:6},{value:"REST",id:"rest-9",level:6},{value:"Java",id:"java-12",level:6},{value:"get message-ttl",id:"get-message-ttl",level:4},{value:"CLI",id:"cli-9",level:6},{value:"REST",id:"rest-10",level:6},{value:"Java",id:"java-13",level:6},{value:"split bundle",id:"split-bundle",level:4},{value:"CLI",id:"cli-10",level:6},{value:"REST",id:"rest-11",level:6},{value:"Java",id:"java-14",level:6},{value:"clear backlog",id:"clear-backlog",level:4},{value:"CLI",id:"cli-11",level:6},{value:"REST",id:"rest-12",level:6},{value:"Java",id:"java-15",level:6},{value:"clear bundle backlog",id:"clear-bundle-backlog",level:4},{value:"CLI",id:"cli-12",level:6},{value:"REST",id:"rest-13",level:6},{value:"Java",id:"java-16",level:6},{value:"set retention",id:"set-retention",level:4},{value:"CLI",id:"cli-13",level:6},{value:"REST",id:"rest-14",level:6},{value:"Java",id:"java-17",level:6},{value:"get retention",id:"get-retention",level:4},{value:"CLI",id:"cli-14",level:6},{value:"REST",id:"rest-15",level:6},{value:"Java",id:"java-18",level:6},{value:"set dispatch throttling",id:"set-dispatch-throttling",level:4},{value:"CLI",id:"cli-15",level:6},{value:"REST",id:"rest-16",level:6},{value:"Java",id:"java-19",level:6},{value:"get configured message-rate",id:"get-configured-message-rate",level:4},{value:"CLI",id:"cli-16",level:6},{value:"REST",id:"rest-17",level:6},{value:"Java",id:"java-20",level:6},{value:"Namespace isolation",id:"namespace-isolation",level:3},{value:"Unloading from a broker",id:"unloading-from-a-broker",level:3},{value:"pulsar-admin",id:"pulsar-admin-4",level:4},{value:"CLI",id:"cli-17",level:6},{value:"REST",id:"rest-18",level:6},{value:"Java",id:"java-21",level:6}],o={toc:c};function d(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#namespace"},"namespaces")," are logical groupings of ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#topic"},"topics"),"."),(0,l.kt)("p",null,"Namespaces can be managed via:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/reference-pulsar-admin#clusters"},(0,l.kt)("inlineCode",{parentName:"a"},"namespaces"))," command of the ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/reference-pulsar-admin"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"/admin/v2/namespaces")," endpoint of the admin ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"namespaces")," method of the ",(0,l.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object in the ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/client-libraries-java"},"Java API"))),(0,l.kt)("h2",{id:"namespaces-resources"},"Namespaces resources"),(0,l.kt)("h3",{id:"create"},"Create"),(0,l.kt)("p",null,"You can create new namespaces under a given ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#tenant"},"tenant"),"."),(0,l.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#namespaces-create"},(0,l.kt)("inlineCode",{parentName:"a"},"create"))," subcommand and specify the namespace by name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces create test-tenant/test-namespace\n\n")),(0,l.kt)("h4",{id:"rest-api"},"REST API"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/createNamespace"},"PUT /admin/v2/namespaces/:tenant/:namespace")),(0,l.kt)("h4",{id:"java"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().createNamespace(namespace);\n\n")),(0,l.kt)("h3",{id:"get-policies"},"Get policies"),(0,l.kt)("p",null,"You can fetch the current policies associated with a namespace at any time."),(0,l.kt)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#namespaces-policies"},(0,l.kt)("inlineCode",{parentName:"a"},"policies"))," subcommand and specify the namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces policies test-tenant/test-namespace\n{\n  "auth_policies": {\n    "namespace_auth": {},\n    "destination_auth": {}\n  },\n  "replication_clusters": [],\n  "bundles_activated": true,\n  "bundles": {\n    "boundaries": [\n      "0x00000000",\n      "0xffffffff"\n    ],\n    "numBundles": 1\n  },\n  "backlog_quota_map": {},\n  "persistence": null,\n  "latency_stats_sample_rate": {},\n  "message_ttl_in_seconds": 0,\n  "retention_policies": null,\n  "deleted": false\n}\n\n')),(0,l.kt)("h4",{id:"rest-api-1"},"REST API"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/getPolicies"},"GET /admin/v2/namespaces/:tenant/:namespace")),(0,l.kt)("h4",{id:"java-1"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getPolicies(namespace);\n\n")),(0,l.kt)("h3",{id:"list-namespaces-within-a-tenant"},"List namespaces within a tenant"),(0,l.kt)("p",null,"You can list all namespaces within a given Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#tenant"},"tenant"),"."),(0,l.kt)("h4",{id:"pulsar-admin-2"},"pulsar-admin"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#namespaces-list"},(0,l.kt)("inlineCode",{parentName:"a"},"list"))," subcommand and specify the tenant:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces list test-tenant\ntest-tenant/ns1\ntest-tenant/ns2\n\n")),(0,l.kt)("h4",{id:"rest-api-2"},"REST API"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/getTenantNamespaces"},"GET /admin/v2/namespaces/:tenant")),(0,l.kt)("h4",{id:"java-2"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getNamespaces(tenant);\n\n")),(0,l.kt)("h3",{id:"delete"},"Delete"),(0,l.kt)("p",null,"You can delete existing namespaces from a tenant."),(0,l.kt)("h4",{id:"pulsar-admin-3"},"pulsar-admin"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#namespaces-delete"},(0,l.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specify the namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces delete test-tenant/ns1\n\n")),(0,l.kt)("h4",{id:"rest"},"REST"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.0&apiversion=v2#operation/deleteNamespace"},"DELETE /admin/v2/namespaces/:tenant/:namespace")),(0,l.kt)("h4",{id:"java-3"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().deleteNamespace(namespace);\n\n")),(0,l.kt)("h4",{id:"set-replication-cluster"},"set replication cluster"),(0,l.kt)("p",null,"It sets replication clusters for a namespace, so Pulsar can internally replicate publish message from one colo to another colo."),(0,l.kt)("h6",{id:"cli"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces set-clusters test-tenant/ns1 \\\n  --clusters cl1\n\n")),(0,l.kt)("h6",{id:"rest-1"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|POST|/admin/v2/namespaces/:tenant/:namespace/replication|operation?version=2.3.0/setNamespaceReplicationClusters}\n\n")),(0,l.kt)("h6",{id:"java-4"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setNamespaceReplicationClusters(namespace, clusters);\n\n")),(0,l.kt)("h4",{id:"get-replication-cluster"},"get replication cluster"),(0,l.kt)("p",null,"It gives a list of replication clusters for a given namespace."),(0,l.kt)("h6",{id:"cli-1"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces get-clusters test-tenant/cl1/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\ncl2\n\n")),(0,l.kt)("h6",{id:"rest-2"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|GET|/admin/v2/namespaces/:tenant/:namespace/replication|operation?version=2.3.0/getNamespaceReplicationClusters}\n\n")),(0,l.kt)("h6",{id:"java-5"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getNamespaceReplicationClusters(namespace)\n\n")),(0,l.kt)("h4",{id:"set-backlog-quota-policies"},"set backlog quota policies"),(0,l.kt)("p",null,"Backlog quota helps broker to restrict bandwidth/storage of a namespace once it reach certain threshold limit . Admin can set this limit and one of the following action after the limit is reached."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"producer_request_hold: broker will hold and not persist produce request payload")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"producer_exception: broker will disconnects with client by giving exception")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"consumer_backlog_eviction: broker will start discarding backlog messages"),(0,l.kt)("p",{parentName:"li"},"Backlog quota restriction can be taken care by defining restriction of backlog-quota-type: destination_storage"))),(0,l.kt)("h6",{id:"cli-2"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces set-backlog-quota --limit 10 --policy producer_request_hold test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nN/A\n\n")),(0,l.kt)("h6",{id:"rest-3"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|POST|/admin/v2/namespaces/:tenant/:namespace/backlogQuota|operation/setBacklogQuota?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-6"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setBacklogQuota(namespace, new BacklogQuota(limit, policy))\n\n")),(0,l.kt)("h4",{id:"get-backlog-quota-policies"},"get backlog quota policies"),(0,l.kt)("p",null,"It shows a configured backlog quota for a given namespace."),(0,l.kt)("h6",{id:"cli-3"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces get-backlog-quotas test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "destination_storage": {\n    "limit": 10,\n    "policy": "producer_request_hold"\n  }\n}\n\n')),(0,l.kt)("h6",{id:"rest-4"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|GET|/admin/v2/namespaces/:tenant/:namespace/backlogQuotaMap|operation/getBacklogQuotaMap?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-7"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getBacklogQuotaMap(namespace);\n\n")),(0,l.kt)("h4",{id:"remove-backlog-quota-policies"},"remove backlog quota policies"),(0,l.kt)("p",null,"It removes backlog quota policies for a given namespace"),(0,l.kt)("h6",{id:"cli-4"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces remove-backlog-quota test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nN/A\n\n")),(0,l.kt)("h6",{id:"rest-5"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|DELETE|/admin/v2/namespaces/:tenant/:namespace/backlogQuota|operation/removeBacklogQuota?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-8"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().removeBacklogQuota(namespace, backlogQuotaType)\n\n")),(0,l.kt)("h4",{id:"set-persistence-policies"},"set persistence policies"),(0,l.kt)("p",null,"Persistence policies allow to configure persistency-level for all topic messages under a given namespace."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bookkeeper-ack-quorum: Number of acks (guaranteed copies) to wait for each entry, default: 0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bookkeeper-ensemble: Number of bookies to use for a topic, default: 0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bookkeeper-write-quorum: How many writes to make of each entry, default: 0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ml-mark-delete-max-rate: Throttling rate of mark-delete operation (0 means no throttle), default: 0.0"))),(0,l.kt)("h6",{id:"cli-5"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces set-persistence --bookkeeper-ack-quorum 2 --bookkeeper-ensemble 3 --bookkeeper-write-quorum 2 --ml-mark-delete-max-rate 0 test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nN/A\n\n")),(0,l.kt)("h6",{id:"rest-6"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|POST|/admin/v2/namespaces/:tenant/:namespace/persistence|operation/setPersistence?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-9"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setPersistence(namespace,new PersistencePolicies(bookkeeperEnsemble, bookkeeperWriteQuorum,bookkeeperAckQuorum,managedLedgerMaxMarkDeleteRate))\n\n")),(0,l.kt)("h4",{id:"get-persistence-policies"},"get persistence policies"),(0,l.kt)("p",null,"It shows configured persistence policies of a given namespace."),(0,l.kt)("h6",{id:"cli-6"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces get-persistence test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "bookkeeperEnsemble": 3,\n  "bookkeeperWriteQuorum": 2,\n  "bookkeeperAckQuorum": 2,\n  "managedLedgerMaxMarkDeleteRate": 0\n}\n\n')),(0,l.kt)("h6",{id:"rest-7"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|GET|/admin/v2/namespaces/:tenant/:namespace/persistence|operation/getPersistence?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-10"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getPersistence(namespace)\n\n")),(0,l.kt)("h4",{id:"unload-namespace-bundle"},"unload namespace bundle"),(0,l.kt)("p",null,"Namespace bundle is a virtual group of topics which belong to same namespace. If broker gets overloaded with number of bundles then this command can help to unload heavy bundle from that broker, so it can be served by some other less loaded broker. Namespace bundle is defined with it\u2019s start and end range such as 0x00000000 and 0xffffffff."),(0,l.kt)("h6",{id:"cli-7"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces unload --bundle 0x00000000_0xffffffff test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nN/A\n\n")),(0,l.kt)("h6",{id:"rest-8"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|PUT|/admin/v2/namespaces/:tenant/:namespace/{bundle}/unload|operation/unloadNamespaceBundle?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-11"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().unloadNamespaceBundle(namespace, bundle)\n\n")),(0,l.kt)("h4",{id:"set-message-ttl"},"set message-ttl"),(0,l.kt)("p",null,"It configures message\u2019s time to live (in seconds) duration."),(0,l.kt)("h6",{id:"cli-8"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces set-message-ttl --messageTTL 100 test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nN/A\n\n")),(0,l.kt)("h6",{id:"rest-9"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|POST|/admin/v2/namespaces/:tenant/:namespace/messageTTL|operation/setNamespaceMessageTTL?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-12"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setNamespaceMessageTTL(namespace, messageTTL)\n\n")),(0,l.kt)("h4",{id:"get-message-ttl"},"get message-ttl"),(0,l.kt)("p",null,"It gives a message ttl of configured namespace."),(0,l.kt)("h6",{id:"cli-9"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces get-message-ttl test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n100\n\n")),(0,l.kt)("h6",{id:"rest-10"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|GET|/admin/v2/namespaces/:tenant/:namespace/messageTTL|operation/getNamespaceMessageTTL?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-13"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getNamespaceMessageTTL(namespace)\n\n")),(0,l.kt)("h4",{id:"split-bundle"},"split bundle"),(0,l.kt)("p",null,"Each namespace bundle can contain multiple topics and each bundle can be served by only one broker. If bundle gets heavy with multiple live topics in it then it creates load on that broker and in order to resolve this issue, admin can split bundle using this command."),(0,l.kt)("h6",{id:"cli-10"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces split-bundle --bundle 0x00000000_0xffffffff test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nN/A\n\n")),(0,l.kt)("h6",{id:"rest-11"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|PUT|/admin/v2/namespaces/:tenant/:namespace/{bundle}/split|operation/splitNamespaceBundle?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-14"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().splitNamespaceBundle(namespace, bundle)\n\n")),(0,l.kt)("h4",{id:"clear-backlog"},"clear backlog"),(0,l.kt)("p",null,"It clears all message backlog for all the topics those belong to specific namespace. You can also clear backlog for a specific subscription as well."),(0,l.kt)("h6",{id:"cli-11"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces clear-backlog --sub my-subscription test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nN/A\n\n")),(0,l.kt)("h6",{id:"rest-12"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|POST|/admin/v2/namespaces/:tenant/:namespace/clearBacklog|operation?version=2.3.0/clearNamespaceBacklogForSubscription}\n\n")),(0,l.kt)("h6",{id:"java-15"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().clearNamespaceBacklogForSubscription(namespace, subscription)\n\n")),(0,l.kt)("h4",{id:"clear-bundle-backlog"},"clear bundle backlog"),(0,l.kt)("p",null,"It clears all message backlog for all the topics those belong to specific NamespaceBundle. You can also clear backlog for a specific subscription as well."),(0,l.kt)("h6",{id:"cli-12"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces clear-backlog  --bundle 0x00000000_0xffffffff  --sub my-subscription test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nN/A\n\n")),(0,l.kt)("h6",{id:"rest-13"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|POST|/admin/v2/namespaces/:tenant/:namespace/{bundle}/clearBacklog|operation?version=2.3.0/clearNamespaceBundleBacklogForSubscription}\n\n")),(0,l.kt)("h6",{id:"java-16"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().clearNamespaceBundleBacklogForSubscription(namespace, bundle, subscription)\n\n")),(0,l.kt)("h4",{id:"set-retention"},"set retention"),(0,l.kt)("p",null,"Each namespace contains multiple topics and each topic\u2019s retention size (storage size) should not exceed to a specific threshold or it should be stored till certain time duration. This command helps to configure retention size and time of topics in a given namespace."),(0,l.kt)("h6",{id:"cli-13"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin set-retention --size 10 --time 100 test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\nN/A\n\n")),(0,l.kt)("h6",{id:"rest-14"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|POST|/admin/v2/namespaces/:tenant/:namespace/retention|operation/setRetention?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-17"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setRetention(namespace, new RetentionPolicies(retentionTimeInMin, retentionSizeInMB))\n\n")),(0,l.kt)("h4",{id:"get-retention"},"get retention"),(0,l.kt)("p",null,"It shows retention information of a given namespace."),(0,l.kt)("h6",{id:"cli-14"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces get-retention test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "retentionTimeInMinutes": 10,\n  "retentionSizeInMB": 100\n}\n\n')),(0,l.kt)("h6",{id:"rest-15"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|GET|/admin/v2/namespaces/:tenant/:namespace/retention|operation/getRetention?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-18"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getRetention(namespace)\n\n")),(0,l.kt)("h4",{id:"set-dispatch-throttling"},"set dispatch throttling"),(0,l.kt)("p",null,"It sets message dispatch rate for all the topics under a given namespace.\nDispatch rate can be restricted by number of message per X seconds (",(0,l.kt)("inlineCode",{parentName:"p"},"msg-dispatch-rate"),") or by number of message-bytes per X second (",(0,l.kt)("inlineCode",{parentName:"p"},"byte-dispatch-rate"),").\ndispatch rate is in second and it can be configured with ",(0,l.kt)("inlineCode",{parentName:"p"},"dispatch-rate-period"),". Default value of ",(0,l.kt)("inlineCode",{parentName:"p"},"msg-dispatch-rate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"byte-dispatch-rate")," is -1 which\ndisables the throttling."),(0,l.kt)("h6",{id:"cli-15"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces set-dispatch-rate test-tenant/ns1 \\\n  --msg-dispatch-rate 1000 \\\n  --byte-dispatch-rate 1048576 \\\n  --dispatch-rate-period 1\n\n")),(0,l.kt)("h6",{id:"rest-16"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|POST|/admin/v2/namespaces/:tenant/:namespace/dispatchRate|operation/setDispatchRate?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-19"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().setDispatchRate(namespace, 1000, 1048576, 1)\n\n")),(0,l.kt)("h4",{id:"get-configured-message-rate"},"get configured message-rate"),(0,l.kt)("p",null,"It shows configured message-rate for the namespace (topics under this namespace can dispatch this many messages per second)"),(0,l.kt)("h6",{id:"cli-16"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n$ pulsar-admin namespaces get-dispatch-rate test-tenant/ns1\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "dispatchThrottlingRatePerTopicInMsg" : 1000,\n  "dispatchThrottlingRatePerTopicInByte" : 1048576,\n  "ratePeriodInSecond" : 1\n}\n\n')),(0,l.kt)("h6",{id:"rest-17"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|GET|/admin/v2/namespaces/:tenant/:namespace/dispatchRate|operation/getDispatchRate?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-20"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().getDispatchRate(namespace)\n\n")),(0,l.kt)("h3",{id:"namespace-isolation"},"Namespace isolation"),(0,l.kt)("p",null,"Coming soon."),(0,l.kt)("h3",{id:"unloading-from-a-broker"},"Unloading from a broker"),(0,l.kt)("p",null,"You can unload a namespace, or a ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#namespace-bundle"},"namespace bundle"),", from the Pulsar ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#broker"},"broker")," that is currently responsible for it."),(0,l.kt)("h4",{id:"pulsar-admin-4"},"pulsar-admin"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#unload"},(0,l.kt)("inlineCode",{parentName:"a"},"unload"))," subcommand of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin#namespaces"},(0,l.kt)("inlineCode",{parentName:"a"},"namespaces"))," command."),(0,l.kt)("h6",{id:"cli-17"},"CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces unload my-tenant/my-ns\n\n")),(0,l.kt)("h6",{id:"rest-18"},"REST"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n{@inject: endpoint|PUT|/admin/v2/namespaces/:tenant/:namespace/unload|operation/unloadNamespace?version=2.3.0}\n\n")),(0,l.kt)("h6",{id:"java-21"},"Java"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nadmin.namespaces().unload(namespace)\n\n")))}d.isMDXComponent=!0}}]);