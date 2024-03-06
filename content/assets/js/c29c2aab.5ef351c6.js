"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[62614],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),y=r,d=c["".concat(l,".").concat(y)]||c[y]||h[y]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},38211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(58168),r=(n(96540),n(15680));const o={id:"security-authorization",title:"Authentication and authorization in Pulsar",sidebar_label:"Authorization and ACLs",original_id:"security-authorization"},i=void 0,s={unversionedId:"security-authorization",id:"version-2.7.4/security-authorization",title:"Authentication and authorization in Pulsar",description:"In Pulsar, the authentication provider is responsible for properly identifying clients and associating the clients with role tokens. If you only enable authentication, an authenticated role token has the ability to access all resources in the cluster. Authorization is the process that determines what clients are able to do.",source:"@site/versioned_docs/version-2.7.4/security-authorization.md",sourceDirName:".",slug:"/security-authorization",permalink:"/docs/2.7.4/security-authorization",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/security-authorization.md",tags:[],version:"2.7.4",frontMatter:{id:"security-authorization",title:"Authentication and authorization in Pulsar",sidebar_label:"Authorization and ACLs",original_id:"security-authorization"},sidebar:"version-2.7.4/docsSidebar",previous:{title:"Authentication using HTTP basic",permalink:"/docs/2.7.4/security-basic-auth"},next:{title:"End-to-End Encryption",permalink:"/docs/2.7.4/security-encryption"}},l={},u=[{value:"Broker and Proxy Setup",id:"broker-and-proxy-setup",level:2},{value:"Enable authorization and assign superusers",id:"enable-authorization-and-assign-superusers",level:3},{value:"Proxy Roles",id:"proxy-roles",level:3},{value:"Administer tenants",id:"administer-tenants",level:2},{value:"Create a new tenant",id:"create-a-new-tenant",level:3},{value:"Manage permissions",id:"manage-permissions",level:3},{value:"Pulsar admin authentication",id:"pulsar-admin-authentication",level:3}],p={toc:u},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In Pulsar, the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/security-overview#authentication-providers"},"authentication provider")," is responsible for properly identifying clients and associating the clients with ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/security-overview#role-tokens"},"role tokens"),". If you only enable authentication, an authenticated role token has the ability to access all resources in the cluster. ",(0,r.yg)("em",{parentName:"p"},"Authorization")," is the process that determines ",(0,r.yg)("em",{parentName:"p"},"what")," clients are able to do."),(0,r.yg)("p",null,"The role tokens with the most privileges are the ",(0,r.yg)("em",{parentName:"p"},"superusers"),". The ",(0,r.yg)("em",{parentName:"p"},"superusers")," can create and destroy tenants, along with having full access to all tenant resources."),(0,r.yg)("p",null,"When a superuser creates a ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#tenant"},"tenant"),", that tenant is assigned an admin role. A client with the admin role token can then create, modify and destroy namespaces, and grant and revoke permissions to ",(0,r.yg)("em",{parentName:"p"},"other role tokens")," on those namespaces."),(0,r.yg)("h2",{id:"broker-and-proxy-setup"},"Broker and Proxy Setup"),(0,r.yg)("h3",{id:"enable-authorization-and-assign-superusers"},"Enable authorization and assign superusers"),(0,r.yg)("p",null,"You can enable the authorization and assign the superusers in the broker (",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#broker"},(0,r.yg)("inlineCode",{parentName:"a"},"conf/broker.conf")),") configuration files."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\nauthorizationEnabled=true\nsuperUserRoles=my-super-user-1,my-super-user-2\n\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"A full list of parameters is available in the ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/broker.conf")," file.\nYou can also find the default values for those parameters in ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#broker"},"Broker Configuration"),".")),(0,r.yg)("p",null,"Typically, you use superuser roles for administrators, clients as well as broker-to-broker authorization. When you use ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/concepts-replication"},"geo-replication"),", every broker needs to be able to publish to all the other topics of clusters."),(0,r.yg)("p",null,"You can also enable the authorization for the proxy in the proxy configuration file (",(0,r.yg)("inlineCode",{parentName:"p"},"conf/proxy.conf"),"). Once you enable the authorization on the proxy, the proxy does an additional authorization check before forwarding the request to a broker.\nIf you enable authorization on the broker, the broker checks the authorization of the request when the broker receives the forwarded request."),(0,r.yg)("h3",{id:"proxy-roles"},"Proxy Roles"),(0,r.yg)("p",null,"By default, the broker treats the connection between a proxy and the broker as a normal user connection. The broker authenticates the user as the role configured in ",(0,r.yg)("inlineCode",{parentName:"p"},"proxy.conf"),"(see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/security-tls-authentication#enable-tls-authentication-on-proxies"},'"Enable TLS Authentication on Proxies"'),"). However, when the user connects to the cluster through a proxy, the user rarely requires the authentication. The user expects to be able to interact with the cluster as the role for which they have authenticated with the proxy."),(0,r.yg)("p",null,"Pulsar uses ",(0,r.yg)("em",{parentName:"p"},"Proxy roles")," to enable the authentication. Proxy roles are specified in the broker configuration file, ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#broker"},(0,r.yg)("inlineCode",{parentName:"a"},"conf/broker.conf")),". If a client that is authenticated with a broker is one of its ",(0,r.yg)("inlineCode",{parentName:"p"},"proxyRoles"),", all requests from that client must also carry information about the role of the client that is authenticated with the proxy. This information is called the ",(0,r.yg)("em",{parentName:"p"},"original principal"),". If the ",(0,r.yg)("em",{parentName:"p"},"original principal")," is absent, the client is not able to access anything."),(0,r.yg)("p",null,"You must authorize both the ",(0,r.yg)("em",{parentName:"p"},"proxy role")," and the ",(0,r.yg)("em",{parentName:"p"},"original principal")," to access a resource to ensure that the resource is accessible via the proxy. Administrators can take two approaches to authorize the ",(0,r.yg)("em",{parentName:"p"},"proxy role")," and the ",(0,r.yg)("em",{parentName:"p"},"original principal"),"."),(0,r.yg)("p",null,"The more secure approach is to grant access to the proxy roles each time you grant access to a resource. For example, if you have a proxy role named ",(0,r.yg)("inlineCode",{parentName:"p"},"proxy1"),", when the superuser creates a tenant, you should specify ",(0,r.yg)("inlineCode",{parentName:"p"},"proxy1")," as one of the admin roles. When a role is granted permissions to produce or consume from a namespace, if that client wants to produce or consume through a proxy, you should also grant ",(0,r.yg)("inlineCode",{parentName:"p"},"proxy1")," the same permissions."),(0,r.yg)("p",null,"Another approach is to make the proxy role a superuser. This allows the proxy to access all resources. The client still needs to authenticate with the proxy, and all requests made through the proxy have their role downgraded to the ",(0,r.yg)("em",{parentName:"p"},"original principal")," of the authenticated client. However, if the proxy is compromised, a bad actor could get full access to your cluster."),(0,r.yg)("p",null,"You can specify the roles as proxy roles in ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#broker"},(0,r.yg)("inlineCode",{parentName:"a"},"conf/broker.conf")),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\nproxyRoles=my-proxy-role\n\n# if you want to allow superusers to use the proxy (see above)\nsuperUserRoles=my-super-user-1,my-super-user-2,my-proxy-role\n\n")),(0,r.yg)("h2",{id:"administer-tenants"},"Administer tenants"),(0,r.yg)("p",null,"Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#instance"},"instance")," administrators or some kind of self-service portal typically provisions a Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#tenant"},"tenant"),"."),(0,r.yg)("p",null,"You can manage tenants using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-pulsar-admin"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool."),(0,r.yg)("h3",{id:"create-a-new-tenant"},"Create a new tenant"),(0,r.yg)("p",null,"The following is an example tenant creation command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin tenants create my-tenant \\\n  --admin-roles my-admin-role \\\n  --allowed-clusters us-west,us-east\n\n")),(0,r.yg)("p",null,"This command creates a new tenant ",(0,r.yg)("inlineCode",{parentName:"p"},"my-tenant")," that is allowed to use the clusters ",(0,r.yg)("inlineCode",{parentName:"p"},"us-west")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.yg)("p",null,"A client that successfully identifies itself as having the role ",(0,r.yg)("inlineCode",{parentName:"p"},"my-admin-role")," is allowed to perform all administrative tasks on this tenant."),(0,r.yg)("p",null,"The structure of topic names in Pulsar reflects the hierarchy between tenants, clusters, and namespaces:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\npersistent://tenant/namespace/topic\n\n")),(0,r.yg)("h3",{id:"manage-permissions"},"Manage permissions"),(0,r.yg)("p",null,"You can use ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/admin-api-permissions"},"Pulsar Admin Tools")," for managing permission in Pulsar."),(0,r.yg)("h3",{id:"pulsar-admin-authentication"},"Pulsar admin authentication"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nPulsarAdmin admin = PulsarAdmin.builder()\n                    .serviceHttpUrl("http://broker:8080")\n                    .authentication("com.org.MyAuthPluginClass", "param1:value1")\n                    .build();\n\n')),(0,r.yg)("p",null,"To use TLS:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\nPulsarAdmin admin = PulsarAdmin.builder()\n                    .serviceHttpUrl("https://broker:8080")\n                    .authentication("com.org.MyAuthPluginClass", "param1:value1")\n                    .tlsTrustCertsFilePath("/path/to/trust/cert")\n                    .build();\n\n')))}h.isMDXComponent=!0}}]);