"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[49453],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,m=d["".concat(g,".").concat(s)]||d[s]||y[s]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},18727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={id:"io-alluxio",title:"Alluxio sink connector",sidebar_label:"Alluxio sink connector"},i=void 0,o={unversionedId:"io-alluxio",id:"io-alluxio",title:"Alluxio sink connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/docs/io-alluxio.md",sourceDirName:".",slug:"/io-alluxio",permalink:"/docs/next/io-alluxio",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/io-alluxio.md",tags:[],version:"current",frontMatter:{id:"io-alluxio",title:"Alluxio sink connector",sidebar_label:"Alluxio sink connector"}},g={},p=[{value:"Sink",id:"sink",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],u={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,r.yg)("a",{parentName:"p",href:"pathname:///download"},"download page"),".")),(0,r.yg)("h2",{id:"sink"},"Sink"),(0,r.yg)("p",null,"The Alluxio sink connector pulls messages from Pulsar topics and persists the messages to an Alluxio directory."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration of the Alluxio sink connector has the following properties."),(0,r.yg)("h3",{id:"property"},"Property"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"alluxioMasterHost")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The hostname of Alluxio master.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"alluxioMasterPort")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"19998"),(0,r.yg)("td",{parentName:"tr",align:null},"The port that Alluxio master node runs on.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"alluxioDir")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The Alluxio directory from which files should be read from or written to.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"securityLoginUser")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"When ",(0,r.yg)("inlineCode",{parentName:"td"},"alluxio.security.authentication.type")," is set to ",(0,r.yg)("inlineCode",{parentName:"td"},"SIMPLE")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"CUSTOM"),", user application uses this property to indicate the user requesting Alluxio service. If it is not set explicitly, the OS login user is used.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"filePrefix")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The prefix of the files to create in the Alluxio directory (e.g. a value of 'TopicA' results in files named topicA-, topicA-, etc being produced).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fileExtension")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The extension to add to the files written to Alluxio (e.g. '.txt').")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"lineSeparator")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'"" (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The character used to separate records in a text file. If no value is provided, then the content from all of the records is concatenated together in one continuous byte array.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rotationRecords")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"The number records of Alluxio file rotation.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"rotationInterval")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"-1"),(0,r.yg)("td",{parentName:"tr",align:null},"The interval to rotate a Alluxio file (in milliseconds).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"schemaEnable")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets whether the Sink has to take into account the Schema or if it should simply copy the raw message to Alluxio.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"writeType")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"MUST_CACHE")),(0,r.yg)("td",{parentName:"tr",align:null},"Default write type when creating Alluxio files. Valid options are ",(0,r.yg)("inlineCode",{parentName:"td"},"MUST_CACHE")," (write only goes to Alluxio and must be stored in Alluxio), ",(0,r.yg)("inlineCode",{parentName:"td"},"CACHE_THROUGH")," (try to cache, write to UnderFS synchronously), ",(0,r.yg)("inlineCode",{parentName:"td"},"THROUGH")," (no cache, write to UnderFS synchronously).")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Before using the Alluxio sink connector, you need to create a configuration file in the path you will start Pulsar service (i.e. ",(0,r.yg)("inlineCode",{parentName:"p"},"PULSAR_HOME"),") through one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "alluxioMasterHost": "localhost",\n    "alluxioMasterPort": "19998",\n    "alluxioDir": "pulsar",\n    "filePrefix": "TopicA",\n    "fileExtension": ".txt",\n    "lineSeparator": "\\n",\n    "rotationRecords": "100",\n    "rotationInterval": "-1"\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    alluxioMasterHost: "localhost"\n    alluxioMasterPort: "19998"\n    alluxioDir: "pulsar"\n    filePrefix: "TopicA"\n    fileExtension: ".txt"\n    lineSeparator: "\\n"\n    rotationRecords: 100\n    rotationInterval: "-1"\n')))))}y.isMDXComponent=!0}}]);