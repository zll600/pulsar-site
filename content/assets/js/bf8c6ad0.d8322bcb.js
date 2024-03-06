"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89583],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var s=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=s.createContext({}),p=function(e){var n=s.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return s.createElement(a.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,y=c["".concat(a,".").concat(m)]||c[m]||d[m]||i;return t?s.createElement(y,o(o({ref:n},u),{},{components:t})):s.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var s=t(58168),r=(t(96540),t(15680));const i={id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs",original_id:"sql-rest-api"},o=void 0,l={unversionedId:"sql-rest-api",id:"version-2.7.2/sql-rest-api",title:"Pulsar SQL REST APIs",description:"This section lists resources that make up the Presto REST API v1.",source:"@site/versioned_docs/version-2.7.2/sql-rest-api.md",sourceDirName:".",slug:"/sql-rest-api",permalink:"/docs/2.7.2/sql-rest-api",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.2/sql-rest-api.md",tags:[],version:"2.7.2",frontMatter:{id:"sql-rest-api",title:"Pulsar SQL REST APIs",sidebar_label:"REST APIs",original_id:"sql-rest-api"},sidebar:"version-2.7.2/docsSidebar",previous:{title:"Configuration and deployment",permalink:"/docs/2.7.2/sql-deployment-configurations"},next:{title:"Overview",permalink:"/docs/2.7.2/tiered-storage-overview"}},a={},p=[{value:"Request for Presto services",id:"request-for-presto-services",level:2},{value:"Schema",id:"schema",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,s.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This section lists resources that make up the Presto REST API v1."),(0,r.yg)("h2",{id:"request-for-presto-services"},"Request for Presto services"),(0,r.yg)("p",null,"All requests for Presto services should use Presto REST API v1 version."),(0,r.yg)("p",null,"To request services, use explicit URL ",(0,r.yg)("inlineCode",{parentName:"p"},"http://presto.service:8081/v1"),". You need to update ",(0,r.yg)("inlineCode",{parentName:"p"},"presto.service:8081")," with your real Presto address before sending requests."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST")," requests require the ",(0,r.yg)("inlineCode",{parentName:"p"},"X-Presto-User")," header. If you use authentication, you must use the same ",(0,r.yg)("inlineCode",{parentName:"p"},"username")," that is specified in the authentication configuration. If you do not use authentication, you can specify anything for ",(0,r.yg)("inlineCode",{parentName:"p"},"username"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\nX-Presto-User: username\n\n")),(0,r.yg)("p",null,"For more information about headers, refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/trinodb/trino"},"PrestoHeaders"),"."),(0,r.yg)("h2",{id:"schema"},"Schema"),(0,r.yg)("p",null,"You can use statement in the HTTP body. All data is received as JSON document that might contain a ",(0,r.yg)("inlineCode",{parentName:"p"},"nextUri")," link. If the received JSON document contains a ",(0,r.yg)("inlineCode",{parentName:"p"},"nextUri")," link, the request continues with the ",(0,r.yg)("inlineCode",{parentName:"p"},"nextUri")," link until the received data does not contain a ",(0,r.yg)("inlineCode",{parentName:"p"},"nextUri")," link. If no error is returned, the query completes successfully. If an ",(0,r.yg)("inlineCode",{parentName:"p"},"error")," field is displayed in ",(0,r.yg)("inlineCode",{parentName:"p"},"stats"),", it means the query fails."),(0,r.yg)("p",null,"The following is an example of ",(0,r.yg)("inlineCode",{parentName:"p"},"show catalogs"),". The query continues until the received JSON document does not contain a ",(0,r.yg)("inlineCode",{parentName:"p"},"nextUri")," link. Since no ",(0,r.yg)("inlineCode",{parentName:"p"},"error")," is displayed in ",(0,r.yg)("inlineCode",{parentName:"p"},"stats"),", it means that the query completes successfully."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-powershell"},'\n\u279c  ~ curl --header "X-Presto-User: test-user" --request POST --data \'show catalogs\' http://localhost:8081/v1/statement\n{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "stats" : {\n      "queued" : true,\n      "nodes" : 0,\n      "userTimeMillis" : 0,\n      "cpuTimeMillis" : 0,\n      "wallTimeMillis" : 0,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "runningSplits" : 0,\n      "queuedTimeMillis" : 0,\n      "queuedSplits" : 0,\n      "completedSplits" : 0,\n      "totalSplits" : 0,\n      "scheduled" : false,\n      "peakMemoryBytes" : 0,\n      "state" : "QUEUED",\n      "elapsedTimeMillis" : 0\n   },\n   "id" : "20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1"\n}\n\n\u279c  ~ curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/1\n{\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "nextUri" : "http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2",\n   "id" : "20191113_033653_00006_dg6hb",\n   "stats" : {\n      "state" : "PLANNING",\n      "totalSplits" : 0,\n      "queued" : false,\n      "userTimeMillis" : 0,\n      "completedSplits" : 0,\n      "scheduled" : false,\n      "wallTimeMillis" : 0,\n      "runningSplits" : 0,\n      "queuedSplits" : 0,\n      "cpuTimeMillis" : 0,\n      "processedRows" : 0,\n      "processedBytes" : 0,\n      "nodes" : 0,\n      "queuedTimeMillis" : 1,\n      "elapsedTimeMillis" : 2,\n      "peakMemoryBytes" : 0\n   }\n}\n\n\u279c  ~ curl http://localhost:8081/v1/statement/20191113_033653_00006_dg6hb/2\n{\n   "id" : "20191113_033653_00006_dg6hb",\n   "data" : [\n      [\n         "pulsar"\n      ],\n      [\n         "system"\n      ]\n   ],\n   "infoUri" : "http://localhost:8081/ui/query.html?20191113_033653_00006_dg6hb",\n   "columns" : [\n      {\n         "typeSignature" : {\n            "rawType" : "varchar",\n            "arguments" : [\n               {\n                  "kind" : "LONG_LITERAL",\n                  "value" : 6\n               }\n            ],\n            "literalArguments" : [],\n            "typeArguments" : []\n         },\n         "name" : "Catalog",\n         "type" : "varchar(6)"\n      }\n   ],\n   "stats" : {\n      "wallTimeMillis" : 104,\n      "scheduled" : true,\n      "userTimeMillis" : 14,\n      "progressPercentage" : 100,\n      "totalSplits" : 19,\n      "nodes" : 1,\n      "cpuTimeMillis" : 16,\n      "queued" : false,\n      "queuedTimeMillis" : 1,\n      "state" : "FINISHED",\n      "peakMemoryBytes" : 0,\n      "elapsedTimeMillis" : 111,\n      "processedBytes" : 0,\n      "processedRows" : 0,\n      "queuedSplits" : 0,\n      "rootStage" : {\n         "cpuTimeMillis" : 1,\n         "runningSplits" : 0,\n         "state" : "FINISHED",\n         "completedSplits" : 1,\n         "subStages" : [\n            {\n               "cpuTimeMillis" : 14,\n               "runningSplits" : 0,\n               "state" : "FINISHED",\n               "completedSplits" : 17,\n               "subStages" : [\n                  {\n                     "wallTimeMillis" : 7,\n                     "subStages" : [],\n                     "stageId" : "2",\n                     "done" : true,\n                     "nodes" : 1,\n                     "totalSplits" : 1,\n                     "processedBytes" : 22,\n                     "processedRows" : 2,\n                     "queuedSplits" : 0,\n                     "userTimeMillis" : 1,\n                     "cpuTimeMillis" : 1,\n                     "runningSplits" : 0,\n                     "state" : "FINISHED",\n                     "completedSplits" : 1\n                  }\n               ],\n               "wallTimeMillis" : 92,\n               "nodes" : 1,\n               "done" : true,\n               "stageId" : "1",\n               "userTimeMillis" : 12,\n               "processedRows" : 2,\n               "processedBytes" : 51,\n               "queuedSplits" : 0,\n               "totalSplits" : 17\n            }\n         ],\n         "wallTimeMillis" : 5,\n         "done" : true,\n         "nodes" : 1,\n         "stageId" : "0",\n         "userTimeMillis" : 1,\n         "processedRows" : 2,\n         "processedBytes" : 22,\n         "totalSplits" : 1,\n         "queuedSplits" : 0\n      },\n      "runningSplits" : 0,\n      "completedSplits" : 19\n   }\n}\n\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Since the response data is not in sync with the query state from the perspective of clients, you cannot rely on the response data to determine whether the query completes.")),(0,r.yg)("p",null,"For more information about Presto REST API, refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/prestosql/presto/wiki/HTTP-Protocol"},"Presto HTTP Protocol"),"."))}d.isMDXComponent=!0}}]);