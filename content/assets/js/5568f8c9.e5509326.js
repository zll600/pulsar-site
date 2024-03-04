"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[25701],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>y});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=t.createContext({}),p=function(e){var n=t.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(g.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,y=m["".concat(g,".").concat(d)]||m[d]||u[d]||l;return a?t.createElement(y,i(i({ref:n},s),{},{components:a})):t.createElement(y,i({ref:n},s))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90699:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const l={id:"io-file-source",title:"File source connector",sidebar_label:"File source connector"},i=void 0,o={unversionedId:"io-file-source",id:"version-3.1.x/io-file-source",title:"File source connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/versioned_docs/version-3.1.x/io-file-source.md",sourceDirName:".",slug:"/io-file-source",permalink:"/docs/3.1.x/io-file-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/io-file-source.md",tags:[],version:"3.1.x",frontMatter:{id:"io-file-source",title:"File source connector",sidebar_label:"File source connector"}},g={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}],s={toc:p},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,r.yg)("a",{parentName:"p",href:"pathname:///download"},"download page"),".")),(0,r.yg)("p",null,"The File source connector pulls messages from files in directories and persists the messages to Pulsar topics."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration of the file source connector has the following properties."),(0,r.yg)("h3",{id:"property"},"Property"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"inputDirectory")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"No default value"),(0,r.yg)("td",{parentName:"tr",align:null},"The input directory to pull files.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"recurse")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to pull files from subdirectory or not.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"keepFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"If set to true, the file is not deleted after it is processed, which means the file can be picked up continually.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"fileFilter")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("sup",{parentName:"td",id:"fnref-\\\\."},(0,r.yg)("a",{parentName:"sup",href:"#fn-\\\\.",className:"footnote-ref"},"\\\\.")),".*"),(0,r.yg)("td",{parentName:"tr",align:null},"The file whose name matches the given regular expression is picked up.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pathFilter")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"If ",(0,r.yg)("inlineCode",{parentName:"td"},"recurse")," is set to true, the subdirectory whose path matches the given regular expression is scanned.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"minimumFileAge")),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The minimum age that a file can be processed. ",(0,r.yg)("br",null),(0,r.yg)("br",null),"Any file younger than ",(0,r.yg)("inlineCode",{parentName:"td"},"minimumFileAge")," (according to the last modification date) is ignored.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"maximumFileAge")),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Long.MAX_VALUE"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum age that a file can be processed. ",(0,r.yg)("br",null),(0,r.yg)("br",null),"Any file older than ",(0,r.yg)("inlineCode",{parentName:"td"},"maximumFileAge")," (according to last modification date) is ignored.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"minimumSize")),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"The minimum size (in bytes) that a file can be processed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"maximumSize")),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Double.MAX_VALUE"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum size (in bytes) that a file can be processed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ignoreHiddenFiles")),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the hidden files should be ignored or not.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pollingInterval")),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"10000L"),(0,r.yg)("td",{parentName:"tr",align:null},"Indicates how long to wait before performing a directory listing.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"numWorkers")),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of worker threads that process files.",(0,r.yg)("br",null),(0,r.yg)("br",null)," This allows you to process a larger number of files concurrently. ",(0,r.yg)("br",null),(0,r.yg)("br",null),"However, setting this to a value greater than 1 makes the data from multiple files mixed in the target topic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"processedFileSuffix")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"NULL"),(0,r.yg)("td",{parentName:"tr",align:null},"If set, do not delete but only rename file that has been processed. ",(0,r.yg)("br",null),(0,r.yg)("br",null),"  This config only work when 'keepFile' property is false.")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Before using the File source connector, you need to create a configuration file through one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "inputDirectory": "/Users/david",\n      "recurse": true,\n      "keepFile": true,\n      "fileFilter": "[^\\\\.].*",\n      "pathFilter": ".*",\n      "minimumFileAge": 0,\n      "maximumFileAge": 9999999999,\n      "minimumSize": 1,\n      "maximumSize": 5000000,\n      "ignoreHiddenFiles": true,\n      "pollingInterval": 5000,\n      "numWorkers": 1,\n      "processedFileSuffix": ".processed_done"\n   }\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    inputDirectory: "/Users/david"\n    recurse: true\n    keepFile: true\n    fileFilter: "[^\\\\.].*"\n    pathFilter: ".*"\n    minimumFileAge: 0\n    maximumFileAge: 9999999999\n    minimumSize: 1\n    maximumSize: 5000000\n    ignoreHiddenFiles: true\n    pollingInterval: 5000\n    numWorkers: 1\n    processedFileSuffix: ".processed_done"\n')))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"Here is an example of using the File source connecter."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Pull a Pulsar image."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker pull apachepulsar/pulsar:{version}\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start Pulsar standalone."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-standalone apachepulsar/pulsar:{version} bin/pulsar standalone\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a configuration file ",(0,r.yg)("em",{parentName:"p"},"file-connector.yaml"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    inputDirectory: "/opt"\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the configuration file ",(0,r.yg)("em",{parentName:"p"},"file-connector.yaml")," to the container."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker cp connectors/file-connector.yaml pulsar-standalone:/pulsar/\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download the File source connector."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -O https://mirrors.tuna.tsinghua.edu.cn/apache/pulsar/pulsar-{version}/connectors/pulsar-io-file-{version}.nar\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy it to the ",(0,r.yg)("inlineCode",{parentName:"p"},"connectors")," folder, then restart the container."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker cp pulsar-io-file-{version}.nar pulsar-standalone:/pulsar/connectors/\ndocker restart pulsar-standalone\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start the File source connector."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker exec -it pulsar-standalone /bin/bash\n\n./bin/pulsar-admin sources localrun \\\n   --archive /pulsar/connectors/pulsar-io-file-{version}.nar \\\n   --name file-test \\\n   --destination-topic-name  pulsar-file-test \\\n   --source-config-file /pulsar/file-connector.yaml\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start a consumer."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar-client consume -s file-test -n 0 pulsar-file-test\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Write the message to the file ",(0,r.yg)("em",{parentName:"p"},"test.txt"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'echo "hello world!" > /opt/test.txt\n')),(0,r.yg)("p",{parentName:"li"},"The following information appears on the consumer terminal window."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"----- got message -----\nhello world!\n")))))}u.isMDXComponent=!0}}]);