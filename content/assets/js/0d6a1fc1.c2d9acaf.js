"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[87701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={id:"setup-building",title:"Setup and Building",sidebar_label:"Setup and Building"},l=void 0,s={unversionedId:"getting-started/setup-building",id:"getting-started/setup-building",title:"Setup and Building",description:"Prerequisites",source:"@site/contribute/getting-started/setup-building.md",sourceDirName:"getting-started",slug:"/getting-started/setup-building",permalink:"/contribute/getting-started/setup-building",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/getting-started/setup-building.md",tags:[],version:"current",lastUpdatedBy:"Pulsar Site Updater",lastUpdatedAt:1667865708,formattedLastUpdatedAt:"Nov 8, 2022",frontMatter:{id:"setup-building",title:"Setup and Building",sidebar_label:"Setup and Building"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/contribute/category/getting-started"},next:{title:"Setup IDE",permalink:"/contribute/getting-started/setup-ide"}},o={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone",id:"clone",level:2},{value:"Build",id:"build",level:2},{value:"Run unit tests",id:"run-unit-tests",level:2},{value:"Start standalone Pulsar service",id:"start-standalone-pulsar-service",level:2},{value:"Connect to the standalone service:",id:"connect-to-the-standalone-service",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dependency"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Git"),(0,r.kt)("td",{parentName:"tr",align:null},"The source code of Pulsar is hosted on GitHub as a git repository. To work with the git repository, please ",(0,r.kt)("a",{parentName:"td",href:"https://git-scm.com/downloads"},"install git"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JDK"),(0,r.kt)("td",{parentName:"tr",align:null},"The source code of Pulsar is almost written in Java. Therefore, you need a working Java Development Kit (JDK) to build it. Pulsar requires ",(0,r.kt)("a",{parentName:"td",href:"https://adoptium.net/temurin/releases/?version=17"},"JDK 17")," to build.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maven"),(0,r.kt)("td",{parentName:"tr",align:null},"The source code of Pulsar is managed by ",(0,r.kt)("a",{parentName:"td",href:"https://maven.apache.org/"},"Apache Maven")," The required Maven version is 3.6.1+.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Zip"),(0,r.kt)("td",{parentName:"tr",align:null},"The build process requires Zip as a utility tool.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This project includes a ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/wrapper/"},"Maven Wrapper")," that can be used instead of a system installed Maven. Use it by replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"./mvnw")," on Linux and ",(0,r.kt)("inlineCode",{parentName:"p"},"mvnw.cmd")," on Windows in the commands below.")),(0,r.kt)("h2",{id:"clone"},"Clone"),(0,r.kt)("p",null,"Clone the source code to your development machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/pulsar\n")),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,"Compile and install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean install -DskipTests\n")),(0,r.kt)("h2",{id:"run-unit-tests"},"Run unit tests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn test\n")),(0,r.kt)("p",null,"Run individual unit test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# mvn -pl <module-name> test -Dtest=<unit-test-name> # for example:\nmvn -pl pulsar-client test -Dtest=ConsumerBuilderImplTest\n")),(0,r.kt)("h2",{id:"start-standalone-pulsar-service"},"Start standalone Pulsar service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar standalone\n")),(0,r.kt)("h2",{id:"connect-to-the-standalone-service"},"Connect to the standalone service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-shell\n")))}d.isMDXComponent=!0}}]);