"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[16453],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),g=r,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return t?a.createElement(d,s(s({ref:n},c),{},{components:t})):a.createElement(d,s({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t},n)}},89089:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(58168),r=t(96540),o=t(20053),s=t(23104),i=t(56347),l=t(57485),u=t(31682),c=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[l,u]=d({queryString:t,groupId:a}),[p,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),f=(()=>{const e=l??p;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var f=t(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==i&&(p(n),l(a))},g=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:g,onClick:m},s,{className:(0,o.A)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":i===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(b,(0,a.A)({},e,n)),r.createElement(v,(0,a.A)({},e,n)))}function w(e){const n=(0,f.A)();return r.createElement(N,(0,a.A)({key:String(n)},e))}},85265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=t(58168),r=(t(96540),t(15680)),o=t(89089),s=t(19365);const i={id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview",original_id:"io-overview"},l=void 0,u={unversionedId:"io-overview",id:"version-2.7.4/io-overview",title:"Pulsar connector overview",description:"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems.",source:"@site/versioned_docs/version-2.7.4/io-overview.md",sourceDirName:".",slug:"/io-overview",permalink:"/docs/2.7.4/io-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/io-overview.md",tags:[],version:"2.7.4",frontMatter:{id:"io-overview",title:"Pulsar connector overview",sidebar_label:"Overview",original_id:"io-overview"},sidebar:"version-2.7.4/docsSidebar",previous:{title:"Window Functions: Context",permalink:"/docs/2.7.4/window-functions-context"},next:{title:"Get started",permalink:"/docs/2.7.4/io-quickstart"}},c={},p=[{value:"Concept",id:"concept",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3},{value:"Processing guarantee",id:"processing-guarantee",level:2},{value:"Set",id:"set",level:3},{value:"Update",id:"update",level:3},{value:"Work with connector",id:"work-with-connector",level:2}],m={toc:p},g="wrapper";function d(e){let{components:n,...i}=e;return(0,r.yg)(g,(0,a.A)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Messaging systems are most powerful when you can easily use them with external systems like databases and other messaging systems."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Pulsar IO connectors")," enable you to easily create, deploy, and manage connectors that interact with external systems, such as ",(0,r.yg)("a",{parentName:"p",href:"https://cassandra.apache.org"},"Apache Cassandra"),", ",(0,r.yg)("a",{parentName:"p",href:"https://www.aerospike.com"},"Aerospike"),", and many others."),(0,r.yg)("h2",{id:"concept"},"Concept"),(0,r.yg)("p",null,"Pulsar IO connectors come in two types: ",(0,r.yg)("strong",{parentName:"p"},"source")," and ",(0,r.yg)("strong",{parentName:"p"},"sink"),"."),(0,r.yg)("p",null,"This diagram illustrates the relationship between source, Pulsar, and sink:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Pulsar IO diagram",src:t(88999).A,title:"Pulsar IO connectors (sources and sinks)",width:"1758",height:"352"})),(0,r.yg)("h3",{id:"source"},"Source"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Sources ",(0,r.yg)("strong",{parentName:"p"},"feed data from external systems into Pulsar"),".")),(0,r.yg)("p",null,"Common sources include other messaging systems and firehose-style data pipeline APIs."),(0,r.yg)("p",null,"For the complete list of Pulsar built-in source connectors, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/io-connectors#source-connector"},"source connector"),"."),(0,r.yg)("h3",{id:"sink"},"Sink"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Sinks ",(0,r.yg)("strong",{parentName:"p"},"feed data from Pulsar into external systems"),".")),(0,r.yg)("p",null,"Common sinks include other messaging systems and SQL and NoSQL databases."),(0,r.yg)("p",null,"For the complete list of Pulsar built-in sink connectors, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/io-connectors#sink-connector"},"sink connector"),"."),(0,r.yg)("h2",{id:"processing-guarantee"},"Processing guarantee"),(0,r.yg)("p",null,"Processing guarantees are used to handle errors when writing messages to Pulsar topics."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Pulsar connectors and Functions use the ",(0,r.yg)("strong",{parentName:"p"},"same")," processing guarantees as below.")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Delivery semantic"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"at-most-once")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Each message sent to a connector is to be ",(0,r.yg)("strong",{parentName:"td"},"processed once")," or ",(0,r.yg)("strong",{parentName:"td"},"not to be processed"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"at-least-once")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Each message sent to a connector is to be ",(0,r.yg)("strong",{parentName:"td"},"processed once")," or ",(0,r.yg)("strong",{parentName:"td"},"more than once"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"effectively-once")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Each message sent to a connector has ",(0,r.yg)("strong",{parentName:"td"},"one output associated")," with it.")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Processing guarantees for connectors not just rely on Pulsar guarantee but also ",(0,r.yg)("strong",{parentName:"p"},"relate to external systems"),", that is, ",(0,r.yg)("strong",{parentName:"p"},"the implementation of source and sink"),".")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Source: Pulsar ensures that writing messages to Pulsar topics respects to the processing guarantees. It is within Pulsar's control.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Sink: the processing guarantees rely on the sink implementation. If the sink implementation does not handle retries in an idempotent way, the sink does not respect to the processing guarantees."))),(0,r.yg)("h3",{id:"set"},"Set"),(0,r.yg)("p",null,"When creating a connector, you can set the processing guarantee with the following semantics:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ATLEAST_ONCE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ATMOST_ONCE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"EFFECTIVELY_ONCE"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"If ",(0,r.yg)("inlineCode",{parentName:"p"},"--processing-guarantees")," is not specified when creating a connector, the default semantic is ",(0,r.yg)("inlineCode",{parentName:"p"},"ATLEAST_ONCE"),".")),(0,r.yg)("p",null,"Here takes ",(0,r.yg)("strong",{parentName:"p"},"Admin CLI")," as an example. For more information about ",(0,r.yg)("strong",{parentName:"p"},"REST API")," or ",(0,r.yg)("strong",{parentName:"p"},"JAVA Admin API"),", see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/io-use#create"},"here"),"."),(0,r.yg)(o.A,{defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"Source",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sources create \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other source configs\n\n")),(0,r.yg)("p",null,"For more information about the options of ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin sources create"),", see ",(0,r.yg)("a",{parentName:"p",href:"reference-connector-admin.md#create"},"here"),".")),(0,r.yg)(s.A,{value:"Sink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sinks create \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other sink configs\n\n")),(0,r.yg)("p",null,"For more information about the options of ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin sinks create"),", see ",(0,r.yg)("a",{parentName:"p",href:"reference-connector-admin.md#create-1"},"here"),"."))),(0,r.yg)("h3",{id:"update"},"Update"),(0,r.yg)("p",null,"After creating a connector, you can update the processing guarantee with the following semantics:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ATLEAST_ONCE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"ATMOST_ONCE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"EFFECTIVELY_ONCE"))),(0,r.yg)("p",null,"Here takes ",(0,r.yg)("strong",{parentName:"p"},"Admin CLI")," as an example. For more information about ",(0,r.yg)("strong",{parentName:"p"},"REST API")," or ",(0,r.yg)("strong",{parentName:"p"},"JAVA Admin API"),", see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/io-use#create"},"here"),"."),(0,r.yg)(o.A,{defaultValue:"Source",values:[{label:"Source",value:"Source"},{label:"Sink",value:"Sink"}],mdxType:"Tabs"},(0,r.yg)(s.A,{value:"Source",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sources update \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other source configs\n\n")),(0,r.yg)("p",null,"For more information about the options of ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin sources update"),", see ",(0,r.yg)("a",{parentName:"p",href:"reference-connector-admin.md#update"},"here"),".")),(0,r.yg)(s.A,{value:"Sink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin sinks update \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other sink configs\n\n")),(0,r.yg)("p",null,"For more information about the options of ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin sinks update"),", see ",(0,r.yg)("a",{parentName:"p",href:"reference-connector-admin.md#update-1"},"here"),"."))),(0,r.yg)("h2",{id:"work-with-connector"},"Work with connector"),(0,r.yg)("p",null,"You can manage Pulsar connectors (for example, create, update, start, stop, restart, reload, delete and perform other operations on connectors) via the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-connector-admin"},"Connector Admin CLI")," with ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-connector-admin#sources"},"sources")," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-connector-admin#sinks"},"sinks")," subcommands."),(0,r.yg)("p",null,"Connectors (sources and sinks) and Functions are components of instances, and they all run on Functions workers. When managing a source, sink or function via ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-connector-admin"},"Connector Admin CLI")," or ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/functions-cli"},"Functions Admin CLI"),", an instance is started on a worker. For more information, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/functions-worker#run-functions-worker-separately"},"Functions worker"),"."))}d.isMDXComponent=!0},88999:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/pulsar-io-8e834df5eaed9d5b0a7e0ffa162e850a.png"}}]);