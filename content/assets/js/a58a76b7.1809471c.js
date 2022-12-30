"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"security-authorization",title:"Authentication and authorization in Pulsar",sidebar_label:"Authorization and ACLs",original_id:"security-authorization"},o=void 0,s={unversionedId:"security-authorization",id:"version-2.3.0/security-authorization",title:"Authentication and authorization in Pulsar",description:"In Pulsar, the authentication provider is charged with properly identifying clients and",source:"@site/versioned_docs/version-2.3.0/security-authorization.md",sourceDirName:".",slug:"/security-authorization",permalink:"/docs/2.3.0/security-authorization",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.0/security-authorization.md",tags:[],version:"2.3.0",frontMatter:{id:"security-authorization",title:"Authentication and authorization in Pulsar",sidebar_label:"Authorization and ACLs",original_id:"security-authorization"},sidebar:"version-2.3.0/docsSidebar",previous:{title:"Authentication using Athenz",permalink:"/docs/2.3.0/security-athenz"},next:{title:"End-to-End Encryption",permalink:"/docs/2.3.0/security-encryption"}},l={},u=[{value:"Broker and Proxy Setup",id:"broker-and-proxy-setup",level:2},{value:"Enabling Authorization and Assigning Superusers",id:"enabling-authorization-and-assigning-superusers",level:3},{value:"Proxy Roles",id:"proxy-roles",level:3},{value:"Administering Tenants",id:"administering-tenants",level:2},{value:"Creating a new tenant",id:"creating-a-new-tenant",level:3},{value:"Managing permissions",id:"managing-permissions",level:3},{value:"Pulsar admin authentication",id:"pulsar-admin-authentication",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Pulsar, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/security-overview#authentication-providers"},"authentication provider")," is charged with properly identifying clients and\nassociating them with ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/security-overview#role-tokens"},"role tokens"),". If only authentication is enabled, an authenticated role token will have the ability to access all resources in the cluster. ",(0,a.kt)("em",{parentName:"p"},"Authorization")," is the process that determines ",(0,a.kt)("em",{parentName:"p"},"what")," clients are able to do."),(0,a.kt)("p",null,"The role tokens with the most privileges are the ",(0,a.kt)("em",{parentName:"p"},"superusers"),". The ",(0,a.kt)("em",{parentName:"p"},"superusers")," can create and destroy tenants, along with having full access to all tenant resources."),(0,a.kt)("p",null,"When a ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#tenant"},"tenant")," is created by a superuser, that tenant is assigned an admin role. A client with the admin role token can then create, modify and destroy namespaces, and grant and revoke permissions to ",(0,a.kt)("em",{parentName:"p"},"other role tokens")," on those namespaces."),(0,a.kt)("h2",{id:"broker-and-proxy-setup"},"Broker and Proxy Setup"),(0,a.kt)("h3",{id:"enabling-authorization-and-assigning-superusers"},"Enabling Authorization and Assigning Superusers"),(0,a.kt)("p",null,"Authorization is enabled and superusers are assigned in the broker (",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-configuration#broker"},(0,a.kt)("inlineCode",{parentName:"a"},"conf/broker.conf")),") configuration files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nauthorizationEnabled=true\nsuperUserRoles=my-super-user-1,my-super-user-2\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A full list of parameters available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file,\nas well as the default values for those parameters, can be found in ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-configuration#broker"},"Broker Configuration")," ")),(0,a.kt)("p",null,"Typically, superuser roles are used for administrators and clients but also for broker-to-broker authorization. When using ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/concepts-replication"},"geo-replication"),", every broker needs to be able to publish to all the other clusters' topics."),(0,a.kt)("p",null,"Authorization can also be enabled for the proxy the proxy configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf"),"). If it is enabled on the proxy, the proxy will do an additional authorization check before forwarding the request to a broker. The broker will still check the authorization of the request when it receives the forwarded request."),(0,a.kt)("h3",{id:"proxy-roles"},"Proxy Roles"),(0,a.kt)("p",null,"By default, the broker treats the connection between a proxy and the broker as a normal user connection. The user is authenticated as the role configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy.conf")," (see ",(0,a.kt)("a",{parentName:"p",href:"security-tls-authentication#on-proxies"},'"Enabling TLS Authentication on Proxies"'),"). However, this is rarely the behaviour that the user desires when connecting to the cluster through a proxy. The user expects to be able to interact with the cluster as the role for which they have authenticated with the proxy."),(0,a.kt)("p",null,"Pulsar uses ",(0,a.kt)("em",{parentName:"p"},"Proxy roles")," to enable this. Proxy roles are specified in the broker configuration file, ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-configuration#broker"},(0,a.kt)("inlineCode",{parentName:"a"},"conf/broker.conf")),". If a client that is authenticated with a broker is one of its ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyRoles"),", all requests from that client must also carry information about the role of the client that is authenticated with the proxy. If this information, which we call the ",(0,a.kt)("em",{parentName:"p"},"original principal"),", is missing, the client will not be able to access anything."),(0,a.kt)("p",null,"Both the ",(0,a.kt)("em",{parentName:"p"},"proxy role")," and the ",(0,a.kt)("em",{parentName:"p"},"original principle")," must be authorized to access a resource for that resource to be accessible via the proxy. Administrators can take two approaches to this."),(0,a.kt)("p",null,"The more secure approach is to grant access to the proxy roles each time you grant access to a resource. For example, if you have a proxy role ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy1"),", when a tenant is created by the superuser, ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy1")," should be specified as one of the admin roles. When a role is granted permissions to produce or consume from a namespace, if that client wants to produce or consume through a proxy, ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy1")," should also be granted the same permissions."),(0,a.kt)("p",null,"Another approach is to make the proxy role a superuser. This will allow the proxy to access all resources. The client will still need to authenticate with the proxy, and all requests made through the proxy will have their role downgraded to the ",(0,a.kt)("em",{parentName:"p"},"original principal")," of the authenticated client. However, if the proxy is compromised, a bad actor could get full access to your cluster."),(0,a.kt)("p",null,"Roles can be specified as proxy roles in ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-configuration#broker"},(0,a.kt)("inlineCode",{parentName:"a"},"conf/broker.conf")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"\nproxyRoles=my-proxy-role\n\n# if you want to allow superusers to use the proxy (see above)\nsuperUserRoles=my-super-user-1,my-super-user-2,my-proxy-role\n\n")),(0,a.kt)("h2",{id:"administering-tenants"},"Administering Tenants"),(0,a.kt)("h3",{id:"creating-a-new-tenant"},"Creating a new tenant"),(0,a.kt)("p",null,"A Pulsar ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#tenant"},"tenant")," is typically provisioned by Pulsar ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-terminology#instance"},"instance")," administrators or by some kind of self-service portal."),(0,a.kt)("p",null,"Tenants are managed using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/reference-pulsar-admin"},(0,a.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool. Here's an example tenant creation command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin tenants create my-tenant \\\n  --admin-roles my-admin-role \\\n  --allowed-clusters us-west,us-east\n\n")),(0,a.kt)("p",null,"This command will create a new tenant ",(0,a.kt)("inlineCode",{parentName:"p"},"my-tenant")," that will be allowed to use the clusters ",(0,a.kt)("inlineCode",{parentName:"p"},"us-west")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,a.kt)("p",null,"A client that successfully identified itself as having the role ",(0,a.kt)("inlineCode",{parentName:"p"},"my-admin-role")," would then be allowed to perform all administrative tasks on this tenant."),(0,a.kt)("p",null,"The structure of topic names in Pulsar reflects the hierarchy between tenants, clusters, and namespaces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\npersistent://tenant/namespace/topic\n\n")),(0,a.kt)("h3",{id:"managing-permissions"},"Managing permissions"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.3.0/admin-api-permissions"},"Pulsar Admin Tools")," for managing permission in Pulsar."),(0,a.kt)("h3",{id:"pulsar-admin-authentication"},"Pulsar admin authentication"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarAdmin admin = PulsarAdmin.builder()\n                    .serviceHttpUrl("http://broker:8080")\n                    .authentication("com.org.MyAuthPluginClass", "param1:value1")\n                    .build();\n\n')),(0,a.kt)("p",null,"To use TLS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarAdmin admin = PulsarAdmin.builder()\n                    .serviceHttpUrl("https://broker:8080")\n                    .authentication("com.org.MyAuthPluginClass", "param1:value1")\n                    .tlsTrustCertsFilePath("/path/to/trust/cert")\n                    .build();\n\n')))}c.isMDXComponent=!0}}]);