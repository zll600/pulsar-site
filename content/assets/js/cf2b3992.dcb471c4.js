"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[9170],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(t),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return t?n.createElement(u,s(s({ref:a},c),{},{components:t})):n.createElement(u,s({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=h;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[m]="string"==typeof e?e:r,s[1]=p;for(var o=2;o<i;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},76517:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=t(87462),r=(t(67294),t(3905));const i={id:"admin-api-schemas",title:"Managing Schemas",sidebar_label:"Schemas",original_id:"admin-api-schemas"},s=void 0,p={unversionedId:"admin-api-schemas",id:"version-2.3.2/admin-api-schemas",title:"Managing Schemas",description:"Schemas, like other entities in Pulsar, can be managed using the admin API.",source:"@site/versioned_docs/version-2.3.2/admin-api-schemas.md",sourceDirName:".",slug:"/admin-api-schemas",permalink:"/docs/2.3.2/admin-api-schemas",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.2/admin-api-schemas.md",tags:[],version:"2.3.2",frontMatter:{id:"admin-api-schemas",title:"Managing Schemas",sidebar_label:"Schemas",original_id:"admin-api-schemas"},sidebar:"version-2.3.2/docsSidebar",previous:{title:"Partitioned topics",permalink:"/docs/2.3.2/admin-api-partitioned-topics"},next:{title:"Kafka client wrapper",permalink:"/docs/2.3.2/adaptors-kafka"}},l={},o=[{value:"Schema resources",id:"schema-resources",level:2},{value:"Upload Schema",id:"upload-schema",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"REST",id:"rest",level:4},{value:"Get Schema",id:"get-schema",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Delete Schema",id:"delete-schema",level:3},{value:"pulsar-admin",id:"pulsar-admin-2",level:4},{value:"REST API",id:"rest-api-1",level:4}],c={toc:o};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Schemas, like other entities in Pulsar, can be managed using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/admin-api-overview"},"admin API"),". "),(0,r.kt)("h2",{id:"schema-resources"},"Schema resources"),(0,r.kt)("p",null,"A Pulsar schema is a fairly simple data structure stored in Pulsar for representing the structure of messages stored in a Pulsar topic. The schema structure consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Name"),": A schema's name is the topic that the schema is associated to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Type"),": A schema type represents the type of the schema. The predefined schema types can be found ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.3.2/concepts-schema-registry#supported-schema-formats"},"here"),". If it\nis a customized schema, it is left as an empty string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Payload"),": It is a binary representation of the schema. How to interpret it is up to the implementation of the schema."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Properties"),": It is a user defined properties as a string/string map. Applications can use this bag for carrying any application specific logics. Possible properties\nmight be the Git hash associated with the schema, an environment string like ",(0,r.kt)("inlineCode",{parentName:"li"},"dev")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"prod"),", etc.")),(0,r.kt)("p",null,"All the schemas are versioned with versions. So you can retrieve the schema definition of a given version if the version is not deleted."),(0,r.kt)("h3",{id:"upload-schema"},"Upload Schema"),(0,r.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,r.kt)("p",null,"You can upload a new schema using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-pulsar-admin#get-5"},(0,r.kt)("inlineCode",{parentName:"a"},"upload"))," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin schemas upload <topic-name> --filename /path/to/schema-definition-file\n\n")),(0,r.kt)("p",null,"The schema definition file should contain following json string on defining how the schema look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "type": "STRING",\n    "schema": "",\n    "properties": {\n        "key1" : "value1"\n    }\n}\n\n')),(0,r.kt)("p",null,"An example of the schema definition file can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//conf/schema_example.conf"},"SchemaExample"),"."),(0,r.kt)("h4",{id:"rest"},"REST"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/uploadSchema"},"POST /admin/v2/schemas/:tenant/:namespace/:topic/schema")),(0,r.kt)("h3",{id:"get-schema"},"Get Schema"),(0,r.kt)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,r.kt)("p",null,"You can get the latest version of Schema using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-pulsar-admin#get-5"},(0,r.kt)("inlineCode",{parentName:"a"},"get"))," subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin schemas get <topic-name>\n{\n    "version": 0,\n    "type": "String",\n    "timestamp": 0,\n    "data": "string",\n    "properties": {\n        "property1": "string",\n        "property2": "string"\n    }\n}\n\n')),(0,r.kt)("p",null,"You can also retrieve the Schema of a given version by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"--version")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin schemas get <topic-name> --version <version>\n\n")),(0,r.kt)("h4",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,"Retrieve the latest version of the schema:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/getSchema"},"GET /admin/v2/schemas/:tenant/:namespace/:topic/schema")),(0,r.kt)("p",null,"Retrieve the schema of a given version:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/getSchema"},"GET /admin/v2/schemas/:tenant/:namespace/:topic/schema/:version")),(0,r.kt)("h3",{id:"delete-schema"},"Delete Schema"),(0,r.kt)("h4",{id:"pulsar-admin-2"},"pulsar-admin"),(0,r.kt)("p",null,"You can delete a schema using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.3.2/reference-pulsar-admin#delete-8"},(0,r.kt)("inlineCode",{parentName:"a"},"delete"))," subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin schemas delete <topic-name>\n\n")),(0,r.kt)("h4",{id:"rest-api-1"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.3.2&apiversion=v2#operation/deleteSchema"},"DELETE /admin/v2/schemas/:tenant/:namespace/:topic/schema")))}m.isMDXComponent=!0}}]);