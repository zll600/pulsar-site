"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=s.createContext({}),p=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(a.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(a,".").concat(m)]||c[m]||d[m]||i;return n?s.createElement(h,o(o({ref:t},u),{},{components:n})):s.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=n(87462),r=(n(67294),n(3905));const i={id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs",original_id:"sql-rest-api"},o=void 0,l={unversionedId:"sql-rest-api",id:"version-2.6.2/sql-rest-api",title:"Pulsar SQL REST APIs",description:"This section lists resources that make up the Presto REST API v1.",source:"@site/versioned_docs/version-2.6.2/sql-rest-api.md",sourceDirName:".",slug:"/sql-rest-api",permalink:"/docs/2.6.2/sql-rest-api",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.2/sql-rest-api.md",tags:[],version:"2.6.2",frontMatter:{id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs",original_id:"sql-rest-api"},sidebar:"version-2.6.2/docsSidebar",previous:{title:"Configuration and deployment",permalink:"/docs/2.6.2/sql-deployment-configurations"},next:{title:"Overview",permalink:"/docs/2.6.2/helm-overview"}},a={},p=[{value:"Request for Presto services",id:"request-for-presto-services",level:2},{value:"Schema",id:"schema",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section lists resources that make up the Presto REST API v1. "),(0,r.kt)("h2",{id:"request-for-presto-services"},"Request for Presto services"),(0,r.kt)("p",null,"All requests for Presto services should use Presto REST API v1 version. "),(0,r.kt)("p",null,"To request services, use explicit URL ",(0,r.kt)("inlineCode",{parentName:"p"},"http://presto.service:8081/v1"),". You need to update ",(0,r.kt)("inlineCode",{parentName:"p"},"presto.service:8081")," with your real Presto address before sending requests."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST")," requests require the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Presto-User")," header. If you use authentication, you must use the same ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," that is specified in the authentication configuration. If you do not use authentication, you can specify anything for ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nX-Presto-User: username\n\n")),(0,r.kt)("p",null,"For more information about headers, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trinodb/trino"},"PrestoHeaders"),"."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"You can use statement in the HTTP body. All data is received as JSON document that might contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"nextUri")," link. If the received JSON document contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"nextUri")," link, the request continues with the ",(0,r.kt)("inlineCode",{parentName:"p"},"nextUri")," link until the received data does not contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"nextUri")," link. If no error is returned, the query completes successfully. If an ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," field is displayed in ",(0,r.kt)("inlineCode",{parentName:"p"},"stats"),", it means the query fails."),(0,r.kt)("p",null,"The following is an example of ",(0,r.kt)("inlineCode",{parentName:"p"},"show catalogs"),". The query continues until the received JSON document does not contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"nextUri")," link. Since no ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," is displayed in ",(0,r.kt)("inlineCode",{parentName:"p"},"stats"),", it means that the query completes successfully."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'\n\u279c  ~ curl --header "X-Presto-User: test-user" --request POST --data \'show catalogs\' http://localhost:8081/v1/statement\n{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "stats" : {\n      "queued" : true,\n      "nodes" : 0,\n      "userTimeMillis" : 0,\n      "cpuTimeMillis" : 0,\n      "wallTimeMillis" : 0,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "runningSplits" : 0,\n      "queuedTimeMillis" : 0,\n      "queuedSplits" : 0,\n      "completedSplits" : 0,\n      "totalSplits" : 0,\n      "scheduled" : false,\n      "peakMemoryBytes" : 0,\n      "state" : "QUEUED",\n      "elapsedTimeMillis" : 0\n   },\n   "id" : "20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1"\n}\n\n\u279c  ~ curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1\n{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2",\n   "id" : "20191113_033653_00006_dg6hb",\n   "stats" : {\n      "state" : "PLANNING",\n      "totalSplits" : 0,\n      "queued" : false,\n      "userTimeMillis" : 0,\n      "completedSplits" : 0,\n      "scheduled" : false,\n      "wallTimeMillis" : 0,\n      "runningSplits" : 0,\n      "queuedSplits" : 0,\n      "cpuTimeMillis" : 0,\n      "processedRows" : 0,\n      "processedBytes" : 0,\n      "nodes" : 0,\n      "queuedTimeMillis" : 1,\n      "elapsedTimeMillis" : 2,\n      "peakMemoryBytes" : 0\n   }\n}\n\n\u279c  ~ curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2\n{\n   "id" : "20191113_033653_00006_dg6hb",\n   "data" : [\n      [\n         "pulsar"\n      ],\n      [\n         "system"\n      ]\n   ],\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "columns" : [\n      {\n         "typeSignature" : {\n            "rawType" : "varchar",\n            "arguments" : [\n               {\n                  "kind" : "LONG_LITERAL",\n                  "value" : 6\n               }\n            ],\n            "literalArguments" : [],\n            "typeArguments" : []\n         },\n         "name" : "Catalog",\n         "type" : "varchar(6)"\n      }\n   ],\n   "stats" : {\n      "wallTimeMillis" : 104,\n      "scheduled" : true,\n      "userTimeMillis" : 14,\n      "progressPercentage" : 100,\n      "totalSplits" : 19,\n      "nodes" : 1,\n      "cpuTimeMillis" : 16,\n      "queued" : false,\n      "queuedTimeMillis" : 1,\n      "state" : "FINISHED",\n      "peakMemoryBytes" : 0,\n      "elapsedTimeMillis" : 111,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "queuedSplits" : 0,\n      "rootStage" : {\n         "cpuTimeMillis" : 1,\n         "runningSplits" : 0,\n         "state" : "FINISHED",\n         "completedSplits" : 1,\n         "subStages" : [\n            {\n               "cpuTimeMillis" : 14,\n               "runningSplits" : 0,\n               "state" : "FINISHED",\n               "completedSplits" : 17,\n               "subStages" : [\n                  {\n                     "wallTimeMillis" : 7,\n                     "subStages" : [],\n                     "stageId" : "2",\n                     "done" : true,\n                     "nodes" : 1,\n                     "totalSplits" : 1,\n                     "processedBytes" : 22,\n                     "processedRows" : 2,\n                     "queuedSplits" : 0,\n                     "userTimeMillis" : 1,\n                     "cpuTimeMillis" : 1,\n                     "runningSplits" : 0,\n                     "state" : "FINISHED",\n                     "completedSplits" : 1\n                  }\n               ],\n               "wallTimeMillis" : 92,\n               "nodes" : 1,\n               "done" : true,\n               "stageId" : "1",\n               "userTimeMillis" : 12,\n               "processedRows" : 2,\n               "processedBytes" : 51,\n               "queuedSplits" : 0,\n               "totalSplits" : 17\n            }\n         ],\n         "wallTimeMillis" : 5,\n         "done" : true,\n         "nodes" : 1,\n         "stageId" : "0",\n         "userTimeMillis" : 1,\n         "processedRows" : 2,\n         "processedBytes" : 22,\n         "totalSplits" : 1,\n         "queuedSplits" : 0\n      },\n      "runningSplits" : 0,\n      "completedSplits" : 19\n   }\n}\n\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Since the response data is not in sync with the query state from the perspective of clients, you cannot rely on the response data to determine whether the query completes.")),(0,r.kt)("p",null,"For more information about Presto REST API, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prestosql/presto/wiki/HTTP-Protocol"},"Presto HTTP Protocol"),"."))}c.isMDXComponent=!0}}]);