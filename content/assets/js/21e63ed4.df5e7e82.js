"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84049],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return t?n.createElement(g,i(i({ref:a},c),{},{components:t})):n.createElement(g,i({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>w});var n=t(58168),r=t(96540),l=t(20053),i=t(23104),o=t(56347),s=t(57485),u=t(31682),c=t(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function m(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??p(t);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[s,u]=g({queryString:t,groupId:n}),[p,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,c.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),y=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var y=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),m=e=>{const a=e.currentTarget,t=c.indexOf(a),n=u[t].value;n!==o&&(p(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function N(e){const a=h(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,a)),r.createElement(v,(0,n.A)({},e,a)))}function w(e){const a=(0,y.A)();return r.createElement(N,(0,n.A)({key:String(a)},e))}},87636:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=t(58168),r=(t(96540),t(15680)),l=t(11470),i=t(19365);const o={id:"admin-api-overview",title:"The Pulsar admin interface",sidebar_label:"Overview",original_id:"admin-api-overview"},s=void 0,u={unversionedId:"admin-api-overview",id:"version-2.7.3/admin-api-overview",title:"The Pulsar admin interface",description:"The Pulsar admin interface enables you to manage all of the important entities in a Pulsar instance, such as tenants, topics, and namespaces.",source:"@site/versioned_docs/version-2.7.3/admin-api-overview.md",sourceDirName:".",slug:"/admin-api-overview",permalink:"/docs/2.7.3/admin-api-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.3/admin-api-overview.md",tags:[],version:"2.7.3",frontMatter:{id:"admin-api-overview",title:"The Pulsar admin interface",sidebar_label:"Overview",original_id:"admin-api-overview"},sidebar:"version-2.7.3/docsSidebar",previous:{title:"C#",permalink:"/docs/2.7.3/client-libraries-dotnet"},next:{title:"Clusters",permalink:"/docs/2.7.3/admin-api-clusters"}},c={},p=[{value:"Admin setup",id:"admin-setup",level:2},{value:"How to define Pulsar resource names when running Pulsar in Kubernetes",id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes",level:2}],m={toc:p},d="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Pulsar admin interface enables you to manage all of the important entities in a Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.3/reference-terminology#instance"},"instance"),", such as ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.3/reference-terminology#tenant"},"tenants"),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.3/reference-terminology#topic"},"topics"),", and ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.3/reference-terminology#namespace"},"namespaces"),"."),(0,r.yg)("p",null,"You can currently interact with the admin interface via:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Making HTTP calls against the admin ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API provided by Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.3/reference-terminology#broker"},"brokers"),". For some restful apis, they might be redirected to topic owner brokers for serving\nwith ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307"},(0,r.yg)("inlineCode",{parentName:"a"},"307 Temporary Redirect")),", hence the HTTP callers should handle ",(0,r.yg)("inlineCode",{parentName:"p"},"307 Temporary Redirect"),". If you are using ",(0,r.yg)("inlineCode",{parentName:"p"},"curl"),", you should specify ",(0,r.yg)("inlineCode",{parentName:"p"},"-L"),"\nto handle redirections.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool, which is available in the ",(0,r.yg)("inlineCode",{parentName:"p"},"bin")," folder of your ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.3/getting-started-standalone"},"Pulsar installation"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin\n\n")),(0,r.yg)("p",{parentName:"li"},"For the complete commands and descriptions of ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin"),", see here.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"A Java client interface."))),(0,r.yg)("blockquote",null,(0,r.yg)("h4",{parentName:"blockquote",id:"the-rest-api-is-the-admin-interface"},"The REST API is the admin interface"),(0,r.yg)("p",{parentName:"blockquote"},"Under the hood, both the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool and the Java client both use the REST API. If you\u2019d like to implement your own admin interface client, you should use the REST API as well. Full documentation can be found here.")),(0,r.yg)("p",null,"In this document, examples from each of the three available interfaces will be shown."),(0,r.yg)("h2",{id:"admin-setup"},"Admin setup"),(0,r.yg)("p",null,"Each of Pulsar's three admin interfaces---the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.3/reference-pulsar-admin"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI tool, the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.7.3"},"Java admin API"),", and the ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API ---requires some special setup if you have ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.3/security-overview#authentication-providers"},"authentication")," enabled in your Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.3/reference-terminology#instance"},"instance"),"."),(0,r.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.yg)("p",null,"If you have ",(0,r.yg)("a",{parentName:"p",href:"security-overview.md#authentication-providers"},"authentication")," enabled, you will need to provide an auth configuration to use the ",(0,r.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool. By default, the configuration for the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin")," tool is found in the ",(0,r.yg)("a",{parentName:"p",href:"reference-configuration.md#client"},(0,r.yg)("inlineCode",{parentName:"a"},"conf/client.conf"))," file. Here are the available parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"webServiceUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"The web URL for the cluster."),(0,r.yg)("td",{parentName:"tr",align:null},"http://localhost:8080/")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"brokerServiceUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"The Pulsar protocol URL for the cluster."),(0,r.yg)("td",{parentName:"tr",align:null},"pulsar://localhost:6650/")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"authPlugin"),(0,r.yg)("td",{parentName:"tr",align:null},"The authentication plugin."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"authParams"),(0,r.yg)("td",{parentName:"tr",align:null},"The authentication parameters for the cluster, as a comma-separated string."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"useTls"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether or not TLS authentication will be enforced in the cluster."),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tlsAllowInsecureConnection"),(0,r.yg)("td",{parentName:"tr",align:null},"Accept untrusted TLS certificate from client."),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tlsTrustCertsFilePath"),(0,r.yg)("td",{parentName:"tr",align:null},"Path for the trusted TLS certificate file."),(0,r.yg)("td",{parentName:"tr",align:null}))))),(0,r.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,r.yg)("p",null,"You can find documentation for the REST API exposed by Pulsar ",(0,r.yg)("a",{parentName:"p",href:"reference-terminology.md#broker"},"brokers")," in this reference ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"document"),".")),(0,r.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,r.yg)("p",null,"To use the Java admin API, instantiate a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdmin"},"PulsarAdmin")," object, specifying a URL for a Pulsar ",(0,r.yg)("a",{parentName:"p",href:"reference-terminology.md#broker"},"broker")," and a ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/org/apache/pulsar/client/admin/PulsarAdminBuilder"},"PulsarAdminBuilder"),". Here's a minimal example using ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nString url = "http://localhost:8080";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n')),(0,r.yg)("p",null,"If you have multiple brokers to use, you can use multi-host like Pulsar service. For example,"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nString url = "http://localhost:8080,localhost:8081,localhost:8082";\n// Pass auth-plugin class fully-qualified name if Pulsar-security enabled\nString authPluginClassName = "com.org.MyAuthPluginClass";\n// Pass auth-param if auth-plugin class requires it\nString authParams = "param1=value1";\nboolean useTls = false;\nboolean tlsAllowInsecureConnection = false;\nString tlsTrustCertsFilePath = null;\nPulsarAdmin admin = PulsarAdmin.builder()\n.authentication(authPluginClassName,authParams)\n.serviceHttpUrl(url)\n.tlsTrustCertsFilePath(tlsTrustCertsFilePath)\n.allowTlsInsecureConnection(tlsAllowInsecureConnection)\n.build();\n\n')))),(0,r.yg)("h2",{id:"how-to-define-pulsar-resource-names-when-running-pulsar-in-kubernetes"},"How to define Pulsar resource names when running Pulsar in Kubernetes"),(0,r.yg)("p",null,"If you run Pulsar Functions or connectors on Kubernetes, you need to follow Kubernetes naming convention to define the names of your Pulsar resources, whichever admin interface you use."),(0,r.yg)("p",null,"Kubernetes requires a name that can be used as a DNS subdomain name as defined in ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"},"RFC 1123"),". Pulsar supports more legal characters than Kubernetes naming convention. If you create a Pulsar resource name with special characters that are not supported by Kubernetes (for example, including colons in a Pulsar namespace name), Kubernetes runtime translates the Pulsar object names into Kubernetes resource labels which are in RFC 1123-compliant forms. Consequently, you can run functions or connectors using Kubernetes runtime. The rules for translating Pulsar object names into Kubernetes resource labels are as below:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Truncate to 63 characters")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Replace the following characters with dashes (-):"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Non-alphanumeric characters")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Underscores (_)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Dots (.)")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Replace beginning and ending non-alphanumeric characters with 0"))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"If you get an error in translating Pulsar object names into Kubernetes resource labels (for example, you may have a naming collision if your Pulsar object name is too long) or want to customize the translating rules, see ",(0,r.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/next/functions-runtime/#customize-kubernetes-runtime"},"customize Kubernetes runtime"),"."),(0,r.yg)("li",{parentName:"ul"},"For how to configure Kubernetes runtime, see ",(0,r.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/docs/en/next/functions-runtime/#configure-kubernetes-runtime"},"here"),"."))))}g.isMDXComponent=!0}}]);