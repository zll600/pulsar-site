"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8851],{15680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},g=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,y=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?t.createElement(y,i(i({ref:a},g),{},{components:n})):t.createElement(y,i({ref:a},g))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26382:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const l={id:"io-kafka-source",title:"Kafka source connector",sidebar_label:"Kafka source connector",original_id:"io-kafka-source"},i=void 0,o={unversionedId:"io-kafka-source",id:"version-2.10.x/io-kafka-source",title:"Kafka source connector",description:"The Kafka source connector pulls messages from Kafka topics and persists the messages",source:"@site/versioned_docs/version-2.10.x/io-kafka-source.md",sourceDirName:".",slug:"/io-kafka-source",permalink:"/docs/2.10.x/io-kafka-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/io-kafka-source.md",tags:[],version:"2.10.x",frontMatter:{id:"io-kafka-source",title:"Kafka source connector",sidebar_label:"Kafka source connector",original_id:"io-kafka-source"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Schema Management",id:"schema-management",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2},{value:"Standalone cluster",id:"standalone-cluster",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Steps",id:"steps",level:4},{value:"On-premises cluster",id:"on-premises-cluster",level:3}],g={toc:p},u="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Kafka source connector pulls messages from Kafka topics and persists the messages\nto Pulsar topics."),(0,r.yg)("p",null,"This guide explains how to configure and use the Kafka source connector."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration of the Kafka source connector has the following properties."),(0,r.yg)("h3",{id:"property"},"Property"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bootstrapServers")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"A comma-separated list of host and port pairs for establishing the initial connection to the Kafka cluster.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"securityProtocol")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The protocol used to communicate with Kafka brokers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"saslMechanism")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The SASL mechanism used for Kafka client connections.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"saslJaasConfig")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The JAAS login context parameters for SASL connections in the format used by JAAS configuration files.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sslEnabledProtocols")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The list of protocols enabled for SSL connections.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sslEndpointIdentificationAlgorithm")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The endpoint identification algorithm to validate server hostnames using a server certificate.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sslTruststoreLocation")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The location of the trust store file.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sslTruststorePassword")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The password of the trust store file.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"groupId")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"A unique string that identifies the group of consumer processes to which this consumer belongs.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fetchMinBytes")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"The minimum byte expected for each fetch response.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"autoCommitEnabled")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"If set to true, the consumer's offset is periodically committed in the background.",(0,r.yg)("br",null),(0,r.yg)("br",null)," This committed offset is used when the process fails as the position from which a new consumer begins.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"autoCommitIntervalMs")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"5000"),(0,r.yg)("td",{parentName:"tr",align:null},"The frequency in milliseconds that the consumer offsets are auto-committed to Kafka if ",(0,r.yg)("inlineCode",{parentName:"td"},"autoCommitEnabled")," is set to true.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"heartbeatIntervalMs")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"3000"),(0,r.yg)("td",{parentName:"tr",align:null},"The interval between heartbeats to the consumer when using Kafka's group management facilities. ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note: ",(0,r.yg)("inlineCode",{parentName:"strong"},"heartbeatIntervalMs")," must be smaller than ",(0,r.yg)("inlineCode",{parentName:"strong"},"sessionTimeoutMs")),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sessionTimeoutMs")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"The timeout used to detect consumer failures when using Kafka's group management facility.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"topic")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The Kafka topic that sends messages to Pulsar.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"consumerConfigProperties")),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The consumer configuration properties to be passed to consumers. ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note: other properties specified in the connector configuration file take precedence over this configuration"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"keyDeserializationClass")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.kafka.common.serialization.StringDeserializer"),(0,r.yg)("td",{parentName:"tr",align:null},"The deserializer class for Kafka consumers to deserialize keys.",(0,r.yg)("br",null)," The deserializer is set by a specific implementation of ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java"},(0,r.yg)("inlineCode",{parentName:"a"},"KafkaAbstractSource")),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"valueDeserializationClass")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.kafka.common.serialization.ByteArrayDeserializer"),(0,r.yg)("td",{parentName:"tr",align:null},"The deserializer class for Kafka consumers to deserialize values.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"autoOffsetReset")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"earliest"),(0,r.yg)("td",{parentName:"tr",align:null},"The default offset reset policy.")))),(0,r.yg)("h3",{id:"schema-management"},"Schema Management"),(0,r.yg)("p",null,"This Kafka source connector applies the schema to the topic depending on the data type that is present on the Kafka topic.\nYou can detect the data type from the ",(0,r.yg)("inlineCode",{parentName:"p"},"keyDeserializationClass")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"valueDeserializationClass")," configuration parameters."),(0,r.yg)("p",null,"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"valueDeserializationClass")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.kafka.common.serialization.StringDeserializer"),", you can set Schema.STRING() as schema type on the Pulsar topic."),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"valueDeserializationClass")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"io.confluent.kafka.serializers.KafkaAvroDeserializer"),", Pulsar downloads the AVRO schema from the Confluent Schema Registry\xae\nand sets it properly on the Pulsar topic."),(0,r.yg)("p",null,"In this case, you need to set ",(0,r.yg)("inlineCode",{parentName:"p"},"schema.registry.url")," inside of the ",(0,r.yg)("inlineCode",{parentName:"p"},"consumerConfigProperties")," configuration entry\nof the source."),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"keyDeserializationClass")," is not ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.kafka.common.serialization.StringDeserializer"),", it means\nthat you do not have a String as key and the Kafka Source uses the KeyValue schema type with the SEPARATED encoding."),(0,r.yg)("p",null,"Pulsar supports AVRO format for keys."),(0,r.yg)("p",null,"In this case, you can have a Pulsar topic with the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schema: KeyValue schema with SEPARATED encoding"),(0,r.yg)("li",{parentName:"ul"},"Key: the content of key of the Kafka message (base64 encoded)"),(0,r.yg)("li",{parentName:"ul"},"Value: the content of value of the Kafka message"),(0,r.yg)("li",{parentName:"ul"},"KeySchema: the schema detected from ",(0,r.yg)("inlineCode",{parentName:"li"},"keyDeserializationClass")),(0,r.yg)("li",{parentName:"ul"},"ValueSchema: the schema detected from ",(0,r.yg)("inlineCode",{parentName:"li"},"valueDeserializationClass"))),(0,r.yg)("p",null,"Topic compaction and partition routing use the Pulsar key, which contains the Kafka key, and so they are driven by the same value that you have on Kafka."),(0,r.yg)("p",null,"When you consume data from Pulsar topics, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyValue")," schema. In this way, you can decode the data properly.\nIf you want to access the raw key, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Message#getKeyBytes()")," API."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Before using the Kafka source connector, you need to create a configuration file through one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n  {\n    "bootstrapServers": "pulsar-kafka:9092",\n    "groupId": "test-pulsar-io",\n    "topic": "my-topic",\n    "sessionTimeoutMs": "10000",\n    "autoCommitEnabled": false\n  }\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\n  configs:\n    bootstrapServers: "pulsar-kafka:9092"\n    groupId: "test-pulsar-io"\n    topic: "my-topic"\n    sessionTimeoutMs: "10000"\n      autoCommitEnabled: false\n\n')))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"You can make the Kafka source connector as a Pulsar built-in connector and use it on a standalone cluster or an on-premises cluster."),(0,r.yg)("h3",{id:"standalone-cluster"},"Standalone cluster"),(0,r.yg)("p",null,"This example describes how to use the Kafka source connector to feed data from Kafka and write data to Pulsar topics in the standalone mode."),(0,r.yg)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Install ",(0,r.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker"),"(Community Edition).")),(0,r.yg)("h4",{id:"steps"},"Steps"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download and start the Confluent Platform.\nFor details, see the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/quickstart/ce-docker-quickstart.html#step-1-download-and-start-cp"},"documentation")," to install the Kafka service locally.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Pull a Pulsar image and start Pulsar in standalone mode."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\ndocker pull apachepulsar/pulsar:latest\n\ndocker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-kafka-standalone apachepulsar/pulsar:latest bin/pulsar standalone\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a producer file ",(0,r.yg)("em",{parentName:"p"},"kafka-producer.py"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nfrom kafka import KafkaProducer\nproducer = KafkaProducer(bootstrap_servers='localhost:9092')\nfuture = producer.send('my-topic', b'hello world')\nfuture.get()\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a consumer file ",(0,r.yg)("em",{parentName:"p"},"pulsar-client.py"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic', subscription_name='my-aa')\n\nwhile True:\n    msg = consumer.receive()\n    print msg\n    print dir(msg)\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the following files to Pulsar."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\ndocker cp pulsar-io-kafka.nar pulsar-kafka-standalone:/pulsar\ndocker cp kafkaSourceConfig.yaml pulsar-kafka-standalone:/pulsar/conf\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open a new terminal window and start the Kafka source connector in local run mode."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\ndocker exec -it pulsar-kafka-standalone /bin/bash\n\n./bin/pulsar-admin source localrun \\\n--archive ./pulsar-io-kafka.nar \\\n--tenant public \\\n--namespace default \\\n--name kafka \\\n--destination-topic-name my-topic \\\n--source-config-file ./conf/kafkaSourceConfig.yaml \\\n--parallelism 1\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open a new terminal window and run the Kafka producer locally."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\npython3 kafka-producer.py\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open a new terminal window and run the Pulsar consumer locally."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\npython3 pulsar-client.py\n\n")))),(0,r.yg)("p",null,"The following information appears on the consumer terminal window."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"```bash\n\nReceived message: 'hello world'\n\n```\n")),(0,r.yg)("h3",{id:"on-premises-cluster"},"On-premises cluster"),(0,r.yg)("p",null,"This example explains how to create a Kafka source connector in an on-premises cluster."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the NAR package of the Kafka connector to the Pulsar connectors directory."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\ncp pulsar-io-kafka-{{connector:version}}.nar $PULSAR_HOME/connectors/pulsar-io-kafka-{{connector:version}}.nar\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Reload all ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/io-connectors"},"built-in connectors"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nPULSAR_HOME/bin/pulsar-admin sources reload\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check whether the Kafka source connector is available on the list or not."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nPULSAR_HOME/bin/pulsar-admin sources available-sources\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a Kafka source connector on a Pulsar cluster using the ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.10.x/pulsar-admin/sources?id=create"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin sources create"))," command."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nPULSAR_HOME/bin/pulsar-admin sources create \\\n--source-config-file <kafka-source-config.yaml>\n\n")))))}m.isMDXComponent=!0}}]);