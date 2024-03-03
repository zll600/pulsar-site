"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[45734],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>u});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),p=s(a),y=l,u=p["".concat(o,".").concat(y)]||p[y]||m[y]||r;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=y;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[p]="string"==typeof e?e:l,i[1]=g;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},97720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>g,toc:()=>s});var n=a(58168),l=(a(96540),a(15680));const r={id:"io-elasticsearch-sink",title:"Elasticsearch sink connector",sidebar_label:"Elasticsearch sink connector"},i=void 0,g={unversionedId:"io-elasticsearch-sink",id:"io-elasticsearch-sink",title:"Elasticsearch sink connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/docs/io-elasticsearch-sink.md",sourceDirName:".",slug:"/io-elasticsearch-sink",permalink:"/docs/next/io-elasticsearch-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/io-elasticsearch-sink.md",tags:[],version:"current",frontMatter:{id:"io-elasticsearch-sink",title:"Elasticsearch sink connector",sidebar_label:"Elasticsearch sink connector"}},o={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Feature",id:"feature",level:2},{value:"Handle data",id:"handle-data",level:3},{value:"Map multiple indexes",id:"map-multiple-indexes",level:3},{value:"Enable bulk writes",id:"enable-bulk-writes",level:3},{value:"Enable secure connections via TLS",id:"enable-secure-connections-via-tls",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Definition of ElasticSearchSslConfig structure:",id:"definition-of-elasticsearchsslconfig-structure",level:3},{value:"Example",id:"example",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"For Elasticsearch After 6.2",id:"for-elasticsearch-after-62",level:4},{value:"For Elasticsearch Before 6.2",id:"for-elasticsearch-before-62",level:4},{value:"Usage",id:"usage",level:3}],d={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,l.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,l.yg)("a",{parentName:"p",href:"pathname:///download"},"download page"),".")),(0,l.yg)("p",null,"The Elasticsearch sink connector pulls messages from Pulsar topics and persists the messages to indexes."),(0,l.yg)("h2",{id:"requirements"},"Requirements"),(0,l.yg)("p",null,"To deploy an Elasticsearch sink connector, the following are required:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Elasticsearch 7 (Elasticsearch 8 will be supported in the future)"),(0,l.yg)("li",{parentName:"ul"},"OpenSearch 1.x")),(0,l.yg)("h2",{id:"feature"},"Feature"),(0,l.yg)("h3",{id:"handle-data"},"Handle data"),(0,l.yg)("p",null,"Since Pulsar 2.9.0, the Elasticsearch sink connector has the following ways of working. You can choose one of them."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Raw processing"),(0,l.yg)("td",{parentName:"tr",align:null},"The sink reads from topics and passes the raw content to Elasticsearch. ",(0,l.yg)("br",null),(0,l.yg)("br",null)," This is the ",(0,l.yg)("strong",{parentName:"td"},"default")," behavior. ",(0,l.yg)("br",null),(0,l.yg)("br",null)," Raw processing was already available ",(0,l.yg)("strong",{parentName:"td"},"in Pulsar 2.8.x"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Schema aware"),(0,l.yg)("td",{parentName:"tr",align:null},"The sink uses the schema and handles AVRO, JSON, and KeyValue schema types while mapping the content to the Elasticsearch document.",(0,l.yg)("br",null),(0,l.yg)("br",null)," If you set ",(0,l.yg)("inlineCode",{parentName:"td"},"schemaEnable")," to ",(0,l.yg)("inlineCode",{parentName:"td"},"true"),", the sink interprets the contents of the message and you can define a ",(0,l.yg)("strong",{parentName:"td"},"primary key")," that in turn used as the special ",(0,l.yg)("inlineCode",{parentName:"td"},"_id")," field on Elasticsearch.")))),(0,l.yg)("br",null),(0,l.yg)("br",null)," This allows you to perform `UPDATE`, `INSERT`, and `DELETE` operations to Elasticsearch driven by the logical primary key of the message.",(0,l.yg)("br",null),(0,l.yg)("br",null)," This is very useful in a typical Change Data Capture scenario in which you follow the changes on your database, write them to Pulsar (using the Debezium adapter for instance), and then you write to Elasticsearch.",(0,l.yg)("br",null),(0,l.yg)("br",null)," You configure the mapping of the primary key using the `primaryFields` configuration entry.",(0,l.yg)("br",null),(0,l.yg)("br",null),"The `DELETE` operation can be performed when the primary key is not empty and the remaining value is empty. Use the `nullValueAction` to configure this behavior. The default configuration simply ignores such empty values.",(0,l.yg)("h3",{id:"map-multiple-indexes"},"Map multiple indexes"),(0,l.yg)("p",null,"Since Pulsar 2.9.0, the ",(0,l.yg)("inlineCode",{parentName:"p"},"indexName")," property is no more required. If you omit it, the sink writes to an index name after the Pulsar topic name."),(0,l.yg)("h3",{id:"enable-bulk-writes"},"Enable bulk writes"),(0,l.yg)("p",null,"Since Pulsar 2.9.0, you can use bulk writes by setting the ",(0,l.yg)("inlineCode",{parentName:"p"},"bulkEnabled")," property to ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("h3",{id:"enable-secure-connections-via-tls"},"Enable secure connections via TLS"),(0,l.yg)("p",null,"Since Pulsar 2.9.0, you can enable secure connections with TLS."),(0,l.yg)("h2",{id:"configuration"},"Configuration"),(0,l.yg)("p",null,"The configuration of the Elasticsearch sink connector has the following properties."),(0,l.yg)("h3",{id:"property"},"Property"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"elasticSearchUrl")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The URL of elastic search cluster to which the connector connects.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"indexName")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The index name to which the connector writes messages. The default value is the topic name. It accepts date formats in the name to support event time based index with the pattern ",(0,l.yg)("inlineCode",{parentName:"td"},"%{+<date-format>}"),". For example, suppose the event time of the record is 1645182000000L, the indexName is ",(0,l.yg)("inlineCode",{parentName:"td"},"logs-%{+yyyy-MM-dd}"),", then the formatted index name would be ",(0,l.yg)("inlineCode",{parentName:"td"},"logs-2022-02-18"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"schemaEnable")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Turn on the Schema Aware mode.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"createIndexIfNeeded")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Manage index if missing.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"maxRetries")),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum number of retries for elasticsearch requests. Use -1 to disable it.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"retryBackoffInMs")),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"The base time to wait when retrying an Elasticsearch request (in milliseconds).")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"maxRetryTimeInSec")),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"86400"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum retry time interval in seconds for retrying an elasticsearch request.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"bulkEnabled")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Enable the elasticsearch bulk processor to flush write requests based on the number or size of requests, or after a given period.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"bulkActions")),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"1000"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum number of actions per elasticsearch bulk request. Use -1 to disable it.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"bulkSizeInMb")),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"5"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum size in megabytes of elasticsearch bulk requests. Use -1 to disable it.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"bulkConcurrentRequests")),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum number of in flight elasticsearch bulk requests. The default 0 allows the execution of a single request. A value of 1 means 1 concurrent request is allowed to be executed while accumulating new bulk requests.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"bulkFlushIntervalInMs")),(0,l.yg)("td",{parentName:"tr",align:null},"Long"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"1000"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum period of time to wait for flushing pending writes when bulk writes are enabled. -1 or zero means the scheduled flushing is disabled.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"compressionEnabled")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Enable elasticsearch request compression.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"connectTimeoutInMs")),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"5000"),(0,l.yg)("td",{parentName:"tr",align:null},"The elasticsearch client connection timeout in milliseconds.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"connectionRequestTimeoutInMs")),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"1000"),(0,l.yg)("td",{parentName:"tr",align:null},"The time in milliseconds for getting a connection from the elasticsearch connection pool.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"connectionIdleTimeoutInMs")),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"5"),(0,l.yg)("td",{parentName:"tr",align:null},"Idle connection timeout to prevent a read timeout.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"keyIgnore")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to ignore the record key to build the Elasticsearch document ",(0,l.yg)("inlineCode",{parentName:"td"},"_id"),". If primaryFields is defined, the connector extract the primary fields from the payload to build the document ",(0,l.yg)("inlineCode",{parentName:"td"},"_id")," If no primaryFields are provided, elasticsearch auto generates a random document ",(0,l.yg)("inlineCode",{parentName:"td"},"_id"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"primaryFields")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'"id"'),(0,l.yg)("td",{parentName:"tr",align:null},"The comma separated ordered list of field names used to build the Elasticsearch document ",(0,l.yg)("inlineCode",{parentName:"td"},"_id")," from the record value. If this list is a singleton, the field is converted as a string. If this list has 2 or more fields, the generated ",(0,l.yg)("inlineCode",{parentName:"td"},"_id")," is a string representation of a JSON array of the field values.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"nullValueAction")),(0,l.yg)("td",{parentName:"tr",align:null},"enum (IGNORE,DELETE,FAIL)"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"IGNORE"),(0,l.yg)("td",{parentName:"tr",align:null},"How to handle records with null values, possible options are IGNORE, DELETE or FAIL. Default is IGNORE the message.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"malformedDocAction")),(0,l.yg)("td",{parentName:"tr",align:null},"enum (IGNORE,WARN,FAIL)"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"FAIL"),(0,l.yg)("td",{parentName:"tr",align:null},"How to handle elasticsearch rejected documents due to some malformation. Possible options are IGNORE, DELETE or FAIL. Default is FAIL the Elasticsearch document.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"stripNulls")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"If stripNulls is false, elasticsearch _source includes 'null' for empty fields (for example {\"foo\": null}), otherwise null fields are stripped.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"socketTimeoutInMs")),(0,l.yg)("td",{parentName:"tr",align:null},"Integer"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"60000"),(0,l.yg)("td",{parentName:"tr",align:null},"The socket timeout in milliseconds waiting to read the elasticsearch response.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"typeName")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'"_doc"'),(0,l.yg)("td",{parentName:"tr",align:null},"The type name to which the connector writes messages to. ",(0,l.yg)("br",null),(0,l.yg)("br",null),' The value should be set explicitly to a valid type name other than "_doc" for Elasticsearch version before 6.2, and left to default otherwise.')),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"indexNumberOfShards")),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"The number of shards of the index.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"indexNumberOfReplicas")),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"The number of replicas of the index.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"username")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The username used by the connector to connect to the elastic search cluster. ",(0,l.yg)("br",null),(0,l.yg)("br",null),"If ",(0,l.yg)("inlineCode",{parentName:"td"},"username")," is set, then ",(0,l.yg)("inlineCode",{parentName:"td"},"password")," should also be provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"password")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The password used by the connector to connect to the elastic search cluster. ",(0,l.yg)("br",null),(0,l.yg)("br",null),"If ",(0,l.yg)("inlineCode",{parentName:"td"},"username")," is set, then ",(0,l.yg)("inlineCode",{parentName:"td"},"password")," should also be provided.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"ssl")),(0,l.yg)("td",{parentName:"tr",align:null},"ElasticSearchSslConfig"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"Configuration for TLS encrypted communication")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"compatibilityMode")),(0,l.yg)("td",{parentName:"tr",align:null},"enum (AUTO,ELASTICSEARCH,ELASTICSEARCH_7,OPENSEARCH)"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"AUTO"),(0,l.yg)("td",{parentName:"tr",align:null},"Specify compatibility mode with the ElasticSearch cluster. ",(0,l.yg)("inlineCode",{parentName:"td"},"AUTO")," value will try to auto detect the correct compatibility mode to use. Use ",(0,l.yg)("inlineCode",{parentName:"td"},"ELASTICSEARCH_7")," if the target cluster is running ElasticSearch 7 or prior. Use ",(0,l.yg)("inlineCode",{parentName:"td"},"ELASTICSEARCH")," if the target cluster is running ElasticSearch 8 or higher. Use ",(0,l.yg)("inlineCode",{parentName:"td"},"OPENSEARCH")," if the target cluster is running OpenSearch.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"token")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The token used by the connector to connect to the ElasticSearch cluster. Only one between basic/token/apiKey authentication mode must be configured.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"apiKey")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The apiKey used by the connector to connect to the ElasticSearch cluster. Only one between basic/token/apiKey authentication mode must be configured.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"canonicalKeyFields")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to sort the key fields for JSON and Avro or not. If it is set to ",(0,l.yg)("inlineCode",{parentName:"td"},"true")," and the record key schema is ",(0,l.yg)("inlineCode",{parentName:"td"},"JSON")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"AVRO"),", the serialized object does not consider the order of properties.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"stripNonPrintableCharacters")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to remove all non-printable characters from the document or not. If it is set to true, all non-printable characters are removed from the document.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"idHashingAlgorithm")),(0,l.yg)("td",{parentName:"tr",align:null},"enum(NONE,SHA256,SHA512)"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"NONE"),(0,l.yg)("td",{parentName:"tr",align:null},"Hashing algorithm to use for the document id. This is useful in order to be compliant with the ElasticSearch _id hard limit of 512 bytes.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"conditionalIdHashing")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"This option only works if idHashingAlgorithm is set. If enabled, the hashing is performed only if the id is greater than 512 bytes otherwise the hashing is performed on each document in any case.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"copyKeyFields")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"If the message key schema is AVRO or JSON, the message key fields are copied into the ElasticSearch document.")))),(0,l.yg)("h3",{id:"definition-of-elasticsearchsslconfig-structure"},"Definition of ElasticSearchSslConfig structure:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"enabled")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Enable SSL/TLS.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"hostnameVerification")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether or not to validate node hostnames when using SSL.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"disableCertificateValidation")),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether or not to disable the node certificate validation. Changing this value is high insecure and you should not use it in production environment.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"truststorePath")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The path to the truststore file.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"truststorePassword")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"Truststore password.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"keystorePath")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"The path to the keystore file.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"keystorePassword")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"Keystore password.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"cipherSuites")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.yg)("td",{parentName:"tr",align:null},"SSL/TLS cipher suites.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"protocols")),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},'"TLSv1.2"'),(0,l.yg)("td",{parentName:"tr",align:null},"Comma separated list of enabled SSL/TLS protocols.")))),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("p",null,"Before using the Elasticsearch sink connector, you need to create a configuration file through one of the following methods."),(0,l.yg)("h3",{id:"configuration-1"},"Configuration"),(0,l.yg)("h4",{id:"for-elasticsearch-after-62"},"For Elasticsearch After 6.2"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"JSON"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "elasticSearchUrl": "http://localhost:9200",\n      "indexName": "my_index",\n      "username": "scooby",\n      "password": "doobie"\n   }\n}\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"YAML"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    elasticSearchUrl: "http://localhost:9200"\n    indexName: "my_index"\n    username: "scooby"\n    password: "doobie"\n')))),(0,l.yg)("h4",{id:"for-elasticsearch-before-62"},"For Elasticsearch Before 6.2"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"JSON"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "elasticSearchUrl": "http://localhost:9200",\n    "indexName": "my_index",\n    "typeName": "doc",\n    "username": "scooby",\n    "password": "doobie"\n}\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"YAML"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    elasticSearchUrl: "http://localhost:9200"\n    indexName: "my_index"\n    typeName: "doc"\n    username: "scooby"\n    password: "doobie"\n')))),(0,l.yg)("h3",{id:"usage"},"Usage"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Start a single node Elasticsearch cluster."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'docker run -p 9200:9200 -p 9300:9300 \\\n    -e "discovery.type=single-node" \\\n    docker.elastic.co/elasticsearch/elasticsearch:7.13.3\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Start a Pulsar service locally in standalone mode."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar standalone\n")),(0,l.yg)("p",{parentName:"li"},"Make sure the NAR file is available at ",(0,l.yg)("inlineCode",{parentName:"p"},"connectors/pulsar-io-elastic-search-3.2.0.nar"),".")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Start the Pulsar Elasticsearch connector in local run mode using one of the following methods."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Use the ",(0,l.yg)("strong",{parentName:"p"},"JSON")," configuration as shown previously."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin sinks localrun \\\n    --archive connectors/pulsar-io-elastic-search-3.2.0.nar \\\n    --tenant public \\\n    --namespace default \\\n    --name elasticsearch-test-sink \\\n    --sink-config \'{"elasticSearchUrl":"http://localhost:9200","indexName": "my_index","username": "scooby","password": "doobie"}\' \\\n    --inputs elasticsearch_test\n'))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Use the ",(0,l.yg)("strong",{parentName:"p"},"YAML")," configuration file as shown previously."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin sinks localrun \\\n    --archive connectors/pulsar-io-elastic-search-3.2.0.nar \\\n    --tenant public \\\n    --namespace default \\\n    --name elasticsearch-test-sink \\\n    --sink-config-file elasticsearch-sink.yml \\\n    --inputs elasticsearch_test\n"))))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Publish records to the topic."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce elasticsearch_test --messages "{\\"a\\":1}"\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Check documents in Elasticsearch."),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"refresh the index"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl -s http://localhost:9200/my_index/_refresh\n"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"search documents"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"curl -s http://localhost:9200/my_index/_search\n")),(0,l.yg)("p",{parentName:"li"},"  You can see the record that published earlier has been successfully written into Elasticsearch."),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{"took":2,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":1.0,"hits":[{"_index":"my_index","_type":"_doc","_id":"FSxemm8BLjG_iC0EeTYJ","_score":1.0,"_source":{"a":1}}]}}\n')))))))}m.isMDXComponent=!0}}]);