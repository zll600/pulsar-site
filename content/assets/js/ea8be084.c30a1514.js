"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[44581],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=n,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?r.createElement(k,o(o({ref:a},p),{},{components:t})):r.createElement(k,o({ref:a},p))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(67294),n=t(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>N});var r=t(87462),n=t(67294),l=t(86010),o=t(12466),i=t(16550),s=t(91980),u=t(67392),p=t(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function d(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function k(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=d(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:l}))),[s,u]=k({queryString:t,groupId:r}),[c,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,p.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),f=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var f=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const a=e.currentTarget,t=p.indexOf(a),r=u[t].value;r!==i&&(c(a),s(r))},m=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":i===a})}),t??a)})))}function h(e){let{lazy:a,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function y(e){const a=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(g,(0,r.Z)({},e,a)),n.createElement(h,(0,r.Z)({},e,a)))}function N(e){const a=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(a)},e))}},4111:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=t(87462),n=(t(67294),t(3905)),l=t(74866),o=t(85162);const i={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers"},s=void 0,u={unversionedId:"admin-api-brokers",id:"version-3.1.x/admin-api-brokers",title:"Managing Brokers",description:"This page only shows some frequently used operations. For the latest and complete information, see the reference docs below.",source:"@site/versioned_docs/version-3.1.x/admin-api-brokers.md",sourceDirName:".",slug:"/admin-api-brokers",permalink:"/docs/3.1.x/admin-api-brokers",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/admin-api-brokers.md",tags:[],version:"3.1.x",frontMatter:{id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers"},sidebar:"docsSidebar",previous:{title:"Features",permalink:"/docs/3.1.x/admin-api-features"},next:{title:"Clusters",permalink:"/docs/3.1.x/admin-api-clusters"}},p={},c=[{value:"List active broker",id:"list-active-broker",level:2},{value:"List namespace owned by broker",id:"list-namespace-owned-by-broker",level:2},{value:"Update broker conf",id:"update-broker-conf",level:2},{value:"List updatable broker conf",id:"list-updatable-broker-conf",level:3},{value:"Update broker conf dynamically",id:"update-broker-conf-dynamically",level:3},{value:"List updated broker conf",id:"list-updated-broker-conf",level:3},{value:"Get info of leader broker",id:"get-info-of-leader-broker",level:2}],d={toc:c},m="wrapper";function k(e){let{components:a,...t}=e;return(0,n.kt)(m,(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"This page only shows ",(0,n.kt)("strong",{parentName:"p"},"some frequently used operations"),". For the latest and complete information, see the ",(0,n.kt)("strong",{parentName:"p"},"reference docs")," below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"If you want to manage brokers..."))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.1.x/reference-cli-tools"},"Pulsar CLI")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"pathname:///reference/#/3.1.x/pulsar-admin/"},"pulsar-admin"),", which lists all commands, flags, descriptions, and more."),(0,n.kt)("td",{parentName:"tr",align:null},"See the ",(0,n.kt)("inlineCode",{parentName:"td"},"broker")," command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.1.x/admin-api-overview"},"Pulsar admin APIs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST API"),", which lists all parameters, responses, samples, and more."),(0,n.kt)("td",{parentName:"tr",align:null},"See the ",(0,n.kt)("inlineCode",{parentName:"td"},"/admin/v2/brokers")," endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.1.x/admin-api-overview"},"Pulsar admin APIs")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/admin/3.1.x/"},"Java admin API"),", which lists all classes, methods, descriptions, and more."),(0,n.kt)("td",{parentName:"tr",align:null},"See the ",(0,n.kt)("inlineCode",{parentName:"td"},"brokers")," method of the ",(0,n.kt)("inlineCode",{parentName:"td"},"PulsarAdmin")," object")))),(0,n.kt)("h2",{id:"list-active-broker"},"List active broker"),(0,n.kt)("p",null,"Fetch all available active brokers that are serving traffic with cluster name."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers list use\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"localhost:8080\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/getActiveBrokers"},"GET /admin/v2/brokers/:cluster/getActiveBrokers"))),(0,n.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().getActiveBrokers(clusterName)\n")))),(0,n.kt)("h2",{id:"list-namespace-owned-by-broker"},"List namespace owned by broker"),(0,n.kt)("p",null,"You can list all namespaces which are owned and served by a given broker."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers namespaces use \\\n    --url localhost:8080\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"public/default/0x00000000_0x40000000    [broker_assignment=shared is_controlled=false is_active=true]\npublic/default/0xc0000000_0xffffffff    [broker_assignment=shared is_controlled=false is_active=true]\npublic/functions/0x40000000_0x80000000    [broker_assignment=shared is_controlled=false is_active=true]\npublic/functions/0x00000000_0x40000000    [broker_assignment=shared is_controlled=false is_active=true]\npulsar/standalone/localhost:8080/0x00000000_0xffffffff    [broker_assignment=shared is_controlled=false is_active=true]\npulsar/localhost:8080/0x00000000_0xffffffff    [broker_assignment=shared is_controlled=false is_active=true]\npublic/functions/0x80000000_0xc0000000    [broker_assignment=shared is_controlled=false is_active=true]\npublic/default/0x80000000_0xc0000000    [broker_assignment=shared is_controlled=false is_active=true]\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/getOwnedNamespaes"},"GET /admin/v2/brokers/:cluster/:broker/ownedNamespaces/getOwnedNamespaes"))),(0,n.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n")))),(0,n.kt)("h2",{id:"update-broker-conf"},"Update broker conf"),(0,n.kt)("p",null,"You can update broker configurations using one of the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Supply ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.1.x/config/reference-configuration-broker"},"configurations")," when starting up brokers.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"#update-broker-conf-dynamically"},"Update configurations dynamically")," ",(0,n.kt)("strong",{parentName:"p"},"when running brokers"),"."),(0,n.kt)("p",{parentName:"li"},"Since all broker configurations in Pulsar are stored in ZooKeeper, configuration values can also be dynamically updated when brokers are running. When you update broker configurations dynamically, ZooKeeper will notify the broker of the change and then the broker will override any existing configuration values."))),(0,n.kt)("h3",{id:"list-updatable-broker-conf"},"List updatable broker conf"),(0,n.kt)("p",null,"Fetch a list of all potentially updatable configuration parameters."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers list-dynamic-config\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"forceDeleteNamespaceAllowed\nloadBalancerMemoryResourceWeight\nallowAutoTopicCreation\nbrokerDeleteInactivePartitionedTopicMetadataEnabled\nmanagedLedgerInactiveLedgerRolloverTimeSeconds\nloadBalancerNamespaceBundleMaxMsgRate\nresourceUsageTransportPublishIntervalInSecs\n# omit...\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/getDynamicConfigurationName"},"GET /admin/v2/brokers/configuration/getDynamicConfigurationName"))),(0,n.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().getDynamicConfigurationNames();\n")))),(0,n.kt)("h3",{id:"update-broker-conf-dynamically"},"Update broker conf dynamically"),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.1.x/pulsar-admin/brokers?id=update-dynamic-config"},(0,n.kt)("inlineCode",{parentName:"a"},"update-dynamic-config"))," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," flag respectively. Here's an example of the ",(0,n.kt)("a",{parentName:"p",href:"reference-configuration.md#broker-brokerShutdownTimeoutMs"},(0,n.kt)("inlineCode",{parentName:"a"},"brokerShutdownTimeoutMs"))," parameter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/updateDynamicConfiguration"},"POST /admin/v2/brokers/configuration/:configName/:configValue/updateDynamicConfiguration"))),(0,n.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().updateDynamicConfiguration(configName, configValue);\n")))),(0,n.kt)("h3",{id:"list-updated-broker-conf"},"List updated broker conf"),(0,n.kt)("p",null,"Fetch a list of all parameters that have been dynamically updated."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers get-all-dynamic-config\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"brokerShutdownTimeoutMs    100\n"))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/getAllDynamicConfigurations"},"GET /admin/v2/brokers/configuration/values/getAllDynamicConfigurations"))),(0,n.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().getAllDynamicConfigurations();\n")))),(0,n.kt)("h2",{id:"get-info-of-leader-broker"},"Get info of leader broker"),(0,n.kt)("p",null,"Fetch the information of the leader broker, for example, the service URL."),(0,n.kt)(l.Z,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin brokers leader-broker\n")),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "serviceUrl" : "http://localhost:8080"\n}\n'))),(0,n.kt)(o.Z,{value:"REST API",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.1.0&apiversion=v2#operation/getLeaderBroker"},"GET /admin/v2/brokers/leaderBroker/getLeaderBroker"))),(0,n.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"admin.brokers().getLeaderBroker()\n")),(0,n.kt)("p",null,"For the detail of the code above, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/BrokersImpl.java#L80"},"here")))))}k.isMDXComponent=!0}}]);