"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[10616],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>f});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(96540),n=a(20053);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,l),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>P});var r=a(58168),n=a(96540),i=a(20053),l=a(23104),s=a(56347),o=a(57485),u=a(31682),c=a(89466);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=d(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[o,u]=f({queryString:a,groupId:r}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),b=(()=>{const e=o??p;return m({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var b=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==s&&(p(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=v(e);return n.createElement("div",{className:(0,i.A)("tabs-container",g.tabList)},n.createElement(y,(0,r.A)({},e,t)),n.createElement(h,(0,r.A)({},e,t)))}function P(e){const t=(0,b.A)();return n.createElement(w,(0,r.A)({key:String(t)},e))}},20199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(58168),n=(a(96540),a(15680));a(11470),a(19365);const i={id:"admin-api-overview",title:"Pulsar admin interfaces",sidebar_label:"Overview",description:"Get a comprehensive understanding of usage of Pulsar admin APIs."},l=void 0,s={unversionedId:"admin-api-overview",id:"version-3.2.x/admin-api-overview",title:"Pulsar admin interfaces",description:"Get a comprehensive understanding of usage of Pulsar admin APIs.",source:"@site/versioned_docs/version-3.2.x/admin-api-overview.md",sourceDirName:".",slug:"/admin-api-overview",permalink:"/docs/3.2.x/admin-api-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/admin-api-overview.md",tags:[],version:"3.2.x",frontMatter:{id:"admin-api-overview",title:"Pulsar admin interfaces",sidebar_label:"Overview",description:"Get a comprehensive understanding of usage of Pulsar admin APIs."},sidebar:"docsSidebar",previous:{title:"Configure cluster-level failover",permalink:"/docs/3.2.x/client-libraries-cluster-level-failover"},next:{title:"Use cases",permalink:"/docs/3.2.x/admin-api-use-cases"}},o={},u=[{value:"Related topics",id:"related-topics",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.yg)(p,(0,r.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Pulsar admin APIs enable you to administer clusters programmatically. For example, you can create, update, delete, and manage all the entities within Pulsar instances (such as clusters, namespaces, tenants, topics, schemas, connectors, functions, and so on), and set various policies for data, resources, and security."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Defination of Pulsar admin APIs",src:a(25604).A,width:"1175",height:"313"})),(0,n.yg)("h3",{id:"related-topics"},"Related topics"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To learn usage scenarios, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/admin-api-use-cases"},"Pulsar admin API - Use cases"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To learn common administrative tasks, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/admin-api-features"},"Pulsar admin API - Features"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To perform administrative operations, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/admin-api-tools"},"Pulsar admin API - Tools"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To get up quickly, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/admin-api-get-started"},"Pulsar admin API - Get started"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To check the detailed usage, see the API references below."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.2.x/"},"Java admin API"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/reference-rest-api-overview"},"REST API")))))))}d.isMDXComponent=!0},25604:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/admin-api-definition-9d96d3970c533be029b5bc88ae2a064d.svg"}}]);