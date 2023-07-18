"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[97537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={id:"functions-overview",title:"Pulsar Functions overview",sidebar_label:"Overview",original_id:"functions-overview"},o=void 0,s={unversionedId:"functions-overview",id:"version-2.4.2/functions-overview",title:"Pulsar Functions overview",description:"Pulsar Functions are lightweight compute processes that",source:"@site/versioned_docs/version-2.4.2/functions-overview.md",sourceDirName:".",slug:"/functions-overview",permalink:"/docs/2.4.2/functions-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.2/functions-overview.md",tags:[],version:"2.4.2",frontMatter:{id:"functions-overview",title:"Pulsar Functions overview",sidebar_label:"Overview",original_id:"functions-overview"},sidebar:"version-2.4.2/docsSidebar",previous:{title:"Manage schema",permalink:"/docs/2.4.2/schema-manage"},next:{title:"Setup: Pulsar Functions Worker",permalink:"/docs/2.4.2/functions-worker"}},l={},u=[{value:"Goals",id:"goals",level:2},{value:"Inspirations",id:"inspirations",level:2},{value:"Programming model",id:"programming-model",level:2},{value:"Word count example",id:"word-count-example",level:3},{value:"Content-based routing example",id:"content-based-routing-example",level:3},{value:"Functions, messages and message types",id:"functions-messages-and-message-types",level:3},{value:"Fully Qualified Function Name (FQFN)",id:"fully-qualified-function-name-fqfn",level:2},{value:"Supported languages",id:"supported-languages",level:2},{value:"Processing guarantees",id:"processing-guarantees",level:2},{value:"Apply processing guarantees to a function",id:"apply-processing-guarantees-to-a-function",level:3},{value:"Update the processing guarantees of a function",id:"update-the-processing-guarantees-of-a-function",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pulsar Functions")," are lightweight compute processes that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"consume messages from one or more Pulsar topics,"),(0,i.kt)("li",{parentName:"ul"},"apply a user-supplied processing logic to each message,"),(0,i.kt)("li",{parentName:"ul"},"publish the results of the computation to another topic.")),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("p",null,"With Pulsar Functions, you can create complex processing logic without deploying a separate neighboring system (such as ",(0,i.kt)("a",{parentName:"p",href:"http://storm.apache.org/"},"Apache Storm"),", ",(0,i.kt)("a",{parentName:"p",href:"https://apache.github.io/incubator-heron"},"Apache Heron"),", ",(0,i.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink"),"). Pulsar Functions are computing infrastructure of Pulsar messaging system. The core goal is tied to a series of other goals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Developer productivity (language-native vs Pulsar Functions SDK functions)"),(0,i.kt)("li",{parentName:"ul"},"Easy troubleshooting"),(0,i.kt)("li",{parentName:"ul"},"Operational simplicity (no need for an external processing system)")),(0,i.kt)("h2",{id:"inspirations"},"Inspirations"),(0,i.kt)("p",null,"Pulsar Functions are inspired by (and take cues from) several systems and paradigms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stream processing engines such as ",(0,i.kt)("a",{parentName:"li",href:"http://storm.apache.org/"},"Apache Storm"),", ",(0,i.kt)("a",{parentName:"li",href:"https://apache.github.io/incubator-heron"},"Apache Heron"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://flink.apache.org"},"Apache Flink")),(0,i.kt)("li",{parentName:"ul"},'"Serverless" and "Function as a Service" (FaaS) cloud platforms like ',(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lambda/"},"Amazon Web Services Lambda"),", ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/functions/"},"Google Cloud Functions"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/functions/"},"Azure Cloud Functions"))),(0,i.kt)("p",null,"Pulsar Functions can be described as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/lambda/"},"Lambda"),"-style functions that are"),(0,i.kt)("li",{parentName:"ul"},"specifically designed to use Pulsar as a message bus.")),(0,i.kt)("h2",{id:"programming-model"},"Programming model"),(0,i.kt)("p",null,"Pulsar Functions provide a wide range of functionality, and the core programming model is simple. Functions receive messages from one or more ",(0,i.kt)("strong",{parentName:"p"},"input ",(0,i.kt)("a",{parentName:"strong",href:"/docs/2.4.2/reference-terminology#topic"},"topics")),". Each time a message is received, the function will complete the following tasks."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apply some processing logic to the input and write output to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("strong",{parentName:"li"},"output topic")," in Pulsar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.4.2/functions-develop#state-storage"},"Apache BookKeeper")))),(0,i.kt)("li",{parentName:"ul"},"Write logs to a ",(0,i.kt)("strong",{parentName:"li"},"log topic")," (potentially for debugging purposes)"),(0,i.kt)("li",{parentName:"ul"},"Increment a ",(0,i.kt)("a",{parentName:"li",href:"#word-count-example"},"counter"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pulsar Functions core programming model",src:n(74922).Z,width:"1712",height:"1049"})),(0,i.kt)("p",null,"You can use Pulsar Functions to set up the following processing chain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Python function listens for the ",(0,i.kt)("inlineCode",{parentName:"li"},"raw-sentences"),' topic and "sanitizes" incoming strings (removing extraneous whitespace and converting all characters to lowercase) and then publishes the results to a ',(0,i.kt)("inlineCode",{parentName:"li"},"sanitized-sentences")," topic."),(0,i.kt)("li",{parentName:"ul"},"A Java function listens for the ",(0,i.kt)("inlineCode",{parentName:"li"},"sanitized-sentences")," topic, counts the number of times each word appears within a specified time window, and publishes the results to a ",(0,i.kt)("inlineCode",{parentName:"li"},"results")," topic"),(0,i.kt)("li",{parentName:"ul"},"Finally, a Python function listens for the ",(0,i.kt)("inlineCode",{parentName:"li"},"results")," topic and writes the results to a MySQL table.")),(0,i.kt)("h3",{id:"word-count-example"},"Word count example"),(0,i.kt)("p",null,"If you implement the classic word count example using Pulsar Functions, it looks something like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pulsar Functions word count example",src:n(73011).Z,width:"1769",height:"916"})),(0,i.kt)("p",null,"To write the function in Java with ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.2/functions-develop#available-apis"},"Pulsar Functions SDK for Java"),", you can write the function as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\npackage org.example.functions;\n\nimport org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\n\nimport java.util.Arrays;\n\npublic class WordCountFunction implements Function<String, Void> {\n    // This function is invoked every time a message is published to the input topic\n    @Override\n    public Void process(String input, Context context) throws Exception {\n        Arrays.asList(input.split(" ")).forEach(word -> {\n            String counterKey = word.toLowerCase();\n            context.incrCounter(counterKey, 1);\n        });\n        return null;\n    }\n}\n\n')),(0,i.kt)("p",null,"Bundle and build the JAR file to be deployed, and then deploy it in your Pulsar cluster using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.2/functions-deploy#command-line-interface"},"command line")," as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --jar target/my-jar-with-dependencies.jar \\\n  --classname org.example.functions.WordCountFunction \\\n  --tenant public \\\n  --namespace default \\\n  --name word-count \\\n  --inputs persistent://public/default/sentences \\\n  --output persistent://public/default/count\n\n")),(0,i.kt)("h3",{id:"content-based-routing-example"},"Content-based routing example"),(0,i.kt)("p",null,"Pulsar Functions are used in many cases. The following is a sophisticated example that involves content-based routing."),(0,i.kt)("p",null,"For example, a function takes items (strings) as input and publishes them to either a ",(0,i.kt)("inlineCode",{parentName:"p"},"fruits")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"vegetables")," topic, depending on the item. Or, if an item is neither fruit nor vegetable, a warning is logged to a ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.2/functions-develop#logger"},"log topic"),". The following is a visual representation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pulsar Functions routing example",src:n(72047).Z,width:"1772",height:"836"})),(0,i.kt)("p",null,"If you implement this routing functionality in Python, it looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom pulsar import Function\n\nclass RoutingFunction(Function):\n    def __init__(self):\n        self.fruits_topic = "persistent://public/default/fruits"\n        self.vegetables_topic = "persistent://public/default/vegetables"\n\n    @staticmethod\n    def is_fruit(item):\n        return item in ["apple", "orange", "pear", "other fruits..."]\n\n    @staticmethod\n    def is_vegetable(item):\n        return item in ["carrot", "lettuce", "radish", "other vegetables..."]\n\n    def process(self, item, context):\n        if self.is_fruit(item):\n            context.publish(self.fruits_topic, item)\n        elif self.is_vegetable(item):\n            context.publish(self.vegetables_topic, item)\n        else:\n            warning = "The item {0} is neither a fruit nor a vegetable".format(item)\n            context.get_logger().warn(warning)\n\n')),(0,i.kt)("h3",{id:"functions-messages-and-message-types"},"Functions, messages and message types"),(0,i.kt)("p",null,"Pulsar Functions take byte arrays as inputs and spit out byte arrays as output. However in languages that support typed interfaces(Java), you can write typed Functions, and bind messages to types in the following ways."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.4.2/functions-develop#schema-registry"},"Schema Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.4.2/functions-develop#serde"},"SerDe"))),(0,i.kt)("h2",{id:"fully-qualified-function-name-fqfn"},"Fully Qualified Function Name (FQFN)"),(0,i.kt)("p",null,"Each Pulsar Function has a ",(0,i.kt)("strong",{parentName:"p"},"Fully Qualified Function Name")," (FQFN) that consists of three elements: the function tenant, namespace, and function name. FQFN looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"\ntenant/namespace/name\n\n")),(0,i.kt)("p",null,"FQFNs enable you to create multiple functions with the same name provided that they are in different namespaces."),(0,i.kt)("h2",{id:"supported-languages"},"Supported languages"),(0,i.kt)("p",null,"Currently, you can write Pulsar Functions in Java, Python, and Go. For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.2/functions-develop"},"Develop Pulsar Functions"),"."),(0,i.kt)("h2",{id:"processing-guarantees"},"Processing guarantees"),(0,i.kt)("p",null,"Pulsar Functions provide three different messaging semantics that you can apply to any function."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Delivery semantics"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"At-most-once")," delivery"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Each message sent to the function is likely to be processed, or not to be processed (hence "at most").')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"At-least-once")," delivery"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Each message sent to the function can be processed more than once (hence the "at least").')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Effectively-once")," delivery"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Each message sent to the function will have one output associated with it.")))),(0,i.kt)("h3",{id:"apply-processing-guarantees-to-a-function"},"Apply processing guarantees to a function"),(0,i.kt)("p",null,"You can set the processing guarantees for a Pulsar Function when you create the Function. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.2/reference-pulsar-admin#create-1"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-function create"))," command applies effectively-once guarantees to the Function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other function configs\n\n")),(0,i.kt)("p",null,"The available options are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATMOST_ONCE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATLEAST_ONCE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EFFECTIVELY_ONCE"))),(0,i.kt)("p",null,"The following command runs a function in the cluster mode with effectively-once guarantees applied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --name my-effectively-once-function \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other function configs\n\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"By default, Pulsar Functions provide at-least-once delivery guarantees. So if you create a function without supplying a value for the ",(0,i.kt)("inlineCode",{parentName:"p"},"--processingGuarantees")," flag, the function provides at-least-once guarantees.")),(0,i.kt)("h3",{id:"update-the-processing-guarantees-of-a-function"},"Update the processing guarantees of a function"),(0,i.kt)("p",null,"You can change the processing guarantees applied to a function using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.4.2/reference-pulsar-admin#update-1"},(0,i.kt)("inlineCode",{parentName:"a"},"update"))," command. The following is an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions update \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other function configs\n\n")))}m.isMDXComponent=!0},74922:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar-functions-overview-9d39ad7e0ec566e6ed2ee7cdf9717963.png"},72047:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar-functions-routing-example-22b3f2b036505ad4d4dfd5f878de3ae3.png"},73011:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pulsar-functions-word-count-f7b0d99f0a0e03e0b20fd0aa0ff6ef48.png"}}]);