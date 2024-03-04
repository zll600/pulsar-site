"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[19691],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=r.createContext({}),p=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=p(e.components);return r.createElement(g.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),s=p(t),u=a,m=s["".concat(g,".").concat(u)]||s[u]||d[u]||l;return t?r.createElement(m,i(i({ref:n},y),{},{components:t})):r.createElement(m,i({ref:n},y))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},23295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={id:"io-hdfs3-sink",title:"HDFS3 sink connector",sidebar_label:"HDFS3 sink connector",original_id:"io-hdfs3-sink"},i=void 0,o={unversionedId:"io-hdfs3-sink",id:"version-2.8.x/io-hdfs3-sink",title:"HDFS3 sink connector",description:"The HDFS3 sink connector pulls the messages from Pulsar topics",source:"@site/versioned_docs/version-2.8.x/io-hdfs3-sink.md",sourceDirName:".",slug:"/io-hdfs3-sink",permalink:"/docs/2.8.x/io-hdfs3-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/io-hdfs3-sink.md",tags:[],version:"2.8.x",frontMatter:{id:"io-hdfs3-sink",title:"HDFS3 sink connector",sidebar_label:"HDFS3 sink connector",original_id:"io-hdfs3-sink"}},g={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3}],y={toc:p},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The HDFS3 sink connector pulls the messages from Pulsar topics\nand persists the messages to HDFS files."),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"The configuration of the HDFS3 sink connector has the following properties."),(0,a.yg)("h3",{id:"property"},"Property"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"hdfsConfigResources")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"A file or a comma-separated list containing the Hadoop file system configuration.",(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("strong",{parentName:"td"},"Example"),(0,a.yg)("br",null),"'core-site.xml'",(0,a.yg)("br",null),"'hdfs-site.xml'")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"directory")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The HDFS directory where files read from or written to.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"encoding")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The character encoding for the files.",(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("strong",{parentName:"td"},"Example"),(0,a.yg)("br",null),"UTF-8",(0,a.yg)("br",null),"ASCII")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"compression")),(0,a.yg)("td",{parentName:"tr",align:null},"Compression"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The compression code used to compress or de-compress the files on HDFS. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"Below are the available options:",(0,a.yg)("br",null),(0,a.yg)("li",null,"BZIP2",(0,a.yg)("br",null)),(0,a.yg)("li",null,"DEFLATE",(0,a.yg)("br",null)),(0,a.yg)("li",null,"GZIP",(0,a.yg)("br",null)),(0,a.yg)("li",null,"LZ4",(0,a.yg)("br",null)),(0,a.yg)("li",null,"SNAPPY"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"kerberosUserPrincipal")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The principal account of Kerberos user used for authentication.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"keytab")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The full pathname of the Kerberos keytab file used for authentication.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"filenamePrefix")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The prefix of the files created inside the HDFS directory.",(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("strong",{parentName:"td"},"Example"),(0,a.yg)("br",null)," The value of topicA result in files named topicA-.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"fileExtension")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The extension added to the files written to HDFS.",(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("strong",{parentName:"td"},"Example"),(0,a.yg)("br",null),"'.txt'",(0,a.yg)("br",null)," '.seq'")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"separator")),(0,a.yg)("td",{parentName:"tr",align:null},"char"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"None"),(0,a.yg)("td",{parentName:"tr",align:null},"The character used to separate records in a text file. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"If no value is provided, the contents from all records are concatenated together in one continuous byte array.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"syncInterval")),(0,a.yg)("td",{parentName:"tr",align:null},"long"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"0"),(0,a.yg)("td",{parentName:"tr",align:null},"The interval between calls to flush data to HDFS disk in milliseconds.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"maxPendingRecords")),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"Integer.MAX_VALUE"),(0,a.yg)("td",{parentName:"tr",align:null},"The maximum number of records that hold in memory before acking. ",(0,a.yg)("br",null),(0,a.yg)("br",null),"Setting this property to 1 makes every record send to disk before the record is acked.",(0,a.yg)("br",null),(0,a.yg)("br",null),"Setting this property to a higher value allows buffering records before flushing them to disk.")))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"Before using the HDFS3 sink connector, you need to create a configuration file through one of the following methods."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"JSON"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "hdfsConfigResources": "core-site.xml",\n    "directory": "/foo/bar",\n    "filenamePrefix": "prefix",\n    "compression": "SNAPPY"\n}\n\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"YAML"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    hdfsConfigResources: "core-site.xml"\n    directory: "/foo/bar"\n    filenamePrefix: "prefix"\n    compression: "SNAPPY"\n\n')))))}d.isMDXComponent=!0}}]);