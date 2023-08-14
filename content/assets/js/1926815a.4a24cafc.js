"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},54013:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={id:"client-libraries-java",title:"Pulsar Java client",sidebar_label:"Java"},i=void 0,c={unversionedId:"client-libraries-java",id:"client-libraries-java",title:"Pulsar Java client",description:"You can use a Pulsar Java client to create Pulsar producers, consumers, and readers in Java and perform administrative tasks. All the methods in Java clients are thread-safe. The current Java client version is 3.1.0.",source:"@site/docs/client-libraries-java.md",sourceDirName:".",slug:"/client-libraries-java",permalink:"/docs/next/client-libraries-java",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-java.md",tags:[],version:"current",frontMatter:{id:"client-libraries-java",title:"Pulsar Java client",sidebar_label:"Java"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/next/client-libraries"},next:{title:"Set up",permalink:"/docs/next/client-libraries-java-setup"}},s={},o=[{value:"Get started",id:"get-started",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Reference doc",id:"reference-doc",level:2},{value:"API reference",id:"api-reference",level:4},{value:"More reference",id:"more-reference",level:4}],p={toc:o},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use a Pulsar Java client to create Pulsar ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#producer"},"producers"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#consumer"},"consumers"),", and ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/concepts-clients#reader"},"readers")," in Java and perform ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/admin-api-overview"},"administrative tasks"),". All the methods in Java clients are thread-safe. The current Java client version is ",(0,n.kt)("strong",{parentName:"p"},"3.1.0"),"."),(0,n.kt)("h2",{id:"get-started"},"Get started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-java-setup"},"Set up Java client library")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-java-initialize"},"Initialize a Java client")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-java-use"},"Use a Java client"))),(0,n.kt)("h2",{id:"whats-next"},"What's next?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-clients"},"Work with clients")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-producers"},"Work with producers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-consumers"},"Work with consumers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-readers"},"Work with readers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-tableviews"},"Work with TableView")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/client-libraries-cluster-level-failover"},"Configure cluster-level failover"))),(0,n.kt)("h2",{id:"reference-doc"},"Reference doc"),(0,n.kt)("h4",{id:"api-reference"},"API reference"),(0,n.kt)("p",null,"The following table outlines the API packages and reference docs for Pulsar Java clients."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Package"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Maven Artifact"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/3.1.x"},(0,n.kt)("inlineCode",{parentName:"a"},"org.apache.pulsar.client.api"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Java client API. ",(0,n.kt)("br",null)," See ",(0,n.kt)("a",{parentName:"td",href:"/docs/next/pulsar-api-overview#pulsar-client-apis"},"Client API overview")," for more reference."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C3.1.0%7Cjar"},"org.apache.pulsar:pulsar-client:3.1.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://pulsar.apache.org/api/admin/3.1.x"},(0,n.kt)("inlineCode",{parentName:"a"},"org.apache.pulsar.client.admin"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Java admin API. ",(0,n.kt)("br",null)," See ",(0,n.kt)("a",{parentName:"td",href:"/docs/next/admin-api-overview"},"Admin API overview")," for more reference."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client-admin%7C3.1.0%7Cjar"},"org.apache.pulsar:pulsar-client-admin:3.1.0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"org.apache.pulsar.client.all")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Include both ",(0,n.kt)("inlineCode",{parentName:"td"},"pulsar-client")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"pulsar-client-admin"),".",(0,n.kt)("br",null)," Both ",(0,n.kt)("inlineCode",{parentName:"td"},"pulsar-client")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"pulsar-client-admin")," are independently shaded packages. Consequently, the applications using both ",(0,n.kt)("inlineCode",{parentName:"td"},"pulsar-client")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"pulsar-client-admin")," have redundant shaded classes. It would be troublesome if you introduce new dependencies but forget to update shading rules. ",(0,n.kt)("br",null)," In this case, you can use ",(0,n.kt)("inlineCode",{parentName:"td"},"pulsar-client-all"),", which shades dependencies only one time and reduces the size of dependencies."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client-all%7C3.1.0%7Cjar"},"org.apache.pulsar:pulsar-client-all:3.1.0"))))),(0,n.kt)("h4",{id:"more-reference"},"More reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"pathname:///reference/#/next/client/"},"Java client configurations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/release-notes/client-java"},"Release notes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/client-feature-matrix/"},"Client feature matrix"))))}u.isMDXComponent=!0}}]);