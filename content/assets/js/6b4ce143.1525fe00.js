"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[78212],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={id:"client-libraries-node-use",title:"Usee Node.js client",sidebar_label:"Use"},i=void 0,s={unversionedId:"client-libraries-node-use",id:"version-3.1.x/client-libraries-node-use",title:"Usee Node.js client",description:"Create a producer",source:"@site/versioned_docs/version-3.1.x/client-libraries-node-use.md",sourceDirName:".",slug:"/client-libraries-node-use",permalink:"/docs/3.1.x/client-libraries-node-use",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/client-libraries-node-use.md",tags:[],version:"3.1.x",frontMatter:{id:"client-libraries-node-use",title:"Usee Node.js client",sidebar_label:"Use"},sidebar:"docsSidebar",previous:{title:"Initialize",permalink:"/docs/3.1.x/client-libraries-node-initialize"},next:{title:"Configs",permalink:"/docs/3.1.x/client-libraries-node-configs"}},l={},c=[{value:"Create a producer",id:"create-a-producer",level:2},{value:"Producer operations",id:"producer-operations",level:4},{value:"Producer example",id:"producer-example",level:4},{value:"Create a consumer",id:"create-a-consumer",level:2},{value:"Consumer operations",id:"consumer-operations",level:4},{value:"Consumer example",id:"consumer-example",level:4},{value:"Create a reader",id:"create-a-reader",level:2},{value:"Reader operations",id:"reader-operations",level:4},{value:"Reader example",id:"reader-example",level:4}],d={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-a-producer"},"Create a producer"),(0,r.kt)("p",null,"You can configure Node.js producers using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.1.x/client-libraries-node-configs#producer-configuration"},"producer configuration")," object."),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const producer = await client.createProducer({\n  topic: 'my-topic', // or 'my-tenant/my-namespace/my-topic' to specify topic's tenant and namespace\n});\n\nawait producer.send({\n  data: Buffer.from(\"Hello, Pulsar\"),\n});\n\nawait producer.close();\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When you create a new Pulsar producer, the operation returns ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," object and get producer instance or an error through executor function. In the above example, use ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," operator instead of executor function.")),(0,r.kt)("h4",{id:"producer-operations"},"Producer operations"),(0,r.kt)("p",null,"Pulsar Node.js producers have the following methods available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Return type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"send(Object)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Publishes a ",(0,r.kt)("a",{parentName:"td",href:"#messages"},"message")," to the producer's topic. When the message is successfully acknowledged by the Pulsar broker, or an error is thrown, the Promise object whose result is the message ID runs executor function."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Object>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"flush()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sends message from send queue to Pulsar broker. When the message is successfully acknowledged by the Pulsar broker, or an error is thrown, the Promise object runs executor function."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<null>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"close()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Closes the producer and releases all resources allocated to it. Once ",(0,r.kt)("inlineCode",{parentName:"td"},"close()")," is called, no more messages are accepted from the publisher. This method returns a Promise object. It runs the executor function when all pending publish requests are persisted by Pulsar. If an error is thrown, no pending writes are retried."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<null>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getProducerName()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Getter method of the producer name."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"getTopic()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Getter method of the name of the topic."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"producer-example"},"Producer example"),(0,r.kt)("p",null,"This example creates a Node.js producer for the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic and sends 10 messages to that topic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Pulsar = require('pulsar-client');\n\n(async () => {\n  // Create a client\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n  });\n\n  // Create a producer\n  const producer = await client.createProducer({\n    topic: 'my-topic',\n  });\n\n  // Send messages\n  for (let i = 0; i < 10; i += 1) {\n    const msg = `my-message-${i}`;\n    producer.send({\n      data: Buffer.from(msg),\n    });\n    console.log(`Sent message: ${msg}`);\n  }\n  await producer.flush();\n\n  await producer.close();\n  await client.close();\n})();\n")),(0,r.kt)("h2",{id:"create-a-consumer"},"Create a consumer"),(0,r.kt)("p",null,"You can configure Node.js consumers using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.1.x/client-libraries-node-configs#consumer-configuration"},"consumer configuration")," object."),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const consumer = await client.subscribe({\n  topic: 'my-topic',\n  subscription: 'my-subscription',\n});\n\nconst msg = await consumer.receive();\nconsole.log(msg.getData().toString());\nconsumer.acknowledge(msg);\n\nawait consumer.close();\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When you create a new Pulsar consumer, the operation returns ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," object and get consumer instance or an error through executor function. In this example, use ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," operator instead of executor function.")),(0,r.kt)("h4",{id:"consumer-operations"},"Consumer operations"),(0,r.kt)("p",null,"Pulsar Node.js consumers have the following methods available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Return type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receive()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Receives a single message from the topic. When the message is available, the Promise object run executor function and get message object."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Object>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"receive(Number)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Receives a single message from the topic with specific timeout in milliseconds."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Object>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"acknowledge(Object)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/3.1.x/reference-terminology#acknowledgment-ack"},"Acknowledges")," a message to the Pulsar ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.1.x/reference-terminology#broker"},"broker")," by message object."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"acknowledgeId(Object)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/3.1.x/reference-terminology#acknowledgment-ack"},"Acknowledges")," a message to the Pulsar ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.1.x/reference-terminology#broker"},"broker")," by message ID object."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"acknowledgeCumulative(Object)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/3.1.x/reference-terminology#acknowledgment-ack"},"Acknowledges")," ",(0,r.kt)("em",{parentName:"td"},"all")," the messages in the stream, up to and including the specified message. The ",(0,r.kt)("inlineCode",{parentName:"td"},"acknowledgeCumulative")," method returns void, and send the ack to the broker asynchronously. After that, the messages are ",(0,r.kt)("em",{parentName:"td"},"not")," redelivered to the consumer. Cumulative acking can not be used with a ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.1.x/concepts-messaging#shared"},"shared")," subscription type."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"acknowledgeCumulativeId(Object)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/3.1.x/reference-terminology#acknowledgment-ack"},"Acknowledges")," ",(0,r.kt)("em",{parentName:"td"},"all")," the messages in the stream, up to and including the specified message ID."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"negativeAcknowledge(Message)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/3.1.x/reference-terminology#negative-acknowledgment-nack"},"Negatively acknowledges"),"  a message to the Pulsar broker by message object."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"negativeAcknowledgeId(MessageId)")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/3.1.x/reference-terminology#negative-acknowledgment-nack"},"Negatively acknowledges")," a message to the Pulsar broker by message ID object."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"close()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Closes the consumer, disabling its ability to receive messages from the broker."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<null>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unsubscribe()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unsubscribes the subscription."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<null>"))))),(0,r.kt)("h4",{id:"consumer-example"},"Consumer example"),(0,r.kt)("p",null,"This example creates a Node.js consumer with the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-subscription")," subscription on the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic, receives messages, prints the content that arrive, and acknowledges each message to the Pulsar broker for 10 times:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Pulsar = require('pulsar-client');\n\n(async () => {\n  // Create a client\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n  });\n\n  // Create a consumer\n  const consumer = await client.subscribe({\n    topic: 'my-topic',\n    subscription: 'my-subscription',\n    subscriptionType: 'Exclusive',\n  });\n\n  // Receive messages\n  for (let i = 0; i < 10; i += 1) {\n    const msg = await consumer.receive();\n    console.log(msg.getData().toString());\n    consumer.acknowledge(msg);\n  }\n\n  await consumer.close();\n  await client.close();\n})();\n")),(0,r.kt)("p",null,"Instead, a consumer can be created with ",(0,r.kt)("inlineCode",{parentName:"p"},"listener")," to process messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a consumer\nconst consumer = await client.subscribe({\n  topic: 'my-topic',\n  subscription: 'my-subscription',\n  subscriptionType: 'Exclusive',\n  listener: (msg, msgConsumer) => {\n    console.log(msg.getData().toString());\n    msgConsumer.acknowledge(msg);\n  },\n});\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Pulsar Node.js client uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-addon-api/blob/main/doc/async_worker"},"AsyncWorker"),". Asynchronous operations such as creating consumers/producers and receiving/sending messages are performed in worker threads.\nUntil completion of these operations, worker threads are blocked.\nSince there are only 4 worker threads by default, a called method may never be complete.\nTo avoid this situation, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"UV_THREADPOOL_SIZE")," to increase the number of worker threads, or define ",(0,r.kt)("inlineCode",{parentName:"p"},"listener")," instead of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"receive()")," many times.")),(0,r.kt)("h2",{id:"create-a-reader"},"Create a reader"),(0,r.kt)("p",null,"Pulsar readers are different from consumers because with readers you need to explicitly specify which message in the stream you want to begin with (consumers, on the other hand, automatically begin with the most recently unacked message). You can configure Node.js readers using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.1.x/client-libraries-node-configs#reader-configuration"},"reader configuration")," object."),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const reader = await client.createReader({\n  topic: 'my-topic',\n  startMessageId: Pulsar.MessageId.earliest(),\n});\n\nconst msg = await reader.readNext();\nconsole.log(msg.getData().toString());\n\nawait reader.close();\n")),(0,r.kt)("h4",{id:"reader-operations"},"Reader operations"),(0,r.kt)("p",null,"Pulsar Node.js readers have the following methods available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Method"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Return type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"readNext()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Receives the next message on the topic (analogous to the ",(0,r.kt)("inlineCode",{parentName:"td"},"receive")," method for ",(0,r.kt)("a",{parentName:"td",href:"#consumer-operations"},"consumers"),"). When the message is available, the Promise object run executor function and get message object."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Object>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"readNext(Number)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Receives a single message from the topic with specific timeout in milliseconds."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<Object>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hasNext()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Return whether the broker has next message in target topic."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"close()")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Closes the reader, disabling its ability to receive messages from the broker."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<null>"))))),(0,r.kt)("h4",{id:"reader-example"},"Reader example"),(0,r.kt)("p",null,"This example creates a Node.js reader with the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-topic")," topic, reads messages, and prints the content that arrive for 10 times:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Pulsar = require('pulsar-client');\n\n(async () => {\n  // Create a client\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n    operationTimeoutSeconds: 30,\n  });\n\n  // Create a reader\n  const reader = await client.createReader({\n    topic: 'my-topic',\n    startMessageId: Pulsar.MessageId.earliest(),\n  });\n\n  // read messages\n  for (let i = 0; i < 10; i += 1) {\n    const msg = await reader.readNext();\n    console.log(msg.getData().toString());\n  }\n\n  await reader.close();\n  await client.close();\n})();\n")))}p.isMDXComponent=!0}}]);