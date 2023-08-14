"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[87209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={id:"functions-concepts",title:"Pulsar Functions concepts",sidebar_label:"Concepts"},r=void 0,s={unversionedId:"functions-concepts",id:"version-3.1.x/functions-concepts",title:"Pulsar Functions concepts",description:"Fully Qualified Function Name",source:"@site/versioned_docs/version-3.1.x/functions-concepts.md",sourceDirName:".",slug:"/functions-concepts",permalink:"/docs/3.1.x/functions-concepts",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/functions-concepts.md",tags:[],version:"3.1.x",frontMatter:{id:"functions-concepts",title:"Pulsar Functions concepts",sidebar_label:"Concepts"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/3.1.x/functions-overview"},next:{title:"Get started",permalink:"/docs/3.1.x/functions-quickstart"}},l={},c=[{value:"Fully Qualified Function Name",id:"fully-qualified-function-name",level:2},{value:"Function instance",id:"function-instance",level:2},{value:"Function worker",id:"function-worker",level:2},{value:"Function runtime",id:"function-runtime",level:2},{value:"Processing guarantees and subscription types",id:"processing-guarantees-and-subscription-types",level:2},{value:"Context",id:"context",level:2},{value:"Function message types",id:"function-message-types",level:2},{value:"Window function",id:"window-function",level:2},{value:"Types of window",id:"types-of-window",level:3},{value:"Tumbling window",id:"tumbling-window",level:4},{value:"Sliding window",id:"sliding-window",level:4}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fully-qualified-function-name"},"Fully Qualified Function Name"),(0,i.kt)("p",null,"Each function has a Fully Qualified Function Name (FQFN) with a specified tenant, namespace, and function name. With FQFN, you can create multiple functions in different namespaces with the same function name."),(0,i.kt)("p",null,"An FQFN looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"tenant/namespace/name\n")),(0,i.kt)("h2",{id:"function-instance"},"Function instance"),(0,i.kt)("p",null,"Function instance is the core element of the function execution framework, consisting of the following elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A collection of consumers consuming messages from different input topics."),(0,i.kt)("li",{parentName:"ul"},"An executor that invokes the function."),(0,i.kt)("li",{parentName:"ul"},"A producer that sends the result of a function to an output topic.")),(0,i.kt)("p",null,"The following figure illustrates the internal workflow of a function instance."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Function instance",src:n(92650).Z,width:"1311",height:"720"})),(0,i.kt)("p",null,"A function can have multiple instances, and each instance executes one copy of a function. You can specify the number of instances in the configuration file."),(0,i.kt)("p",null,"The consumers inside a function instance use FQFN as subscriber names to enable load balancing between multiple instances based on subscription types. The subscription type can be specified at the function level."),(0,i.kt)("p",null,"Each function has a separate state store with FQFN. You can specify a state interface to persist intermediate results in the BookKeeper. Other users can query the state of the function and extract these results."),(0,i.kt)("h2",{id:"function-worker"},"Function worker"),(0,i.kt)("p",null,"Function worker is a logic component to monitor, orchestrate, and execute an individual function in ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.1.x/functions-deploy#depoy-a-function-in-cluster-mode"},"cluster-mode")," deployment of Pulsar Functions."),(0,i.kt)("p",null,"Within function workers, each ",(0,i.kt)("a",{parentName:"p",href:"#function-instance"},"function instance")," can be executed as a thread or process, depending on the selected configurations. Alternatively, if a Kubernetes cluster is available, functions can be spawned as StatefulSets within Kubernetes. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.1.x/functions-worker"},"Set up function workers")," for more details."),(0,i.kt)("p",null,"The following figure illustrates the internal architecture and workflow of function workers."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Function worker workflow",src:n(3999).Z,width:"1194",height:"622"})),(0,i.kt)("p",null,"Function workers form a cluster of worker nodes and the workflow is described as follows."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User sends a request to the REST server to execute a function instance."),(0,i.kt)("li",{parentName:"ol"},"The REST server responds to the request and passes the request to the function metadata manager."),(0,i.kt)("li",{parentName:"ol"},"The function metadata manager writes the request updates to the function metadata topic. It also keeps track of all the metadata-related messages and uses the function metadata topic to persist the state updates of functions."),(0,i.kt)("li",{parentName:"ol"},"The function metadata manager reads updates from the function metadata topic and triggers the schedule manager to compute an assignment."),(0,i.kt)("li",{parentName:"ol"},"The schedule manager writes the assignment updates to the assignment topic."),(0,i.kt)("li",{parentName:"ol"},"The function runtime manager listens to the assignment topic, reads the assignment updates, and updates its internal state that contains a global view of all assignments for all workers. If the update changes the assignment on a worker, the function runtime manager materializes the new assignment by starting or stopping the execution of function instances."),(0,i.kt)("li",{parentName:"ol"},"The membership manager requests the coordination topic to elect a lead worker. All workers subscribe to the coordination topic in a failover subscription, but the active worker becomes the leader and performs the assignment, guaranteeing only one active consumer for this topic."),(0,i.kt)("li",{parentName:"ol"},"The membership manager reads updates from the coordination topic.")),(0,i.kt)("h2",{id:"function-runtime"},"Function runtime"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"#function-instance"},"function instance")," is invoked inside a runtime, and a number of instances can run in parallel. Pulsar supports three types of function runtime with different costs and isolation guarantees to maximize deployment flexibility. You can use one of them to run functions based on your needs. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.1.x/functions-runtime"},"Configure function runtime")," for more details."),(0,i.kt)("p",null,"The following table outlines the three types of function runtime."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Thread runtime"),(0,i.kt)("td",{parentName:"tr",align:null},"Each instance runs as a thread.",(0,i.kt)("br",null),(0,i.kt)("br",null),"Since the code for thread mode is written in Java, it is ",(0,i.kt)("strong",{parentName:"td"},"only")," applicable to Java instances. When a function runs in thread mode, it runs on the same Java virtual machine (JVM) with a function worker.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Process runtime"),(0,i.kt)("td",{parentName:"tr",align:null},"Each instance runs as a process.",(0,i.kt)("br",null),(0,i.kt)("br",null),"When a function runs in process mode, it runs on the same machine that the function worker runs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes runtime"),(0,i.kt)("td",{parentName:"tr",align:null},"Function is submitted as Kubernetes StatefulSet by workers and each function instance runs as a pod. Pulsar supports adding labels to the Kubernetes StatefulSets and services while launching functions, which facilitates selecting the target Kubernetes objects.")))),(0,i.kt)("h2",{id:"processing-guarantees-and-subscription-types"},"Processing guarantees and subscription types"),(0,i.kt)("p",null,"Pulsar provides three different messaging delivery semantics that you can apply to a function. Different delivery semantic implementations are determined according to the ",(0,i.kt)("strong",{parentName:"p"},"ack time node"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Delivery semantics"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Adopted subscription type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"At-most-once")," delivery"),(0,i.kt)("td",{parentName:"tr",align:null},"Each message sent to a function is processed at its best effort. There is no guarantee that the message will be processed or not. ",(0,i.kt)("br",null),(0,i.kt)("br",null)," When you select this semantic, the ",(0,i.kt)("inlineCode",{parentName:"td"},"autoAck")," configuration must be set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", otherwise the startup will fail (the ",(0,i.kt)("inlineCode",{parentName:"td"},"autoAck")," configuration will be deprecated in future releases). ",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"td"},"Ack time node"),": Before function processing."),(0,i.kt)("td",{parentName:"tr",align:null},"Shared")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"At-least-once")," delivery (default)"),(0,i.kt)("td",{parentName:"tr",align:null},"Each message sent to a function can be processed more than once (in case of a processing failure or redelivery).",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you create a function without specifying the ",(0,i.kt)("inlineCode",{parentName:"td"},"--processing-guarantees")," flag, the function provides ",(0,i.kt)("inlineCode",{parentName:"td"},"at-least-once")," delivery guarantee. ",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"td"},"Ack time node"),": After sending a message to output."),(0,i.kt)("td",{parentName:"tr",align:null},"Shared")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Effectively-once")," delivery"),(0,i.kt)("td",{parentName:"tr",align:null},"Each message sent to a function can be processed more than once but it has only one output. Duplicated messages are ignored.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Effectively once")," is achieved on top of ",(0,i.kt)("inlineCode",{parentName:"td"},"at-least-once")," processing and guaranteed server-side deduplication. This means a state update can happen twice, but the same state update is only applied once, the other duplicated state update is discarded on the server-side. ",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"td"},"Ack time node"),": After sending a message to output."),(0,i.kt)("td",{parentName:"tr",align:null},"Failover")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Manual")," delivery"),(0,i.kt)("td",{parentName:"tr",align:null},"When you select this semantic, the framework does not perform any ack operations, and you need to call the method ",(0,i.kt)("inlineCode",{parentName:"td"},"context.getCurrentRecord().ack()")," inside a function to manually perform the ack operation. ",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"td"},"Ack time node"),": User-defined within function methods."),(0,i.kt)("td",{parentName:"tr",align:null},"Shared")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"By default, Pulsar Functions provide ",(0,i.kt)("inlineCode",{parentName:"li"},"at-least-once")," delivery guarantees. If you create a function without supplying a value for the ",(0,i.kt)("inlineCode",{parentName:"li"},"--processingGuarantees")," flag, the function provides ",(0,i.kt)("inlineCode",{parentName:"li"},"at-least-once")," guarantees."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Exclusive")," subscription type is ",(0,i.kt)("strong",{parentName:"li"},"not")," available in Pulsar Functions because:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If there is only one instance, ",(0,i.kt)("inlineCode",{parentName:"li"},"exclusive")," equals ",(0,i.kt)("inlineCode",{parentName:"li"},"failover"),"."),(0,i.kt)("li",{parentName:"ul"},"If there are multiple instances, ",(0,i.kt)("inlineCode",{parentName:"li"},"exclusive")," may crash and restart when functions restart. In this case, ",(0,i.kt)("inlineCode",{parentName:"li"},"exclusive")," does not equal ",(0,i.kt)("inlineCode",{parentName:"li"},"failover"),". Because when the master consumer disconnects, all non-acknowledged and subsequent messages are delivered to the next consumer in line."))),(0,i.kt)("li",{parentName:"ul"},"To change the subscription type from ",(0,i.kt)("inlineCode",{parentName:"li"},"shared")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"key_shared"),", you can use the ",(0,i.kt)("inlineCode",{parentName:"li"},"\u2014retain-key-ordering")," option in ",(0,i.kt)("a",{parentName:"li",href:"pathname:///reference/#/3.1.x/pulsar-admin/"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),"."))),(0,i.kt)("p",null,"You can set the processing guarantees for a function when you create the function. The following command creates a function with effectively-once guarantees applied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --name my-effectively-once-function \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other function configs\n")),(0,i.kt)("p",null,"You can change the processing guarantees applied to a function using the ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions update \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other function configs\n")),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Java, Python, and Go SDKs provide access to a ",(0,i.kt)("strong",{parentName:"p"},"context object")," that can be used by a function. This context object provides a wide variety of information and functionality to the function including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The name and ID of a function."),(0,i.kt)("li",{parentName:"ul"},"The message ID of a message. Each message is automatically assigned with an ID."),(0,i.kt)("li",{parentName:"ul"},"The key, event time, properties, and partition key of a message."),(0,i.kt)("li",{parentName:"ul"},"The name of the topic that a message is sent to."),(0,i.kt)("li",{parentName:"ul"},"The names of all input topics as well as the output topic associated with the function."),(0,i.kt)("li",{parentName:"ul"},"The name of the class used for ",(0,i.kt)("a",{parentName:"li",href:"/docs/3.1.x/functions-develop-serde"},"SerDe"),"."),(0,i.kt)("li",{parentName:"ul"},"The tenant and namespace associated with the function."),(0,i.kt)("li",{parentName:"ul"},"The ID of the function instance running the function."),(0,i.kt)("li",{parentName:"ul"},"The version of the function."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/3.1.x/functions-develop-log"},"logger object")," used by the function, which is used to create log messages."),(0,i.kt)("li",{parentName:"ul"},"Access to arbitrary ",(0,i.kt)("a",{parentName:"li",href:"/docs/3.1.x/functions-develop-user-defined-configs"},"user configuration")," values supplied via the CLI."),(0,i.kt)("li",{parentName:"ul"},"An interface for recording ",(0,i.kt)("a",{parentName:"li",href:"/docs/3.1.x/functions-develop-metrics"},"metrics"),"."),(0,i.kt)("li",{parentName:"ul"},"An interface for storing and retrieving state in ",(0,i.kt)("a",{parentName:"li",href:"/docs/3.1.x/functions-develop-state"},"state storage"),"."),(0,i.kt)("li",{parentName:"ul"},"A function to publish new messages onto arbitrary topics."),(0,i.kt)("li",{parentName:"ul"},"A function to acknowledge the message being processed (if auto-ack is disabled)."),(0,i.kt)("li",{parentName:"ul"},"(Java) A function to get the Pulsar admin client."),(0,i.kt)("li",{parentName:"ul"},"(Java) A function to create a Record to return with default values taken from the Context and the input Record.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For more information about code examples, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/BaseContext.java"},"Java"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/instance/src/main/python/contextimpl.py"},"Python")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-function-go/pf/context.go"},"Go"),".")),(0,i.kt)("h2",{id:"function-message-types"},"Function message types"),(0,i.kt)("p",null,"Pulsar Functions take byte arrays as inputs and spit out byte arrays as output. You can write typed functions and bind messages to types by using either of the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.1.x/functions-develop-schema-registry"},"Schema Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/3.1.x/functions-develop-serde"},"SerDe"))),(0,i.kt)("h2",{id:"window-function"},"Window function"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Currently, window functions are only available in Java, and do not support ",(0,i.kt)("inlineCode",{parentName:"p"},"MANUAL")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"Effectively-once")," delivery semantics.")),(0,i.kt)("p",null,'A window function is a function that performs computation across a data window, that is, a finite subset of the event stream. As illustrated below, the stream is split into "buckets" where functions can be applied.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A window of data within an event stream",src:n(7301).Z,width:"1197",height:"439"})),(0,i.kt)("p",null,"The definition of a data window for a function involves two policies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eviction policy: Controls the amount of data collected in a window."),(0,i.kt)("li",{parentName:"ul"},"Trigger policy: Controls when a function is triggered and executed to process all of the data collected in a window based on eviction policy.")),(0,i.kt)("p",null,"Both trigger policy and eviction policy are driven by either time or count."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Both processing time and event time are supported."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Processing time is defined based on the wall time when the function instance builds and processes a window. The judging of window completeness is straightforward and you don't have to worry about data arrival disorder."),(0,i.kt)("li",{parentName:"ul"},"Event time is defined based on the timestamps that come with the event record. It guarantees event time correctness but also offers more data buffering and a limited completeness guarantee."))),(0,i.kt)("h3",{id:"types-of-window"},"Types of window"),(0,i.kt)("p",null,"Based on whether two adjacent windows can share common events or not, windows can be divided into the following two types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tumbling-window"},"Tumbling window")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sliding-window"},"Sliding window"))),(0,i.kt)("h4",{id:"tumbling-window"},"Tumbling window"),(0,i.kt)("p",null,"A tumbling window assigns elements to a window of a specified time length or count. The eviction policy for tumbling windows is always based on the window being full. So you only need to specify the trigger policy, either count-based or time-based."),(0,i.kt)("p",null,"In a tumbling window with a count-based trigger policy, as illustrated in the following example, the trigger policy is set to 2. Each function is triggered and executed when two items are in the window, regardless of the time."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A tumbling window with a count-based trigger policy",src:n(83184).Z,width:"910",height:"344"})),(0,i.kt)("p",null,"In contrast, as illustrated in the following example, the window length of the tumbling window is 10 seconds, which means the function is triggered when the 10-second time interval has elapsed, regardless of how many events are in the window."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A tumbling window with a time-based trigger policy",src:n(42445).Z,width:"1197",height:"364"})),(0,i.kt)("h4",{id:"sliding-window"},"Sliding window"),(0,i.kt)("p",null,"The sliding window method defines a fixed window length by setting the eviction policy to limit the amount of data retained for processing and setting the trigger policy with a sliding interval. If the sliding interval is smaller than the window length, there is data overlapping, which means the data simultaneously falling into adjacent windows is used for computation more than once."),(0,i.kt)("p",null,"As illustrated in the following example, the window length is 2 seconds, which means that any data older than 2 seconds will be evicted and not used in the computation. The sliding interval is configured to be 1 second, which means that function is executed every second to process the data within the entire window length."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sliding window with an overlap",src:n(35646).Z,width:"999",height:"398"})))}p.isMDXComponent=!0},83184:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/function-count-based-tumbling-window-0587ee0489e6be580ac380eb1b6c98a1.svg"},7301:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/function-data-window-979b37e2e5a44cc294d3ecb4570ba77a.svg"},92650:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/function-instance-37394277b972e42d07a1ea48f9301eda.svg"},35646:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/function-sliding-window-2493011be05177cdbe8cd5633291e1a6.svg"},42445:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/function-time-based-tumbling-window-6098934b4ae199379cea9ebad3cd488c.svg"},3999:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/function-worker-workflow-31987a049ff3cddf55ee76b431700365.svg"}}]);