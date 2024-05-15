"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32107],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return t?n.createElement(d,i(i({ref:a},p),{},{components:t})):n.createElement(d,i({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>w});var n=t(58168),r=t(96540),o=t(20053),i=t(23104),l=t(56347),s=t(57485),c=t(31682),p=t(89466);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function m(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??u(t);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function g(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,l.W6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[s,c]=d({queryString:t,groupId:n}),[u,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,p.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),h=(()=>{const e=s??u;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),y(e)}),[c,y,o]),tabValues:o}}var h=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:t,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),m=e=>{const a=e.currentTarget,t=p.indexOf(a),n=c[t].value;n!==l&&(u(a),s(n))},g=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>p.push(e),onKeyDown:g,onClick:m},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===a})}),t??a)})))}function N(e){let{lazy:a,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,a)),r.createElement(N,(0,n.A)({},e,a)))}function w(e){const a=(0,h.A)();return r.createElement(v,(0,n.A)({key:String(a)},e))}},24781:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(58168),r=(t(96540),t(15680)),o=t(11470),i=t(19365);const l={id:"io-develop",title:"How to develop Pulsar connectors",sidebar_label:"Develop",description:"Learn how to develop Pulsar connectors to move data between Pulsar and other systems."},s=void 0,c={unversionedId:"io-develop",id:"version-3.2.x/io-develop",title:"How to develop Pulsar connectors",description:"Learn how to develop Pulsar connectors to move data between Pulsar and other systems.",source:"@site/versioned_docs/version-3.2.x/io-develop.md",sourceDirName:".",slug:"/io-develop",permalink:"/docs/3.2.x/io-develop",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/io-develop.md",tags:[],version:"3.2.x",frontMatter:{id:"io-develop",title:"How to develop Pulsar connectors",sidebar_label:"Develop",description:"Learn how to develop Pulsar connectors to move data between Pulsar and other systems."},sidebar:"docsSidebar",previous:{title:"CDC connector",permalink:"/docs/3.2.x/io-cdc"},next:{title:"Overview",permalink:"/docs/3.2.x/tiered-storage-overview"}},p={},u=[{value:"Develop",id:"develop",level:2},{value:"Source",id:"source",level:3},{value:"Handle schema information",id:"handle-schema-information",level:4},{value:"Sink",id:"sink",level:3},{value:"Handle schema information",id:"handle-schema-information-1",level:4},{value:"Test",id:"test",level:2},{value:"Unit test",id:"unit-test",level:3},{value:"Integration test",id:"integration-test",level:3},{value:"Package",id:"package",level:2},{value:"NAR",id:"nar",level:3},{value:"Uber JAR",id:"uber-jar",level:3},{value:"Monitor",id:"monitor",level:2}],m={toc:u},g="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This guide describes how to develop Pulsar connectors to move data\nbetween Pulsar and other systems."),(0,r.yg)("p",null,"Pulsar connectors are special ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.2.x/functions-overview"},"Pulsar Functions"),", so creating\na Pulsar connector is similar to creating a Pulsar function."),(0,r.yg)("p",null,"Pulsar connectors come in two types:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Example"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"Source")),(0,r.yg)("td",{parentName:"tr",align:null},"Import data from another system to Pulsar."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/3.2.x/io-rabbitmq-source"},"RabbitMQ source connector")," imports the messages of a RabbitMQ queue to a Pulsar topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"Sink")),(0,r.yg)("td",{parentName:"tr",align:null},"Export data from Pulsar to another system."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/3.2.x/io-kinesis-sink"},"Kinesis sink connector")," exports the messages of a Pulsar topic to a Kinesis stream.")))),(0,r.yg)("h2",{id:"develop"},"Develop"),(0,r.yg)("p",null,"You can develop Pulsar source connectors and sink connectors."),(0,r.yg)("h3",{id:"source"},"Source"),(0,r.yg)("p",null,"To develop a source connector, you need to implement the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"open")," method and the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"read")," method, essentially implementing the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"Source")," interface."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Implement the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"open")," method."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n* Open connector with configuration\n*\n* @param config initialization config\n* @param sourceContext\n* @throws Exception IO type exceptions when opening a connector\n*/\nvoid open(final Map<String, Object> config, SourceContext sourceContext) throws Exception;\n")),(0,r.yg)("p",{parentName:"li"},"This method is called when the source connector is initialized."),(0,r.yg)("p",{parentName:"li"},"In this method, you can retrieve all connector-specific settings through the passed-in ",(0,r.yg)("inlineCode",{parentName:"p"},"config")," parameter and initialize all necessary resources."),(0,r.yg)("p",{parentName:"li"},"For example, a Kafka connector can create a Kafka client in this ",(0,r.yg)("inlineCode",{parentName:"p"},"open")," method."),(0,r.yg)("p",{parentName:"li"},"Besides, Pulsar runtime also provides a ",(0,r.yg)("inlineCode",{parentName:"p"},"SourceContext")," for the connector to access runtime resources for tasks like collecting metrics. The implementation can save the ",(0,r.yg)("inlineCode",{parentName:"p"},"SourceContext")," for future use.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Implement the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Source.java"},"read")," method."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"    /**\n    * Reads the next message from source.\n    * If source does not have any new messages, this call should block.\n    * @return next message from source.  The return result should never be null\n    * @throws Exception\n    */\n    Record<T> read() throws Exception;\n")),(0,r.yg)("p",{parentName:"li"},"If there is nothing to return, the implementation should be blocking rather than returning ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,r.yg)("p",{parentName:"li"},"The returned ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java"},"Record")," should encapsulate the following information, which is needed by the Pulsar IO runtime."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java"},"Record")," should provide the following variables:"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Variable"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"TopicName")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar topic name from which the record is originated from.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Key")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Messages can optionally be tagged with keys.",(0,r.yg)("br",null),(0,r.yg)("br",null),"For more information, see ",(0,r.yg)("a",{parentName:"td",href:"/docs/3.2.x/concepts-messaging#routing-modes"},"Routing modes"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Value")),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Actual data of the record.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"EventTime")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Event time of the record from the source.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PartitionId")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"If the record is originated from a partitioned source, it returns its ",(0,r.yg)("inlineCode",{parentName:"td"},"PartitionId"),". ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"PartitionId")," is used as a part of the unique identifier by Pulsar IO runtime to deduplicate messages and achieve exactly-once processing guarantee.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"RecordSequence")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"If the record is originated from a sequential source, it returns its ",(0,r.yg)("inlineCode",{parentName:"td"},"RecordSequence"),".",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"RecordSequence")," is used as a part of the unique identifier by Pulsar IO runtime to deduplicate messages and achieve exactly-once processing guarantee.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Properties")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"If the record carries user-defined properties, it returns those properties.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"DestinationTopic")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Topic to which message should be written.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Message")),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"A class which carries data sent by users.",(0,r.yg)("br",null),(0,r.yg)("br",null),"For more information, see ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-api/src/main/java/org/apache/pulsar/client/api/Message.java"},"Message.java"),"."))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/Record.java"},"Record")," should provide the following methods:"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Method"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ack")),(0,r.yg)("td",{parentName:"tr",align:null},"Acknowledge that the record is fully processed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fail")),(0,r.yg)("td",{parentName:"tr",align:null},"Indicate that the record fails to be processed.")))))))),(0,r.yg)("h4",{id:"handle-schema-information"},"Handle schema information"),(0,r.yg)("p",null,"Pulsar IO automatically handles the schema and provides a strongly typed API based on Java generics.\nIf you know the schema type that you are producing, you can declare the Java class relative to that type in your source declaration."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class MySource implements Source<String> {\n    public Record<String> read() {}\n}\n\n")),(0,r.yg)("p",null,"If you want to implement a source that works with any schema, you can go with ",(0,r.yg)("inlineCode",{parentName:"p"},"byte[]")," (of ",(0,r.yg)("inlineCode",{parentName:"p"},"ByteBuffer"),") and use ",(0,r.yg)("inlineCode",{parentName:"p"},"Schema.AUTO_PRODUCE_BYTES()"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class MySource implements Source<byte[]> {\n    public Record<byte[]> read() {\n\n        Schema wantedSchema = ....\n        Record<byte[]> myRecord = new MyRecordImplementation();\n        ....\n    }\n    class MyRecordImplementation implements Record<byte[]> {\n         public byte[] getValue() {\n            return ....encoded byte[]...that represents the value\n         }\n         public Schema<byte[]> getSchema() {\n             return Schema.AUTO_PRODUCE_BYTES(wantedSchema);\n         }\n    }\n}\n")),(0,r.yg)("p",null,"To handle the ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyValue")," type properly, follow the guidelines for your record implementation:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"It must implement ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/tree/master//pulsar-functions/api-java/src/main/java/org/apache/pulsar/functions/api/KVRecord.java"},"Record")," interface and implement ",(0,r.yg)("inlineCode",{parentName:"li"},"getKeySchema"),",",(0,r.yg)("inlineCode",{parentName:"li"},"getValueSchema"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"getKeyValueEncodingType")),(0,r.yg)("li",{parentName:"ul"},"It must return a ",(0,r.yg)("inlineCode",{parentName:"li"},"KeyValue")," object as ",(0,r.yg)("inlineCode",{parentName:"li"},"Record.getValue()")),(0,r.yg)("li",{parentName:"ul"},"It may return null in ",(0,r.yg)("inlineCode",{parentName:"li"},"Record.getSchema()"))),(0,r.yg)("p",null,"When Pulsar IO runtime encounters a ",(0,r.yg)("inlineCode",{parentName:"p"},"KVRecord"),", it does the following changes automatically:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Set the proper ",(0,r.yg)("inlineCode",{parentName:"li"},"KeyValueSchema")),(0,r.yg)("li",{parentName:"ul"},"Encode the Message Key and the Message Value according to the ",(0,r.yg)("inlineCode",{parentName:"li"},"KeyValueEncoding")," (SEPARATED or INLINE)")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about ",(0,r.yg)("strong",{parentName:"p"},"how to create a source connector"),", see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java"},"KafkaSource"),".")),(0,r.yg)("h3",{id:"sink"},"Sink"),(0,r.yg)("p",null,"Developing a sink connector ",(0,r.yg)("strong",{parentName:"p"},"is similar to")," developing a source connector, that is, you need to implement the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"Sink")," interface, which means implementing the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"open")," method and the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"write")," method."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Implement the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"open")," method."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"    /**\n    * Open connector with configuration\n    *\n    * @param config initialization config\n    * @param sinkContext\n    * @throws Exception IO type exceptions when opening a connector\n    */\n    void open(final Map<String, Object> config, SinkContext sinkContext) throws Exception;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Implement the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/core/src/main/java/org/apache/pulsar/io/core/Sink.java"},"write")," method."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-java"},"    /**\n    * Write a message to Sink\n    * @param record record to write to sink\n    * @throws Exception\n    */\n    void write(Record<T> record) throws Exception;\n")),(0,r.yg)("p",{parentName:"li"},"During the implementation, you can decide how to write the ",(0,r.yg)("inlineCode",{parentName:"p"},"Value")," and\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"Key")," to the actual sink, and leverage all the provided information such as\n",(0,r.yg)("inlineCode",{parentName:"p"},"PartitionId")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"RecordSequence")," to achieve different processing guarantees."),(0,r.yg)("p",{parentName:"li"},"You also need to ack records (if messages are sent successfully) or fail records (if messages fail to send)."))),(0,r.yg)("h4",{id:"handle-schema-information-1"},"Handle schema information"),(0,r.yg)("p",null,"Pulsar IO automatically handles the Schema and provides a strongly typed API based on Java generics.\nIf you know the Schema type that you are consuming from you can declare the Java class relative to that type in your Sink declaration."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class MySink implements Sink<String> {\n    public void write(Record<String> record) {}\n}\n")),(0,r.yg)("p",null,"If you want to implement a sink that works with any schema, you can you go with the special GenericObject interface."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class MySink implements Sink<GenericObject> {\n    public void write(Record<GenericObject> record) {\n        Schema schema = record.getSchema();\n        GenericObject genericObject = record.getValue();\n        if (genericObject != null) {\n            SchemaType type = genericObject.getSchemaType();\n            Object nativeObject = genericObject.getNativeObject();\n            ...\n        }\n        ....\n    }\n}\n")),(0,r.yg)("p",null,"In the case of AVRO, JSON, and Protobuf records (schemaType=AVRO,JSON,PROTOBUF_NATIVE), you can cast the\n",(0,r.yg)("inlineCode",{parentName:"p"},"genericObject")," variable to ",(0,r.yg)("inlineCode",{parentName:"p"},"GenericRecord")," and use ",(0,r.yg)("inlineCode",{parentName:"p"},"getFields()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"getField()")," API.\nYou can access the native AVRO record using ",(0,r.yg)("inlineCode",{parentName:"p"},"genericObject.getNativeObject()"),"."),(0,r.yg)("p",null,"In the case of KeyValue type, you can access both the schema for the key and the schema for the value using this code."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class MySink implements Sink<GenericObject> {\n    public void write(Record<GenericObject> record) {\n        Schema schema = record.getSchema();\n        GenericObject genericObject = record.getValue();\n        SchemaType type = genericObject.getSchemaType();\n        Object nativeObject = genericObject.getNativeObject();\n        if (type == SchemaType.KEY_VALUE) {\n            KeyValue keyValue = (KeyValue) nativeObject;\n            Object key = keyValue.getKey();\n            Object value = keyValue.getValue();\n\n            KeyValueSchema keyValueSchema = (KeyValueSchema) schema;\n            Schema keySchema = keyValueSchema.getKeySchema();\n            Schema valueSchema = keyValueSchema.getValueSchema();\n        }\n        ...\n    }\n}\n")),(0,r.yg)("h2",{id:"test"},"Test"),(0,r.yg)("p",null,"Testing connectors can be challenging because Pulsar IO connectors interact with two systems\nthat may be difficult to mock\u2014Pulsar and the system to which the connector is connecting."),(0,r.yg)("p",null,"It is recommended to write special tests to test the connector functionalities as below\nwhile mocking the external service."),(0,r.yg)("h3",{id:"unit-test"},"Unit test"),(0,r.yg)("p",null,"You can create unit tests for your connector."),(0,r.yg)("h3",{id:"integration-test"},"Integration test"),(0,r.yg)("p",null,"Once you have written sufficient unit tests, you can add\nseparate integration tests to verify end-to-end functionality."),(0,r.yg)("p",null,"Pulsar uses ",(0,r.yg)("a",{parentName:"p",href:"https://www.testcontainers.org/"},"testcontainers")," ",(0,r.yg)("strong",{parentName:"p"},"for all integration tests"),"."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about ",(0,r.yg)("strong",{parentName:"p"},"how to create integration tests for Pulsar connectors"),", see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//tests/integration/src/test/java/org/apache/pulsar/tests/integration/io"},"IntegrationTests"),".")),(0,r.yg)("h2",{id:"package"},"Package"),(0,r.yg)("p",null,"Once you've developed and tested your connector, you need to package it so that it can be submitted\nto a ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.2.x/functions-overview"},"Pulsar Functions")," cluster."),(0,r.yg)("p",null,"There are two methods to package a connector:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#nar"},"NAR")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#uber-jar"},"Uber JAR"))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If you plan to package and distribute your connector for others to use, you are obligated to\nlicense and copyright your own code properly. Remember to add the license and copyright to\nall libraries your code uses and to your distribution.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If you use the ",(0,r.yg)("a",{parentName:"p",href:"#nar"},"NAR")," method, the NAR plugin\nautomatically creates a ",(0,r.yg)("inlineCode",{parentName:"p"},"DEPENDENCIES")," file in the generated NAR package, including the proper\nlicensing and copyrights of all libraries of your connector."),(0,r.yg)("p",{parentName:"blockquote"},"For the runtime Java version, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation"},"Pulsar Runtime Java Version Recommendation")," according to your target Pulsar version.")),(0,r.yg)("h3",{id:"nar"},"NAR"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"NAR")," stands for NiFi Archive, which is a custom packaging mechanism used by Apache NiFi, to provide\na bit of Java ClassLoader isolation."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about ",(0,r.yg)("strong",{parentName:"p"},"how NAR works"),", see ",(0,r.yg)("a",{parentName:"p",href:"https://medium.com/hashmapinc/nifi-nar-files-explained-14113f7796fd"},"here"),".")),(0,r.yg)("p",null,"Pulsar uses the same mechanism for packaging ",(0,r.yg)("strong",{parentName:"p"},"all")," ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.2.x/io-connectors"},"built-in connectors"),"."),(0,r.yg)("p",null,"The easiest approach to package a Pulsar connector is to create a NAR package using ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin"},"nifi-nar-maven-plugin"),"."),(0,r.yg)("p",null,"Include this ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.nifi/nifi-nar-maven-plugin"},"nifi-nar-maven-plugin")," in your maven project for your connector as below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<plugins>\n  <plugin>\n    <groupId>org.apache.nifi</groupId>\n    <artifactId>nifi-nar-maven-plugin</artifactId>\n    <version>1.5.0</version>\n  </plugin>\n</plugins>\n")),(0,r.yg)("p",null,"You must also create a ",(0,r.yg)("inlineCode",{parentName:"p"},"resources/META-INF/services/pulsar-io.yaml")," file with the following contents:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"name: connector name\ndescription: connector description\nsourceClass: fully qualified class name (only if source connector)\nsinkClass: fully qualified class name (only if sink connector)\n")),(0,r.yg)("p",null,"For Gradle users, there is a ",(0,r.yg)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/io.github.lhotari.gradle-nar-plugin"},"Gradle Nar plugin available on the Gradle Plugin Portal"),"."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about ",(0,r.yg)("strong",{parentName:"p"},"how to use NAR for Pulsar connectors"),", see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//pulsar-io/twitter/pom.xml"},"TwitterFirehose"),".")),(0,r.yg)("h3",{id:"uber-jar"},"Uber JAR"),(0,r.yg)("p",null,"An alternative approach is to create an ",(0,r.yg)("strong",{parentName:"p"},"uber JAR")," that contains all of the connector's JAR files\nand other resource files. No directory internal structure is necessary."),(0,r.yg)("p",null,"You can use ",(0,r.yg)("a",{parentName:"p",href:"https://maven.apache.org/plugins/maven-shade-plugin/examples/includes-excludes.html"},"maven-shade-plugin")," to create a uber JAR as below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n  <groupId>org.apache.maven.plugins</groupId>\n  <artifactId>maven-shade-plugin</artifactId>\n  <version>3.1.1</version>\n  <executions>\n    <execution>\n      <phase>package</phase>\n      <goals>\n        <goal>shade</goal>\n      </goals>\n      <configuration>\n        <filters>\n          <filter>\n            <artifact>*:*</artifact>\n          </filter>\n        </filters>\n      </configuration>\n    </execution>\n  </executions>\n</plugin>\n")),(0,r.yg)("h2",{id:"monitor"},"Monitor"),(0,r.yg)("p",null,"Pulsar connectors enable you to move data in and out of Pulsar easily. It is important to ensure that the running connectors are healthy at any time. You can monitor Pulsar connectors that have been deployed with the following methods:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Check the metrics provided by Pulsar."),(0,r.yg)("p",{parentName:"li"},"Pulsar connectors expose the metrics that can be collected and used for monitoring the health of ",(0,r.yg)("strong",{parentName:"p"},"Java")," connectors. You can check the metrics by following the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.2.x/deploy-monitoring"},"monitoring")," guide.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Set and check your customized metrics."),(0,r.yg)("p",{parentName:"li"},"In addition to the metrics provided by Pulsar, Pulsar allows you to customize metrics for ",(0,r.yg)("strong",{parentName:"p"},"Java")," connectors. Function workers collect user-defined metrics to Prometheus automatically and you can check them in Grafana."))),(0,r.yg)("p",null,"Here is an example of how to customize metrics for a Java connector."),(0,r.yg)(o.A,{defaultValue:"Java",values:[{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class TestMetricSink implements Sink<String> {\n\n        @Override\n        public void open(Map<String, Object> config, SinkContext sinkContext) throws Exception {\n            sinkContext.recordMetric("foo", 1);\n        }\n\n        @Override\n        public void write(Record<String> record) throws Exception {\n\n        }\n\n        @Override\n        public void close() throws Exception {\n\n        }\n    }\n')))))}d.isMDXComponent=!0}}]);