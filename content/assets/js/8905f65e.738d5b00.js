"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[67065],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),g=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=g(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=g(a),d=r,y=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?t.createElement(y,l(l({ref:n},p),{},{components:a})):t.createElement(y,l({ref:n},p))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var g=2;g<i;g++)l[g]=a[g];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87152:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var t=a(58168),r=(a(96540),a(15680));const i={id:"io-kinesis-sink",title:"Kinesis sink connector",sidebar_label:"Kinesis sink connector",original_id:"io-kinesis-sink"},l=void 0,s={unversionedId:"io-kinesis-sink",id:"version-2.10.x/io-kinesis-sink",title:"Kinesis sink connector",description:"The Kinesis sink connector pulls data from Pulsar and persists data into Amazon Kinesis.",source:"@site/versioned_docs/version-2.10.x/io-kinesis-sink.md",sourceDirName:".",slug:"/io-kinesis-sink",permalink:"/docs/2.10.x/io-kinesis-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/io-kinesis-sink.md",tags:[],version:"2.10.x",frontMatter:{id:"io-kinesis-sink",title:"Kinesis sink connector",sidebar_label:"Kinesis sink connector",original_id:"io-kinesis-sink"}},o={},g=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Built-in plugins",id:"built-in-plugins",level:3},{value:"Example",id:"example",level:3}],p={toc:g},u="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Kinesis sink connector pulls data from Pulsar and persists data into Amazon Kinesis."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration of the Kinesis sink connector has the following property."),(0,r.yg)("h3",{id:"property"},"Property"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"messageFormat")),(0,r.yg)("td",{parentName:"tr",align:null},"MessageFormat"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"ONLY_RAW_PAYLOAD"),(0,r.yg)("td",{parentName:"tr",align:null},"Message format in which Kinesis sink converts Pulsar messages and publishes to Kinesis streams.",(0,r.yg)("br",null),(0,r.yg)("br",null),"Below are the available options:",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("li",null,(0,r.yg)("inlineCode",{parentName:"td"},"ONLY_RAW_PAYLOAD"),": Kinesis sink directly publishes Pulsar message payload as a message into the configured Kinesis stream. ",(0,r.yg)("br",null),(0,r.yg)("br",null)),(0,r.yg)("li",null,(0,r.yg)("inlineCode",{parentName:"td"},"FULL_MESSAGE_IN_JSON"),": Kinesis sink creates a JSON payload with Pulsar message payload, properties and encryptionCtx, and publishes JSON payload into the configured Kinesis stream.",(0,r.yg)("br",null),(0,r.yg)("br",null)),(0,r.yg)("li",null,(0,r.yg)("inlineCode",{parentName:"td"},"FULL_MESSAGE_IN_FB"),": Kinesis sink creates a flatbuffer serialized payload with Pulsar message payload, properties and encryptionCtx, and publishes flatbuffer payload into the configured Kinesis stream.",(0,r.yg)("br",null),(0,r.yg)("br",null)),(0,r.yg)("li",null,(0,r.yg)("inlineCode",{parentName:"td"},"FULL_MESSAGE_IN_JSON_EXPAND_VALUE"),": Kinesis sink sends a JSON structure containing the record topic name, key, payload, properties and event time. The record schema is used to convert the value to JSON."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"retainOrdering")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether Pulsar connectors to retain ordering when moving messages from Pulsar to Kinesis or not.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsEndpoint")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The Kinesis end-point URL, which can be found at ",(0,r.yg)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsRegion")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The AWS region. ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Example"),(0,r.yg)("br",null)," us-west-1, us-west-2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsKinesisStreamName")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The Kinesis stream name.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialPluginName")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The fully-qualified class name of implementation of ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/aws/src/main/java/org/apache/pulsar/io/aws/AwsCredentialProviderPlugin.java"},"AwsCredentialProviderPlugin"),". ",(0,r.yg)("br",null),(0,r.yg)("br",null),"It is a factory class which creates an AWSCredentialsProvider that is used by Kinesis sink. ",(0,r.yg)("br",null),(0,r.yg)("br",null),"If it is empty, the Kinesis sink creates a default AWSCredentialsProvider which accepts json-map of credentials in ",(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialPluginParam"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialPluginParam")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The JSON parameter to initialize ",(0,r.yg)("inlineCode",{parentName:"td"},"awsCredentialsProviderPlugin"),".")))),(0,r.yg)("h3",{id:"built-in-plugins"},"Built-in plugins"),(0,r.yg)("p",null,"The following are built-in ",(0,r.yg)("inlineCode",{parentName:"p"},"AwsCredentialProviderPlugin")," plugins:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.io.aws.AwsDefaultProviderChainPlugin")),(0,r.yg)("p",{parentName:"li"},"This plugin takes no configuration, it uses the default AWS provider chain."),(0,r.yg)("p",{parentName:"li"},"For more information, see ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default"},"AWS documentation"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.io.aws.STSAssumeRoleProviderPlugin")),(0,r.yg)("p",{parentName:"li"},"This plugin takes a configuration (via the ",(0,r.yg)("inlineCode",{parentName:"p"},"awsCredentialPluginParam"),") that describes a role to assume when running the KCL."),(0,r.yg)("p",{parentName:"li"},"This configuration takes the form of a small json document like:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{"roleArn": "arn...", "roleSessionName": "name"}\n\n')))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Before using the Kinesis sink connector, you need to create a configuration file through one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n   "configs": {\n      "awsEndpoint": "some.endpoint.aws",\n      "awsRegion": "us-east-1",\n      "awsKinesisStreamName": "my-stream",\n      "awsCredentialPluginParam": "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}",\n      "messageFormat": "ONLY_RAW_PAYLOAD",\n      "retainOrdering": "true"\n   }\n}\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    awsEndpoint: "some.endpoint.aws"\n    awsRegion: "us-east-1"\n    awsKinesisStreamName: "my-stream"\n    awsCredentialPluginParam: "{\\"accessKey\\":\\"myKey\\",\\"secretKey\\":\\"my-Secret\\"}"\n    messageFormat: "ONLY_RAW_PAYLOAD"\n    retainOrdering: "true"\n\n')))))}m.isMDXComponent=!0}}]);