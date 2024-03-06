"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[40521],{15680:(e,r,a)=>{a.d(r,{xA:()=>c,yg:()=>g});var n=a(96540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=n.createContext({}),l=function(e){var r=n.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},c=function(e){var r=l(e.components);return n.createElement(o.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),m=t,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(g,s(s({ref:r},c),{},{components:a})):n.createElement(g,s({ref:r},c))}));function g(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,s=new Array(i);s[0]=m;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[u]="string"==typeof e?e:t,s[1]=p;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49e3:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=a(58168),t=(a(96540),a(15680));const i={id:"adaptors-spark",title:"Pulsar adaptor for Apache Spark",sidebar_label:"Apache Spark",original_id:"adaptors-spark"},s=void 0,p={unversionedId:"adaptors-spark",id:"version-2.7.3/adaptors-spark",title:"Pulsar adaptor for Apache Spark",description:"The Spark Streaming receiver for Pulsar is a custom receiver that enables Apache Spark Streaming to receive raw data from Pulsar.",source:"@site/versioned_docs/version-2.7.3/adaptors-spark.md",sourceDirName:".",slug:"/adaptors-spark",permalink:"/docs/2.7.3/adaptors-spark",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.3/adaptors-spark.md",tags:[],version:"2.7.3",frontMatter:{id:"adaptors-spark",title:"Pulsar adaptor for Apache Spark",sidebar_label:"Apache Spark",original_id:"adaptors-spark"},sidebar:"version-2.7.3/docsSidebar",previous:{title:"Kafka client wrapper",permalink:"/docs/2.7.3/adaptors-kafka"},next:{title:"Apache Storm",permalink:"/docs/2.7.3/adaptors-storm"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Usage",id:"usage",level:2}],c={toc:l},u="wrapper";function d(e){let{components:r,...a}=e;return(0,t.yg)(u,(0,n.A)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"The Spark Streaming receiver for Pulsar is a custom receiver that enables Apache ",(0,t.yg)("a",{parentName:"p",href:"https://spark.apache.org/streaming/"},"Spark Streaming")," to receive raw data from Pulsar."),(0,t.yg)("p",null,"An application can receive data in ",(0,t.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/programming-guide.html#resilient-distributed-datasets-rdds"},"Resilient Distributed Dataset")," (RDD) format via the Spark Streaming receiver and can process it in a variety of ways."),(0,t.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,t.yg)("p",null,"To use the receiver, include a dependency for the ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar-spark")," library in your Java configuration."),(0,t.yg)("h3",{id:"maven"},"Maven"),(0,t.yg)("p",null,"If you're using Maven, add this to your ",(0,t.yg)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"\n\x3c!-- in your <properties> block --\x3e\n<pulsar.version>2.7.3</pulsar.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-spark</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n\n")),(0,t.yg)("h3",{id:"gradle"},"Gradle"),(0,t.yg)("p",null,"If you're using Gradle, add this to your ",(0,t.yg)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-groovy"},"\ndef pulsarVersion = \"2.7.3\"\n\ndependencies {\n    compile group: 'org.apache.pulsar', name: 'pulsar-spark', version: pulsarVersion\n}\n\n")),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)("p",null,"Pass an instance of ",(0,t.yg)("inlineCode",{parentName:"p"},"SparkStreamingPulsarReceiver")," to the ",(0,t.yg)("inlineCode",{parentName:"p"},"receiverStream")," method in ",(0,t.yg)("inlineCode",{parentName:"p"},"JavaStreamingContext"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'\n    String serviceUrl = "pulsar://localhost:6650/";\n    String topic = "persistent://public/default/test_src";\n    String subs = "test_sub";\n\n    SparkConf sparkConf = new SparkConf().setMaster("local[*]").setAppName("Pulsar Spark Example");\n\n    JavaStreamingContext jsc = new JavaStreamingContext(sparkConf, Durations.seconds(60));\n\n    ConsumerConfigurationData<byte[]> pulsarConf = new ConsumerConfigurationData();\n\n    Set<String> set = new HashSet();\n    set.add(topic);\n    pulsarConf.setTopicNames(set);\n    pulsarConf.setSubscriptionName(subs);\n\n    SparkStreamingPulsarReceiver pulsarReceiver = new SparkStreamingPulsarReceiver(\n        serviceUrl,\n        pulsarConf,\n        new AuthenticationDisabled());\n\n    JavaReceiverInputDStream<byte[]> lineDStream = jsc.receiverStream(pulsarReceiver);\n\n')),(0,t.yg)("p",null,"For a complete example, click ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-adapters/blob/master/examples/spark/src/main/java/org/apache/spark/streaming/receiver/example/SparkStreamingPulsarReceiverExample.java"},"here"),'. In this example, the number of messages that contain the string "Pulsar" in received messages is counted.'))}d.isMDXComponent=!0}}]);