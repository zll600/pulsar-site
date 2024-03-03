"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[89204],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),d=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=d(e.components);return n.createElement(p.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,y=u["".concat(p,".").concat(m)]||u[m]||g[m]||l;return t?n.createElement(y,o(o({ref:a},s),{},{components:t})):n.createElement(y,o({ref:a},s))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90845:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=t(58168),r=(t(96540),t(15680));const l={id:"tiered-storage-aliyun",title:"Use Aliyun OSS offloader with Pulsar",sidebar_label:"Aliyun OSS offloader",description:"Learn to install and configure Aliyun OSS offloader with Pulsar."},o=void 0,i={unversionedId:"tiered-storage-aliyun",id:"version-3.2.x/tiered-storage-aliyun",title:"Use Aliyun OSS offloader with Pulsar",description:"Learn to install and configure Aliyun OSS offloader with Pulsar.",source:"@site/versioned_docs/version-3.2.x/tiered-storage-aliyun.md",sourceDirName:".",slug:"/tiered-storage-aliyun",permalink:"/docs/3.2.x/tiered-storage-aliyun",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/tiered-storage-aliyun.md",tags:[],version:"3.2.x",frontMatter:{id:"tiered-storage-aliyun",title:"Use Aliyun OSS offloader with Pulsar",sidebar_label:"Aliyun OSS offloader",description:"Learn to install and configure Aliyun OSS offloader with Pulsar."},sidebar:"docsSidebar",previous:{title:"Azure BlobStore offloader",permalink:"/docs/3.2.x/tiered-storage-azure"},next:{title:"S3 offloader",permalink:"/docs/3.2.x/tiered-storage-s3"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Steps",id:"steps",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure Aliyun OSS offloader driver",id:"configure-aliyun-oss-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Endpoint (required)",id:"endpoint-required",level:4},{value:"Example",id:"example-1",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Run Aliyun OSS offloader automatically",id:"run-aliyun-oss-offloader-automatically",level:3},{value:"Example",id:"example-2",level:4},{value:"Run Aliyun OSS offloader manually",id:"run-aliyun-oss-offloader-manually",level:3},{value:"Example",id:"example-3",level:4}],s={toc:d},u="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This chapter guides you through every step of installing and configuring the Aliyun Object Storage Service (OSS) offloader and using it with Pulsar."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pulsar: 2.8.0 or later versions")),(0,r.yg)("h3",{id:"steps"},"Steps"),(0,r.yg)("p",null,"Follow the steps below to install the Aliyun OSS offloader."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.2.x/getting-started-standalone#download-pulsar-distribution"},"Download the Pulsar tarball"),"."),(0,r.yg)("li",{parentName:"ol"},"Download and untar the Pulsar offloaders package, then copy the Pulsar offloaders as ",(0,r.yg)("inlineCode",{parentName:"li"},"offloaders")," in the Pulsar directory. See ",(0,r.yg)("a",{parentName:"li",href:"/docs/3.2.x/tiered-storage-overview#how-to-install-tiered-storage-offloaders"},"Install tiered storage offloaders"),".")),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Before offloading data from BookKeeper to Aliyun OSS, you need to configure some properties of the Aliyun OSS offload driver. Besides, you can also configure the Aliyun OSS offloader to run it automatically or trigger it manually.")),(0,r.yg)("h3",{id:"configure-aliyun-oss-offloader-driver"},"Configure Aliyun OSS offloader driver"),(0,r.yg)("p",null,"You can configure the Aliyun OSS offloader driver in the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Required configuration"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Example value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,r.yg)("td",{parentName:"tr",align:null},"Offloader driver name, which is case-insensitive."),(0,r.yg)("td",{parentName:"tr",align:null},"aliyun-oss")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,r.yg)("td",{parentName:"tr",align:null},"Offloader directory"),(0,r.yg)("td",{parentName:"tr",align:null},"offloaders")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadBucket")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#bucket-required"},"Bucket")),(0,r.yg)("td",{parentName:"tr",align:null},"pulsar-topic-offload")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadServiceEndpoint")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#endpoint-required"},"Endpoint")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"http://oss-cn-hongkong.aliyuncs.com"},"http://oss-cn-hongkong.aliyuncs.com")))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Optional"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,r.yg)("td",{parentName:"tr",align:null},"Block size for each individual read when reading back data from S3-compatible storage."),(0,r.yg)("td",{parentName:"tr",align:null},"1 MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum block size sent during a multi-part upload to S3-compatible storage. It ",(0,r.yg)("strong",{parentName:"td"},"cannot")," be smaller than 5 MB."),(0,r.yg)("td",{parentName:"tr",align:null},"64 MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic.",(0,r.yg)("br",null),(0,r.yg)("br",null),"It's ",(0,r.yg)("strong",{parentName:"td"},"not")," recommended to change the default value in a production environment."),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note"),": It's ",(0,r.yg)("strong",{parentName:"td"},"not")," recommended to change the default value in a production environment."),(0,r.yg)("td",{parentName:"tr",align:null},"50000")))))),(0,r.yg)("h4",{id:"bucket-required"},"Bucket (required)"),(0,r.yg)("p",null,"A bucket is a basic container that holds your data. Everything you store in Aliyun OSS must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike a directory and folder, you cannot nest a bucket."),(0,r.yg)("h5",{id:"example"},"Example"),(0,r.yg)("p",null,"This example names the bucket ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-topic-offload"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},"managedLedgerOffloadBucket=pulsar-topic-offload\n")),(0,r.yg)("h4",{id:"endpoint-required"},"Endpoint (required)"),(0,r.yg)("p",null,"The endpoint is the region where a bucket is located."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about Aliyun OSS regions and endpoints,  see ",(0,r.yg)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/31837.htm"},"International website")," or ",(0,r.yg)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/31837.html"},"Chinese website"),".")),(0,r.yg)("h5",{id:"example-1"},"Example"),(0,r.yg)("p",null,"This example sets the endpoint as ",(0,r.yg)("inlineCode",{parentName:"p"},"oss-us-west-1-internal"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},"managedLedgerOffloadServiceEndpoint=http://oss-us-west-1-internal.aliyuncs.com\n")),(0,r.yg)("h4",{id:"authentication-required"},"Authentication (required)"),(0,r.yg)("p",null,"To be able to access Aliyun OSS, you need to authenticate with Aliyun OSS."),(0,r.yg)("p",null,"Set the environment variables ",(0,r.yg)("inlineCode",{parentName:"p"},"ALIYUN_OSS_ACCESS_KEY_ID")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ALIYUN_OSS_ACCESS_KEY_SECRET")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export ALIYUN_OSS_ACCESS_KEY_ID=ABC123456789\nexport ALIYUN_OSS_ACCESS_KEY_SECRET=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Exporting these environment variables makes them available in the environment of spawned processes.")),(0,r.yg)("h3",{id:"run-aliyun-oss-offloader-automatically"},"Run Aliyun OSS offloader automatically"),(0,r.yg)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored in a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Threshold value"),(0,r.yg)("th",{parentName:"tr",align:null},"Action"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"> 0"),(0,r.yg)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"= 0"),(0,r.yg)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"< 0"),(0,r.yg)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,r.yg)("p",null,"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, the offloader does not work until the current segment is full."),(0,r.yg)("p",null,"You can configure the threshold size using CLI tools, such as ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin")),"."),(0,r.yg)("p",null,"The offload configurations in ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"standalone.conf")," are used for the namespaces that do not have namespace-level offload policies. Each namespace can have its offload policy. If you want to set an offload policy for a specific namespace, use the command ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/namespaces?id=set-offload-policies"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-offload-policies options"))," command."),(0,r.yg)("h4",{id:"example-2"},"Example"),(0,r.yg)("p",null,"This example sets the Aliyun OSS offloader threshold size to 10 MB using ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, and default values, see ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"Pulsar admin docs"),".")),(0,r.yg)("h3",{id:"run-aliyun-oss-offloader-manually"},"Run Aliyun OSS offloader manually"),(0,r.yg)("p",null,"For individual topics, you can trigger the Aliyun OSS offloader manually using one of the following methods:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use REST endpoint.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use CLI tools, such as ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin")),"."),(0,r.yg)("p",{parentName:"li"},"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained in a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to Aliyun OSS until the threshold is no longer exceeded. Older segments are moved first."))),(0,r.yg)("h4",{id:"example-3"},"Example"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"This example triggers the Aliyun OSS offloader to run manually using ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Offload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n")),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, and default values, see ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"Pulsar admin docs"),"."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"This example checks the Aliyun OSS offloader status using ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Offload is currently running\n")),(0,r.yg)("p",{parentName:"li"},"To wait for the Aliyun OSS offloader to complete the job, add the ",(0,r.yg)("inlineCode",{parentName:"p"},"-w")," flag."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Offload was a success\n")),(0,r.yg)("p",{parentName:"li"},"If there is an error in offloading, the error is propagated to the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"Error in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n")),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, and default values, see ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"Pulsar admin docs"),".")))))}g.isMDXComponent=!0}}]);