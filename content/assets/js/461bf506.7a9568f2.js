"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4937],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>g});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return t?n.createElement(g,i(i({ref:a},p),{},{components:t})):n.createElement(g,i({ref:a},p))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>I});var n=t(58168),r=t(96540),l=t(20053),i=t(23104),o=t(56347),s=t(57485),u=t(31682),p=t(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function m(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[s,u]=g({queryString:t,groupId:n}),[c,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,p.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),f=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),m=e=>{const a=e.currentTarget,t=p.indexOf(a),n=u[t].value;n!==o&&(c(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function N(e){const a=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(h,(0,n.A)({},e,a)),r.createElement(v,(0,n.A)({},e,a)))}function I(e){const a=(0,f.A)();return r.createElement(N,(0,n.A)({key:String(a)},e))}},69318:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=t(58168),r=(t(96540),t(15680));t(11470),t(19365);const l={id:"admin-api-tools",title:"Pulsar admin interfaces - Tools",sidebar_label:"Tools",description:"Get a comprehensive understanding of concepts and difference of Pulsar admin CLI and Pulsar admin APIs."},i=void 0,o={unversionedId:"admin-api-tools",id:"admin-api-tools",title:"Pulsar admin interfaces - Tools",description:"Get a comprehensive understanding of concepts and difference of Pulsar admin CLI and Pulsar admin APIs.",source:"@site/docs/admin-api-tools.md",sourceDirName:".",slug:"/admin-api-tools",permalink:"/docs/next/admin-api-tools",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/admin-api-tools.md",tags:[],version:"current",frontMatter:{id:"admin-api-tools",title:"Pulsar admin interfaces - Tools",sidebar_label:"Tools",description:"Get a comprehensive understanding of concepts and difference of Pulsar admin CLI and Pulsar admin APIs."},sidebar:"docsSidebar",previous:{title:"Transactions",permalink:"/docs/next/admin-api-transactions"},next:{title:"Get started",permalink:"/docs/next/admin-api-get-started"}},s={},u=[{value:"Related topics",id:"related-topics",level:3}],p={toc:u},c="wrapper";function m(e){let{components:a,...l}=e;return(0,r.yg)(c,(0,n.A)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can manage Pulsar entities through the Pulsar admin layer via one of the following tools:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Pulsar admin APIs"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.3.x/"},"Java admin API"),": It\u2019s a programmable interface written in Java.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Go admin API (coming soon)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"pathname:///admin-rest-api/?version=3.3.1"},"REST API"),": HTTP calls, which are made against the admin APIs provided by brokers. In addition, both the Java admin API and pulsar-admin CLI use the REST API.")))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/next/pulsar-admin/"},"pulsar-admin CLI"),": It\u2019s a command-line tool and is available in the bin folder of your Pulsar installation."))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Tools of Pulsar admin layer",src:t(40144).A,width:"872",height:"587"})),(0,r.yg)("p",null,"Here are the explanations and comparisons of these tools."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Category"),(0,r.yg)("th",{parentName:"tr",align:null},"Tools"),(0,r.yg)("th",{parentName:"tr",align:null},"When to use"),(0,r.yg)("th",{parentName:"tr",align:null},"Considerations"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar admin APIs"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/admin/3.3.x/"},"Java admin API")),(0,r.yg)("td",{parentName:"tr",align:null},"- If you want to implement your own admin interface client using Java and manage clusters. ",(0,r.yg)("br",null),(0,r.yg)("br",null)," - If you want to manage resources programmatically rather than relying on external tools inside of unit tests.",(0,r.yg)("br",null),(0,r.yg)("br",null)," - If you want to use admin APIs in Java applications."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("br",null),(0,r.yg)("br",null)," - This method is only available in Java. ",(0,r.yg)("br",null),(0,r.yg)("br",null)," - It needs more development work if you want to use it to build applications.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar admin APIs"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"pathname:///admin-rest-api/?version=3.3.1"},"REST API")),(0,r.yg)("td",{parentName:"tr",align:null},"- If you want to implement your own admin interface client using other languages and manage clusters using scripts."),(0,r.yg)("td",{parentName:"tr",align:null},"- This method is the most complicated. ",(0,r.yg)("br",null),(0,r.yg)("br",null)," - It needs more development work if you want to use it to build applications.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Pulsar admin CLI"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"pathname:///reference/#/next/pulsar-admin/"},"pulsar-admin CLI")),(0,r.yg)("td",{parentName:"tr",align:null},"- If you want to get started with Pulsar admin APIs with minimal effort (e.g., no need to prepare an extra environment). ",(0,r.yg)("br",null),(0,r.yg)("br",null)," - If you want to perform common administrative tasks."),(0,r.yg)("td",{parentName:"tr",align:null},"- This method is the most easy-to-use. ",(0,r.yg)("br",null),(0,r.yg)("br",null)," - It\u2019s challenging to use this method to build applications.",(0,r.yg)("br",null),(0,r.yg)("br",null)," - It takes a little more time because JVM starts slowly.")))),(0,r.yg)("h3",{id:"related-topics"},"Related topics"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"To understand the basics, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/admin-api-overview"},"Pulsar admin API - Overview"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"To learn usage scenarios, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/admin-api-use-cases"},"Pulsar admin API - Use cases"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"To learn common administrative tasks, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/admin-api-features"},"Pulsar admin API - Features"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"To get up quickly, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/admin-api-get-started"},"Pulsar admin API - Get started"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"To check the detailed usage, see the API references below."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.3.x/"},"Java admin API"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/docs/next/reference-rest-api-overview"},"REST API")))))))}m.isMDXComponent=!0},40144:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/admin-api-tools-95a5ddbed922e7976be922e4c85fffbe.svg"}}]);