"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[67924],{15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>g});var r=n(96540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),p=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},m=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=t,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return n?r.createElement(g,i(i({ref:a},m),{},{components:n})):r.createElement(g,i({ref:a},m))}));function g(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:t,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>i});var r=n(96540),t=n(20053);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:n},a)}},11470:(e,a,n)=>{n.d(a,{A:()=>T});var r=n(58168),t=n(96540),s=n(20053),i=n(23104),o=n(56347),l=n(57485),p=n(31682),m=n(89466);function u(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:r,default:t}}=e;return{value:a,label:n,attributes:r,default:t}}))}function c(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??u(n);return function(e){const a=(0,p.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function d(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function y(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,s=c(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:s}))),[l,p]=g({queryString:n,groupId:r}),[u,y]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,m.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),h=(()=>{const e=l??u;return d({value:e,tabValues:s})?e:null})();(0,t.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),y(e)}),[p,y,s]),tabValues:s}}var h=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:n,selectedValue:o,selectValue:l,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const a=e.currentTarget,n=m.indexOf(a),r=p[n].value;r!==o&&(u(a),l(r))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;a=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;a=m[n]??m[m.length-1];break}}a?.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},a)},p.map((e=>{let{value:a,label:n,attributes:i}=e;return t.createElement("li",(0,r.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>m.push(e),onKeyDown:d,onClick:c},i,{className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===a})}),n??a)})))}function b(e){let{lazy:a,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},s.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function N(e){const a=y(e);return t.createElement("div",{className:(0,s.A)("tabs-container",f.tabList)},t.createElement(v,(0,r.A)({},e,a)),t.createElement(b,(0,r.A)({},e,a)))}function T(e){const a=(0,h.A)();return t.createElement(N,(0,r.A)({key:String(a)},e))}},63169:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(58168),t=(n(96540),n(15680)),s=n(11470),i=n(19365);const o={id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions",description:"Learn how to manage permissions using Pulsar CLI and admin APIs."},l=void 0,p={unversionedId:"admin-api-permissions",id:"version-3.3.x/admin-api-permissions",title:"Managing permissions",description:"Learn how to manage permissions using Pulsar CLI and admin APIs.",source:"@site/versioned_docs/version-3.3.x/admin-api-permissions.md",sourceDirName:".",slug:"/admin-api-permissions",permalink:"/docs/3.3.x/admin-api-permissions",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/admin-api-permissions.md",tags:[],version:"3.3.x",frontMatter:{id:"admin-api-permissions",title:"Managing permissions",sidebar_label:"Permissions",description:"Learn how to manage permissions using Pulsar CLI and admin APIs."},sidebar:"docsSidebar",previous:{title:"Packages",permalink:"/docs/3.3.x/admin-api-packages"},next:{title:"Schemas",permalink:"/docs/3.3.x/admin-api-schemas"}},m={},u=[{value:"Grant permissions",id:"grant-permissions",level:2},{value:"Get permissions",id:"get-permissions",level:2},{value:"Revoke permissions",id:"revoke-permissions",level:2}],c={toc:u},d="wrapper";function g(e){let{components:a,...n}=e;return(0,t.yg)(d,(0,r.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"}," This page only shows ",(0,t.yg)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,t.yg)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,t.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.3.x/pulsar-admin/"},"Pulsar admin docs"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,t.yg)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"For the latest and complete information about ",(0,t.yg)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/3.3.x/"},"Java admin API doc"),".")))),(0,t.yg)("p",null,"Pulsar allows you to grant namespace-level or topic-level permission to users."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"If you grant namespace-level permission to a user, then the user can access all the topics under the namespace.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"If you grant topic-level permission to a user, then the user can access only the topic."))),(0,t.yg)("p",null,"The chapters below demonstrate how to grant namespace-level permissions to users. For how to grant topic-level permissions to users, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.3.x/admin-api-topics#grant-permission"},"manage topics"),"."),(0,t.yg)("h2",{id:"grant-permissions"},"Grant permissions"),(0,t.yg)("p",null,"You can grant permissions to specific roles for lists of operations such as ",(0,t.yg)("inlineCode",{parentName:"p"},"produce")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"consume"),"."),(0,t.yg)(s.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,t.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.yg)("p",null,"Use the ",(0,t.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.3.x/pulsar-admin/namespaces?id=grant-permission"},(0,t.yg)("inlineCode",{parentName:"a"},"grant-permission"))," subcommand and specify a namespace, actions using the ",(0,t.yg)("inlineCode",{parentName:"p"},"--actions")," flag, and a role using the ",(0,t.yg)("inlineCode",{parentName:"p"},"--role")," flag:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces grant-permission test-tenant/namespace1 \\\n    --actions produce,consume \\\n    --role admin10\n")),(0,t.yg)("p",null,"Wildcard authorization can be performed when ",(0,t.yg)("inlineCode",{parentName:"p"},"authorizationAllowWildcardsMatching")," is set to ",(0,t.yg)("inlineCode",{parentName:"p"},"true")," in ",(0,t.yg)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces grant-permission test-tenant/namespace1 \\\n      --actions produce,consume \\\n      --role 'my.role.*'\n")),(0,t.yg)("p",null,"Then, roles ",(0,t.yg)("inlineCode",{parentName:"p"},"my.role.1"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"my.role.2"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"my.role.foo"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"my.role.bar"),", etc. can produce and consume."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces grant-permission test-tenant/namespace1 \\\n      --actions produce,consume \\\n      --role '*.role.my'\n")),(0,t.yg)("p",null,"Then, roles ",(0,t.yg)("inlineCode",{parentName:"p"},"1.role.my"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"2.role.my"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"foo.role.my"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"bar.role.my"),", etc. can produce and consume."),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"A wildcard matching works at ",(0,t.yg)("strong",{parentName:"p"},"the beginning or end of the role name only"),".")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Example")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces grant-permission test-tenant/namespace1 \\\n      --actions produce,consume \\\n      --role 'my.*.role'\n")),(0,t.yg)("p",null,"In this case, only the role ",(0,t.yg)("inlineCode",{parentName:"p"},"my.*.role")," has permissions.\nRoles ",(0,t.yg)("inlineCode",{parentName:"p"},"my.1.role"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"my.2.role"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"my.foo.role"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"my.bar.role"),", etc. ",(0,t.yg)("strong",{parentName:"p"},"cannot")," produce and consume.")),(0,t.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.3.1&apiversion=v2#operation/grantPermissionOnNamespace"},"POST /admin/v2/namespaces/:tenant/:namespace/permissions/:role/grantPermissionOnNamespace"))),(0,t.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"admin.namespaces().grantPermissionOnNamespace(namespace, role, getAuthActions(actions));\n")))),(0,t.yg)("h2",{id:"get-permissions"},"Get permissions"),(0,t.yg)("p",null,"You can see which permissions have been granted to which roles in a namespace."),(0,t.yg)(s.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,t.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.yg)("p",null,"Use the ",(0,t.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.3.x/pulsar-admin/namespaces?id=grant-permission"},(0,t.yg)("inlineCode",{parentName:"a"},"permissions"))," subcommand and specify a namespace:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces permissions test-tenant/namespace1\n")),(0,t.yg)("p",null,"Example output:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"my.role.*    [produce, consume]\n"))),(0,t.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.3.1&apiversion=v2#operation/getPermissions"},"GET /admin/v2/namespaces/:tenant/:namespace/permissions/getPermissions"))),(0,t.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"admin.namespaces().getPermissions(namespace);\n")))),(0,t.yg)("h2",{id:"revoke-permissions"},"Revoke permissions"),(0,t.yg)("p",null,"You can revoke permissions from specific roles, which means that those roles will no longer have access to the specified namespace."),(0,t.yg)(s.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"},{label:"Java",value:"Java"}],mdxType:"Tabs"},(0,t.yg)(i.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,t.yg)("p",null,"Use the ",(0,t.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.3.x/pulsar-admin/namespaces?id=revoke-permission"},(0,t.yg)("inlineCode",{parentName:"a"},"revoke-permission"))," subcommand and specify a namespace and a role using the ",(0,t.yg)("inlineCode",{parentName:"p"},"--role")," flag:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces revoke-permission test-tenant/namespace1 \\\n      --role admin10\n"))),(0,t.yg)(i.A,{value:"REST API",mdxType:"TabItem"},(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=3.3.1&apiversion=v2#operation/revokePermissionsOnNamespace"},"DELETE /admin/v2/namespaces/:tenant/:namespace/permissions/:role/revokePermissionsOnNamespace"))),(0,t.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"admin.namespaces().revokePermissionsOnNamespace(namespace, role);\n")))))}g.isMDXComponent=!0}}]);