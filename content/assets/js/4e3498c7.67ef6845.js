"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3036],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={id:"io-elasticsearch-sink",title:"ElasticSearch sink connector",sidebar_label:"ElasticSearch sink connector",original_id:"io-elasticsearch-sink"},i=void 0,s={unversionedId:"io-elasticsearch-sink",id:"version-2.7.5/io-elasticsearch-sink",title:"ElasticSearch sink connector",description:"The ElasticSearch sink connector pulls messages from Pulsar topics and persists the messages to indexes.",source:"@site/versioned_docs/version-2.7.5/io-elasticsearch-sink.md",sourceDirName:".",slug:"/io-elasticsearch-sink",permalink:"/docs/2.7.5/io-elasticsearch-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.5/io-elasticsearch-sink.md",tags:[],version:"2.7.5",frontMatter:{id:"io-elasticsearch-sink",title:"ElasticSearch sink connector",sidebar_label:"ElasticSearch sink connector",original_id:"io-elasticsearch-sink"}},o={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"For Elasticsearch After 6.2",id:"for-elasticsearch-after-62",level:4},{value:"For Elasticsearch Before 6.2",id:"for-elasticsearch-before-62",level:4},{value:"Usage",id:"usage",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ElasticSearch sink connector pulls messages from Pulsar topics and persists the messages to indexes."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration of the ElasticSearch sink connector has the following properties."),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"elasticSearchUrl")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The URL of elastic search cluster to which the connector connects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"indexName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The index name to which the connector writes messages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"typeName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'"_doc"'),(0,r.kt)("td",{parentName:"tr",align:null},"The type name to which the connector writes messages to. ",(0,r.kt)("br",null),(0,r.kt)("br",null),' The value should be set explicitly to a valid type name other than "_doc" for Elasticsearch version before 6.2, and left to default otherwise.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"indexNumberOfShards")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of shards of the index.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"indexNumberOfReplicas")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of replicas of the index.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"username")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The username used by the connector to connect to the elastic search cluster. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"td"},"username")," is set, then ",(0,r.kt)("inlineCode",{parentName:"td"},"password")," should also be provided.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.kt)("td",{parentName:"tr",align:null},"The password used by the connector to connect to the elastic search cluster. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"td"},"username")," is set, then ",(0,r.kt)("inlineCode",{parentName:"td"},"password")," should also be provided.")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Before using the ElasticSearch sink connector, you need to create a configuration file through one of the following methods."),(0,r.kt)("h3",{id:"configuration-1"},"Configuration"),(0,r.kt)("h4",{id:"for-elasticsearch-after-62"},"For Elasticsearch After 6.2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "elasticSearchUrl": "http://localhost:9200",\n    "indexName": "my_index",\n    "username": "scooby",\n    "password": "doobie"\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    elasticSearchUrl: "http://localhost:9200"\n    indexName: "my_index"\n    username: "scooby"\n    password: "doobie"\n\n')))),(0,r.kt)("h4",{id:"for-elasticsearch-before-62"},"For Elasticsearch Before 6.2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSON "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "elasticSearchUrl": "http://localhost:9200",\n    "indexName": "my_index",\n    "typeName": "doc",\n    "username": "scooby",\n    "password": "doobie"\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"YAML"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    elasticSearchUrl: "http://localhost:9200"\n    indexName: "my_index"\n    typeName: "doc"\n    username: "scooby"\n    password: "doobie"\n\n')))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a single node Elasticsearch cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ docker run -p 9200:9200 -p 9300:9300 \\\n    -e "discovery.type=single-node" \\\n    docker.elastic.co/elasticsearch/elasticsearch:7.5.1\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a Pulsar service locally in standalone mode."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar standalone\n\n")),(0,r.kt)("p",{parentName:"li"},"Make sure the NAR file is available at ",(0,r.kt)("inlineCode",{parentName:"p"},"connectors/pulsar-io-elastic-search-2.7.5.nar"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the Pulsar Elasticsearch connector in local run mode using one of the following methods."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"JSON")," configuration as shown previously. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-admin sinks localrun \\\n    --archive connectors/pulsar-io-elastic-search-2.7.5.nar \\\n    --tenant public \\\n    --namespace default \\\n    --name elasticsearch-test-sink \\\n    --sink-config \'{"elasticSearchUrl":"http://localhost:9200","indexName": "my_index","username": "scooby","password": "doobie"}\' \\\n    --inputs elasticsearch_test\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"YAML")," configuration file as shown previously."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sinks localrun \\\n    --archive connectors/pulsar-io-elastic-search-2.7.5.nar \\\n    --tenant public \\\n    --namespace default \\\n    --name elasticsearch-test-sink \\\n    --sink-config-file elasticsearch-sink.yml \\\n    --inputs elasticsearch_test\n\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Publish records to the topic."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ bin/pulsar-client produce elasticsearch_test --messages "{\\"a\\":1}"\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check documents in Elasticsearch."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"refresh the index"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n    $ curl -s http://localhost:9200/my_index/_refresh\n\n")))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"search documents"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n    $ curl -s http://localhost:9200/my_index/_search\n\n")),(0,r.kt)("p",{parentName:"li"},"  You can see the record that published earlier has been successfully written into Elasticsearch."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{"took":2,"timed_out":false,"_shards":{"total":1,"successful":1,"skipped":0,"failed":0},"hits":{"total":{"value":1,"relation":"eq"},"max_score":1.0,"hits":[{"_index":"my_index","_type":"_doc","_id":"FSxemm8BLjG_iC0EeTYJ","_score":1.0,"_source":{"a":1}}]}}\n\n')))))))}m.isMDXComponent=!0}}]);