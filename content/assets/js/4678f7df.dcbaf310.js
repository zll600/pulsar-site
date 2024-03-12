"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[43231],{15680:(a,e,t)=>{t.d(e,{xA:()=>u,yg:()=>d});var n=t(96540);function l(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){l(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,l=function(a,e){if(null==a)return{};var t,n,l={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(l[t]=a[t]);return l}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(l[t]=a[t])}return l}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},u=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c="mdxType",g={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,l=a.mdxType,r=a.originalType,o=a.parentName,u=s(a,["components","mdxType","originalType","parentName"]),c=i(t),m=l,d=c["".concat(o,".").concat(m)]||c[m]||g[m]||r;return t?n.createElement(d,p(p({ref:e},u),{},{components:t})):n.createElement(d,p({ref:e},u))}));function d(a,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var r=t.length,p=new Array(r);p[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=a,s[c]="string"==typeof a?a:l,p[1]=s;for(var i=2;i<r;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(a,e,t)=>{t.d(e,{A:()=>p});var n=t(96540),l=t(20053);const r={tabItem:"tabItem_Ymn6"};function p(a){let{children:e,hidden:t,className:p}=a;return n.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,p),hidden:t},e)}},11470:(a,e,t)=>{t.d(e,{A:()=>N});var n=t(58168),l=t(96540),r=t(20053),p=t(23104),s=t(56347),o=t(57485),i=t(31682),u=t(89466);function c(a){return function(a){return l.Children.map(a,(a=>{if(!a||(0,l.isValidElement)(a)&&function(a){const{props:e}=a;return!!e&&"object"==typeof e&&"value"in e}(a))return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(a).map((a=>{let{props:{value:e,label:t,attributes:n,default:l}}=a;return{value:e,label:t,attributes:n,default:l}}))}function g(a){const{values:e,children:t}=a;return(0,l.useMemo)((()=>{const a=e??c(t);return function(a){const e=(0,i.X)(a,((a,e)=>a.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(a),a}),[e,t])}function m(a){let{value:e,tabValues:t}=a;return t.some((a=>a.value===e))}function d(a){let{queryString:e=!1,groupId:t}=a;const n=(0,s.W6)(),r=function(a){let{queryString:e=!1,groupId:t}=a;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,o.aZ)(r),(0,l.useCallback)((a=>{if(!r)return;const e=new URLSearchParams(n.location.search);e.set(r,a),n.replace({...n.location,search:e.toString()})}),[r,n])]}function y(a){const{defaultValue:e,queryString:t=!1,groupId:n}=a,r=g(a),[p,s]=(0,l.useState)((()=>function(a){let{defaultValue:e,tabValues:t}=a;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=t.find((a=>a.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:r}))),[o,i]=d({queryString:t,groupId:n}),[c,y]=function(a){let{groupId:e}=a;const t=function(a){return a?`docusaurus.tab.${a}`:null}(e),[n,r]=(0,u.Dv)(t);return[n,(0,l.useCallback)((a=>{t&&r.set(a)}),[t,r])]}({groupId:n}),f=(()=>{const a=o??c;return m({value:a,tabValues:r})?a:null})();(0,l.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:p,selectValue:(0,l.useCallback)((a=>{if(!m({value:a,tabValues:r}))throw new Error(`Can't select invalid tab value=${a}`);s(a),i(a),y(a)}),[i,y,r]),tabValues:r}}var f=t(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(a){let{className:e,block:t,selectedValue:s,selectValue:o,tabValues:i}=a;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,p.a_)(),g=a=>{const e=a.currentTarget,t=u.indexOf(e),n=i[t].value;n!==s&&(c(e),o(n))},m=a=>{let e=null;switch(a.key){case"Enter":g(a);break;case"ArrowRight":{const t=u.indexOf(a.currentTarget)+1;e=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(a.currentTarget)-1;e=u[t]??u[u.length-1];break}}e?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},e)},i.map((a=>{let{value:e,label:t,attributes:p}=a;return l.createElement("li",(0,n.A)({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,key:e,ref:a=>u.push(a),onKeyDown:m,onClick:g},p,{className:(0,r.A)("tabs__item",h.tabItem,p?.className,{"tabs__item--active":s===e})}),t??e)})))}function k(a){let{lazy:e,children:t,selectedValue:n}=a;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const a=r.find((a=>a.props.value===n));return a?(0,l.cloneElement)(a,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((a,e)=>(0,l.cloneElement)(a,{key:e,hidden:a.props.value!==n}))))}function b(a){const e=y(a);return l.createElement("div",{className:(0,r.A)("tabs-container",h.tabList)},l.createElement(v,(0,n.A)({},a,e)),l.createElement(k,(0,n.A)({},a,e)))}function N(a){const e=(0,f.A)();return l.createElement(b,(0,n.A)({key:String(e)},a))}},75461:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(58168),l=(t(96540),t(15680)),r=t(11470),p=t(19365);const s={id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",original_id:"admin-api-packages"},o=void 0,i={unversionedId:"admin-api-packages",id:"version-2.10.x/admin-api-packages",title:"Manage packages",description:"Important",source:"@site/versioned_docs/version-2.10.x/admin-api-packages.md",sourceDirName:".",slug:"/admin-api-packages",permalink:"/docs/2.10.x/admin-api-packages",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/admin-api-packages.md",tags:[],version:"2.10.x",frontMatter:{id:"admin-api-packages",title:"Manage packages",sidebar_label:"Packages",original_id:"admin-api-packages"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Functions",permalink:"/docs/2.10.x/admin-api-functions"},next:{title:"Kafka client wrapper",permalink:"/docs/2.10.x/adaptors-kafka"}},u={},c=[{value:"What is a package?",id:"what-is-a-package",level:2},{value:"How to use a package",id:"how-to-use-a-package",level:2},{value:"Package management in Pulsar",id:"package-management-in-pulsar",level:2},{value:"Upload a package",id:"upload-a-package",level:3},{value:"Download a package",id:"download-a-package",level:3},{value:"Delete a package",id:"delete-a-package",level:3},{value:"Get the metadata of a package",id:"get-the-metadata-of-a-package",level:3},{value:"Update the metadata of a package",id:"update-the-metadata-of-a-package",level:3},{value:"List all versions of a package",id:"list-all-versions-of-a-package",level:3},{value:"List all packages of a specific type under a namespace",id:"list-all-packages-of-a-specific-type-under-a-namespace",level:3}],g={toc:c},m="wrapper";function d(a){let{components:e,...t}=a;return(0,l.yg)(m,(0,n.A)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("strong",{parentName:"p"},"Important")),(0,l.yg)("p",{parentName:"blockquote"},"This page only shows ",(0,l.yg)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.yg)("ul",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.yg)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,l.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.10.x/pulsar-admin/"},"Pulsar admin doc"),".")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.yg)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.yg)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.10.x/"},"Java admin API doc"),".")))),(0,l.yg)("p",null,"Package managers or package-management systems automatically manage packages in a consistent manner. These tools simplify the installation tasks, upgrade process, and deletion operations for users. A package is a minimal unit that a package manager deals with. In Pulsar, packages are organized at the tenant- and namespace-level to manage Pulsar Functions and Pulsar IO connectors (i.e., source and sink)."),(0,l.yg)("h2",{id:"what-is-a-package"},"What is a package?"),(0,l.yg)("p",null,"A package is a set of elements that the user would like to reuse in later operations. In Pulsar, a package can be a group of functions, sources, and sinks. You can define a package according to your needs."),(0,l.yg)("p",null,"The package management system in Pulsar stores the data and metadata of each package (as shown in the table below) and tracks the package versions."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Metadata"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"description"),(0,l.yg)("td",{parentName:"tr",align:null},"The description of the package.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"contact"),(0,l.yg)("td",{parentName:"tr",align:null},"The contact information of a package. For example, an email address of the developer team.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"create_time"),(0,l.yg)("td",{parentName:"tr",align:null},"The time when the package is created.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"modification_time"),(0,l.yg)("td",{parentName:"tr",align:null},"The time when the package is lastly modified.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"properties"),(0,l.yg)("td",{parentName:"tr",align:null},"A user-defined key/value map to store other information.")))),(0,l.yg)("h2",{id:"how-to-use-a-package"},"How to use a package"),(0,l.yg)("p",null,"Packages can efficiently use the same set of functions and IO connectors. For example, you can use the same function, source, and sink in multiple namespaces. The main steps are:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Create a package in the package manager by providing the following information: type, tenant, namespace, package name, and version."),(0,l.yg)("table",{parentName:"li"},(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Component"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"type"),(0,l.yg)("td",{parentName:"tr",align:null},"Specify one of the supported package types: function, sink and source.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tenant"),(0,l.yg)("td",{parentName:"tr",align:null},"Specify the tenant where you want to create the package.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"namespace"),(0,l.yg)("td",{parentName:"tr",align:null},"Specify the namespace where you want to create the package.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"name"),(0,l.yg)("td",{parentName:"tr",align:null},"Specify the complete name of the package, using the format ",(0,l.yg)("inlineCode",{parentName:"td"},"<tenant>/<namespace>/<package name>"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"version"),(0,l.yg)("td",{parentName:"tr",align:null},"Specify the version of the package using the format ",(0,l.yg)("inlineCode",{parentName:"td"},"MajorVerion.MinorVersion")," in numerals.")))),(0,l.yg)("p",{parentName:"li"},"The information you provide creates a URL for a package, in the format ",(0,l.yg)("inlineCode",{parentName:"p"},"<type>://<tenant>/<namespace>/<package name>/<version>"),".")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Upload the elements to the package, i.e., the functions, sources, and sinks that you want to use across namespaces.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Apply permissions to this package from various namespaces."))),(0,l.yg)("p",null,"Now, you can use the elements you defined in the package by calling this package from within the package manager. The package manager locates it by the URL. For example,"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\nsink://public/default/mysql-sink@1.0\nfunction://my-tenant/my-ns/my-function@0.1\nsource://my-tenant/my-ns/mysql-cdc-source@2.3\n\n")),(0,l.yg)("h2",{id:"package-management-in-pulsar"},"Package management in Pulsar"),(0,l.yg)("p",null,"You can use the command line tools, REST API, or the Java client to manage your package resources in Pulsar. More specifically, you can use these tools to ",(0,l.yg)("a",{parentName:"p",href:"#upload-a-package"},"upload"),", ",(0,l.yg)("a",{parentName:"p",href:"#download-a-package"},"download"),", and ",(0,l.yg)("a",{parentName:"p",href:"#delete-a-package"},"delete")," a package, ",(0,l.yg)("a",{parentName:"p",href:"#get-the-metadata-of-a-package"},"get the metadata")," and ",(0,l.yg)("a",{parentName:"p",href:"#update-the-metadata-of-a-package"},"update the metadata")," of a package, ",(0,l.yg)("a",{parentName:"p",href:"#list-all-versions-of-a-package"},"get the versions")," of a package, and ",(0,l.yg)("a",{parentName:"p",href:"#list-all-packages-of-a-specific-type-under-a-namespace"},"get all packages of a specific type under a namespace"),"."),(0,l.yg)("h3",{id:"upload-a-package"},"Upload a package"),(0,l.yg)("p",null,"You can use the following commands to upload a package."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages upload function://public/default/example@v0.1 --path package-file --description package-description\n\n"))),(0,l.yg)(p.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.6&apiversion=v3#operation/upload"},"POST /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/upload"))),(0,l.yg)(p.A,{value:"JAVA",mdxType:"TabItem"},(0,l.yg)("p",null,"Upload a package to the package management service synchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  void upload(PackageMetadata metadata, String packageName, String path) throws PulsarAdminException;\n\n")),(0,l.yg)("p",null,"Upload a package to the package management service asynchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> uploadAsync(PackageMetadata metadata, String packageName, String path);\n\n")))),(0,l.yg)("h3",{id:"download-a-package"},"Download a package"),(0,l.yg)("p",null,"You can use the following commands to download a package."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages download function://public/default/example@v0.1 --path package-file\n\n"))),(0,l.yg)(p.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.6&apiversion=v3#operation/download"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/download"))),(0,l.yg)(p.A,{value:"JAVA",mdxType:"TabItem"},(0,l.yg)("p",null,"Download a package from the package management service synchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  void download(String packageName, String path) throws PulsarAdminException;\n\n")),(0,l.yg)("p",null,"Download a package from the package management service asynchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> downloadAsync(String packageName, String path);\n\n")))),(0,l.yg)("h3",{id:"delete-a-package"},"Delete a package"),(0,l.yg)("p",null,"You can use the following commands to delete a package."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("p",null,"The following command deletes a package of version 0.1."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages delete functions://public/default/example@v0.1\n\n"))),(0,l.yg)(p.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.6&apiversion=v3#operation/delete"},"DELETE /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/delete"))),(0,l.yg)(p.A,{value:"JAVA",mdxType:"TabItem"},(0,l.yg)("p",null,"Delete a specified package synchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  void delete(String packageName) throws PulsarAdminException;\n\n")),(0,l.yg)("p",null,"Delete a specified package asynchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> deleteAsync(String packageName);\n\n")))),(0,l.yg)("h3",{id:"get-the-metadata-of-a-package"},"Get the metadata of a package"),(0,l.yg)("p",null,"You can use the following commands to get the metadata of a package."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages get-metadata function://public/default/test@v1\n\n"))),(0,l.yg)(p.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.6&apiversion=v3#operation/getMeta"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata/getMeta"))),(0,l.yg)(p.A,{value:"JAVA",mdxType:"TabItem"},(0,l.yg)("p",null,"Get the metadata of a package synchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  PackageMetadata getMetadata(String packageName) throws PulsarAdminException;\n\n")),(0,l.yg)("p",null,"Get the metadata of a package asynchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<PackageMetadata> getMetadataAsync(String packageName);\n\n")))),(0,l.yg)("h3",{id:"update-the-metadata-of-a-package"},"Update the metadata of a package"),(0,l.yg)("p",null,"You can use the following commands to update the metadata of a package."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages update-metadata function://public/default/example@v0.1 --description update-description\n\n"))),(0,l.yg)(p.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.6&apiversion=v3#operation/updateMeta"},"PUT /admin/v3/packages/:type/:tenant/:namespace/:packageName/:version/metadata/updateMeta"))),(0,l.yg)(p.A,{value:"JAVA",mdxType:"TabItem"},(0,l.yg)("p",null,"Update the metadata of a package synchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  void updateMetadata(String packageName, PackageMetadata metadata) throws PulsarAdminException;\n\n")),(0,l.yg)("p",null,"Update the metadata of a package asynchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<Void> updateMetadataAsync(String packageName, PackageMetadata metadata);\n\n")))),(0,l.yg)("h3",{id:"list-all-versions-of-a-package"},"List all versions of a package"),(0,l.yg)("p",null,"You can use the following commands to list all versions of a package."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list-versions type://tenant/namespace/packageName\n\n"))),(0,l.yg)(p.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.6&apiversion=v3#operation/listPackageVersion"},"GET /admin/v3/packages/:type/:tenant/:namespace/:packageName/listPackageVersion"))),(0,l.yg)(p.A,{value:"JAVA",mdxType:"TabItem"},(0,l.yg)("p",null,"List all versions of a package synchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  List<String> listPackageVersions(String packageName) throws PulsarAdminException;\n\n")),(0,l.yg)("p",null,"List all versions of a package asynchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<List<String>> listPackageVersionsAsync(String packageName);\n\n")))),(0,l.yg)("h3",{id:"list-all-packages-of-a-specific-type-under-a-namespace"},"List all packages of a specific type under a namespace"),(0,l.yg)("p",null,"You can use the following commands to list all packages of a specific type under a namespace."),(0,l.yg)(r.A,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"JAVA",value:"JAVA"}],mdxType:"Tabs"},(0,l.yg)(p.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"\nbin/pulsar-admin packages list --type function public/default\n\n"))),(0,l.yg)(p.A,{value:"REST API",mdxType:"TabItem"},(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/packages-rest-api?version=2.10.6&apiversion=v3#operation/listPackages"},"PUT /admin/v3/packages/:type/:tenant/:namespace/listPackages"))),(0,l.yg)(p.A,{value:"JAVA",mdxType:"TabItem"},(0,l.yg)("p",null,"List all packages of a specific type under a namespace synchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  List<String> listPackages(String type, String namespace) throws PulsarAdminException;\n\n")),(0,l.yg)("p",null,"List all packages of a specific type under a namespace asynchronously."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"\n  CompletableFuture<List<String>> listPackagesAsync(String type, String namespace);\n\n")))))}d.isMDXComponent=!0}}]);