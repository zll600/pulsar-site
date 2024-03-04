"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[88836],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>g});var n=r(96540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),u=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=t,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(g,o(o({ref:a},p),{},{components:r})):n.createElement(g,o({ref:a},p))}));function g(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:t,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19365:(e,a,r)=>{r.d(a,{A:()=>o});var n=r(96540),t=r(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,o),hidden:r},a)}},11470:(e,a,r)=>{r.d(a,{A:()=>N});var n=r(58168),t=r(96540),l=r(20053),o=r(23104),i=r(56347),s=r(57485),u=r(31682),p=r(89466);function m(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:r,attributes:n,default:t}}=e;return{value:a,label:r,attributes:n,default:t}}))}function c(e){const{values:a,children:r}=e;return(0,t.useMemo)((()=>{const e=a??m(r);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function d(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:r}=e;const n=(0,i.W6)(),l=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,s.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function y(e){const{defaultValue:a,queryString:r=!1,groupId:n}=e,l=c(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[s,u]=g({queryString:r,groupId:n}),[m,y]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,p.Dv)(r);return[n,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),b=(()=>{const e=s??m;return d({value:e,tabValues:l})?e:null})();(0,t.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var b=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),c=e=>{const a=e.currentTarget,r=p.indexOf(a),n=u[r].value;n!==i&&(m(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;a=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;a=p[r]??p[p.length-1];break}}a?.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},a)},u.map((e=>{let{value:a,label:r,attributes:o}=e;return t.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:c},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===a})}),r??a)})))}function h(e){let{lazy:a,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function k(e){const a=y(e);return t.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},t.createElement(v,(0,n.A)({},e,a)),t.createElement(h,(0,n.A)({},e,a)))}function N(e){const a=(0,b.A)();return t.createElement(k,(0,n.A)({key:String(a)},e))}},62636:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=r(58168),t=(r(96540),r(15680)),l=r(11470),o=r(19365);const i={id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},s=void 0,u={unversionedId:"admin-api-brokers",id:"version-2.10.x/admin-api-brokers",title:"Managing Brokers",description:"Important",source:"@site/versioned_docs/version-2.10.x/admin-api-brokers.md",sourceDirName:".",slug:"/admin-api-brokers",permalink:"/docs/2.10.x/admin-api-brokers",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/admin-api-brokers.md",tags:[],version:"2.10.x",frontMatter:{id:"admin-api-brokers",title:"Managing Brokers",sidebar_label:"Brokers",original_id:"admin-api-brokers"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Tenants",permalink:"/docs/2.10.x/admin-api-tenants"},next:{title:"Namespaces",permalink:"/docs/2.10.x/admin-api-namespaces"}},p={},m=[{value:"Brokers resources",id:"brokers-resources",level:2},{value:"List active brokers",id:"list-active-brokers",level:3},{value:"Get the information of the leader broker",id:"get-the-information-of-the-leader-broker",level:3},{value:"list of namespaces owned by a given broker",id:"list-of-namespaces-owned-by-a-given-broker",level:4},{value:"Dynamic broker configuration",id:"dynamic-broker-configuration",level:3},{value:"Update dynamic configuration",id:"update-dynamic-configuration",level:3},{value:"List updated values",id:"list-updated-values",level:3},{value:"List all",id:"list-all",level:3}],c={toc:m},d="wrapper";function g(e){let{components:a,...r}=e;return(0,t.yg)(d,(0,n.A)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"Important")),(0,t.yg)("p",{parentName:"blockquote"},"This page only shows ",(0,t.yg)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,t.yg)("ul",{parentName:"blockquote"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,t.yg)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more information, see ",(0,t.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.10.x/pulsar-admin/"},"Pulsar admin doc"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,t.yg)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,t.yg)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.10.x/"},"Java admin API doc"),".")))),(0,t.yg)("p",null,"Pulsar brokers consist of two components:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"An HTTP server exposing a ",(0,t.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," interface administration and ",(0,t.yg)("a",{parentName:"li",href:"/docs/2.10.x/reference-terminology#topic"},"topic")," lookup."),(0,t.yg)("li",{parentName:"ol"},"A dispatcher that handles all Pulsar ",(0,t.yg)("a",{parentName:"li",href:"/docs/2.10.x/reference-terminology#message"},"message")," transfers.")),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/2.10.x/reference-terminology#broker"},"Brokers")," can be managed via:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"brokers")," command of the ",(0,t.yg)("a",{parentName:"li",href:"pathname:///reference/#/2.10.x/pulsar-admin/"},(0,t.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool"),(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"/admin/v2/brokers")," endpoint of the admin ",(0,t.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API"),(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"brokers")," method of the ",(0,t.yg)("inlineCode",{parentName:"li"},"PulsarAdmin")," object in the ",(0,t.yg)("a",{parentName:"li",href:"/docs/2.10.x/client-libraries-java"},"Java API"))),(0,t.yg)("p",null,"In addition to being configurable when you start them up, brokers can also be ",(0,t.yg)("a",{parentName:"p",href:"#dynamic-broker-configuration"},"dynamically configured"),"."),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"See the ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.10.x/reference-configuration#broker"},"Configuration")," page for a full listing of broker-specific configuration parameters.")),(0,t.yg)("h2",{id:"brokers-resources"},"Brokers resources"),(0,t.yg)("h3",{id:"list-active-brokers"},"List active brokers"),(0,t.yg)("p",null,"Fetch all available active brokers that are serving traffic with cluster name."),(0,t.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list use\n\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\nbroker1.use.org.com:8080\n\n"))),(0,t.yg)(o.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.5&apiversion=v2#operation/getActiveBrokers"},"GET /admin/v2/brokers/:cluster/getActiveBrokers"))),(0,t.yg)(o.A,{value:"JAVA",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getActiveBrokers(clusterName)\n\n")))),(0,t.yg)("h3",{id:"get-the-information-of-the-leader-broker"},"Get the information of the leader broker"),(0,t.yg)("p",null,"Fetch the information of the leader broker, for example, the service url."),(0,t.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers leader-broker\n\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\nBrokerInfo(serviceUrl=broker1.use.org.com:8080)\n\n"))),(0,t.yg)(o.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.5&apiversion=v2#operation/getLeaderBroker"},"GET /admin/v2/brokers/leaderBroker/getLeaderBroker"))),(0,t.yg)(o.A,{value:"JAVA",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getLeaderBroker()\n\n")),(0,t.yg)("p",null,"For the detail of the code above, see ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-admin/src/main/java/org/apache/pulsar/client/admin/internal/BrokersImpl.java#L80"},"here")))),(0,t.yg)("h4",{id:"list-of-namespaces-owned-by-a-given-broker"},"list of namespaces owned by a given broker"),(0,t.yg)("p",null,"It finds all namespaces which are owned and served by a given broker."),(0,t.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers namespaces use \\\n  --url broker1.use.org.com:8080\n\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n  "my-property/use/my-ns/0x00000000_0xffffffff": {\n    "broker_assignment": "shared",\n    "is_controlled": false,\n    "is_active": true\n  }\n}\n\n'))),(0,t.yg)(o.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.5&apiversion=v2#operation/getOwnedNamespaes"},"GET /admin/v2/brokers/:cluster/:broker/ownedNamespaces/getOwnedNamespaes"))),(0,t.yg)(o.A,{value:"JAVA",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getOwnedNamespaces(cluster,brokerUrl);\n\n")))),(0,t.yg)("h3",{id:"dynamic-broker-configuration"},"Dynamic broker configuration"),(0,t.yg)("p",null,"One way to configure a Pulsar ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.10.x/reference-terminology#broker"},"broker")," is to supply a ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.10.x/reference-configuration#broker"},"configuration")," when the broker is ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.10.x/reference-cli-tools#pulsar-broker"},"started up"),"."),(0,t.yg)("p",null,"But since all broker configuration in Pulsar is stored in ZooKeeper, configuration values can also be dynamically updated ",(0,t.yg)("em",{parentName:"p"},"while the broker is running"),". When you update broker configuration dynamically, ZooKeeper will notify the broker of the change and the broker will then override any existing configuration values."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("a",{parentName:"li",href:"/docs/2.10.x/pulsar-admin#brokers"},(0,t.yg)("inlineCode",{parentName:"a"},"brokers"))," command for the ",(0,t.yg)("a",{parentName:"li",href:"/docs/2.10.x/pulsar-admin"},(0,t.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool has a variety of subcommands that enable you to manipulate a broker's configuration dynamically, enabling you to ",(0,t.yg)("a",{parentName:"li",href:"#update-dynamic-configuration"},"update config values")," and more."),(0,t.yg)("li",{parentName:"ul"},"In the Pulsar admin ",(0,t.yg)("a",{parentName:"li",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API, dynamic configuration is managed through the ",(0,t.yg)("inlineCode",{parentName:"li"},"/admin/v2/brokers/configuration")," endpoint.")),(0,t.yg)("h3",{id:"update-dynamic-configuration"},"Update dynamic configuration"),(0,t.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.yg)("p",null,"The ",(0,t.yg)("a",{parentName:"p",href:"reference-pulsar-admin.md#brokers-update-dynamic-config"},(0,t.yg)("inlineCode",{parentName:"a"},"update-dynamic-config"))," subcommand will update existing configuration. It takes two arguments: the name of the parameter and the new value using the ",(0,t.yg)("inlineCode",{parentName:"p"},"config")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"value")," flag respectively. Here's an example for the ",(0,t.yg)("a",{parentName:"p",href:"reference-configuration.md#broker-brokerShutdownTimeoutMs"},(0,t.yg)("inlineCode",{parentName:"a"},"brokerShutdownTimeoutMs"))," parameter:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers update-dynamic-config --config brokerShutdownTimeoutMs --value 100\n\n"))),(0,t.yg)(o.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.5&apiversion=v2#operation/updateDynamicConfiguration"},"POST /admin/v2/brokers/configuration/:configName/:configValue/updateDynamicConfiguration"))),(0,t.yg)(o.A,{value:"JAVA",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().updateDynamicConfiguration(configName, configValue);\n\n")))),(0,t.yg)("h3",{id:"list-updated-values"},"List updated values"),(0,t.yg)("p",null,"Fetch a list of all potentially updatable configuration parameters."),(0,t.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers list-dynamic-config\nbrokerShutdownTimeoutMs\n\n"))),(0,t.yg)(o.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.5&apiversion=v2#operation/getDynamicConfigurationName"},"GET /admin/v2/brokers/configuration/getDynamicConfigurationName"))),(0,t.yg)(o.A,{value:"JAVA",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getDynamicConfigurationNames();\n\n")))),(0,t.yg)("h3",{id:"list-all"},"List all"),(0,t.yg)("p",null,"Fetch a list of all parameters that have been dynamically updated."),(0,t.yg)(l.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin brokers get-all-dynamic-config\nbrokerShutdownTimeoutMs:100\n\n"))),(0,t.yg)(o.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.5&apiversion=v2#operation/getAllDynamicConfigurations"},"GET /admin/v2/brokers/configuration/values/getAllDynamicConfigurations"))),(0,t.yg)(o.A,{value:"JAVA",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"\nadmin.brokers().getAllDynamicConfigurations();\n\n")))))}g.isMDXComponent=!0}}]);