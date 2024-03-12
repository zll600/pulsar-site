"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1341],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,c=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(c,i(i({ref:t},g),{},{components:a})):n.createElement(c,i({ref:t},g))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76297:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const l={id:"io-rabbitmq-source",title:"RabbitMQ source connector",sidebar_label:"RabbitMQ source connector"},i=void 0,o={unversionedId:"io-rabbitmq-source",id:"version-2.11.x/io-rabbitmq-source",title:"RabbitMQ source connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/versioned_docs/version-2.11.x/io-rabbitmq-source.md",sourceDirName:".",slug:"/io-rabbitmq-source",permalink:"/docs/2.11.x/io-rabbitmq-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/io-rabbitmq-source.md",tags:[],version:"2.11.x",frontMatter:{id:"io-rabbitmq-source",title:"RabbitMQ source connector",sidebar_label:"RabbitMQ source connector"}},p={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2},{value:"Standalone mode",id:"standalone-mode",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Steps",id:"steps",level:4}],g={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,r.yg)("a",{parentName:"p",href:"pathname:///download"},"download page"),".")),(0,r.yg)("p",null,"The RabbitMQ source connector receives messages from RabbitMQ clusters and writes messages to Pulsar topics."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration of the RabbitMQ source connector has the following properties."),(0,r.yg)("h3",{id:"property"},"Property"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"connectionName")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"(empty string)"),(0,r.yg)("td",{parentName:"tr",align:null},"The connection name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"host")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"(empty string)"),(0,r.yg)("td",{parentName:"tr",align:null},"The RabbitMQ host.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"port")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"5672"),(0,r.yg)("td",{parentName:"tr",align:null},"The RabbitMQ port.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"virtualHost")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"/"),(0,r.yg)("td",{parentName:"tr",align:null},"The virtual host used to connect to RabbitMQ.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"username")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"guest"),(0,r.yg)("td",{parentName:"tr",align:null},"The username used to authenticate to RabbitMQ.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"password")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"guest"),(0,r.yg)("td",{parentName:"tr",align:null},"The password used to authenticate to RabbitMQ.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"queueName")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"(empty string)"),(0,r.yg)("td",{parentName:"tr",align:null},"The RabbitMQ queue name that messages should be read from or written to.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"requestedChannelMax")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The initially requested maximum channel number. ",(0,r.yg)("br",null)," 0 means unlimited.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"requestedFrameMax")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The initially requested maximum frame size in octets. ",(0,r.yg)("br",null)," 0 means unlimited.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"connectionTimeout")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"60000"),(0,r.yg)("td",{parentName:"tr",align:null},"The timeout of TCP connection establishment in milliseconds. ",(0,r.yg)("br",null)," 0 means infinite.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"handshakeTimeout")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"The timeout of AMQP0-9-1 protocol handshake in milliseconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"requestedHeartbeat")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"60"),(0,r.yg)("td",{parentName:"tr",align:null},"The requested heartbeat timeout in seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"prefetchCount")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum number of messages that the server delivers.",(0,r.yg)("br",null)," 0 means unlimited.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"prefetchGlobal")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the setting should be applied to the entire channel rather than each consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"passive")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the rabbitmq consumer should create its own queue or bind to an existing one.")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Before using the RabbitMQ source connector, you need to create a configuration file through one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "host": "localhost",\n      "port": "5672",\n      "virtualHost": "/",\n      "username": "guest",\n      "password": "guest",\n      "queueName": "test-queue",\n      "connectionName": "test-connection",\n      "requestedChannelMax": "0",\n      "requestedFrameMax": "0",\n      "connectionTimeout": "60000",\n      "handshakeTimeout": "10000",\n      "requestedHeartbeat": "60",\n      "prefetchCount": "0",\n      "prefetchGlobal": "false",\n      "passive": "false"\n   }\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    host: "localhost"\n    port: 5672\n    virtualHost: "/"\n    username: "guest"\n    password: "guest"\n    queueName: "test-queue"\n    connectionName: "test-connection"\n    requestedChannelMax: 0\n    requestedFrameMax: 0\n    connectionTimeout: 60000\n    handshakeTimeout: 10000\n    requestedHeartbeat: 60\n    prefetchCount: 0\n    prefetchGlobal: "false"\n    passive: "false"\n')))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"standalone-mode"},"Standalone mode"),(0,r.yg)("p",null,"This example describes how to use the RabbitMQ source connector to feed data from RabbitMQ and write data to Pulsar topics in the standalone mode."),(0,r.yg)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"There is a RabbitMQ server with some history messages in the queue.")),(0,r.yg)("h4",{id:"steps"},"Steps"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Get a Pulsar package and start Pulsar in standalone mode."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.11.4/apache-pulsar-2.11.4-bin.tar.gz\ntar xvfz apache-pulsar-2.11.4-bin.tar.gz\ncd apache-pulsar-2.11.4\nbin/pulsar standalone\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download the ",(0,r.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/"},"nar package")," corresponding to Pulsar's version and copy the following file to Pulsar's directory."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.11.4/connectors/pulsar-io-rabbitmq-2.11.4.nar\ncp pulsar-io-rabbitmq-2.11.4.nar ./connectors\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Messages published to a topic lacking at least one durable subscription are automatically marked as ready for deletion by default. We can set a retention policy at the namespace level to prevent this."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar-admin namespaces set-retention -s 100M -t 3d public/default\n")))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Prepare a configuration file with name is ",(0,r.yg)("em",{parentName:"p"},"rabbitmq-source-queue-name.yaml"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},' configs:\n   host: "localhost"\n   port: 5672\n   virtualHost: "/"\n   username: "guest"\n   password: "guest"\n   queueName: "test-queue"\n   connectionName: "test-connection"\n   requestedChannelMax: 0\n   requestedFrameMax: 0\n   connectionTimeout: 60000\n   handshakeTimeout: 10000\n   requestedHeartbeat: 60\n   prefetchCount: 0\n   prefetchGlobal: "false"\n   passive: "false"\n')),(0,r.yg)("p",{parentName:"li"},"Copy the configuration file to Pulsar\u2018s conf directory."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cp rabbitmq-source-queue-name.yaml ./conf\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open a new terminal window and start the connector in local run mode."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar-admin source localrun \\\n --source-config-file conf/rabbitmq-source-queue-name.yaml \\\n --archive connectors/pulsar-io-rabbitmq-2.11.4.nar \\\n --name rabbitmq-source \\\n --destination-topic-name pulsar-rabbitmq-test-topic \\\n --broker-service-url pulsar://{ip}:{port}\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open a new terminal window and check the topic is created automatically."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar-admin topics list public/default \\\n")),(0,r.yg)("p",{parentName:"li"},"This topic is created automatically as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"persistent://public/default/pulsar-rabbitmq-test-topic-partition-0\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Consume this topic."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar-client consume persistent://public/default/pulsar-rabbitmq-test-topic-partition-0 -s s1 -n 0 -p Earliest\n")),(0,r.yg)("p",{parentName:"li"},"The following information appears on the consumer terminal window."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"   ----- got message -----\n   key:[quick.orange.pulsar], properties:[], content:message-topic-O(range) 0\n   ----- got message -----\n   key:[quick.orange.pulsar], properties:[], content:message-topic-O(range) 1\n\n   ... ...\n\n")))))}m.isMDXComponent=!0}}]);