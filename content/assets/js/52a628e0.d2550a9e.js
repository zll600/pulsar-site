"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[80586],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>g});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?t.createElement(g,i(i({ref:n},c),{},{components:a})):t.createElement(g,i({ref:n},c))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,n,a)=>{a.d(n,{A:()=>i});var t=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:a,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},n)}},11470:(e,n,a)=>{a.d(n,{A:()=>x});var t=a(58168),r=a(96540),l=a(20053),i=a(23104),o=a(56347),s=a(57485),p=a(31682),c=a(89466);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function u(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??m(a);return function(e){const n=(0,p.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function d(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function y(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,l=u(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[s,p]=g({queryString:a,groupId:t}),[m,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:t}),h=(()=>{const e=s??m;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),y(e)}),[p,y,l]),tabValues:l}}var h=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:n,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.a_)(),u=e=>{const n=e.currentTarget,a=c.indexOf(n),t=p[a].value;t!==o&&(m(n),s(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n)},p.map((e=>{let{value:n,label:a,attributes:i}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:d,onClick:u},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===n})}),a??n)})))}function b(e){let{lazy:n,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function v(e){const n=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(N,(0,t.A)({},e,n)),r.createElement(b,(0,t.A)({},e,n)))}function x(e){const n=(0,h.A)();return r.createElement(v,(0,t.A)({key:String(n)},e))}},68643:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var t=a(58168),r=(a(96540),a(15680)),l=a(11470),i=a(19365);const o={id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},s=void 0,p={unversionedId:"client-libraries-python",id:"version-2.10.x/client-libraries-python",title:"Pulsar Python client",description:"Pulsar Python client library is a wrapper over the existing C++ client library and exposes all of the same features. You can find the code in the Python directory of the C++ client code.",source:"@site/versioned_docs/version-2.10.x/client-libraries-python.md",sourceDirName:".",slug:"/client-libraries-python",permalink:"/docs/2.10.x/client-libraries-python",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/client-libraries-python.md",tags:[],version:"2.10.x",frontMatter:{id:"client-libraries-python",title:"Pulsar Python client",sidebar_label:"Python",original_id:"client-libraries-python"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Go",permalink:"/docs/2.10.x/client-libraries-go"},next:{title:"C++",permalink:"/docs/2.10.x/client-libraries-cpp"}},c={},m=[{value:"Install",id:"install",level:2},{value:"Install using pip",id:"install-using-pip",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:3},{value:"Install from source",id:"install-from-source",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Examples",id:"examples",level:2},{value:"Producer example",id:"producer-example",level:3},{value:"Consumer example",id:"consumer-example",level:3},{value:"Reader interface example",id:"reader-interface-example",level:3},{value:"Multi-topic subscriptions",id:"multi-topic-subscriptions",level:3},{value:"Schema",id:"schema",level:2},{value:"Supported schema types",id:"supported-schema-types",level:3},{value:"Schema definition reference",id:"schema-definition-reference",level:3},{value:"Fields parameters",id:"fields-parameters",level:4},{value:"Schema definition examples",id:"schema-definition-examples",level:4},{value:"Simple definition",id:"simple-definition",level:5},{value:"Using enums",id:"using-enums",level:5},{value:"Complex types",id:"complex-types",level:5},{value:"Set namespace for Avro schema",id:"set-namespace-for-avro-schema",level:5},{value:"Declare and validate schema",id:"declare-and-validate-schema",level:3},{value:"Method 1: Record",id:"method-1-record",level:4},{value:"Method 2: JSON definition",id:"method-2-json-definition",level:4},{value:"Record",id:"record",level:4},{value:"End-to-end encryption",id:"end-to-end-encryption",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Tutorial",id:"tutorial",level:3}],u={toc:m},d="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Pulsar Python client library is a wrapper over the existing ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/client-libraries-cpp"},"C++ client library")," and exposes all of the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/cpp/2.10.x"},"same features"),". You can find the code in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-python"},"Python directory")," of the C++ client code."),(0,r.yg)("p",null,"All the methods in producer, consumer, and reader of a Python client are thread-safe."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/BurntSushi/pdoc"},"pdoc"),"-generated API docs for the Python client are available ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/2.10.x"},"here"),"."),(0,r.yg)("h2",{id:"install"},"Install"),(0,r.yg)("p",null,"You can install the ",(0,r.yg)("a",{parentName:"p",href:"https://pypi.python.org/pypi/pulsar-client"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-client"))," library either via ",(0,r.yg)("a",{parentName:"p",href:"https://pypi.python.org/pypi"},"PyPi"),", using ",(0,r.yg)("a",{parentName:"p",href:"#installation-using-pip"},"pip"),", or by building the library from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-client-cpp"},"source"),"."),(0,r.yg)("h3",{id:"install-using-pip"},"Install using pip"),(0,r.yg)("p",null,"To install the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library as a pre-built package using the ",(0,r.yg)("a",{parentName:"p",href:"https://pip.pypa.io/en/stable/"},"pip")," package manager:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install pulsar-client==2.10.2\n")),(0,r.yg)("h3",{id:"optional-dependencies"},"Optional dependencies"),(0,r.yg)("p",null,"If you install the client libraries on Linux to support services like Pulsar functions or Avro serialization, you can install optional components alongside the  ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# avro serialization\npip install 'pulsar-client[avro]==2.10.2'\n\n# functions runtime\npip install 'pulsar-client[functions]==2.10.2'\n\n# all optional components\npip install 'pulsar-client[all]==2.10.2'\n")),(0,r.yg)("p",null,"Installation via PyPi is available for the following Python versions:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Platform"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Supported Python versions"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"MacOS ",(0,r.yg)("br",null),"  10.13 (High Sierra), 10.14 (Mojave) ",(0,r.yg)("br",null)),(0,r.yg)("td",{parentName:"tr",align:"left"},"2.7, 3.7, 3.8, 3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Linux"),(0,r.yg)("td",{parentName:"tr",align:"left"},"2.7, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9")))),(0,r.yg)("h3",{id:"install-from-source"},"Install from source"),(0,r.yg)("p",null,"To install the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library by building from source, follow ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/client-libraries-cpp#compilation"},"instructions")," and compile the Pulsar C++ client library. That builds the Python binding for the library."),(0,r.yg)("p",null,"To install the built Python bindings:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ git clone https://github.com/apache/pulsar\n$ cd pulsar/pulsar-client-cpp/python\n$ sudo python setup.py install\n\n")),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("p",null,"The complete Python API reference is available at ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/python/2.10.x"},"(https://pulsar.apache.org/api/python/2.10.x)"),"."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"You can find a variety of Python code examples for the ",(0,r.yg)("a",{parentName:"p",href:"/pulsar-client-cpp/python"},"pulsar-client")," library."),(0,r.yg)("h3",{id:"producer-example"},"Producer example"),(0,r.yg)("p",null,"The following example creates a Python producer for the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-topic")," topic and sends 10 messages on that topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nproducer = client.create_producer('my-topic')\n\nfor i in range(10):\n    producer.send(('Hello-%d' % i).encode('utf-8'))\n\nclient.close()\n\n")),(0,r.yg)("h3",{id:"consumer-example"},"Consumer example"),(0,r.yg)("p",null,"The following example creates a consumer with the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-subscription")," subscription name on the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-topic")," topic, receives incoming messages, prints the content and ID of messages that arrive, and acknowledges each message to the Pulsar broker."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\n\nconsumer = client.subscribe('my-topic', 'my-subscription')\n\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\nclient.close()\n\n")),(0,r.yg)("p",null,"This example shows how to configure negative acknowledgement."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nfrom pulsar import Client, schema\nclient = Client('pulsar://localhost:6650')\nconsumer = client.subscribe('negative_acks','test',schema=schema.StringSchema())\nproducer = client.create_producer('negative_acks',schema=schema.StringSchema())\nfor i in range(10):\n    print('send msg \"hello-%d\"' % i)\n    producer.send_async('hello-%d' % i, callback=None)\nproducer.flush()\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.negative_acknowledge(msg)\n    print('receive and nack msg \"%s\"' % msg.data())\nfor i in range(10):\n    msg = consumer.receive()\n    consumer.acknowledge(msg)\n    print('receive and ack msg \"%s\"' % msg.data())\ntry:\n    # No more messages expected\n    msg = consumer.receive(100)\nexcept:\n    print(\"no more msg\")\n    pass\n\n")),(0,r.yg)("h3",{id:"reader-interface-example"},"Reader interface example"),(0,r.yg)("p",null,"You can use the Pulsar Python API to use the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/concepts-clients#reader-interface"},"reader interface"),". Here's an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\n# MessageId taken from a previously fetched message\nmsg_id = msg.message_id()\n\nreader = client.create_reader('my-topic', msg_id)\n\nwhile True:\n    msg = reader.read_next()\n    print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n    # No acknowledgment\n\n")),(0,r.yg)("h3",{id:"multi-topic-subscriptions"},"Multi-topic subscriptions"),(0,r.yg)("p",null,"In addition to subscribing a consumer to a single Pulsar topic, you can also subscribe to multiple topics simultaneously. To use multi-topic subscriptions, you can supply a regular expression (regex) or a ",(0,r.yg)("inlineCode",{parentName:"p"},"List")," of topics. If you select topics via regex, all topics must be within the same Pulsar namespace."),(0,r.yg)("p",null,"The following is an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport re\nconsumer = client.subscribe(re.compile('persistent://public/default/topic-*'), 'my-subscription')\nwhile True:\n    msg = consumer.receive()\n    try:\n        print(\"Received message '{}' id='{}'\".format(msg.data(), msg.message_id()))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\nclient.close()\n\n")),(0,r.yg)("h2",{id:"schema"},"Schema"),(0,r.yg)("h3",{id:"supported-schema-types"},"Supported schema types"),(0,r.yg)("p",null,"You can use different builtin schema types in Pulsar. All the definitions are in the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema")," package."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Schema"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"BytesSchema")),(0,r.yg)("td",{parentName:"tr",align:null},"Get the raw payload as a ",(0,r.yg)("inlineCode",{parentName:"td"},"bytes")," object. No serialization/deserialization are performed. This is the default schema mode")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"StringSchema")),(0,r.yg)("td",{parentName:"tr",align:null},"Encode/decode payload as a UTF-8 string. Uses ",(0,r.yg)("inlineCode",{parentName:"td"},"str")," objects")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"JsonSchema")),(0,r.yg)("td",{parentName:"tr",align:null},"Require record definition. Serializes the record into standard JSON payload")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"AvroSchema")),(0,r.yg)("td",{parentName:"tr",align:null},"Require record definition. Serializes in AVRO format")))),(0,r.yg)("h3",{id:"schema-definition-reference"},"Schema definition reference"),(0,r.yg)("p",null,"The schema definition is done through a class that inherits from ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema.Record"),"."),(0,r.yg)("p",null,"This class has a number of fields which can be of either\n",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema.Field")," type or another nested ",(0,r.yg)("inlineCode",{parentName:"p"},"Record"),". All the\nfields are specified in the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema")," package. The fields\nare matching the AVRO fields types."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Python Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bool")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Integer")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"int")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Long")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"int")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Float")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"float")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Double")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"float")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Bytes")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bytes")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"str")),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Array")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"list")),(0,r.yg)("td",{parentName:"tr",align:null},"Need to specify record type for items.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Map")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dict")),(0,r.yg)("td",{parentName:"tr",align:null},"Key is always ",(0,r.yg)("inlineCode",{parentName:"td"},"String"),". Need to specify value type.")))),(0,r.yg)("p",null,"Additionally, any Python ",(0,r.yg)("inlineCode",{parentName:"p"},"Enum")," type can be used as a valid field type."),(0,r.yg)("h4",{id:"fields-parameters"},"Fields parameters"),(0,r.yg)("p",null,"When adding a field, you can use these parameters in the constructor."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Argument"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"default")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"None")),(0,r.yg)("td",{parentName:"tr",align:null},"Set a default value for the field. Eg: ",(0,r.yg)("inlineCode",{parentName:"td"},"a = Integer(default=5)"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"required")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"False")),(0,r.yg)("td",{parentName:"tr",align:null},'Mark the field as "required". It is set in the schema accordingly.')))),(0,r.yg)("h4",{id:"schema-definition-examples"},"Schema definition examples"),(0,r.yg)("h5",{id:"simple-definition"},"Simple definition"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nclass Example(Record):\n    a = String()\n    b = Integer()\n    c = Array(String())\n    i = Map(String())\n\n")),(0,r.yg)("h5",{id:"using-enums"},"Using enums"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nfrom enum import Enum\n\nclass Color(Enum):\n    red = 1\n    green = 2\n    blue = 3\n\nclass Example(Record):\n    name = String()\n    color = Color\n\n")),(0,r.yg)("h5",{id:"complex-types"},"Complex types"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nclass MySubRecord(Record):\n    x = Integer()\n    y = Long()\n    z = String()\n\nclass Example(Record):\n    a = String()\n    sub = MySubRecord()\n\n")),(0,r.yg)("h5",{id:"set-namespace-for-avro-schema"},"Set namespace for Avro schema"),(0,r.yg)("p",null,"Set the namespace for Avro Record schema using the special field ",(0,r.yg)("inlineCode",{parentName:"p"},"_avro_namespace"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nclass NamespaceDemo(Record):\n   _avro_namespace = 'xxx.xxx.xxx'\n   x = String()\n   y = Integer()\n\n")),(0,r.yg)("p",null,"The schema definition is like this."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\n{\n  'name': 'NamespaceDemo', 'namespace': 'xxx.xxx.xxx', 'type': 'record', 'fields': [\n    {'name': 'x', 'type': ['null', 'string']},\n    {'name': 'y', 'type': ['null', 'int']}\n  ]\n}\n\n")),(0,r.yg)("h3",{id:"declare-and-validate-schema"},"Declare and validate schema"),(0,r.yg)("p",null,"You can send messages using ",(0,r.yg)("inlineCode",{parentName:"p"},"BytesSchema"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"StringSchema"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"AvroSchema"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonSchema"),"."),(0,r.yg)("p",null,"Before the producer is created, the Pulsar broker validates that the existing topic schema is the correct type and that the format is compatible with the schema definition of a class. If the format of the topic schema is incompatible with the schema definition, an exception occurs in the producer creation."),(0,r.yg)("p",null,"Once a producer is created with a certain schema definition, it only accepts objects that are instances of the declared schema class."),(0,r.yg)("p",null,"Similarly, for a consumer or reader, the consumer returns an object (which is an instance of the schema record class) rather than raw bytes."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nconsumer = client.subscribe(\n                  topic='my-topic',\n                  subscription_name='my-subscription',\n                  schema=AvroSchema(Example) )\n\nwhile True:\n    msg = consumer.receive()\n    ex = msg.value()\n    try:\n        print(\"Received message a={} b={} c={}\".format(ex.a, ex.b, ex.c))\n        # Acknowledge successful processing of the message\n        consumer.acknowledge(msg)\n    except Exception:\n        # Message failed to be processed\n        consumer.negative_acknowledge(msg)\n\n")),(0,r.yg)(l.A,{defaultValue:"BytesSchema",values:[{label:"BytesSchema",value:"BytesSchema"},{label:"StringSchema",value:"StringSchema"},{label:"AvroSchema",value:"AvroSchema"},{label:"JsonSchema",value:"JsonSchema"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"BytesSchema",mdxType:"TabItem"},(0,r.yg)("p",null,"You can send byte data using a ",(0,r.yg)("inlineCode",{parentName:"p"},"BytesSchema"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nproducer = client.create_producer(\n                'bytes-schema-topic',\n                schema=BytesSchema())\nproducer.send(b\"Hello\")\n\nconsumer = client.subscribe(\n                'bytes-schema-topic',\n                'sub',\n                schema=BytesSchema())\nmsg = consumer.receive()\ndata = msg.value()\n\n"))),(0,r.yg)(i.A,{value:"StringSchema",mdxType:"TabItem"},(0,r.yg)("p",null,"You can send string data using a ",(0,r.yg)("inlineCode",{parentName:"p"},"StringSchema"),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nproducer = client.create_producer(\n                'string-schema-topic',\n                schema=StringSchema())\nproducer.send(\"Hello\")\n\nconsumer = client.subscribe(\n                'string-schema-topic',\n                'sub',\n                schema=StringSchema())\nmsg = consumer.receive()\nstr = msg.value()\n\n"))),(0,r.yg)(i.A,{value:"AvroSchema",mdxType:"TabItem"},(0,r.yg)("p",null,"You can declare an ",(0,r.yg)("inlineCode",{parentName:"p"},"AvroSchema")," using one of the following methods."),(0,r.yg)("h4",{id:"method-1-record"},"Method 1: Record"),(0,r.yg)("p",null,"You can declare an ",(0,r.yg)("inlineCode",{parentName:"p"},"AvroSchema")," by passing a class that inherits\nfrom ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema.Record")," and defines the fields as\nclass variables."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nclass Example(Record):\n    a = Integer()\n    b = Integer()\n\nproducer = client.create_producer(\n                'avro-schema-topic',\n                schema=AvroSchema(Example))\nr = Example(a=1, b=2)\nproducer.send(r)\n\nconsumer = client.subscribe(\n                'avro-schema-topic',\n                'sub',\n                schema=AvroSchema(Example))\nmsg = consumer.receive()\ne = msg.value()\n\n")),(0,r.yg)("h4",{id:"method-2-json-definition"},"Method 2: JSON definition"),(0,r.yg)("p",null,"You can declare an ",(0,r.yg)("inlineCode",{parentName:"p"},"AvroSchema")," using JSON. In this case, Avro schemas are defined using JSON."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("p",null,"Below is an ",(0,r.yg)("inlineCode",{parentName:"p"},"AvroSchema")," defined using a JSON file (",(0,r.yg)("em",{parentName:"p"},"company.avsc"),")."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "doc": "this is doc",\n    "namespace": "example.avro",\n    "type": "record",\n    "name": "Company",\n    "fields": [\n        {"name": "name", "type": ["null", "string"]},\n        {"name": "address", "type": ["null", "string"]},\n        {"name": "employees", "type": ["null", {"type": "array", "items": {\n            "type": "record",\n            "name": "Employee",\n            "fields": [\n                {"name": "name", "type": ["null", "string"]},\n                {"name": "age", "type": ["null", "int"]}\n            ]\n        }}]},\n        {"name": "labels", "type": ["null", {"type": "map", "values": "string"}]}\n    ]\n}\n\n')),(0,r.yg)("p",null,"You can load a schema definition from file by using ",(0,r.yg)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/getting-started-python/"},(0,r.yg)("inlineCode",{parentName:"a"},"avro.schema"))," or ",(0,r.yg)("a",{parentName:"p",href:"https://fastavro.readthedocs.io/en/latest/schema.html#fastavro._schema_py.load_schema"},(0,r.yg)("inlineCode",{parentName:"a"},"fastavro.schema")),"."),(0,r.yg)("p",null,'If you use the "JSON definition" method to declare an ',(0,r.yg)("inlineCode",{parentName:"p"},"AvroSchema"),", pay attention to the following points:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"You need to use ",(0,r.yg)("a",{parentName:"p",href:"https://developers.google.com/edu/python/dict-files"},"Python dict"),' to produce and consume messages, which is different from using the "Record" method.')),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When generating an ",(0,r.yg)("inlineCode",{parentName:"p"},"AvroSchema")," object, set ",(0,r.yg)("inlineCode",{parentName:"p"},"_record_cls")," parameter to ",(0,r.yg)("inlineCode",{parentName:"p"},"None"),"."))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\nfrom fastavro.schema import load_schema\nfrom pulsar.schema import *\nschema_definition = load_schema("examples/company.avsc")\navro_schema = AvroSchema(None, schema_definition=schema_definition)\nproducer = client.create_producer(\n    topic=topic,\n    schema=avro_schema)\nconsumer = client.subscribe(topic, \'test\', schema=avro_schema)\ncompany = {\n    "name": "company-name" + str(i),\n    "address": \'xxx road xxx street \' + str(i),\n    "employees": [\n        {"name": "user" + str(i), "age": 20 + i},\n        {"name": "user" + str(i), "age": 30 + i},\n        {"name": "user" + str(i), "age": 35 + i},\n    ],\n    "labels": {\n        "industry": "software" + str(i),\n        "scale": ">100",\n        "funds": "1000000.0"\n    }\n}\nproducer.send(company)\nmsg = consumer.receive()\n# Users could get a dict object by `value()` method.\nmsg.value()\n\n'))),(0,r.yg)(i.A,{value:"JsonSchema",mdxType:"TabItem"},(0,r.yg)("h4",{id:"record"},"Record"),(0,r.yg)("p",null,"You can declare a ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonSchema")," by passing a class that inherits\nfrom ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar.schema.Record")," and defines the fields as class variables. This is similar to using ",(0,r.yg)("inlineCode",{parentName:"p"},"AvroSchema"),". The only difference is to use  ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonSchema")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"AvroSchema")," when defining schema type as shown below. For how to use ",(0,r.yg)("inlineCode",{parentName:"p"},"AvroSchema")," via record, see ",(0,r.yg)("a",{parentName:"p",href:"client-libraries-python.md#method-1-record"},"here"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\nproducer = client.create_producer(\n                'avro-schema-topic',\n                schema=JsonSchema(Example))\n\nconsumer = client.subscribe(\n                'avro-schema-topic',\n                'sub',\n                schema=JsonSchema(Example))\n\n")))),(0,r.yg)("h2",{id:"end-to-end-encryption"},"End-to-end encryption"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/cookbooks-encryption#docsNav"},"End-to-end encryption")," allows applications to encrypt messages at producers and decrypt messages at consumers."),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"To use the end-to-end encryption feature in the Python client, you need to configure ",(0,r.yg)("inlineCode",{parentName:"p"},"publicKeyPath")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"privateKeyPath")," for both producer and consumer."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\npublicKeyPath: "./public.pem"\nprivateKeyPath: "./private.pem"\n\n')),(0,r.yg)("h3",{id:"tutorial"},"Tutorial"),(0,r.yg)("p",null,"This section provides step-by-step instructions on how to use the end-to-end encryption feature in the Python client."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Prerequisite")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pulsar Python client 2.7.1 or later")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create both public and private key pairs."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\nopenssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -pubout -out public.pem\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a producer to send encrypted messages."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\npublicKeyPath = \"./public.pem\"\nprivateKeyPath = \"./private.pem\"\ncrypto_key_reader = pulsar.CryptoKeyReader(publicKeyPath, privateKeyPath)\nclient = pulsar.Client('pulsar://localhost:6650')\nproducer = client.create_producer(topic='encryption', encryption_key='encryption', crypto_key_reader=crypto_key_reader)\nproducer.send('encryption message'.encode('utf8'))\nprint('sent message')\nproducer.close()\nclient.close()\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a consumer to receive encrypted messages."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\npublicKeyPath = \"./public.pem\"\nprivateKeyPath = \"./private.pem\"\ncrypto_key_reader = pulsar.CryptoKeyReader(publicKeyPath, privateKeyPath)\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe(topic='encryption', subscription_name='encryption-sub', crypto_key_reader=crypto_key_reader)\nmsg = consumer.receive()\nprint(\"Received msg '{}' id = '{}'\".format(msg.data(), msg.message_id()))\nconsumer.close()\nclient.close()\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the consumer to receive encrypted messages."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\npython consumer.py\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In a new terminal tab, run the producer to produce encrypted messages."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\npython producer.py\n\n")),(0,r.yg)("p",{parentName:"li"},"Now you can see the producer sends messages and the consumer receives messages successfully."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("p",{parentName:"li"},"This is from the producer side."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nsent message\n\n")),(0,r.yg)("p",{parentName:"li"},"This is from the consumer side."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nReceived msg 'encryption message' id = '(0,0,-1,-1)'\n\n")))))}g.isMDXComponent=!0}}]);