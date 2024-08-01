"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[24561],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,y=u["".concat(p,".").concat(g)]||u[g]||d[g]||l;return n?t.createElement(y,i(i({ref:a},c),{},{components:n})):t.createElement(y,i({ref:a},c))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},59722:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var t=n(58168),r=(n(96540),n(15680));const l={id:"client-libraries-java-setup",title:"Set up Java client",sidebar_label:"Set up",description:"Learn how to set up Java client library in Pulsar."},i=void 0,o={unversionedId:"client-libraries-java-setup",id:"version-3.3.x/client-libraries-java-setup",title:"Set up Java client",description:"Learn how to set up Java client library in Pulsar.",source:"@site/versioned_docs/version-3.3.x/client-libraries-java-setup.md",sourceDirName:".",slug:"/client-libraries-java-setup",permalink:"/docs/3.3.x/client-libraries-java-setup",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.3.x/client-libraries-java-setup.md",tags:[],version:"3.3.x",frontMatter:{id:"client-libraries-java-setup",title:"Set up Java client",sidebar_label:"Set up",description:"Learn how to set up Java client library in Pulsar."},sidebar:"docsSidebar",previous:{title:"Java",permalink:"/docs/3.3.x/client-libraries-java"},next:{title:"Initialize",permalink:"/docs/3.3.x/client-libraries-java-initialize"}},p={},s=[{value:"Step 1: Install Java client library",id:"step-1-install-java-client-library",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Pulsar BOM",id:"pulsar-bom",level:3},{value:"Maven",id:"maven-1",level:4},{value:"Gradle",id:"gradle-1",level:4},{value:"Step 2: Connect to Pulsar cluster",id:"step-2-connect-to-pulsar-cluster",level:2}],c={toc:s},u="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"To set up Java client in Pulsar, complete the following steps."),(0,r.yg)("h2",{id:"step-1-install-java-client-library"},"Step 1: Install Java client library"),(0,r.yg)("p",null,"The latest version of the Pulsar Java client library is available via ",(0,r.yg)("a",{parentName:"p",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C3.3.1%7Cjar"},"Maven Central"),". To use the latest version, add the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," library to your build configuration."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-client"))," and ",(0,r.yg)("a",{parentName:"li",href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client-admin"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-client-admin"))," shade dependencies via ",(0,r.yg)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-shade-plugin/"},"maven-shade-plugin")," to avoid conflicts of the underlying dependency packages (such as Netty). If you do not want to manage dependency conflicts manually, you can use them."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client-original"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-client-original"))," and ",(0,r.yg)("a",{parentName:"li",href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client-admin-original"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-client-admin-original"))," ",(0,r.yg)("strong",{parentName:"li"},"does not")," shade dependencies. If you want to manage dependencies manually, you can use them."))),(0,r.yg)("h3",{id:"maven"},"Maven"),(0,r.yg)("p",null,"If you use Maven, add the following information to the ",(0,r.yg)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- in your <properties> block --\x3e\n<pulsar.version>3.3.1</pulsar.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-client</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n")),(0,r.yg)("h3",{id:"gradle"},"Gradle"),(0,r.yg)("p",null,"If you use Gradle, add the following information to the ",(0,r.yg)("inlineCode",{parentName:"p"},"build.gradle")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-groovy"},"def pulsarVersion = '3.3.1'\n\ndependencies {\n    implementation \"org.apache.pulsar:pulsar-client:${pulsarVersion}\"\n}\n")),(0,r.yg)("h3",{id:"pulsar-bom"},"Pulsar BOM"),(0,r.yg)("p",null,"While the above dependencies are sufficient to obtain the Pulsar Java client, it is recommended to also use the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pip/pip-326.md"},"Pulsar BOM")," to ensure that all Pulsar dependencies (both direct and transitive) are at the same expected version.\nIn order to use the BOM, the previous directions are modified slightly as follows:"),(0,r.yg)("h4",{id:"maven-1"},"Maven"),(0,r.yg)("p",null,"If you use Maven, add the following information to the ",(0,r.yg)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- in your <properties> block --\x3e\n<pulsar.version>3.3.1</pulsar.version>\n\n\x3c!-- in your <dependencyManagement>/<dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-bom</artifactId>\n  <version>${pulsar.version}</version>\n  <type>pom</type>\n  <scope>import</scope>\n</dependency>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-client</artifactId>\n</dependency>\n")),(0,r.yg)("h4",{id:"gradle-1"},"Gradle"),(0,r.yg)("p",null,"If you use Gradle, add the following information to the ",(0,r.yg)("inlineCode",{parentName:"p"},"build.gradle")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-groovy"},"def pulsarVersion = '3.3.1'\n\ndependencies {\n  implementation enforcedPlatform(\"org.apache.pulsar:pulsar-bom:${pulsarVersion}\")\n  implementation 'org.apache.pulsar:pulsar-client'\n}\n")),(0,r.yg)("p",null,"Note that the version is number for the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," dependency is now omitted as the Pulsar BOM dictates which version is used."),(0,r.yg)("h2",{id:"step-2-connect-to-pulsar-cluster"},"Step 2: Connect to Pulsar cluster"),(0,r.yg)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.3.x/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,r.yg)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,r.yg)("inlineCode",{parentName:"p"},"6650"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,r.yg)("p",null,"If you have multiple brokers, separate ",(0,r.yg)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,r.yg)("p",null,"If you use ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.3.x/security-tls-authentication"},"mTLS")," authentication, add ",(0,r.yg)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")))}d.isMDXComponent=!0}}]);