"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3424],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,d=s["".concat(u,".").concat(m)]||s[m]||h[m]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",sidebar_label:"Extend Authentication and Authorization"},o=void 0,l={unversionedId:"security-extending",id:"version-2.2.1/security-extending",title:"Extend Authentication and Authorization in Pulsar",description:"Pulsar provides a way to use custom authentication and authorization mechanisms.",source:"@site/versioned_docs/version-2.2.1/security-extending.md",sourceDirName:".",slug:"/security-extending",permalink:"/docs/2.2.1/security-extending",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.2.1/security-extending.md",tags:[],version:"2.2.1",frontMatter:{id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",sidebar_label:"Extend Authentication and Authorization"},sidebar:"version-2.2.1/docsSidebar",previous:{title:"End-to-End Encryption",permalink:"/docs/2.2.1/security-encryption"},next:{title:"Java",permalink:"/docs/2.2.1/client-libraries-java"}},u={},p=[{value:"Authentication",id:"authentication",level:2},{value:"Client authentication plugin",id:"client-authentication-plugin",level:3},{value:"Proxy/Broker authentication plugin",id:"proxybroker-authentication-plugin",level:3},{value:"Authorization",id:"authorization",level:2},{value:"Broker authorization plugin",id:"broker-authorization-plugin",level:3}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar provides a way to use custom authentication and authorization mechanisms."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"You can use a custom authentication mechanism by providing the implementation in the form of two plugins."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Client authentication plugin"),(0,r.kt)("li",{parentName:"ul"},"Proxy/Broker authentication plugin")),(0,r.kt)("h3",{id:"client-authentication-plugin"},"Client authentication plugin"),(0,r.kt)("p",null,"For the client library, you need to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.client.api.Authentication"),". By entering the command below, you can pass this class when you create a Pulsar client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://localhost:6650")\n    .authentication(new MyAuthentication())\n    .build();\n\n')),(0,r.kt)("p",null,"You can implement 2 interfaces on the client side:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Authentication.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Authentication"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://pulsar.apache.org/api/client/org/apache/pulsar/client/api/AuthenticationDataProvider.html"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthenticationDataProvider")))),(0,r.kt)("p",null,"This in turn requires you to provide the client credentials in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.client.api.AuthenticationDataProvider")," and also leaves the chance to return different kinds of authentication token for different types of connection or by passing a certificate chain to use for TLS."),(0,r.kt)("p",null,"You can find the following examples for different client authentication plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationTls.java"},"Mutual TLS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-athenz/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationAthenz.java"},"Athenz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-sasl/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationSasl.java"},"Kerberos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationToken.java"},"JSON Web Token (JWT)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/oauth2/AuthenticationOAuth2.java"},"OAuth 2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationBasic.java"},"Basic auth"))),(0,r.kt)("h3",{id:"proxybroker-authentication-plugin"},"Proxy/Broker authentication plugin"),(0,r.kt)("p",null,"On the proxy/broker side, you need to configure the corresponding plugin to validate the credentials that the client sends. The proxy and broker can support multiple authentication providers at the same time."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf"),", you can choose to specify a list of valid providers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Authentication provider name list, which is comma separated list of class names\nauthenticationProviders=\n\n")),(0,r.kt)("p",null,"For the implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authentication.AuthenticationProvider")," interface, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProvider.java"},"here"),"."),(0,r.kt)("p",null,"You can find the following examples for different broker authentication plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderTls.java"},"Mutual TLS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-athenz/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderAthenz.java"},"Athenz")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-sasl/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderSasl.java"},"Kerberos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java"},"JSON Web Token (JWT)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java"},"Basic auth"))),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,'Authorization is the operation that checks whether a particular "role" or "principal" has permission to perform a certain operation.'),(0,r.kt)("p",null,"By default, you can use the embedded authorization provider provided by Pulsar. You can also configure a different authorization provider through a plugin. Note that although the Authentication plugin is designed for use in both the proxy and broker, the Authorization plugin is designed only for use on the broker."),(0,r.kt)("h3",{id:"broker-authorization-plugin"},"Broker authorization plugin"),(0,r.kt)("p",null,"To provide a custom authorization provider, you need to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authorization.AuthorizationProvider")," interface, put this class in the Pulsar broker classpath and configure the class in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/broker.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Authorization provider fully qualified class-name\nauthorizationProvider=org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\n\n")),(0,r.kt)("p",null,"For the implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authorization.AuthorizationProvider")," interface, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authorization/AuthorizationProvider.java"},"here"),"."))}s.isMDXComponent=!0}}]);