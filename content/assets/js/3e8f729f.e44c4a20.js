"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1194],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),f=n,c=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return a?r.createElement(c,o(o({ref:t},d),{},{components:a})):r.createElement(c,o({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},21155:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={id:"tiered-storage-filesystem",title:"Use filesystem offloader with Pulsar",sidebar_label:"Filesystem offloader",original_id:"tiered-storage-filesystem"},o=void 0,i={unversionedId:"tiered-storage-filesystem",id:"version-2.9.x/tiered-storage-filesystem",title:"Use filesystem offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the filesystem offloader and using it with Pulsar.",source:"@site/versioned_docs/version-2.9.x/tiered-storage-filesystem.md",sourceDirName:".",slug:"/tiered-storage-filesystem",permalink:"/docs/2.9.x/tiered-storage-filesystem",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/tiered-storage-filesystem.md",tags:[],version:"2.9.x",frontMatter:{id:"tiered-storage-filesystem",title:"Use filesystem offloader with Pulsar",sidebar_label:"Filesystem offloader",original_id:"tiered-storage-filesystem"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"GCS offloader",permalink:"/docs/2.9.x/tiered-storage-gcs"},next:{title:"Azure BlobStore offloader",permalink:"/docs/2.9.x/tiered-storage-azure"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure filesystem offloader driver",id:"configure-filesystem-offloader-driver",level:3},{value:"Offloader driver (required)",id:"offloader-driver-required",level:4},{value:"Connection address (required)",id:"connection-address-required",level:4},{value:"Example",id:"example",level:5},{value:"Hadoop profile path (required)",id:"hadoop-profile-path-required",level:4},{value:"Example",id:"example-1",level:5},{value:"Configure filesystem offloader to run automatically",id:"configure-filesystem-offloader-to-run-automatically",level:3},{value:"Example",id:"example-2",level:4},{value:"Configure filesystem offloader to run manually",id:"configure-filesystem-offloader-to-run-manually",level:3},{value:"Example",id:"example-3",level:4},{value:"Tutorial",id:"tutorial",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This chapter guides you through every step of installing and configuring the filesystem offloader and using it with Pulsar."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Follow the steps below to install the filesystem offloader."),(0,n.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pulsar: 2.4.2 or later versions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hadoop: 3.x.x"))),(0,n.kt)("h3",{id:"step"},"Step"),(0,n.kt)("p",null,"This example uses Pulsar 2.5.1."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the Pulsar tarball using one of the following ways:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download from the ",(0,n.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz"},"Apache mirror"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download from the Pulsar ",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/download"},"download page"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz\n\n"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package. "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nwget https://downloads.apache.org/pulsar/pulsar-2.5.1/apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\ntar xvfz apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\n")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,n.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,n.kt)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8S and DCOS), you can use the ",(0,n.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,n.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,n.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the Pulsar offloaders as ",(0,n.kt)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"\nmv apache-pulsar-offloaders-2.5.1/offloaders apache-pulsar-2.5.1/offloaders\n\nls offloaders\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Output")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.5.1.nar\ntiered-storage-jcloud-2.5.1.nar\n\n")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,n.kt)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,n.kt)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,n.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,n.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,n.kt)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Before offloading data from BookKeeper to filesystem, you need to configure some properties of the filesystem offloader driver. ")),(0,n.kt)("p",null,"Besides, you can also configure the filesystem offloader to run it automatically or trigger it manually."),(0,n.kt)("h3",{id:"configure-filesystem-offloader-driver"},"Configure filesystem offloader driver"),(0,n.kt)("p",null,"You can configure filesystem offloader driver in the configuration file ",(0,n.kt)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Required configuration"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,n.kt)("td",{parentName:"tr",align:null},"Offloader driver name, which is case-insensitive."),(0,n.kt)("td",{parentName:"tr",align:null},"filesystem")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"fileSystemURI")),(0,n.kt)("td",{parentName:"tr",align:null},"Connection address"),(0,n.kt)("td",{parentName:"tr",align:null},"hdfs://127.0.0.1:9000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"fileSystemProfilePath")),(0,n.kt)("td",{parentName:"tr",align:null},"Hadoop profile path"),(0,n.kt)("td",{parentName:"tr",align:null},"conf/filesystem_offload_core_site.xml"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Optional configuration"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,n.kt)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,n.kt)("td",{parentName:"tr",align:null},"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,n.kt)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,n.kt)("td",{parentName:"tr",align:null},"5000")))))),(0,n.kt)("h4",{id:"offloader-driver-required"},"Offloader driver (required)"),(0,n.kt)("p",null,"Offloader driver name, which is case-insensitive."),(0,n.kt)("p",null,"This example sets the offloader driver name as ",(0,n.kt)("em",{parentName:"p"},"filesystem"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadDriver=filesystem\n\n")),(0,n.kt)("h4",{id:"connection-address-required"},"Connection address (required)"),(0,n.kt)("p",null,"Connection address is the URI to access the default Hadoop distributed file system. "),(0,n.kt)("h5",{id:"example"},"Example"),(0,n.kt)("p",null,"This example sets the connection address as ",(0,n.kt)("em",{parentName:"p"},"hdfs://127.0.0.1:9000"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"\nfileSystemURI=hdfs://127.0.0.1:9000\n\n")),(0,n.kt)("h4",{id:"hadoop-profile-path-required"},"Hadoop profile path (required)"),(0,n.kt)("p",null,"The configuration file is stored in the Hadoop profile path. It contains various settings for Hadoop performance tuning."),(0,n.kt)("h5",{id:"example-1"},"Example"),(0,n.kt)("p",null,"This example sets the Hadoop profile path as ",(0,n.kt)("em",{parentName:"p"},"conf/filesystem_offload_core_site.xml"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"\nfileSystemProfilePath=conf/filesystem_offload_core_site.xml\n\n")),(0,n.kt)("p",null,"You can set the following configurations in the ",(0,n.kt)("em",{parentName:"p"},"filesystem_offload_core_site.xml")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\n<property>\n    <name>fs.defaultFS</name>\n    <value></value>\n</property>\n\n<property>\n    <name>hadoop.tmp.dir</name>\n    <value>pulsar</value>\n</property>\n\n<property>\n    <name>io.file.buffer.size</name>\n    <value>4096</value>\n</property>\n\n<property>\n    <name>io.seqfile.compress.blocksize</name>\n    <value>1000000</value>\n</property>\n<property>\n\n    <name>io.seqfile.compression.type</name>\n    <value>BLOCK</value>\n</property>\n\n<property>\n    <name>io.map.index.interval</name>\n    <value>128</value>\n</property>\n\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For more information about the Hadoop HDFS, see ",(0,n.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/current/"},"here"),".")),(0,n.kt)("h3",{id:"configure-filesystem-offloader-to-run-automatically"},"Configure filesystem offloader to run automatically"),(0,n.kt)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offload operation is triggered automatically. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Threshold value"),(0,n.kt)("th",{parentName:"tr",align:null},"Action"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"> 0"),(0,n.kt)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"= 0"),(0,n.kt)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"< 0"),(0,n.kt)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,n.kt)("p",null,"Automatic offload runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."),(0,n.kt)("p",null,"You can configure the threshold size using CLI tools, such as pulsar-admin."),(0,n.kt)("h4",{id:"example-2"},"Example"),(0,n.kt)("p",null,"This example sets the filesystem offloader threshold size to 10 MB using pulsar-admin."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For more information about the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, default values, and shorthands, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-pulsar-admin#set-offload-threshold"},"here"),". ")),(0,n.kt)("h3",{id:"configure-filesystem-offloader-to-run-manually"},"Configure filesystem offloader to run manually"),(0,n.kt)("p",null,"For individual topics, you can trigger filesystem offloader manually using one of the following methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use REST endpoint.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin). "))),(0,n.kt)("p",null,"To trigger via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are offloaded to the filesystem until the threshold is no longer exceeded. Older segments are offloaded first."),(0,n.kt)("h4",{id:"example-3"},"Example"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This example triggers the filesystem offloader to run manually using pulsar-admin."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload --size-threshold 10M persistent://my-tenant/my-namespace/topic1\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Output")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For more information about the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, default values, and shorthands, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-pulsar-admin#offload"},"here"),". "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This example checks filesystem offloader status using pulsar-admin."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Output")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,n.kt)("p",{parentName:"li"},"To wait for the filesystem to complete the job, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"-w")," flag."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Output")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,n.kt)("p",{parentName:"li"},"If there is an error in the offloading operation, the error is propagated to the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Output")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n")))),(0,n.kt)("p",null,"`"),(0,n.kt)("p",null,"  :::tip"),(0,n.kt)("p",null,"  For more information about the ",(0,n.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, default values, and shorthands, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-pulsar-admin#offload-status"},"here"),". "),(0,n.kt)("p",null,"  :::"),(0,n.kt)("h2",{id:"tutorial"},"Tutorial"),(0,n.kt)("p",null,"For the complete and step-by-step instructions on how to use the filesystem offloader with Pulsar, see ",(0,n.kt)("a",{parentName:"p",href:"https://hub.streamnative.io/offloaders/filesystem/2.5.1"},"here"),"."))}m.isMDXComponent=!0}}]);