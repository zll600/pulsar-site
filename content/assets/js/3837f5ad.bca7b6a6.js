"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[41672],{15680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},g=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,y=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?t.createElement(y,o(o({ref:a},g),{},{components:n})):t.createElement(y,o({ref:a},g))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81188:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const l={id:"io-kafka-source",title:"Kafka source connector",sidebar_label:"Kafka source connector",original_id:"io-kafka-source"},o=void 0,i={unversionedId:"io-kafka-source",id:"version-2.9.x/io-kafka-source",title:"Kafka source connector",description:"The Kafka source connector pulls messages from Kafka topics and persists the messages",source:"@site/versioned_docs/version-2.9.x/io-kafka-source.md",sourceDirName:".",slug:"/io-kafka-source",permalink:"/docs/2.9.x/io-kafka-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/io-kafka-source.md",tags:[],version:"2.9.x",frontMatter:{id:"io-kafka-source",title:"Kafka source connector",sidebar_label:"Kafka source connector",original_id:"io-kafka-source"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Schema Management",id:"schema-management",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}],g={toc:p},u="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Kafka source connector pulls messages from Kafka topics and persists the messages\nto Pulsar topics."),(0,r.yg)("p",null,"This guide explains how to configure and use the Kafka source connector."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration of the Kafka source connector has the following properties."),(0,r.yg)("h3",{id:"property"},"Property"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bootstrapServers")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"A comma-separated list of host and port pairs for establishing the initial connection to the Kafka cluster.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"groupId")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"A unique string that identifies the group of consumer processes to which this consumer belongs.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fetchMinBytes")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"The minimum byte expected for each fetch response.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"autoCommitEnabled")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"If set to true, the consumer's offset is periodically committed in the background.",(0,r.yg)("br",null),(0,r.yg)("br",null)," This committed offset is used when the process fails as the position from which a new consumer begins.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"autoCommitIntervalMs")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"5000"),(0,r.yg)("td",{parentName:"tr",align:null},"The frequency in milliseconds that the consumer offsets are auto-committed to Kafka if ",(0,r.yg)("inlineCode",{parentName:"td"},"autoCommitEnabled")," is set to true.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"heartbeatIntervalMs")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"3000"),(0,r.yg)("td",{parentName:"tr",align:null},"The interval between heartbeats to the consumer when using Kafka's group management facilities. ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note: ",(0,r.yg)("inlineCode",{parentName:"strong"},"heartbeatIntervalMs")," must be smaller than ",(0,r.yg)("inlineCode",{parentName:"strong"},"sessionTimeoutMs")),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sessionTimeoutMs")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"The timeout used to detect consumer failures when using Kafka's group management facility.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"topic")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The Kafka topic which sends messages to Pulsar.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"consumerConfigProperties")),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The consumer configuration properties to be passed to consumers. ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note: other properties specified in the connector configuration file take precedence over this configuration"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"keyDeserializationClass")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.kafka.common.serialization.StringDeserializer"),(0,r.yg)("td",{parentName:"tr",align:null},"The deserializer class for Kafka consumers to deserialize keys.",(0,r.yg)("br",null)," The deserializer is set by a specific implementation of ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java"},(0,r.yg)("inlineCode",{parentName:"a"},"KafkaAbstractSource")),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"valueDeserializationClass")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.kafka.common.serialization.ByteArrayDeserializer"),(0,r.yg)("td",{parentName:"tr",align:null},"The deserializer class for Kafka consumers to deserialize values.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"autoOffsetReset")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'"earliest"'),(0,r.yg)("td",{parentName:"tr",align:null},"The default offset reset policy.")))),(0,r.yg)("h3",{id:"schema-management"},"Schema Management"),(0,r.yg)("p",null,"This Kafka source connector applies the schema to the topic depending on the data type that is present on the Kafka topic.\nYou can detect the data type from the ",(0,r.yg)("inlineCode",{parentName:"p"},"keyDeserializationClass")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"valueDeserializationClass")," configuration parameters."),(0,r.yg)("p",null,"If the ",(0,r.yg)("inlineCode",{parentName:"p"},"valueDeserializationClass")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.kafka.common.serialization.StringDeserializer"),", you can set Schema.STRING() as schema type on the Pulsar topic."),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"valueDeserializationClass")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"io.confluent.kafka.serializers.KafkaAvroDeserializer"),", Pulsar downloads the AVRO schema from the Confluent Schema Registry\xae\nand sets it properly on the Pulsar topic."),(0,r.yg)("p",null,"In this case, you need to set ",(0,r.yg)("inlineCode",{parentName:"p"},"schema.registry.url")," inside of the ",(0,r.yg)("inlineCode",{parentName:"p"},"consumerConfigProperties")," configuration entry\nof the source."),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"keyDeserializationClass")," is not ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.kafka.common.serialization.StringDeserializer"),", it means\nthat you do not have a String as key and the Kafka Source uses the KeyValue schema type with the SEPARATED encoding."),(0,r.yg)("p",null,"Pulsar supports AVRO format for keys."),(0,r.yg)("p",null,"In this case, you can have a Pulsar topic with the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Schema: KeyValue schema with SEPARATED encoding"),(0,r.yg)("li",{parentName:"ul"},"Key: the content of key of the Kafka message (base64 encoded)"),(0,r.yg)("li",{parentName:"ul"},"Value: the content of value of the Kafka message"),(0,r.yg)("li",{parentName:"ul"},"KeySchema: the schema detected from ",(0,r.yg)("inlineCode",{parentName:"li"},"keyDeserializationClass")),(0,r.yg)("li",{parentName:"ul"},"ValueSchema: the schema detected from ",(0,r.yg)("inlineCode",{parentName:"li"},"valueDeserializationClass"))),(0,r.yg)("p",null,"Topic compaction and partition routing use the Pulsar key, that contains the Kafka key, and so they are driven by the same value that you have on Kafka."),(0,r.yg)("p",null,"When you consume data from Pulsar topics, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyValue")," schema. In this way, you can decode the data properly.\nIf you want to access the raw key, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Message#getKeyBytes()")," API."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Before using the Kafka source connector, you need to create a configuration file through one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "bootstrapServers": "pulsar-kafka:9092",\n    "groupId": "test-pulsar-io",\n    "topic": "my-topic",\n    "sessionTimeoutMs": "10000",\n    "autoCommitEnabled": false\n}\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    bootstrapServers: "pulsar-kafka:9092"\n    groupId: "test-pulsar-io"\n    topic: "my-topic"\n    sessionTimeoutMs: "10000"\n    autoCommitEnabled: false\n\n')))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"Here is an example of using the Kafka source connector with the configuration file as shown previously."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download a Kafka client and a Kafka connector."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ wget https://repo1.maven.org/maven2/org/apache/kafka/kafka-clients/0.10.2.1/kafka-clients-0.10.2.1.jar\n\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.4.0/connectors/pulsar-io-kafka-2.4.0.nar\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a network."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker network create kafka-pulsar\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Pull a ZooKeeper image and start ZooKeeper."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull wurstmeister/zookeeper\n\n$ docker run -d -it -p 2181:2181 --name pulsar-kafka-zookeeper --network kafka-pulsar wurstmeister/zookeeper\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Pull a Kafka image and start Kafka."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull wurstmeister/kafka:2.11-1.0.2\n\n$ docker run -d -it --network kafka-pulsar -p 6667:6667 -p 9092:9092 -e KAFKA_ADVERTISED_HOST_NAME=pulsar-kafka -e KAFKA_ZOOKEEPER_CONNECT=pulsar-kafka-zookeeper:2181 --name pulsar-kafka wurstmeister/kafka:2.11-1.0.2\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Pull a Pulsar image and start Pulsar standalone."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull apachepulsar/pulsar:2.9.5\n\n$ docker run -d -it --network kafka-pulsar -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-kafka-standalone apachepulsar/pulsar:2.4.0 bin/pulsar standalone\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a producer file ",(0,r.yg)("em",{parentName:"p"},"kafka-producer.py"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nfrom kafka import KafkaProducer\nproducer = KafkaProducer(bootstrap_servers='pulsar-kafka:9092')\nfuture = producer.send('my-topic', b'hello world')\nfuture.get()\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a consumer file ",(0,r.yg)("em",{parentName:"p"},"pulsar-client.py"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic', subscription_name='my-aa')\n\nwhile True:\n    msg = consumer.receive()\n    print msg\n    print dir(msg)\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the following files to Pulsar."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker cp pulsar-io-kafka-2.9.5.nar pulsar-kafka-standalone:/pulsar\n$ docker cp kafkaSourceConfig.yaml pulsar-kafka-standalone:/pulsar/conf\n$ docker cp pulsar-client.py pulsar-kafka-standalone:/pulsar/\n$ docker cp kafka-producer.py pulsar-kafka-standalone:/pulsar/\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open a new terminal window and start the Kafka source connector in local run mode."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-kafka-standalone /bin/bash\n\n$ ./bin/pulsar-admin source localrun \\\n--archive ./pulsar-io-kafka-2.9.5.nar \\\n--classname org.apache.pulsar.io.kafka.KafkaBytesSource \\\n--tenant public \\\n--namespace default \\\n--name kafka \\\n--destination-topic-name my-topic \\\n--source-config-file ./conf/kafkaSourceConfig.yaml \\\n--parallelism 1\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open a new terminal window and run the consumer."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-kafka-standalone /bin/bash\n\n$ pip install kafka-python\n\n$ python3 kafka-producer.py\n\n")),(0,r.yg)("p",{parentName:"li"},"The following information appears on the consumer terminal window."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nReceived message: 'hello world'\n\n")))))}m.isMDXComponent=!0}}]);