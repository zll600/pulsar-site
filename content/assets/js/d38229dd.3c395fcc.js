"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[4818],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>f});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return a?t.createElement(f,l(l({ref:n},d),{},{components:a})):t.createElement(f,l({ref:n},d))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81779:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const i={id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants",original_id:"admin-api-tenants"},l=void 0,s={unversionedId:"admin-api-tenants",id:"version-2.6.3/admin-api-tenants",title:"Managing Tenants",description:"Tenants, like namespaces, can be managed using the admin API. There are currently two configurable aspects of tenants:",source:"@site/versioned_docs/version-2.6.3/admin-api-tenants.md",sourceDirName:".",slug:"/admin-api-tenants",permalink:"/docs/2.6.3/admin-api-tenants",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.3/admin-api-tenants.md",tags:[],version:"2.6.3",frontMatter:{id:"admin-api-tenants",title:"Managing Tenants",sidebar_label:"Tenants",original_id:"admin-api-tenants"},sidebar:"version-2.6.3/docsSidebar",previous:{title:"Clusters",permalink:"/docs/2.6.3/admin-api-clusters"},next:{title:"Brokers",permalink:"/docs/2.6.3/admin-api-brokers"}},o={},p=[{value:"Tenant resources",id:"tenant-resources",level:2},{value:"List",id:"list",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"Create",id:"create",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"Get configuration",id:"get-configuration",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"Delete",id:"delete",level:3},{value:"pulsar-admin",id:"pulsar-admin-3",level:4},{value:"Updating",id:"updating",level:3},{value:"pulsar-admin",id:"pulsar-admin-4",level:4}],d={toc:p};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tenants, like namespaces, can be managed using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/admin-api-overview"},"admin API"),". There are currently two configurable aspects of tenants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Admin roles"),(0,r.kt)("li",{parentName:"ul"},"Allowed clusters")),(0,r.kt)("h2",{id:"tenant-resources"},"Tenant resources"),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,r.kt)("p",null,"You can list all of the tenants associated with an ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-terminology#instance"},"instance")," using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#tenants-list"},(0,r.kt)("inlineCode",{parentName:"a"},"list"))," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants list\n\n")),(0,r.kt)("p",null,"That will return a simple list, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nmy-tenant-1\nmy-tenant-2\n\n")),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,r.kt)("p",null,"You can create a new tenant using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#tenants-create"},(0,r.kt)("inlineCode",{parentName:"a"},"create"))," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants create my-tenant\n\n")),(0,r.kt)("p",null,"When creating a tenant, you can assign admin roles using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-r"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--admin-roles")," flag. You can specify multiple roles as a comma-separated list. Here are some examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants create my-tenant \\\n  --admin-roles role1,role2,role3\n\n$ pulsar-admin tenants create my-tenant \\\n  -r role1\n\n")),(0,r.kt)("h3",{id:"get-configuration"},"Get configuration"),(0,r.kt)("h4",{id:"pulsar-admin-2"},"pulsar-admin"),(0,r.kt)("p",null,"You can see a tenant's configuration as a JSON object using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#tenants-get"},(0,r.kt)("inlineCode",{parentName:"a"},"get"))," subcommand and specifying the name of the tenant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin tenants get my-tenant\n{\n  "adminRoles": [\n    "admin1",\n    "admin2"\n  ],\n  "allowedClusters": [\n    "cl1",\n    "cl2"\n  ]\n}\n\n')),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("h4",{id:"pulsar-admin-3"},"pulsar-admin"),(0,r.kt)("p",null,"You can delete a tenant using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#tenants-delete"},(0,r.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand and specifying the tenant name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin tenants delete my-tenant\n\n")),(0,r.kt)("h3",{id:"updating"},"Updating"),(0,r.kt)("h4",{id:"pulsar-admin-4"},"pulsar-admin"),(0,r.kt)("p",null,"You can update a tenant's configuration using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.6.3/reference-pulsar-admin#tenants-update"},(0,r.kt)("inlineCode",{parentName:"a"},"update"))," subcommand"))}u.isMDXComponent=!0}}]);